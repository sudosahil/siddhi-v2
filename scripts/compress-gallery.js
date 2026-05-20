import sharp from 'sharp';
import { readdirSync, statSync, readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join, extname } from 'path';

const GALLERY_DIR  = 'public/gallery';
const THUMBS_DIR   = 'public/gallery/thumbs';
const MANIFEST     = 'src/data/gallery-manifest.json';
const EXTS         = new Set(['.jpg', '.jpeg', '.png', '.webp']);

const FULL_WIDTH    = 1920;
const THUMB_WIDTH   = 600;
const BLUR_WIDTH    = 20;
const FULL_QUALITY  = 82;
const THUMB_QUALITY = 80;
const BLUR_QUALITY  = 40;

function fmt(bytes) {
  return bytes >= 1024 * 1024
    ? `${(bytes / 1024 / 1024).toFixed(1)} MB`
    : `${(bytes / 1024).toFixed(0)} KB`;
}

// Ensure dirs exist
if (!existsSync(THUMBS_DIR)) mkdirSync(THUMBS_DIR, { recursive: true });

// Load existing manifest
let manifest = [];
if (existsSync(MANIFEST)) {
  manifest = JSON.parse(readFileSync(MANIFEST, 'utf8'));
}
const processed = new Set(
  manifest
    .filter(m => existsSync(join(THUMBS_DIR, m.file)))
    .map(m => m.file)
);

// All gallery images (skip thumbs/ subdirectory)
let allFiles;
try {
  allFiles = readdirSync(GALLERY_DIR)
    .filter(f => EXTS.has(extname(f).toLowerCase()))
    .sort();
} catch {
  console.error(`Folder not found: ${GALLERY_DIR}`);
  process.exit(1);
}

const toProcess = allFiles.filter(f => !processed.has(f));

if (toProcess.length === 0) {
  console.log(`All ${allFiles.length} photos already processed — nothing to do.`);
  process.exit(0);
}

const skipped = allFiles.length - toProcess.length;
console.log(`Processing ${toProcess.length} new photo(s)${skipped > 0 ? ` · ${skipped} already done` : ''}...\n`);

let totalBefore = 0, totalAfter = 0;

for (const file of toProcess) {
  const filePath  = join(GALLERY_DIR, file);
  const thumbPath = join(THUMBS_DIR, file);
  const before    = statSync(filePath).size;
  const input     = readFileSync(filePath);

  // 1 — Full-size compressed (in-place, for lightbox)
  const fullBuf = await sharp(input)
    .resize({ width: FULL_WIDTH, withoutEnlargement: true })
    .jpeg({ quality: FULL_QUALITY })
    .toBuffer();
  writeFileSync(filePath, fullBuf);

  // 2 — Small thumbnail (for grid)
  const thumbBuf = await sharp(input)
    .resize({ width: THUMB_WIDTH, withoutEnlargement: true })
    .jpeg({ quality: THUMB_QUALITY })
    .toBuffer();
  writeFileSync(thumbPath, thumbBuf);

  // 3 — Tiny blur placeholder (base64, ~300 bytes)
  const blurBuf = await sharp(input)
    .resize({ width: BLUR_WIDTH })
    .jpeg({ quality: BLUR_QUALITY })
    .toBuffer();
  const blur = `data:image/jpeg;base64,${blurBuf.toString('base64')}`;

  // 4 — Thumb dimensions (for intrinsic size hint in HTML)
  const { width, height } = await sharp(thumbBuf).metadata();

  // Update manifest (replace existing entry or append)
  const entry = { file, blur, width, height };
  const idx = manifest.findIndex(m => m.file === file);
  if (idx >= 0) manifest[idx] = entry;
  else manifest.push(entry);

  totalBefore += before;
  totalAfter  += fullBuf.length;

  const pct = ((before - fullBuf.length) / before * 100).toFixed(0);
  console.log(
    `  ${file.padEnd(32)} ${fmt(before).padStart(8)} → ${fmt(fullBuf.length).padStart(8)}` +
    `  thumb ${fmt(thumbBuf.length).padStart(7)}  (${pct}% smaller)`
  );
}

// Keep manifest sorted alphabetically
manifest.sort((a, b) => a.file.localeCompare(b.file));
writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2));

const pct = ((totalBefore - totalAfter) / totalBefore * 100).toFixed(0);
console.log(`\n  ${toProcess.length} photo(s) · full: ${fmt(totalBefore)} → ${fmt(totalAfter)} (${pct}% smaller)`);
console.log(`  Manifest written → ${MANIFEST}`);
