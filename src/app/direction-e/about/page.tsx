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

        /* ── Single continuous grid ─────────────────────────────────────────
           Used once, after the opening statement, running to the footer.
           Portrait anchors the left column. All text flows in the right column.
           The grid never resets — introduction and biography are one composition.
        */
        .e3ab-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(2rem, 4vw, 3rem);
        }
        @media (min-width: 640px) {
          .e3ab-grid {
            grid-template-columns: clamp(200px, 26%, 300px) 1fr;
            gap: clamp(2.5rem, 4vw, 4rem);
            align-items: start;
          }
        }

        /* ── Portrait ──────────────────────────────────────────────────────
           Rectangular, editorial. Fills the full left column on desktop.
           4:5 ratio gives it vertical presence without being overpowering.
           Replace the <div> with an <img> once the photo is available:

           <img
             src="/assets/thomas.jpg"
             alt="Thomas Rackowe Cork"
             className="e3ab-portrait"
             style={{ objectFit: "cover", objectPosition: "center top" }}
           />
        */
        .e3ab-portrait {
          display: block;
          width: 180px;
          aspect-ratio: 4 / 5;
          height: auto;
          background: #1E1C19;
          border: 1px solid ${BD};
          box-sizing: border-box;
        }
        @media (min-width: 640px) {
          .e3ab-portrait {
            width: 100%;
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

        {/* ── Portrait + content: one unified section ────────────────────────
            Single grid. Portrait anchors the left column, then becomes
            structural whitespace as the content continues past it.
            Introduction and biography are one continuous right column —
            no additional borders, headings, or layout resets between them.
        */}
        <section style={{
          borderTop: `1px solid ${BD}`,
          padding: "clamp(2.75rem, 6vw, 5.5rem) clamp(1.25rem, 5vw, 5rem)",
        }}>
          <div className="e3ab-grid">

            {/* Left column: portrait, then whitespace */}
            <div>
              {data.portraitImage ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={data.portraitImage}
                  alt={data.portraitAlt}
                  className="e3ab-portrait"
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />
              ) : (
                <div className="e3ab-portrait" />
              )}
            </div>

            {/* Right column: introduction flows directly into biography.
                Spacing alone creates the shift in rhythm — no rule, no heading. */}
            <div style={{ maxWidth: "62ch" }}>

              {/* Introduction */}
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

              {/* Biography — no label, no rule, continues from introduction */}
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
        </section>

        <DirectionEFooter />
      </div>
    </>
  );
}
