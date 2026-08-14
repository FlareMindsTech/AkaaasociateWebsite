// src/animations/hero/createParticles.js
// Generates floating dust / blueprint particles with randomized velocities.

import { ANIMATION, BUILDING } from './constants';

/**
 * Generates floating particle points for the blueprint scene.
 * @param {number} count
 * @returns {Array} Array of particle objects
 */
export function createParticles(count = ANIMATION.particleCount) {
  const particles = [];
  const { particleBoundX, particleBoundY, particleBoundZ } = ANIMATION;

  for (let i = 0; i < count; i++) {
    particles.push({
      x: (Math.random() - 0.5) * particleBoundX,
      y: (Math.random() - 0.5) * particleBoundY,
      z: (Math.random() - 0.5) * particleBoundZ,
      speedY: 0.15 + Math.random() * 0.3,
      radius: 0.8 + Math.random() * 1.4,
      yLimit: BUILDING.height / 2 + 100,
    });
  }

  return particles;
}
