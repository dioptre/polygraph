/**
 * Regression test: DOM-based XSS via custom pathogen CSV data (CWE-79).
 *
 * Serves the built app (run `npm run build` first / `npm test`), loads a
 * malicious pathogen CSV through the app's #csv-file-input flow, and asserts
 * that no script executes and that pathogen string fields are HTML-escaped in
 * the STI reference table and the ECharts HTML tooltips.
 *
 * Fails on the unfixed code (window.__pwned is set, raw <img> tag in DOM).
 */
import http from 'node:http';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, '..', 'dist');

const MIME = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.csv': 'text/csv',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml'
};

const server = http.createServer(async (req, res) => {
  const urlPath = decodeURIComponent(req.url.split('?')[0]);
  const filePath = path.normalize(path.join(distDir, urlPath === '/' ? 'index.html' : urlPath));
  if (!filePath.startsWith(distDir)) {
    res.writeHead(403);
    res.end();
    return;
  }
  try {
    const data = await readFile(filePath);
    res.writeHead(200, { 'Content-Type': MIME[path.extname(filePath)] || 'application/octet-stream' });
    res.end(data);
  } catch {
    res.writeHead(404);
    res.end('not found');
  }
});

let failures = 0;
function check(name, cond, detail = '') {
  if (cond) {
    console.log(`PASS: ${name}`);
  } else {
    failures++;
    console.error(`FAIL: ${name} ${detail}`);
  }
}

await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
const port = server.address().port;

// High baseline transmission values so the malicious row ranks into the
// STI risk chart's top-8 bars (the tooltip sink under test).
const csvPayload = [
  'Pathogen_ID,Pathogen_Name,Pathogen_Category,Curable_Status,SF_High_Risk_Group,Primary_Treatment,Baseline_Receptive_Anal_Pct,Baseline_Insertive_Anal_Pct,Baseline_Receptive_Vaginal_Pct,Baseline_Insertive_Vaginal_Pct,Baseline_Oral_Pct,Baseline_Skin_Contact_Pct',
  '1,<img src=x onerror="window.__pwned=1;fetch(\'/beacon?x=1\')"><script>window.__pwned_script=1</script>,Malicious Category,Curable,Attack Group,<script>window.__pwned_treatment=1</script>,100,100,100,100,100,100',
  '2,Second Pathogen,Control,Virus,General,Standard Care,5,2,5,2,1,2'
].join('\n');

const browser = await chromium.launch();
try {
  const page = await browser.newPage();
  const beacons = [];
  page.on('request', (r) => {
    if (r.url().includes('/beacon')) beacons.push(r.url());
  });

  // The app binds a change handler to #csv-file-input (src/main.js) before DOMContentLoaded.
  page.addInitScript(() => {
    document.addEventListener('DOMContentLoaded', () => {
      const inp = document.createElement('input');
      inp.id = 'csv-file-input';
      inp.type = 'file';
      document.body.appendChild(inp);
    });
  });

  await page.goto(`http://127.0.0.1:${port}/index.html`, { waitUntil: 'networkidle' });
  await page.waitForFunction('window.polygraphApp !== undefined');
  await page.waitForTimeout(1500);

  await page.setInputFiles('#csv-file-input', {
    name: 'evil_pathogens.csv',
    mimeType: 'text/csv',
    buffer: Buffer.from(csvPayload)
  });
  await page.waitForTimeout(2000);

  // 1. No script may execute from the uploaded CSV.
  check('no script execution in STI table', (await page.evaluate('window.__pwned')) !== 1);
  check('no <script> execution in table', (await page.evaluate('window.__pwned_script')) !== 1);
  check('no outbound beacon fired', beacons.length === 0, `beacons=${JSON.stringify(beacons)}`);

  // 2. STI reference table must render escaped text, not live markup.
  const rowHtml = await page.evaluate(() => {
    const r = document.querySelector('#sti-table-body tr');
    return r ? r.innerHTML : '';
  });
  check('table row contains escaped payload', rowHtml.includes('&lt;img'));
  check('table row has no live <img> element', (await page.evaluate(() => !!document.querySelector('#sti-table-body tr img'))) === false);
  const rowText = await page.evaluate(() => document.querySelector('#sti-table-body tr')?.textContent || '');
  check('table row shows literal payload text', rowText.includes('<img src=x onerror='));

  // 3. ECharts HTML tooltips must be escaped.
  const tooltipResults = await page.evaluate(() => {
    const cm = window.polygraphApp.chartsManager;
    const out = {};
    if (cm.longitudinalChart) {
      const opt = cm.longitudinalChart.getOption();
      const fmt = opt.tooltip[0].formatter;
      out.long = fmt([{ name: '<img src=x onerror="window.__pwned_tip=1">', value: 3.2, marker: '', seriesName: '<b>series</b>' }]);
    }
    if (cm.stiRiskChart) {
      const opt = cm.stiRiskChart.getOption();
      const fmt = opt.tooltip[0].formatter;
      // Pathogen names live in the formatter's closure, so scan every bar to
      // find the one backed by our malicious CSV row, then capture its output.
      let found = '';
      for (let i = 0; i < 40; i++) {
        const html = String(fmt([{ dataIndex: i }]));
        if (html.includes('__pwned')) { found = html; break; }
      }
      out.sti = found;
    }
    return out;
  });
  if (typeof tooltipResults.long === 'string') {
    check('longitudinal tooltip escaped', tooltipResults.long.includes('&lt;img') && !tooltipResults.long.includes('<img'));
    check('longitudinal tooltip seriesName escaped', !tooltipResults.long.includes('<b>series</b>'));
  } else {
    check('longitudinal tooltip present', false, 'longitudinalChart unavailable');
  }
  if (tooltipResults.sti) {
    check('STI risk tooltip escaped', tooltipResults.sti.includes('&lt;img') && !tooltipResults.sti.includes('<img'));
    check('STI tooltip treatment escaped', !tooltipResults.sti.includes('<script>'));
  } else {
    // Non-fatal: only assert when our row made it into the chart's top-N bars.
    console.log('NOTE: STI risk tooltip check skipped (malicious row not in top-N bars)');
  }

  check('no tooltip script execution', (await page.evaluate('window.__pwned_tip')) !== 1);
} finally {
  await browser.close();
  server.close();
}

if (failures > 0) {
  console.error(`\n${failures} check(s) failed`);
  process.exit(1);
}
console.log('\nAll XSS regression checks passed');
