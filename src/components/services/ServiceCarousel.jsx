// src/components/services/ServiceCarousel.jsx
import React, { useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, Building2 } from "lucide-react";
import "./ServiceCarousel.css";

const DEFAULT_FALLBACK_IMAGE = "/akaprojects/Residential/project1/1.webp";

/**
 * ServiceCarousel Component
 * A large, editorial split-carousel showcase for architectural services.
 * Free of visible service numbering and service count dependencies.
 *
 * @param {Array} services - Array of service data objects
 * @param {Function} onSelectContact - Handler when user clicks inquiry action
 */
const ServiceCarousel = ({ services = [], onSelectContact }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [imageError, setImageError] = useState(false);

  if (!services || services.length === 0) return null;

  const currentService = services[activeIndex] || services[0];

  const handleNext = () => {
    setImageError(false);
    setActiveIndex((prev) => (prev + 1) % services.length);
  };

  const handlePrev = () => {
    setImageError(false);
    setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    // Minimum swipe threshold of 45px
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    setTouchStartX(null);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      handlePrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      handleNext();
    }
  };

  const handleEnquire = () => {
    if (onSelectContact) {
      onSelectContact(currentService);
    } else {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div
      className="split-carousel"
      tabIndex={0}
      role="region"
      aria-label="Services Split Carousel"
      aria-roledescription="carousel"
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Main Split Showcase Card */}
      <div className="split-carousel__showcase">
        {/* Left Side: Editorial Text Content (~44%) */}
        <div className="split-carousel__content" key={`content-${currentService.id}`}>
          {/* Subtle Category Header */}
          <div className="split-carousel__header">
            <span className="split-carousel__meta-tag">Architectural Specialty</span>
          </div>

          {/* Service Title & Subtitle */}
          <h3 className="split-carousel__title">{currentService.title}</h3>
          
          {currentService.subtitle && (
            <p className="split-carousel__subtitle">{currentService.subtitle}</p>
          )}

          {/* Thin Editorial Divider */}
          <div className="split-carousel__divider" aria-hidden="true" />

          {/* Description */}
          <p className="split-carousel__description">{currentService.description}</p>

          {/* Highlights (2-3 concise items) */}
          {currentService.highlights && currentService.highlights.length > 0 && (
            <div className="split-carousel__highlights" aria-label="Key highlights">
              {currentService.highlights.map((item, idx) => (
                <div key={idx} className="split-carousel__highlight-item">
                  <CheckCircle2 size={15} className="split-carousel__check-icon" aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          )}

          {/* Inquire Action Button */}
          <div className="split-carousel__action-wrap">
            <button
              type="button"
              className="split-carousel__inquire-btn"
              onClick={handleEnquire}
              aria-label={`Inquire about ${currentService.title} service`}
            >
              <span>Inquire About {currentService.title}</span>
              <ArrowUpRight size={17} className="split-carousel__inquire-icon" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Right Side: Large Architectural Image Frame (~56%) */}
        <div className="split-carousel__media" key={`media-${currentService.id}`}>
          {!imageError ? (
            <img
              src={currentService.image || DEFAULT_FALLBACK_IMAGE}
              alt={currentService.alt || `${currentService.title} architectural service preview`}
              className="split-carousel__image"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="split-carousel__fallback" aria-hidden="true">
              <Building2 size={48} className="split-carousel__fallback-icon" />
              <span className="split-carousel__fallback-text">{currentService.title}</span>
            </div>
          )}

          <div className="split-carousel__overlay" aria-hidden="true" />
        </div>
      </div>

      {/* Navigation Controls Bar */}
      <div className="split-carousel__nav-bar">
        {/* Previous Button */}
        <button
          type="button"
          className="split-carousel__nav-btn split-carousel__nav-btn--prev"
          onClick={handlePrev}
          aria-label="Previous service"
        >
          <ArrowLeft size={18} aria-hidden="true" />
          <span className="split-carousel__nav-text">Previous</span>
        </button>

        {/* Center Indicator Dots / Pills */}
        <div
          className="split-carousel__indicators"
          role="tablist"
          aria-label="Service carousel indicators"
        >
          {services.map((service, index) => (
            <button
              key={service.id}
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={`Go to ${service.title}`}
              className={`split-carousel__dot ${
                index === activeIndex ? "split-carousel__dot--active" : ""
              }`}
              onClick={() => {
                setImageError(false);
                setActiveIndex(index);
              }}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          type="button"
          className="split-carousel__nav-btn split-carousel__nav-btn--next"
          onClick={handleNext}
          aria-label="Next service"
        >
          <span className="split-carousel__nav-text">Next</span>
          <ArrowRight size={18} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

export default ServiceCarousel;
