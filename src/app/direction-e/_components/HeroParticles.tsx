"use client";

import { useEffect, useRef, useCallback, RefObject } from "react";
import { ACC, FNT, MUT } from "../_tokens";

// ── Configuration ──────────────────────────────────────────────────────────────
const COLS = 10;
const ROWS = 6;
const BLEED_X = 0.09;   // fraction bleeding past each horizontal edge
const BLEED_Y = 0.175;  // fraction bleeding past top only (no bottom bleed)

const CFG = {
  lerpSpeed:       0.055,
  chaosSpeed:      0.038,
  driftMax:        0.48,
  driftNudge:      0.04,
  lineMaxOpacity:  0.30,
  lineWidth:       0.75,
  nodeRadius:      4.5,
  nodeOpacityMax:  0.78,
  dotRadius:       2.5,
  dotSpeed:        0.0016,
  resolvedThresh:  0.84,
  maskDim:         0.35,   // canvas alpha over text column
  maskFadeWidth:   96,     // px ramp from dim → full past text right edge
  mobileDelay:     2600,   // ms before auto-resolve on touch devices
};

// ── Types ──────────────────────────────────────────────────────────────────────
interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  r: number;               // 0 = chaos, 1 = resolved
  gx: number; gy: number;  // target grid position
}

interface Field {
  particles: Particle[];
  resolved:  [number, number][];
  edges:     [number, number][];
  hovering:  boolean;
  dotT:      number;
}

// ── Helpers ────────────────────────────────────────────────────────────────────
function hexRgb(hex: string): [number, number, number] {
  const h = hex.replace("#", "");
  return [parseInt(h.slice(0,2),16), parseInt(h.slice(2,4),16), parseInt(h.slice(4,6),16)];
}

const ACC_RGB = hexRgb(ACC);
const FNT_RGB = hexRgb(FNT);
const MUT_RGB = hexRgb(MUT);

function lerp3(
  a: [number,number,number],
  b: [number,number,number],
  t: number,
): string {
  return `rgb(${Math.round(a[0]+(b[0]-a[0])*t)},${Math.round(a[1]+(b[1]-a[1])*t)},${Math.round(a[2]+(b[2]-a[2])*t)})`;
}

function buildField(W: number, H: number): Field {
  const x0 = -W * BLEED_X;
  const x1 = W * (1 + BLEED_X);
  const y0 = -H * BLEED_Y;
  const y1 = H; // no bottom bleed

  const gapX = (x1 - x0) / (COLS - 1);
  const gapY = (y1 - y0) / (ROWS - 1);

  const resolved: [number, number][] = [];
  for (let r = 0; r < ROWS; r++)
    for (let c = 0; c < COLS; c++)
      resolved.push([x0 + c * gapX, y0 + r * gapY]);

  const edges: [number, number][] = [];
  for (let r = 0; r < ROWS; r++)
    for (let c = 0; c < COLS - 1; c++)
      edges.push([r * COLS + c, r * COLS + c + 1]);
  for (let c = 0; c < COLS; c++)
    for (let r = 0; r < ROWS - 1; r++)
      edges.push([r * COLS + c, (r + 1) * COLS + c]);

  const particles: Particle[] = resolved.map(([gx, gy]) => ({
    x:  x0 + Math.random() * (x1 - x0),
    y:  y0 + Math.random() * (y1 - y0),
    vx: (Math.random() - 0.5) * CFG.driftMax * 1.4,
    vy: (Math.random() - 0.5) * CFG.driftMax * 1.4,
    r:  0,
    gx, gy,
  }));

  return { particles, resolved, edges, hovering: false, dotT: 0 };
}

function stepField(f: Field, W: number, H: number): void {
  const x0 = -W * BLEED_X, x1 = W * (1 + BLEED_X);
  const y0 = -H * BLEED_Y, y1 = H;

  for (const p of f.particles) {
    if (f.hovering) {
      p.x  += (p.gx - p.x) * CFG.lerpSpeed;
      p.y  += (p.gy - p.y) * CFG.lerpSpeed;
      p.r  += (1 - p.r)    * CFG.lerpSpeed;
      p.vx *= 0.88; p.vy *= 0.88;
    } else {
      p.r += (0 - p.r) * CFG.chaosSpeed;
      const spd = Math.sqrt(p.vx*p.vx + p.vy*p.vy);
      if (spd < CFG.driftMax * 0.35) {
        p.vx += (Math.random() - 0.5) * CFG.driftNudge;
        p.vy += (Math.random() - 0.5) * CFG.driftNudge;
      } else if (spd > CFG.driftMax) {
        const inv = CFG.driftMax / spd;
        p.vx *= inv; p.vy *= inv;
      }
      p.x += p.vx; p.y += p.vy;
      if (p.x < x0) p.vx += 0.025;
      if (p.x > x1) p.vx -= 0.025;
      if (p.y < y0) p.vy += 0.025;
      if (p.y > y1) p.vy -= 0.025;
    }
  }
  f.dotT += CFG.dotSpeed * f.edges.length;
}

