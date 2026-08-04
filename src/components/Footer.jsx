// src/components/Footer.jsx
import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import "./Footer.css";
import logoImg from "../assets/img/logo.png";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "About Us", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

const SERVICES = [
  "Architectural Design",
  "Residential Construction",
  "Commercial Projects",
  "Interior Design",
  "Project Management",
  "Renovation & Remodeling",
];

const SOCIAL = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
];

const Footer = () => {
  const handleClick = (href) => {
    if (href.includes("#")) {
      const id = href.split("#")[1];
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="footer">
      <div className="container footer__inner">
        {/* Brand Column */}
        <div className="footer__brand">
          <a
            href="/"
            className="footer__logo"
            onClick={(e) => { e.preventDefault(); handleClick("/"); }}
          >
            <img src={logoImg} alt="AKA Associates Logo" className="footer__logo-img" />
          </a>
          <p className="footer__brand-desc">
            Building excellence since 2005. We craft spaces that inspire, stand the test of time, and reflect the ambitions of those who inhabit them.
          </p>
          <div className="footer__socials">
            {SOCIAL.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                className="footer__social-link"
                aria-label={label}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer__col">
          <h4 className="footer__col-title">Quick Links</h4>
          <ul className="footer__list">
            {QUICK_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="footer__link"
                  onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
                >
                  <ArrowRight size={12} />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="footer__col">
          <h4 className="footer__col-title">Our Services</h4>
          <ul className="footer__list">
            {SERVICES.map((s) => (
              <li key={s}>
                <a
                  href="/#services"
                  className="footer__link"
                  onClick={(e) => { e.preventDefault(); handleClick("/#services"); }}
                >
                  <ArrowRight size={12} />
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer__col">
          <h4 className="footer__col-title">Contact Us</h4>
          <ul className="footer__contact-list">
            <li className="footer__contact-item">
              <MapPin size={16} />
              <span>
                3/251, Pakkirisamy Nagar,<br />
                Vadaseri Road, Mannargudi – 614001
              </span>
            </li>

            <li className="footer__contact-item">
              <Phone size={16} />
              <a href="tel:+918667051418">+91 86670 51418</a>
            </li>

            <li className="footer__contact-item">
              <Mail size={16} />
              <a href="mailto:akaassociatesglobal@gmail.com">
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
            &copy; {new Date().getFullYear()} AKA Associates – Builders and Architecture. All rights reserved.
          </p>
          <div className="footer__bottom-links">
            <a href="#" className="footer__bottom-link">Privacy Policy</a>
            <a href="#" className="footer__bottom-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
