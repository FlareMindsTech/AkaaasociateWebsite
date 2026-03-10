// src/sections/Projects.jsx
import React, { useState } from "react";
import { MapPin, ArrowRight } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import { projects } from "../data/projects";
import "./Projects.css";

const CATEGORIES = ["All", "Residential", "Commercial", "Renovation"];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filtered =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <SectionTitle
          label="Our Portfolio"
          title="Landmark Projects<br/>Across India"
          subtitle="Browse through our portfolio of award-winning residential, commercial, and heritage construction projects."
        />

        {/* Filter Tabs */}
        <div className="projects__tabs">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`projects__tab ${activeTab === cat ? "projects__tab--active" : ""}`}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="projects__grid">
          {filtered.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-card__img-wrap">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-card__img"
                  loading="lazy"
                />
                <div className="project-card__overlay">
                  <Button
                    variant="primary"
                    size="sm"
                    rightIcon={<ArrowRight size={14} />}
                  >
                    View Details
                  </Button>
                </div>
                <span className="project-card__category">{project.category}</span>
              </div>
              <div className="project-card__body">
                <h3 className="project-card__title">{project.title}</h3>
                <div className="project-card__meta">
                  <span className="project-card__location">
                    <MapPin size={13} />
                    {project.location}
                  </span>
                  <span className="project-card__year">{project.year}</span>
                </div>
                <p className="project-card__desc">{project.description}</p>
                <div className="project-card__tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-card__tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects__footer">
          <Button variant="secondary" size="lg" rightIcon={<ArrowRight size={16} />}>
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
