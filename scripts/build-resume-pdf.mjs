// Builds the site, serves dist/ locally, and prints /resume/print/ to public/resume.pdf with headless Chrome.
import { spawn, spawnSync } from 'node:child_process';
import { createServer } from 'node:http';
import { existsSync, readFileSync, mkdirSync, statSync, mkdtempSync, rmSync, copyFileSync } from 'node:fs';
import { resolve, dirname, join, extname } from 'node:path';
import { tmpdir } from 'node:os';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const out = resolve(root, 'public', 'resume.pdf');
const chrome = process.env.CHROME_PATH || [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  '/usr/bin/google-chrome',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
].find(existsSync);
if (!chrome) throw new Error('Chrome not found. Set CHROME_PATH.');

const run = (cmd, args, shell = false) => {
  const r = spawnSync(cmd, args, { cwd: root, stdio: 'inherit', shell });
  if (r.status !== 0) throw new Error(`${cmd} ${args.join(' ')} failed`);
};

run('npm', ['run', 'build'], process.platform === 'win32');
mkdirSync(dirname(out), { recursive: true });

// Tiny static server for dist/ under the site base path (avoids clashing with a running `astro preview`).
const base = '/game-design-portfolio';
const dist = resolve(root, 'dist');
const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp', '.woff2': 'font/woff2', '.woff': 'font/woff', '.ico': 'image/x-icon', '.json': 'application/json' };
const server = createServer((req, res) => {
  let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  if (!p.startsWith(base)) { res.writeHead(404).end(); return; }
  p = p.slice(base.length) || '/';
  let f = join(dist, p);
  if (existsSync(f) && statSync(f).isDirectory()) f = join(f, 'index.html');
  if (!f.startsWith(dist) || !existsSync(f)) { res.writeHead(404).end(); return; }
  res.writeHead(200, { 'content-type': types[extname(f)] || 'application/octet-stream' });
  res.end(readFileSync(f));
});
await new Promise((r) => server.listen(0, '127.0.0.1', r));
const port = server.address().port;
const page = `http://127.0.0.1:${port}/game-design-portfolio/resume/print/`;
const profile = mkdtempSync(join(tmpdir(), 'resume-chrome-'));
try {
  // Async spawn (not spawnSync) so the static server can answer Chrome. A throwaway profile avoids
  // handing off to an already-open Chrome window.
  await new Promise((resolveRun, reject) => {
    const c = spawn(chrome, ['--headless=new', '--disable-gpu', `--user-data-dir=${profile}`, '--no-pdf-header-footer', '--virtual-time-budget=5000', `--print-to-pdf=${out}`, page], { stdio: 'inherit' });
    const timer = setTimeout(() => { c.kill(); reject(new Error('Chrome timed out after 60 s')); }, 60000);
    c.on('error', (e) => { clearTimeout(timer); reject(e); });
    c.on('exit', (code) => { clearTimeout(timer); code === 0 ? resolveRun() : reject(new Error(`Chrome exited with ${code}`)); });
  });
} finally {
  server.close();
  rmSync(profile, { recursive: true, force: true });
}

const pdf = readFileSync(out, 'latin1');
const uris = [...pdf.matchAll(/\/URI\s*\(([^)]*)\)/g)].map((m) => m[1]);
console.log(['PDF links:', ...uris.map((u) => '  ' + u)].join(String.fromCharCode(10)));
if (uris.some((u) => /127\.0\.0\.1|localhost/.test(u))) { console.error('PDF contains local URLs.'); process.exit(1); }
const pages = (pdf.match(/\/Type\s*\/Page(?![s\w])/g) || []).length;
console.log(`Wrote ${out}: ${pages} page(s)`);
if (pages !== 1) { console.error('Resume PDF must be exactly 1 page.'); process.exit(1); }
copyFileSync(out, resolve(dist, 'resume.pdf'));
console.log('Copied to dist/resume.pdf');
