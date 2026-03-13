import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import "./Navbar.css";
import logoImg from "../assets/img/logo.png";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = React.useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const atTop = currentY < 20;

      // At top: reset to transparent, always visible
      if (atTop) {
        setScrolled(false);
        setHidden(false);
        lastScrollY.current = currentY;
        return;
      }

      setScrolled(true);

      // Scrolling down → hide; scrolling up → show
      if (currentY > lastScrollY.current + 8) {
        setHidden(true);
      } else if (currentY < lastScrollY.current - 8) {
        setHidden(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    if (href.includes("#")) {
      const id = href.split("#")[1];
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <header className={`navbar ${scrolled ? "scrolled" : ""} ${hidden ? "hidden" : ""}`}>
        <div className="navbar__container">

          {/* Left: Logo Badge */}
          <a
            href="/"
            className="navbar__brand"
            onClick={(e) => { e.preventDefault(); handleNavClick("/"); }}
          >
            <div className="navbar__logo-badge">
              <img src={logoImg} alt="AKA Associates Icon" className="navbar__logo-icon" />
            </div>
          </a>

          {/* Center: Navigation Links */}
          <nav className="navbar__nav-links">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="navbar__link"
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: CTA & Mobile Hamburger */}
          <div className="navbar__actions">
            <button
              className="navbar__cta-btn"
              onClick={() => handleNavClick("/#contact")}
            >
              Get Free Consultation
            </button>
            <button
              className="navbar__hamburger"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop overlay */}
      <div
        className={`navbar__backdrop ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Premium Slide-In Mobile Menu Panel */}
      <div className={`navbar__mobile-menu ${menuOpen ? "open" : ""}`}>
        {/* Top: Logo + Close */}
        <div className="navbar__mobile-header">
          <a
            href="/"
            className="navbar__brand"
            onClick={(e) => { e.preventDefault(); handleNavClick("/"); }}
          >
            <div className="navbar__logo-badge">
              <img src={logoImg} alt="AKA Associates Icon" className="navbar__logo-icon" />
            </div>
          </a>
          <button
            className="navbar__close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={26} />
          </button>
        </div>

        <div className="navbar__mobile-divider" />

        {/* Middle: Nav Links */}
        <nav className="navbar__mobile-nav">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              className="navbar__mobile-link"
              style={{ "--item-index": i }}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
            >
              <span>{link.label}</span>
            </a>
          ))}
        </nav>

        {/* Brand Statement */}
        <div className="navbar__mobile-brand-block">
          <div className="navbar__mobile-divider" />
          <div className="navbar__mobile-tagline">
            <span className="navbar__mobile-tagline-dot" aria-hidden="true">●</span>
            <p className="navbar__mobile-tagline-main">
              Building modern spaces<br />with integrity &amp; precision.
            </p>
          </div>
          <p className="navbar__mobile-tagline-sub">
            Trusted architects delivering high-quality residential and commercial projects.
          </p>
        </div>

        {/* Bottom: CTA */}
        <div className="navbar__mobile-footer">
          <div className="navbar__mobile-divider" />
          <p className="navbar__mobile-footer-label">Ready to build?</p>
          <button
            className="navbar__mobile-cta-btn"
            onClick={() => { handleNavClick("/#contact"); }}
          >
            Get Free Consultation
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
