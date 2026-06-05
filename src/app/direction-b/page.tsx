export const metadata = { title: "Direction B — Strategic Product Designer" };

const M  = "var(--font-geist-mono), monospace";
const S  = "var(--font-inter), system-ui, sans-serif";

const GROUND   = "#0E0D0C";
const RAISED   = "#161412";
const BORDER   = "#252220";
const INK      = "#F5F1EC";
const INK2     = "#DDD8D2";
const MUTED    = "#A8A09A";
const FAINT    = "#5C5652";
const ACCENT   = "#C4A882";

const projects = [
  {
    n: "01", company: "Proximus", year: "2022–23",
    title: "Recovering Declining eShare",
    desc: "Restructured the end-to-end digital ordering experience — simplifying journeys, introducing personalised entry points, redesigning identification and self-installation steps.",
    metric: "+17%", metricLabel: "completed orders",
    disciplines: ["Product Design", "Service Design", "Strategy"],
    href: "#",
  },
  {
    n: "02", company: "Proximus", year: "2023",
    title: "Scaling Onboarding for the eSIM Era",
    desc: "Transformed mobile onboarding from a physical, postal process into a fully digital activation system — connecting provisioning, SIM swap, and device transfer into a single scalable model.",
    metric: "14,000+", metricLabel: "eSIM activations in month one",
    disciplines: ["Product Design", "Systems", "Service Design"],
    href: "#",
  },
  {
    n: "03", company: "Arteïa", year: "2022",
    title: "Redefining Product Strategy at Arteïa",
    desc: "Repositioned an NFT-dependent art platform around private collectors — redefining the product model, value proposition, and market focus rather than extending features that no longer served the right audience.",
    metric: null, metricLabel: "Product repositioning",
    disciplines: ["Product Strategy", "Research", "Service Design"],
    href: "#",
  },
  {
    n: "04", company: "Proximus", year: "2024–present",
    title: "Rebuilding the Foundations of Proximus+",
    desc: "Redefining product management, support, and self-service for the future of Proximus+, simplifying complexity and building scalable foundations for a new product ecosystem.",
    metric: null, metricLabel: "In progress",
    inProgress: true,
    disciplines: ["Product Design", "Systems", "Platform"],
    href: null,
  },
];

const impactMetrics = [
  { value: "+17%",        label: "Completed orders",    sub: "eShare" },
  { value: "14,000+",     label: "eSIM activations",    sub: "Month one" },
  { value: "+100%",       label: "Self-install adoption", sub: "eShare" },
  { value: "Days → Min.", label: "Activation time",     sub: "eSIM" },
];

