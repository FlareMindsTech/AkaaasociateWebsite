// src/animations/hero/constants.js
// Central configuration for the 3D Architectural Blueprint Engine.

export const BUILDING = {
  floors: 6,
  width: 220,
  depth: 180,
  height: 320,
};

export const FOUNDATION_GRID = {
  groundSize: 380,
  gridStep: 55, // Clean architectural CAD grid spacing
};

export const CAMERA = {
  fov: 750,
  centerXRatio: 0.52,
  centerYRatio: 0.48,
  depthOffset: 400,
};

export const ANIMATION = {
  initialAngleY: 0.6,
  initialAngleX: 0.25,
  rotationSpeedY: 0.003,
  mouseSmoothFactor: 0.05,
  mouseParallaxY: 0.3,
  mouseParallaxX: 0.15,
  scanSpeed: 1.2,
  scanHitThreshold: 18,
  scanGlowRange: 35,
  particleCount: 35,
  particleBoundX: 450,
  particleBoundY: 380,
  particleBoundZ: 450,
};
