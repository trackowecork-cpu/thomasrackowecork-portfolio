"use client";

import { useEffect, useRef, RefObject } from "react";
import { ACC } from "../_tokens";

// ── Constants ─────────────────────────────────────────────────────────────────
const BASE_FONT_PX    = 11;
const BASE_PILL_H     = 30;
const H_PAD           = 18;
const MIN_GAP         = 28;    // minimum gap between any two pill edges (px)
const COLLISION_ITERS = 6;     // SAT correction passes per frame

const SCALE_MIN = 0.72;
const SCALE_MAX = 1.08;
const ALPHA_MIN = 0.18;
const ALPHA_MAX = 0.88;

// Spring + damping: pills orbit their home cells loosely.
// SPRING_K is intentionally much weaker than repulsion — just enough to
// prevent permanent drift away from the assigned grid region.
const SPRING_K  = 0.0016;  // home-pull strength (rad-equivalent per frame)
const DAMPING   = 0.988;   // velocity multiplier per frame (slight drag)
const SPEED_CAP = 0.50;    // px/frame — prevents runaway velocity

const BASE_HALF_H = BASE_PILL_H / 2;

// ── Public config ─────────────────────────────────────────────────────────────
export interface PillsConfig {
  skills:         string[];
  zonePadding:    number;   // px from measured text-column right edge to pill zone
  depthSpeedBase: number;   // base rad/frame for depth cycle (individual ±40%)
}

export const DEFAULT_PILLS_CONFIG: PillsConfig = {
  skills: [
    "Service Design",
    "Research",
    "Critical Thinking",
    "Prototyping",
    "Systems Thinking",
    "Strategy",
    "Facilitation",
    "UX Writing",
    "Product Strategy",
  ],
  zonePadding:    50,
  depthSpeedBase: 0.0038,
};

// ── Internal pill state ───────────────────────────────────────────────────────
interface Pill {
  x:           number;
  y:           number;
  vx:          number;
  vy:          number;
  homeX:       number;   // assigned grid-cell centre — spring target
  homeY:       number;
  depthPhase:  number;
  depthSpeed:  number;
  baseHalfW:   number;   // half-width at scale=1
  label:       string;   // uppercase
}

// ── Geometry helpers ─────────────────────────────────────────────────────────
function currentScale(phase: number): number {
  return SCALE_MIN + ((Math.sin(phase) + 1) / 2) * (SCALE_MAX - SCALE_MIN);
}
function scaledHW(p: Pill): number { return p.baseHalfW * currentScale(p.depthPhase); }
function scaledHH(p: Pill): number { return BASE_HALF_H  * currentScale(p.depthPhase); }

// ── Rounded-rectangle path (manual — avoids ctx.roundRect compat issues) ─────
function pillPath(ctx: CanvasRenderingContext2D, cx: number, cy: number, hw: number, hh: number) {
  const r = hh;
  const x = cx - hw; const y = cy - hh;
  const w = hw * 2;  const h = hh * 2;
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.arcTo(x + w, y,   x + w, y + r,   r);
  ctx.lineTo(x + w, y + h - r);
  ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
  ctx.lineTo(x + r, y + h);
  ctx.arcTo(x,   y + h, x, y + h - r,   r);
  ctx.lineTo(x,   y + r);
  ctx.arcTo(x,   y,   x + r, y,         r);
  ctx.closePath();
}

// ── SAT AABB pair resolver — corrects positions only, no velocity side-effects ─
function resolvePair(a: Pill, b: Pill): boolean {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const minX = scaledHW(a) + scaledHW(b) + MIN_GAP;
  const minY = scaledHH(a) + scaledHH(b) + MIN_GAP;
  const ox = minX - Math.abs(dx);
  const oy = minY - Math.abs(dy);
  if (ox <= 0 || oy <= 0) return false;
  // Push along the minimum-translation-vector axis (SAT)
  if (ox <= oy) {
    const push = ox / 2 + 0.5;
    const sign = dx >= 0 ? 1 : -1;
    a.x -= sign * push;
    b.x += sign * push;
  } else {
    const push = oy / 2 + 0.5;
    const sign = dy >= 0 ? 1 : -1;
    a.y -= sign * push;
    b.y += sign * push;
  }
  return true;
}

