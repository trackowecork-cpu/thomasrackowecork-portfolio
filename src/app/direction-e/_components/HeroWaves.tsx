"use client";

import { useEffect, useRef, RefObject } from "react";
import { ACC, MUT } from "../_tokens";

// ── Wave config type — exposed for external tuning ──────────────────────────
export interface WaveDef {
  yFrac:   number;  // vertical centre as fraction of canvas height (0–1)
  amp:     number;  // amplitude in CSS px
  freq:    number;  // full cycles spanning the canvas width
  phase:   number;  // initial phase in radians
  speed:   number;  // phase shift per animation frame (radians/frame)
  color:   string;  // CSS color string
  lineW:   number;  // stroke width in CSS px
  opacity: number;  // 0–1
}

// Three muted gray waves + one gold accent for subtle hierarchy.
// yFrac 0.62–0.86 places the band in the lower ~40% of the viewport hero;
// larger amplitudes on the higher waves help crests reach the subtitle text.
export const DEFAULT_WAVES: WaveDef[] = [
  { yFrac: 0.62, amp: 55, freq: 2.7, phase: 0.0,  speed: 0.0018, color: MUT, lineW: 1.0, opacity: 0.18 },
  { yFrac: 0.71, amp: 42, freq: 2.2, phase: 1.5,  speed: 0.0025, color: MUT, lineW: 1.0, opacity: 0.26 },
  { yFrac: 0.79, amp: 30, freq: 3.2, phase: 2.8,  speed: 0.0014, color: ACC, lineW: 1.3, opacity: 0.40 },
  { yFrac: 0.86, amp: 22, freq: 1.8, phase: 0.9,  speed: 0.0032, color: MUT, lineW: 1.0, opacity: 0.32 },
];

// Alpha of waves behind the text column — visible but clearly dimmed.
// The spec asks for 30–40%; 0.35 sits in the middle.
const TEXT_DIM   = 0.35;
const FADE_WIDTH = 80; // px — ramp from dimmed → full opacity past text edge

// ── Props ───────────────────────────────────────────────────────────────────
interface HeroWavesProps {
  textRef: RefObject<HTMLDivElement | null>;
  waves?:  WaveDef[];
}

// ── Component ────────────────────────────────────────────────────────────────
export function HeroWaves({
  textRef,
  waves = DEFAULT_WAVES,
}: HeroWavesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef    = useRef<number>(0);
  // Persist phases across React StrictMode remounts — no visible jump on re-mount
  const phaseRef  = useRef<number[]>(waves.map(w => w.phase));

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // ── Render one frame ────────────────────────────────────────────────────
    function render(cvs: HTMLCanvasElement, phases: number[]) {
      const W = cvs.offsetWidth;
      const H = cvs.offsetHeight;
      if (!W || !H) return;

      const dpr = window.devicePixelRatio || 1;
      const pw  = Math.round(W * dpr);
      const ph  = Math.round(H * dpr);
      if (cvs.width !== pw || cvs.height !== ph) {
        cvs.width  = pw;
        cvs.height = ph;
      }

      const ctx = cvs.getContext("2d");
      if (!ctx) return;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);

      // Draw each wave as a polyline over the full canvas width (step 2px
      // gives ~720 segments at 1440px — smooth and fast)
      for (let wi = 0; wi < waves.length; wi++) {
        const w     = waves[wi];
        const yBase = w.yFrac * H;

        ctx.beginPath();
        ctx.strokeStyle = w.color;
        ctx.lineWidth   = w.lineW;
        ctx.globalAlpha = w.opacity;

        for (let x = 0; x <= W + 2; x += 2) {
          const y =
            yBase +
            w.amp * Math.sin(w.freq * 2 * Math.PI * (x / W) + phases[wi]);
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      ctx.globalAlpha = 1;

      // ── Horizontal fade behind text column ──────────────────────────────
      // IMPORTANT: destination-in zeros pixels outside the drawing rect, so
      // we must use a SINGLE fillRect(0,0,W,H) spanning the full canvas —
      // never two separate rects.
      const textEdge = (() => {
        const text = textRef.current;
        if (!text) return 0;
        const t =
          text.getBoundingClientRect().right -
          cvs.getBoundingClientRect().left;
        return t > 10 ? t : 0;
      })();

      const tr = textEdge > 10 ? textEdge : W * 0.52;
      const fe = tr + FADE_WIDTH;

      ctx.globalCompositeOperation = "destination-in";

      const grd = ctx.createLinearGradient(0, 0, W, 0);
      if (tr < W) {
        const trF = Math.min(tr / W, 0.9999);
        const feF = Math.min(fe / W, 0.9999);
        grd.addColorStop(0,    `rgba(0,0,0,${TEXT_DIM})`);
        grd.addColorStop(trF,  `rgba(0,0,0,${TEXT_DIM})`);
        if (feF > trF) grd.addColorStop(feF, "rgba(0,0,0,1)");
        grd.addColorStop(1,    "rgba(0,0,0,1)");
      } else {
        // Text wider than canvas — dim everything
        grd.addColorStop(0, `rgba(0,0,0,${TEXT_DIM})`);
        grd.addColorStop(1, `rgba(0,0,0,${TEXT_DIM})`);
      }
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, W, H);

      ctx.globalCompositeOperation = "source-over";
    }

    // ── ResizeObserver — rebuild canvas at new dimensions ───────────────────
    const ro = new ResizeObserver(() => {
      if (canvas) render(canvas, phaseRef.current);
    });
    ro.observe(canvas);

    // ── Reduced-motion: static snapshot ─────────────────────────────────────
    if (prefersReduced) {
      const W = canvas.offsetWidth;
      const H = canvas.offsetHeight;
      if (W && H) render(canvas, phaseRef.current);
      return () => ro.disconnect();
    }

    // ── Animated path ────────────────────────────────────────────────────────
    function tick() {
      const phases = phaseRef.current;
      for (let i = 0; i < waves.length; i++) {
        phases[i] += waves[i].speed;
      }
      const cvs = canvasRef.current;
      if (!cvs) return;
      render(cvs, phases);
      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, [waves, textRef]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position:      "absolute",
        inset:         0,
        width:         "100%",
        height:        "100%",
        pointerEvents: "none",
        zIndex:        0,
        display:       "block",
      }}
    />
  );
}
