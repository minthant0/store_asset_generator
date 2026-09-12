import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const distHtmlPath = path.join(__dirname, 'dist', 'index.html');
if (!fs.existsSync(distHtmlPath)) {
  console.error('Error: dist/index.html not found! Please run "vite build" first.');
  process.exit(1);
}

const distHtml = fs.readFileSync(distHtmlPath, 'utf8');

const targets = [
  path.join(rootDir, 'assets', 'web_app', 'index.html'),
  path.join(rootDir, 'web', 'asset_generator.html'),
  path.join(rootDir, 'build', 'web', 'asset_generator.html')
];

for (const target of targets) {
  const targetDir = path.dirname(target);
  if (fs.existsSync(targetDir)) {
    fs.writeFileSync(target, distHtml, 'utf8');
    console.log(`Successfully synced precompiled bundle to: ${path.relative(rootDir, target)}`);
  }
}
