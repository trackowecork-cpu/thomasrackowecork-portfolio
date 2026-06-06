export const metadata = {
  title: "Redefining Product Strategy at Arteïa — Thomas Rackowe Cork",
  description:
    "How research-led insights reshaped Arteïa into a collector-first platform built for long-term value.",
};

import { DirectionENav } from "../../_components/nav";
import { DirectionEFooter } from "../../_components/footer";
import { C, M, S, GR, BD, INK, IN2, MUT, FNT, ACC } from "../../_tokens";

const decisions = [
  {
    n: "01",
    title: "Establishing a clear centre of gravity",
    body: "The first step was to define a clear core user. Private collectors already represented the majority of the user base, yet the product had not been designed around their needs. By repositioning collectors at the centre, Arteïa shifted from a fragmented platform to a more structured ecosystem — where collectors manage and engage with their collections, supported by artists providing context and content, and art advisors facilitating decisions and relationships. This created a clear centre of gravity and enabled the product to focus on real workflows rather than abstract use cases.",
  },
  {
    n: "02",
    title: "Redefining the value model",
    body: "To ensure long-term relevance, the product was decoupled from its dependency on NFTs. Rather than being the foundation of the experience, NFTs became optional — allowing the platform to focus on more stable and enduring value. The product was reoriented toward collection management, provenance, and ongoing engagement. Research revealed that collectors' collections extend beyond contemporary art to include design objects, watches, fashion, books, and other assets — so the cataloguing model was expanded to support multiple asset types, positioning Arteïa as a holistic collection management platform.",
  },
  {
    n: "03",
    title: "Reorienting the experience around real-world usage",
    body: "Collectors needed to catalogue, access, and share information in real-world contexts — fairs, meetings, private viewings. The product was reoriented toward mobile and on-the-go usage, addressing a key limitation of the existing desktop-heavy experience. Key workflows were redesigned to support direct cataloguing, quick access to collection data, and document management in context. The desktop experience remained the reference platform, supporting the full depth of the product while ensuring consistency across devices.",
  },
];

