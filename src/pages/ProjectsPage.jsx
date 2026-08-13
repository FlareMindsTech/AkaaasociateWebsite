// src/pages/ProjectsPage.jsx
import React, { useState, useMemo, useEffect } from "react";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/projects/ProjectCard";
import ProjectGallery from "../components/projects/ProjectGallery";
import { projects } from "../data/projects";
import "./ProjectsPage.css";

/**
 * ProjectsPage — Dedicated full portfolio page (/projects)
 *
 * Displays ALL projects from the dataset with dynamic category filtering.
 * Categories are derived from the data — never hardcoded.
 *
 * Architecture:
 *   data/projects.js    → source of truth
 *   ProjectCard         → renders each project preview
 *   ProjectGallery      → lightbox for browsing a project's images
 */
const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  // Scroll to top when the page mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Derive available categories from current dataset.
  // If a new category is added to projects.js, it appears here automatically.
  const availableCategories = useMemo(() => {
    const unique = Array.from(
      new Set(projects.map((p) => p.category).filter(Boolean))
    );
    return ["All", ...unique];
  }, []);

  // Filter projects based on selected category
  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
  };

  return (
    <div className="projects-page">
      <div className="container">
        {/* Page Header */}
        <div className="projects-page__header">
          <SectionTitle
            label="Our Portfolio"
            title="Projects"
            subtitle="Explore our complete collection of residential construction and interior design work."
          />
        </div>

        {/* Dynamic Category Filters */}
        <div
          className="projects-page__filters"
          role="tablist"
          aria-label="Project Categories"
        >
          {availableCategories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                role="tab"
                aria-selected={isActive}
                className={`projects-page__filter-btn ${
                  isActive ? "projects-page__filter-btn--active" : ""
                }`}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Project Grid */}
        <div className="projects-page__grid">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isHero={false}
              onSelect={handleProjectSelect}
            />
          ))}
        </div>

        {/* Empty state — if a filter yields no results */}
        {filteredProjects.length === 0 && (
          <p className="projects-page__empty">
            No projects found in this category.
          </p>
        )}
      </div>

      {/* Lightbox Photo Gallery — renders only when a project is selected */}
      {selectedProject && (
        <ProjectGallery
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default ProjectsPage;
