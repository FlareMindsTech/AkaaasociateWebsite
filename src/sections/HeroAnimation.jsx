// src/sections/HeroAnimation.jsx
import React, { useEffect, useRef } from 'react';
import { startHeroAnimation } from '../animations/hero';
import './HeroAnimation.css';

/**
 * HeroAnimation React Component
 * Encapsulates the canvas DOM mounting and lifecycle for the 3D Blueprint engine.
 */
const HeroAnimation = ({ theme = 'dark' }) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const themeRef = useRef(theme);

  // Keep themeRef updated so the animation loop always has the latest theme state
  useEffect(() => {
    themeRef.current = theme;
  }, [theme]);

  // Start animation on mount and clean up on unmount
  useEffect(() => {
    const cleanup = startHeroAnimation({
      canvas: canvasRef.current,
      container: containerRef.current,
      themeRef,
    });

    return cleanup;
  }, []);

  return (
    <div className="hero-anim" ref={containerRef} aria-hidden="true">
      <canvas ref={canvasRef} className="hero-anim__canvas" />
    </div>
  );
};

export default HeroAnimation;
