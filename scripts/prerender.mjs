import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from 'vite';

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const distDir = resolve(projectRoot, 'dist');
const indexPath = resolve(distDir, 'index.html');
const serverEntryPath = resolve(distDir, 'server', 'entry-server.js');

await build({
  root: projectRoot,
  build: {
    ssr: resolve(projectRoot, 'src/entry-server.jsx'),
    outDir: resolve(distDir, 'server'),
    emptyOutDir: false,
    rollupOptions: {
      output: {
        entryFileNames: 'entry-server.js',
      },
    },
  },
  logLevel: 'warn',
});

const [{ render }, template] = await Promise.all([
  import(`${serverEntryPath}?cacheBust=${Date.now()}`),
  readFile(indexPath, 'utf8'),
]);

const appHtml = render();
const marker = '<div id="root"></div>';

if (!template.includes(marker)) {
  throw new Error(`Unable to prerender: ${marker} was not found in dist/index.html.`);
}

const html = template.replace(marker, `<div id="root" data-prerendered="true">${appHtml}</div>`);

await mkdir(distDir, { recursive: true });
await writeFile(indexPath, html, 'utf8');
