// src/sections/Projects.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/projects/ProjectCard";
import ProjectGallery from "../components/projects/ProjectGallery";
import { projects } from "../data/projects";
import "./Projects.css";

/**
 * Projects Section — Homepage Featured Showcase
 *
 * Displays a compact selection of featured projects (maximum 3).
 * The homepage intentionally limits the number of visible projects
 * so it remains compact regardless of portfolio size.
 *
 * The full project portfolio lives on the dedicated /projects page.
 *
 * Selection strategy:
 * Currently takes the first 3 projects from the dataset.
 * To curate manually, add `featured: true` to project data and
 * the filter below will prefer those automatically.
 */

const FEATURED_COUNT = 3;

const getFeaturedProjects = (allProjects) => {
  // If any project has `featured: true`, prefer those.
  // Otherwise fall back to the first N projects.
  const curated = allProjects.filter((p) => p.featured);
  if (curated.length > 0) {
    return curated.slice(0, FEATURED_COUNT);
  }
  return allProjects.slice(0, FEATURED_COUNT);
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const featuredProjects = getFeaturedProjects(projects);

  // Separate hero (first) from secondary projects
  const heroProject = featuredProjects[0] || null;
  const secondaryProjects = featuredProjects.slice(1);

  return (
    <section className="projects section" id="projects">
      <div className="container">
        {/* Section Header */}
        <SectionTitle
          label="Our Portfolio"
          title="Selected Projects"
          subtitle="A glimpse of our residential construction and interior design work."
        />

        {/* Featured Projects Showcase */}
        <div className="projects__showcase">
          {/* Hero — Large Featured Project */}
          {heroProject && (
            <ProjectCard
              project={heroProject}
              index={0}
              isHero
              onSelect={setSelectedProject}
            />
          )}

          {/* Secondary — Smaller Two-Column Projects */}
          {secondaryProjects.length > 0 && (
            <div className="projects__secondary-row">
              {secondaryProjects.map((project, i) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={i + 1}
                  isHero={false}
                  onSelect={setSelectedProject}
                />
              ))}
            </div>
          )}
        </div>

        {/* View All Projects CTA — navigates to /projects via React Router */}
        <div className="projects__cta-wrapper">
          <Link
            to="/projects"
            className="projects__cta"
            aria-label="View all projects in the full portfolio"
          >
            <span className="projects__cta-text">View All Projects</span>
            <span className="projects__cta-arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      {/* Lightbox Photo Gallery — renders only when a project is selected */}
      {selectedProject && (
        <ProjectGallery
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
