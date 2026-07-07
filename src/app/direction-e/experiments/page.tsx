import { C, M, S, GR, BD, INK, MUT, FNT, ACC } from "../_tokens";
import { DirectionENav } from "../_components/nav";
import { DirectionEFooter } from "../_components/footer";

const experiments = [
  {
    id: "A",
    href: "/direction-e/experiments/panels",
    title: "Contained visual panels",
    desc: "Always-visible artefact panels, right-aligned on desktop, stacked below on mobile.",
  },
  {
    id: "B",
    href: "/direction-e/experiments/hover",
    title: "Hover-reveal visuals",
    desc: "Clean by default. Artefact reveals below the description on hover. Always visible on mobile.",
  },
  {
    id: "C",
    href: "/direction-e/experiments/cards",
    title: "Mini artefact cards",
    desc: "Framed cards with a diagram and a strategic label — right column on desktop.",
  },
  {
    id: "D",
    href: "/direction-e/experiments/editorial",
    title: "Editorial artefacts",
    desc: "Large-scale strategic diagrams — architecture maps, flow systems, ecosystem networks — integrated into each row at 38vw.",
  },
];

export default function ExperimentsIndex() {
  return (
    <>
      <style>{`
        .exi {
          position: fixed; inset: 0; z-index: 100;
          overflow-y: auto; background: ${GR};
          font-family: ${S}; color: ${INK};
          -webkit-font-smoothing: antialiased;
        }
        .exi-header {
          border-top: 1px solid ${BD};
          padding: clamp(2.5rem, 5vw, 4rem) clamp(1.25rem, 5vw, 5rem);
        }
        .exi-row {
          border-top: 1px solid ${BD};
          padding: clamp(1.75rem, 4vw, 2.75rem) clamp(1.25rem, 5vw, 5rem);
          display: grid;
          grid-template-columns: 32px 1fr auto;
          gap: 1.5rem;
          align-items: center;
          text-decoration: none;
          color: ${INK};
          transition: background 150ms ease;
        }
        .exi-row:hover { background: ${BD}; }
        .exi-row:last-child { border-bottom: 1px solid ${BD}; }
        .exi-id {
          font-family: ${M}; font-size: 11px;
          letter-spacing: 0.1em; color: ${ACC};
        }
        .exi-arrow { font-family: ${S}; font-size: 14px; color: ${FNT}; }
      `}</style>

      <div className="exi">
        <DirectionENav />

        <section className="exi-header">
          <p style={{ fontFamily: M, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.12em", color: FNT, margin: 0, marginBottom: "clamp(1rem, 2vw, 1.5rem)" }}>
            Experiments
          </p>
          <h1 style={{ fontFamily: C, fontWeight: 400, fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", lineHeight: 1.15, letterSpacing: "-0.02em", color: INK, margin: 0, marginBottom: "0.75rem" }}>
            Homepage visual experiments
          </h1>
          <p style={{ fontFamily: S, fontSize: "clamp(0.875rem, 1.2vw, 0.9375rem)", color: MUT, margin: 0, maxWidth: "52ch", lineHeight: 1.7 }}>
            Three directions for adding visual artefacts to the work list. None committed to production.
          </p>
        </section>

        <div>
          {experiments.map(exp => (
            <a key={exp.id} href={exp.href} className="exi-row">
              <span className="exi-id">{exp.id}</span>
              <div>
                <p style={{ fontFamily: C, fontWeight: 400, fontSize: "clamp(1.1rem, 2vw, 1.375rem)", lineHeight: 1.2, letterSpacing: "-0.01em", margin: 0, marginBottom: "0.375rem" }}>
                  {exp.title}
                </p>
                <p style={{ fontFamily: S, fontSize: "clamp(0.875rem, 1.1vw, 0.9375rem)", color: MUT, margin: 0, lineHeight: 1.6 }}>
                  {exp.desc}
                </p>
              </div>
              <span className="exi-arrow">→</span>
            </a>
          ))}
        </div>

        <DirectionEFooter />
      </div>
    </>
  );
}
