// src/sections/Services.jsx
import React from "react";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import ServiceCarousel from "../components/services/ServiceCarousel";
import ServicesHeaderArtwork from "../components/services/ServicesHeaderArtwork";
import { services } from "../data/services";
import "./Services.css";

/**
 * Services Section
 *
 * Large, editorial split-carousel showcase with vector architectural drafting header artwork.
 * - Centered, balanced header framed by custom architectural technical drawings (Floor Plan & Elevation)
 * - Subtle "PLAN → DESIGN → BUILD" project journey indicator
 * - ONE active service at a time (Left: Text, Right: Large Image)
 * - Zero visible numbering or service counters
 * - Fully responsive with zero horizontal overflow
 */
const Services = () => {
  const scrollToContact = (selectedService) => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });

      // If a specific service was chosen, auto-select it in the contact dropdown
      if (selectedService && selectedService.title) {
        const selectElement = document.getElementById("service");
        if (selectElement) {
          selectElement.value = selectedService.title;
          selectElement.dispatchEvent(new Event("change", { bubbles: true }));
        }
      }
    }
  };

  return (
    <section className="services section section--bg" id="services">
      <div className="container">
        {/* Centered Section Header with Architectural Technical Vector Artwork */}
        <div className="services__header-wrap">
          {/* Architectural Drawing System (Floor Plan Left, Elevation Right, Connecting Datum Lines) */}
          <ServicesHeaderArtwork />

          {/* Centered Main Header Content */}
          <div className="services__header-content">
            <SectionTitle
              label="What We Do"
              title="Services Built Around<br/>Your Project"
              subtitle="From planning and statutory approvals to turnkey construction, interiors, and structural engineering, explore the comprehensive services we provide."
              align="center"
              className="services__section-title"
            />

            {/* Subtle Architectural Project Journey Indicator */}
            <div
              className="services__journey"
              aria-label="Project Journey: Plan, Design, Build"
            >
              <span className="services__journey-step">PLAN</span>
              <span className="services__journey-arrow" aria-hidden="true">→</span>
              <span className="services__journey-step">DESIGN</span>
              <span className="services__journey-arrow" aria-hidden="true">→</span>
              <span className="services__journey-step">BUILD</span>
            </div>
          </div>
        </div>

        {/* Large Editorial Split Carousel */}
        <div className="services__carousel-wrap">
          <ServiceCarousel
            services={services}
            onSelectContact={scrollToContact}
          />
        </div>

        {/* Bottom CTA */}
        <div className="services__cta">
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToContact(null)}
          >
            Discuss Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
