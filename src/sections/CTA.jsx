// src/sections/CTA.jsx
import React from "react";
import Button from "../components/Button";
import "./CTA.css";

const CTA = () => {
  return (
    <section className="cta section">
      <div className="container">
        <div className="cta__banner">
          {/* Abstract BG pattern setup in CSS */}
          <div className="cta__content">
            <h2 className="cta__title">Ready to build your dream space?</h2>
            <p className="cta__desc">
              Schedule a free consultation with our expert architects and structural engineers today. Let's turn your vision into blueprint, and your blueprint into reality.
            </p>
            <div className="cta__actions">
              <Button
                variant="primary"
                size="lg"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get Started
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="cta__btn-secondary"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                Explore Projects
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
