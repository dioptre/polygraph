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
 * Regression test for the confirmed reflected DOM XSS (CWE-79):
 * a shared-profile URL (#profile=...) with a hostile `slutAvgPartners` string used
 * to inject raw HTML into the graph node tooltip innerHTML, executing script on
 * node hover. After the fix the tooltip must escape the label and no injected
 * element/script may run.
 */
test('shared-profile URL params cannot inject HTML into the graph tooltip (DOM XSS regression)', async () => {
  const page = await browser.newPage();
  const params = {
    slutPct: 100,
    polyculePct: 0,
    monogamousPct: 0,
    egoPartners: 3,
    nDegrees: 2,
    slutAvgPartners: '<img src=x onerror="window.__xss_url=1"><script>window.__xss_url2=1</script>'
  };

  await page.goto(site.url + '/index.html' + profileFragment(params), {
    waitUntil: 'domcontentloaded',
    timeout: 30000
  });
  await page.waitForFunction('window.polygraphApp !== undefined', null, { timeout: 20000 });
  await page.waitForTimeout(1500);

  const info = await page.evaluate(() => {
    const v = window.polygraphApp.visualizer;
    if (!v || !v.graph) return null;
    let node = null;
    for (const id of v.graph.nodes()) {
      const a = v.graph.getNodeAttributes(id);
      if (a && a.relationshipType === 'slut' && a.degree === 1) { node = id; break; }
    }
    if (!node) return null;
    const vp = v.renderer.graphToViewport({
      x: v.graph.getNodeAttribute(node, 'x'),
      y: v.graph.getNodeAttribute(node, 'y')
    });
    const c = v.container.getBoundingClientRect();
    return { x: c.left + vp.x, y: c.top + vp.y };
  });
  assert.ok(info, 'a degree-1 slut node must exist so the tooltip can be rendered');

  await page.mouse.move(info.x, info.y, { steps: 5 });
  await page.waitForTimeout(500);

  const result = await page.evaluate(() => ({
    marker: window.__xss_url ?? null,
    marker2: window.__xss_url2 ?? null,
    imgInTooltip: !!document.querySelector('#graph-tooltip img, #graph-tooltip script')
  }));
  assert.equal(result.marker, null, 'injected onerror handler must NOT execute');
  assert.equal(result.marker2, null, 'injected <script> must NOT execute');
  assert.equal(result.imgInTooltip, false, 'tooltip must NOT contain injected elements');
  await page.close();
});
