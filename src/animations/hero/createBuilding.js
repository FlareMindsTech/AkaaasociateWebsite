// src/animations/hero/createBuilding.js
// Generates the static 3D nodes and lines for the tower, core columns, and annex pavilion.

import { BUILDING } from './constants';

/**
 * Generates the complete 3D building structural wireframe.
 * @returns {{ nodes: Array, lines: Array, floorNodeIndices: Array }}
 */
export function createBuilding() {
  const { floors, width: bW, depth: bD, height: bH } = BUILDING;
  const floorHeight = bH / (floors - 1);

  const nodes = [];
  const lines = [];
  const floorNodeIndices = [];

  // ── 1. Main Tower Floors, Core, Columns, and Braces ─────────────
  for (let f = 0; f < floors; f++) {
    const y = bH / 2 - f * floorHeight;
    const w = f === floors - 1 ? bW * 0.75 : bW; // Setback top floor
    const d = f === floors - 1 ? bD * 0.75 : bD;

    const fStart = nodes.length;
    // 4 corners of floor perimeter
    nodes.push({ x: -w / 2, y, z: -d / 2, floor: f }); // 0: FL
    nodes.push({ x: w / 2, y, z: -d / 2, floor: f });  // 1: FR
    nodes.push({ x: w / 2, y, z: d / 2, floor: f });   // 2: BR
    nodes.push({ x: -w / 2, y, z: d / 2, floor: f });  // 3: BL

    floorNodeIndices.push(fStart);

    // Floor boundary lines
    lines.push({ a: fStart, b: fStart + 1, category: 'floor' });
    lines.push({ a: fStart + 1, b: fStart + 2, category: 'floor' });
    lines.push({ a: fStart + 2, b: fStart + 3, category: 'floor' });
    lines.push({ a: fStart + 3, b: fStart, category: 'floor' });

    // Interior core columns
    const coreW = w * 0.4;
    const coreD = d * 0.4;
    const cStart = nodes.length;
    nodes.push({ x: -coreW / 2, y, z: -coreD / 2, floor: f, isCore: true });
    nodes.push({ x: coreW / 2, y, z: -coreD / 2, floor: f, isCore: true });
    nodes.push({ x: coreW / 2, y, z: coreD / 2, floor: f, isCore: true });
    nodes.push({ x: -coreW / 2, y, z: coreD / 2, floor: f, isCore: true });

    // Core boundary lines
    lines.push({ a: cStart, b: cStart + 1, category: 'core' });
    lines.push({ a: cStart + 1, b: cStart + 2, category: 'core' });
    lines.push({ a: cStart + 2, b: cStart + 3, category: 'core' });
    lines.push({ a: cStart + 3, b: cStart, category: 'core' });

    // Vertical structural columns between floors
    if (f > 0) {
      const prevFStart = floorNodeIndices[f - 1];
      const prevCStart = prevFStart + 4;

      // Corner vertical columns
      for (let i = 0; i < 4; i++) {
        lines.push({ a: prevFStart + i, b: fStart + i, category: 'column' });
      }

      // Core vertical columns
      for (let i = 0; i < 4; i++) {
        lines.push({ a: prevCStart + i, b: cStart + i, category: 'core-col' });
      }

      // Cross braces on lower 2 floors
      if (f <= 2) {
        lines.push({ a: prevFStart, b: fStart + 1, category: 'brace' });
        lines.push({ a: prevFStart + 1, b: fStart, category: 'brace' });
      }
    }
  }

  // ── 2. Cantilever Glass Pavilion / Annex ────────────────────────
  const annexY1 = bH / 2 - floorHeight * 0.5;
  const annexY2 = bH / 2 - floorHeight * 2.2;
  const aX = bW / 2 + 50;
  const aStart = nodes.length;

  nodes.push({ x: aX, y: annexY1, z: -bD * 0.3, type: 'annex' });
  nodes.push({ x: aX, y: annexY1, z: bD * 0.3, type: 'annex' });
  nodes.push({ x: aX, y: annexY2, z: bD * 0.3, type: 'annex' });
  nodes.push({ x: aX, y: annexY2, z: -bD * 0.3, type: 'annex' });

  lines.push({ a: aStart, b: aStart + 1, category: 'annex' });
  lines.push({ a: aStart + 1, b: aStart + 2, category: 'annex' });
  lines.push({ a: aStart + 2, b: aStart + 3, category: 'annex' });
  lines.push({ a: aStart + 3, b: aStart, category: 'annex' });

  // Connect annex to floor 1
  const f1Start = floorNodeIndices[1];
  lines.push({ a: f1Start + 1, b: aStart, category: 'annex-beam' });
  lines.push({ a: f1Start + 2, b: aStart + 1, category: 'annex-beam' });

  return { nodes, lines, floorNodeIndices };
}
