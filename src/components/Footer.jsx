import React from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Facebook,
  Instagram,
} from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import "./Footer.css";
import logoImg from "../assets/img/logo.png";
import { navigateToSection } from "../utils/navigation";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/projects" },
  { label: "About Us", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

const SERVICES = [
  "Construction",
  "Vasthu Plan",
  "Elevation & 3D",
  "Interior Design",
  "Housing Loan",
  "Renovation Works",
];

const SOCIAL = [
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/share/18qPFD6eFy/",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/aka_associates_?utm_source=qr&igsh=MXBpdzVuMGljbXdsaQ==",
  },
];

const Footer = ({ theme = "light", toggleTheme }) => {
  const navigate = useNavigate();

  const handleClick = (href) => {
    navigateToSection(href, navigate);
  };

  return (
    <footer className="footer">
      <div className="container footer__inner">
        {/* Brand Column */}
        <div className="footer__brand">
          <a
            href="/"
            className="footer__logo"
            onClick={(e) => {
              e.preventDefault();
              handleClick("/");
            }}
            aria-label="AKA Associates Home"
          >
            <div className="footer__logo-badge">
              <img src={logoImg} alt="AKA Associates" className="footer__logo-img" />
            </div>
          </a>

          <p className="footer__brand-desc">
            Building with integrity, precision, and purpose. We provide end-to-end architectural design, construction, and renovation services across Mannargudi and Tamil Nadu.
          </p>

          <div className="footer__socials">
            {SOCIAL.map((item) => {
              const SocialIcon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  aria-label={`Visit our ${item.label} page (opens in new tab)`}
                >
                  <SocialIcon size={18} aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer__col">
          <h3 className="footer__col-title">Quick Links</h3>
          <ul className="footer__list">
            {QUICK_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="footer__link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(link.href);
                  }}
                >
                  <ArrowRight size={14} className="footer__link-arrow" aria-hidden="true" />
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Services */}
        <div className="footer__col">
          <h3 className="footer__col-title">Our Services</h3>
          <ul className="footer__list">
            {SERVICES.map((serviceName) => (
              <li key={serviceName}>
                <a
                  href="/#services"
                  className="footer__link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick("/#services");
                  }}
                >
                  <ArrowRight size={14} className="footer__link-arrow" aria-hidden="true" />
                  <span>{serviceName}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer__col">
          <h3 className="footer__col-title">Contact Us</h3>
          <ul className="footer__contact-list">
            <li className="footer__contact-item">
              <MapPin size={18} className="footer__contact-icon" aria-hidden="true" />
              <span>
                3/251, Pakkirisamy Nagar,<br />
                Vadaseri Road, Mannargudi – 614001
              </span>
            </li>

            <li className="footer__contact-item">
              <Phone size={18} className="footer__contact-icon" aria-hidden="true" />
              <a href="tel:+918667051418" className="footer__contact-link">
                +91 86670 51418
              </a>
            </li>

            <li className="footer__contact-item">
              <Mail size={18} className="footer__contact-icon" aria-hidden="true" />
              <a href="mailto:akaassociatesglobal@gmail.com" className="footer__contact-link">
                akaassociatesglobal@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copyright">
            &copy; {new Date().getFullYear()} AKA Associates – Builders &amp; Architects. All rights reserved.
          </p>
          <div className="footer__bottom-right">
            <div className="footer__bottom-links">
              <Link to="/privacy-policy" className="footer__bottom-link">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="footer__bottom-link">
                Terms of Service
              </Link>
            </div>
            {toggleTheme && (
              <div className="footer__theme-toggle">
                <ThemeToggle
                  theme={theme}
                  toggleTheme={toggleTheme}
                  className="theme-toggle--footer"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
