// src/pages/TermsOfService.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText, Mail, Phone, MapPin } from "lucide-react";
import "./TermsOfService.css";

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page">
      <div className="container legal-page__container">
        {/* Navigation Breadcrumb */}
        <div className="legal-page__nav">
          <Link to="/" className="legal-page__back-link">
            <ArrowLeft size={16} aria-hidden="true" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Header */}
        <header className="legal-page__header">
          <div className="legal-page__badge">
            <FileText size={14} aria-hidden="true" />
            <span>Legal Terms</span>
          </div>
          <h1 className="legal-page__title">Terms of Service</h1>
          <p className="legal-page__subtitle">
            Terms and conditions governing the use of the AKA Associates website.
          </p>
          <div className="legal-page__meta">
            <span>Last Updated: August 2026</span>
            <span className="legal-page__meta-divider">•</span>
            <span>Effective: August 2026</span>
          </div>
        </header>

        {/* Content Card */}
        <div className="legal-page__card">
          <div className="legal-page__notice">
            <p>
              <strong>Important Notice:</strong> Submitting an enquiry via our website Contact Form is an initial consultation request only. It does not constitute or create a binding construction contract, quotation agreement, or professional service engagement.
            </p>
          </div>

          <section className="legal-page__section">
            <h2>1. Introduction & Acceptance</h2>
            <p>
              Welcome to the website of AKA Associates (“we,” “our,” or “us”). By accessing or using this website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you should discontinue using the website.
            </p>
          </section>

          <section className="legal-page__section">
            <h2>2. Website Use &amp; Purpose</h2>
            <p>
              This website is provided for informational purposes only. It serves to showcase our architectural design, residential and commercial construction, interior design, building approval, and renovation services, as well as past project portfolio highlights.
            </p>
            <p>
              You agree to use this website only for lawful purposes and in a manner that does not infringe upon the rights of, or restrict the use of this website by, any third party.
            </p>
          </section>

          <section className="legal-page__section">
            <h2>3. Services &amp; Project Enquiries</h2>
            <p>
              Visitors may use the website Contact Form to submit project details, ask questions, or request an initial consultation. Submitting an enquiry enables our team to review your request and get in touch with you regarding preliminary feasibility.
            </p>
          </section>

          <section className="legal-page__section">
            <h2>4. No Contract Through Website Enquiry</h2>
            <p>
              Please note the following critical distinction regarding project agreements:
            </p>
            <ul>
              <li><strong>No Automatic Binding Contract:</strong> The transmission or receipt of an enquiry through this website does not establish a contractual, client-contractor, or architect-client relationship.</li>
              <li><strong>Formal Agreements Required:</strong> All actual architectural planning, structural engineering, construction work, cost estimations, and renovation services are governed strictly by separate, written agreements, formal quotations, and signed contracts executed directly between AKA Associates and the client.</li>
              <li><strong>Estimates &amp; Pricing:</strong> Any indicative pricing, timelines, or project overviews discussed verbally or preliminarily are subject to formal site inspection, material specifications, and finalized documentation.</li>
            </ul>
          </section>

          <section className="legal-page__section">
            <h2>5. Intellectual Property</h2>
            <p>
              All content on this website—including architectural project photographs, designs, 3D renderings, elevations, logos, trademarks, text, graphics, and layout—is the property of AKA Associates or used with permission, and is protected by applicable copyright and intellectual property laws.
            </p>
            <p>
              You may not reproduce, copy, distribute, modify, or publish any website content without prior written authorization from AKA Associates.
            </p>
          </section>

          <section className="legal-page__section">
            <h2>6. Third-Party Links &amp; Services</h2>
            <p>
              Our website may contain links to external third-party websites or services (such as map providers and social media platforms). These links are provided solely for your convenience. AKA Associates has no control over the content, policies, or practices of third-party websites and assumes no liability for them.
            </p>
          </section>

          <section className="legal-page__section">
            <h2>7. Website Availability &amp; Modifications</h2>
            <p>
              We strive to keep the website operational and accessible. However, we do not guarantee uninterrupted, secure, or error-free access. We reserve the right to modify, suspend, or discontinue any aspect or feature of the website at any time without prior notice.
            </p>
          </section>

          <section className="legal-page__section">
            <h2>8. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, AKA Associates, its partners, and employees shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your access to, use of, or inability to use this website, or any reliance placed on information contained herein.
            </p>
          </section>

          <section className="legal-page__section">
            <h2>9. Governing Law &amp; Jurisdiction</h2>
            <p>
              These Terms of Service are governed by and construed in accordance with the laws of India. Any disputes arising in connection with these terms or the use of this website shall be subject to the exclusive jurisdiction of the competent courts in Tamil Nadu, India.
            </p>
          </section>

          <section className="legal-page__section">
            <h2>10. Changes to These Terms</h2>
            <p>
              We reserve the right to amend or update these Terms of Service at any time. Changes will take effect immediately upon posting to this page. Your continued use of the website following any modifications signifies your acceptance of the revised terms.
            </p>
          </section>

          <section className="legal-page__section legal-page__contact-section">
            <h2>11. Contact Information</h2>
            <p>
              If you have any questions or require further clarification regarding these Terms of Service, please contact us:
            </p>
            <div className="legal-page__contact-card">
              <h3>AKA Associates</h3>
              <p className="legal-page__contact-subtitle">Builders &amp; Architects</p>
              <div className="legal-page__contact-grid">
                <div className="legal-page__contact-item">
                  <MapPin size={18} className="legal-page__contact-icon" aria-hidden="true" />
                  <span>3/251, Pakkirisamy Nagar, Vadaseri Road, Mannargudi – 614001, Tamil Nadu, India</span>
                </div>
                <div className="legal-page__contact-item">
                  <Phone size={18} className="legal-page__contact-icon" aria-hidden="true" />
                  <a href="tel:+918667051418">+91 86670 51418</a>
                </div>
                <div className="legal-page__contact-item">
                  <Mail size={18} className="legal-page__contact-icon" aria-hidden="true" />
                  <a href="mailto:akaassociatesglobal@gmail.com">akaassociatesglobal@gmail.com</a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
