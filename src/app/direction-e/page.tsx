export const metadata = { title: "Thomas Rackowe Cork — Product Designer" };

import Image from "next/image";
import { DirectionENav } from "./_components/nav";
import { DirectionEFooter } from "./_components/footer";
import { C, M, S, GR, BD, INK, IN2, MUT, FNT, ACC } from "./_tokens";

const projects = [
  {
    n: "01",
    title: "Rebuilding the Foundations of Proximus+",
    summary:
      "Redesigning the foundations of telecom product and service management. The work focuses on simplifying complexity, improving operational clarity, and building foundations that can evolve alongside future services, technologies, and customer expectations.",
    company: "Proximus",
    year: "2024–present",
    status: "In progress",
    href: "/direction-e/work/proximus-plus",
  },
  {
    n: "02",
    title: "Recovering Declining eShare",
    summary:
      "Proximus was experiencing a sustained decline in its digital sales share, alongside an increase in support calls. We redesigned the end-to-end ordering experience — simplifying journeys, addressing structural points of friction, and realigning the product experience with user behaviour and business strategy.",
    company: "Proximus",
    year: "2022–23",
    href: "/direction-e/work/eshare",
  },
  {
    n: "03",
    title: "Scaling Onboarding for the eSIM Era",
    summary:
      "eSIM exposed a fundamental mismatch between technology and operations at Proximus. We transformed mobile onboarding from a physical, postal process into a fully digital activation system — reducing activation time from days to minutes and enabling self-service at scale.",
    company: "Proximus",
    year: "2023",
    href: "/direction-e/work/esim",
  },
  {
    n: "04",
    title: "Redefining Product Strategy at Arteïa",
    summary:
      "Arteïa's value proposition was tied to a trend that was no longer sustainable. User research revealed that the challenge was not to improve the experience, but to redefine the product itself — repositioning around private collectors as the core audience.",
    company: "Arteïa",
    year: "2022",
    href: "/direction-e/work/arteia",
  },
];

