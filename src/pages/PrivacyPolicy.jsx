// src/pages/PrivacyPolicy.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Mail, Phone, MapPin } from "lucide-react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
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
            <Shield size={14} aria-hidden="true" />
            <span>Legal Documentation</span>
          </div>
          <h1 className="legal-page__title">Privacy Policy</h1>
          <p className="legal-page__subtitle">
            How AKA Associates collects, uses, and protects information submitted through this website.
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
              <strong>Notice:</strong> This Privacy Policy describes the actual data practices for the AKA Associates website. If you have questions about how your information is handled, please contact us directly using the details provided at the bottom of this page.
            </p>
          </div>

          <section className="legal-page__section">
            <h2>1. Introduction</h2>
            <p>
              AKA Associates (“we,” “our,” or “us”) operates this website to provide information about our architectural design, construction, valuation, and renovation services. We respect your privacy and are committed to handling any personal information you share with us responsibly and transparently.
            </p>
          </section>

          <section className="legal-page__section">
            <h2>2. Information We Collect</h2>
            <p>
              We collect information directly from you when you choose to submit an enquiry via the Contact Form on our website. This information includes:
            </p>
            <ul>
              <li><strong>Full Name:</strong> To address and identify you in our communications.</li>
              <li><strong>Phone Number:</strong> To contact you regarding your project requirements.</li>
              <li><strong>Email Address:</strong> To send replies, project information, or estimates.</li>
              <li><strong>Service Required:</strong> The specific service you are interested in (e.g., Construction, Vasthu Plan, Elevation, Interior Design, Renovation).</li>
              <li><strong>Project Details:</strong> Any notes, plot measurements, locations, or requirements you provide in the message field.</li>
            </ul>
            <p>
              We do not collect sensitive personal data, financial information, or payment details through this website.
            </p>
          </section>

          <section className="legal-page__section">
            <h2>3. How We Use Your Information</h2>
            <p>
              The information submitted through our website is used strictly for legitimate business purposes:
            </p>
            <ul>
              <li>Responding to your enquiries and project consultation requests.</li>
              <li>Understanding your architectural, construction, or renovation requirements.</li>
              <li>Providing preliminary discussions, estimates, and scheduling site visits.</li>
              <li>Maintaining professional business communication regarding your requested services.</li>
            </ul>
            <p>
              We do not use your contact information for automated unsolicited marketing campaigns or selling to third-party advertisers.
            </p>
          </section>

          <section className="legal-page__section">
            <h2>4. Contact Form and Third-Party Processing</h2>
            <p>
              Our website is a frontend application that utilizes a secure third-party form service (Web3Forms) to transmit contact form submissions directly to our designated business email inbox (<code>akaassociatesglobal@gmail.com</code>).
            </p>
            <p>
              Please note the following regarding our data workflow:
            </p>
            <ul>
              <li>The website does not maintain an internal user database or user account registration system.</li>
              <li>Submissions are processed by the form service solely to format and deliver your message to our email inbox.</li>
              <li>Once received in our business email inbox, your communication is handled through our standard business email operations.</li>
            </ul>
          </section>

          <section className="legal-page__section">
            <h2>5. Information Sharing & Disclosure</h2>
            <p>
              We do not sell, rent, trade, or otherwise disclose your personal contact information to third parties for commercial or marketing purposes. Information may only be accessed by:
            </p>
            <ul>
              <li>Authorized team members of AKA Associates who need the information to respond to your enquiry.</li>
              <li>Third-party service providers (such as our email hosting and form transmission services) strictly as needed to facilitate communications.</li>
              <li>Legal authorities if required by applicable law, regulation, or legal process.</li>
            </ul>
          </section>

          <section className="legal-page__section">
            <h2>6. Data Security</h2>
            <p>
              We implement reasonable administrative, technical, and physical safeguards to protect the personal information you transmit through our website. However, please be aware that no electronic transmission over the internet or email storage system can be guaranteed to be 100% secure.
            </p>
          </section>

          <section className="legal-page__section">
            <h2>7. Data Retention</h2>
            <p>
              Enquiries received via email are retained in our business communication records for as long as necessary to fulfill the purpose of your enquiry, maintain project records, and comply with standard business and accounting practices.
            </p>
          </section>

          <section className="legal-page__section">
            <h2>8. Your Rights & Choices</h2>
            <p>
              You have the right to request clarification regarding the contact details you have provided to us. If you wish to update, correct, or request the deletion of an enquiry from our email records, you may reach out to us at any time using the contact details provided below.
            </p>
          </section>

          <section className="legal-page__section">
            <h2>9. External Links</h2>
            <p>
              Our website may contain links to external platforms such as Google Maps, OpenStreetMap, Facebook, and Instagram. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services. We encourage you to review their individual privacy statements.
            </p>
          </section>

          <section className="legal-page__section">
            <h2>10. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy periodically to reflect operational, legal, or technical changes. Any revisions will be posted on this page with an updated “Last Updated” date. Continued use of our website constitutes your acknowledgement of the updated policy.
            </p>
          </section>

          <section className="legal-page__section legal-page__contact-section">
            <h2>11. Contact Us</h2>
            <p>
              If you have any questions, comments, or concerns about this Privacy Policy or our data handling practices, please contact us:
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

export default PrivacyPolicy;
