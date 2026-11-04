import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

import { escapeHtml } from '../src/sanitize.js';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const src = (p) => readFileSync(path.join(ROOT, p), 'utf8');

test('escapeHtml escapes all HTML-significant characters', () => {
  assert.equal(escapeHtml('<script>'), '&lt;script&gt;');
  assert.equal(escapeHtml('a"b\'c`d&e'), 'a&quot;b&#39;c&#96;d&amp;e');
  assert.equal(escapeHtml('<img src=x onerror=alert(1)>'),
    '&lt;img src=x onerror=alert(1)&gt;');
  assert.equal(escapeHtml(42), '42');
  assert.equal(escapeHtml(null), '');
  assert.equal(escapeHtml(undefined), '');
});

// Regression guards: the confirmed DOM XSS (CWE-79) fired because untrusted strings
// (shared-profile URL params -> node labels; CSV fields) were interpolated raw into
// innerHTML sinks. These assertions fail if a sink stops escaping its data.
test('graph tooltip escapes node label/type/partners (shared-profile URL params)', () => {
  const code = src('src/graphVisualizer.js');
  assert.ok(code.includes('escapeHtml(label)'), 'showTooltip must escape the node label');
  assert.ok(code.includes('escapeHtml(type.toUpperCase())'), 'showTooltip must escape the node type');
  assert.ok(code.includes('escapeHtml(partnersCount)'), 'showTooltip must escape partnersCount');
});

test('STI raw table escapes dataset fields (custom CSV uploads)', () => {
  const code = src('src/main.js');
  assert.ok(code.includes('escapeHtml(p.name)'), 'populateSTIRawTable must escape p.name');
  assert.ok(code.includes('escapeHtml(p.category)'), 'populateSTIRawTable must escape p.category');
  assert.ok(code.includes('escapeHtml(p.curable)'), 'populateSTIRawTable must escape p.curable');
});

test('echarts HTML tooltips escape pathogen fields', () => {
  const code = src('src/chartsManager.js');
  assert.ok(code.includes('escapeHtml(pathogen.name)'), 'STI risk tooltip must escape pathogen.name');
  assert.ok(code.includes('escapeHtml(pathogen.category)'), 'STI risk tooltip must escape pathogen.category');
  assert.ok(code.includes('escapeHtml(params[0].name)'), 'longitudinal tooltip must escape series name');
});
