// src/animations/hero/themeStyles.js
// Visual color palettes and stroke properties for Light & Dark architectural modes.

export const LIGHT_THEME = {
  grid: {
    perimeter: { strokeStyle: '#B4B0A8', lineWidth: 1.3 },
    boundary: { strokeStyle: '#B4B0A8', lineWidth: 1.2 },
    center: { strokeStyle: '#BEBAB2', lineWidth: 1.1 },
    normal: { strokeStyle: '#D2CEC6', lineWidth: 0.95 },
    crossDot: '#B4B0A8',
  },
  building: {
    floor: { strokeStyle: '#18181B', lineWidth: 1.8 },
    column: { strokeStyle: '#383530', lineWidth: 1.4 },
    core: { strokeStyle: '#68645C', lineWidth: 1.0 },
    brace: { strokeStyle: '#7E7A72', lineWidth: 0.9 },
    annex: { strokeStyle: '#44413A', lineWidth: 1.2 },
    default: { strokeStyle: '#8A867E', lineWidth: 1.0 },
    node: '#18181B',
  },
  scan: {
    stroke: '#D0241E',
    lineWidth: 2.4,
    shadowColor: '#D0241E',
    shadowBlur: 6,
    pulseRing: 'rgba(208, 36, 30, 0.6)',
  },
  particles: 'rgba(24, 24, 27, 0.28)',
  hud: {
    normal: {
      bg: 'rgba(255, 255, 255, 0.96)',
      border: 'rgba(24, 24, 27, 0.25)',
      title: '#18181B',
      subtitle: '#52525B',
    },
    highlight: {
      bg: 'rgba(208, 36, 30, 0.12)',
      border: '#D0241E',
      title: '#D0241E',
      subtitle: '#52525B',
    },
  },
};

export const DARK_THEME = {
  grid: {
    perimeter: { strokeStyle: 'rgba(255, 255, 255, 0.18)', lineWidth: 1.0 },
    boundary: { strokeStyle: 'rgba(255, 255, 255, 0.08)', lineWidth: 0.9 },
    center: { strokeStyle: 'rgba(255, 255, 255, 0.12)', lineWidth: 0.7 },
    normal: { strokeStyle: 'rgba(255, 255, 255, 0.07)', lineWidth: 0.6 },
    crossDot: 'rgba(255, 255, 255, 0.16)',
  },
  building: {
    floor: { strokeStyle: 'rgba(255, 255, 255, 0.55)', lineWidth: 1.4 },
    column: { strokeStyle: 'rgba(255, 255, 255, 0.45)', lineWidth: 1.2 },
    core: { strokeStyle: 'rgba(255, 255, 255, 0.25)', lineWidth: 0.8 },
    brace: { strokeStyle: 'rgba(255, 255, 255, 0.18)', lineWidth: 0.7 },
    annex: { strokeStyle: 'rgba(255, 255, 255, 0.35)', lineWidth: 1.0 },
    default: { strokeStyle: 'rgba(255, 255, 255, 0.22)', lineWidth: 1.0 },
    node: 'rgba(255, 255, 255, 0.65)',
  },
  scan: {
    stroke: '#D0241E',
    lineWidth: 2.4,
    shadowColor: '#D0241E',
    shadowBlur: 10,
    pulseRing: 'rgba(208, 36, 30, 0.6)',
  },
  particles: 'rgba(255, 255, 255, 0.35)',
  hud: {
    normal: {
      bg: 'rgba(15, 14, 12, 0.85)',
      border: 'rgba(255, 255, 255, 0.3)',
      title: '#FFFFFF',
      subtitle: 'rgba(255, 255, 255, 0.55)',
    },
    highlight: {
      bg: 'rgba(208, 36, 30, 0.25)',
      border: '#D0241E',
      title: '#FFFFFF',
      subtitle: 'rgba(255, 255, 255, 0.75)',
    },
  },
};

/**
 * Returns the theme style configuration for the current theme state.
 * @param {boolean} isDark
 */
export function getThemeStyles(isDark) {
  return isDark ? DARK_THEME : LIGHT_THEME;
}
