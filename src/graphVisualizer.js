import Sigma from 'sigma';
import forceAtlas2 from 'graphology-layout-forceatlas2';

function applyCircularLayout(graph, radius = 100) {
  const nodes = graph.nodes();
  const count = nodes.length;
  nodes.forEach((node, i) => {
    const angle = (2 * Math.PI * i) / count;
    graph.setNodeAttribute(node, 'x', radius * Math.cos(angle));
    graph.setNodeAttribute(node, 'y', radius * Math.sin(angle));
  });
}

export class GraphVisualizer {
  constructor(containerElement, tooltipElement) {
    this.container = containerElement;
    this.tooltip = tooltipElement;
    this.renderer = null;
    this.graph = null;
    this.hoveredNode = null;
    this.selectedNode = null;
  }

  render(graph) {
    this.graph = graph;

    // Arrange nodes in circular layout as initial positions for ForceAtlas2
    applyCircularLayout(graph, 100);

    // Apply ForceAtlas2 layout steps for organic cluster positioning
    const fa2Settings = forceAtlas2.inferSettings(graph);
    forceAtlas2.assign(graph, {
      iterations: 80,
      settings: {
        ...fa2Settings,
        gravity: 1.2,
        scalingRatio: 8,
        barnesHutOptimize: true
      }
    });

    // Destroy existing renderer if updating graph
    if (this.renderer) {
      this.renderer.kill();
      this.renderer = null;
    }

    // Initialize Sigma Renderer
    this.renderer = new Sigma(graph, this.container, {
      allowReactParams: true,
      renderEdgeLabels: false,
      enableEdgeEvents: false,
      labelFont: 'Outfit, sans-serif',
      labelColor: { color: '#e2e8f0' },
      labelSize: 13,
      labelWeight: '600',
      defaultNodeColor: '#9d4edd',
      defaultEdgeColor: '#3b82f644'
    });

    this.setupInteractions();
  }

  setupInteractions() {
    if (!this.renderer || !this.graph) return;

    // Hover events for tooltip preview
    this.renderer.on('enterNode', ({ node }) => {
      this.hoveredNode = node;
      const attrs = this.graph.getNodeAttributes(node);
      this.showTooltip(attrs, this.renderer.nodeToViewport({ x: attrs.x, y: attrs.y }));
    });

    this.renderer.on('leaveNode', () => {
      this.hoveredNode = null;
      this.hideTooltip();
    });

    // Node click event
    this.renderer.on('clickNode', ({ node }) => {
      this.selectedNode = node;
      const attrs = this.graph.getNodeAttributes(node);
      console.log('Selected Node:', attrs);
    });

    // Drag node support
    let isDragging = false;
    let draggedNode = null;

    this.renderer.on('downNode', (e) => {
      isDragging = true;
      draggedNode = e.node;
      this.renderer.getCustomBBox();
    });

    this.renderer.getMouseCaptor().on('mousemove', (e) => {
      if (!isDragging || !draggedNode) return;
      const pos = this.renderer.viewportToGraph(e);
      this.graph.setNodeAttribute(draggedNode, 'x', pos.x);
      this.graph.setNodeAttribute(draggedNode, 'y', pos.y);
    });

    this.renderer.getMouseCaptor().on('mouseup', () => {
      isDragging = false;
      draggedNode = null;
    });
  }

  showTooltip(attrs, coords) {
    if (!this.tooltip) return;
    
    let typeName = 'Network Node';
    if (attrs.nodeType === 'ego') typeName = 'Ego (Central You)';
    else if (attrs.nodeType === 'polycule') typeName = 'Polycule Ingroup Member';
    else if (attrs.nodeType === 'monogamous') typeName = 'Monogamous Partner';
    else if (attrs.nodeType === 'slut') typeName = 'High-Degree Slut / Open Connector';
    else if (attrs.nodeType === 'cheater_secret') typeName = 'Secret / Cheating Hookup';
    else if (attrs.nodeType === 'extended') typeName = `Theoretical Extended Partner (Degree ${attrs.degree})`;

    this.tooltip.innerHTML = `
      <div class="tooltip-header" style="border-left: 4px solid ${attrs.color}">
        <strong>${attrs.label}</strong>
      </div>
      <div class="tooltip-body">
        <div><span class="text-muted">Type:</span> <strong>${typeName}</strong></div>
        <div><span class="text-muted">Degree Level:</span> <strong>${attrs.degree} Hops</strong></div>
        ${attrs.partnerCapacity ? `<div><span class="text-muted">Avg Partners:</span> <strong>${attrs.partnerCapacity}</strong></div>` : ''}
      </div>
    `;

    this.tooltip.style.display = 'block';
    this.tooltip.style.left = `${Math.min(window.innerWidth - 220, coords.x + 15)}px`;
    this.tooltip.style.top = `${Math.min(window.innerHeight - 120, coords.y + 15)}px`;
  }

  hideTooltip() {
    if (this.tooltip) {
      this.tooltip.style.display = 'none';
    }
  }

  recenter() {
    if (this.renderer) {
      this.renderer.getCamera().animatedReset();
    }
  }
}
