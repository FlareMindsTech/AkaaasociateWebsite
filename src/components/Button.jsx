// src/components/Button.jsx
import React from "react";
import "./Button.css";

/**
 * Button component
 * @param {string}  variant   - "primary" | "secondary" | "outline" | "ghost"
 * @param {string}  size      - "sm" | "md" | "lg"
 * @param {boolean} fullWidth - stretches to 100% width
 * @param {node}    leftIcon  - icon to render before text
 * @param {node}    rightIcon - icon to render after text
 */
const Button = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  leftIcon,
  rightIcon,
  className = "",
  onClick,
  href,
  type = "button",
  disabled = false,
  ...rest
}) => {
  const classes = [
    "btn",
    `btn--${variant}`,
    `btn--${size}`,
    fullWidth ? "btn--full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {leftIcon && <span className="btn__icon btn__icon--left">{leftIcon}</span>}
        <span className="btn__text">{children}</span>
        {rightIcon && <span className="btn__icon btn__icon--right">{rightIcon}</span>}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {leftIcon && <span className="btn__icon btn__icon--left">{leftIcon}</span>}
      <span className="btn__text">{children}</span>
      {rightIcon && <span className="btn__icon btn__icon--right">{rightIcon}</span>}
    </button>
  );
};

export default Button;
