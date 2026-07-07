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

function getArtefact(n: string) {
  switch (n) {
    case "01": return <ArtefactProximus />;
    case "02": return <ArtefactEshare />;
    case "03": return <ArtefactESim />;
    case "04": return <ArtefactArteia />;
    default:   return null;
  }
}

export default function ExperimentPanels() {
  const data = getHomepage();

  return (
    <>
      <style>{`
        .exa {
          position: fixed; inset: 0; z-index: 100;
          overflow-y: auto; background: ${GR};
          font-family: ${S}; color: ${INK};
          -webkit-font-smoothing: antialiased;
        }

        /* ── experiment label strip ── */
        .exa-strip {
          border-bottom: 1px solid ${BD};
          padding: 0.625rem clamp(1.25rem, 5vw, 5rem);
          display: flex; align-items: center; gap: 1.25rem;
        }
        .exa-tag { font-family: ${M}; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: ${ACC}; }
        .exa-desc { font-family: ${S}; font-size: 12px; color: ${FNT}; }
        .exa-nav-link {
          font-family: ${M}; font-size: 11px; color: ${FNT};
          text-decoration: none; letter-spacing: 0.08em; transition: color 150ms ease;
        }
        .exa-nav-link:hover { color: ${MUT}; }

        /* ── section pattern ── */
        .exa-section { border-top: 1px solid ${BD}; padding: clamp(2.5rem, 5vw, 4rem) clamp(1.25rem, 5vw, 5rem); }
        .exa-label { font-family: ${M}; font-size: 12px; text-transform: uppercase; letter-spacing: 0.12em; color: ${FNT}; display: block; margin-bottom: clamp(1.75rem, 3.5vw, 2.75rem); }

        /* ── project rows — 3-column desktop ── */
        .exa-project {
          border-top: 1px solid ${BD};
          padding: clamp(2rem, 5vw, 3.75rem) 0;
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.875rem;
        }
        .exa-pn { font-family: ${M}; font-size: 12px; color: ${FNT}; display: block; }

        @media (min-width: 640px) {
          .exa-project {
            grid-template-columns: 44px 1fr 196px;
            gap: 1.5rem;
            align-items: start;
          }
          .exa-pn { padding-top: 4px; }
        }

        /* ── visual panel ── */
        .exa-panel {
          border: 1px solid ${BD};
          background: ${GR2};
          border-radius: 4px;
          padding: 1.125rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* ── links ── */
        a.exa-title { color: ${INK}; text-decoration: none; transition: color 180ms ease; }
        a.exa-title:hover { color: ${ACC}; }
        a.exa-arrow { color: ${FNT}; text-decoration: none; font-size: 14px; font-family: ${S}; transition: color 180ms ease; }
        a.exa-arrow:hover { color: ${MUT}; }
      `}</style>

      <div className="exa">
        <DirectionENav />

        {/* experiment identifier strip */}
        <div className="exa-strip">
          <span className="exa-tag">A — Contained panels</span>
          <span className="exa-desc">Artefact always visible, right column</span>
          <div style={{ marginLeft: "auto", display: "flex", gap: "1rem" }}>
            <a href="/direction-e/experiments/hover" className="exa-nav-link">B →</a>
            <a href="/direction-e/experiments/cards" className="exa-nav-link">C →</a>
            <a href="/direction-e/experiments" className="exa-nav-link">All</a>
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
        <section id="work" className="exa-section">
          <span className="exa-label">Selected work</span>

          {data.projects.map(p => (
            <div key={p.n} className="exa-project">
              <span className="exa-pn">{p.n}</span>

              <div>
                <h2 style={{ margin: 0, marginBottom: "clamp(0.75rem, 1.5vw, 1rem)" }}>
                  {p.status ? (
                    <span style={{ fontFamily: C, fontWeight: 400, fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)", lineHeight: 1.2, letterSpacing: "-0.01em", color: INK, cursor: "default" }}>
                      {p.title}
                    </span>
                  ) : (
                    <a href={p.href} className="exa-title" style={{ fontFamily: C, fontWeight: 400, fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)", lineHeight: 1.2, letterSpacing: "-0.01em" }}>
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
                  {!p.status && <a href={p.href} className="exa-arrow">View case study →</a>}
                </div>
              </div>

              {/* visual panel — right column desktop, below text mobile */}
              <div className="exa-panel">
                {getArtefact(p.n)}
              </div>
            </div>
          ))}
        </section>

        <DirectionEFooter />
      </div>
    </>
  );
}
