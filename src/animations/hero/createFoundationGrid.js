// src/animations/hero/createFoundationGrid.js
// Generates the static 3D nodes and lines for the ground perspective foundation plane.

import { FOUNDATION_GRID, BUILDING } from './constants';

/**
 * Creates the foundation grid geometry.
 * @param {number} groundY - Y coordinate of the ground plane
 * @returns {{ nodes: Array, lines: Array }}
 */
export function createFoundationGrid(groundY = BUILDING.height / 2 + 20) {
  const { groundSize, gridStep } = FOUNDATION_GRID;
  const nodes = [];
  const lines = [];

  // Generate grid lines along X
  for (let x = -groundSize; x <= groundSize; x += gridStep) {
    const isCenter = Math.abs(x) <= BUILDING.width * 0.75;
    const isBoundary = Math.abs(x) === groundSize || x === 0;

    nodes.push({ x, y: groundY, z: -groundSize, type: 'grid', isCenter });
    nodes.push({ x, y: groundY, z: groundSize, type: 'grid', isCenter });

    lines.push({
      a: nodes.length - 2,
      b: nodes.length - 1,
      category: 'grid',
      isCenter,
      isBoundary,
      axis: 'x',
    });
  }

  // Generate grid lines along Z (Depth perspective)
  for (let z = -groundSize; z <= groundSize; z += gridStep) {
    const isCenter = Math.abs(z) <= BUILDING.depth * 0.75;
    const isBoundary = Math.abs(z) === groundSize || z === 0;

    nodes.push({ x: -groundSize, y: groundY, z, type: 'grid', isCenter });
    nodes.push({ x: groundSize, y: groundY, z, type: 'grid', isCenter });

    lines.push({
      a: nodes.length - 2,
      b: nodes.length - 1,
      category: 'grid',
      isCenter,
      isBoundary,
      axis: 'z',
    });
  }

  // Ground plane perimeter boundary box
  const gP1 = nodes.length;
  nodes.push({ x: -groundSize, y: groundY, z: -groundSize, type: 'grid-border' });
  nodes.push({ x: groundSize, y: groundY, z: -groundSize, type: 'grid-border' });
  nodes.push({ x: groundSize, y: groundY, z: groundSize, type: 'grid-border' });
  nodes.push({ x: -groundSize, y: groundY, z: groundSize, type: 'grid-border' });

  lines.push({ a: gP1, b: gP1 + 1, category: 'grid-perimeter' });
  lines.push({ a: gP1 + 1, b: gP1 + 2, category: 'grid-perimeter' });
  lines.push({ a: gP1 + 2, b: gP1 + 3, category: 'grid-perimeter' });
  lines.push({ a: gP1 + 3, b: gP1, category: 'grid-perimeter' });

  // Grid Intersection Coordinate Dots (CAD drawing cross points)
  for (let x = -groundSize + gridStep; x < groundSize; x += gridStep * 2) {
    for (let z = -groundSize + gridStep; z < groundSize; z += gridStep * 2) {
      nodes.push({
        x,
        y: groundY,
        z,
        type: 'grid-cross',
        isCenter: Math.abs(x) <= BUILDING.width && Math.abs(z) <= BUILDING.depth,
      });
    }
  }

  return { nodes, lines };
}
