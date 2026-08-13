// src/sections/About.jsx
import React from "react";
import { CheckCircle2 } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import blueprintsImg from "../assets/img/blue.png";
import houseImg from "../assets/img/houseFront.jpg";
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
              src={houseImg}
              alt="Completed residential project"
              loading="lazy"
            />
          </div>
          <div className="about__experience-badge">
            <span className="about__badge-num">5+</span>
            <span className="about__badge-text">Years of<br />Experience</span>
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
            AKA Associates is a growing construction and architectural firm focused on creating practical, well-designed spaces for our clients. We work closely with homeowners and businesses to understand their requirements and turn their ideas into thoughtfully planned projects.
          </p>
          <p className="about__text">
            From planning and building approvals to construction, elevation, interiors, and renovation, we provide a range of services under one roof. Our approach is simple — understand the client's needs, maintain quality throughout the project, and deliver with transparency.
          </p>

          <ul className="about__list">
            {[
              "Practical & Modern Designs",
              "Quality Materials & Workmanship",
              "Clear Communication",
              "Reliable Project Delivery",
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
