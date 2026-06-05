export const metadata = {
  title: "Scaling Onboarding for the eSIM Era — Thomas Rackowe Cork",
  description:
    "How we transformed Proximus mobile onboarding from a physical, postal process into a fully digital activation system — reducing activation time from days to minutes.",
};

import { DirectionENav } from "../../_components/nav";
import { DirectionEFooter } from "../../_components/footer";
import { C, M, S, GR, BD, INK, IN2, MUT, FNT, ACC } from "../../_tokens";

export default function ESIMCaseStudy() {
  return (
    <>
      <style>{`
        .escs {
          position: fixed; inset: 0; z-index: 100;
          overflow-y: auto; background: ${GR};
          font-family: ${S}; color: ${INK};
          -webkit-font-smoothing: antialiased;
        }
        .escs-section {
          padding: clamp(2.75rem, 6vw, 5.5rem) clamp(1.25rem, 5vw, 5rem);
          border-top: 1px solid ${BD};
        }
        .escs-ann { display: grid; grid-template-columns: 1fr; gap: 1rem; }
        .escs-ann-lbl {
          font-family: ${M}; font-size: 12px;
          text-transform: uppercase; letter-spacing: 0.12em; color: ${ACC};
        }
        @media (min-width: 640px) {
          .escs-ann {
            grid-template-columns: clamp(120px, 15%, 180px) 1fr;
            gap: clamp(2rem, 4vw, 4rem);
          }
        }
        a.escs-arrow {
          color: ${FNT}; text-decoration: none;
          font-size: 14px; font-family: ${S};
          transition: color 180ms ease;
        }
        a.escs-arrow:hover { color: ${INK}; }
        a.escs-email { color: ${MUT}; text-decoration: none; }
        a.escs-email:hover { color: ${IN2}; }
        a.escs-next-title {
          color: ${INK}; text-decoration: none; display: block;
          transition: color 180ms ease;
        }
        a.escs-next-title:hover { color: ${ACC}; }
      `}</style>

      <div className="escs">
        <DirectionENav />

        {/* ── CS: Header ───────────────────────────────────────────────────── */}
        <section style={{
          padding: "clamp(3rem, 7vw, 6rem) clamp(1.25rem, 5vw, 5rem) clamp(1rem, 2vw, 1.5rem)",
        }}>
          <h1 style={{
            fontFamily: C, fontWeight: 500,
            fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)",
            lineHeight: 1.05, letterSpacing: "-0.025em",
            color: INK, margin: 0,
            marginBottom: "clamp(1.125rem, 2.5vw, 1.75rem)",
          }}>
            Scaling Onboarding for the eSIM Era
          </h1>

          <p style={{
            fontFamily: S, fontSize: "clamp(1rem, 1.4vw, 1.0625rem)",
            color: IN2, lineHeight: 1.7, margin: 0, maxWidth: "56ch",
            marginBottom: "clamp(1.75rem, 3.5vw, 2.75rem)",
          }}>
            eSIM exposed a fundamental mismatch between technology and operations at Proximus.
            We transformed mobile onboarding from a physical, postal process into a fully digital
            activation system — reducing activation time from days to minutes and enabling
            self-service at scale.
          </p>

          <div style={{
            borderTop: `1px solid ${BD}`, paddingTop: 16,
            display: "flex", flexWrap: "wrap", gap: "0.5rem 2.5rem",
          }}>
            {[
              ["Company", "Proximus"],
              ["Role",    "Senior UX/UI & Service Designer"],
              ["Year",    "2023"],
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
            src="/assets/esim-hero.png"
            alt="eSIM digital onboarding experience"
            style={{
              display: "block", width: "100%",
              aspectRatio: "16 / 9",
              objectFit: "cover", objectPosition: "center",
              filter: "saturate(0.9) brightness(0.95)",
              border: "none", outline: "none",
            }}
          />
        </div>

        {/* ── Status ───────────────────────────────────────────────────────── */}
        <section className="escs-section" style={{ borderTop: "none" }}>
          <div className="escs-ann">
            <div><span className="escs-ann-lbl">Status</span></div>
            <div style={{ maxWidth: "52ch" }}>
              <p style={{
                fontFamily: S, fontSize: "clamp(0.9375rem, 1.3vw, 1rem)",
                color: MUT, lineHeight: 1.75, margin: 0, marginBottom: "1.125rem",
              }}>
                This case study is in preparation. Full documentation of the research, design
                decisions, and outcomes will be published shortly.
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
          <a href="/direction-e/work/arteia" className="escs-next-title" style={{
            fontFamily: C, fontWeight: 400,
            fontSize: "clamp(1.5rem, 2.75vw, 2.25rem)",
            lineHeight: 1.15, letterSpacing: "-0.015em",
          }}>
            Redefining Product Strategy at Arte&#239;a →
          </a>
          <span style={{
            fontFamily: S, fontSize: 13, color: FNT,
            display: "block", marginTop: "0.375rem",
          }}>
            Arteïa · 2022
          </span>
        </div>

        <DirectionEFooter />
      </div>
    </>
  );
}
