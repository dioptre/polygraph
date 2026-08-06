import Graph from 'graphology';

/**
 * Generates both the "Known" network and "Theoretical Extended (N Degrees)" network
 * based on user parameters.
 */
export class NetworkGenerator {
  constructor(params = {}) {
    this.updateParams(params);
  }

  updateParams(params) {
    this.params = {
      egoPartners: params.egoPartners ?? 3,
      monogamousPct: params.monogamousPct ?? 25, // % of direct partners who are monogamous
      polyculePct: params.polyculePct ?? 50,     // % of direct partners in an ingroup polycule
      slutPct: params.slutPct ?? 25,             // % of direct partners who are high-degree sluts
      
      polyculeSize: params.polyculeSize ?? 4,
      cheatingLikelihood: params.cheatingLikelihood ?? 20, // % chance monogamous partner cheats
      sluttinessIndex: params.sluttinessIndex ?? 0.6,       // 0 = closed polycule, 1 = completely open
      slutAvgPartners: params.slutAvgPartners ?? 17,       // avg partners for a slut node
      
      condomUsageInternal: params.condomUsageInternal ?? 0.8, // 80% condom use inside polycule
      condomUsageExternal: params.condomUsageExternal ?? 0.3, // 30% condom use outside
      condomUsageCheating: params.condomUsageCheating ?? 0.1, // 10% condom use during cheating
      
      nDegrees: params.nDegrees ?? 3,               // How many degrees deep to expand
      previewExtended: params.previewExtended ?? false, // Preview theoretical extended network toggle
      maxNodesLimit: params.maxNodesLimit ?? 400   // Cap max visual nodes for smooth rendering
    };
  }

  generateGraph() {
    const graph = new Graph({ type: 'undirected' });
    const p = this.params;

    // Node counter & ID tracking
    let nodeIdCounter = 0;
    const createNode = (type, label, degree, extra = {}) => {
      const id = `node_${nodeIdCounter++}`;
      let color = '#8a2be2'; // default violet
      let size = 8;

      if (type === 'ego') {
        color = '#ff2a85'; // Glowing Pink
        size = 18;
      } else if (type === 'polycule') {
        color = '#9d4edd'; // Purple
        size = 12;
      } else if (type === 'monogamous') {
        color = '#00f0ff'; // Electric Cyan
        size = 10;
      } else if (type === 'slut') {
        color = '#ff4757'; // Hot Coral / Red
        size = 14;
      } else if (type === 'cheater_secret') {
        color = '#ffa500'; // Amber
        size = 10;
      } else if (degree === 2) {
        color = '#00ff87'; // Spring Green
        size = 7;
      } else if (degree >= 3) {
        color = '#70a1ff'; // Light Blue / Teal
        size = 5;
      }

      graph.addNode(id, {
        label: label || `Node ${id}`,
        nodeType: type,
        degree: degree,
        color: color,
        size: size,
        ...extra
      });
      return id;
    };

    const addEdge = (source, target, relationshipType, protectedRatio) => {
      if (graph.hasEdge(source, target) || source === target) return;

      let edgeColor = '#00f0ff'; // protected default
      let size = 2;

      if (relationshipType === 'internal') {
        edgeColor = protectedRatio > 0.5 ? '#9d4edd' : '#ff4757';
      } else if (relationshipType === 'external') {
        edgeColor = protectedRatio > 0.5 ? '#00f0ff' : '#ff2a85';
      } else if (relationshipType === 'cheating') {
        edgeColor = '#ffa500';
      }

      graph.addEdge(source, target, {
        relationshipType,
        protectedRatio,
        color: edgeColor,
        size
      });
    };

    // 1. Create EGO node (Degree 0)
    const egoId = createNode('ego', 'Ego (You)', 0);

    // 2. Determine Direct Partner Allocations (Degree 1)
    const totalPartners = Math.max(1, p.egoPartners);
    const numMono = Math.round((p.monogamousPct / 100) * totalPartners);
    const numSlut = Math.round((p.slutPct / 100) * totalPartners);
    const numPoly = Math.max(0, totalPartners - numMono - numSlut);

    const directPartnerNodes = [];

    // Polycule Nodes (Ingrouping vs Outgrouping)
    const polyculeNodes = [];
    for (let i = 0; i < numPoly; i++) {
      const pId = createNode('polycule', `Primary Partner (Poly ${i + 1})`, 1);
      directPartnerNodes.push({ id: pId, type: 'polycule' });
      polyculeNodes.push(pId);
      addEdge(egoId, pId, 'internal', p.condomUsageInternal);
    }

    // Connect Polycule Ingroup bonds (triangles/cliques based on Ingrouping = 1 - sluttiness)
    const ingroupConnectivity = 1 - p.sluttinessIndex;
    for (let i = 0; i < polyculeNodes.length; i++) {
      for (let j = i + 1; j < polyculeNodes.length; j++) {
        if (Math.random() < ingroupConnectivity + 0.3) {
          addEdge(polyculeNodes[i], polyculeNodes[j], 'internal', p.condomUsageInternal);
        }
      }
    }

    // Monogamous Partners (Degree 1)
    for (let i = 0; i < numMono; i++) {
      const mId = createNode('monogamous', `Monogamous Partner ${i + 1}`, 1);
      directPartnerNodes.push({ id: mId, type: 'monogamous' });
      addEdge(egoId, mId, 'internal', p.condomUsageInternal);

      // Cheating logic: If partner cheats, add hidden outside partner link
      const isCheating = Math.random() * 100 < p.cheatingLikelihood;
      if (isCheating) {
        const secretId = createNode('cheater_secret', `Secret Hookup (Mono ${i + 1})`, 2, {
          isSecret: true
        });
        addEdge(mId, secretId, 'cheating', p.condomUsageCheating);
      }
    }

    // Slut / High-Degree Open Connectors (Degree 1)
    for (let i = 0; i < numSlut; i++) {
      const sId = createNode('slut', `Slut Partner ${i + 1} (${p.slutAvgPartners} Ptrs)`, 1, {
        partnerCapacity: p.slutAvgPartners
      });
      directPartnerNodes.push({ id: sId, type: 'slut' });
      addEdge(egoId, sId, 'external', p.condomUsageExternal);
    }

    // 3. Extended Theoretical Network Expansion (Degree 2 to Degree N)
    if (p.previewExtended && p.nDegrees >= 2) {
      let currentDegreeNodes = [...directPartnerNodes.map(d => ({ ...d, degree: 1 }))];

      for (let degree = 2; degree <= p.nDegrees; degree++) {
        if (graph.order >= p.maxNodesLimit) break;
        const nextDegreeNodes = [];

        for (const parent of currentDegreeNodes) {
          if (graph.order >= p.maxNodesLimit) break;

          // Branch factor depends on partner type & sluttiness index
          let numBranch = 1;
          if (parent.type === 'slut') {
            numBranch = Math.min(
              Math.round(p.slutAvgPartners * (degree === 2 ? 0.7 : 0.3)),
              15
            );
          } else if (parent.type === 'polycule') {
            numBranch = Math.round(p.polyculeSize * p.sluttinessIndex * (3 / degree));
          } else if (parent.type === 'monogamous') {
            numBranch = Math.random() < (p.cheatingLikelihood / 100) ? 1 : 0;
          } else {
            // Extended generic nodes
            numBranch = Math.round(3 * p.sluttinessIndex);
          }

          for (let b = 0; b < numBranch; b++) {
            if (graph.order >= p.maxNodesLimit) break;

            // Mixture of node types for extended theoretical partners
            const randType = Math.random();
            let childType = 'extended';
            let label = `Deg ${degree} Partner`;

            if (randType < 0.2) {
              childType = 'slut';
              label = `Extended Slut (Deg ${degree})`;
            } else if (randType < 0.5) {
              childType = 'polycule';
              label = `Extended Poly (Deg ${degree})`;
            } else {
              childType = 'monogamous';
              label = `Extended Mono (Deg ${degree})`;
            }

            const childId = createNode(childType, label, degree);
            const edgeType = (parent.type === 'polycule' && childType === 'polycule' && Math.random() > p.sluttinessIndex) 
              ? 'internal' 
              : 'external';
            const condomRate = edgeType === 'internal' ? p.condomUsageInternal : p.condomUsageExternal;

            addEdge(parent.id, childId, edgeType, condomRate);
            nextDegreeNodes.push({ id: childId, type: childType, degree: degree });
          }
        }

        currentDegreeNodes = nextDegreeNodes;
      }
    }

    return graph;
  }

