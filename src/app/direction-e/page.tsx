import { getHomepage } from "@/lib/homepage";
import { fetchOceanWaves } from "@/lib/oceanWaves";
import Image from "next/image";
import { DirectionENav } from "./_components/nav";
import { DirectionEFooter } from "./_components/footer";
import { HeroSection } from "./_components/HeroSection";
import { C, M, S, GR, BD, INK, IN2, MUT, FNT, ACC } from "./_tokens";

export function generateMetadata() {
  const data = getHomepage();
  return { title: data.metaTitle };
}

export default async function DirectionE3() {
  const data = getHomepage();
  const oceanWaves = await fetchOceanWaves();

  console.log(
    "[ocean waves]",
    oceanWaves
      .map(
        (w) =>
          `${w.location}: ${w.waveHeight?.toFixed(2) ?? "–"}m / ${w.wavePeriod?.toFixed(1) ?? "–"}s → amp=${w.amp}px speed=${w.speed.toFixed(4)}`,
      )
      .join(" | "),
  );

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
          padding: clamp(3rem, 5vw, 4.5rem) clamp(1.25rem, 5vw, 5rem);
        }
        .e3-section-label {
          font-family: ${M}; font-size: 12px;
          text-transform: uppercase; letter-spacing: 0.12em; color: ${ACC};
          display: block;
          margin-bottom: clamp(2rem, 4vw, 3.5rem);
        }

        /* ── project rows ── */
        .e3-project {
          border-top: 1px solid ${BD};
          padding: clamp(2.5rem, 5vw, 4.25rem) 0;
          display: grid; grid-template-columns: 1fr; gap: 0.875rem;
        }
        .e3-project:first-of-type { border-top: none; }
        .e3-project:last-child { padding-bottom: 0; }
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

        /* ── Hero: mobile/tablet — content-sized, no forced viewport height ── */
        .e3-hero { padding-top: 4.5rem; padding-bottom: 5rem; }

        /* ── Hero: desktop — full viewport minus nav + ~80px peek ──────────────
           min-height leaves ~80px for the "SELECTED WORK" label to peek in
           (border 1px + section padding ~48px + label ~12px ≈ 61px ≤ 80px).
           padding-bottom is increased vs the previous formula to give the text
           more vertical breathing room within the canvas. */
        @media (min-width: 1024px) {
          .e3-hero {
            padding-top: clamp(3rem, 5vw, 4rem);
            min-height: calc(100vh - 130px);
            min-height: calc(100dvh - 130px);
            padding-bottom: clamp(4rem, calc(58dvh - 270px), 17rem);
          }
        }
      `}</style>

      <div className="e3">

        <DirectionENav />

        {/* ── Hero — typography led, full-width headline ─────────────────────
            maxWidth: 960 on outer div gives the headline room for a natural
            2-line wrap ("The brief is rarely / the problem.") at desktop.
            The h1 fills the container; body copy stays at 44ch for readability.
        */}
        <HeroSection
          label={data.hero.label}
          headline={data.hero.headline}
          body={data.hero.body}
          oceanData={oceanWaves.map((w) => ({ amp: w.amp, speed: w.speed }))}
        />

        {/* ── Selected Work ─────────────────────────────────────────────────── */}
        <section id="work" className="e3-section">
          <span className="e3-section-label">Selected work</span>

          {data.projects.map(p => (
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
                    {p.company}{p.status ? (
                      <> · <span style={{
                        fontFamily: M, fontSize: 11,
                        textTransform: "uppercase", letterSpacing: "0.1em", color: ACC,
                      }}>{p.status}</span></>
                    ) : (
                      ` · ${p.year}`
                    )}
                  </span>
                  <a href={p.href} className="e3-arrow">View case study →</a>
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
                src={data.about.image}
                alt={data.about.imageAlt}
                fill
                sizes="(min-width: 1024px) 220px, (min-width: 640px) 200px, 160px"
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
              <a href="/about" className="e3-arrow">About →</a>
            </div>
          </div>
        </section>

        <DirectionEFooter />

      </div>
    </>
  );
}
