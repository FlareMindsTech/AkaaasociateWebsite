// src/sections/About.jsx
import React from "react";
import { CheckCircle2 } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import blueprintsImg from "../assets/img/blue.png";
import "./About.css";

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container about__inner">
        {/* Images */}
        <div className="about__gallery">
          <div className="about__img-main">
            <img
              src={blueprintsImg}
              alt="Engineers reviewing blueprints"
              loading="lazy"
            />
          </div>
          <div className="about__img-sub">
            <img
              src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=600&q=80"
              alt="Completed residential project"
              loading="lazy"
            />
          </div>
          <div className="about__experience-badge">
            <span className="about__badge-num">18+</span>
            <span className="about__badge-text">Years of<br />Excellence</span>
          </div>
        </div>

        {/* Content */}
        <div className="about__content">
          <SectionTitle
            label="Who We Are"
            title="Building the Future<br/>with Integrity &amp; Precision"
            align="left"
          />
          <p className="about__text">
            AKA Associates has been at the forefront of the construction and architectural industry for over 18 years. We specialize in transforming bold visions into tangible realities across residential, commercial, and industrial sectors.
          </p>
          <p className="about__text">
            Our team of expert architects, engineers, and project managers are united by a single goal: delivering uncompromising quality, on time and within budget.
          </p>

          <ul className="about__list">
            {[
              "Award-Winning Architectural Designs",
              "Premium Materials & Craftsmanship",
              "Transparent Project Tracking",
              "Timely Delivery & Handover",
            ].map((item) => (
              <li key={item} className="about__list-item">
                <CheckCircle2 size={18} className="about__list-icon" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="about__cta">
            <Button
              variant="primary"
              size="lg"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Contact Our Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