export default function DirectionE3() {
  return (
    <>
      <style>{`
        .e3 {
          position: fixed; inset: 0; z-index: 100;
          overflow-y: auto; background: ${GR};
          font-family: ${S}; color: ${INK};
          -webkit-font-smoothing: antialiased;
        }

        /* ── consistent section pattern ── */
        .e3-section {
          border-top: 1px solid ${BD};
          padding: clamp(2.5rem, 5vw, 4rem) clamp(1.25rem, 5vw, 5rem);
        }
        .e3-section-label {
          font-family: ${M}; font-size: 12px;
          text-transform: uppercase; letter-spacing: 0.12em; color: ${FNT};
          display: block;
          margin-bottom: clamp(1.75rem, 3.5vw, 2.75rem);
        }

        /* ── project rows ── */
        .e3-project {
          border-top: 1px solid ${BD};
          padding: clamp(2rem, 5vw, 3.75rem) 0;
          display: grid; grid-template-columns: 1fr; gap: 0.875rem;
        }
        .e3-pn { font-family: ${M}; font-size: 12px; color: ${FNT}; display: block; }
        @media (min-width: 640px) {
          .e3-project { grid-template-columns: 44px 1fr; gap: 1.5rem; align-items: start; }
          .e3-pn { padding-top: 4px; }
        }

        /* ── about teaser ── */
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
        @media (min-width: 640px) { .e3-about-circle { width: 200px; height: 200px; } }
        @media (min-width: 1024px) { .e3-about-circle { width: 220px; height: 220px; } }

        /* ── links ── */
        a.e3-project-title { color: ${INK}; text-decoration: none; transition: color 180ms ease; }
        a.e3-project-title:hover { color: ${ACC}; }
        a.e3-arrow {
          color: ${FNT}; text-decoration: none;
          font-size: 14px; font-family: ${S}; transition: color 180ms ease;
        }
        a.e3-arrow:hover { color: ${MUT}; }
        a.e3-email { color: ${MUT}; text-decoration: none; }
        a.e3-email:hover { color: ${IN2}; }
      `}</style>

      <div className="e3">

        <DirectionENav />

        {/* ── Hero — typography led, full-width headline ─────────────────────
            maxWidth: 960 on outer div gives the headline room for a natural
            2-line wrap ("The brief is rarely / the problem.") at desktop.
            The h1 fills the container; body copy stays at 44ch for readability.
        */}
        <section style={{
          minHeight: "70vh",
          display: "flex", flexDirection: "column", justifyContent: "flex-end",
          padding: "clamp(3rem, 5vw, 4rem) clamp(1.25rem, 5vw, 5rem) clamp(3.5rem, 7vw, 5.5rem)",
        }}>
          <div style={{ maxWidth: 960 }}>
            <p style={{
              fontFamily: M, fontSize: 12,
              textTransform: "uppercase", letterSpacing: "0.12em", color: FNT,
              marginBottom: "clamp(1.75rem, 3.5vw, 2.75rem)",
            }}>
              Product Designer
            </p>

            <h1 style={{
              fontFamily: C, fontWeight: 500,
              fontSize: "clamp(3rem, 8.5vw, 7rem)",
              lineHeight: 1.04, letterSpacing: "-0.03em",
              color: INK, margin: 0,
              marginBottom: "clamp(2.5rem, 5vw, 4rem)",
            }}>
              The brief is rarely the problem.
            </h1>

            <p style={{
              fontFamily: S, fontSize: "clamp(1rem, 1.4vw, 1.125rem)",
              color: MUT, lineHeight: 1.82,
              maxWidth: "44ch", margin: 0,
            }}>
              I design products, services, and systems from the point where the real challenge
              becomes clear — questioning assumptions, rebuilding operational models, creating
              foundations that scale.
            </p>
          </div>
        </section>

        {/* ── Selected Work ─────────────────────────────────────────────────── */}
        <section id="work" className="e3-section">
          <span className="e3-section-label">Selected work</span>

          {projects.map(p => (
            <div key={p.n} className="e3-project">
              <span className="e3-pn">{p.n}</span>

              <div>
                <h2 style={{ margin: 0, marginBottom: "clamp(0.75rem, 1.5vw, 1rem)" }}>
                  <a href={p.href} className="e3-project-title" style={{
                    fontFamily: C, fontWeight: 400,
                    fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
                    lineHeight: 1.2, letterSpacing: "-0.01em",
                  }}>
                    {p.title}
                  </a>
                </h2>

                <p style={{
                  fontFamily: S, fontSize: "clamp(0.9375rem, 1.3vw, 1rem)",
                  color: MUT, lineHeight: 1.72,
                  margin: 0, marginBottom: "clamp(1rem, 2vw, 1.375rem)",
                  maxWidth: "58ch",
                }}>
                  {p.summary}
                </p>

                <div style={{
                  display: "flex", gap: "0.625rem 1.25rem",
                  flexWrap: "wrap", alignItems: "baseline",
                }}>
                  <span style={{ fontFamily: S, fontSize: 14, color: FNT }}>
                    {p.company} · {p.year}
                  </span>
                  {p.status && (
                    <span style={{
                      fontFamily: M, fontSize: 11,
                      textTransform: "uppercase", letterSpacing: "0.1em", color: ACC,
                    }}>
                      {p.status}
                    </span>
                  )}
                  {!p.status && (
                    <a href={p.href} className="e3-arrow">View case study →</a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* ── About ──────────────────────────────────────────────────────────
            The circle remains here as the only portrait element on the homepage.
            Teaser copy foregrounds the distinctive background (art world,
            anthropology) rather than the generic role description.
        */}
        <section className="e3-section" style={{ paddingBottom: "clamp(3.5rem, 7vw, 6rem)" }}>
          <span className="e3-section-label">About</span>

          <div className="e3-about-flex">
            <div className="e3-about-circle">
              <Image
                src="/Mirror ball copy.png"
                alt="Mirror ball"
                fill
                style={{ objectFit: "cover" }}
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
                My path to product design ran through the contemporary art world and social
                anthropology — both trained me to look beneath surface behaviour and understand
                the systems, motivations, and decisions that drive outcomes. That lens is what
                I bring to product work today.
              </p>
              <a href="/direction-e/about" className="e3-arrow">About →</a>
            </div>
          </div>
        </section>

        <DirectionEFooter />

        {/* ── Version label ─────────────────────────────────────────────────── */}
        <div style={{
          position: "fixed", bottom: 16, right: 16, zIndex: 200,
          background: ACC, color: GR,
          fontFamily: M, fontSize: 10,
          textTransform: "uppercase", letterSpacing: "0.12em",
          padding: "8px 14px",
        }}>
          E.3
        </div>

      </div>
    </>
  );
}
