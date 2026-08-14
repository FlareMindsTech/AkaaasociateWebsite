// src/animations/hero/projection.js
// 3D rotations, perspective projection mathematics, and depth sorting.

import { CAMERA, ANIMATION } from './constants';

/**
 * Projects 3D model nodes to 2D screen coordinates based on camera rotation and perspective.
 * @param {Array} nodes - 3D nodes
 * @param {number} rotX - X-axis rotation angle
 * @param {number} rotY - Y-axis rotation angle
 * @param {number} width - Canvas viewport width
 * @param {number} height - Canvas viewport height
 * @returns {Array} Projected nodes with screen { px, py, scale, z2 }
 */
export function project3DNodes(nodes, rotX, rotY, width, height) {
  const centerX = width * CAMERA.centerXRatio;
  const centerY = height * CAMERA.centerYRatio;
  const { fov, depthOffset } = CAMERA;

  const cosY = Math.cos(rotY);
  const sinY = Math.sin(rotY);
  const cosX = Math.cos(rotX);
  const sinX = Math.sin(rotX);

  return nodes.map((node) => {
    // Rotate Y
    const x1 = node.x * cosY + node.z * sinY;
    const z1 = -node.x * sinY + node.z * cosY;

    // Rotate X
    const y2 = node.y * cosX - z1 * sinX;
    const z2 = node.y * sinX + z1 * cosX;

    // Perspective Projection
    const scale = fov / (fov + z2 + depthOffset);
    const px = centerX + x1 * scale;
    const py = centerY + y2 * scale;

    return {
      ...node,
      px,
      py,
      scale,
      z2,
    };
  });
}

/**
 * Sorts structural lines by average Z depth for painter's rendering and computes active scanline status.
 * @param {Array} lines - Array of line definitions
 * @param {Array} projNodes - Array of projected 2D nodes
 * @param {number} scanY - Current Y position of the scanning beam
 * @returns {Array} Depth-sorted lines with calculated { pA, pB, avgZ, isNearScan }
 */
export function sortLinesByDepth(lines, projNodes, scanY) {
  const { scanGlowRange } = ANIMATION;

  return lines
    .map((line) => {
      const pA = projNodes[line.a];
      const pB = projNodes[line.b];
      const avgZ = (pA.z2 + pB.z2) / 2;
      const avgY = (pA.y + pB.y) / 2;
      const isNearScan = Math.abs(avgY - scanY) < scanGlowRange;

      return { line, pA, pB, avgZ, isNearScan };
    })
    .sort((a, b) => b.avgZ - a.avgZ);
}