const impactItems = [
  "Defined a clear product direction by centring the experience around collectors",
  "Repositioned the product toward an underserved, high-value segment",
  "Established a sustainable value model beyond NFT dependency",
  "Improved user relevance and satisfaction by enabling collectors to manage their entire collection ecosystem in one place",
  "Removed key adoption barriers by aligning the product with real-world usage",
];

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
        .acs-decision {
          border-top: 1px solid ${BD};
          padding: clamp(1.5rem, 3.5vw, 2.75rem) 0;
          display: grid; grid-template-columns: 1fr; gap: 0.75rem;
        }
        .acs-dn {
          font-family: ${M}; font-size: 12px; color: ${FNT};
          display: block; margin-bottom: 0.5rem;
        }
        @media (min-width: 640px) {
          .acs-decision { grid-template-columns: 40px 1fr; gap: 1.5rem; align-items: start; }
          .acs-dn { margin-bottom: 0; padding-top: 6px; }
        }
        a.acs-arrow {
          color: ${INK}; text-decoration: none; display: inline-block;
          transition: color 180ms ease;
        }
        a.acs-arrow:hover { color: ${ACC}; }
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
            How research-led insights reshaped Arte&#239;a into a collector-first platform
            built for long-term value.
          </p>

          <div style={{
            borderTop: `1px solid ${BD}`, paddingTop: 16,
            display: "flex", flexWrap: "wrap", gap: "0.5rem 2.5rem",
          }}>
            {[
              ["Company", "Arteïa"],
              ["Role",    "Senior UX/UI & Service Designer"],
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

        {/* ── CS: Overview ─────────────────────────────────────────────────── */}
        <section className="acs-section" style={{ borderTop: "none", paddingTop: "clamp(3rem, 7vw, 6rem)" }}>
          <div className="acs-ann">
            <div><span className="acs-ann-lbl">Overview</span></div>
            <div style={{ maxWidth: "62ch" }}>
              <p style={{
                fontFamily: S, fontSize: "clamp(0.9375rem, 1.3vw, 1rem)",
                color: MUT, lineHeight: 1.75, margin: 0, marginBottom: "1.125rem",
              }}>
                Arte&#239;a was established during the NFT boom, with a product strategy heavily
                dependent on the continued growth and perceived value of NFTs. As market dynamics
                shifted, the platform began to lose relevance, revealing a deeper structural issue:
                its value proposition was tied to a trend that was no longer sustainable.
              </p>
              <p style={{
                fontFamily: S, fontSize: "clamp(0.9375rem, 1.3vw, 1rem)",
                color: MUT, lineHeight: 1.75, margin: 0, marginBottom: "1.125rem",
              }}>
                While my initial scope focused on extending core functionalities, user research
                quickly revealed that the challenge was not about improving the experience, but
                about redefining the product itself to better align with real user needs and the
                realities of the art market.
              </p>
              <p style={{
                fontFamily: S, fontSize: "clamp(0.9375rem, 1.3vw, 1rem)",
                color: MUT, lineHeight: 1.75, margin: 0,
              }}>
                This led to repositioning Arte&#239;a around private collectors as its core
                audience, shifting away from a fragmented, multi-audience approach toward a more
                focused product model grounded in collection management, relationships, and
                long-term engagement.
              </p>
            </div>
          </div>
        </section>

        {/* ── CS: Challenge ────────────────────────────────────────────────── */}
        <section className="acs-section">
          <div className="acs-ann" style={{ marginBottom: "clamp(1.5rem, 3vw, 2.5rem)" }}>
            <div><span className="acs-ann-lbl">Challenge</span></div>
            <p style={{
              fontFamily: C, fontWeight: 400,
              fontSize: "clamp(1.25rem, 2.5vw, 1.875rem)",
              lineHeight: 1.3, letterSpacing: "-0.01em",
              color: IN2, margin: 0, maxWidth: "44ch",
            }}>
              Arte&#239;a&apos;s challenges were not isolated UX issues, but a structural
              misalignment between its value proposition, its audience, and the market it
              operated in.
            </p>
          </div>

          <div className="acs-ann">
            <div />
            <div style={{ maxWidth: "62ch" }}>
              <p style={{
                fontFamily: S, fontSize: "clamp(0.9375rem, 1.3vw, 1rem)",
                color: MUT, lineHeight: 1.75, margin: 0, marginBottom: "1.125rem",
              }}>
                The product was built around NFTs at a time when interest was already declining,
                making its core offering increasingly less relevant. At the same time, it attempted
                to serve galleries, collectors, and artists equally, resulting in a diluted
                experience that failed to fully support any of them.
              </p>
              <p style={{
                fontFamily: S, fontSize: "clamp(0.9375rem, 1.3vw, 1rem)",
                color: MUT, lineHeight: 1.75, margin: 0, marginBottom: "1.125rem",
              }}>
                This was further compounded by positioning Arte&#239;a within the gallery tooling
                space, which was already saturated, limiting its ability to differentiate or
                create meaningful value.
              </p>
              <p style={{
                fontFamily: S, fontSize: "clamp(0.9375rem, 1.3vw, 1rem)",
                color: MUT, lineHeight: 1.75, margin: 0,
                marginBottom: "clamp(1.125rem, 2vw, 1.75rem)",
              }}>
                Operationally, the product was also misaligned with how users engaged with art
                in practice. While collectors operate in dynamic, real-world contexts — fairs,
                meetings, private viewings — the experience remained largely desktop-based,
                creating friction and limiting adoption.
              </p>

              <div style={{ marginBottom: "clamp(1.125rem, 2vw, 1.75rem)" }}>
                {[
                  "The product was built around a declining trend",
                  "The audience was undefined and unfocused",
                  "The experience did not reflect real-world usage",
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex", gap: "1rem",
                      marginBottom: i < 2 ? "0.875rem" : 0,
                      alignItems: "flex-start",
                    }}
                  >
                    <span style={{
                      fontFamily: M, fontSize: 12, color: FNT,
                      flexShrink: 0, paddingTop: 1,
                    }}>
                      0{i + 1}
                    </span>
                    <p style={{
                      fontFamily: S,
                      fontSize: "clamp(0.875rem, 1.3vw, 0.9375rem)",
                      color: MUT, lineHeight: 1.65, margin: 0,
                    }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
              <p style={{
                fontFamily: S, fontSize: "clamp(0.875rem, 1.3vw, 0.9375rem)",
                color: IN2, lineHeight: 1.65, margin: 0, fontStyle: "italic",
              }}>
                The challenge was not to improve the interface, but to redefine Arte&#239;a&apos;s
                role within the art ecosystem and establish a value model that could sustain
                long-term relevance.
              </p>
            </div>
          </div>
        </section>

        {/* ── CS: Solution ─────────────────────────────────────────────────── */}
        <section className="acs-section">
          <div className="acs-ann" style={{ marginBottom: "clamp(1.75rem, 3.5vw, 3rem)" }}>
            <div><span className="acs-ann-lbl">Solution</span></div>
            <div style={{ maxWidth: "62ch" }}>
              <p style={{
                fontFamily: S, fontSize: "clamp(0.9375rem, 1.3vw, 1rem)",
                color: MUT, lineHeight: 1.75, margin: 0,
              }}>
                We aligned on reworking the product&apos;s core positioning, rather than continuing
                to optimise individual features. The objective was to establish a model that could
                support both immediate user needs and a more sustainable role within the art
                ecosystem.
              </p>
            </div>
          </div>

          <div className="acs-ann">
            <div />
            <div style={{ maxWidth: "62ch" }}>
              {decisions.map(d => (
                <div key={d.n} className="acs-decision">
                  <span className="acs-dn">{d.n}</span>
                  <div>
                    <p style={{
                      fontFamily: C, fontWeight: 500,
                      fontSize: "clamp(1.125rem, 2vw, 1.375rem)",
                      lineHeight: 1.2, letterSpacing: "-0.01em",
                      color: IN2, margin: 0, marginBottom: "0.75rem",
                    }}>
                      {d.title}
                    </p>
                    <p style={{
                      fontFamily: S,
                      fontSize: "clamp(0.875rem, 1.3vw, 0.9375rem)",
                      color: MUT, lineHeight: 1.72, margin: 0,
                    }}>
                      {d.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CS: Impact ───────────────────────────────────────────────────── */}
        <section className="acs-section">
          <div className="acs-ann" style={{ marginBottom: "clamp(2rem, 4vw, 3.5rem)" }}>
            <div><span className="acs-ann-lbl">Impact</span></div>
            <p style={{
              fontFamily: S, fontSize: "clamp(0.9375rem, 1.3vw, 1rem)",
              color: MUT, lineHeight: 1.7, margin: 0, maxWidth: "62ch",
            }}>
              This resulted in a clear repositioning of Arte&#239;a&apos;s product direction,
              value model, and market focus — transforming it into a more focused and resilient
              platform grounded in real user needs.
            </p>
          </div>

          <div className="acs-ann">
            <div />
            <div style={{ maxWidth: "62ch" }}>
              {impactItems.map((item, i) => (
                <div
                  key={i}
                  style={{
                    borderTop: `1px solid ${BD}`,
                    padding: "clamp(1.125rem, 2.5vw, 1.75rem) 0",
                    display: "flex", gap: "1rem", alignItems: "flex-start",
                  }}
                >
                  <span style={{
                    fontFamily: M, fontSize: 12, color: FNT,
                    flexShrink: 0, paddingTop: 2,
                  }}>
                    0{i + 1}
                  </span>
                  <p style={{
                    fontFamily: S,
                    fontSize: "clamp(0.875rem, 1.3vw, 0.9375rem)",
                    color: MUT, lineHeight: 1.65, margin: 0,
                  }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CS: Reflection ───────────────────────────────────────────────── */}
        <section className="acs-section">
          <div className="acs-ann">
            <div><span className="acs-ann-lbl">Reflection</span></div>
            <div style={{ maxWidth: "62ch" }}>
              <blockquote style={{ margin: 0, marginBottom: "clamp(1.25rem, 2.5vw, 2rem)" }}>
                <p style={{
                  fontFamily: C, fontWeight: 300, fontStyle: "italic",
                  fontSize: "clamp(1.25rem, 2.5vw, 1.875rem)",
                  lineHeight: 1.35, color: IN2, margin: 0,
                }}>
                  Design is not just about improving experiences, but about redefining them when
                  the underlying assumptions no longer hold.
                </p>
              </blockquote>
              <p style={{
                fontFamily: S, fontSize: "clamp(0.9375rem, 1.3vw, 1rem)",
                color: MUT, lineHeight: 1.75, margin: 0, marginBottom: "1.125rem",
              }}>
                This project was about redefining the foundations of the product, rather than
                improving what already existed.
              </p>
              <p style={{
                fontFamily: S, fontSize: "clamp(0.9375rem, 1.3vw, 1rem)",
                color: MUT, lineHeight: 1.75, margin: 0, marginBottom: "1.125rem",
              }}>
                What began as an effort to extend functionality quickly evolved into a broader
                realisation: the challenge was not about improving the experience, but about
                redefining the product itself. This required stepping back to understand where
                Arte&#239;a could meaningfully create value within both the digital and art worlds.
              </p>
              <p style={{
                fontFamily: S, fontSize: "clamp(0.9375rem, 1.3vw, 1rem)",
                color: MUT, lineHeight: 1.75, margin: 0,
              }}>
                The complexity came from challenging the original premise of the product. It
                required the founders to look beyond their initial vision, question the
                product&apos;s raison d&apos;être, and make more fundamental decisions about its
                direction — reinforcing that meaningful design impact often comes from reframing
                the problem, not just solving it.
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
          }}>
            ← Back to work
          </a>
        </div>

        <DirectionEFooter />
      </div>
    </>
  );
}
