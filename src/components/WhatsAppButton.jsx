// src/components/WhatsAppButton.jsx
import React from "react";
import { MessageCircle } from "lucide-react";
import { motion as Motion, useReducedMotion } from "motion/react";
import "./WhatsAppButton.css";

/**
 * Floating WhatsApp Contact Button
 * Opens a direct WhatsApp chat with AKA Associates (+91 86670 51418)
 * using a professional pre-filled inquiry message.
 */
const PHONE_NUMBER = "918667051418";
const PRE_FILLED_MESSAGE = "Hello AKA Associates, I found your website and would like to discuss a project.";
const WHATSAPP_URL = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(PRE_FILLED_MESSAGE)}`;

const WhatsAppButton = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float-btn"
      aria-label="Chat with AKA Associates on WhatsApp"
    >
      <Motion.span
        className="whatsapp-attention-ring"
        aria-hidden="true"
        animate={
          shouldReduceMotion
            ? {
                scale: 1,
                opacity: 0,
              }
            : {
                scale: [1, 1.7, 1.7],
                opacity: [0.7, 0, 0],
              }
        }
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : {
                duration: 2.8,
                repeat: Infinity,
                repeatDelay: 0.8,
                ease: "easeOut",
              }
        }
      />

      <span className="whatsapp-float-icon-inner" aria-hidden="true">
        <MessageCircle
          size={28}
          strokeWidth={2.2}
          className="whatsapp-float-icon"
        />
      </span>

      <span className="whatsapp-float-tooltip" aria-hidden="true">
        Chat with our team
      </span>
    </a>
  );
};

export default WhatsAppButton;