  /**
   * Calculates mathematical extended network node statistics
   * (including unrendered theoretical node count up to N degrees)
   */
  calculateNetworkMetrics(graph) {
    const p = this.params;
    const egoPartners = p.egoPartners;
    
    // Average branching factor per degree
    const slutRatio = p.slutPct / 100;
    const polyRatio = p.polyculePct / 100;
    const monoRatio = p.monogamousPct / 100;

    const avgDirectBranching = (slutRatio * p.slutAvgPartners) + 
                              (polyRatio * p.polyculeSize * p.sluttinessIndex) + 
                              (monoRatio * (1 + (p.cheatingLikelihood / 100)));

    // Cumulative theoretical nodes by degree
    const theoreticalCountByDegree = [1]; // Degree 0 (Ego)
    let cumulativeTheoretical = 1;

    for (let d = 1; d <= p.nDegrees; d++) {
      if (d === 1) {
        theoreticalCountByDegree.push(egoPartners);
        cumulativeTheoretical += egoPartners;
      } else {
        // Compound growth factor
        const prevCount = theoreticalCountByDegree[d - 1];
        const effectiveBranch = Math.max(1.1, avgDirectBranching * (1 - (d * 0.12)));
        const degreeCount = Math.round(prevCount * effectiveBranch);
        theoreticalCountByDegree.push(degreeCount);
        cumulativeTheoretical += degreeCount;
      }
    }

    // Sluttiness index formula: ratio of external sex acts to total acts
    const ingroupRatio = 1 - p.sluttinessIndex;

    return {
      renderedNodes: graph.order,
      renderedEdges: graph.size,
      theoreticalTotalNodes: cumulativeTheoretical,
      theoreticalCountByDegree,
      avgBranchingFactor: avgDirectBranching.toFixed(2),
      ingroupRatio: (ingroupRatio * 100).toFixed(0),
      outgroupRatio: (p.sluttinessIndex * 100).toFixed(0)
    };
  }
}
