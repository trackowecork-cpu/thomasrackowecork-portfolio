import Image from "next/image";
import { getHomepage } from "@/lib/homepage";
import { DirectionENav } from "../../_components/nav";
import { DirectionEFooter } from "../../_components/footer";
import { C, M, S, GR, BD, INK, IN2, MUT, FNT, ACC } from "../../_tokens";
import {
  EditorialProximus,
  EditorialEshare,
  EditorialESim,
  EditorialArteia,
} from "./_artefacts";

export function generateMetadata() {
  const data = getHomepage();
  return { title: data.metaTitle };
}

function getArtefact(n: string) {
  switch (n) {
    case "01": return <EditorialProximus />;
    case "02": return <EditorialEshare />;
    case "03": return <EditorialESim />;
    case "04": return <EditorialArteia />;
    default:   return null;
  }
}

export default function ExperimentEditorial() {
  const data = getHomepage();

  return (
    <>
      <style>{`
        /* ── page shell ── */
        .exd {
          position: fixed; inset: 0; z-index: 100;
          overflow-y: auto; background: ${GR};
          font-family: ${S}; color: ${INK};
          -webkit-font-smoothing: antialiased;
        }

        /* ── experiment strip ── */
        .exd-strip {
          border-bottom: 1px solid ${BD};
          padding: 0.625rem clamp(1.25rem, 5vw, 5rem);
          display: flex; align-items: center; gap: 1.25rem;
        }
        .exd-tag  { font-family: ${M}; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: ${ACC}; }
        .exd-desc { font-family: ${S}; font-size: 12px; color: ${FNT}; }
        .exd-nav-link {
          font-family: ${M}; font-size: 11px; color: ${FNT};
          text-decoration: none; letter-spacing: 0.08em; transition: color 150ms ease;
        }
        .exd-nav-link:hover { color: ${MUT}; }

        /* ── section ── */
        .exd-section {
          border-top: 1px solid ${BD};
          padding: clamp(2.5rem, 5vw, 4rem) clamp(1.25rem, 5vw, 5rem);
        }
        .exd-section-label {
          font-family: ${M}; font-size: 12px;
          text-transform: uppercase; letter-spacing: 0.12em; color: ${FNT};
          display: block;
          margin-bottom: clamp(1.75rem, 3.5vw, 2.75rem);
        }

        /* ── project row ──
           Mobile:   single column, DOM order → number / title / artefact / body.
           ≥640px:   44px | 1fr (title+body stacked) | 38vw (artefact spanning both rows).
           Explicit grid-column/row placement handles the desktop reflow.
        ── */
        .exd-project {
          border-top: 1px solid ${BD};
          padding: clamp(3rem, 6.5vw, 5.5rem) 0;
          display: grid;
          grid-template-columns: 1fr;
          row-gap: 0;
          align-items: start;
        }
        .exd-pn {
          font-family: ${M}; font-size: 12px; color: ${FNT}; display: block;
          margin-bottom: clamp(0.375rem, 1vw, 0.5rem);
        }

        /* Mobile spacing — title sits above artefact, artefact above description */
        .exd-title-block { margin-bottom: clamp(1.25rem, 3vw, 1.75rem); }
        .exd-artefact    { margin-bottom: clamp(1.5rem, 3.5vw, 2rem); }

        /* Touch devices — artefact always at full opacity (no hover) */
        @media (hover: none) { .exd-artefact { opacity: 1; } }

        @media (min-width: 640px) {
          .exd-project {
            grid-template-columns: 44px 1fr 38vw;
            grid-template-rows: auto auto;
            column-gap: clamp(1.5rem, 3vw, 2.5rem);
            row-gap: clamp(0.75rem, 1.5vw, 1rem);
          }
          /* Number spans both text rows, vertically anchored top */
          .exd-pn {
            grid-column: 1; grid-row: 1 / 3;
            padding-top: 4px; margin-bottom: 0;
          }
          /* Title: row 1 of the text column */
          .exd-title-block { grid-column: 2; grid-row: 1; margin-bottom: 0; }
          /* Body (description + meta): row 2 of the text column */
          .exd-body        { grid-column: 2; grid-row: 2; }
          /* Artefact spans both text rows in the right column */
          .exd-artefact    { grid-column: 3; grid-row: 1 / 3; margin-bottom: 0; }
        }

        /* ── artefact column ──
           Floats in its column — no container, no border.
           Sits at 80% opacity at rest; lifts to full on row hover.
        ── */
        .exd-artefact {
          width: 100%;
          opacity: 0.8;
          transition: opacity 600ms ease;
        }
        .exd-project:hover .exd-artefact { opacity: 1; }

        /* ── links ── */
        a.exd-title { color: ${INK}; text-decoration: none; transition: color 180ms ease; }
        a.exd-title:hover { color: ${ACC}; }
        a.exd-arrow { color: ${FNT}; text-decoration: none; font-size: 14px; font-family: ${S}; transition: color 180ms ease; }
        a.exd-arrow:hover { color: ${MUT}; }

        /* ── about teaser (identical to production) ── */
        .e3-about-flex {
          display: flex; flex-direction: column;
          align-items: flex-start; gap: clamp(2rem, 4vw, 2.5rem);
        }
        @media (min-width: 640px) {
          .e3-about-flex {
            flex-direction: row;
            align-items: center;
            gap: clamp(2.5rem, 5vw, 4rem);
          }
        }
        .e3-about-circle {
          width: 160px; height: 160px;
          border-radius: 50%; background: #1A1714;
          border: 1px solid ${BD}; box-sizing: border-box; flex-shrink: 0;
          position: relative; overflow: hidden;
        }
        @media (min-width: 640px)  { .e3-about-circle { width: 200px; height: 200px; } }
        @media (min-width: 1024px) { .e3-about-circle { width: 220px; height: 220px; } }

        /* ════════════════════════════════════════════════════════════════
           SVG ELEMENT BASE VISIBILITY
           Elements targeted by hover have their opacity set here,
           not inline — so the transition cascade works cleanly.
        ════════════════════════════════════════════════════════════════ */

        /* Proximus+ */
        .ed-prox-line  { opacity: 0.6;  transition: opacity 800ms ease; }
        .ed-prox-spine { opacity: 0.55; transition: opacity 800ms ease; }

        /* eShare */
        .ed-share-entry     { opacity: 0.65; transition: opacity 800ms ease; }
        .ed-share-main      { opacity: 0.55; transition: opacity 800ms ease; }
        .ed-share-secondary { opacity: 0.35; transition: opacity 800ms ease; }

        /* eSIM */
        .ed-esim-phys      { opacity: 0.75; transition: opacity 800ms ease; }
        .ed-esim-phys-conn { opacity: 0.35; }
        .ed-esim-flow      { opacity: 0.55; transition: opacity 700ms ease; }
        .ed-esim-digital   { transition: opacity 600ms ease; }

        /* Arteïa */
        .ed-arteia-ring  { opacity: 0.5;  transition: opacity 800ms ease; }
        .ed-arteia-spoke { opacity: 0.4;  transition: opacity 800ms ease; }

        /* ════════════════════════════════════════════════════════════════
           FLOW ANIMATION
           Dash pattern always visible; movement only activates on row hover.
           Using longhand to set play-state independently of the shorthand.
        ════════════════════════════════════════════════════════════════ */
        .ed-flow {
          stroke-dasharray: 2 7;
          animation-name: edFlow;
          animation-duration: 5s;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-play-state: paused;
        }
        .exd-project:hover .ed-flow {
          animation-play-state: running;
        }

        /* ════════════════════════════════════════════════════════════════
           PER-PROJECT HOVER ENHANCEMENTS
           Each project has its own visual emphasis on hover.
           Data attributes on each .exd-project allow targeting.
        ════════════════════════════════════════════════════════════════ */

        /* 01 — Proximus+: data flows through the architecture */
        [data-project="01"]:hover .ed-prox-line  { opacity: 0.82; }
        [data-project="01"]:hover .ed-prox-spine { opacity: 0.88; }

        /* 02 — eShare: channel-to-outcome route emerges */
        [data-project="02"]:hover .ed-share-entry     { opacity: 0.85; }
        [data-project="02"]:hover .ed-share-main      { opacity: 0.95; }
        [data-project="02"]:hover .ed-share-secondary { opacity: 0.55; }

        /* 03 — eSIM: digital side lifts, physical recedes */
        [data-project="03"]:hover .ed-esim-phys    { opacity: 0.45; }
        [data-project="03"]:hover .ed-esim-flow    { opacity: 0.88; }
        [data-project="03"]:hover .ed-esim-digital { opacity: 1; }

        /* 04 — Arteïa: categories connect toward the collection hub */
        [data-project="04"]:hover .ed-arteia-ring  { opacity: 0.72; }
        [data-project="04"]:hover .ed-arteia-spoke { opacity: 0.68; }

        /* ════════════════════════════════════════════════════════════════
           NODE PULSE ANIMATIONS
           Very slow, low-range — almost invisible at rest.
           ed-node-primary slightly stronger for focal nodes.
        ════════════════════════════════════════════════════════════════ */
        @keyframes edPulse {
          0%, 100% { opacity: 0.42; }
          50%      { opacity: 0.88; }
        }
        @keyframes edPulseStrong {
          0%, 100% { opacity: 0.65; }
          50%      { opacity: 1; }
        }
        @keyframes edFlow {
          from { stroke-dashoffset: 0; }
          to   { stroke-dashoffset: -20; }
        }

        .ed-node         { animation: edPulse       5s ease-in-out infinite; }
        .ed-node-primary { animation: edPulseStrong 4.5s ease-in-out infinite; }
      `}</style>

      <div className="exd">
        <DirectionENav />

        {/* experiment identifier strip */}
        <div className="exd-strip">
          <span className="exd-tag">D — Editorial artefacts</span>
          <span className="exd-desc">Large-scale strategic diagrams integrated into the row</span>
          <div style={{ marginLeft: "auto", display: "flex", gap: "1rem" }}>
            <a href="/direction-e/experiments/panels" className="exd-nav-link">A →</a>
            <a href="/direction-e/experiments/hover"  className="exd-nav-link">B →</a>
            <a href="/direction-e/experiments/cards"  className="exd-nav-link">C →</a>
            <a href="/direction-e/experiments"        className="exd-nav-link">All</a>
          </div>
        </div>

        {/* hero — unchanged from production */}
        <section style={{
          minHeight: "70vh",
          display: "flex", flexDirection: "column", justifyContent: "flex-end",
          padding: "clamp(3rem, 5vw, 4rem) clamp(1.25rem, 5vw, 5rem) clamp(3.5rem, 7vw, 5.5rem)",
        }}>
          <div style={{ maxWidth: 960 }}>
            <p style={{ fontFamily: M, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.12em", color: FNT, marginBottom: "clamp(1.75rem, 3.5vw, 2.75rem)" }}>
              {data.hero.label}
            </p>
            <h1 style={{ fontFamily: C, fontWeight: 500, fontSize: "clamp(3rem, 8.5vw, 7rem)", lineHeight: 1.04, letterSpacing: "-0.03em", color: INK, margin: 0, marginBottom: "clamp(2.5rem, 5vw, 4rem)" }}>
              {data.hero.headline}
            </h1>
            <p style={{ fontFamily: S, fontSize: "clamp(1rem, 1.4vw, 1.125rem)", color: MUT, lineHeight: 1.82, maxWidth: "44ch", margin: 0 }}>
              {data.hero.body}
            </p>
          </div>
        </section>

        {/* work list */}
        <section id="work" className="exd-section">
          <span className="exd-section-label">Selected work</span>

          {data.projects.map(p => (
            <div key={p.n} className="exd-project" data-project={p.n}>

              {/* ① number */}
              <span className="exd-pn">{p.n}</span>

              {/* ② title — mobile: above artefact; desktop: col 2 row 1 */}
              <div className="exd-title-block">
                <h2 style={{ margin: 0 }}>
                  {p.status ? (
                    <span style={{ fontFamily: C, fontWeight: 400, fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)", lineHeight: 1.2, letterSpacing: "-0.01em", color: INK, cursor: "default" }}>
                      {p.title}
                    </span>
                  ) : (
                    <a href={p.href} className="exd-title" style={{ fontFamily: C, fontWeight: 400, fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)", lineHeight: 1.2, letterSpacing: "-0.01em" }}>
                      {p.title}
                    </a>
                  )}
                </h2>
              </div>

              {/* ③ artefact — mobile: between title and description; desktop: col 3, spans rows 1–2 */}
              <div className="exd-artefact">
                {getArtefact(p.n)}
              </div>

              {/* ④ description + metadata — mobile: below artefact; desktop: col 2 row 2 */}
              <div className="exd-body">
                <p style={{ fontFamily: S, fontSize: "clamp(0.9375rem, 1.3vw, 1rem)", color: MUT, lineHeight: 1.72, margin: 0, marginBottom: "clamp(1rem, 2vw, 1.375rem)", maxWidth: "58ch" }}>
                  {p.summary}
                </p>
                <div style={{ display: "flex", gap: "0.625rem 1.25rem", flexWrap: "wrap", alignItems: "baseline" }}>
                  <span style={{ fontFamily: S, fontSize: 14, color: FNT }}>{p.company} · {p.year}</span>
                  {p.status && (
                    <span style={{ fontFamily: M, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em", color: ACC }}>
                      {p.status}
                    </span>
                  )}
                  {!p.status && (
                    <a href={p.href} className="exd-arrow">View case study →</a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </section>

        {/* ── About — identical to production, positioned after work list ── */}
        <section className="exd-section" style={{ paddingBottom: "clamp(3.5rem, 7vw, 6rem)" }}>
          <span className="exd-section-label">About</span>

          <div className="e3-about-flex">
            <div className="e3-about-circle">
              <Image
                src={data.about.image}
                alt={data.about.imageAlt}
                fill
                style={{ objectFit: "cover", objectPosition: "center center" }}
              />
            </div>

            <div style={{
              display: "flex", flexDirection: "column",
              gap: "clamp(1.25rem, 2.5vw, 1.75rem)",
            }}>
              <p style={{
                fontFamily: S, fontSize: "clamp(0.9375rem, 1.3vw, 1.0625rem)",
                color: IN2, lineHeight: 1.75, margin: 0,
                maxWidth: "52ch",
              }}>
                {data.about.teaser}
              </p>
              <a href="/direction-e/about" className="exd-arrow">About →</a>
            </div>
          </div>
        </section>

        <DirectionEFooter />
      </div>
    </>
  );
}
