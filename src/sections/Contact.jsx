// src/sections/Contact.jsx
import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import { services } from "../data/services";
import { submitContactForm } from "../services/contactForm";
import "./Contact.css";

const INITIAL_FORM_DATA = {
  name: "",
  phone: "",
  email: "",
  service: "",
  message: "",
};

const Contact = () => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // "idle" | "loading" | "success" | "error"
  const [statusMessage, setStatusMessage] = useState("");

  /**
   * Client-side validation for contact enquiry
   */
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Please enter a valid full name";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9+()\s-]{7,18}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    ) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.service) {
      newErrors.service = "Please select a required service";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Project details are required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Please provide at least 10 characters describing your project";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear validation error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }

    // Reset status banner on new edits
    if (status !== "idle") {
      setStatus("idle");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (status === "loading") {
      return;
    }

    if (!validateForm()) {
      return;
    }

    setStatus("loading");
    setStatusMessage("");

    const result = await submitContactForm(formData);

    if (result.success) {
      setStatus("success");
      setStatusMessage(result.message);
      setFormData(INITIAL_FORM_DATA);
      setErrors({});
    } else {
      setStatus("error");
      setStatusMessage(result.message);
      // Retain formData so user can retry without re-typing
    }
  };

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
                  <MapPin size={22} aria-hidden="true" />
                </div>
                <div>
                  <h4 className="contact-method__label">Address</h4>
                  <p className="contact-method__val">
                    3/251, Pakkirisamy Nagar,<br />
                    Vadaseri Road, Mannargudi, 614001
                  </p>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-method__icon-wrap">
                  <Phone size={22} aria-hidden="true" />
                </div>
                <div>
                  <h4 className="contact-method__label">Phone</h4>
                  <a href="tel:+918667051418" className="contact-method__val">
                    +91 86670 51418
                  </a>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-method__icon-wrap">
                  <Mail size={22} aria-hidden="true" />
                </div>
                <div>
                  <h4 className="contact-method__label">Email Address</h4>
                  <a
                    href="mailto:akaassociatesglobal@gmail.com"
                    className="contact-method__val"
                  >
                    akaassociatesglobal@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="contact__map">
              {/* Static Map Image showing AKA Associates location in Mannargudi, Tamil Nadu */}
              <img
                src="/images/location-map.webp"
                alt="AKA Associates location in Mannargudi, Tamil Nadu"
                className="contact__map-image"
                loading="lazy"
              />

              {/* Pin indicator marker */}
              <div className="contact__map-pin" aria-hidden="true">
                <MapPin size={22} className="contact__map-pin-icon" />
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=AKA+Associates+3%2F251+Pakkirisamy+Nagar+Vadaseri+Road+Mannargudi+614001+Tamil+Nadu"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__map-link"
                aria-label="Open AKA Associates location in Google Maps (opens in new tab)"
              >
                <span>Open in Google Maps</span>
                <ExternalLink size={13} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Form Side */}
          <div className="contact__form-wrapper">
            <h3 className="contact__form-title">Send us a Message</h3>

            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              <div className="contact__form-grid">
                {/* Full Name */}
                <div className={`input-group ${errors.name ? "input-group--error" : ""}`}>
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    disabled={status === "loading"}
                  />
                  {errors.name && (
                    <span className="input-group__error" id="name-error">
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Phone Number */}
                <div className={`input-group ${errors.phone ? "input-group--error" : ""}`}>
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    disabled={status === "loading"}
                  />
                  {errors.phone && (
                    <span className="input-group__error" id="phone-error">
                      {errors.phone}
                    </span>
                  )}
                </div>
              </div>

              {/* Email Address */}
              <div className={`input-group ${errors.email ? "input-group--error" : ""}`}>
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  disabled={status === "loading"}
                />
                {errors.email && (
                  <span className="input-group__error" id="email-error">
                    {errors.email}
                  </span>
                )}
              </div>

              {/* Service Required Dropdown (Dynamic from services.js) */}
              <div className={`input-group ${errors.service ? "input-group--error" : ""}`}>
                <label htmlFor="service">Service Required *</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  aria-invalid={!!errors.service}
                  aria-describedby={errors.service ? "service-error" : undefined}
                  disabled={status === "loading"}
                >
                  <option value="">Select a service...</option>
                  {services.map((service) => (
                    <option key={service.id} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <span className="input-group__error" id="service-error">
                    {errors.service}
                  </span>
                )}
              </div>

              {/* Project Details */}
              <div className={`input-group ${errors.message ? "input-group--error" : ""}`}>
                <label htmlFor="message">Project Details *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project, location, plot size, or specific requirements..."
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  disabled={status === "loading"}
                ></textarea>
                {errors.message && (
                  <span className="input-group__error" id="message-error">
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Status Feedback Alerts */}
              {status === "success" && (
                <div
                  className="contact__status contact__status--success"
                  role="status"
                  aria-live="polite"
                >
                  <CheckCircle2 size={18} className="contact__status-icon" aria-hidden="true" />
                  <span>{statusMessage}</span>
                </div>
              )}

              {status === "error" && (
                <div
                  className="contact__status contact__status--error"
                  role="alert"
                  aria-live="assertive"
                >
                  <AlertCircle size={18} className="contact__status-icon" aria-hidden="true" />
                  <span>{statusMessage}</span>
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                disabled={status === "loading"}
                rightIcon={
                  status === "loading" ? (
                    <Loader2 size={16} className="contact__spin" aria-hidden="true" />
                  ) : (
                    <Send size={16} aria-hidden="true" />
                  )
                }
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