function renderField(
  ctx: CanvasRenderingContext2D,
  f: Field,
  W: number,
  H: number,
  textRight: number,
): void {
  ctx.clearRect(0, 0, W, H);

  const avgR      = f.particles.reduce((s: number, p: Particle) => s + p.r, 0) / f.particles.length;
  const overThresh = avgR > CFG.resolvedThresh;
  const lineA     = overThresh
    ? Math.min(CFG.lineMaxOpacity, ((avgR - CFG.resolvedThresh) / (1 - CFG.resolvedThresh)) * CFG.lineMaxOpacity)
    : 0;

  // Edges — appear as particles resolve toward grid
  if (lineA > 0.004) {
    ctx.globalAlpha = lineA;
    ctx.strokeStyle = `rgb(${FNT_RGB[0]},${FNT_RGB[1]},${FNT_RGB[2]})`;
    ctx.lineWidth   = CFG.lineWidth;
    for (const [a, b] of f.edges) {
      ctx.beginPath();
      ctx.moveTo(f.particles[a].x, f.particles[a].y);
      ctx.lineTo(f.particles[b].x, f.particles[b].y);
      ctx.stroke();
    }
  }

  // Nodes — lerp from MUT (chaos) toward ACC (resolved)
  for (const p of f.particles) {
    ctx.globalAlpha = CFG.nodeOpacityMax * Math.max(0.55, p.r);
    ctx.fillStyle   = lerp3(MUT_RGB, ACC_RGB, p.r * 0.7);
    ctx.beginPath();
    ctx.arc(p.x, p.y, CFG.nodeRadius, 0, Math.PI * 2);
    ctx.fill();
  }

  // Traveling dot along resolved grid edges
  if (overThresh && lineA > 0.04 && f.edges.length > 0) {
    const seg  = f.dotT % 1;
    const edge = f.edges[Math.floor(f.dotT % f.edges.length)];
    const [ax, ay] = f.resolved[edge[0]];
    const [bx, by] = f.resolved[edge[1]];
    ctx.globalAlpha = lineA * 0.75;
    ctx.fillStyle   = "#F5F1EC";
    ctx.beginPath();
    ctx.arc(ax + (bx - ax) * seg, ay + (by - ay) * seg, CFG.dotRadius, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.globalAlpha = 1;

  // Text-legibility mask: single full-canvas fillRect with a gradient.
  // IMPORTANT: destination-in zeros any pixels outside the drawing command's area,
  // so we must cover the entire canvas in one rect — never use two separate fillRects.
  const tr = textRight > 10 ? textRight : W * 0.52;
  const fe = Math.min(tr + CFG.maskFadeWidth, W);

  ctx.globalCompositeOperation = "destination-in";

  const grd = ctx.createLinearGradient(0, 0, W, 0);
  if (tr < W) {
    const trFrac = Math.min(tr / W, 0.9999);
    const feFrac = Math.min(fe / W, 0.9999);
    grd.addColorStop(0,       `rgba(0,0,0,${CFG.maskDim})`);
    grd.addColorStop(trFrac,  `rgba(0,0,0,${CFG.maskDim})`);
    if (feFrac > trFrac) grd.addColorStop(feFrac, "rgba(0,0,0,1)");
    grd.addColorStop(1,       "rgba(0,0,0,1)");
  } else {
    grd.addColorStop(0, `rgba(0,0,0,${CFG.maskDim})`);
    grd.addColorStop(1, `rgba(0,0,0,${CFG.maskDim})`);
  }
  ctx.fillStyle = grd;
  ctx.fillRect(0, 0, W, H);

  ctx.globalCompositeOperation = "source-over";
}

// ── Component ──────────────────────────────────────────────────────────────────
export function HeroParticles({
  textRef,
}: {
  textRef: RefObject<HTMLDivElement | null>;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fieldRef  = useRef<Field | null>(null);
  const rafRef    = useRef<number>(0);
  // Track whether the full animation loop has been started
  const startedRef = useRef(false);

  const getTextRight = useCallback((): number => {
    const canvas = canvasRef.current;
    const text   = textRef.current;
    if (!canvas || !text) return 0;
    return text.getBoundingClientRect().right - canvas.getBoundingClientRect().left;
  }, [textRef]);

  const tick = useCallback(() => {
    const canvas = canvasRef.current;
    const field  = fieldRef.current;
    if (!canvas || !field) return;

    const W   = canvas.offsetWidth;
    const H   = canvas.offsetHeight;
    if (!W || !H) { rafRef.current = requestAnimationFrame(tick); return; }

    const dpr = window.devicePixelRatio || 1;
    if (canvas.width !== W * dpr || canvas.height !== H * dpr) {
      canvas.width  = W * dpr;
      canvas.height = H * dpr;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    stepField(field, W, H);
    renderField(ctx, field, W, H, getTextRight());

    rafRef.current = requestAnimationFrame(tick);
  }, [getTextRight]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile       = window.matchMedia("(max-width: 1023px)").matches;

    let cleanupInteraction = () => {};

    // Render static resolved grid for reduced-motion users (called once we have dimensions)
    function renderStatic(cvs: HTMLCanvasElement, W: number, H: number) {
      const f = buildField(W, H);
      for (const p of f.particles) { p.x = p.gx; p.y = p.gy; p.r = 1; }
      f.hovering = true;
      const dpr = window.devicePixelRatio || 1;
      cvs.width = W * dpr; cvs.height = H * dpr;
      const ctx = cvs.getContext("2d");
      if (ctx) {
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        renderField(ctx, f, W, H, getTextRight());
      }
    }

    // Full animation initialisation — called once we have real canvas dimensions
    function initAnimation(cvs: HTMLCanvasElement, W: number, H: number) {
      if (startedRef.current) return;
      startedRef.current = true;

      const f = buildField(W, H);
      fieldRef.current = f;

      // Render one frame synchronously so the canvas is never blank on first paint
      const dpr0 = window.devicePixelRatio || 1;
      cvs.width = W * dpr0; cvs.height = H * dpr0;
      const ctx0 = cvs.getContext("2d");
      if (ctx0) {
        ctx0.setTransform(dpr0, 0, 0, dpr0, 0, 0);
        renderField(ctx0, f, W, H, getTextRight());
      }

      rafRef.current   = requestAnimationFrame(tick);

      if (isMobile) {
        const timer = setTimeout(() => {
          if (fieldRef.current) fieldRef.current.hovering = true;
        }, CFG.mobileDelay);
        cleanupInteraction = () => clearTimeout(timer);
      } else {
        const hero = cvs.closest(".e3-hero") as HTMLElement | null;
        if (hero) {
          const onEnter = () => { if (fieldRef.current) fieldRef.current.hovering = true;  };
          const onLeave = () => { if (fieldRef.current) fieldRef.current.hovering = false; };
          hero.addEventListener("mouseenter", onEnter);
          hero.addEventListener("mouseleave", onLeave);
          cleanupInteraction = () => {
            hero.removeEventListener("mouseenter", onEnter);
            hero.removeEventListener("mouseleave", onLeave);
          };
        }
      }
    }

    // ResizeObserver set up unconditionally — handles both initial sizing and resizes.
    // This is the fix for the 0×0 canvas-on-mount problem: if offsetWidth/Height are
    // zero when the effect runs (layout not yet settled), the observer fires once the
    // canvas reaches its real dimensions and triggers initialisation then.
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const W = Math.round(entry.contentRect.width);
        const H = Math.round(entry.contentRect.height);
        if (!W || !H) continue;

        if (prefersReduced) {
          renderStatic(canvas, W, H);
          ro.disconnect();
          return;
        }

        if (!startedRef.current) {
          initAnimation(canvas, W, H);
        } else if (fieldRef.current) {
          // Rebuild field on resize, preserving hover state
          const wasHovering = fieldRef.current.hovering;
          fieldRef.current  = buildField(W, H);
          fieldRef.current.hovering = wasHovering;
        }
      }
    });

    ro.observe(canvas);

    // Also attempt immediate init if canvas already has dimensions
    // (common when navigating back to the page)
    const W = canvas.offsetWidth, H = canvas.offsetHeight;
    if (W && H) {
      if (prefersReduced) {
        renderStatic(canvas, W, H);
        ro.disconnect();
      } else {
        initAnimation(canvas, W, H);
      }
    }

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      cleanupInteraction();
      // Reset so the second StrictMode mount can re-initialise the RAF loop
      startedRef.current = false;
      fieldRef.current   = null;
    };
  }, [tick, getTextRight]);

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
        display:       "block", // prevent inline-block baseline gap
      }}
    />
  );
}
