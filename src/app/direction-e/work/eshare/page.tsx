export const metadata = {
  title: "Recovering Declining eShare — Thomas Rackowe Cork",
  description:
    "How we rebuilt Proximus' digital ordering model to reduce friction, restore conversion, and reposition digital as the primary sales channel.",
};

import { DirectionENav } from "../../_components/nav";
import { DirectionEFooter } from "../../_components/footer";
import { C, M, S, GR, BD, INK, IN2, MUT, FNT, ACC } from "../../_tokens";

const impacts = [
  { value: "+17%",  label: "Completed orders",          note: "Improved end-to-end conversion" },
  { value: "+15%",  label: "Identification completion",  note: "Drop-off at a critical step reduced" },
  { value: "+100%", label: "Self-installation adoption", note: "Accelerating self-service behaviours" },
];

const decisions = [
  {
    n: "01",
    title: "Aligning product strategy with the experience",
    body: "Rather than framing the experience around fibre eligibility, we introduced a personalised entry point through an improved address check. This allowed users to see relevant offers from the start, eliminating disruptive product switches later in the funnel — a major source of drop-off in the legacy experience. This ensured the experience remained aligned with business priorities while avoiding frustration for non-fibre users.",
  },
  {
    n: "02",
    title: "Standardising and scaling the upper funnel",
    body: "The legacy product pages were fragmented, overloaded with content, and inconsistent across journeys. We introduced a streamlined, scalable page model, removing underperforming elements and prioritising content that users engaged with most. This created a clearer path to conversion and established a reusable structure that could be scaled across product types — supporting both usability and long-term maintainability.",
  },
  {
    n: "03",
    title: "Simplifying critical conversion steps",
    body: "By analysing usage patterns, we identified that over 80% of successful checkouts used itsme, Belgium's leading digital ID method. We simplified the experience by prioritising itsme as the default — redesigning the step to improve performance, clarity, and control, and enabling continuous optimisation of a previously opaque part of the journey.",
  },
  {
    n: "04",
    title: "Enabling self-service for installation",
    body: "Installation was a major source of friction for fibre customers facing long delays and uncertainty. We introduced a flexible model allowing eligible users to choose self-installation — aligning backend logic with frontend experience to ensure options were only presented when valid, combining clearer communication with improved system logic.",
  },
];

