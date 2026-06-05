export const metadata = { title: "Direction D — Strategic Editorial" };

/* ── tokens ────────────────────────────────────────────────────────────── */
const C  = "var(--font-cormorant), Georgia, serif";
const M  = "var(--font-geist-mono), monospace";
const S  = "var(--font-inter), system-ui, sans-serif";

const GR  = "#0E0D0C";   // ground
const GR2 = "#131110";   // raised
const BD  = "#252220";   // border
const BD2 = "#1A1816";   // subtle border
const INK = "#F5F1EC";   // primary text
const IN2 = "#DDD8D2";   // secondary text
const MUT = "#A8A09A";   // muted text
const FNT = "#5C5652";   // faint / labels
const ACC = "#C4A882";   // warm sand accent

/* ── shared helpers ─────────────────────────────────────────────────────── */
const label = (text: string) => (
  <span style={{ fontFamily: M, fontSize: 11, textTransform: "uppercase" as const, letterSpacing: "0.12em", color: FNT }}>
    {text}
  </span>
);

/* ── data ───────────────────────────────────────────────────────────────── */
const projects = [
  {
    n: "01",
    company: "Proximus", year: "2022–23",
    scope: "Product Design · Service Design · Strategy",
    title: "Recovering Declining eShare",
    challenge: "The decline was structural — a mismatch between digital experience, user expectations, and business strategy. Not a single broken touchpoint, but a system misaligned at every level.",
    outcome: "+17%",
    outcomeSub: "completed orders",
    image: "/assets/eshare-hero.png",
    imageBg: "#C4A882",
    href: "#case-study",
  },
  {
    n: "02",
    company: "Proximus", year: "2023",
    scope: "Product Design · Service Design · Systems",
    title: "Scaling Onboarding for the eSIM Era",
    challenge: "eSIM exposed a fundamental mismatch between technology and operations. We transformed mobile onboarding from a postal process into a fully digital, self-service activation system.",
    outcome: "14,000+",
    outcomeSub: "eSIM activations in month one",
    image: "/assets/esim-hero.png",
    imageBg: "#4A5547",
    href: "#",
  },
  {
    n: "03",
    company: "Arteïa", year: "2022",
    scope: "Product Strategy · Research · Service Design",
    title: "Redefining Product Strategy at Arteïa",
    challenge: "The platform was built around a trend that was no longer sustainable. The challenge was not to improve the interface — but to redefine the product itself and its role in the art market.",
    outcome: null,
    outcomeSub: "Product repositioning",
    image: "/assets/arteia-hero.png",
    imageBg: "#231A14",
    href: "#",
  },
  {
    n: "04",
    company: "Proximus", year: "2024–present",
    scope: "Product Design · Systems · Platform",
    title: "Rebuilding the Foundations of Proximus+",
    challenge: "Redefining product management, support, and self-service for the future of Proximus+ — building foundations that can evolve alongside future services and customer expectations.",
    outcome: null,
    outcomeSub: null,
    inProgress: true,
    image: "/assets/proximus-hero.png",
    imageBg: "#C96444",
    href: null,
  },
];

