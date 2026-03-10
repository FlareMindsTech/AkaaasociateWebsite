// src/sections/Testimonials.jsx
import React from "react";
import { Quote, Star } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import { testimonials } from "../data/testimonials";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <section className="testimonials section section--bg" id="testimonials">
      <div className="container">
        <SectionTitle
          label="Client Feedback"
          title="What Our Partners Say"
          subtitle="Don't just take our word for it. Hear from those who have trusted us to build their vision from the ground up."
        />

        <div className="testimonials__grid">
          {testimonials.map((test) => (
            <div key={test.id} className="testimonial-card">
              <Quote size={40} className="testimonial-card__quote-icon" />
              <div className="testimonial-card__stars">
                {[...Array(test.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="testimonial-card__quote">"{test.quote}"</p>

              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar">
                  {test.avatar}
                </div>
                <div className="testimonial-card__info">
                  <h4 className="testimonial-card__name">{test.name}</h4>
                  <p className="testimonial-card__title">{test.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
