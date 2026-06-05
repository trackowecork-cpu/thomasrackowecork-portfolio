export const metadata = { title: "Direction C — Distinctive" };

const C  = "var(--font-cormorant), Georgia, serif";
const M  = "var(--font-geist-mono), monospace";
const S  = "var(--font-inter), system-ui, sans-serif";

const GROUND  = "#0D0B0A";
const RAISED  = "#131110";
const BORDER  = "#1F1C1A";
const INK     = "#F5F1EC";
const INK2    = "#DDD8D2";
const MUTED   = "#A8A09A";
const FAINT   = "#5C5652";

// Project field colours — each project has its own identity
const fields = {
  esim:    { border: "#3A5244", bg: "#4A5547" },
  eshare:  { border: "#8B6B42", bg: "#C4A882" },
  arteia:  { border: "#4A3020", bg: "#231A14" },
  proximus:{ border: "#A0411A", bg: "#C96444" },
};

const projects = [
  {
    key: "eshare", n: "01",
    company: "Proximus", year: "2022–23",
    title: "Recovering Declining eShare",
    desc: "A structural mismatch between experience, user expectations, and business strategy. The challenge was not to optimise the checkout — but to redefine the ordering model.",
    image: "/assets/eshare-hero.png",
    href: "#",
  },
  {
    key: "esim", n: "02",
    company: "Proximus", year: "2023",
    title: "Scaling Onboarding for the eSIM Era",
    desc: "The shift to eSIM was not driven by consumer demand — it was set externally, by manufacturers redefining connectivity. We had to meet them there.",
    image: "/assets/esim-hero.png",
    href: "#",
  },
  {
    key: "arteia", n: "03",
    company: "Arteïa", year: "2022",
    title: "Redefining Product Strategy at Arteïa",
    desc: "The platform was built around a trend that was no longer sustainable. The challenge was not to improve the interface — but to redefine the product itself.",
    image: "/assets/arteia-hero.png",
    href: "#",
  },
  {
    key: "proximus", n: "04",
    company: "Proximus", year: "2024–present",
    title: "Rebuilding the Foundations of Proximus+",
    desc: "Redefining product management, support, and self-service within a more scalable ecosystem. The initiative is in progress.",
    image: "/assets/proximus-hero.png",
    inProgress: true,
  },
];

