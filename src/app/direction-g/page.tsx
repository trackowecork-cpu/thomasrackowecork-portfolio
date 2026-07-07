"use client";

import { useRef } from "react";
import { HeroWaves } from "../direction-e/_components/HeroWaves";

// ── Palette (direction-e tokens) ──────────────────────────────────────────
const GR  = "#0E0D0C";
const BD  = "#252220";
const INK = "#F5F1EC";
const IN2 = "#DDD8D2";
const MUT = "#A8A09A";
const FNT = "#5C5652";
const ACC = "#C4A882";

// ── Font stacks ───────────────────────────────────────────────────────────
const INTER     = "var(--font-inter), system-ui, sans-serif";
const CORMORANT = "var(--font-cormorant), Georgia, serif";
const MONO      = "var(--font-geist-mono), monospace";

// ── Hero copy ─────────────────────────────────────────────────────────────
const LABEL    = "Product Designer";
const HEADLINE = "The brief is rarely the problem.";
const BODY     = "Product and service designer focused on product structure, service complexity, and the intersection of design and strategy.";

// ── Variant config type ───────────────────────────────────────────────────
interface VariantConfig {
  num:          number;
  name:         string;
  navFont:      string;
  labelFont:    string;
  headlineFont: string;
  headlineW:    number;
  headlineLH:   number;
  headlineLS:   string;
  bodyFont:     string;
  bodyLH:       number;
}

const VARIANTS: VariantConfig[] = [
  {
    num:          1,
    name:         "Full Inter",
    navFont:      INTER,
    labelFont:    INTER,
    headlineFont: INTER,
    headlineW:    600,
    headlineLH:   1.02,
    headlineLS:   "-0.03em",
    bodyFont:     INTER,
    bodyLH:       1.82,
  },
  {
    num:          2,
    name:         "Mixed — Cormorant headline, Inter body",
    navFont:      INTER,
    labelFont:    INTER,
    headlineFont: CORMORANT,
    headlineW:    500,
    headlineLH:   1.04,
    headlineLS:   "-0.03em",
    bodyFont:     INTER,
    bodyLH:       1.82,
  },
];

// ── Single hero variant ───────────────────────────────────────────────────
function HeroVariant({ v }: { v: VariantConfig }) {
  const textRef = useRef<HTMLDivElement>(null);

  return (
    <section
      style={{
        position:       "relative",
        overflow:       "hidden",
        display:        "flex",
        flexDirection:  "column",
        background:     GR,
        borderTop:      `1px solid ${BD}`,
      }}
    >
      {/* ── Mini-nav (shows nav font for this variant) ─────────────────── */}
      <div
        style={{
          height:          52,
          flexShrink:      0,
          display:         "flex",
          alignItems:      "center",
          justifyContent:  "space-between",
          padding:         "0 clamp(1.25rem, 5vw, 5rem)",
          borderBottom:    `1px solid ${BD}`,
          position:        "relative",
          zIndex:          2,
        }}
      >
        <span style={{
          fontFamily:    v.navFont,
          fontSize:      15,
          fontWeight:    400,
          color:         INK,
          letterSpacing: "-0.02em",
        }}>
          Thomas Rackowe Cork
        </span>

        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <span style={{ fontFamily: v.navFont, fontSize: 14, color: IN2 }}>Work</span>
          <span style={{ fontFamily: v.navFont, fontSize: 14, color: FNT }}>About</span>
        </div>
      </div>

      {/* ── Hero body ─────────────────────────────────────────────────────── */}
      <div
        style={{
          position:       "relative",
          flex:           1,
          display:        "flex",
          flexDirection:  "column",
          justifyContent: "flex-end",
          paddingRight:   "clamp(1.25rem, 5vw, 5rem)",
          paddingLeft:    "clamp(1.25rem, 5vw, 5rem)",
          paddingTop:     "4.5rem",
          paddingBottom:  "5rem",
          minHeight:      "calc(100dvh - 52px - 52px)",
        }}
      >
        {/* Variant badge */}
        <div style={{
          position:      "absolute",
          top:           16,
          right:         20,
          fontFamily:    MONO,
          fontSize:      11,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color:         ACC,
          background:    GR,
          border:        `1px solid ${BD}`,
          padding:       "4px 10px",
          borderRadius:  2,
          zIndex:        2,
        }}>
          V{v.num}: {v.name}
        </div>

        <HeroWaves textRef={textRef} />

        {/* Text content */}
        <div ref={textRef} style={{ maxWidth: 960, position: "relative", zIndex: 1 }}>
          <p style={{
            fontFamily:    v.labelFont,
            fontSize:      12,
            fontWeight:    400,
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            color:         ACC,
            margin:        0,
            marginBottom:  "clamp(2rem, 4vw, 3.5rem)",
          }}>
            {LABEL}
          </p>

          <h1 style={{
            fontFamily:    v.headlineFont,
            fontWeight:    v.headlineW,
            fontSize:      "clamp(3rem, 8.5vw, 7rem)",
            lineHeight:    v.headlineLH,
            letterSpacing: v.headlineLS,
            color:         INK,
            margin:        0,
            marginBottom:  "clamp(3rem, 5vw, 4.5rem)",
          }}>
            {HEADLINE}
          </h1>

          <p style={{
            fontFamily: v.bodyFont,
            fontSize:   "clamp(1rem, 1.4vw, 1.125rem)",
            color:      MUT,
            lineHeight: v.bodyLH,
            maxWidth:   "44ch",
            margin:     0,
          }}>
            {BODY}
          </p>
        </div>
      </div>
    </section>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────
export default function DirectionG() {
  return (
    <>
      <style>{`
        .dg {
          position: fixed; inset: 0; z-index: 100;
          overflow-y: auto; background: ${GR};
          -webkit-font-smoothing: antialiased;
        }
        .dg-proto-bar {
          position: sticky; top: 0; z-index: 50;
          background: #0A0908;
          border-bottom: 1px solid ${BD};
          height: 36px;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 clamp(1.25rem, 5vw, 5rem);
        }
      `}</style>

      <div className="dg">
        {/* Prototype context bar */}
        <div className="dg-proto-bar">
          <span style={{ fontFamily: MONO, fontSize: 11, color: FNT, textTransform: "uppercase", letterSpacing: "0.1em" }}>
            Direction G — Typography prototype
          </span>
          <span style={{ fontFamily: MONO, fontSize: 11, color: FNT, textTransform: "uppercase", letterSpacing: "0.1em" }}>
            2 variants ↓
          </span>
        </div>

        {VARIANTS.map(v => (
          <HeroVariant key={v.num} v={v} />
        ))}
      </div>
    </>
  );
}
