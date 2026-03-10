// src/sections/Services.jsx
import React from "react";
import {
  DraftingCompass,
  Home,
  Building2,
  LayoutDashboard,
  ClipboardList,
  Hammer,
} from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import { services } from "../data/services";
import "./Services.css";

const ICON_MAP = {
  "drafting-compass": DraftingCompass,
  "home": Home,
  "building-2": Building2,
  "layout-dashboard": LayoutDashboard,
  "clipboard-list": ClipboardList,
  "hammer": Hammer,
};

const Services = () => {
  return (
    <section className="services section section--bg" id="services">
      <div className="container">
        <SectionTitle
          label="What We Do"
          title="Comprehensive Construction &amp;<br/>Design Services"
          subtitle="From architectural blueprints to the final brick, we manage every aspect of your project with expertise and care."
        />

        <div className="services__grid">
          {services.map((service, index) => {
            const Icon = ICON_MAP[service.icon] || Building2;
            return (
              <div className="service-card" key={service.id} style={{ animationDelay: `${index * 0.08}s` }}>
                <div className="service-card__icon">
                  <Icon size={24} />
                </div>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__desc">{service.description}</p>
                <a
                  href="/#contact"
                  className="service-card__link"
                  onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                >
                  Learn More
                  <span className="service-card__link-arrow">&rarr;</span>
                </a>
              </div>
            );
          })}
        </div>

        <div className="services__cta">
          <Button
            variant="outline"
            size="lg"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Discuss Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
