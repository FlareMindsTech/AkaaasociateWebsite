// src/components/ScrollToHash.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToHash
 * Listens for location changes and scrolls to the target element
 * when the URL contains a hash (e.g. /#contact).
 *
 * This handles the cross-page navigation scenario:
 *   User is on /projects → clicks "Contact" → navigates to /#contact
 *   → Home mounts → this component scrolls to #contact.
 *
 * Place this once inside the Router, it works globally.
 */
const ScrollToHash = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    // Small delay to let the target page render its sections
    const timer = setTimeout(() => {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [hash, pathname]);

  return null;
};

export default ScrollToHash;
