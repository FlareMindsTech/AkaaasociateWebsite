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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
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
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
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

      {/* Full Screen Mobile Menu */}
      <div className={`navbar__mobile-menu ${menuOpen ? "open" : ""}`}>
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
            <X size={32} />
          </button>
        </div>

        <nav className="navbar__mobile-nav">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="navbar__mobile-link"
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
            >
              {link.label}
            </a>
          ))}
          <button
            className="navbar__mobile-cta-btn"
            onClick={() => handleNavClick("/#contact")}
          >
            Get Free Consultation
          </button>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
