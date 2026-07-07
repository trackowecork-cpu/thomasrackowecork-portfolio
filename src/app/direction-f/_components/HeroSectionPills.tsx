"use client";

import { useRef, useState, useEffect } from "react";
import { HeroPills } from "./HeroPills";
import { C, M, S, MUT, INK, ACC } from "../_tokens";

interface HeroSectionPillsProps {
  label:    string;
  headline: string;
  body:     string;
}

// Pills are only mounted above this breakpoint — avoids running the animation
// loop on mobile/tablet where the zone is too narrow to be useful.
const PILLS_BREAKPOINT = 1024;

export function HeroSectionPills({ label, headline, body }: HeroSectionPillsProps) {
  const textRef = useRef<HTMLDivElement>(null);

  // Start false to match SSR; set correctly on mount via matchMedia.
  const [showPills, setShowPills] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${PILLS_BREAKPOINT}px)`);
    setShowPills(mq.matches);
    const handler = (e: MediaQueryListEvent) => setShowPills(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <section
      className="e3-hero"
      style={{
        position:       "relative",
        overflow:       "hidden",
        display:        "flex",
        flexDirection:  "column",
        justifyContent: "flex-end",
        paddingRight: "clamp(1.25rem, 5vw, 5rem)",
        paddingLeft:  "clamp(1.25rem, 5vw, 5rem)",
      }}
    >
      {/* Pills only mount on ≥1024px — no animation loop on smaller viewports */}
      {showPills && <HeroPills textRef={textRef} />}

      {/* Text column — z:1 sits above the canvas (z:0) */}
      <div ref={textRef} style={{ maxWidth: 960, position: "relative", zIndex: 1 }}>
        <p
          style={{
            fontFamily:    M,
            fontSize:      12,
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            color:         ACC,
            marginBottom:  "clamp(2rem, 4vw, 3.5rem)",
          }}
        >
          {label}
        </p>

        <h1
          style={{
            fontFamily:    C,
            fontWeight:    500,
            fontSize:      "clamp(3rem, 8.5vw, 7rem)",
            lineHeight:    1.04,
            letterSpacing: "-0.03em",
            color:         INK,
            margin:        0,
            marginBottom:  "clamp(3rem, 5vw, 4.5rem)",
          }}
        >
          {headline}
        </h1>

        <p
          style={{
            fontFamily: S,
            fontSize:   "clamp(1rem, 1.4vw, 1.125rem)",
            color:      MUT,
            lineHeight: 1.82,
            maxWidth:   "44ch",
            margin:     0,
          }}
        >
          {body}
        </p>
      </div>
    </section>
  );
}
