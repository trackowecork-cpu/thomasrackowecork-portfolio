export const metadata = {
  title: "Scaling Onboarding for the eSIM Era — Thomas Rackowe Cork",
  description:
    "How we built the foundations for eSIM at Proximus and enabled digital-first onboarding at scale.",
};

import { DirectionENav } from "../../_components/nav";
import { DirectionEFooter } from "../../_components/footer";
import { C, M, S, GR, BD, INK, IN2, MUT, FNT, ACC } from "../../_tokens";

const impacts = [
  { value: "Minutes",  label: "Activation time",    note: "Reduced from days — postal dependency removed" },
  { value: "55/day",   label: "Digital SIM swaps",  note: "Self-service SIM transitions directly in the app" },
  { value: "14,000+",  label: "eSIM activations",   note: "In the first month following Quick Transfer launch" },
];

const decisions = [
  {
    n: "01",
    title: "Digitising onboarding",
    body: "I contributed to redefining onboarding by removing the dependency on physical delivery. We introduced a fully digital activation flow within the Proximus+ app, consolidating purchase, onboarding, and installation into a single, continuous journey — enabling customers to activate their eSIM directly, without waiting or switching channels. The experience was designed to reduce ambiguity and build trust in a process that was still unfamiliar. Clear guidance, real-time feedback, and step-by-step validation helped users complete activation independently.",
  },
  {
    n: "02",
    title: "Enabling scale and self-service",
    body: "Once onboarding was digitised, a second limitation became clear: existing customers could not transition to eSIM without visiting a store — an approach that would not scale as physical SIM cards were being phased out. I worked with product, engineering, and stakeholders to design a fully digital SIM-to-eSIM self-service flow, enabling customers to switch directly within the app. In parallel, we collaborated with manufacturers to prepare Quick Transfer, enabling seamless device-to-device migration. Together, these initiatives established a scalable, digital-first activation system connecting onboarding, switching, and device transitions into a single, coherent model.",
  },
];

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
        .escs-decision {
          border-top: 1px solid ${BD};
          padding: clamp(1.5rem, 3.5vw, 2.75rem) 0;
          display: grid; grid-template-columns: 1fr; gap: 0.75rem;
        }
        .escs-dn {
          font-family: ${M}; font-size: 12px; color: ${FNT};
          display: block; margin-bottom: 0.5rem;
        }
        @media (min-width: 640px) {
          .escs-decision { grid-template-columns: 40px 1fr; gap: 1.5rem; align-items: start; }
          .escs-dn { margin-bottom: 0; padding-top: 6px; }
        }
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
            How we built the foundations for eSIM at Proximus and enabled digital-first
            onboarding at scale.
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

        {/* ── CS: Overview ─────────────────────────────────────────────────── */}
        <section className="escs-section" style={{ borderTop: "none", paddingTop: "clamp(3rem, 7vw, 6rem)" }}>
          <div className="escs-ann">
            <div><span className="escs-ann-lbl">Overview</span></div>
            <div style={{ maxWidth: "62ch" }}>
              <p style={{
                fontFamily: S, fontSize: "clamp(0.9375rem, 1.3vw, 1rem)",
                color: MUT, lineHeight: 1.75, margin: 0, marginBottom: "1.125rem",
              }}>
                The shift to eSIM was not driven by consumer demand, but by device manufacturers
                redefining the rules of mobile connectivity. As the industry moved toward
                eSIM-only devices, Proximus faced a structural gap: mobile onboarding and eSIM
                activation was still dependent on physical processes, limiting its ability to
                scale and respond to this change.
              </p>
              <p style={{
                fontFamily: S, fontSize: "clamp(0.9375rem, 1.3vw, 1rem)",
                color: MUT, lineHeight: 1.75, margin: 0,
              }}>
                I contributed to the transformation of mobile onboarding into a fully digital,
                in-app process — connecting eSIM provisioning, activation, SIM swap, and device
                transfer into a single, scalable model. This reduced activation time from days
                to minutes and repositioned Proximus to operate at the pace set by evolving
                technologies and external market forces.
              </p>
            </div>
          </div>
        </section>

        {/* ── CS: Challenge ────────────────────────────────────────────────── */}
        <section className="escs-section">
          <div className="escs-ann" style={{ marginBottom: "clamp(1.5rem, 3vw, 2.5rem)" }}>
            <div><span className="escs-ann-lbl">Challenge</span></div>
            <p style={{
              fontFamily: C, fontWeight: 400,
              fontSize: "clamp(1.25rem, 2.5vw, 1.875rem)",
              lineHeight: 1.3, letterSpacing: "-0.01em",
              color: IN2, margin: 0, maxWidth: "44ch",
            }}>
              eSIM exposed a fundamental mismatch between technology and operations at Proximus.
            </p>
          </div>

          <div className="escs-ann">
            <div />
            <div style={{ maxWidth: "62ch" }}>
              <p style={{
                fontFamily: S, fontSize: "clamp(0.9375rem, 1.3vw, 1rem)",
                color: MUT, lineHeight: 1.75, margin: 0, marginBottom: "1.125rem",
              }}>
                While connectivity was shifting toward fully digital provisioning, activation
                remained anchored in physical processes, undermining the core value of eSIM.
                New customers still had to wait for a paper QR code sent by post, meaning
                activation took just as long as receiving a physical SIM card. Existing customers
                were required to visit a store to switch to eSIM — adding friction to what should
                have been a simple, seamless digital action.
              </p>
              <p style={{
                fontFamily: S, fontSize: "clamp(0.9375rem, 1.3vw, 1rem)",
                color: MUT, lineHeight: 1.75, margin: 0,
                marginBottom: "clamp(1.125rem, 2vw, 1.75rem)",
              }}>
                At the same time, the pace of change was being set externally. Manufacturers like
                Apple were accelerating the transition toward eSIM-only devices, effectively
                removing the physical SIM from the ecosystem. This forced operators to adapt their
                activation models, regardless of internal readiness.
              </p>

              <div style={{ marginBottom: "clamp(1.125rem, 2vw, 1.75rem)" }}>
                {[
                  "eSIM enabled instant, digital activation, but Proximus processes did not",
                  "Customer expectations shifted toward self-service, while journeys remained fragmented",
                  "Retail channels absorbed demand for tasks that could have been completely digitalised",
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
                The challenge was not to drive adoption — it was to redefine mobile onboarding so
                Proximus could meet user expectations of instant, self-service connectivity while
                operating at the pace of a manufacturer-driven, digital-first ecosystem.
              </p>
            </div>
          </div>
        </section>

        {/* ── CS: Solution ─────────────────────────────────────────────────── */}
        <section className="escs-section">
          <div className="escs-ann" style={{ marginBottom: "clamp(1.75rem, 3.5vw, 3rem)" }}>
            <div><span className="escs-ann-lbl">Solution</span></div>
            <div style={{ maxWidth: "62ch" }}>
              <p style={{
                fontFamily: S, fontSize: "clamp(0.9375rem, 1.3vw, 1rem)",
                color: MUT, lineHeight: 1.75, margin: 0,
              }}>
                We aligned on transforming the activation model, rather than continuing to
                optimise individual flows. The objective was to establish a system that could
                support both immediate user needs and the longer-term shift toward fully digital,
                device-driven connectivity.
              </p>
            </div>
          </div>

          <div className="escs-ann">
            <div />
            <div style={{ maxWidth: "62ch" }}>
              {decisions.map(d => (
                <div key={d.n} className="escs-decision">
                  <span className="escs-dn">{d.n}</span>
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
        <section className="escs-section">
          <div className="escs-ann" style={{ marginBottom: "clamp(2rem, 4vw, 3.5rem)" }}>
            <div><span className="escs-ann-lbl">Impact</span></div>
            <p style={{
              fontFamily: S, fontSize: "clamp(0.9375rem, 1.3vw, 1rem)",
              color: MUT, lineHeight: 1.7, margin: 0, maxWidth: "62ch",
            }}>
              The shift from physical to digital activation fundamentally changed how mobile
              onboarding operates at Proximus, reducing friction for both new and existing
              customers while enabling the organisation to scale with increasing eSIM adoption.
            </p>
          </div>

          <div className="escs-ann">
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

              <div style={{ borderTop: `1px solid ${BD}`, paddingTop: "clamp(1.125rem, 2.5vw, 1.75rem)" }}>
                <p style={{
                  fontFamily: S, fontSize: "clamp(0.875rem, 1.3vw, 0.9375rem)",
                  color: MUT, lineHeight: 1.7, margin: 0,
                }}>
                  Beyond these results, the impact was structural. What started as an onboarding
                  improvement became a scalable, digital-first activation system — with shared
                  building blocks that extend across onboarding, switching, and device transitions.
                  This positioned Proximus to keep pace with a manufacturer-driven shift, with the
                  right foundations in place to support continued evolution without rethinking the
                  experience each time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CS: Reflection ───────────────────────────────────────────────── */}
        <section className="escs-section">
          <div className="escs-ann">
            <div><span className="escs-ann-lbl">Reflection</span></div>
            <div style={{ maxWidth: "62ch" }}>
              <blockquote style={{ margin: 0, marginBottom: "clamp(1.25rem, 2.5vw, 2rem)" }}>
                <p style={{
                  fontFamily: C, fontWeight: 300, fontStyle: "italic",
                  fontSize: "clamp(1.25rem, 2.5vw, 1.875rem)",
                  lineHeight: 1.35, color: IN2, margin: 0,
                }}>
                  Design is not just about responding to user needs, but about anticipating
                  them — especially when change is driven by forces beyond the user.
                </p>
              </blockquote>
              <p style={{
                fontFamily: S, fontSize: "clamp(0.9375rem, 1.3vw, 1rem)",
                color: MUT, lineHeight: 1.75, margin: 0, marginBottom: "1.125rem",
              }}>
                This project challenged a traditional view of UX as purely reactive. At the time,
                eSIM activation was not yet a widespread user pain point — rather, it was a
                structural gap that would inevitably surface as the industry evolved.
              </p>
              <p style={{
                fontFamily: S, fontSize: "clamp(0.9375rem, 1.3vw, 1rem)",
                color: MUT, lineHeight: 1.75, margin: 0, marginBottom: "1.125rem",
              }}>
                The complexity came from translating a historically physical process into a fully
                digital one, without established patterns to rely on. Rather than optimising an
                existing experience, we were redefining how mobile activation works in a context
                where the rules were increasingly set by manufacturers and evolving technologies.
              </p>
              <p style={{
                fontFamily: S, fontSize: "clamp(0.9375rem, 1.3vw, 1rem)",
                color: MUT, lineHeight: 1.75, margin: 0,
              }}>
                What we designed was not just a solution for onboarding, but a foundation for
                further evolution — supporting future use cases such as wearables and companion
                devices, where eSIM becomes the default.
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
