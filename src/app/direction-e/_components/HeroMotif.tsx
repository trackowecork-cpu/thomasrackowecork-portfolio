import { ACC, FNT, INK } from "../_tokens";

// ── Config ─────────────────────────────────────────────────────────────────
// Edit these values to tune the motif without touching the animation logic.
export const MOTIF_CONFIG = {
  cycleDuration: 10,   // seconds — full tangled → resolved → tangled loop
  dotDuration:   8,    // seconds — one dot traversal of the resolved path
  nodeRadius:    4,    // px
  dotRadius:     3.5,  // px
  lineWidth:     1,    // px
  lineOpacity:   0.45,
  nodeOpacity:   0.72,
};

const CFG = MOTIF_CONFIG;

// ── Desktop grid (5 columns × 3 rows, col gap 195, row gap 120) ────────────

const DR: [number, number][] = [
  // Resolved — clean orthogonal grid
  [40,35],  [235,35],  [430,35],  [625,35],  [820,35],
  [40,155], [235,155], [430,155], [625,155], [820,155],
  [40,275], [235,275], [430,275], [625,275], [820,275],
];

const DT: [number, number][] = [
  // Tangled — displaced to produce diagonal/crossing connections
  [55,68],  [248,15],  [428,78],  [648,20],  [835,55],
  [38,178], [228,218], [452,148], [612,190], [825,142],
  [70,260], [250,278], [440,265], [638,282], [842,268],
];

const DE: [number, number][] = (() => {
  const e: [number, number][] = [];
  // Horizontal: each node → right neighbour (same row)
  for (let r = 0; r < 3; r++)
    for (let c = 0; c < 4; c++)
      e.push([r * 5 + c, r * 5 + c + 1]);
  // Vertical: each node → node directly below
  for (let c = 0; c < 5; c++)
    for (let r = 0; r < 2; r++)
      e.push([r * 5 + c, (r + 1) * 5 + c]);
  return e;
})();

// Boustrophedon (snake) path through the resolved grid
const D_PATH = [
  "M 40,35  L 235,35  L 430,35  L 625,35  L 820,35",
  "L 820,155 L 625,155 L 430,155 L 235,155 L 40,155",
  "L 40,275 L 235,275 L 430,275 L 625,275 L 820,275",
].join(" ");

// ── Mobile row (8 nodes, single horizontal line) ───────────────────────────

const MR: [number, number][] = [
  [10,22],[62,22],[114,22],[166,22],[218,22],[270,22],[322,22],[374,22],
];

const MT: [number, number][] = [
  // Tangled — slight y variation creates a wavy, disordered feel
  [10,18],[62,30],[114,13],[166,28],[218,34],[270,16],[322,26],[374,21],
];

const ME: [number, number][] = [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]];

const M_PATH = "M 10,22 L 62,22 L 114,22 L 166,22 L 218,22 L 270,22 L 322,22 L 374,22";

// ── Shared styles (injected once via HeroMotifDesktop) ─────────────────────
const STYLES = `
  @keyframes hmFade {
    0%   { opacity: 0; }
    20%  { opacity: 0; }
    35%  { opacity: 1; }
    65%  { opacity: 1; }
    80%  { opacity: 0; }
    100% { opacity: 0; }
  }

  .hm-tangled { opacity: 1; }

  .hm-resolved {
    opacity: 0;
    animation: hmFade ${CFG.cycleDuration}s ease-in-out infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    .hm-tangled  { opacity: 0 !important; }
    .hm-resolved { animation: none !important; opacity: 1 !important; }
  }

  /* ── Desktop wrap — full content width, bottom-aligned with hero text ── */
  .hm-d {
    position: absolute;
    left:   clamp(1.25rem, 5vw, 5rem);
    right:  clamp(1.25rem, 5vw, 5rem);
    bottom: clamp(3.5rem, 7vw, 5.5rem);
    display: none;
    pointer-events: none;
    z-index: 0;
    /*
      Gradient mask: fully invisible behind headline and body text,
      easing in to full opacity once clear of both.
      At ≥1280px the text ends by ~58% of the motif width.
      At 1024px the text reaches ~63% — the 58–65% fade zone is very low
      opacity there, so legibility is preserved at all desktop sizes.
    */
    mask-image: linear-gradient(to right,
      transparent      0%,
      transparent      58%,
      rgba(0,0,0,0.18) 64%,
      black            73%
    );
    -webkit-mask-image: linear-gradient(to right,
      transparent      0%,
      transparent      58%,
      rgba(0,0,0,0.18) 64%,
      black            73%
    );
  }
  @media (min-width: 1024px) { .hm-d { display: block; } }

  /* ── Mobile strip — full-width, between hero and work ───────────────── */
  .hm-m {
    display: block;
    width: 100%;
    padding: 0 clamp(1.25rem, 5vw, 5rem);
    box-sizing: border-box;
    opacity: 0.7;
  }
  @media (min-width: 1024px) { .hm-m { display: none; } }
`;

