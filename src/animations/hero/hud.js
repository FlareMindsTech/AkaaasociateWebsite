// src/animations/hero/hud.js
// Renders technical HUD architectural measurement tags and elevation callouts.

import { getThemeStyles } from './themeStyles';
import { BUILDING } from './constants';

/**
 * Draws an individual technical architectural HUD label with connection dot and line.
 */
export function drawHUDTag(ctx, x, y, title, subtitle, isHighlight, isDark, width, height) {
  // Boundary guard
  if (x < 50 || x > width - 150 || y < 50 || y > height - 50) return;

  const styles = getThemeStyles(isDark).hud;
  const config = isHighlight ? styles.highlight : styles.normal;

  ctx.save();
  ctx.font = '600 11px Inter, sans-serif';

  // Background pill
  ctx.fillStyle = config.bg;
  ctx.strokeStyle = config.border;
  ctx.lineWidth = 1;

  ctx.beginPath();
  ctx.roundRect(x, y, 160, 36, 4);
  ctx.fill();
  ctx.stroke();

  // Connector dot & line
  ctx.beginPath();
  ctx.arc(x - 8, y + 18, 3, 0, Math.PI * 2);
  ctx.fillStyle = config.border;
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(x - 8, y + 18);
  ctx.lineTo(x, y + 18);
  ctx.stroke();

  // Title Text
  ctx.fillStyle = config.title;
  ctx.fillText(title, x + 10, y + 15);

  // Subtitle Text
  ctx.font = '400 9px Inter, sans-serif';
  ctx.fillStyle = config.subtitle;
  ctx.fillText(subtitle, x + 10, y + 28);

  ctx.restore();
}

/**
 * Renders the full suite of HUD callouts attached to the 3D building nodes.
 */
export function drawHUDOverlay(ctx, projNodes, floorNodeIndices, isDark, width, height, scanY) {
  const topNode = projNodes[floorNodeIndices[BUILDING.floors - 1]];
  const midNode = projNodes[floorNodeIndices[Math.floor(BUILDING.floors / 2)]];
  const botNode = projNodes[floorNodeIndices[0]];

  if (topNode) {
    drawHUDTag(
      ctx,
      topNode.px + 40,
      topNode.py - 20,
      'ELEVATION +34.5M',
      'ROOF STRUCTURE / CANOPY',
      false,
      isDark,
      width,
      height
    );
  }

  if (midNode) {
    const scanLevelNum = Math.min(
      6,
      Math.max(
        1,
        Math.round(((BUILDING.height / 2 - scanY) / BUILDING.height) * 6)
      )
    );
    drawHUDTag(
      ctx,
      midNode.px + 60,
      midNode.py + 10,
      `SCANNING LVL 0${scanLevelNum}`,
      `GRID REF A-0${scanLevelNum} • 450 KN/M²`,
      true,
      isDark,
      width,
      height
    );
  }

  if (botNode) {
    drawHUDTag(
      ctx,
      botNode.px - 140,
      botNode.py + 30,
      'FOUNDATION BASE',
      'CONCRETE RAFT SLAB',
      false,
      isDark,
      width,
      height
    );
  }
}
