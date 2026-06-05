export const metadata = { title: "Direction A — Editorial" };

const C = "var(--font-cormorant), Georgia, serif";
const M = "var(--font-geist-mono), monospace";
const S = "var(--font-inter), system-ui, sans-serif";

const CANVAS   = "#F5F1EC";
const INK      = "#1A1714";
const INK2     = "#4A4542";
const MUTED    = "#6B6560";
const FAINT    = "#A8A09A";
const BORDER   = "#DDD8D2";

/* ── projects ─────────────────────────────────────────────────────────── */
const projects = [
  {
    n: "01",
    left: ["Proximus", "2022–23"],
    title: "Recovering Declining eShare",
    desc: "The decline was not driven by a single issue — it was a structural mismatch between the digital experience, user expectations, and business strategy. We redesigned the ordering model from its foundations.",
    outcome: "+17% completed orders",
  },
  {
    n: "02",
    left: ["Proximus", "2023"],
    title: "Scaling Onboarding for the eSIM Era",
    desc: "eSIM exposed a fundamental mismatch between technology and operations. We transformed mobile onboarding from a postal process into a fully digital activation system connecting provisioning, activation, and device transfer.",
    outcome: "14,000+ activations / month one",
  },
  {
    n: "03",
    left: ["Arteïa", "2022"],
    title: "Redefining Product Strategy at Arteïa",
    desc: "What began as an effort to extend functionality revealed a deeper challenge: the product's value proposition was tied to a trend that was no longer sustainable. We recentred the platform around private collectors.",
    outcome: "Repositioned product direction",
  },
  {
    n: "04",
    left: ["Proximus", "2024–present"],
    title: "Rebuilding the Foundations of Proximus+",
    desc: "Redefining how product management, support, and self-service operate within a more scalable ecosystem — simplifying complexity and building foundations that can evolve alongside future technologies.",
    outcome: "In progress",
    inProgress: true,
  },
];

/* ── metrics ───────────────────────────────────────────────────────────── */
const metrics = [
  { value: "+17%",        label: "Completed orders",       context: "eShare ordering model redesign" },
  { value: "14,000+",     label: "eSIM activations",       context: "In the first month" },
  { value: "+100%",       label: "Self-installation",      context: "Adoption increase" },
  { value: "Days → Min.", label: "Activation time",        context: "Physical to fully digital" },
];