// ── Internal diagram renderer ──────────────────────────────────────────────
function Diagram({
  resolved,
  tangled,
  edges,
  dotPath,
  viewBox,
  height,
}: {
  resolved: [number, number][];
  tangled:  [number, number][];
  edges:    [number, number][];
  dotPath:  string;
  viewBox:  string;
  height?:  number;
}) {
  return (
    <svg
      viewBox={viewBox}
      width="100%"
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      {/* Tangled state — base layer, always present */}
      <g className="hm-tangled">
        {edges.map(([a, b], i) => (
          <line
            key={`tl${i}`}
            x1={tangled[a][0]} y1={tangled[a][1]}
            x2={tangled[b][0]} y2={tangled[b][1]}
            stroke={FNT}
            strokeWidth={CFG.lineWidth}
            opacity={CFG.lineOpacity}
          />
        ))}
        {tangled.map(([x, y], i) => (
          <circle key={`tn${i}`} cx={x} cy={y} r={CFG.nodeRadius}
            fill={ACC} opacity={CFG.nodeOpacity} />
        ))}
      </g>

      {/* Resolved state — fades in and out via CSS animation */}
      <g className="hm-resolved">
        {edges.map(([a, b], i) => (
          <line
            key={`rl${i}`}
            x1={resolved[a][0]} y1={resolved[a][1]}
            x2={resolved[b][0]} y2={resolved[b][1]}
            stroke={FNT}
            strokeWidth={CFG.lineWidth}
            opacity={CFG.lineOpacity}
          />
        ))}
        {resolved.map(([x, y], i) => (
          <circle key={`rn${i}`} cx={x} cy={y} r={CFG.nodeRadius}
            fill={ACC} opacity={CFG.nodeOpacity} />
        ))}
        {/* Traveling dot — visible only while resolved state is showing */}
        <circle r={CFG.dotRadius} fill={INK} opacity={0.9}>
          <animateMotion
            dur={`${CFG.dotDuration}s`}
            repeatCount="indefinite"
            path={dotPath}
            calcMode="linear"
          />
        </circle>
      </g>
    </svg>
  );
}

// ── Exports ────────────────────────────────────────────────────────────────

// Place inside the hero section (before the text content div).
// Requires the hero section to have position: relative; overflow: hidden.
export function HeroMotifDesktop() {
  return (
    <>
      <style>{STYLES}</style>
      <div className="hm-d" aria-hidden="true">
        <Diagram
          resolved={DR}
          tangled={DT}
          edges={DE}
          dotPath={D_PATH}
          viewBox="0 0 885 310"
        />
      </div>
    </>
  );
}

// Place between the hero section and the Selected Work section.
// Relies on STYLES injected by HeroMotifDesktop above.
export function HeroMotifMobile() {
  return (
    <div className="hm-m" aria-hidden="true">
      <Diagram
        resolved={MR}
        tangled={MT}
        edges={ME}
        dotPath={M_PATH}
        viewBox="0 0 384 44"
        height={44}
      />
    </div>
  );
}