export default function DirectionC() {
  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 100,
      overflowY: "auto", backgroundColor: GROUND,
      fontFamily: S, color: INK,
      WebkitFontSmoothing: "antialiased",
    }}>

      {/* ── Navigation — almost invisible ────────────────────────────── */}
      <header style={{
        position: "absolute", top: 0, left: 0, right: 0, zIndex: 10,
        padding: "24px clamp(1.5rem, 5vw, 5rem)",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <span style={{ fontFamily: M, fontSize: 10, letterSpacing: "0.3em", color: FAINT }}>
          T&thinsp;R&thinsp;C
        </span>
        <a href="#work" style={{ fontFamily: S, fontSize: 13, color: FAINT, textDecoration: "none" }}>Work</a>
      </header>

      {/* ── Hero — inverted hierarchy (statement → name) ──────────────── */}
      <section style={{
        minHeight: "100vh",
        display: "flex", flexDirection: "column",
        padding: "0 clamp(1.5rem, 5vw, 5rem)",
        overflow: "hidden",
      }}>
        {/* Upper: positioning statement */}
        <div style={{
          flex: 1,
          display: "flex", flexDirection: "column", justifyContent: "flex-end",
          paddingBottom: "clamp(2rem, 4vw, 4rem)",
          paddingTop: 80,
        }}>
          <p style={{ fontFamily: M, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em", color: FAINT, marginBottom: "clamp(1.5rem, 3vw, 2.5rem)" }}>
            Senior Product Designer
          </p>
          <p style={{
            fontFamily: S, fontSize: "clamp(1rem, 1.4vw, 1.125rem)",
            color: MUTED, lineHeight: 1.7,
            maxWidth: "44ch", margin: 0,
          }}>
            I design products, services, and systems from the point where the real challenge becomes clear — questioning assumptions, rebuilding models, creating foundations that scale.
          </p>
        </div>

        {/* Divider */}
        <div style={{ borderTop: `1px solid ${BORDER}` }} />

        {/* Lower: name at architectural scale */}
        <div style={{ paddingTop: "clamp(1rem, 2vw, 1.5rem)", paddingBottom: "clamp(0.5rem, 1.5vw, 1rem)" }}>
          <h1 style={{
            fontFamily: C, fontWeight: 300,
            fontSize: "clamp(5rem, 12vw, 13rem)",
            lineHeight: 0.88,
            letterSpacing: "-0.03em",
            color: INK,
            margin: 0,
            opacity: 0.92,
            // Break naturally at viewport width
            whiteSpace: "nowrap",
          }}>
            The brief is<br />
            <span style={{ fontFamily: C, fontWeight: 300, color: INK, opacity: 0.55 }}>
              rarely the problem.
            </span>
          </h1>
        </div>
      </section>

      {/* ── Work — large typographic blocks ──────────────────────────── */}
      <section id="work" style={{ padding: "0 clamp(1.5rem, 5vw, 5rem)" }}>
        <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 14, marginBottom: "clamp(2rem, 4vw, 4rem)", display: "flex", justifyContent: "space-between" }}>
          <span style={{ fontFamily: M, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.12em", color: FAINT }}>Selected work</span>
          <span style={{ fontFamily: M, fontSize: 10, color: FAINT }}>04 projects</span>
        </div>

        {projects.map((p, i) => (
          <div key={p.key} style={{
            marginBottom: i < projects.length - 1 ? "clamp(2.5rem, 5vw, 5rem)" : 0,
          }}>
            <div style={{
              borderLeft: `3px solid ${fields[p.key as keyof typeof fields].border}`,
              paddingLeft: "clamp(1.25rem, 2.5vw, 2rem)",
            }}>
              {/* Metadata row */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "clamp(0.75rem, 1.5vw, 1rem)" }}>
                <span style={{ fontFamily: M, fontSize: 10, color: FAINT }}>{p.n}</span>
                <span style={{ fontFamily: M, fontSize: 10, color: FAINT }}>
                  {p.company} · {p.year}
                  {p.inProgress && <span style={{ color: MUTED, marginLeft: 8 }}>In progress</span>}
                </span>
              </div>

              {/* Title */}
              <h2 style={{
                fontFamily: C, fontWeight: 400,
                fontSize: "clamp(2rem, 4.5vw, 4.5rem)",
                lineHeight: 1.05, color: INK,
                margin: 0, marginBottom: "clamp(1rem, 2vw, 1.5rem)",
                letterSpacing: "-0.02em",
              }}>
                {p.href ? <a href={p.href} style={{ color: "inherit", textDecoration: "none" }}>{p.title}</a> : p.title}
              </h2>

              {/* Description + image row */}
              <div style={{
                display: "grid",
                gridTemplateColumns: "1fr clamp(160px, 30%, 300px)",
                gap: "clamp(1.5rem, 3vw, 3rem)",
                alignItems: "start",
              }}>
                <p style={{ fontFamily: S, fontSize: "clamp(0.875rem, 1.2vw, 1rem)", color: MUTED, lineHeight: 1.7, margin: 0, maxWidth: "55ch" }}>
                  {p.desc}
                </p>
                <div style={{
                  aspectRatio: "4/3",
                  backgroundColor: fields[p.key as keyof typeof fields].bg,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <img
                    src={p.image}
                    alt={p.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", filter: "saturate(0.8) brightness(0.95)" }}
                  />
                </div>
              </div>

              {p.href && (
                <a href={p.href} style={{
                  display: "inline-block", marginTop: 20,
                  fontFamily: S, fontSize: 13, color: FAINT, textDecoration: "none",
                }}>
                  Read case study →
                </a>
              )}
            </div>
          </div>
        ))}
      </section>

      {/* ── Editorial case study excerpt — eShare ─────────────────────── */}
      <section style={{
        margin: "clamp(4rem, 8vw, 8rem) 0",
        padding: "clamp(3rem, 6vw, 6rem) clamp(1.5rem, 5vw, 5rem)",
        backgroundColor: RAISED,
        borderTop: `1px solid ${BORDER}`,
        borderBottom: `1px solid ${BORDER}`,
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "clamp(80px, 12%, 140px) 1fr",
          gap: "clamp(1.5rem, 3vw, 3rem)",
          marginBottom: "clamp(2.5rem, 5vw, 5rem)",
        }}>
          <span style={{ fontFamily: M, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.12em", color: FAINT, paddingTop: 6 }}>Approach</span>
          <div>
            <p style={{ fontFamily: M, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.12em", color: FAINT, marginBottom: 16 }}>
              eShare — Proximus · 2022–23
            </p>
            <h3 style={{
              fontFamily: C, fontWeight: 300,
              fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
              lineHeight: 1.15, color: INK,
              margin: 0, letterSpacing: "-0.01em",
            }}>
              The challenge was not to optimise the checkout, but to redefine the ordering model.
            </h3>
          </div>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "clamp(80px, 12%, 140px) 1fr",
          gap: "clamp(1.5rem, 3vw, 3rem)",
          marginBottom: "clamp(2rem, 4vw, 4rem)",
        }}>
          <span style={{ fontFamily: M, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.12em", color: FAINT, paddingTop: 4 }}>Context</span>
          <p style={{ fontFamily: S, fontSize: "clamp(0.9375rem, 1.3vw, 1rem)", color: MUTED, lineHeight: 1.75, margin: 0, maxWidth: "65ch" }}>
            Proximus was experiencing a sustained decline in its digital sales share, alongside an increase in support calls — signalling a breakdown in the digital ordering experience. The existing flows were overly complex, inconsistent, and designed around edge cases rather than the majority of users.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "clamp(80px, 12%, 140px) 1fr",
          gap: "clamp(1.5rem, 3vw, 3rem)",
          marginBottom: "clamp(2rem, 4vw, 4rem)",
        }}>
          <span style={{ fontFamily: M, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.12em", color: FAINT, paddingTop: 4 }}>Principle</span>
          <p style={{
            fontFamily: C, fontWeight: 300, fontStyle: "italic",
            fontSize: "clamp(1.25rem, 2.5vw, 2rem)",
            lineHeight: 1.35, color: INK2, margin: 0,
          }}>
            Design is not just about reducing friction, but about aligning systems, strategy, and experience to create meaningful, scalable impact.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "clamp(80px, 12%, 140px) 1fr",
          gap: "clamp(1.5rem, 3vw, 3rem)",
        }}>
          <span style={{ fontFamily: M, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.12em", color: FAINT, paddingTop: 4 }}>Impact</span>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "clamp(1rem, 2vw, 2rem)" }}>
            {[
              { v: "+17%", l: "Completed orders" },
              { v: "+15%", l: "Identification completion" },
              { v: "+100%", l: "Self-installation adoption" },
            ].map((m, i) => (
              <div key={m.l} style={{
                borderLeft: i > 0 ? `1px solid ${BORDER}` : undefined,
                paddingLeft: i > 0 ? "clamp(1rem, 2vw, 1.5rem)" : 0,
              }}>
                <p style={{
                  fontFamily: C, fontWeight: 300,
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  lineHeight: 1.0, color: INK,
                  margin: 0, marginBottom: 10, letterSpacing: "-0.02em",
                }}>
                  {m.v}
                </p>
                <p style={{ fontFamily: M, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.1em", color: FAINT }}>{m.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ─────────────────────────────────────────────────────── */}
      <section style={{ padding: "0 clamp(1.5rem, 5vw, 5rem) clamp(4rem, 8vw, 8rem)" }}>
        <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 14, marginBottom: "clamp(2.5rem, 5vw, 5rem)" }}>
          <span style={{ fontFamily: M, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.12em", color: FAINT }}>Background</span>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "clamp(80px, 12%, 140px) 1fr",
          gap: "clamp(1.5rem, 3vw, 3rem)",
        }}>
          <span style={{ fontFamily: M, fontSize: 10, color: FAINT, paddingTop: 6 }}>01</span>
          <div>
            <p style={{
              fontFamily: C, fontWeight: 300,
              fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
              lineHeight: 1.3, color: INK2,
              margin: 0, marginBottom: "clamp(1.5rem, 3vw, 2.5rem)",
              maxWidth: "22ch",
            }}>
              Before product design, I worked in the contemporary art world. Before that, social anthropology.
            </p>
            <p style={{ fontFamily: S, fontSize: 15, color: MUTED, lineHeight: 1.75, maxWidth: "60ch", margin: 0 }}>
              Both disciplines taught me to look beneath surface behaviour — to understand the cultural, emotional, and systemic factors that drive decisions. That translates directly into how I approach product and service design: not as a craft of interfaces, but as a practice of understanding systems and the people inside them.
            </p>
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────────────── */}
      <footer style={{
        borderTop: `1px solid ${BORDER}`,
        padding: "clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 5rem)",
      }}>
        <p style={{ fontFamily: S, fontSize: "clamp(1rem, 1.5vw, 1.25rem)", color: MUTED, margin: 0, marginBottom: "clamp(2rem, 4vw, 3rem)", maxWidth: "50ch", lineHeight: 1.6 }}>
          Available for product design, service design, and strategic design work. Particularly interested in AI-enabled experiences and complex product ecosystems.
        </p>
        <a href="mailto:hello@thomasrackowecork.com" style={{
          fontFamily: C, fontWeight: 300, fontStyle: "italic",
          fontSize: "clamp(1.75rem, 4vw, 3.5rem)",
          color: INK, textDecoration: "none",
          display: "block", marginBottom: "clamp(2rem, 4vw, 3rem)",
          letterSpacing: "-0.01em", lineHeight: 1.1,
        }}>
          hello@thomasrackowecork.com
        </a>
        <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 20, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <a href="https://linkedin.com/in/thomasrackowecork" style={{ fontFamily: S, fontSize: 13, color: FAINT, textDecoration: "none" }}>LinkedIn ↗</a>
          <span style={{ fontFamily: M, fontSize: 10, color: FAINT, letterSpacing: "0.08em" }}>© 2026 Thomas Rackowe Cork</span>
        </div>
      </footer>

      {/* ── Direction label ───────────────────────────────────────────── */}
      <div style={{
        position: "fixed", bottom: 16, right: 16, zIndex: 200,
        background: "transparent", color: FAINT,
        border: `1px solid ${BORDER}`,
        fontFamily: M, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.12em",
        padding: "8px 14px",
      }}>
        C — Distinctive
      </div>

    </div>
  );
}
