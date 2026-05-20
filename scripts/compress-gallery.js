import sharp from 'sharp';
import { readdirSync, statSync, readFileSync, writeFileSync } from 'fs';
import { join, extname } from 'path';

const DIR = 'public/gallery';
const EXTS = new Set(['.jpg', '.jpeg', '.png', '.webp']);
const MAX_WIDTH = 1920;
const QUALITY = 82;

function fmt(bytes) {
  return bytes >= 1024 * 1024
    ? `${(bytes / 1024 / 1024).toFixed(1)} MB`
    : `${(bytes / 1024).toFixed(0)} KB`;
}

let files;
try {
  files = readdirSync(DIR).filter(f => EXTS.has(extname(f).toLowerCase()));
} catch {
  console.error(`Folder not found: ${DIR}`);
  process.exit(1);
}

if (files.length === 0) {
  console.log('No images found in public/gallery/ — nothing to compress.');
  process.exit(0);
}

console.log(`Compressing ${files.length} images in ${DIR}...\n`);

let totalBefore = 0, totalAfter = 0;

for (const file of files) {
  const filePath = join(DIR, file);
  const before = statSync(filePath).size;

  const input = readFileSync(filePath);
  const buf = await sharp(input)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .jpeg({ quality: QUALITY })
    .toBuffer();

  writeFileSync(filePath, buf);
  totalBefore += before;
  totalAfter += buf.length;

  const pct = ((before - buf.length) / before * 100).toFixed(0);
  console.log(`  ${file.padEnd(30)} ${fmt(before).padStart(8)}  →  ${fmt(buf.length).padStart(8)}  (${pct}% smaller)`);
}

const saved = fmt(totalBefore - totalAfter);
const pct = ((totalBefore - totalAfter) / totalBefore * 100).toFixed(0);
console.log(`\n  ${files.length} photos · ${fmt(totalBefore)} → ${fmt(totalAfter)} · saved ${saved} (${pct}%)`);
