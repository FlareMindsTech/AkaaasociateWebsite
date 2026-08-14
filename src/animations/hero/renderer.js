// src/animations/hero/renderer.js
// Canvas 2D drawing routines for foundation grid, structural wireframe, nodes, and particles.

import { getThemeStyles } from './themeStyles';
import { CAMERA, ANIMATION } from './constants';

/**
 * Returns line stroke style and line width based on line category and theme.
 */
function getLineStyle(line, isDark, styles) {
  const { grid, building } = styles;

  if (line.category === 'grid-perimeter') {
    return grid.perimeter;
  }
  if (line.category === 'grid') {
    if (line.isBoundary) return grid.boundary;
    if (line.isCenter) return grid.center;
    return grid.normal;
  }
  if (line.category === 'floor') {
    return building.floor;
  }
  if (line.category === 'column') {
    return building.column;
  }
  if (line.category === 'core' || line.category === 'core-col') {
    return building.core;
  }
  if (line.category === 'brace') {
    return building.brace;
  }
  if (line.category.startsWith('annex')) {
    return building.annex;
  }
  return building.default;
}

/**
 * Renders all depth-sorted structural lines and active scanline glow highlights.
 */
export function drawLines(ctx, sortedLines, isDark) {
  const styles = getThemeStyles(isDark);
  const scanStyle = styles.scan;

  sortedLines.forEach(({ line, pA, pB, isNearScan }) => {
    ctx.beginPath();
    ctx.moveTo(pA.px, pA.py);
    ctx.lineTo(pB.px, pB.py);

    const baseStyle = getLineStyle(line, isDark, styles);
    let strokeStyle = baseStyle.strokeStyle;
    let lineWidth = baseStyle.lineWidth;

    // Active red scanline illumination (only applies to building structure)
    if (isNearScan && !line.category.startsWith('grid')) {
      strokeStyle = scanStyle.stroke;
      lineWidth = scanStyle.lineWidth;
      ctx.shadowColor = scanStyle.shadowColor;
      ctx.shadowBlur = scanStyle.shadowBlur;
    } else {
      ctx.shadowBlur = 0;
    }

    ctx.strokeStyle = strokeStyle;
    ctx.lineWidth = lineWidth;
    ctx.stroke();
    ctx.shadowBlur = 0;
  });
}

/**
 * Renders floor node markers and coordinate grid crosshairs.
 */
export function drawNodes(ctx, projNodes, isDark, scanY) {
  const styles = getThemeStyles(isDark);
  const { scanHitThreshold } = ANIMATION;

  projNodes.forEach((node) => {
    // 1. Grid Intersection Coordinate Dots
    if (node.type === 'grid-cross') {
      ctx.beginPath();
      ctx.arc(node.px, node.py, 1.4 * node.scale, 0, Math.PI * 2);
      ctx.fillStyle = styles.grid.crossDot;
      ctx.fill();
      return;
    }

    // Skip generic grid end points
    if (node.type === 'grid' || node.type === 'grid-border') return;

    // 2. Active Scan Hit on Floor Node
    const isScanHit = Math.abs(node.y - scanY) < scanHitThreshold;

    if (isScanHit) {
      // Red core node
      ctx.beginPath();
      ctx.arc(node.px, node.py, 4 * node.scale, 0, Math.PI * 2);
      ctx.fillStyle = styles.scan.stroke;
      ctx.shadowColor = styles.scan.shadowColor;
      ctx.shadowBlur = styles.scan.shadowBlur;
      ctx.fill();
      ctx.shadowBlur = 0;

      // Pulse ring
      ctx.beginPath();
      ctx.arc(node.px, node.py, 10 * node.scale, 0, Math.PI * 2);
      ctx.strokeStyle = styles.scan.pulseRing;
      ctx.lineWidth = 1;
      ctx.stroke();
    } else if (node.floor !== undefined) {
      // Standard structural node
      ctx.beginPath();
      ctx.arc(node.px, node.py, 2.4 * node.scale, 0, Math.PI * 2);
      ctx.fillStyle = styles.building.node;
      ctx.fill();
    }
  });
}

/**
 * Updates particle physics and renders them with perspective projection.
 */
export function drawParticles(ctx, particles, rotX, rotY, centerX, centerY, fov, isDark) {
  const styles = getThemeStyles(isDark);
  const cosY = Math.cos(rotY);
  const sinY = Math.sin(rotY);
  const cosX = Math.cos(rotX);
  const sinX = Math.sin(rotX);
  const { depthOffset } = CAMERA;

  ctx.fillStyle = styles.particles;

  particles.forEach((dot) => {
    // Advance upward drift
    dot.y -= dot.speedY;
    if (dot.y < -dot.yLimit) {
      dot.y = dot.yLimit;
    }

    // Rotate particle
    const x1 = dot.x * cosY + dot.z * sinY;
    const z1 = -dot.x * sinY + dot.z * cosY;
    const y2 = dot.y * cosX - z1 * sinX;
    const z2 = dot.y * sinX + z1 * cosX;

    // Perspective projection
    const scale = fov / (fov + z2 + depthOffset);
    const px = centerX + x1 * scale;
    const py = centerY + y2 * scale;

    ctx.beginPath();
    ctx.arc(px, py, dot.radius * scale, 0, Math.PI * 2);
    ctx.fill();
  });
}
