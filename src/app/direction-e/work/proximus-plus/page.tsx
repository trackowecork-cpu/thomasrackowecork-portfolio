export const metadata = {
  title: "Rebuilding the Foundations of Proximus' Mobile App — Thomas Rackowe Cork",
  description:
    "How we are redefining product and service management for the future of Proximus+.",
};

import { DirectionENav } from "../../_components/nav";
import { DirectionEFooter } from "../../_components/footer";
import { C, M, S, GR, BD, INK, IN2, MUT, FNT, ACC } from "../../_tokens";

export default function ProximusPlusCaseStudy() {
  return (
    <>
      <style>{`
        .pcs {
          position: fixed; inset: 0; z-index: 100;
          overflow-y: auto; background: ${GR};
          font-family: ${S}; color: ${INK};
          -webkit-font-smoothing: antialiased;
        }
        .pcs-section {
          padding: clamp(2.75rem, 6vw, 5.5rem) clamp(1.25rem, 5vw, 5rem);
          border-top: 1px solid ${BD};
        }
        .pcs-ann { display: grid; grid-template-columns: 1fr; gap: 1rem; }
        .pcs-ann-lbl {
          font-family: ${M}; font-size: 12px;
          text-transform: uppercase; letter-spacing: 0.12em; color: ${ACC};
        }
        @media (min-width: 640px) {
          .pcs-ann {
            grid-template-columns: clamp(120px, 15%, 180px) 1fr;
            gap: clamp(2rem, 4vw, 4rem);
          }
        }
        a.pcs-arrow {
          color: ${FNT}; text-decoration: none;
          font-size: 14px; font-family: ${S};
          transition: color 180ms ease;
        }
        a.pcs-arrow:hover { color: ${INK}; }
        a.pcs-email { color: ${MUT}; text-decoration: none; }
        a.pcs-email:hover { color: ${IN2}; }
        a.pcs-next-title {
          color: ${INK}; text-decoration: none; display: block;
          transition: color 180ms ease;
        }
        a.pcs-next-title:hover { color: ${ACC}; }
      `}</style>

      <div className="pcs">
        <DirectionENav />

        {/* ── CS: Header ───────────────────────────────────────────────────── */}
        <section style={{
          padding: "clamp(3rem, 7vw, 6rem) clamp(1.25rem, 5vw, 5rem) clamp(1rem, 2vw, 1.5rem)",
        }}>
          <div style={{
            fontFamily: M, fontSize: 12,
            textTransform: "uppercase", letterSpacing: "0.1em", color: ACC,
            marginBottom: "clamp(1rem, 2vw, 1.5rem)",
            display: "inline-block",
          }}>
            In progress
          </div>
          <h1 style={{
            fontFamily: C, fontWeight: 500,
            fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)",
            lineHeight: 1.05, letterSpacing: "-0.025em",
            color: INK, margin: 0,
            marginBottom: "clamp(1.125rem, 2.5vw, 1.75rem)",
          }}>
            Rebuilding the Foundations of Proximus&apos; Mobile App
          </h1>

          <p style={{
            fontFamily: S, fontSize: "clamp(1rem, 1.4vw, 1.0625rem)",
            color: IN2, lineHeight: 1.7, margin: 0, maxWidth: "56ch",
            marginBottom: "clamp(1.75rem, 3.5vw, 2.75rem)",
          }}>
            How we are redefining product and service management for the future of Proximus+.
          </p>

          <div style={{
            borderTop: `1px solid ${BD}`, paddingTop: 16,
            display: "flex", flexWrap: "wrap", gap: "0.5rem 2.5rem",
          }}>
            {[
              ["Company", "Proximus"],
              ["Role",    "Senior UX/UI & Service Designer"],
              ["Year",    "2024–present"],
            ].map(([k, v]) => (
              <div key={k} style={{ display: "flex", gap: "0.5rem", alignItems: "baseline" }}>
                <span style={{
                  fontFamily: M, fontSize: 12,
                  textTransform: "uppercase", letterSpacing: "0.1em", color: FNT,
                }}>
                  {k}
                </span>
                <span style={{ fontFamily: S, fontSize: 14, color: MUT }}>{v}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Hero image ────────────────────────────────────────────────────── */}
        <div style={{
          padding: "clamp(0.5rem, 1vw, 1rem) clamp(1.25rem, 5vw, 5rem) clamp(2rem, 4vw, 3rem)",
        }}>
          <img
            src="/assets/proximus-hero.png"
            alt="Proximus+ product management platform"
            style={{
              display: "block", width: "100%",
              aspectRatio: "16 / 9",
              objectFit: "cover", objectPosition: "center",
              filter: "saturate(0.9) brightness(0.95)",
              border: "none", outline: "none",
            }}
          />
        </div>

        {/* ── CS: Overview ─────────────────────────────────────────────────── */}
        <section className="pcs-section" style={{ borderTop: "none", paddingTop: "clamp(3rem, 7vw, 6rem)" }}>
          <div className="pcs-ann">
            <div><span className="pcs-ann-lbl">Overview</span></div>
            <div style={{ maxWidth: "62ch" }}>
              <p style={{
                fontFamily: S, fontSize: "clamp(0.9375rem, 1.3vw, 1rem)",
                color: MUT, lineHeight: 1.75, margin: 0, marginBottom: "1.125rem",
              }}>
                I&apos;m currently contributing to the transformation of Proximus+, helping
                redefine how product management, support, and self-service operate within a more
                scalable ecosystem.
              </p>
              <p style={{
                fontFamily: S, fontSize: "clamp(0.9375rem, 1.3vw, 1rem)",
                color: MUT, lineHeight: 1.75, margin: 0,
              }}>
                The work focuses on simplifying complexity, improving operational clarity, and
                building foundations that can evolve alongside future services, technologies,
                and customer expectations.
              </p>
            </div>
          </div>
        </section>

        {/* ── Status ───────────────────────────────────────────────────────── */}
        <section className="pcs-section">
          <div className="pcs-ann">
            <div><span className="pcs-ann-lbl">Status</span></div>
            <div style={{ maxWidth: "52ch" }}>
              <p style={{
                fontFamily: S, fontSize: "clamp(0.9375rem, 1.3vw, 1rem)",
                color: MUT, lineHeight: 1.75, margin: 0, marginBottom: "1.125rem",
              }}>
                This project is currently in progress. The work is ongoing — a full case study
                documenting the strategic decisions, design challenges, and outcomes will be
                published as the project develops.
              </p>
              <p style={{
                fontFamily: S, fontSize: "clamp(0.9375rem, 1.3vw, 1rem)",
                color: FNT, lineHeight: 1.75, margin: 0,
              }}>
                In the meantime, feel free to{" "}
                <a
                  href="mailto:hello@thomasrackowecork.com"
                  style={{ color: MUT, textDecoration: "none", borderBottom: `1px solid ${BD}` }}
                >
                  get in touch
                </a>
                {" "}if you&apos;d like to discuss the work directly.
              </p>
            </div>
          </div>
        </section>

        {/* ── Next project ─────────────────────────────────────────────────── */}
        <div style={{
          borderTop: `1px solid ${BD}`,
          padding: "clamp(1.5rem, 3vw, 2.25rem) clamp(1.25rem, 5vw, 5rem)",
        }}>
          <p style={{
            fontFamily: M, fontSize: 11,
            textTransform: "uppercase", letterSpacing: "0.12em", color: FNT,
            margin: 0, marginBottom: "clamp(0.5rem, 1vw, 0.75rem)",
          }}>
            Next project
          </p>
          <a href="/direction-e/work/eshare" className="pcs-next-title" style={{
            fontFamily: C, fontWeight: 400,
            fontSize: "clamp(1.5rem, 2.75vw, 2.25rem)",
            lineHeight: 1.15, letterSpacing: "-0.015em",
          }}>
            Recovering Declining eShare →
          </a>
          <span style={{
            fontFamily: S, fontSize: 13, color: FNT,
            display: "block", marginTop: "0.375rem",
          }}>
            Proximus · 2022–23
          </span>
        </div>

        <DirectionEFooter />
      </div>
    </>
  );
}
