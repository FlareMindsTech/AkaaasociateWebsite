// src/components/services/ServiceCard.jsx
import React from "react";
import {
  HardHat,
  Compass,
  Building2,
  Sofa,
  BadgeIndianRupee,
  MessageSquare,
  FileCheck,
  ClipboardCheck,
  Hammer,
  DraftingCompass,
  Columns3,
  ArrowRight,
} from "lucide-react";
import "./ServiceCard.css";

// Clean mapping of services to architectural Lucide icons
const SERVICE_ICONS = {
  "Construction": HardHat,
  "Vasthu Plan": Compass,
  "Elevation": Building2,
  "Interior Design": Sofa,
  "Housing Loan": BadgeIndianRupee,
  "Consultation": MessageSquare,
  "Building Approval": FileCheck,
  "Building Valuation": ClipboardCheck,
  "Renovation & Repair Works": Hammer,
  "Structural Design": DraftingCompass,
  "Steel Structures": Columns3,
};

/**
 * ServiceCard Component
 * Compact, image-free architectural service card for the horizontal carousel.
 *
 * @param {Object} service - Service data object
 */
const ServiceCard = ({ service }) => {
  const formattedIndex = String(service.id).padStart(2, "0");
  const Icon = SERVICE_ICONS[service.title] || Building2;

  const handleSelect = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleSelect();
    }
  };

  return (
    <article
      className="service-card"
      onClick={handleSelect}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`Discuss ${service.title} with our team`}
    >
      <div className="service-card__top">
        <span className="service-card__number">{formattedIndex}</span>
        <div className="service-card__icon-box">
          <Icon size={22} className="service-card__icon" aria-hidden="true" />
        </div>
      </div>

      <div className="service-card__body">
        <h3 className="service-card__title">{service.title}</h3>
      </div>

      <div className="service-card__footer">
        <span className="service-card__action">
          <span>Discuss this service</span>
          <ArrowRight size={14} className="service-card__arrow" aria-hidden="true" />
        </span>
      </div>
    </article>
  );
};

export default ServiceCard;
