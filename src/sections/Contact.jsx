// src/sections/Contact.jsx
import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact section section--bg" id="contact">
      <div className="container">
        <SectionTitle
          label="Get in Touch"
          title="Let's Start Building"
          subtitle="Have a project in mind? Contact our team of experts to discuss your requirements and get a comprehensive project estimate."
        />

        <div className="contact__inner">
          {/* Info Side */}
          <div className="contact__info">
            <h3 className="contact__info-title">Global Headquarters</h3>

            <div className="contact__methods">
              <div className="contact-method">
                <div className="contact-method__icon-wrap">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="contact-method__label">Address</h4>
                  <p className="contact-method__val">4th Floor, AKA Tower, MG Road<br />Hyderabad – 500001, Telangana</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-method__icon-wrap">
                  <Phone size={22} />
                </div>
                <div>
                  <h4 className="contact-method__label">Phone</h4>
                  <a href="tel:+919876543210" className="contact-method__val">+91 98765 43210</a>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-method__icon-wrap">
                  <Mail size={22} />
                </div>
                <div>
                  <h4 className="contact-method__label">Email Address</h4>
                  <a href="mailto:info@akaassociates.in" className="contact-method__val">info@akaassociates.in</a>
                </div>
              </div>
            </div>

            <div className="contact__map">
              {/* Dummy Map Placeholder */}
              <div className="contact__map-placeholder">
                <MapPin size={32} opacity={0.5} />
                <span>Interactive Map View</span>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="contact__form-wrapper">
            <h3 className="contact__form-title">Send us a Message</h3>
            <form className="contact__form" onSubmit={(e) => e.preventDefault()}>
              <div className="contact__form-grid">
                <div className="input-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" placeholder="John Doe" />
                </div>
                <div className="input-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" placeholder="+91 XXXXX XXXXX" />
                </div>
              </div>

              <div className="input-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="john@example.com" />
              </div>

              <div className="input-group">
                <label htmlFor="service">Service Required</label>
                <select id="service">
                  <option value="">Select a service...</option>
                  <option value="arch">Architectural Design</option>
                  <option value="res">Residential Construction</option>
                  <option value="com">Commercial Project</option>
                  <option value="ren">Renovation</option>
                </select>
              </div>

              <div className="input-group">
                <label htmlFor="message">Project Details</label>
                <textarea id="message" rows="5" placeholder="Tell us about your project..."></textarea>
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                rightIcon={<Send size={16} />}
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