export default function DirectionB() {
  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 100,
      overflowY: "auto", backgroundColor: GROUND,
      fontFamily: S, color: INK,
      WebkitFontSmoothing: "antialiased",
    }}>

      {/* ── Navigation ───────────────────────────────────────────────── */}
      <header style={{
        position: "absolute", top: 0, left: 0, right: 0, zIndex: 10,
        padding: "0 clamp(1.5rem, 5vw, 5rem)",
        height: 52, display: "flex", alignItems: "center",
        justifyContent: "space-between",
      }}>
        <a href="#" style={{ fontFamily: M, fontSize: 11, color: FAINT, letterSpacing: "0.1em", textDecoration: "none" }}>
          TRC
        </a>
        <nav style={{ display: "flex", gap: 28, alignItems: "center" }}>
          {["Work", "About"].map(l => (
            <a key={l} href="#" style={{ fontFamily: S, fontSize: 13, color: FAINT, textDecoration: "none" }}>{l}</a>
          ))}
          <a href="mailto:hello@thomasrackowecork.com" style={{ fontFamily: S, fontSize: 13, color: FAINT, textDecoration: "none", borderLeft: `1px solid ${BORDER}`, paddingLeft: 24, marginLeft: 4 }}>
            hello@thomasrackowecork.com
          </a>
        </nav>
      </header>

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section style={{
        minHeight: "100vh",
        display: "flex", flexDirection: "column",
        padding: "0 clamp(1.5rem, 5vw, 5rem)",
      }}>
        {/* Identity + headline: upper 60% */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: 80 }}>
          <p style={{ fontFamily: M, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em", color: FAINT, marginBottom: 28 }}>
            Senior Product Designer
          </p>
          <h1 style={{
            fontFamily: S, fontWeight: 700,
            fontSize: "clamp(2.75rem, 6vw, 6rem)",
            lineHeight: 1.0, color: INK,
            margin: 0, marginBottom: 28,
            letterSpacing: "-0.03em",
            maxWidth: "14ch",
          }}>
            The brief is rarely the problem.
          </h1>
          <p style={{ fontFamily: S, fontSize: "clamp(1rem, 1.4vw, 1.125rem)", color: MUTED, lineHeight: 1.65, maxWidth: "42ch", margin: 0 }}>
            I design products, services, and systems from the point where the real challenge becomes clear — questioning assumptions, rebuilding operational models, creating foundations that scale.
          </p>
        </div>

        {/* Impact strip: pinned to bottom */}
        <div style={{ paddingBottom: "clamp(2.5rem, 5vw, 4rem)" }}>
          <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 20, marginBottom: 28, display: "flex", justifyContent: "space-between" }}>
            <span style={{ fontFamily: M, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.12em", color: FAINT }}>Selected outcomes</span>
            <span style={{ fontFamily: M, fontSize: 10, color: FAINT }}>4 projects · 2022–present</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
            {impactMetrics.map((m, i) => (
              <div key={m.label} style={{
                borderLeft: i > 0 ? `1px solid ${BORDER}` : undefined,
                paddingLeft: i > 0 ? "clamp(1rem, 2vw, 2rem)" : 0,
              }}>
                <p style={{
                  fontFamily: S, fontWeight: 700,
                  fontSize: "clamp(1.5rem, 3vw, 2.75rem)",
                  lineHeight: 1.0, color: ACCENT,
                  margin: 0, marginBottom: 10, letterSpacing: "-0.03em",
                }}>
                  {m.value}
                </p>
                <p style={{ fontFamily: M, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.12em", color: MUTED, marginBottom: 4 }}>
                  {m.label}
                </p>
                <p style={{ fontFamily: S, fontSize: 12, color: FAINT }}>{m.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Work list ─────────────────────────────────────────────────── */}
      <section style={{ padding: "0 clamp(1.5rem, 5vw, 5rem)" }}>
        <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 14, marginBottom: 4, display: "flex", justifyContent: "space-between" }}>
          <span style={{ fontFamily: M, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.12em", color: FAINT }}>Work</span>
        </div>

        {projects.map(p => (
          <div key={p.n} style={{
            borderTop: `1px solid ${BORDER}`,
            padding: "clamp(1.5rem, 3vw, 2.5rem) 0",
            display: "grid",
            gridTemplateColumns: "40px 1fr clamp(120px, 18%, 200px)",
            gap: "clamp(1rem, 2vw, 2rem)",
            alignItems: "start",
          }}>
            {/* Number */}
            <span style={{ fontFamily: M, fontSize: 11, color: FAINT, paddingTop: 3 }}>{p.n}</span>

            {/* Content */}
            <div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 10, flexWrap: "wrap" }}>
                <h3 style={{
                  fontFamily: S, fontWeight: 600,
                  fontSize: "clamp(1.1rem, 2vw, 1.375rem)",
                  lineHeight: 1.25, color: INK, margin: 0,
                }}>
                  {p.title}
                </h3>
              </div>
              <p style={{ fontFamily: M, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.1em", color: FAINT, marginBottom: 12 }}>
                {p.company} · {p.year}
                {p.inProgress && <span style={{ color: ACCENT, marginLeft: 8 }}>· In progress</span>}
              </p>
              <p style={{ fontFamily: S, fontSize: 14, color: MUTED, lineHeight: 1.6, margin: 0, maxWidth: "58ch" }}>
                {p.desc}
              </p>
              <div style={{ marginTop: 14, display: "flex", gap: 8, flexWrap: "wrap" }}>
                {p.disciplines.map(d => (
                  <span key={d} style={{ fontFamily: M, fontSize: 10, color: FAINT, textTransform: "uppercase", letterSpacing: "0.08em" }}>{d}</span>
                ))}
              </div>
            </div>

            {/* Metric */}
            <div style={{ textAlign: "right", paddingTop: 2 }}>
              {p.metric ? (
                <>
                  <p style={{ fontFamily: S, fontWeight: 700, fontSize: "clamp(1.25rem, 2.5vw, 1.875rem)", color: ACCENT, margin: 0, marginBottom: 6, letterSpacing: "-0.02em", lineHeight: 1 }}>
                    {p.metric}
                  </p>
                  <p style={{ fontFamily: M, fontSize: 9, textTransform: "uppercase", letterSpacing: "0.1em", color: FAINT, margin: 0 }}>
                    {p.metricLabel}
                  </p>
                </>
              ) : (
                <p style={{ fontFamily: M, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.1em", color: p.inProgress ? ACCENT : FAINT, margin: 0 }}>
                  {p.metricLabel}
                </p>
              )}
              {p.href && (
                <a href={p.href} style={{ display: "block", fontFamily: S, fontSize: 12, color: FAINT, textDecoration: "none", marginTop: 16 }}>
                  View →
                </a>
              )}
            </div>
          </div>
        ))}
      </section>

      {/* ── Case study preview — eShare ───────────────────────────────── */}
      <section style={{
        padding: "clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 5rem)",
        borderTop: `1px solid ${BORDER}`,
      }}>
        <div style={{ marginBottom: "clamp(2rem, 4vw, 4rem)" }}>
          <p style={{ fontFamily: M, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.12em", color: FAINT, marginBottom: 10 }}>
            Case study preview
          </p>
          <h2 style={{ fontFamily: S, fontWeight: 600, fontSize: "clamp(1.375rem, 2.5vw, 2rem)", color: INK, margin: 0, letterSpacing: "-0.02em" }}>
            Recovering Declining eShare
          </h2>
          <p style={{ fontFamily: S, fontSize: 15, color: MUTED, marginTop: 10, lineHeight: 1.6, maxWidth: "60ch", margin: "10px 0 0" }}>
            How we rebuilt Proximus&apos; digital ordering model to reduce friction and restore digital as the primary sales channel.
          </p>
        </div>

        {/* 3-col structure preview */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }}>
          {[
            {
              label: "Challenge",
              body: "The decline was structural — a mismatch between digital experience, user expectations, and business strategy. Not a single broken touchpoint, but a system misaligned at every level.",
            },
            {
              label: "Approach",
              body: "Radical simplification as a design principle. Redesigning for the majority case, not the edge case. Aligning the fiber-first strategy with the digital journey. Fixing identification and installation flows.",
            },
            {
              label: "Impact",
              body: "+17% completed orders. +15% identification completion. +100% self-installation adoption. Significant reduction in support calls. Design repositioned as a strategic partner.",
            },
          ].map((col, i) => (
            <div key={col.label} style={{
              background: i === 2 ? RAISED : "transparent",
              border: `1px solid ${BORDER}`,
              padding: "clamp(1.5rem, 2.5vw, 2rem)",
            }}>
              <p style={{ fontFamily: M, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.12em", color: ACCENT, marginBottom: 14 }}>
                {col.label}
              </p>
              <p style={{ fontFamily: S, fontSize: 14, color: INK2, lineHeight: 1.65, margin: 0 }}>
                {col.body}
              </p>
            </div>
          ))}
        </div>

        {/* Image */}
        <div style={{ marginTop: 2, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
          <div style={{ aspectRatio: "16/9", backgroundColor: "#C4A882", overflow: "hidden" }}>
            <img src="/assets/eshare-hero.png" alt="eShare ordering flow" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "saturate(0.9)" }} />
          </div>
          <div style={{ aspectRatio: "16/9", backgroundColor: "#4A5547", overflow: "hidden" }}>
            <img src="/assets/esim-hero.png" alt="eSIM activation flow" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "saturate(0.9)" }} />
          </div>
        </div>
      </section>

      {/* ── About ─────────────────────────────────────────────────────── */}
      <section style={{
        padding: "clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 5rem)",
        borderTop: `1px solid ${BORDER}`,
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "clamp(2rem, 4vw, 5rem)",
        alignItems: "start",
      }}>
        <div>
          <p style={{ fontFamily: M, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.12em", color: FAINT, marginBottom: 20 }}>About</p>
          <p style={{ fontFamily: S, fontWeight: 600, fontSize: "clamp(1.25rem, 2vw, 1.75rem)", color: INK, lineHeight: 1.3, margin: 0, letterSpacing: "-0.02em" }}>
            Senior Product Designer working at the intersection of product, service, and systems design.
          </p>
        </div>
        <div>
          <p style={{ fontFamily: S, fontSize: 15, color: MUTED, lineHeight: 1.7, margin: 0, marginBottom: 24 }}>
            My background spans social anthropology, the contemporary art world, and product design — disciplines that all depend on understanding systems, people, and the relationships between them.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 24px" }}>
            {["Product Design", "Service Design", "Systems Thinking", "Digital Strategy", "Research", "AI-enabled Experiences"].map(skill => (
              <span key={skill} style={{ fontFamily: S, fontSize: 13, color: INK2, paddingBottom: 8, borderBottom: `1px solid ${BORDER}` }}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────────────── */}
      <footer style={{
        borderTop: `1px solid ${BORDER}`,
        padding: "clamp(1.5rem, 3vw, 2.5rem) clamp(1.5rem, 5vw, 5rem)",
        display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12,
      }}>
        <a href="mailto:hello@thomasrackowecork.com" style={{ fontFamily: S, fontSize: 13, color: MUTED, textDecoration: "none" }}>
          hello@thomasrackowecork.com
        </a>
        <div style={{ display: "flex", gap: 24 }}>
          <a href="https://linkedin.com/in/thomasrackowecork" style={{ fontFamily: S, fontSize: 13, color: FAINT, textDecoration: "none" }}>LinkedIn ↗</a>
          <span style={{ fontFamily: S, fontSize: 13, color: FAINT }}>© 2026 Thomas Rackowe Cork</span>
        </div>
      </footer>

      {/* ── Direction label ───────────────────────────────────────────── */}
      <div style={{
        position: "fixed", bottom: 16, right: 16, zIndex: 200,
        background: ACCENT, color: GROUND,
        fontFamily: M, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.12em",
        padding: "8px 14px",
      }}>
        B — Strategic
      </div>

    </div>
  );
}
