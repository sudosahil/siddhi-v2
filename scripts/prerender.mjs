// Prerenders every public route to static HTML after `vite build`, so search
// engines and non-JS crawlers (WhatsApp previews, Bing, AI bots) see real
// content and meta tags instead of an empty <div id="root">.
// Uses React's server renderer — no headless browser, so it runs on any CI.
import { readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { build } from 'vite';

const ROOT = path.resolve(import.meta.dirname, '..');
const DIST = path.join(ROOT, 'dist');
const SSR_DIR = path.join(ROOT, 'dist-ssr');

const routes = [
  '/',
  '/courses',
  '/results',
  '/teachers',
  '/about',
  '/schedule',
  '/admissions',
  '/gallery',
  '/contact',
];

await build({
  root: ROOT,
  logLevel: 'warn',
  build: { ssr: 'src/entry-server.jsx', outDir: 'dist-ssr' },
  // react-helmet-async ships CJS; bundle it so the Node ESM import works.
  ssr: { noExternal: ['react-helmet-async'] },
});

const { render } = await import(pathToFileURL(path.join(SSR_DIR, 'entry-server.js')).href);
const template = await readFile(path.join(DIST, 'index.html'), 'utf8');

for (const route of routes) {
  const { html, helmet } = render(route);

  const headTags = [
    helmet.title.toString(),
    helmet.meta.toString(),
    helmet.link.toString(),
    helmet.script.toString(),
  ].filter(Boolean).join('\n    ');

  const page = template
    // Static fallbacks are superseded by the Helmet-managed tags per route.
    .replace(/<title>.*?<\/title>/s, '')
    .replace(/<meta[^>]*data-seo-fallback[^>]*\/?>/, '')
    .replace('</head>', `  ${headTags}\n  </head>`)
    .replace(
      '<div id="root"></div>',
      // Entry animations render server-side as opacity:0 — make the static
      // snapshot visible for non-JS crawlers; React re-renders on load anyway.
      `<div id="root">${html.replaceAll('opacity:0', 'opacity:1')}</div>`
    );

  const outDir = route === '/' ? DIST : path.join(DIST, route.slice(1));
  await mkdir(outDir, { recursive: true });
  await writeFile(path.join(outDir, 'index.html'), page, 'utf8');
  console.log(`prerendered ${route}`);
}

await rm(SSR_DIR, { recursive: true, force: true });
