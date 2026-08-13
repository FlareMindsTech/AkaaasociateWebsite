// src/sections/Services.jsx
import React from "react";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import ServiceCard from "../components/services/ServiceCard";
import { services } from "../data/services";
import "./Services.css";

/**
 * Services Section
 *
 * A clean, continuous horizontal marquee powered entirely by CSS keyframes.
 * - Slowly and continuously travels from right to left
 * - Seamless infinite loop using two identical service groups
 * - Pauses on hover via CSS animation-play-state
 * - Zero complex state, refs, animation loops, or external carousel libraries
 */
const Services = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="services section section--bg" id="services">
      <div className="container">
        {/* Section Header */}
        <div className="services__header-row">
          <SectionTitle
            label="What We Do"
            title="Services Built Around<br/>Your Project"
            subtitle="From planning and approvals to construction, interiors, and structural work, explore the services we provide."
            align="left"
            className="services__section-title"
          />
        </div>
      </div>

      {/* Infinite Horizontal Marquee */}
      <div className="services__carousel-wrapper">
        {/* Edge Gradient Fades */}
        <div className="services__fade services__fade--left" aria-hidden="true" />
        <div className="services__fade services__fade--right" aria-hidden="true" />

        {/* Marquee Viewport & Track */}
        <div className="services__viewport">
          <div className="services__track">
            {/* First Set of Services */}
            <div className="services__group">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>

            {/* Second Identical Set (creates the seamless infinite loop) */}
            <div className="services__group" aria-hidden="true">
              {services.map((service) => (
                <ServiceCard key={`dup-${service.id}`} service={service} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Bottom CTA */}
        <div className="services__cta">
          <Button variant="outline" size="lg" onClick={scrollToContact}>
            Discuss Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
