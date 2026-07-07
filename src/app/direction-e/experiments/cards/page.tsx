import type { ReactNode } from "react";
import { getHomepage } from "@/lib/homepage";
import { DirectionENav } from "../../_components/nav";
import { DirectionEFooter } from "../../_components/footer";
import { C, M, S, GR, GR2, BD, INK, MUT, FNT, ACC } from "../../_tokens";
import {
  ArtefactProximus,
  ArtefactEshare,
  ArtefactESim,
  ArtefactArteia,
} from "../_artefacts";

// Card metadata — each project gets a strategic diagram label
const cardMeta: Record<string, { label: string; artefact: ReactNode }> = {
  "01": { label: "Product architecture", artefact: <ArtefactProximus /> },
  "02": { label: "Conversion funnel",    artefact: <ArtefactEshare /> },
  "03": { label: "Activation flow",      artefact: <ArtefactESim /> },
  "04": { label: "Collection ecosystem", artefact: <ArtefactArteia /> },
};

export default function ExperimentCards() {
  const data = getHomepage();

  return (
    <>
      <style>{`
        .exc {
          position: fixed; inset: 0; z-index: 100;
          overflow-y: auto; background: ${GR};
          font-family: ${S}; color: ${INK};
          -webkit-font-smoothing: antialiased;
        }

        /* ── experiment strip ── */
        .exc-strip {
          border-bottom: 1px solid ${BD};
          padding: 0.625rem clamp(1.25rem, 5vw, 5rem);
          display: flex; align-items: center; gap: 1.25rem;
        }
        .exc-tag { font-family: ${M}; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: ${ACC}; }
        .exc-desc { font-family: ${S}; font-size: 12px; color: ${FNT}; }
        .exc-nav-link {
          font-family: ${M}; font-size: 11px; color: ${FNT};
          text-decoration: none; letter-spacing: 0.08em; transition: color 150ms ease;
        }
        .exc-nav-link:hover { color: ${MUT}; }

        /* ── section pattern ── */
        .exc-section { border-top: 1px solid ${BD}; padding: clamp(2.5rem, 5vw, 4rem) clamp(1.25rem, 5vw, 5rem); }
        .exc-section-label { font-family: ${M}; font-size: 12px; text-transform: uppercase; letter-spacing: 0.12em; color: ${FNT}; display: block; margin-bottom: clamp(1.75rem, 3.5vw, 2.75rem); }

        /* ── project rows — 3-column on desktop ── */
        .exc-project {
          border-top: 1px solid ${BD};
          padding: clamp(2rem, 5vw, 3.75rem) 0;
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.875rem;
        }
        .exc-pn { font-family: ${M}; font-size: 12px; color: ${FNT}; display: block; }

        @media (min-width: 640px) {
          .exc-project {
            grid-template-columns: 44px 1fr 196px;
            gap: 1.5rem;
            align-items: start;
          }
          .exc-pn { padding-top: 4px; }
        }

        /* ── artefact card ──
           More structured than Exp A: explicit border-top in accent,
           a labelled footer, subtle inner padding rhythm.
        ── */
        .exc-card {
          border: 1px solid ${BD};
          border-top: 2px solid #2A2520;
          background: ${GR2};
          border-radius: 4px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .exc-card-diagram {
          padding: 1.25rem 1.125rem 1rem;
          flex: 1;
        }
        .exc-card-footer {
          border-top: 1px solid ${BD};
          padding: 0.5rem 1.125rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .exc-card-label {
          font-family: ${M};
          font-size: 8.5px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: ${FNT};
        }
        .exc-card-dot {
          width: 4px; height: 4px;
          border-radius: 50%;
          background: ${ACC};
          opacity: 0.5;
        }

        /* ── links ── */
        a.exc-title { color: ${INK}; text-decoration: none; transition: color 180ms ease; }
        a.exc-title:hover { color: ${ACC}; }
        a.exc-arrow { color: ${FNT}; text-decoration: none; font-size: 14px; font-family: ${S}; transition: color 180ms ease; }
        a.exc-arrow:hover { color: ${MUT}; }
      `}</style>

      <div className="exc">
        <DirectionENav />

        {/* experiment identifier strip */}
        <div className="exc-strip">
          <span className="exc-tag">C — Artefact cards</span>
          <span className="exc-desc">Framed diagrams with strategic labels</span>
          <div style={{ marginLeft: "auto", display: "flex", gap: "1rem" }}>
            <a href="/direction-e/experiments/panels" className="exc-nav-link">A →</a>
            <a href="/direction-e/experiments/hover" className="exc-nav-link">B →</a>
            <a href="/direction-e/experiments" className="exc-nav-link">All</a>
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
        <section id="work" className="exc-section">
          <span className="exc-section-label">Selected work</span>

          {data.projects.map(p => {
            const meta = cardMeta[p.n];
            return (
              <div key={p.n} className="exc-project">
                <span className="exc-pn">{p.n}</span>

                <div>
                  <h2 style={{ margin: 0, marginBottom: "clamp(0.75rem, 1.5vw, 1rem)" }}>
                    {p.status ? (
                      <span style={{ fontFamily: C, fontWeight: 400, fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)", lineHeight: 1.2, letterSpacing: "-0.01em", color: INK, cursor: "default" }}>
                        {p.title}
                      </span>
                    ) : (
                      <a href={p.href} className="exc-title" style={{ fontFamily: C, fontWeight: 400, fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)", lineHeight: 1.2, letterSpacing: "-0.01em" }}>
                        {p.title}
                      </a>
                    )}
                  </h2>
                  <p style={{ fontFamily: S, fontSize: "clamp(0.9375rem, 1.3vw, 1rem)", color: MUT, lineHeight: 1.72, margin: 0, marginBottom: "clamp(1rem, 2vw, 1.375rem)", maxWidth: "58ch" }}>
                    {p.summary}
                  </p>
                  <div style={{ display: "flex", gap: "0.625rem 1.25rem", flexWrap: "wrap", alignItems: "baseline" }}>
                    <span style={{ fontFamily: S, fontSize: 14, color: FNT }}>{p.company} · {p.year}</span>
                    {p.status && <span style={{ fontFamily: M, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em", color: ACC }}>{p.status}</span>}
                    {!p.status && <a href={p.href} className="exc-arrow">View case study →</a>}
                  </div>
                </div>

                {/* artefact card — right column desktop, below text mobile */}
                {meta && (
                  <div className="exc-card">
                    <div className="exc-card-diagram">
                      {meta.artefact}
                    </div>
                    <div className="exc-card-footer">
                      <span className="exc-card-label">{meta.label}</span>
                      <span className="exc-card-dot" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </section>

        <DirectionEFooter />
      </div>
    </>
  );
}