// ── Clamp to zone bounds ──────────────────────────────────────────────────────
// flipVelocity=false during init spread (don't corrupt velocities we set)
// flipVelocity=true  during runtime (bounce off walls naturally)
function clampToBounds(p: Pill, l: number, r: number, t: number, b: number, flipV: boolean) {
  const hw = scaledHW(p);
  const hh = scaledHH(p);
  if (p.x - hw < l) { p.x = l + hw; if (flipV && p.vx < 0) p.vx = -p.vx; }
  if (p.x + hw > r) { p.x = r - hw; if (flipV && p.vx > 0) p.vx = -p.vx; }
  if (p.y - hh < t) { p.y = t + hh; if (flipV && p.vy < 0) p.vy = -p.vy; }
  if (p.y + hh > b) { p.y = b - hh; if (flipV && p.vy > 0) p.vy = -p.vy; }
}

// ── Init-time spread: pure position correction, no velocity side-effects ──────
function spreadPass(pills: Pill[], l: number, r: number, t: number, b: number) {
  for (let i = 0; i < pills.length; i++)
    for (let j = i + 1; j < pills.length; j++)
      resolvePair(pills[i], pills[j]);
  for (const p of pills) clampToBounds(p, l, r, t, b, false);
}

// ── Runtime collision: n iterations, velocity-aware boundary bounce ───────────
function resolveAll(pills: Pill[], l: number, r: number, t: number, b: number) {
  for (let iter = 0; iter < COLLISION_ITERS; iter++) {
    for (let i = 0; i < pills.length; i++)
      for (let j = i + 1; j < pills.length; j++)
        resolvePair(pills[i], pills[j]);
    for (const p of pills) clampToBounds(p, l, r, t, b, true);
  }
}

// ── Props ─────────────────────────────────────────────────────────────────────
interface HeroPillsProps {
  textRef: RefObject<HTMLDivElement | null>;
  config?: PillsConfig;
}

