// src/components/ThemeToggle.jsx
import React from "react";
import { Sun, Moon } from "lucide-react";
import "./ThemeToggle.css";

/**
 * ThemeToggle Component
 * @param {string} theme - 'dark' | 'light'
 * @param {function} toggleTheme - function to toggle the theme
 * @param {boolean} showLabel - whether to render text alongside the switch (e.g. in mobile drawer)
 * @param {string} className - optional extra class names
 */
const ThemeToggle = ({
  theme = "dark",
  toggleTheme,
  showLabel = false,
  className = "",
}) => {
  const isDark = theme === "dark";

  return (
    <div className={`theme-toggle-wrap ${showLabel ? "theme-toggle-wrap--labelled" : ""} ${className}`}>
      {showLabel && (
        <span className="theme-toggle-label">
          {isDark ? "Dark Mode" : "Light Mode"}
        </span>
      )}
      <button
        type="button"
        className={`theme-toggle-btn ${isDark ? "theme-toggle-btn--dark" : "theme-toggle-btn--light"}`}
        onClick={toggleTheme}
        aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
        title={isDark ? "Switch to light theme" : "Switch to dark theme"}
      >
        <span className="theme-toggle-track">
          <span className="theme-toggle-icon theme-toggle-icon--sun">
            <Sun size={14} strokeWidth={2.4} />
          </span>
          <span className="theme-toggle-icon theme-toggle-icon--moon">
            <Moon size={14} strokeWidth={2.4} />
          </span>
          <span className="theme-toggle-thumb" />
        </span>
      </button>
    </div>
  );
};

export default ThemeToggle;
