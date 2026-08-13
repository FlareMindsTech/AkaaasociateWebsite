// src/components/projects/ProjectGallery.jsx
import React, { useState, useEffect, useCallback, useRef } from "react";
import { X, ChevronLeft, ChevronRight, Images } from "lucide-react";
import "./ProjectGallery.css";

/**
 * ProjectGallery Component
 * An accessible, responsive modal lightbox for browsing all photographs of a selected project.
 * Supports keyboard navigation (Escape, ArrowLeft, ArrowRight), touch gestures,
 * thumbnail preview strip, and smooth transitions.
 *
 * @param {Object} project - The active project object
 * @param {Function} onClose - Callback invoked to dismiss the gallery modal
 * @param {number} [initialIndex=0] - Starting image index
 */
const ProjectGallery = ({ project, onClose, initialIndex = 0 }) => {
  const images = project?.images || [];
  const total = images.length;
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // References for thumbnail scrolling and touch detection
  const thumbnailRefs = useRef([]);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Navigate to previous photograph
  const goToPrev = useCallback(() => {
    setIsImageLoaded(false);
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  }, [total]);

  // Navigate to next photograph
  const goToNext = useCallback(() => {
    setIsImageLoaded(false);
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  }, [total]);

  // Direct jump to a specific photo index
  const selectImage = (index) => {
    if (index === currentIndex) return;
    setIsImageLoaded(false);
    setCurrentIndex(index);
  };

  // Keyboard navigation & Escape key handling
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        goToPrev();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, goToPrev, goToNext]);

  // Prevent background page scrolling while gallery modal is active
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  // Smoothly scroll active thumbnail into viewport in thumbnail strip
  useEffect(() => {
    if (thumbnailRefs.current[currentIndex]) {
      thumbnailRefs.current[currentIndex].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [currentIndex]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 45) {
      if (diff > 0) {
        goToNext(); // Swiped left -> next
      } else {
        goToPrev(); // Swiped right -> prev
      }
    }
  };

  if (!project || total === 0) return null;

  const currentImageSrc = images[currentIndex];

  return (
    <div
      className="gallery-modal"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} Gallery`}
    >
      {/* Backdrop */}
      <div className="gallery-modal__backdrop" onClick={onClose} />

      <div className="gallery-modal__container">
        {/* Modal Top Header */}
        <header className="gallery-modal__header">
          <div className="gallery-modal__info">
            <h2 className="gallery-modal__title">{project.title}</h2>
          </div>

          <div className="gallery-modal__controls-top">
            <div className="gallery-modal__counter" aria-live="polite">
              <span>
                {String(currentIndex + 1).padStart(2, "0")}{" "}
                <span className="gallery-modal__counter-divider">/</span>{" "}
                {String(total).padStart(2, "0")}
              </span>
            </div>

            <button
              type="button"
              className="gallery-modal__close-btn"
              onClick={onClose}
              aria-label="Close gallery (Esc)"
              title="Close (Esc)"
            >
              <X size={20} aria-hidden="true" />
            </button>
          </div>
        </header>

        {/* Main Stage Viewport */}
        <div
          className="gallery-modal__stage"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Navigation - Previous */}
          {total > 1 && (
            <button
              type="button"
              className="gallery-modal__nav gallery-modal__nav--prev"
              onClick={goToPrev}
              aria-label="Previous photograph"
              title="Previous (Left Arrow)"
            >
              <ChevronLeft size={24} aria-hidden="true" />
            </button>
          )}

          {/* Active Image Container */}
          <div className="gallery-modal__image-wrapper">
            <img
              key={currentImageSrc}
              src={currentImageSrc}
              alt={`${project.title} - Photograph ${currentIndex + 1} of ${total}`}
              className={`gallery-modal__image ${isImageLoaded ? "gallery-modal__image--loaded" : ""}`}
              onLoad={() => setIsImageLoaded(true)}
            />
          </div>

          {/* Navigation - Next */}
          {total > 1 && (
            <button
              type="button"
              className="gallery-modal__nav gallery-modal__nav--next"
              onClick={goToNext}
              aria-label="Next photograph"
              title="Next (Right Arrow)"
            >
              <ChevronRight size={24} aria-hidden="true" />
            </button>
          )}
        </div>

        {/* Bottom Thumbnail Strip */}
        {total > 1 && (
          <footer className="gallery-modal__thumbnails-wrapper">
            <div className="gallery-modal__thumbnails">
              {images.map((imgSrc, index) => {
                const isActive = index === currentIndex;
                return (
                  <button
                    key={imgSrc + index}
                    ref={(el) => (thumbnailRefs.current[index] = el)}
                    type="button"
                    className={`gallery-modal__thumb-btn ${
                      isActive ? "gallery-modal__thumb-btn--active" : ""
                    }`}
                    onClick={() => selectImage(index)}
                    aria-label={`View photo ${index + 1} of ${total}`}
                    aria-current={isActive ? "true" : "false"}
                  >
                    <img
                      src={imgSrc}
                      alt={`Thumbnail ${index + 1}`}
                      className="gallery-modal__thumb-img"
                      loading="lazy"
                    />
                    <span className="gallery-modal__thumb-num">{index + 1}</span>
                  </button>
                );
              })}
            </div>
          </footer>
        )}
      </div>
    </div>
  );
};

export default ProjectGallery;
