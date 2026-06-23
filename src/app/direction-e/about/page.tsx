import { getAbout } from "@/lib/about";
import { DirectionENav } from "../_components/nav";
import { DirectionEFooter } from "../_components/footer";
import { C, M, S, GR, BD, INK, MUT, FNT } from "../_tokens";

export function generateMetadata() {
  const data = getAbout();
  return { title: data.metaTitle, description: data.metaDescription };
}

function splitParagraphs(text: string) {
  return text.trim().split(/\n\n+/).map(s => s.trim()).filter(Boolean);
}

export default function AboutPage() {
  const data = getAbout();
  const introParagraphs = splitParagraphs(data.introduction);
  const bioParagraphs = splitParagraphs(data.biography);

  const paraStyle = {
    fontFamily: S,
    fontSize: "clamp(0.9375rem, 1.3vw, 1rem)",
    color: MUT,
    lineHeight: 1.8,
    margin: 0,
  } as const;

  return (
    <>
      <style>{`
        .e3ab {
          position: fixed; inset: 0; z-index: 100;
          overflow-y: auto; background: ${GR};
          font-family: ${S}; color: ${INK};
          -webkit-font-smoothing: antialiased;
        }

        .e3ab-label {
          display: block;
          font-family: ${M}; font-size: 12px;
          text-transform: uppercase; letter-spacing: 0.12em; color: ${FNT};
          margin-bottom: clamp(1.75rem, 3.5vw, 2.75rem);
        }

        /* ── Portrait section ──────────────────────────────────────────────
           Mobile: no horizontal padding — image is full viewport width.
           Desktop: site grid padding restores — image left edge aligns with nav.
        */
        .e3ab-section-body {
          border-top: 1px solid ${BD};
          padding: clamp(3rem, 6vw, 5.5rem) clamp(1.25rem, 5vw, 5rem);
        }

        /* ── Asymmetric editorial grid ──────────────────────────────────────
           Image ~38vw left, 64px gap, text 1fr right. Top-aligned.
        */
        .e3ab-grid {
          display: grid;
          grid-template-columns: 1fr;
        }
        @media (min-width: 900px) {
          .e3ab-grid {
            grid-template-columns: 38vw 1fr;
            align-items: start;
            column-gap: 4rem;
          }
        }

        /* ── Portrait ──────────────────────────────────────────────────────
           No border, no shadow. Mobile: full viewport width.
           9:10 ratio crops tighter than 4:5 — keeps head/torso, loses ground.
        */
        .e3ab-portrait {
          display: block;
          width: 100%;
          aspect-ratio: 9 / 10;
          object-fit: cover;
          object-position: center top;
        }

        /* ── Right column text ─────────────────────────────────────────────
           Mobile: standard page padding above and on both sides.
           Desktop: no padding — section and grid gap handle spacing.
        */
        .e3ab-text {
          padding-top: clamp(2.5rem, 5vw, 3.5rem);
        }
        @media (min-width: 900px) {
          .e3ab-text {
            padding-top: 0;
          }
        }
      `}</style>

      <div className="e3ab">
        <DirectionENav />

        {/* ── Opening statement ─────────────────────────────────────────────
            Full-width. Sets the worldview before the person appears.
        */}
        <section style={{
          padding: "clamp(3rem, 7vw, 6rem) clamp(1.25rem, 5vw, 5rem) clamp(2.5rem, 5vw, 4rem)",
        }}>
          <span className="e3ab-label">About</span>
          <h1 style={{
            fontFamily: C, fontWeight: 400,
            fontSize: "clamp(2rem, 4.5vw, 3.75rem)",
            lineHeight: 1.1, letterSpacing: "-0.02em",
            color: INK, margin: 0,
          }}>
            {data.headline}
          </h1>
        </section>

        {/* ── Portrait + bio: asymmetric two-column grid ────────────────────
            Mobile: image full-bleed, text below with standard padding.
            Desktop: image left edge aligns with site nav via section padding.
        */}
        <section className="e3ab-section-body">
          <div className="e3ab-grid">

            {/* Left column: portrait */}
            <div>
              {data.portraitImage ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={data.portraitImage}
                  alt={data.portraitAlt}
                  className="e3ab-portrait"
                />
              ) : (
                <div className="e3ab-portrait" style={{ background: "#1E1C19" }} />
              )}
            </div>

            {/* Right column: introduction flows into biography */}
            <div className="e3ab-text">
              <div style={{ maxWidth: 560 }}>

                <div style={{ marginBottom: "1rem" }}>
                  {introParagraphs.map((chunk, i) => (
                    <p key={i} style={{
                      ...paraStyle,
                      ...(i < introParagraphs.length - 1 ? { marginBottom: "1rem" } : {}),
                    }}>
                      {chunk}
                    </p>
                  ))}
                </div>

                <div>
                  {bioParagraphs.map((chunk, i) => (
                    <p key={i} style={{
                      ...paraStyle,
                      ...(i < bioParagraphs.length - 1 ? { marginBottom: "1rem" } : {}),
                    }}>
                      {chunk}
                    </p>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </section>

        <DirectionEFooter />
      </div>
    </>
  );
}