export default function DirectionA() {
  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 100,
      overflowY: "auto", backgroundColor: CANVAS,
      fontFamily: S, color: INK,
      WebkitFontSmoothing: "antialiased",
    }}>

      {/* ── Navigation ───────────────────────────────────────────────── */}
      <header style={{
        position: "absolute", top: 0, left: 0, right: 0, zIndex: 10,
        padding: "0 clamp(1.5rem, 5vw, 5rem)",
        height: 56, display: "flex", alignItems: "center",
        justifyContent: "space-between",
      }}>
        <a href="#" style={{ fontFamily: S, fontSize: 13, color: MUTED, letterSpacing: "-0.01em", textDecoration: "none" }}>
          Thomas Rackowe Cork
        </a>
        <nav style={{ display: "flex", gap: 32 }}>
          {["Work", "About"].map(l => (
            <a key={l} href="#" style={{ fontFamily: S, fontSize: 13, color: FAINT, textDecoration: "none" }}>{l}</a>
          ))}
        </nav>
      </header>

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section style={{
        minHeight: "100vh",
        display: "flex", flexDirection: "column", justifyContent: "flex-end",
        padding: "0 clamp(1.5rem, 5vw, 5rem)",
        paddingBottom: "clamp(3rem, 6vw, 5rem)",
      }}>
        {/* The upper space is deliberate — editorial silence */}
        <div style={{ maxWidth: 1080 }}>
          <p style={{ fontFamily: M, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em", color: FAINT, marginBottom: "clamp(1.5rem, 3vw, 2.5rem)" }}>
            Senior Product Designer
          </p>
          <h1 style={{
            fontFamily: C, fontWeight: 300,
            fontSize: "clamp(3.5rem, 8vw, 8.5rem)",
            lineHeight: 0.95, color: INK,
            margin: 0, marginBottom: "clamp(1.5rem, 3vw, 2.5rem)",
            letterSpacing: "-0.02em",
          }}>
            The brief is<br />rarely the<br />problem.
          </h1>
          <p style={{ fontFamily: S, fontSize: "clamp(1rem, 1.5vw, 1.125rem)", color: MUTED, lineHeight: 1.65, maxWidth: 480, margin: 0 }}>
            I design products, services, and systems from the point where the real challenge becomes clear.
          </p>
        </div>
      </section>

      {/* ── Section divider ──────────────────────────────────────────── */}
      <div style={{ padding: "0 clamp(1.5rem, 5vw, 5rem)" }}>
        <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 14, display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <span style={{ fontFamily: M, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.12em", color: FAINT }}>Selected work</span>
          <span style={{ fontFamily: M, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.12em", color: FAINT }}>04 projects · 2022–present</span>
        </div>
      </div>

      {/* ── Project rows (annotation system) ─────────────────────────── */}
      <div style={{ padding: "0 clamp(1.5rem, 5vw, 5rem)" }}>
        {projects.map((p) => (
          <div key={p.n} style={{
            borderTop: `1px solid ${BORDER}`,
            padding: "clamp(2rem, 4vw, 3.5rem) 0",
            display: "grid",
            gridTemplateColumns: "clamp(100px, 14%, 160px) 1fr",
            gap: "clamp(1.5rem, 3vw, 3rem)",
          }}>
            {/* Left annotation column */}
            <div style={{ paddingTop: 4 }}>
              <p style={{ fontFamily: M, fontSize: 11, color: FAINT, marginBottom: 8 }}>{p.n}</p>
              {p.left.map(l => (
                <p key={l} style={{ fontFamily: S, fontSize: 12, color: FAINT, marginBottom: 2, lineHeight: 1.4 }}>{l}</p>
              ))}
            </div>

            {/* Right content column */}
            <div style={{ maxWidth: 760 }}>
              <h2 style={{
                fontFamily: C, fontWeight: 400,
                fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                lineHeight: 1.2, color: INK,
                margin: 0, marginBottom: 16,
              }}>
                {p.title}
              </h2>
              <p style={{ fontFamily: S, fontSize: 15, color: INK2, lineHeight: 1.65, marginBottom: 20, maxWidth: "65ch" }}>
                {p.desc}
              </p>
              <div style={{ display: "flex", alignItems: "baseline", gap: 20 }}>
                <span style={{
                  fontFamily: M, fontSize: 10, textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: p.inProgress ? MUTED : FAINT,
                }}>
                  {p.outcome}
                </span>
                {!p.inProgress && (
                  <a href="#" style={{ fontFamily: S, fontSize: 13, color: FAINT, textDecoration: "none" }}>
                    View case study →
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Metrics (no cards — numbers stand alone) ─────────────────── */}
      <section style={{ padding: "clamp(3rem, 6vw, 6rem) clamp(1.5rem, 5vw, 5rem)" }}>
        <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 14, marginBottom: "clamp(2.5rem, 4vw, 4rem)" }}>
          <span style={{ fontFamily: M, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.12em", color: FAINT }}>Selected outcomes</span>
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "clamp(1rem, 2vw, 2rem)",
        }}>
          {metrics.map((m, i) => (
            <div key={m.label} style={{
              borderLeft: i > 0 ? `1px solid ${BORDER}` : undefined,
              paddingLeft: i > 0 ? "clamp(1rem, 2vw, 2rem)" : 0,
            }}>
              <p style={{
                fontFamily: C, fontWeight: 300,
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                lineHeight: 1.0, color: INK,
                margin: 0, marginBottom: 14, letterSpacing: "-0.02em",
              }}>
                {m.value}
              </p>
              <p style={{ fontFamily: M, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.12em", color: MUTED, marginBottom: 6 }}>{m.label}</p>
              <p style={{ fontFamily: S, fontSize: 12, color: FAINT, lineHeight: 1.4 }}>{m.context}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Project images (hover treatment illustrated statically) ───── */}
      <section style={{ padding: "0 clamp(1.5rem, 5vw, 5rem) clamp(3rem, 6vw, 5rem)" }}>
        <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 14, marginBottom: "clamp(2rem, 3vw, 3rem)" }}>
          <span style={{ fontFamily: M, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.12em", color: FAINT }}>Work — imagery treatment</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
          {[
            { src: "/assets/esim-hero.png", bg: "#4A5547", title: "eSIM" },
            { src: "/assets/eshare-hero.png", bg: "#C4A882", title: "eShare" },
          ].map(img => (
            <div key={img.title} style={{ position: "relative", aspectRatio: "16/10", backgroundColor: img.bg, overflow: "hidden" }}>
              <img
                src={img.src}
                alt={img.title}
                style={{ width: "100%", height: "100%", objectFit: "cover", filter: "saturate(0.85)" }}
              />
              <div style={{
                position: "absolute", bottom: 16, left: 16,
                fontFamily: M, fontSize: 10, textTransform: "uppercase",
                letterSpacing: "0.12em", color: "rgba(245,241,236,0.75)",
              }}>
                {img.title}
              </div>
            </div>
          ))}
        </div>
        <p style={{ fontFamily: S, fontSize: 12, color: FAINT, marginTop: 12, lineHeight: 1.5, maxWidth: "65ch" }}>
          In the live site, project images appear on hover within the work list rows — they are evidence of work, not decoration.
        </p>
      </section>

      {/* ── Pull quote ────────────────────────────────────────────────── */}
      <section style={{
        padding: "clamp(2rem, 4vw, 4rem) clamp(1.5rem, 5vw, 5rem)",
        display: "grid",
        gridTemplateColumns: "clamp(100px, 14%, 160px) 1fr",
        gap: "clamp(1.5rem, 3vw, 3rem)",
      }}>
        <div style={{ paddingTop: 6 }}>
          <span style={{ fontFamily: M, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.12em", color: FAINT }}>Reflection</span>
        </div>
        <blockquote style={{ margin: 0, maxWidth: "60ch" }}>
          <p style={{
            fontFamily: C, fontWeight: 300, fontStyle: "italic",
            fontSize: "clamp(1.375rem, 2.5vw, 2rem)",
            lineHeight: 1.35, color: INK2, margin: 0, marginBottom: 20,
          }}>
            Design is not just about improving experiences, but about redefining them when the underlying assumptions no longer hold.
          </p>
          <cite style={{ fontFamily: M, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.12em", color: FAINT, fontStyle: "normal" }}>
            — Arteïa · Reflection
          </cite>
        </blockquote>
      </section>

      {/* ── About snippet ─────────────────────────────────────────────── */}
      <section style={{
        padding: "clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 5rem)",
        borderTop: `1px solid ${BORDER}`,
        display: "grid",
        gridTemplateColumns: "clamp(100px, 14%, 160px) 1fr",
        gap: "clamp(1.5rem, 3vw, 3rem)",
      }}>
        <div style={{ paddingTop: 4 }}>
          <span style={{ fontFamily: M, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.12em", color: FAINT }}>About</span>
        </div>
        <div style={{ maxWidth: "65ch" }}>
          <p style={{ fontFamily: S, fontSize: 16, color: INK2, lineHeight: 1.7, margin: 0, marginBottom: 24 }}>
            Before moving into design, I worked in the contemporary art world as an art advisor, researcher, and artist liaison. My background in social anthropology trained me to look beyond surface behaviour — to understand the cultural, emotional, and systemic factors that drive decision-making.
          </p>
          <p style={{ fontFamily: S, fontSize: 16, color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Today, that translates into a research-led practice grounded in context, critical thinking, and real-world behavioural insight — working at the intersection of product design, service design, and systems thinking.
          </p>
        </div>
      </section>

      {/* ── Footer — large display name à la Pentagram ────────────────── */}
      <footer style={{
        borderTop: `1px solid ${BORDER}`,
        padding: "clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 5rem) clamp(2rem, 4vw, 3rem)",
      }}>
        {/* Display name */}
        <p style={{
          fontFamily: C, fontWeight: 300,
          fontSize: "clamp(3.5rem, 9vw, 9rem)",
          lineHeight: 0.9, color: INK,
          letterSpacing: "-0.03em",
          margin: 0, marginBottom: "clamp(2rem, 4vw, 4rem)",
          opacity: 0.88,
        }}>
          Thomas<br />Rackowe Cork
        </p>
        {/* Functional strip */}
        <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 20, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <a href="mailto:hello@thomasrackowecork.com" style={{ fontFamily: S, fontSize: 13, color: MUTED, textDecoration: "none" }}>
            hello@thomasrackowecork.com
          </a>
          <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
            <a href="https://linkedin.com/in/thomasrackowecork" style={{ fontFamily: S, fontSize: 13, color: FAINT, textDecoration: "none" }}>LinkedIn ↗</a>
            <span style={{ fontFamily: S, fontSize: 13, color: FAINT }}>© 2026</span>
          </div>
        </div>
      </footer>

      {/* ── Direction label ───────────────────────────────────────────── */}
      <div style={{
        position: "fixed", bottom: 16, right: 16, zIndex: 200,
        background: INK, color: CANVAS,
        fontFamily: M, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.12em",
        padding: "8px 14px",
      }}>
        A — Editorial
      </div>

    </div>
  );
}
