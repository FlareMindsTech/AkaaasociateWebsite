// src/components/services/ServicesHeaderArtwork.jsx
import React from "react";
import "./ServicesHeaderArtwork.css";

/**
 * ServicesHeaderArtwork Component
 *
 * An original, vector-based architectural drafting composition framing the Services heading.
 * - Left: Technical architectural floor plan (walls, columns, room partition, door swing, dimensions)
 * - Right: Architectural structural elevation (facade silhouette, datum levels, column grids, trusses)
 * - Connecting: Subtle datum lines running across the header
 * - 100% Vector, retina sharp, theme-adaptive (currentColor / CSS tokens), zero external image files
 */
const ServicesHeaderArtwork = () => {
  return (
    <div className="services-art" aria-hidden="true">
      {/* Central Connecting Datum Lines (Runs behind heading) */}
      <div className="services-art__connecting-line services-art__connecting-line--top" />
      <div className="services-art__connecting-line services-art__connecting-line--bottom" />

      {/* ============================================================
          LEFT ARTWORK: Architectural Floor Plan Drawing
          ============================================================ */}
      <div className="services-art__side services-art__side--left">
        <svg
          viewBox="0 0 400 300"
          className="services-art__svg"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Layer 1: Background Technical Grid */}
          <g className="services-art__layer-grid">
            <line x1="40" y1="20" x2="40" y2="280" />
            <line x1="120" y1="20" x2="120" y2="280" />
            <line x1="200" y1="20" x2="200" y2="280" />
            <line x1="280" y1="20" x2="280" y2="280" />
            <line x1="20" y1="60" x2="380" y2="60" />
            <line x1="20" y1="140" x2="380" y2="140" />
            <line x1="20" y1="220" x2="380" y2="220" />

            {/* Grid coordinate ticks */}
            <circle cx="40" cy="60" r="1.5" />
            <circle cx="120" cy="60" r="1.5" />
            <circle cx="200" cy="60" r="1.5" />
            <circle cx="280" cy="60" r="1.5" />
            <circle cx="40" cy="140" r="1.5" />
            <circle cx="120" cy="140" r="1.5" />
            <circle cx="200" cy="140" r="1.5" />
            <circle cx="280" cy="140" r="1.5" />
            <circle cx="40" cy="220" r="1.5" />
            <circle cx="120" cy="220" r="1.5" />
            <circle cx="200" cy="220" r="1.5" />
            <circle cx="280" cy="220" r="1.5" />
          </g>

          {/* Layer 2: Main Architectural Floor Plan Geometry */}
          <g className="services-art__layer-lines">
            {/* Outer Perimeter Walls (Double Line Architectural Profile) */}
            <path
              d="M 30 70 L 250 70 L 330 130 L 330 240 L 30 240 Z"
              className="services-art__wall-thick"
            />
            <path
              d="M 38 78 L 246 78 L 322 135 L 322 232 L 38 232 Z"
              className="services-art__wall-thin"
            />

            {/* Internal Room Partitions */}
            <line x1="140" y1="78" x2="140" y2="232" className="services-art__wall-thick" />
            <line x1="148" y1="78" x2="148" y2="232" className="services-art__wall-thin" />
            <line x1="148" y1="150" x2="322" y2="150" className="services-art__wall-thick" />
            <line x1="148" y1="156" x2="322" y2="156" className="services-art__wall-thin" />

            {/* Sub-room foyer / gallery partition */}
            <line x1="38" y1="160" x2="140" y2="160" className="services-art__wall-thick" />
            <line x1="38" y1="166" x2="140" y2="166" className="services-art__wall-thin" />

            {/* Architectural Door Swing 1 (Arc + Door leaf) */}
            <path
              d="M 148 100 A 32 32 0 0 1 180 132"
              className="services-art__door-arc"
            />
            <line x1="148" y1="100" x2="148" y2="132" className="services-art__door-leaf" />

            {/* Architectural Door Swing 2 */}
            <path
              d="M 140 180 A 28 28 0 0 1 112 208"
              className="services-art__door-arc"
            />
            <line x1="140" y1="180" x2="140" y2="208" className="services-art__door-leaf" />

            {/* Window Openings with Mullion Lines */}
            <line x1="60" y1="67" x2="110" y2="67" className="services-art__window" />
            <line x1="60" y1="73" x2="110" y2="73" className="services-art__window" />
            <line x1="180" y1="67" x2="220" y2="67" className="services-art__window" />
            <line x1="180" y1="73" x2="220" y2="73" className="services-art__window" />

            {/* Flight of Stairs (Parallel Tread Hatching) */}
            <g className="services-art__stairs">
              <line x1="260" y1="165" x2="310" y2="165" />
              <line x1="260" y1="175" x2="310" y2="175" />
              <line x1="260" y1="185" x2="310" y2="185" />
              <line x1="260" y1="195" x2="310" y2="195" />
              <line x1="260" y1="205" x2="310" y2="205" />
              <line x1="260" y1="215" x2="310" y2="215" />
              <path d="M 285 220 L 285 160 L 282 165 M 285 160 L 288 165" className="services-art__stair-arrow" />
            </g>

            {/* Structural RCC Columns (Solid square posts) */}
            <rect x="28" y="68" width="6" height="6" className="services-art__column" />
            <rect x="138" y="68" width="6" height="6" className="services-art__column" />
            <rect x="248" y="68" width="6" height="6" className="services-art__column" />
            <rect x="328" y="128" width="6" height="6" className="services-art__column" />
            <rect x="328" y="238" width="6" height="6" className="services-art__column" />
            <rect x="138" y="238" width="6" height="6" className="services-art__column" />
            <rect x="28" y="238" width="6" height="6" className="services-art__column" />
          </g>

          {/* Layer 3: Architectural Dimension Lines & Ticks */}
          <g className="services-art__layer-dimensions">
            {/* Top Dimension String */}
            <line x1="30" y1="45" x2="250" y2="45" className="services-art__dim-line" />
            <line x1="30" y1="38" x2="30" y2="52" className="services-art__dim-witness" />
            <line x1="140" y1="38" x2="140" y2="52" className="services-art__dim-witness" />
            <line x1="250" y1="38" x2="250" y2="52" className="services-art__dim-witness" />
            {/* 45 Degree Architectural Ticks */}
            <line x1="26" y1="49" x2="34" y2="41" className="services-art__dim-tick" />
            <line x1="136" y1="49" x2="144" y2="41" className="services-art__dim-tick" />
            <line x1="246" y1="49" x2="254" y2="41" className="services-art__dim-tick" />
            <text x="80" y="40" className="services-art__dim-text">4.80</text>
            <text x="190" y="40" className="services-art__dim-text">3.60</text>

            {/* Left Vertical Dimension Line */}
            <line x1="15" y1="70" x2="15" y2="240" className="services-art__dim-line" />
            <line x1="8" y1="70" x2="22" y2="70" className="services-art__dim-witness" />
            <line x1="8" y1="240" x2="22" y2="240" className="services-art__dim-witness" />
            <line x1="11" y1="74" x2="19" y2="66" className="services-art__dim-tick" />
            <line x1="11" y1="244" x2="19" y2="236" className="services-art__dim-tick" />
            <text x="10" y="158" className="services-art__dim-text services-art__dim-text--vert">5.40</text>
          </g>

          {/* Layer 4: Accent Architectural Annotations */}
          <g className="services-art__layer-accent">
            {/* North Point Arrow */}
            <circle cx="340" cy="50" r="14" className="services-art__accent-circle" />
            <path d="M 340 38 L 344 50 L 340 47 L 336 50 Z" className="services-art__accent-arrow" />
            <text x="337" y="34" className="services-art__accent-text">N</text>

            {/* Grid Axis Callout Tag */}
            <circle cx="30" cy="270" r="8" className="services-art__axis-circle" />
            <text x="27" y="273" className="services-art__axis-text">A</text>
            <circle cx="140" cy="270" r="8" className="services-art__axis-circle" />
            <text x="137" y="273" className="services-art__axis-text">B</text>
          </g>
        </svg>
      </div>

      {/* ============================================================
          RIGHT ARTWORK: Architectural Elevation & Structural Drawing
          ============================================================ */}
      <div className="services-art__side services-art__side--right">
        <svg
          viewBox="0 0 400 300"
          className="services-art__svg"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Layer 1: Background Structural Grid & Centerlines */}
          <g className="services-art__layer-grid">
            <line x1="80" y1="20" x2="80" y2="280" className="services-art__centerline" />
            <line x1="170" y1="20" x2="170" y2="280" className="services-art__centerline" />
            <line x1="260" y1="20" x2="260" y2="280" className="services-art__centerline" />
            <line x1="340" y1="20" x2="340" y2="280" className="services-art__centerline" />
            
            {/* Horizontal Grid Datum Lines */}
            <line x1="30" y1="70" x2="380" y2="70" />
            <line x1="30" y1="150" x2="380" y2="150" />
            <line x1="30" y1="230" x2="380" y2="230" />
          </g>

          {/* Layer 2: Facade Elevation & Structural Geometry */}
          <g className="services-art__layer-lines">
            {/* Building Elevation Outline (Cantilevers & Overhangs) */}
            <path
              d="M 50 230 L 50 140 L 70 140 L 70 65 L 290 65 L 290 90 L 360 90 L 360 230 Z"
              className="services-art__wall-thick"
            />

            {/* Parapet & Cantilever Slab Thickness */}
            <line x1="65" y1="60" x2="295" y2="60" className="services-art__wall-thick" />
            <line x1="65" y1="65" x2="295" y2="65" className="services-art__wall-thin" />
            <line x1="285" y1="85" x2="365" y2="85" className="services-art__wall-thick" />
            <line x1="285" y1="90" x2="365" y2="90" className="services-art__wall-thin" />

            {/* Mid-level Floor Slab (L1/L2 Transition) */}
            <line x1="50" y1="145" x2="360" y2="145" className="services-art__wall-thick" />
            <line x1="50" y1="150" x2="360" y2="150" className="services-art__wall-thin" />

            {/* Window Apertures & Glazing Grid */}
            <rect x="90" y="85" width="60" height="45" className="services-art__window-frame" />
            <line x1="120" y1="85" x2="120" y2="130" className="services-art__mullion" />
            <rect x="190" y="85" width="75" height="45" className="services-art__window-frame" />
            <line x1="227" y1="85" x2="227" y2="130" className="services-art__mullion" />
            <line x1="245" y1="85" x2="245" y2="130" className="services-art__mullion" />

            {/* Ground Floor Glazed Facade & Entrance */}
            <rect x="90" y="165" width="120" height="65" className="services-art__window-frame" />
            <line x1="130" y1="165" x2="130" y2="230" className="services-art__mullion" />
            <line x1="170" y1="165" x2="170" y2="230" className="services-art__mullion" />

            {/* Architectural Vertical Louvers / Sunshades */}
            <line x1="305" y1="105" x2="305" y2="215" className="services-art__louver" />
            <line x1="315" y1="105" x2="315" y2="215" className="services-art__louver" />
            <line x1="325" y1="105" x2="325" y2="215" className="services-art__louver" />
            <line x1="335" y1="105" x2="335" y2="215" className="services-art__louver" />
            <line x1="345" y1="105" x2="345" y2="215" className="services-art__louver" />

            {/* Subtle Axonometric / Isometric Projection Wireframe Lines */}
            <line x1="290" y1="65" x2="335" y2="35" className="services-art__iso-line" />
            <line x1="335" y1="35" x2="375" y2="55" className="services-art__iso-line" />
            <line x1="360" y1="90" x2="375" y2="55" className="services-art__iso-line" />
            <line x1="360" y1="230" x2="375" y2="195" className="services-art__iso-line" />
            <line x1="375" y1="55" x2="375" y2="195" className="services-art__iso-line" />
          </g>

          {/* Layer 3: Datum Level Markers & Level Annotations */}
          <g className="services-art__layer-dimensions">
            {/* Level 02: Roof / Upper Terrace */}
            <line x1="30" y1="60" x2="65" y2="60" className="services-art__dim-line" />
            <path d="M 25 60 L 35 55 L 35 65 Z" className="services-art__datum-marker" />
            <text x="10" y="55" className="services-art__datum-text">+6.80</text>

            {/* Level 01: First Floor */}
            <line x1="20" y1="145" x2="50" y2="145" className="services-art__dim-line" />
            <path d="M 15 145 L 25 140 L 25 150 Z" className="services-art__datum-marker" />
            <text x="2" y="140" className="services-art__datum-text">+3.40</text>

            {/* Ground Level Baseline Datum */}
            <line x1="20" y1="230" x2="390" y2="230" className="services-art__ground-line" />
            <path d="M 15 230 L 25 225 L 25 235 Z" className="services-art__datum-marker services-art__datum-marker--ground" />
            <text x="2" y="225" className="services-art__datum-text">±0.00</text>

            {/* Ground Hatch Pattern */}
            <line x1="40" y1="230" x2="30" y2="242" className="services-art__ground-hatch" />
            <line x1="70" y1="230" x2="60" y2="242" className="services-art__ground-hatch" />
            <line x1="100" y1="230" x2="90" y2="242" className="services-art__ground-hatch" />
            <line x1="130" y1="230" x2="120" y2="242" className="services-art__ground-hatch" />
            <line x1="160" y1="230" x2="150" y2="242" className="services-art__ground-hatch" />
            <line x1="190" y1="230" x2="180" y2="242" className="services-art__ground-hatch" />
            <line x1="220" y1="230" x2="210" y2="242" className="services-art__ground-hatch" />
            <line x1="250" y1="230" x2="240" y2="242" className="services-art__ground-hatch" />
            <line x1="280" y1="230" x2="270" y2="242" className="services-art__ground-hatch" />
            <line x1="310" y1="230" x2="300" y2="242" className="services-art__ground-hatch" />
            <line x1="340" y1="230" x2="330" y2="242" className="services-art__ground-hatch" />
            <line x1="370" y1="230" x2="360" y2="242" className="services-art__ground-hatch" />
          </g>

          {/* Layer 4: Structural Grid Identification Circles */}
          <g className="services-art__layer-accent">
            <circle cx="80" cy="265" r="8" className="services-art__axis-circle" />
            <text x="78" y="268" className="services-art__axis-text">01</text>
            <circle cx="170" cy="265" r="8" className="services-art__axis-circle" />
            <text x="168" y="268" className="services-art__axis-text">02</text>
            <circle cx="260" cy="265" r="8" className="services-art__axis-circle" />
            <text x="258" y="268" className="services-art__axis-text">03</text>
            <circle cx="340" cy="265" r="8" className="services-art__axis-circle" />
            <text x="338" y="268" className="services-art__axis-text">04</text>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default ServicesHeaderArtwork;
