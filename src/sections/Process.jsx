// src/sections/Process.jsx
import React from "react";
import SectionTitle from "../components/SectionTitle";
import "./Process.css";

const STEPS = [
  {
    num: "01",
    title: "Initial Consultation & Planning",
    desc: "We start by understanding your vision, requirements, and budget. Our team conducts site visits and prepares a preliminary project roadmap.",
  },
  {
    num: "02",
    title: "Design & Architectural Documentation",
    desc: "Our architects create detailed 3D models, floor plans, and secure all necessary regulatory approvals before construction begins.",
  },
  {
    num: "03",
    title: "Execution & Construction",
    desc: "Our skilled engineers and labor force bring the blueprints to life using premium materials, adhering strictly to safety standards.",
  },
  {
    num: "04",
    title: "Quality Check & Handover",
    desc: "A rigorous multi-point inspection ensures flawless finishing. Keys are handed over only when absolute perfection is achieved.",
  },
];

const Process = () => {
  return (
    <section className="process section section--bg" id="process">
      <div className="container">
        <SectionTitle
          label="How We Work"
          title="Our Proven 4-Step<br/>Construction Process"
          subtitle="A transparent, streamlined approach designed to deliver excellence from the first sketch to the final handover."
        />

        <div className="process__timeline">
          {STEPS.map((step, index) => (
            <div key={step.num} className="process-step">
              <div className="process-step__number-col">
                <span className="process-step__number">{step.num}</span>
                {index !== STEPS.length - 1 && <div className="process-step__line" />}
              </div>
              <div className="process-step__content">
                <h3 className="process-step__title">{step.title}</h3>
                <p className="process-step__desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
