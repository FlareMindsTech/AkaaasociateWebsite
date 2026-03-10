// src/pages/Home.jsx
import React from "react";
import Hero from "../sections/Hero";
import Services from "../sections/Services";
import Projects from "../sections/Projects";
import Process from "../sections/Process";
import About from "../sections/About";
import Testimonials from "../sections/Testimonials";
import CTA from "../sections/CTA";
import Contact from "../sections/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <Process />
      <About />
      <Testimonials />
      <CTA />
      <Contact />
    </>
  );
};

export default Home;