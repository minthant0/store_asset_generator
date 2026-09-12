import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const appJsxPath = path.join(__dirname, 'src', 'App.jsx');
let appJsx = fs.readFileSync(appJsxPath, 'utf8');

// Strip React import
appJsx = appJsx.replace(/^import React, \{[^\}]+\} from 'react';\r?\n/, '');

// Replace export default function App() with function App()
appJsx = appJsx.replace('export default function App()', 'function App()');

const htmlHeader = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>App Store & Play Store Asset Generator</title>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js"></script>
  <script crossorigin="" src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script crossorigin="" src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <style>
    * { font-family: 'Inter', system-ui, -apple-system, sans-serif; }
    .custom-checkerboard {
      background-color: #050505;
      background-image: radial-gradient(#1f2937 1.5px, transparent 0);
      background-size: 24px 24px;
    }
    .scrollbar-thin::-webkit-scrollbar { width: 6px; height: 6px; }
    .scrollbar-thin::-webkit-scrollbar-thumb { background: #374151; border-radius: 9999px; }
    .scrollbar-none::-webkit-scrollbar { display: none; }
    .scrollbar-none { -ms-overflow-style: none; scrollbar-width: none; }
  </style>
</head>
<body class="bg-gray-950 text-gray-100 overflow-hidden select-none">
<div id="root"></div>
<script type="text/babel">
  const { useState, useEffect, useRef } = React;

`;

const htmlFooter = `
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
</script>
</body>
</html>
`;

const fullHtml = htmlHeader + appJsx.trim() + '\n' + htmlFooter;

const targets = [
  path.join(__dirname, 'index.html'),
  path.join(rootDir, 'assets', 'web_app', 'index.html'),
  path.join(rootDir, 'web', 'asset_generator.html')
];

for (const target of targets) {
  fs.writeFileSync(target, fullHtml, 'utf8');
  console.log(`Successfully synced: ${path.relative(rootDir, target)}`);
}
