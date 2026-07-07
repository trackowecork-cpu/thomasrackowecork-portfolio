"use client";

import { useRef } from "react";
import { HeroWaves, DEFAULT_WAVES } from "./HeroWaves";
import { C, M, S, MUT, INK, ACC } from "../_tokens";

interface HeroSectionProps {
  label:      string;
  headline:   string;
  body:       string;
  oceanData?: Array<{ amp: number; speed: number }>;
}

export function HeroSection({ label, headline, body, oceanData }: HeroSectionProps) {
  const textRef = useRef<HTMLDivElement>(null);

  const waves = DEFAULT_WAVES.map((w, i) =>
    oceanData?.[i] ? { ...w, amp: oceanData[i].amp, speed: oceanData[i].speed } : w
  );

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
      <HeroWaves textRef={textRef} waves={waves} />

      {/* Text — z:1 above the canvas (z:0) */}
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
