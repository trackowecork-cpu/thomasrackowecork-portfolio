import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import { DirectionENav } from "../../_components/nav";
import { DirectionEFooter } from "../../_components/footer";
import { C, M, S, GR, BD, INK, IN2, MUT, FNT, ACC } from "../../_tokens";
import { getCaseStudy, getAllSlugs, type CaseVisual } from "@/lib/caseStudies";

export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = getCaseStudy(slug);
  if (!data) return {};
  return {
    title: `${data.title} — Thomas Rackowe Cork`,
    description: data.subtitle,
  };
}

// Splits a multiline YAML string into <p> elements, one per blank-line-delimited paragraph.
function Prose({
  text,
  style,
  gap = "1.125rem",
}: {
  text: string;
  style: CSSProperties;
  gap?: string;
}) {
  const chunks = text
    .trim()
    .split(/\n\n+/)
    .map((s) => s.trim())
    .filter(Boolean);
  return (
    <>
      {chunks.map((chunk, i) => (
        <p
          key={i}
          style={{
            ...style,
            margin: 0,
            marginBottom: i < chunks.length - 1 ? gap : 0,
          }}
        >
          {chunk}
        </p>
      ))}
    </>
  );
}

// Renders visuals for a given placement slot. Returns null when the list is empty
// so existing pages with no visuals are unaffected.
function VisualBlock({ visuals }: { visuals: CaseVisual[] }) {
  if (!visuals.length) return null;

  // Group consecutive two-col entries into pairs; orphaned two-col falls back to contained.
  type Item =
    | { kind: 'single'; v: CaseVisual }
    | { kind: 'pair'; a: CaseVisual; b: CaseVisual };

  const items: Item[] = [];
  let i = 0;
  while (i < visuals.length) {
    const v = visuals[i];
    if (
      (v.layout ?? 'contained') === 'two-col' &&
      i + 1 < visuals.length &&
      (visuals[i + 1].layout ?? 'contained') === 'two-col'
    ) {
      items.push({ kind: 'pair', a: v, b: visuals[i + 1] });
      i += 2;
    } else {
      items.push({ kind: 'single', v });
      i++;
    }
  }

  const outerPad: CSSProperties = {
    paddingLeft:   'clamp(1.25rem, 5vw, 5rem)',
    paddingRight:  'clamp(1.25rem, 5vw, 5rem)',
    paddingBottom: 'clamp(2rem, 4vw, 3rem)',
  };
  const captionStyle: CSSProperties = {
    display: 'block',
    fontFamily: M,
    fontSize: 12,
    color: FNT,
    lineHeight: 1.5,
    marginTop: '0.5rem',
  };

  return (
    <>
      {items.map((item, idx) => {
        if (item.kind === 'pair') {
          return (
            <div key={idx} style={outerPad}>
              <div className="cs-ann">
                <div />
                <div style={{ maxWidth: '62ch' }}>
                  <div className="cs-vis-twocol">
                    {[item.a, item.b].map((img, j) => (
                      <div key={j}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={img.src}
                          alt={img.alt ?? ''}
                          style={{ display: 'block', width: '100%', height: 'auto', border: `1px solid ${BD}` }}
                        />
                        {img.caption && <span style={captionStyle}>{img.caption}</span>}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        }

        const { v } = item;
        const layout = v.layout ?? 'contained';

        if (layout === 'full') {
          return (
            <div key={idx} style={outerPad}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={v.src}
                alt={v.alt ?? ''}
                style={{
                  display: 'block', width: '100%',
                  aspectRatio: '16 / 9', objectFit: 'cover', objectPosition: 'center',
                  filter: 'saturate(0.9) brightness(0.95)',
                }}
              />
              {v.caption && <span style={captionStyle}>{v.caption}</span>}
            </div>
          );
        }

        if (layout === 'full-natural') {
          return (
            <div key={idx} style={outerPad}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={v.src}
                alt={v.alt ?? ''}
                style={{
                  display: 'block', width: '100%', height: 'auto',
                  filter: 'saturate(0.9) brightness(0.95)',
                }}
              />
              {v.caption && <span style={captionStyle}>{v.caption}</span>}
            </div>
          );
        }

        // contained (default, and orphaned two-col)
        return (
          <div key={idx} style={outerPad}>
            <div className="cs-ann">
              <div />
              <div style={{ maxWidth: '62ch' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={v.src}
                  alt={v.alt ?? ''}
                  style={{ display: 'block', width: '100%', height: 'auto', border: `1px solid ${BD}` }}
                />
                {v.caption && <span style={captionStyle}>{v.caption}</span>}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = getCaseStudy(slug);
  if (!data) notFound();

  const isFullStudy = !data.status;
  const hasDecisionVisuals = data.solution?.decisions.some(d => d.visual) ?? false;

  const sectionStyle: CSSProperties = {
    padding:
      "clamp(2.75rem, 6vw, 5.5rem) clamp(1.25rem, 5vw, 5rem)",
    borderTop: `1px solid ${BD}`,
  };

  const annLblStyle: CSSProperties = {
    fontFamily: M,
    fontSize: 12,
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    color: ACC,
  };

  const bodyStyle: CSSProperties = {
    fontFamily: S,
    fontSize: "clamp(0.9375rem, 1.3vw, 1rem)",
    color: MUT,
    lineHeight: 1.75,
    margin: 0,
  };

  const decisionTitleStyle: CSSProperties = {
    fontFamily: C,
    fontWeight: 500,
    fontSize: "clamp(1.125rem, 2vw, 1.375rem)",
    lineHeight: 1.2,
    letterSpacing: "-0.01em",
    color: IN2,
    margin: 0,
    marginBottom: "0.75rem",
  };

  const smallBodyStyle: CSSProperties = {
    fontFamily: S,
    fontSize: "clamp(0.875rem, 1.3vw, 0.9375rem)",
    color: MUT,
    lineHeight: 1.72,
    margin: 0,
  };

  return (
    <>
      <style>{`
        .cs {
          position: fixed; inset: 0; z-index: 100;
          overflow-y: auto; background: ${GR};
          font-family: ${S}; color: ${INK};
          -webkit-font-smoothing: antialiased;
        }
        .cs-ann { display: grid; grid-template-columns: 1fr; gap: 1rem; }
        .cs-ann-lbl {
          font-family: ${M}; font-size: 12px;
          text-transform: uppercase; letter-spacing: 0.12em; color: ${ACC};
        }
        @media (min-width: 640px) {
          .cs-ann {
            grid-template-columns: clamp(120px, 15%, 180px) 1fr;
            gap: clamp(2rem, 4vw, 4rem);
          }
        }
        .cs-vis-twocol {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(0.75rem, 1.5vw, 1.25rem);
        }
        @media (min-width: 640px) {
          .cs-vis-twocol { grid-template-columns: 1fr 1fr; }
        }
        .cs-decision {
          border-top: 1px solid ${BD};
          padding: clamp(1.5rem, 3.5vw, 2.75rem) 0;
          display: grid; grid-template-columns: 1fr; gap: 0.75rem;
        }
        .cs-dn {
          font-family: ${M}; font-size: 12px; color: ${FNT};
          display: block; margin-bottom: 0.5rem;
        }
        @media (min-width: 640px) {
          .cs-decision { grid-template-columns: 40px 1fr; gap: 1.5rem; align-items: start; }
          .cs-dn { margin-bottom: 0; padding-top: 6px; }
        }
        a.cs-next-title {
          color: ${INK}; text-decoration: none; display: block;
          transition: color 180ms ease;
        }
        a.cs-next-title:hover { color: ${ACC}; }
        a.cs-back {
          color: ${INK}; text-decoration: none; display: inline-block;
          transition: color 180ms ease;
        }
        a.cs-back:hover { color: ${ACC}; }
        a.cs-email { color: ${MUT}; text-decoration: none; border-bottom: 1px solid ${BD}; }
        a.cs-email:hover { color: ${IN2}; }
      `}</style>

      <div className="cs">
        <DirectionENav />

        {/* ── Header ───────────────────────────────────────────────────────── */}
        <section
          style={{
            padding:
              "clamp(3rem, 7vw, 6rem) clamp(1.25rem, 5vw, 5rem) clamp(1rem, 2vw, 1.5rem)",
          }}
        >
          {data.inProgressBadge && (
            <div
              style={{
                fontFamily: M,
                fontSize: 12,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: ACC,
                marginBottom: "clamp(1rem, 2vw, 1.5rem)",
                display: "inline-block",
              }}
            >
              In progress
            </div>
          )}

          <h1
            style={{
              fontFamily: C,
              fontWeight: 500,
              fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              color: INK,
              margin: 0,
              marginBottom: "clamp(1.125rem, 2.5vw, 1.75rem)",
            }}
          >
            {data.title}
          </h1>

          <p
            style={{
              fontFamily: S,
              fontSize: "clamp(1rem, 1.4vw, 1.0625rem)",
              color: IN2,
              lineHeight: 1.7,
              margin: 0,
              maxWidth: "56ch",
              marginBottom: "clamp(1.75rem, 3.5vw, 2.75rem)",
            }}
          >
            {data.subtitle}
          </p>

          <div
            style={{
              borderTop: `1px solid ${BD}`,
              paddingTop: 16,
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem 2.5rem",
            }}
          >
            {[
              ["Company", data.company],
              ["Role", data.role],
              ["Year", data.timeframe],
            ].map(([k, v]) => (
              <div
                key={k}
                style={{ display: "flex", gap: "0.5rem", alignItems: "baseline" }}
              >
                <span
                  style={{
                    fontFamily: M,
                    fontSize: 12,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: FNT,
                  }}
                >
                  {k}
                </span>
                <span style={{ fontFamily: S, fontSize: 14, color: MUT }}>{v}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Hero image ───────────────────────────────────────────────────── */}
        {data.heroImage && (
          <div
            style={{
              padding:
                "clamp(0.5rem, 1vw, 1rem) clamp(1.25rem, 5vw, 5rem) clamp(2rem, 4vw, 3rem)",
            }}
          >
            <img
              src={data.heroImage}
              alt={data.heroImageAlt}
              style={{
                display: "block",
                width: "100%",
                aspectRatio: "16 / 9",
                objectFit: "cover",
                objectPosition: "center",
                filter: "saturate(0.9) brightness(0.95)",
                border: "none",
                outline: "none",
              }}
            />
          </div>
        )}

        <VisualBlock visuals={data.visuals.filter(v => v.placement === 'after-hero')} />

        {/* ── Overview ─────────────────────────────────────────────────────── */}
        {data.overview && (
          <section
            style={{
              ...sectionStyle,
              borderTop: "none",
              paddingTop: "clamp(3rem, 7vw, 6rem)",
            }}
          >
            <div className="cs-ann">
              <div>
                <span className="cs-ann-lbl">Overview</span>
              </div>
              <div style={{ maxWidth: "62ch" }}>
                <Prose text={data.overview} style={bodyStyle} />
              </div>
            </div>
          </section>
        )}

        <VisualBlock visuals={data.visuals.filter(v => v.placement === 'after-overview')} />

        {/* ── Challenge ────────────────────────────────────────────────────── */}
        {data.challenge && (
          <section style={sectionStyle}>
            <div
              className="cs-ann"
              style={{ marginBottom: "clamp(1.5rem, 3vw, 2.5rem)" }}
            >
              <div>
                <span className="cs-ann-lbl">Challenge</span>
              </div>
              <p
                style={{
                  fontFamily: C,
                  fontWeight: 400,
                  fontSize: "clamp(1.25rem, 2.5vw, 1.875rem)",
                  lineHeight: 1.3,
                  letterSpacing: "-0.01em",
                  color: IN2,
                  margin: 0,
                  maxWidth: "44ch",
                }}
              >
                {data.challenge.quote}
              </p>
            </div>

            <div className="cs-ann">
              <div />
              <div style={{ maxWidth: "62ch" }}>
                <Prose
                  text={data.challenge.body}
                  style={bodyStyle}
                  gap="1.125rem"
                />

                {data.challenge.items.length > 0 && (
                  <div
                    style={{
                      marginTop: "clamp(1.125rem, 2vw, 1.75rem)",
                      marginBottom: data.challenge.statement
                        ? "clamp(1.125rem, 2vw, 1.75rem)"
                        : 0,
                    }}
                  >
                    {data.challenge.items.map((item, i) => (
                      <div
                        key={i}
                        style={{
                          display: "flex",
                          gap: "1rem",
                          marginBottom:
                            i < data.challenge!.items.length - 1
                              ? "0.875rem"
                              : 0,
                          alignItems: "flex-start",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: M,
                            fontSize: 12,
                            color: FNT,
                            flexShrink: 0,
                            paddingTop: 1,
                          }}
                        >
                          0{i + 1}
                        </span>
                        <p style={{ ...smallBodyStyle, lineHeight: 1.65 }}>
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {data.challenge.statement && (
                  <p
                    style={{
                      ...smallBodyStyle,
                      lineHeight: 1.65,
                      color: IN2,
                      fontStyle: "italic",
                    }}
                  >
                    {data.challenge.statement}
                  </p>
                )}
              </div>
            </div>
          </section>
        )}

        <VisualBlock visuals={data.visuals.filter(v => v.placement === 'after-challenge')} />

        {/* ── Solution ─────────────────────────────────────────────────────── */}
        {data.solution && (
          hasDecisionVisuals ? (
            // Decision-block mode: each decision is paired with its own visual.
            // Decisions live outside the section so visuals can break to full width between them.
            <>
              <section style={sectionStyle}>
                <div
                  className="cs-ann"
                  style={{ marginBottom: "clamp(1.75rem, 3.5vw, 3rem)" }}
                >
                  <div>
                    <span className="cs-ann-lbl">Solution</span>
                  </div>
                  <div style={{ maxWidth: "62ch" }}>
                    <Prose text={data.solution.intro} style={bodyStyle} />
                  </div>
                </div>
              </section>
              {data.solution.decisions.map((d) => (
                <div key={d.n}>
                  <div style={{ paddingLeft: 'clamp(1.25rem, 5vw, 5rem)', paddingRight: 'clamp(1.25rem, 5vw, 5rem)' }}>
                    <div className="cs-ann">
                      <div />
                      <div style={{ maxWidth: '62ch' }}>
                        <div className="cs-decision">
                          <span className="cs-dn">{d.n}</span>
                          <div>
                            <p style={decisionTitleStyle}>{d.title}</p>
                            <p style={smallBodyStyle}>{d.body}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {d.visual && <VisualBlock visuals={[d.visual]} />}
                </div>
              ))}
            </>
          ) : (
            // Standard mode: all decisions grouped inside the section, no inline visuals.
            <section style={sectionStyle}>
              <div
                className="cs-ann"
                style={{ marginBottom: "clamp(1.75rem, 3.5vw, 3rem)" }}
              >
                <div>
                  <span className="cs-ann-lbl">Solution</span>
                </div>
                <div style={{ maxWidth: "62ch" }}>
                  <Prose text={data.solution.intro} style={bodyStyle} />
                </div>
              </div>
              {data.solution.decisions.length > 0 && (
                <div className="cs-ann">
                  <div />
                  <div style={{ maxWidth: "62ch" }}>
                    {data.solution.decisions.map((d) => (
                      <div key={d.n} className="cs-decision">
                        <span className="cs-dn">{d.n}</span>
                        <div>
                          <p style={decisionTitleStyle}>{d.title}</p>
                          <p style={smallBodyStyle}>{d.body}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>
          )
        )}

        <VisualBlock visuals={data.visuals.filter(v => v.placement === 'after-solution')} />

        {/* ── Impact ───────────────────────────────────────────────────────── */}
        {data.impact && (
          <section style={sectionStyle}>
            <div
              className="cs-ann"
              style={{ marginBottom: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              <div>
                <span className="cs-ann-lbl">Impact</span>
              </div>
              <p style={{ ...bodyStyle, maxWidth: "62ch", lineHeight: 1.7 }}>
                {data.impact.intro}
              </p>
            </div>

            <div className="cs-ann">
              <div />
              <div style={{ maxWidth: "62ch" }}>
                {/* Numeric metric cards */}
                {data.impact.metrics.map((m) => (
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
                    <span
                      style={{
                        fontFamily: C,
                        fontWeight: 300,
                        fontSize: "clamp(1.625rem, 3.5vw, 2.375rem)",
                        lineHeight: 1.0,
                        color: ACC,
                        display: "block",
                      }}
                    >
                      {m.value}
                    </span>
                    <div style={{ paddingTop: "0.25rem" }}>
                      <p
                        style={{
                          fontFamily: S,
                          fontWeight: 500,
                          fontSize: "clamp(0.875rem, 1.3vw, 0.9375rem)",
                          color: IN2,
                          margin: 0,
                          marginBottom: "0.25rem",
                          lineHeight: 1.4,
                        }}
                      >
                        {m.label}
                      </p>
                      <p
                        style={{
                          fontFamily: S,
                          fontSize: 13,
                          color: FNT,
                          lineHeight: 1.4,
                          margin: 0,
                        }}
                      >
                        {m.note}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Qualitative impact items (no numeric metrics) */}
                {data.impact.items.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      borderTop: `1px solid ${BD}`,
                      padding: "clamp(1.125rem, 2.5vw, 1.75rem) 0",
                      display: "flex",
                      gap: "1rem",
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: M,
                        fontSize: 12,
                        color: FNT,
                        flexShrink: 0,
                        paddingTop: 2,
                      }}
                    >
                      0{i + 1}
                    </span>
                    <p style={{ ...smallBodyStyle, lineHeight: 1.65 }}>
                      {item}
                    </p>
                  </div>
                ))}

                {/* Qualitative closing statement */}
                {data.impact.statement && (
                  <div
                    style={{
                      borderTop: `1px solid ${BD}`,
                      paddingTop: "clamp(1.125rem, 2.5vw, 1.75rem)",
                    }}
                  >
                    <p style={{ ...smallBodyStyle, lineHeight: 1.7 }}>
                      {data.impact.statement}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        <VisualBlock visuals={data.visuals.filter(v => v.placement === 'after-impact')} />

        {/* ── Reflection ───────────────────────────────────────────────────── */}
        {(data.pullQuote || data.reflection) && isFullStudy && (
          <section style={sectionStyle}>
            <div className="cs-ann">
              <div>
                <span className="cs-ann-lbl">Reflection</span>
              </div>
              <div style={{ maxWidth: "62ch" }}>
                {data.pullQuote && (
                  <blockquote
                    style={{ margin: 0, marginBottom: "clamp(1.25rem, 2.5vw, 2rem)" }}
                  >
                    <p
                      style={{
                        fontFamily: C,
                        fontWeight: 300,
                        fontStyle: "italic",
                        fontSize: "clamp(1.25rem, 2.5vw, 1.875rem)",
                        lineHeight: 1.35,
                        color: IN2,
                        margin: 0,
                      }}
                    >
                      {data.pullQuote}
                    </p>
                  </blockquote>
                )}
                {data.reflection && (
                  <Prose text={data.reflection} style={bodyStyle} />
                )}
              </div>
            </div>
          </section>
        )}

        <VisualBlock visuals={data.visuals.filter(v => v.placement === 'after-reflection')} />

        {/* ── Status section (in-progress / in-preparation) ────────────────── */}
        {data.status && (
          <section style={{ ...sectionStyle, borderTop: "none" }}>
            <div className="cs-ann">
              <div>
                <span style={annLblStyle}>Status</span>
              </div>
              <div style={{ maxWidth: "52ch" }}>
                <p style={{ ...bodyStyle, marginBottom: "1.125rem" }}>
                  {data.status === "in-progress"
                    ? "This project is currently in progress. The work is ongoing — a full case study documenting the strategic decisions, design challenges, and outcomes will be published as the project develops."
                    : "This case study is in preparation. Full documentation of the research, design decisions, and outcomes will be published shortly."}
                </p>
                <p style={{ ...bodyStyle, color: FNT }}>
                  In the meantime, feel free to{" "}
                  <a href="mailto:hello@thomasrackowecork.com" className="cs-email">
                    get in touch
                  </a>{" "}
                  if you&apos;d like to discuss the work directly.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* ── Next project / Back to work ───────────────────────────────────── */}
        {data.nextProject ? (
          <div
            style={{
              borderTop: `1px solid ${BD}`,
              padding:
                "clamp(1.5rem, 3vw, 2.25rem) clamp(1.25rem, 5vw, 5rem)",
            }}
          >
            <p
              style={{
                fontFamily: M,
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: FNT,
                margin: 0,
                marginBottom: "clamp(0.5rem, 1vw, 0.75rem)",
              }}
            >
              Next project
            </p>
            <a
              href={`/direction-e/work/${data.nextProject.slug}`}
              className="cs-next-title"
              style={{
                fontFamily: C,
                fontWeight: 400,
                fontSize: "clamp(1.5rem, 2.75vw, 2.25rem)",
                lineHeight: 1.15,
                letterSpacing: "-0.015em",
              }}
            >
              {data.nextProject.title} →
            </a>
            <span
              style={{
                fontFamily: S,
                fontSize: 13,
                color: FNT,
                display: "block",
                marginTop: "0.375rem",
              }}
            >
              {data.nextProject.company} · {data.nextProject.timeframe}
            </span>
          </div>
        ) : (
          <div
            style={{
              borderTop: `1px solid ${BD}`,
              padding:
                "clamp(1.5rem, 3vw, 2.25rem) clamp(1.25rem, 5vw, 5rem)",
            }}
          >
            <a
              href="/direction-e#work"
              className="cs-back"
              style={{
                fontFamily: C,
                fontWeight: 400,
                fontSize: "clamp(1.5rem, 2.75vw, 2.25rem)",
                lineHeight: 1.15,
                letterSpacing: "-0.015em",
              }}
            >
              ← Back to work
            </a>
          </div>
        )}

        <DirectionEFooter />
      </div>
    </>
  );
}
