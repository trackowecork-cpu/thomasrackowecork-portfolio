"use client";

import { useEffect, useRef } from "react";
import { ACC } from "../_tokens";

function toRgba(hex: string, alpha: number): string {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

const GLOW_CORE = toRgba(ACC, 0.10);
const GLOW_EDGE = toRgba(ACC, 0.00);

export function HeroAmbient() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Draw one noise frame at CSS-pixel resolution.
    // No DPR scaling — grain doesn't need HiDPI and drawing at 1× cuts
    // compute by 4× on 2× displays, keeping the interval lightweight.
    function drawGrain(cvs: HTMLCanvasElement) {
      const W = cvs.offsetWidth;
      const H = cvs.offsetHeight;
      if (!W || !H) return;

      if (cvs.width !== W || cvs.height !== H) {
        cvs.width  = W;
        cvs.height = H;
      }

      const ctx = cvs.getContext("2d");
      if (!ctx) return;

      const img  = ctx.createImageData(W, H);
      const data = img.data;
      for (let i = 0; i < data.length; i += 4) {
        const v    = (Math.random() * 255) | 0;
        data[i]     = v;
        data[i + 1] = v;
        data[i + 2] = v;
        data[i + 3] = (Math.random() * 23) | 0; // max alpha ~0.09
      }
      ctx.putImageData(img, 0, 0);
    }

    // Draw immediately so the canvas is never blank on first paint
    drawGrain(canvas);

    // Reduced-motion: static single frame, no interval
    if (prefersReduced) return;

    // Interval redraw — not RAF, keeps CPU negligible (~11 redraws/sec)
    const interval = setInterval(() => drawGrain(canvas), 90);

    // Rebuild at new dimensions on resize
    const ro = new ResizeObserver(() => drawGrain(canvas));
    ro.observe(canvas);

    return () => {
      clearInterval(interval);
      ro.disconnect();
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes e3GlowDrift {
          0%   { transform: translate(0,   0)  scale(1);    }
          50%  { transform: translate(10%, 7%) scale(1.05); }
          100% { transform: translate(0,   0)  scale(1);    }
        }
        .e3-glow-orb {
          animation: e3GlowDrift 28s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .e3-glow-orb { animation: none !important; }
        }
      `}</style>

      {/* ── Glow — lowest layer, behind grain and text ─── */}
      <div
        aria-hidden="true"
        style={{
          position:      "absolute",
          inset:         0,
          zIndex:        0,
          pointerEvents: "none",
        }}
      >
        <div
          className="e3-glow-orb"
          style={{
            position:     "absolute",
            top:          "5%",
            left:         "8%",
            width:        "70%",
            height:       "80%",
            borderRadius: "50%",
            background:   `radial-gradient(ellipse at center, ${GLOW_CORE} 0%, ${GLOW_EDGE} 65%)`,
            filter:       "blur(30px)",
          }}
        />
      </div>

      {/* ── Grain — above glow, below text ─────────────── */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{
          position:      "absolute",
          inset:         0,
          width:         "100%",
          height:        "100%",
          pointerEvents: "none",
          zIndex:        1,
          display:       "block",
          mixBlendMode:  "overlay",
          opacity:       0.45,
        }}
      />
    </>
  );
}
