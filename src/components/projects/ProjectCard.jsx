// src/components/projects/ProjectCard.jsx
import React from "react";
import { ArrowRight } from "lucide-react";
import "./ProjectCard.css";

/**
 * ProjectCard
 * Reusable project preview card used on both:
 *   - Homepage (sections/Projects.jsx) — with isHero variant for the first card
 *   - Projects page (pages/ProjectsPage.jsx) — uniform grid cards
 *
 * Only loads the cover image (images[0]). Gallery images are NOT loaded
 * until the user actually opens the gallery.
 *
 * @param {Object}   project   - Project data object from projects.js
 * @param {number}   index     - Display index (used for the project number label)
 * @param {boolean}  isHero    - If true, renders as the large hero card (homepage first project)
 * @param {Function} onSelect  - Callback to open the project gallery
 */
const ProjectCard = ({ project, index, isHero = false, onSelect }) => {
  const coverImage = project.images?.[0] || "";
  const photoCount = project.images?.length || 0;
  const formattedIndex = String(index + 1).padStart(2, "0");

  const handleClick = () => onSelect(project);
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onSelect(project);
    }
  };

  return (
    <article
      className={`project-card ${isHero ? "project-card--hero" : "project-card--secondary"}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`View ${project.title} gallery — ${photoCount} photographs`}
    >
      {/* Cover Image */}
      <div className="project-card__image-wrapper">
        <img
          src={coverImage}
          alt={`${project.title} — cover photograph`}
          className="project-card__image"
          loading="lazy"
        />
        <div className="project-card__image-overlay" aria-hidden="true">
          <span className="project-card__overlay-label">View Gallery</span>
        </div>
      </div>

      {/* Project Info */}
      <div className="project-card__info">
        <span className="project-card__number" aria-hidden="true">
          {formattedIndex}
        </span>
        <div className="project-card__text">
          <h3 className="project-card__title">{project.title}</h3>
          <p className="project-card__meta">
            {project.category}
            <span className="project-card__meta-sep" aria-hidden="true">·</span>
            {photoCount} {photoCount === 1 ? "photograph" : "photographs"}
          </p>
        </div>
        <span className="project-card__arrow" aria-hidden="true">
          <ArrowRight size={18} />
        </span>
      </div>
    </article>
  );
};

export default ProjectCard;