export default function EShareCaseStudy() {
  return (
    <>
      <style>{`
        .ecs {
          position: fixed; inset: 0; z-index: 100;
          overflow-y: auto; background: ${GR};
          font-family: ${S}; color: ${INK};
          -webkit-font-smoothing: antialiased;
        }

        .ecs-section {
          padding: clamp(2.75rem, 6vw, 5.5rem) clamp(1.25rem, 5vw, 5rem);
          border-top: 1px solid ${BD};
        }

        /* annotation grid */
        .ecs-ann { display: grid; grid-template-columns: 1fr; gap: 1rem; }
        .ecs-ann-lbl {
          font-family: ${M}; font-size: 12px;
          text-transform: uppercase; letter-spacing: 0.12em; color: ${ACC};
        }
        @media (min-width: 640px) {
          .ecs-ann {
            grid-template-columns: clamp(120px, 15%, 180px) 1fr;
            gap: clamp(2rem, 4vw, 4rem);
          }
        }

        /* decision rows */
        .ecs-decision {
          border-top: 1px solid ${BD};
          padding: clamp(1.5rem, 3.5vw, 2.75rem) 0;
          display: grid; grid-template-columns: 1fr; gap: 0.75rem;
        }
        .ecs-dn {
          font-family: ${M}; font-size: 12px; color: ${FNT};
          display: block; margin-bottom: 0.5rem;
        }
        @media (min-width: 640px) {
          .ecs-decision { grid-template-columns: 40px 1fr; gap: 1.5rem; align-items: start; }
          .ecs-dn { margin-bottom: 0; padding-top: 6px; }
        }

        /* links */
        a.ecs-arrow {
          color: ${FNT}; text-decoration: none;
          font-size: 14px; font-family: ${S};
          transition: color 180ms ease;
        }
        a.ecs-arrow:hover { color: ${INK}; }
        a.ecs-email { color: ${MUT}; text-decoration: none; }
        a.ecs-email:hover { color: ${IN2}; }
        a.ecs-next-title {
          color: ${INK}; text-decoration: none; display: block;
          transition: color 180ms ease;
        }
        a.ecs-next-title:hover { color: ${ACC}; }
      `}</style>

      <div className="ecs">
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
            Recovering Declining eShare
          </h1>

          <p style={{
            fontFamily: S, fontSize: "clamp(1rem, 1.4vw, 1.0625rem)",
            color: IN2, lineHeight: 1.7, margin: 0, maxWidth: "56ch",
            marginBottom: "clamp(1.75rem, 3.5vw, 2.75rem)",
          }}>
            How we rebuilt Proximus&apos; digital ordering model to reduce friction, restore
            conversion, and reposition digital as the primary sales channel.
          </p>

          <div style={{
            borderTop: `1px solid ${BD}`, paddingTop: 16,
            display: "flex", flexWrap: "wrap", gap: "0.5rem 2.5rem",
          }}>
            {[
              ["Company", "Proximus"],
              ["Role",    "Senior UX/UI & Service Designer"],
              ["Year",    "2022–23"],
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

        {/* ── CS: Hero image ────────────────────────────────────────────────── */}
        <div style={{
          padding: "clamp(0.5rem, 1vw, 1rem) clamp(1.25rem, 5vw, 5rem) clamp(2rem, 4vw, 3rem)",
        }}>
          <img
            src="/assets/eshare-hero.png"
            alt="eShare digital ordering experience"
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
        <section className="ecs-section" style={{ borderTop: "none", paddingTop: "clamp(3rem, 7vw, 6rem)" }}>
          <div className="ecs-ann">
            <div><span className="ecs-ann-lbl">Overview</span></div>
            <div style={{ maxWidth: "62ch" }}>
              <p style={{
                fontFamily: S, fontSize: "clamp(0.9375rem, 1.3vw, 1rem)",
                color: MUT, lineHeight: 1.75, margin: 0, marginBottom: "1.125rem",
              }}>
                Proximus was experiencing a sustained decline in its digital sales share (eShare),
                alongside an increase in support calls, signalling a breakdown in the digital
                ordering experience. As customer expectations shifted toward seamless, self-service
                journeys, the existing checkout remained fragmented, inconsistent, and misaligned
                with both user behaviour and business goals.
              </p>
              <p style={{
                fontFamily: S, fontSize: "clamp(0.9375rem, 1.3vw, 1rem)",
                color: MUT, lineHeight: 1.75, margin: 0, marginBottom: "1.125rem",
              }}>
                I contributed to the redesign of the end-to-end ordering experience, focusing on
                simplifying journeys, aligning product strategy with user expectations, and
                addressing structural points of friction across the funnel.
              </p>
              <p style={{
                fontFamily: S, fontSize: "clamp(0.9375rem, 1.3vw, 1rem)",
                color: MUT, lineHeight: 1.75, margin: 0,
              }}>
                This led to a more coherent, scalable ordering model, improving conversion, reducing
                reliance on support channels, and repositioning digital as the primary sales channel.
              </p>
            </div>
          </div>
        </section>

        {/* ── CS: Challenge ────────────────────────────────────────────────── */}
        <section className="ecs-section">
          <div className="ecs-ann" style={{ marginBottom: "clamp(1.5rem, 3vw, 2.5rem)" }}>
            <div><span className="ecs-ann-lbl">Challenge</span></div>
            <p style={{
              fontFamily: C, fontWeight: 400,
              fontSize: "clamp(1.25rem, 2.5vw, 1.875rem)",
              lineHeight: 1.3, letterSpacing: "-0.01em",
              color: IN2, margin: 0, maxWidth: "44ch",
            }}>
              The decline in eShare was not driven by a single issue, but by a structural mismatch
              between the digital experience, user expectations, and business strategy.
            </p>
          </div>

          <div className="ecs-ann">
            <div />
            <div style={{ maxWidth: "62ch" }}>
              <p style={{
                fontFamily: S, fontSize: "clamp(0.9375rem, 1.3vw, 1rem)",
                color: MUT, lineHeight: 1.75, margin: 0, marginBottom: "1.125rem",
              }}>
                The existing ordering flows were overly complex, inconsistent, and designed around
                edge cases rather than the majority of users. This resulted in confusion, friction,
                and a high cognitive load throughout the journey.
              </p>
              <p style={{
                fontFamily: S, fontSize: "clamp(0.9375rem, 1.3vw, 1rem)",
                color: MUT, lineHeight: 1.75, margin: 0, marginBottom: "1.125rem",
              }}>
                At the same time, the product experience lacked a clear strategic focus. While
                Proximus aimed to position itself as fibre-first, this was not effectively
                translated into the digital journey — especially given that a large portion of
                users were not eligible for fibre.
              </p>
              <p style={{
                fontFamily: S, fontSize: "clamp(0.9375rem, 1.3vw, 1rem)",
                color: MUT, lineHeight: 1.75, margin: 0,
                marginBottom: "clamp(1.125rem, 2vw, 1.75rem)",
              }}>
                Operationally, key parts of the journey were also disconnected or inefficient.
                Critical steps such as identification and installation introduced friction,
                suffered from technical limitations, or lacked transparency — leading to high
                drop-off and increased support demand.
              </p>

              <div style={{ marginBottom: "clamp(1.125rem, 2vw, 1.75rem)" }}>
                {[
                  "Digital journeys did not reflect user expectations of simplicity and self-service",
                  "Business priorities were not clearly translated into the experience",
                  "Critical steps introduced unnecessary friction and drop-off",
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
                The challenge was not to optimise the checkout, but to redefine the ordering model
                to improve conversion while aligning with both user behaviour and business strategy.
              </p>
            </div>
          </div>
        </section>

        {/* ── CS: Solution ─────────────────────────────────────────────────── */}
        <section className="ecs-section">
          <div className="ecs-ann" style={{ marginBottom: "clamp(1.75rem, 3.5vw, 3rem)" }}>
            <div><span className="ecs-ann-lbl">Solution</span></div>
            <div style={{ maxWidth: "62ch" }}>
              <p style={{
                fontFamily: S, fontSize: "clamp(0.9375rem, 1.3vw, 1rem)",
                color: MUT, lineHeight: 1.75, margin: 0, marginBottom: "1.125rem",
              }}>
                We aligned on transforming the ordering model rather than continuing to optimise
                individual flows. The objective was to create a simpler, more coherent system
                that could support both conversion and long-term scalability.
              </p>
              <p style={{
                fontFamily: S, fontSize: "clamp(0.9375rem, 1.3vw, 1rem)",
                color: MUT, lineHeight: 1.75, margin: 0,
              }}>
                The redesign was anchored in a clear principle: radical simplification. Rather
                than designing for edge cases, the focus shifted to the majority of users —
                removing unnecessary complexity, aligning flows with mental models, and creating
                a more predictable and consistent experience.
              </p>
            </div>
          </div>

          {/* Decisions */}
          <div className="ecs-ann">
            <div />
            <div style={{ maxWidth: "62ch" }}>
              {decisions.map(d => (
                <div key={d.n} className="ecs-decision">
                  <span className="ecs-dn">{d.n}</span>
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
        <section className="ecs-section">
          <div className="ecs-ann" style={{ marginBottom: "clamp(2rem, 4vw, 3.5rem)" }}>
            <div><span className="ecs-ann-lbl">Impact</span></div>
            <p style={{
              fontFamily: S, fontSize: "clamp(0.9375rem, 1.3vw, 1rem)",
              color: MUT, lineHeight: 1.7, margin: 0, maxWidth: "62ch",
            }}>
              This resulted in a redefined digital ordering model — improving conversion, reducing
              friction, and restoring the role of digital as a primary sales channel. Beyond
              performance, the initiative introduced a more collaborative governance model,
              strengthening alignment across product, tech, and design, and positioning design as
              a strategic partner in shaping business outcomes — not just execution.
            </p>
          </div>

          <div className="ecs-ann">
            <div />
            <div style={{ maxWidth: "62ch" }}>
              {impacts.map(m => (
                <div
                  key={m.label}
                  style={{
                    borderTop: `1px solid ${BD}`,
                    padding: "clamp(1.125rem, 2.5vw, 1.75rem) 0",
                    display: "grid",
                    gridTemplateColumns: "clamp(80px, 18%, 110px) 1fr",
                    gap: "1.25rem",
                    alignItems: "start",
                  }}
                >
                  <span style={{
                    fontFamily: C, fontWeight: 300,
                    fontSize: "clamp(1.625rem, 3.5vw, 2.375rem)",
                    lineHeight: 1.0, color: ACC, display: "block",
                  }}>
                    {m.value}
                  </span>
                  <div style={{ paddingTop: "0.25rem" }}>
                    <p style={{
                      fontFamily: S, fontWeight: 500,
                      fontSize: "clamp(0.875rem, 1.3vw, 0.9375rem)",
                      color: IN2, margin: 0, marginBottom: "0.25rem", lineHeight: 1.4,
                    }}>
                      {m.label}
                    </p>
                    <p style={{
                      fontFamily: S, fontSize: 13, color: FNT,
                      lineHeight: 1.4, margin: 0,
                    }}>
                      {m.note}
                    </p>
                  </div>
                </div>
              ))}

              {/* Qualitative outcome — prose note */}
              <div style={{ borderTop: `1px solid ${BD}`, paddingTop: "clamp(1.125rem, 2.5vw, 1.75rem)" }}>
                <p style={{
                  fontFamily: S, fontSize: "clamp(0.875rem, 1.3vw, 0.9375rem)",
                  color: MUT, lineHeight: 1.7, margin: 0,
                }}>
                  The redesign also led to a measurable reduction in support calls — a signal
                  of clearer journeys, greater customer confidence, and reduced reliance on
                  assisted channels.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CS: Reflection ───────────────────────────────────────────────── */}
        <section className="ecs-section">
          <div className="ecs-ann">
            <div><span className="ecs-ann-lbl">Reflection</span></div>
            <div style={{ maxWidth: "62ch" }}>
              <blockquote style={{ margin: 0, marginBottom: "clamp(1.25rem, 2.5vw, 2rem)" }}>
                <p style={{
                  fontFamily: C, fontWeight: 300, fontStyle: "italic",
                  fontSize: "clamp(1.25rem, 2.5vw, 1.875rem)",
                  lineHeight: 1.35, color: IN2, margin: 0,
                }}>
                  Design is not just about reducing friction, but about aligning systems,
                  strategy, and experience to create meaningful, scalable impact.
                </p>
              </blockquote>
              <p style={{
                fontFamily: S, fontSize: "clamp(0.9375rem, 1.3vw, 1rem)",
                color: MUT, lineHeight: 1.75, margin: 0, marginBottom: "1.125rem",
              }}>
                This project highlighted that improving performance at scale requires more than
                optimising individual touchpoints — it requires rethinking the system as a whole.
              </p>
              <p style={{
                fontFamily: S, fontSize: "clamp(0.9375rem, 1.3vw, 1rem)",
                color: MUT, lineHeight: 1.75, margin: 0, marginBottom: "1.125rem",
              }}>
                What initially appeared as a conversion issue revealed deeper structural challenges
                across product strategy, technical dependencies, and organisational ways of working.
                Addressing these required not only design changes, but closer collaboration across
                product, tech, and business teams.
              </p>
              <p style={{
                fontFamily: S, fontSize: "clamp(0.9375rem, 1.3vw, 1rem)",
                color: MUT, lineHeight: 1.75, margin: 0,
              }}>
                The complexity lay in balancing simplification with real-world constraints —
                ensuring that the experience remained coherent for users while accommodating the
                realities of the market and internal systems.
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
          <a href="/direction-e/work/esim" className="ecs-next-title" style={{
            fontFamily: C, fontWeight: 400,
            fontSize: "clamp(1.5rem, 2.75vw, 2.25rem)",
            lineHeight: 1.15, letterSpacing: "-0.015em",
          }}>
            Scaling Onboarding for the eSIM Era →
          </a>
          <span style={{
            fontFamily: S, fontSize: 13, color: FNT,
            display: "block", marginTop: "0.375rem",
          }}>
            Proximus · 2023
          </span>
        </div>

        <DirectionEFooter />
      </div>
    </>
  );
}
