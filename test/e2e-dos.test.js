import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdtempSync, cpSync, rmSync, symlinkSync, existsSync, statSync, createReadStream } from 'node:fs';
import http from 'node:http';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.csv': 'text/csv',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml'
};

// Builds the app exactly like the project's own `npm run build`, but inside a
// throwaway copy of the repo (the build script rewrites index.html and copies
// fresh bundles into the repo root, so we keep the working tree clean).
function buildApp() {
  const tmp = mkdtempSync(path.join(tmpdir(), 'polygraph-e2e-'));
  cpSync(ROOT, tmp, {
    recursive: true,
    filter: (src) => {
      const base = path.basename(src);
      return !['node_modules', '.git', 'assets', 'dist', 'images', 'test'].includes(base);
    }
  });
  symlinkSync(path.join(ROOT, 'node_modules'), path.join(tmp, 'node_modules'));
  execFileSync('npm', ['run', 'build'], { cwd: tmp, stdio: 'inherit', timeout: 900000 });
  return { dir: tmp, cleanup: () => rmSync(tmp, { recursive: true, force: true }) };
}

function serveStatic(dir) {
  const server = http.createServer((req, res) => {
    let p = decodeURIComponent((req.url || '/').split('?')[0]);
    if (p === '/') p = '/index.html';
    const file = path.join(dir, path.normalize(p));
    if (!file.startsWith(dir) || !existsSync(file) || !statSync(file).isFile()) {
      res.writeHead(404);
      res.end('not found');
      return;
    }
    res.writeHead(200, { 'Content-Type': MIME[path.extname(file)] || 'application/octet-stream' });
    createReadStream(file).pipe(res);
  });
  return new Promise((resolve) => {
    server.listen(0, '127.0.0.1', () => {
      resolve({
        url: `http://127.0.0.1:${server.address().port}`,
        close: () => new Promise((r) => server.close(r))
      });
    });
  });
}

// Emulates ProfileManager.generateShareableURL(): #profile=<encodeURIComponent(btoa(json))>
function profileFragment(params) {
  const json = JSON.stringify({ p: params });
  const b64 = Buffer.from(json, 'utf8').toString('base64');
  return `#profile=${encodeURIComponent(b64)}`;
}

let app;
let site;
let browser;

before(async () => {
  app = buildApp();
  site = await serveStatic(app.dir);
  browser = await chromium.launch();
}, { timeout: 900000 });

after(async () => {
  if (browser) await browser.close();
  if (site) await site.close();
  if (app) app.cleanup();
});

/**
 * Regression test for the confirmed browser DoS (CWE-400): a shared-profile URL
 * with egoPartners=1e15 / nDegrees=1e9 used to spin an unbounded loop on the main
 * thread (the page never even reached DOMContentLoaded). After the fix the app
 * must still initialize and render a bounded node count.
 */
test('shared-profile numeric params cannot freeze the tab (DoS regression)', async () => {
  const page = await browser.newPage();
  const params = {
    egoPartners: 1e15,
    polyculePct: 100,
    monogamousPct: 0,
    slutPct: 0,
    nDegrees: 1e9,
    maxNodesLimit: 1e9
  };

  await page.goto(site.url + '/index.html' + profileFragment(params), {
    waitUntil: 'domcontentloaded',
    timeout: 30000
  });
  await page.waitForFunction(
    "window.polygraphApp && document.getElementById('stat-renderedNodes') && document.getElementById('stat-renderedNodes').textContent",
    null,
    { timeout: 25000, polling: 200 }
  );
  const nodes = await page.evaluate(() => Number(document.getElementById('stat-renderedNodes').textContent));
  assert.ok(Number.isFinite(nodes) && nodes <= 2100, `rendered node count should be bounded, got ${nodes}`);
  await page.close();
});
