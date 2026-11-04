import { test } from 'node:test';
import assert from 'node:assert/strict';
import { NetworkGenerator } from '../src/networkGenerator.js';

const baseParams = {
  demographicProfile: 'hetero_mixed',
  egoPartners: 2,
  monogamousPct: 32,
  polyculePct: 100,
  slutPct: 50,
  polyculeSize: 7,
  slutAvgPartners: 6,
  sluttinessIndex: 0.86,
  cheatingLikelihood: 10,
  nDegrees: 3,
  partyLoopbackPct: 40,
  previewExtended: true,
  condomUsageInternal: 0.0,
  condomUsageExternal: 0.9
};

/**
 * Regression tests for the confirmed browser DoS (CWE-400): shared-profile URL
 * params (e.g. egoPartners=1e15) used to drive an unbounded node-creation loop in
 * generateGraph() and a multi-million-iteration loop in calculateNetworkMetrics(),
 * freezing the browser tab. After the fix, rendered node counts and per-degree
 * series lengths are hard-bounded.
 */
test('generateGraph bounds node count for malicious shared-profile params', () => {
  const gen = new NetworkGenerator({
    ...baseParams,
    // 2e6 keeps the (pre-fix) unbounded loop short enough to fail fast;
    // 1e15 also triggers the bug but spins for hours pre-fix.
    egoPartners: 2e6,
    polyculePct: 100,
    monogamousPct: 0,
    slutPct: 0,
    maxNodesLimit: 1e9
  });
  const g = gen.generateGraph();
  assert.ok(g.order <= 2010, `rendered node count should be bounded (<=2010), got ${g.order}`);
});

test('generateGraph respects a sane maxNodesLimit cap', () => {
  const gen = new NetworkGenerator({
    ...baseParams,
    egoPartners: 100,
    slutPct: 100,
    polyculePct: 0,
    monogamousPct: 0,
    slutAvgPartners: 100,
    nDegrees: 10,
    maxNodesLimit: 5000
  });
  const g = gen.generateGraph();
  assert.ok(g.order <= 2010, `rendered node count should respect the 2000-node cap, got ${g.order}`);
});

test('calculateNetworkMetrics completes with bounded series for huge nDegrees/egoPartners', () => {
  const gen = new NetworkGenerator({
    ...baseParams,
    egoPartners: 1e15,
    nDegrees: 5e6,
    maxNodesLimit: 1e9
  });
  const g = gen.generateGraph();
  const t0 = Date.now();
  const metrics = gen.calculateNetworkMetrics(g);
  const elapsedMs = Date.now() - t0;
  assert.ok(metrics.theoreticalCountByDegree.length <= 11,
    `per-degree series should be bounded (<=11 entries), got ${metrics.theoreticalCountByDegree.length}`);
  assert.ok(Number.isFinite(metrics.theoreticalTotalNodes));
  assert.ok(elapsedMs < 2000, `metrics computation should be fast, took ${elapsedMs}ms`);
});
