export const metadata = {
  title: "Redefining Product Strategy at Arteïa — Thomas Rackowe Cork",
  description:
    "Research revealed the challenge was not to improve the experience, but to redefine the product — repositioning Arteïa around private collectors as the primary audience.",
};

import { DirectionENav } from "../../_components/nav";
import { DirectionEFooter } from "../../_components/footer";
import { C, M, S, GR, BD, INK, IN2, MUT, FNT, ACC } from "../../_tokens";

export default function ArteiaCaseStudy() {
  return (
    <>
      <style>{`
        .acs {
          position: fixed; inset: 0; z-index: 100;
          overflow-y: auto; background: ${GR};
          font-family: ${S}; color: ${INK};
          -webkit-font-smoothing: antialiased;
        }
        .acs-section {
          padding: clamp(2.75rem, 6vw, 5.5rem) clamp(1.25rem, 5vw, 5rem);
          border-top: 1px solid ${BD};
        }
        .acs-ann { display: grid; grid-template-columns: 1fr; gap: 1rem; }
        .acs-ann-lbl {
          font-family: ${M}; font-size: 12px;
          text-transform: uppercase; letter-spacing: 0.12em; color: ${ACC};
        }
        @media (min-width: 640px) {
          .acs-ann {
            grid-template-columns: clamp(120px, 15%, 180px) 1fr;
            gap: clamp(2rem, 4vw, 4rem);
          }
        }
        a.acs-arrow {
          color: ${FNT}; text-decoration: none;
          font-size: 14px; font-family: ${S};
          transition: color 180ms ease;
        }
        a.acs-arrow:hover { color: ${INK}; }
        a.acs-email { color: ${MUT}; text-decoration: none; }
        a.acs-email:hover { color: ${IN2}; }
      `}</style>

      <div className="acs">
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
            Redefining Product Strategy at Arte&#239;a
          </h1>

          <p style={{
            fontFamily: S, fontSize: "clamp(1rem, 1.4vw, 1.0625rem)",
            color: IN2, lineHeight: 1.7, margin: 0, maxWidth: "56ch",
            marginBottom: "clamp(1.75rem, 3.5vw, 2.75rem)",
          }}>
            Arte&#239;a&apos;s value proposition was tied to a trend that was no longer sustainable.
            Research revealed the challenge was not to improve the experience, but to redefine
            the product — repositioning around private collectors as the primary audience.
          </p>

          <div style={{
            borderTop: `1px solid ${BD}`, paddingTop: 16,
            display: "flex", flexWrap: "wrap", gap: "0.5rem 2.5rem",
          }}>
            {[
              ["Company", "Arteïa"],
              ["Role",    "Senior Product Designer"],
              ["Year",    "2022"],
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
            src="/assets/arteia-hero.png"
            alt="Arteïa product strategy"
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
        <section className="acs-section" style={{ borderTop: "none" }}>
          <div className="acs-ann">
            <div><span className="acs-ann-lbl">Status</span></div>
            <div style={{ maxWidth: "52ch" }}>
              <p style={{
                fontFamily: S, fontSize: "clamp(0.9375rem, 1.3vw, 1rem)",
                color: MUT, lineHeight: 1.75, margin: 0, marginBottom: "1.125rem",
              }}>
                This case study is in preparation. Full documentation of the research, strategic
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

        {/* ── Back to work ─────────────────────────────────────────────────── */}
        <div style={{
          borderTop: `1px solid ${BD}`,
          padding: "clamp(1.5rem, 3vw, 2.25rem) clamp(1.25rem, 5vw, 5rem)",
        }}>
          <a href="/direction-e#work" className="acs-arrow" style={{
            fontFamily: C, fontWeight: 400,
            fontSize: "clamp(1.5rem, 2.75vw, 2.25rem)",
            lineHeight: 1.15, letterSpacing: "-0.015em",
            display: "inline-block",
          }}>
            ← Back to work
          </a>
        </div>

        <DirectionEFooter />
      </div>
    </>
  );
}
