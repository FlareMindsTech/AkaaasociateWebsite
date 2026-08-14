// src/sections/Hero.jsx
import React from 'react';
import { ArrowRight } from 'lucide-react';
import HeroAnimation from './HeroAnimation';
import './Hero.css';

const METRICS = [
  { value: '5+', label: 'Years' },
  { value: '50+', label: 'Projects' },
  { value: '100%', label: 'Commitment' },
];

const Hero = ({ theme = 'light' }) => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home">

      {/* Right-side architectural blueprint visual */}
      <HeroAnimation theme={theme} />

      {/* Grain texture overlay */}
      <div className="hero__noise" aria-hidden="true" />

      {/* Content — left zone */}
      <div className="container">
        <div className="hero__content">

          {/* Label */}
          <span className="hero__label">
            <span className="hero__label-dash" aria-hidden="true" />
            Architects &amp; Builders — Mannargudi
          </span>

          {/* Headline */}
          <h1 className="hero__heading">
            We design and build{' '}
            <em className="hero__heading-em">spaces</em> that
            define how people live.
          </h1>

          {/* Supporting text */}
          <p className="hero__sub">
            From architectural blueprints to finished construction —
            residential, commercial, and interior projects delivered
            with precision across Mannargudi and Tamil Nadu.
          </p>

          {/* Actions */}
          <div className="hero__actions">
            <button
              className="hero__cta"
              onClick={() => scrollTo('contact')}
            >
              Start Your Project
              <ArrowRight size={16} className="hero__cta-icon" />
            </button>
            <button
              className="hero__link"
              onClick={() => scrollTo('projects')}
            >
              View our work
            </button>
          </div>

          {/* Metrics */}
          <div className="hero__metrics">
            {METRICS.map((m) => (
              <div key={m.label} className="hero__metric">
                <span className="hero__metric-value">{m.value}</span>
                <span className="hero__metric-label">{m.label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
};

export default Hero;
