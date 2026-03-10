// src/sections/Hero.jsx
import React from "react";
import { ArrowDown } from "lucide-react";
import "./Hero.css";

const Hero = () => {
  const scrollToServices = () => {
    const el = document.getElementById("services");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" id="home">
      {/* Background */}
      <div className="hero__bg">
        <img
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1800&q=85"
          alt="Modern construction project by AKA Associates"
          className="hero__bg-img"
        />
        <div className="hero__overlay" />
      </div>

      {/* Content */}
      <div className="container hero__content">
        <div className="hero__badge fade-up-1">
          <span className="hero__badge-dot" />
          Trusted Builders Since 2005
        </div>

        <h1 className="hero__heading fade-up-2">
          Building the Future,<br />
          <span className="hero__heading-accent">One Vision at a Time</span>
        </h1>

        <p className="hero__subheading fade-up-3">
          AKA Associates delivers world-class architectural design, residential, and commercial construction projects crafted with precision, integrity, and long-term structural excellence.
        </p>

        <div className="hero__cta-group slide-up-1">
          <button
            className="hero__btn-primary"
            onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
          >
            Get Free Consultation
          </button>
          <button
            className="hero__btn-secondary"
            onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}
          >
            View Our Projects
          </button>
        </div>

        {/* Stats */}
        <div className="hero__stats">
          {[
            { value: "18+", label: "Years Experience" },
            { value: "340+", label: "Projects Completed" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "12", label: "States Across India" },
          ].map((stat, i) => (
            <div key={stat.label} className={`hero__stat-card fade-in-stagger-${i + 1}`}>
              <span className="hero__stat-value">{stat.value}</span>
              <span className="hero__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <button className="hero__scroll-btn bounce" onClick={scrollToServices} aria-label="Scroll down">
        <ArrowDown size={18} />
      </button>
    </section>
  );
};

export default Hero;