// ── Component ─────────────────────────────────────────────────────────────────
export function HeroPills({ textRef, config = DEFAULT_PILLS_CONFIG }: HeroPillsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef  = useRef<{
    pills:    Pill[];
    ready:    boolean;
    monoFont: string;
  }>({ pills: [], ready: false, monoFont: "ui-monospace, monospace" });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const monoVar = getComputedStyle(document.documentElement)
      .getPropertyValue("--font-geist-mono").trim();
    stateRef.current.monoFont = monoVar || "ui-monospace, monospace";

    function getTextRight(cvs: HTMLCanvasElement): number {
      const t = textRef.current;
      if (!t) return cvs.offsetWidth * 0.40;
      const tr = t.getBoundingClientRect().right - cvs.getBoundingClientRect().left;
      return tr > 10 ? tr : cvs.offsetWidth * 0.40;
    }

    // ── Initialise pills ──────────────────────────────────────────────────────
    function init(cvs: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
      const W = cvs.offsetWidth;
      const H = cvs.offsetHeight;
      if (!W || !H) return;

      const textRight = getTextRight(cvs);
      const zL = textRight + config.zonePadding;
      const zR = W  - 20;
      const zT = 20;
      const zB = H  - 20;
      if (zR - zL < 80 || zB - zT < 80) return;

      const zoneW = zR - zL;
      const zoneH = zB - zT;
      const n     = config.skills.length;

      // ── Grid layout: cols/rows scaled to the zone's aspect ratio ────────────
      // This evenly tiles the zone regardless of whether it's tall or wide.
      const cols  = Math.max(1, Math.round(Math.sqrt(n * zoneW / zoneH)));
      const rows  = Math.ceil(n / cols);
      const cellW = zoneW / cols;
      const cellH = zoneH / rows;

      // Shuffle cell indices so pill-to-region assignment varies each session
      const cells = Array.from({ length: cols * rows }, (_, i) => i);
      for (let i = cells.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cells[i], cells[j]] = [cells[j], cells[i]];
      }

      ctx.font = `${BASE_FONT_PX}px ${stateRef.current.monoFont}`;

      const pills: Pill[] = config.skills.map((label, idx) => {
        const upper  = label.toUpperCase();
        const tw     = ctx.measureText(upper).width;
        const baseHW = tw / 2 + H_PAD;

        const cell  = cells[idx];
        const col   = cell % cols;
        const row   = Math.floor(cell / cols);

        // Home = cell centre; jitter so pills don't all start exactly at centres
        const homeX   = zL + (col + 0.5) * cellW;
        const homeY   = zT + (row + 0.5) * cellH;
        const jitterX = (Math.random() - 0.5) * cellW  * 0.22;
        const jitterY = (Math.random() - 0.5) * cellH  * 0.22;

        return {
          x:          homeX + jitterX,
          y:          homeY + jitterY,
          vx:         (Math.random() - 0.5) * 0.20,
          vy:         (Math.random() - 0.5) * 0.15,
          homeX,
          homeY,
          depthPhase: Math.random() * Math.PI * 2,
          depthSpeed: config.depthSpeedBase * (0.6 + Math.random() * 0.8),
          baseHalfW:  baseHW,
          label:      upper,
        };
      });

      // ── Spread initial placement — eliminate start-overlap without touching velocities
      for (let i = 0; i < 50; i++) spreadPass(pills, zL, zR, zT, zB);

      stateRef.current.pills = pills;
      stateRef.current.ready = true;
    }

    // ── Render one frame ──────────────────────────────────────────────────────
    function render(cvs: HTMLCanvasElement) {
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

      if (!stateRef.current.ready) {
        init(cvs, ctx);
        if (!stateRef.current.ready) return;
      }

      const textRight = getTextRight(cvs);
      const zL = textRight + config.zonePadding;
      const zR = W  - 20;
      const zT = 20;
      const zB = H  - 20;
      const pills = stateRef.current.pills;

      if (!prefersReduced) {
        for (const p of pills) {
          // Weak spring pull toward home — prevents permanent clustering
          p.vx += (p.homeX - p.x) * SPRING_K;
          p.vy += (p.homeY - p.y) * SPRING_K;

          // Velocity damping (prevents oscillation around home)
          p.vx *= DAMPING;
          p.vy *= DAMPING;

          // Speed cap
          const spd = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
          if (spd > SPEED_CAP) { p.vx *= SPEED_CAP / spd; p.vy *= SPEED_CAP / spd; }

          p.x += p.vx;
          p.y += p.vy;
          p.depthPhase += p.depthSpeed;
        }

        // Hard SAT collision + boundary bounce
        resolveAll(pills, zL, zR, zT, zB);
      }

      // ── Draw — back-to-front by depth so nearer pills render on top ────────
      const sorted = [...pills].sort(
        (a, b) => currentScale(a.depthPhase) - currentScale(b.depthPhase)
      );
      const monoFont = stateRef.current.monoFont;

      for (const p of sorted) {
        const scale = currentScale(p.depthPhase);
        const depth = (scale - SCALE_MIN) / (SCALE_MAX - SCALE_MIN);
        const alpha = ALPHA_MIN + depth * (ALPHA_MAX - ALPHA_MIN);
        const hw    = p.baseHalfW * scale;
        const hh    = BASE_HALF_H  * scale;
        const fs    = BASE_FONT_PX  * scale;

        ctx.globalAlpha = alpha;

        pillPath(ctx, p.x, p.y, hw, hh);
        ctx.fillStyle = "rgba(196,168,130,0.07)";
        ctx.fill();
        ctx.strokeStyle = ACC;
        ctx.lineWidth   = 1;
        ctx.stroke();

        ctx.font         = `${fs}px ${monoFont}`;
        ctx.fillStyle    = ACC;
        ctx.textAlign    = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(p.label, p.x, p.y);
      }

      ctx.globalAlpha  = 1;
      ctx.textAlign    = "left";
      ctx.textBaseline = "alphabetic";
    }

    // ── ResizeObserver — re-init on canvas size change ────────────────────────
    const ro = new ResizeObserver(() => {
      stateRef.current.ready = false;
      if (canvas) render(canvas);
    });
    ro.observe(canvas);

    if (prefersReduced) {
      document.fonts.ready.then(() => render(canvas));
      return () => ro.disconnect();
    }

    // ── Animation loop — start after fonts load for accurate text measurement ─
    document.fonts.ready.then(() => {
      function tick() {
        const cvs = canvasRef.current;
        if (!cvs) return;
        render(cvs);
        rafRef.current = requestAnimationFrame(tick);
      }
      rafRef.current = requestAnimationFrame(tick);
    });

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, [config, textRef]);

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