/* ── page ───────────────────────────────────────────────────────────────── */
export default function DirectionD() {
  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 100,
      overflowY: "auto", backgroundColor: GR,
      fontFamily: S, color: INK,
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
    }}>

      {/* ════════════════════════════════════ HOMEPAGE ═════════════════════ */}

      {/* ── Navigation ───────────────────────────────────────────────────── */}
      <header style={{
        position: "absolute", top: 0, left: 0, right: 0, zIndex: 20,
        padding: "0 clamp(1.5rem, 5vw, 5rem)",
        height: 52,
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <a href="#" style={{ fontFamily: S, fontSize: 13, color: MUT, letterSpacing: "-0.01em", textDecoration: "none" }}>
          Thomas Rackowe Cork
        </a>
        <nav style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <a href="#work" style={{ fontFamily: S, fontSize: 13, color: FNT, textDecoration: "none" }}>Work</a>
          <a href="#about" style={{ fontFamily: S, fontSize: 13, color: FNT, textDecoration: "none" }}>About</a>
          <a
            href="mailto:hello@thomasrackowecork.com"
            style={{ fontFamily: S, fontSize: 13, color: FNT, textDecoration: "none", paddingLeft: 20, marginLeft: 4, borderLeft: `1px solid ${BD}` }}
          >
            hello@thomasrackowecork.com
          </a>
        </nav>
      </header>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section style={{
        minHeight: "100vh",
        display: "flex", flexDirection: "column", justifyContent: "flex-end",
        padding: "0 clamp(1.5rem, 5vw, 5rem)",
        paddingBottom: "clamp(3.5rem, 6vw, 5rem)",
      }}>
        {/* The silent upper space communicates confidence */}
        <div style={{ maxWidth: 820 }}>
          <div style={{ marginBottom: "clamp(1.5rem, 3vw, 2.5rem)" }}>
            {label("Senior Product Designer")}
          </div>

          <h1 style={{
            fontFamily: C, fontWeight: 400,
            fontSize: "clamp(2.75rem, 5.5vw, 5rem)",
            lineHeight: 1.05, color: INK,
            margin: 0, marginBottom: "clamp(1.25rem, 2.5vw, 2rem)",
            letterSpacing: "-0.025em",
          }}>
            The brief is rarely the problem.
          </h1>

          <p style={{
            fontFamily: S, fontSize: "clamp(1rem, 1.4vw, 1.125rem)",
            color: MUT, lineHeight: 1.7,
            maxWidth: "46ch", margin: 0,
          }}>
            I design products, services, and systems from the point where the real challenge becomes clear — questioning assumptions, redesigning models, building foundations that scale.
          </p>
        </div>

        {/* Hero metrics strip — lightweight, not theatrical */}
        <div style={{ marginTop: "clamp(2.5rem, 5vw, 4.5rem)", borderTop: `1px solid ${BD}`, paddingTop: 20 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", maxWidth: 720 }}>
            {[
              { v: "+17%",     l: "Completed orders", s: "eShare" },
              { v: "14,000+",  l: "eSIM activations", s: "Month one" },
              { v: "+100%",    l: "Self-installation", s: "Adoption" },
              { v: "Days → Min.", l: "Activation time", s: "eSIM" },
            ].map((m, i) => (
              <div key={m.l} style={{
                borderLeft: i > 0 ? `1px solid ${BD}` : undefined,
                paddingLeft: i > 0 ? "clamp(1rem, 2vw, 1.5rem)" : 0,
              }}>
                <p style={{ fontFamily: S, fontWeight: 600, fontSize: "clamp(1.125rem, 2vw, 1.5rem)", color: ACC, margin: 0, marginBottom: 6, letterSpacing: "-0.02em" }}>
                  {m.v}
                </p>
                <p style={{ fontFamily: M, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.1em", color: FNT, margin: 0 }}>
                  {m.l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Work ─────────────────────────────────────────────────────────── */}
      <section id="work" style={{ padding: "0 clamp(1.5rem, 5vw, 5rem)" }}>
        <div style={{
          borderTop: `1px solid ${BD}`, paddingTop: 14, marginBottom: 0,
          display: "flex", justifyContent: "space-between", alignItems: "baseline",
        }}>
          {label("Selected work")}
          {label("04 projects · 2022–present")}
        </div>

        {projects.map(p => (
          <div key={p.n} style={{
            borderTop: `1px solid ${BD}`,
            display: "grid",
            gridTemplateColumns: "1fr clamp(180px, 30%, 360px)",
            alignItems: "stretch",
            minHeight: "clamp(220px, 28vw, 360px)",
          }}>
            {/* ── Text zone ─────────────────────────────────── */}
            <div style={{
              padding: "clamp(1.75rem, 3.5vw, 3rem) clamp(1.5rem, 3vw, 2.5rem) clamp(1.75rem, 3.5vw, 3rem) 0",
              display: "flex", flexDirection: "column", justifyContent: "space-between",
            }}>
              {/* Top: metadata */}
              <div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 16, flexWrap: "wrap" }}>
                  <span style={{ fontFamily: M, fontSize: 11, color: FNT }}>{p.n}</span>
                  <span style={{ fontFamily: M, fontSize: 10, color: FNT, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    {p.company} · {p.year}
                  </span>
                  {p.inProgress && (
                    <span style={{ fontFamily: M, fontSize: 10, color: ACC, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                      In progress
                    </span>
                  )}
                </div>

                <h2 style={{
                  fontFamily: C, fontWeight: 400,
                  fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                  lineHeight: 1.15, color: INK,
                  margin: 0, marginBottom: "clamp(1rem, 2vw, 1.5rem)",
                  letterSpacing: "-0.015em",
                }}>
                  {p.href ? (
                    <a href={p.href} style={{ color: "inherit", textDecoration: "none" }}>{p.title}</a>
                  ) : p.title}
                </h2>

                <p style={{ fontFamily: S, fontSize: "clamp(0.875rem, 1.2vw, 0.9375rem)", color: MUT, lineHeight: 1.7, margin: 0, maxWidth: "52ch" }}>
                  {p.challenge}
                </p>
              </div>

              {/* Bottom: outcome + link */}
              <div style={{ marginTop: "clamp(1.25rem, 2.5vw, 2rem)", display: "flex", alignItems: "baseline", gap: 16, flexWrap: "wrap" }}>
                {p.outcome ? (
                  <>
                    <span style={{ fontFamily: S, fontWeight: 700, fontSize: "clamp(1.25rem, 2vw, 1.75rem)", color: ACC, letterSpacing: "-0.025em" }}>
                      {p.outcome}
                    </span>
                    <span style={{ fontFamily: M, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.1em", color: FNT }}>
                      {p.outcomeSub}
                    </span>
                  </>
                ) : p.outcomeSub ? (
                  <span style={{ fontFamily: M, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.1em", color: FNT }}>
                    {p.outcomeSub}
                  </span>
                ) : null}
                {p.href && !p.inProgress && (
                  <a href={p.href} style={{
                    fontFamily: S, fontSize: 13, color: FNT, textDecoration: "none",
                    marginLeft: "auto",
                  }}>
                    View case study →
                  </a>
                )}
              </div>
            </div>

            {/* ── Image zone — integrated into the composition ── */}
            <div style={{
              backgroundColor: p.imageBg,
              overflow: "hidden",
              position: "relative",
            }}>
              <img
                src={p.image}
                alt={p.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                  filter: "saturate(0.80) brightness(0.95)",
                  display: "block",
                }}
              />
              {/* Subtle scope strip at bottom of image */}
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                padding: "10px 14px",
                background: "linear-gradient(transparent, rgba(14,13,12,0.6))",
              }}>
                <span style={{ fontFamily: M, fontSize: 9, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(245,241,236,0.5)" }}>
                  {p.scope}
                </span>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ── About ─────────────────────────────────────────────────────────── */}
      <section id="about" style={{
        padding: "clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 5rem)",
        borderTop: `1px solid ${BD}`,
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "clamp(120px, 16%, 200px) 1fr",
          gap: "clamp(2rem, 4vw, 4rem)",
          alignItems: "start",
        }}>
          <div style={{ paddingTop: 4 }}>
            {label("About")}
          </div>
          <div>
            <p style={{
              fontFamily: C, fontWeight: 400,
              fontSize: "clamp(1.375rem, 2.5vw, 2rem)",
              lineHeight: 1.35, color: IN2,
              margin: 0, marginBottom: "clamp(1.5rem, 3vw, 2.5rem)",
              maxWidth: "24ch",
            }}>
              Senior Product Designer. The brief is rarely the problem.
            </p>
            <p style={{ fontFamily: S, fontSize: 15, color: MUT, lineHeight: 1.75, margin: 0, marginBottom: 20, maxWidth: "58ch" }}>
              Before product design, I worked in the contemporary art world — as an art advisor, researcher, and artist liaison. Before that, social anthropology. Both disciplines trained me to look past surface behaviour and understand the cultural, systemic, and organisational factors that drive decisions.
            </p>
            <p style={{ fontFamily: S, fontSize: 15, color: MUT, lineHeight: 1.75, margin: 0, maxWidth: "58ch" }}>
              Today, that translates into a research-led practice working at the intersection of product design, service design, and systems thinking — focused on problems where the real challenge is structural, not superficial.
            </p>
          </div>
        </div>
      </section>

      {/* ── Footer (homepage) ─────────────────────────────────────────────── */}
      <footer style={{
        borderTop: `1px solid ${BD}`,
        padding: "clamp(1.5rem, 3vw, 2.5rem) clamp(1.5rem, 5vw, 5rem)",
        display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12,
      }}>
        <a href="mailto:hello@thomasrackowecork.com" style={{ fontFamily: S, fontSize: 13, color: MUT, textDecoration: "none" }}>
          hello@thomasrackowecork.com
        </a>
        <div style={{ display: "flex", gap: 24 }}>
          <a href="https://linkedin.com/in/thomasrackowecork" style={{ fontFamily: S, fontSize: 13, color: FNT, textDecoration: "none" }}>LinkedIn ↗</a>
          <span style={{ fontFamily: S, fontSize: 13, color: FNT }}>© 2026 Thomas Rackowe Cork</span>
        </div>
      </footer>

      {/* ════════════════════════════════════ CASE STUDY ═══════════════════ */}

      {/* Chapter break */}
      <div id="case-study" style={{
        borderTop: `1px solid ${BD}`,
        backgroundColor: GR2,
        padding: "16px clamp(1.5rem, 5vw, 5rem)",
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        {label("Case study — eShare")}
        {label("Proximus · 2022–23")}
      </div>

      {/* ── Case study: Header ────────────────────────────────────────────── */}
      <section style={{ padding: "clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 5rem) clamp(2rem, 4vw, 3rem)" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "clamp(120px, 16%, 200px) 1fr",
          gap: "clamp(2rem, 4vw, 4rem)",
          marginBottom: "clamp(2rem, 4vw, 3.5rem)",
        }}>
          <div>
            {label("Context")}
          </div>
          <div>
            <h2 style={{
              fontFamily: C, fontWeight: 400,
              fontSize: "clamp(2rem, 4.5vw, 4rem)",
              lineHeight: 1.05, color: INK,
              margin: 0, marginBottom: "clamp(1.25rem, 2.5vw, 2rem)",
              letterSpacing: "-0.02em",
            }}>
              Recovering Declining eShare
            </h2>
            <p style={{ fontFamily: S, fontSize: "clamp(1rem, 1.4vw, 1.125rem)", color: IN2, lineHeight: 1.65, margin: 0, maxWidth: "56ch" }}>
              How we rebuilt Proximus&apos; digital ordering model to reduce friction, restore conversion, and reposition digital as the primary sales channel.
            </p>
          </div>
        </div>

        {/* Metadata strip */}
        <div style={{ display: "grid", gridTemplateColumns: "clamp(120px, 16%, 200px) 1fr", gap: "clamp(2rem, 4vw, 4rem)" }}>
          <div />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", borderTop: `1px solid ${BD}`, paddingTop: 20 }}>
            {[["Role", "Senior UX/UI & Service Designer"], ["Company", "Proximus"], ["Year", "2022–23"]].map(([k, v]) => (
              <div key={k}>
                <p style={{ fontFamily: M, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.1em", color: FNT, margin: 0, marginBottom: 6 }}>{k}</p>
                <p style={{ fontFamily: S, fontSize: 13, color: MUT, margin: 0 }}>{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Case study: Hero image — full-width, compositional ────────────── */}
      <div style={{
        margin: "0 clamp(1.5rem, 5vw, 5rem)",
        aspectRatio: "16/7",
        backgroundColor: "#C4A882",
        overflow: "hidden",
        position: "relative",
      }}>
        <img
          src="/assets/eshare-hero.png"
          alt="eShare ordering flow — Proximus"
          style={{
            width: "100%", height: "100%",
            objectFit: "cover", objectPosition: "center 20%",
            filter: "saturate(0.85) brightness(0.92)",
            display: "block",
          }}
        />
      </div>

      {/* ── Case study: Challenge ─────────────────────────────────────────── */}
      <section style={{
        padding: "clamp(3.5rem, 7vw, 6rem) clamp(1.5rem, 5vw, 5rem)",
        borderTop: `1px solid ${BD}`,
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "clamp(120px, 16%, 200px) 1fr",
          gap: "clamp(2rem, 4vw, 4rem)",
        }}>
          <div style={{ paddingTop: 4 }}>{label("Challenge")}</div>
          <div style={{ maxWidth: "66ch" }}>
            <p style={{
              fontFamily: C, fontWeight: 400,
              fontSize: "clamp(1.375rem, 2.5vw, 2rem)",
              lineHeight: 1.3, color: IN2,
              margin: 0, marginBottom: "clamp(1.5rem, 3vw, 2.5rem)",
            }}>
              The decline was not driven by a single issue, but by a structural mismatch between the digital experience, user expectations, and business strategy.
            </p>
            <p style={{ fontFamily: S, fontSize: 15, color: MUT, lineHeight: 1.75, margin: 0, marginBottom: 18 }}>
              The existing ordering flows were overly complex, inconsistent, and designed around edge cases rather than the majority of users. Critical steps — including identification and installation — introduced friction, suffered from technical limitations, or lacked transparency, leading to high drop-off and increased support demand.
            </p>
            <p style={{ fontFamily: S, fontSize: 15, color: MUT, lineHeight: 1.75, margin: 0, marginBottom: 28 }}>
              At the same time, Proximus&apos; fiber-first strategy was not effectively translated into the digital journey — especially given that a large portion of users were not eligible for fiber. This created a structural gap between what the business wanted to communicate and what users actually experienced.
            </p>
            {/* Problem summary */}
            <div style={{ borderTop: `1px solid ${BD}`, paddingTop: 20 }}>
              {[
                "Digital journeys did not reflect user expectations of simplicity and self-service",
                "Business priorities were not clearly translated into the experience",
                "Critical steps introduced unnecessary friction and drop-off",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 16, marginBottom: 12, alignItems: "flex-start" }}>
                  <span style={{ fontFamily: M, fontSize: 10, color: FNT, paddingTop: 3, flexShrink: 0 }}>0{i + 1}</span>
                  <p style={{ fontFamily: S, fontSize: 14, color: MUT, lineHeight: 1.6, margin: 0 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Case study: Approach ──────────────────────────────────────────── */}
      <section style={{
        padding: "clamp(3.5rem, 7vw, 6rem) clamp(1.5rem, 5vw, 5rem)",
        borderTop: `1px solid ${BD}`,
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "clamp(120px, 16%, 200px) 1fr",
          gap: "clamp(2rem, 4vw, 4rem)",
          marginBottom: "clamp(2.5rem, 5vw, 5rem)",
        }}>
          <div style={{ paddingTop: 4 }}>{label("Approach")}</div>
          <div style={{ maxWidth: "66ch" }}>
            <p style={{ fontFamily: S, fontSize: 15, color: MUT, lineHeight: 1.75, margin: 0, marginBottom: 18 }}>
              We aligned on transforming the ordering model rather than continuing to optimise individual flows. The objective was to create a simpler, more coherent system that could support both conversion and long-term scalability.
            </p>
            <p style={{ fontFamily: S, fontSize: 15, color: MUT, lineHeight: 1.75, margin: 0 }}>
              The redesign was anchored in a clear principle: radical simplification. Rather than designing for edge cases, the focus shifted to the majority of users — removing unnecessary complexity, aligning flows with mental models, and creating a more predictable and consistent experience.
            </p>
          </div>
        </div>

        {/* Decision table */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "clamp(120px, 16%, 200px) 1fr",
          gap: "clamp(2rem, 4vw, 4rem)",
        }}>
          <div />
          <div>
            {[
              {
                n: "01", title: "Aligning product strategy with the experience",
                body: "Rather than framing the experience around fiber eligibility, we introduced a personalised address check at entry — showing users only relevant offers from the start. This eliminated disruptive product switches mid-funnel, the single largest source of drop-off.",
              },
              {
                n: "02", title: "Simplifying critical conversion steps",
                body: "Analysis showed that over 80% of successful checkouts used itsme, Belgium's leading digital ID method. Rather than presenting all options equally, we redesigned the identification step around the majority case — dramatically reducing cognitive load and completion time.",
              },
              {
                n: "03", title: "Enabling self-service for installation",
                body: "Installation was the second major friction point — long delays, limited flexibility, and no self-service option for eligible customers. We introduced a flexible model allowing self-installation where technically valid, combining clearer communication with improved backend logic.",
              },
            ].map((d, i) => (
              <div key={d.n} style={{
                borderTop: `1px solid ${BD}`,
                padding: "clamp(1.5rem, 3vw, 2.5rem) 0",
                display: "grid",
                gridTemplateColumns: "40px 1fr",
                gap: "clamp(1rem, 2vw, 1.5rem)",
              }}>
                <span style={{ fontFamily: M, fontSize: 11, color: FNT, paddingTop: 3 }}>{d.n}</span>
                <div>
                  <p style={{ fontFamily: S, fontWeight: 500, fontSize: 15, color: IN2, margin: 0, marginBottom: 10, lineHeight: 1.4 }}>{d.title}</p>
                  <p style={{ fontFamily: S, fontSize: 14, color: MUT, lineHeight: 1.7, margin: 0 }}>{d.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Case study: Impact ────────────────────────────────────────────── */}
      <section style={{
        padding: "clamp(3.5rem, 7vw, 6rem) clamp(1.5rem, 5vw, 5rem)",
        borderTop: `1px solid ${BD}`,
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "clamp(120px, 16%, 200px) 1fr",
          gap: "clamp(2rem, 4vw, 4rem)",
          marginBottom: "clamp(2.5rem, 5vw, 4rem)",
        }}>
          <div style={{ paddingTop: 4 }}>{label("Impact")}</div>
          <p style={{ fontFamily: S, fontSize: 15, color: MUT, lineHeight: 1.7, margin: 0, maxWidth: "58ch" }}>
            This resulted in a redefined digital ordering model — improving conversion, reducing friction, and restoring the role of digital as a primary sales channel.
          </p>
        </div>

        {/* Metrics — display scale, full-width within content column */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "clamp(120px, 16%, 200px) 1fr",
          gap: "clamp(2rem, 4vw, 4rem)",
        }}>
          <div />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
            {[
              { v: "+17%",   l: "Completed orders",         c: "End-to-end conversion" },
              { v: "+15%",   l: "Identification completion", c: "Critical step drop-off reduced" },
              { v: "+100%",  l: "Self-installation",         c: "Adoption increase" },
              { v: "↓ Calls", l: "Support demand",           c: "Clearer journeys, higher confidence" },
            ].map((m, i) => (
              <div key={m.l} style={{
                borderLeft: i > 0 ? `1px solid ${BD}` : undefined,
                paddingLeft: i > 0 ? "clamp(1rem, 2vw, 2rem)" : 0,
              }}>
                <p style={{
                  fontFamily: C, fontWeight: 300,
                  fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                  lineHeight: 0.95, color: ACC,
                  margin: 0, marginBottom: 14,
                  letterSpacing: "-0.02em",
                }}>
                  {m.v}
                </p>
                <p style={{ fontFamily: M, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.1em", color: MUT, margin: 0, marginBottom: 6 }}>
                  {m.l}
                </p>
                <p style={{ fontFamily: S, fontSize: 12, color: FNT, lineHeight: 1.4 }}>
                  {m.c}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Case study: Reflection ────────────────────────────────────────── */}
      <section style={{
        padding: "clamp(3.5rem, 7vw, 6rem) clamp(1.5rem, 5vw, 5rem)",
        borderTop: `1px solid ${BD}`,
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "clamp(120px, 16%, 200px) 1fr",
          gap: "clamp(2rem, 4vw, 4rem)",
        }}>
          <div style={{ paddingTop: 4 }}>{label("Reflection")}</div>
          <div style={{ maxWidth: "60ch" }}>
            <blockquote style={{ margin: 0, marginBottom: "clamp(1.5rem, 3vw, 2.5rem)" }}>
              <p style={{
                fontFamily: C, fontWeight: 300, fontStyle: "italic",
                fontSize: "clamp(1.375rem, 2.5vw, 2rem)",
                lineHeight: 1.35, color: IN2, margin: 0,
              }}>
                Design is not just about reducing friction, but about aligning systems, strategy, and experience to create meaningful, scalable impact.
              </p>
            </blockquote>
            <p style={{ fontFamily: S, fontSize: 15, color: MUT, lineHeight: 1.75, margin: 0, marginBottom: 18 }}>
              This project highlighted that improving performance at scale requires more than optimising individual touchpoints — it requires rethinking the system as a whole.
            </p>
            <p style={{ fontFamily: S, fontSize: 15, color: MUT, lineHeight: 1.75, margin: 0 }}>
              What initially appeared as a conversion issue revealed deeper structural challenges across product strategy, technical dependencies, and organisational ways of working. Addressing these required not only design changes, but closer collaboration across product, tech, and business teams — repositioning design as a strategic partner rather than an execution function.
            </p>
          </div>
        </div>
      </section>

      {/* ── Case study footer ─────────────────────────────────────────────── */}
      <footer style={{
        borderTop: `1px solid ${BD}`,
        padding: "clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 5rem)",
      }}>
        <p style={{ fontFamily: S, fontSize: 14, color: MUT, margin: 0, marginBottom: 24, maxWidth: "48ch", lineHeight: 1.65 }}>
          Available for product design, service design, and strategic design work.
        </p>
        <a
          href="mailto:hello@thomasrackowecork.com"
          style={{
            fontFamily: C, fontWeight: 300,
            fontSize: "clamp(1.75rem, 4vw, 3rem)",
            color: INK, textDecoration: "none",
            display: "block", letterSpacing: "-0.01em", lineHeight: 1.1,
            marginBottom: "clamp(2rem, 4vw, 3.5rem)",
          }}
        >
          hello@thomasrackowecork.com
        </a>
        <div style={{
          borderTop: `1px solid ${BD}`, paddingTop: 20,
          display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12,
        }}>
          <a href="https://linkedin.com/in/thomasrackowecork" style={{ fontFamily: S, fontSize: 13, color: FNT, textDecoration: "none" }}>LinkedIn ↗</a>
          <span style={{ fontFamily: M, fontSize: 10, color: FNT, letterSpacing: "0.08em" }}>© 2026 Thomas Rackowe Cork</span>
        </div>
      </footer>

      {/* ── Direction label ───────────────────────────────────────────────── */}
      <div style={{
        position: "fixed", bottom: 16, right: 16, zIndex: 200,
        background: ACC, color: GR,
        fontFamily: M, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.12em",
        padding: "8px 14px",
      }}>
        D — Strategic Editorial
      </div>

    </div>
  );
}
