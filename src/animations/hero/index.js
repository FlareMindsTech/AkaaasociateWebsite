// src/animations/hero/index.js
// Main entry point for the 3D Architectural Blueprint Animation Engine.

import { createScene } from './createScene';
import { project3DNodes, sortLinesByDepth } from './projection';
import { drawLines, drawNodes, drawParticles } from './renderer';
import { drawHUDOverlay } from './hud';
import { BUILDING, CAMERA, ANIMATION } from './constants';

/**
 * Initializes and starts the 3D Hero Blueprint Animation.
 * @param {Object} params
 * @param {HTMLCanvasElement} params.canvas
 * @param {HTMLElement} params.container
 * @param {Object} params.themeRef - React ref pointing to current theme string ('dark' | 'light')
 * @returns {Function} Cleanup function to stop animation and detach listeners
 */
export function startHeroAnimation({ canvas, container, themeRef }) {
  if (!canvas || !container) return () => {};

  const ctx = canvas.getContext('2d');
  let animationFrameId;
  let width = 0;
  let height = 0;
  let dpr = 1;

  // Mouse Parallax State
  let targetMouseX = 0;
  let targetMouseY = 0;
  let currentMouseX = 0;
  let currentMouseY = 0;

  const handleMouseMove = (e) => {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    targetMouseX = (x / rect.width - 0.5) * 2;
    targetMouseY = (y / rect.height - 0.5) * 2;
  };

  window.addEventListener('mousemove', handleMouseMove);

  // Resize & Retina DPR Scaling
  const handleResize = () => {
    dpr = window.devicePixelRatio || 1;
    width = container.offsetWidth;
    height = container.offsetHeight;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    ctx.scale(dpr, dpr);
  };

  handleResize();
  window.addEventListener('resize', handleResize);

  // ── 1. Create Static 3D Scene Geometry (Executed ONCE) ──────────
  const { nodes, lines, particles, floorNodeIndices } = createScene();

  // ── 2. Animation Physics State ──────────────────────────────────
  let angleY = ANIMATION.initialAngleY;
  const angleX = ANIMATION.initialAngleX;
  let scanY = -BUILDING.height / 2;
  let scanDirection = 1;

  // ── 3. Render Loop ──────────────────────────────────────────────
  const render = () => {
    ctx.clearRect(0, 0, width, height);

    // Theme Detection
    const isDark =
      document.documentElement.classList.contains('dark') ||
      (themeRef && themeRef.current === 'dark');

    // Smooth Mouse Interpolation
    currentMouseX += (targetMouseX - currentMouseX) * ANIMATION.mouseSmoothFactor;
    currentMouseY += (targetMouseY - currentMouseY) * ANIMATION.mouseSmoothFactor;

    // Orbital Rotations
    angleY += ANIMATION.rotationSpeedY;
    const rotY = angleY + currentMouseX * ANIMATION.mouseParallaxY;
    const rotX = angleX + currentMouseY * ANIMATION.mouseParallaxX;

    // Scanline Elevation Movement
    scanY += scanDirection * ANIMATION.scanSpeed;
    const scanLimit = BUILDING.height / 2 + 40;
    if (scanY > scanLimit) scanDirection = -1;
    if (scanY < -scanLimit) scanDirection = 1;

    // 3D to 2D Perspective Projection
    const projNodes = project3DNodes(nodes, rotX, rotY, width, height);

    // Depth Sorting
    const sortedLines = sortLinesByDepth(lines, projNodes, scanY);

    // Render Structural Wireframe & Foundation Grid
    drawLines(ctx, sortedLines, isDark);

    // Render Structural Nodes & Coordinate Dots
    drawNodes(ctx, projNodes, isDark, scanY);

    // Render Floating Particles
    const centerX = width * CAMERA.centerXRatio;
    const centerY = height * CAMERA.centerYRatio;
    drawParticles(
      ctx,
      particles,
      rotX,
      rotY,
      centerX,
      centerY,
      CAMERA.fov,
      isDark
    );

    // Render HUD Callout Overlays
    drawHUDOverlay(
      ctx,
      projNodes,
      floorNodeIndices,
      isDark,
      width,
      height,
      scanY
    );

    animationFrameId = requestAnimationFrame(render);
  };

  render();

  // ── Cleanup Handler ─────────────────────────────────────────────
  return () => {
    cancelAnimationFrame(animationFrameId);
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('resize', handleResize);
  };
}
