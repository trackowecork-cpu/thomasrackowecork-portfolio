export const metadata = {
  title: "About — Thomas Rackowe Cork",
  description:
    "Product designer focused on shaping digital products, systems, and experiences that scale. Background in the contemporary art world and social anthropology.",
};

import { DirectionENav } from "../_components/nav";
import { DirectionEFooter } from "../_components/footer";
import { C, M, S, GR, BD, INK, IN2, MUT, FNT } from "../_tokens";

export default function AboutPage() {
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
            My path to product design ran through the contemporary art world and social anthropology.
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
              <div className="e3ab-portrait" />
            </div>

            {/* Right column: introduction flows directly into biography.
                Spacing alone creates the shift in rhythm — no rule, no heading. */}
            <div style={{ maxWidth: "62ch" }}>

              {/* Introduction */}
              <div style={{ marginBottom: "1rem" }}>
                <p style={{
                  fontFamily: S,
                  fontSize: "clamp(0.9375rem, 1.3vw, 1rem)",
                  color: MUT, lineHeight: 1.8,
                  margin: 0, marginBottom: "1rem",
                }}>
                  Before product design, I spent years in the contemporary art world. Before
                  that, social anthropology.
                </p>
                <p style={{
                  fontFamily: S,
                  fontSize: "clamp(0.9375rem, 1.3vw, 1rem)",
                  color: MUT, lineHeight: 1.8,
                  margin: 0,
                }}>
                  Looking back, both were really about the same thing: understanding how people
                  make decisions, what they value, and how systems shape behaviour.
                </p>
              </div>

              {/* Biography — no label, no rule, continues from introduction */}
              <div>
                <p style={{
                  fontFamily: S,
                  fontSize: "clamp(0.9375rem, 1.3vw, 1rem)",
                  color: MUT, lineHeight: 1.8,
                  margin: 0, marginBottom: "1rem",
                }}>
                  I&apos;m a product and service designer focused on shaping digital products,
                  systems, and experiences that scale. My work sits at the intersection of user
                  needs, business strategy, and emerging technologies — from connected services
                  and AI-driven experiences to complex product ecosystems.
                </p>
                <p style={{
                  fontFamily: S,
                  fontSize: "clamp(0.9375rem, 1.3vw, 1rem)",
                  color: MUT, lineHeight: 1.8,
                  margin: 0, marginBottom: "1rem",
                }}>
                  Before moving into design, I worked in the contemporary art world as an art
                  advisor, researcher, and artist liaison. That experience taught me how to
                  navigate ambiguity, align competing perspectives, and communicate complex ideas
                  with clarity — skills that continue to shape how I collaborate across
                  multidisciplinary teams today.
                </p>
                <p style={{
                  fontFamily: S,
                  fontSize: "clamp(0.9375rem, 1.3vw, 1rem)",
                  color: MUT, lineHeight: 1.8,
                  margin: 0, marginBottom: "1rem",
                }}>
                  My background in social anthropology fundamentally influences my approach to
                  design. It trained me to look beyond surface behaviour and understand the
                  cultural, emotional, and systemic factors that drive decision-making. Today,
                  that translates into a research-led practice grounded in context, critical
                  thinking, and real-world behavioural insight.
                </p>
                <p style={{
                  fontFamily: S,
                  fontSize: "clamp(0.9375rem, 1.3vw, 1rem)",
                  color: MUT, lineHeight: 1.8,
                  margin: 0, marginBottom: "1rem",
                }}>
                  I&apos;m particularly interested in how technology can create more intelligent,
                  adaptive, and intuitive experiences. As products become increasingly powered by
                  AI, automation, and connected systems, I believe the role of design is not only
                  to simplify complexity, but to ensure technology remains meaningful, trustworthy,
                  and aligned with real user needs.
                </p>
                <p style={{
                  fontFamily: S,
                  fontSize: "clamp(0.9375rem, 1.3vw, 1rem)",
                  color: MUT, lineHeight: 1.8,
                  margin: 0,
                }}>
                  My approach combines systems thinking, research, and strategic design to turn
                  complexity into coherent end-to-end experiences. Whether defining product
                  ecosystems, improving service journeys, or designing scalable digital foundations,
                  my goal is to create work that delivers long-term value — for both users and the
                  organisations behind the products they rely on.
                </p>
              </div>

            </div>
          </div>
        </section>

        <DirectionEFooter />
      </div>
    </>
  );
}
