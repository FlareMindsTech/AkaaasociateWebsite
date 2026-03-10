// src/components/SectionTitle.jsx
import React from "react";
import "./SectionTitle.css";

/**
 * SectionTitle component
 * @param {string} label    - small eyebrow label above title
 * @param {string} title    - main heading (supports <br/> for line breaks)
 * @param {string} subtitle - optional subtitle paragraph
 * @param {string} align    - "left" | "center" | "right"
 * @param {string} theme    - "dark" | "light" (for dark section backgrounds)
 */
const SectionTitle = ({
  label,
  title,
  subtitle,
  align = "center",
  theme = "light",
  className = "",
}) => {
  return (
    <div className={`section-title section-title--${align} section-title--${theme} ${className}`}>
      {label && <span className="section-title__label">{label}</span>}
      {title && (
        <h2
          className="section-title__heading"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      )}
      {subtitle && <p className="section-title__subtitle">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
