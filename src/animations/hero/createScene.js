// src/animations/hero/createScene.js
// Orchestrates the static 3D geometry of the foundation grid, building wireframe, and particles.

import { createFoundationGrid } from './createFoundationGrid';
import { createBuilding } from './createBuilding';
import { createParticles } from './createParticles';
import { BUILDING } from './constants';

/**
 * Initializes the entire static scene geometry once outside the animation loop.
 * @returns {{
 *   nodes: Array,
 *   lines: Array,
 *   particles: Array,
 *   floorNodeIndices: Array
 * }}
 */
export function createScene() {
  const groundY = BUILDING.height / 2 + 20;

  // 1. Generate Foundation Grid
  const foundation = createFoundationGrid(groundY);

  // 2. Generate Main Building & Pavilion
  const building = createBuilding();

  // Offset building line node indices by the foundation node count
  const foundationNodeCount = foundation.nodes.length;
  const offsetBuildingLines = building.lines.map((line) => ({
    ...line,
    a: line.a + foundationNodeCount,
    b: line.b + foundationNodeCount,
  }));

  const offsetFloorNodeIndices = building.floorNodeIndices.map(
    (idx) => idx + foundationNodeCount
  );

  // Consolidated nodes and lines
  const nodes = [...foundation.nodes, ...building.nodes];
  const lines = [...foundation.lines, ...offsetBuildingLines];

  // 3. Generate Floating Particles
  const particles = createParticles();

  return {
    nodes,
    lines,
    particles,
    floorNodeIndices: offsetFloorNodeIndices,
  };
}
