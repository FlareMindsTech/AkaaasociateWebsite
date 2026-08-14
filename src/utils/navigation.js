// src/utils/navigation.js

/**
 * navigateToSection — Cross-page section navigation helper.
 *
 * Handles two scenarios:
 *   1. Same page: The target element exists → smooth scroll to it.
 *   2. Different page: Navigate to "/" with hash → Home mounts → scroll to hash.
 *
 * @param {string}   href       - Destination like "/", "/#services", "/#contact", "/projects"
 * @param {Function} navigate   - React Router's navigate() function
 */
export function navigateToSection(href, navigate) {
  // Pure route with no hash (e.g. "/" or "/projects")
  if (!href.includes("#")) {
    navigate(href);
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  // Has a hash — extract the path and section ID
  const [path, sectionId] = href.split("#");
  const targetPath = path || "/";

  // Check if we're already on the target page
  const currentPath = window.location.pathname;
  const isOnTargetPage = currentPath === targetPath || (targetPath === "/" && currentPath === "/");

  if (isOnTargetPage) {
    // Same page — just scroll to the element
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  } else {
    // Different page — navigate first, then let ScrollToHash handle it
    navigate(`${targetPath}#${sectionId}`);
  }
}
