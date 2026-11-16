import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/v2/Header";
import ProjectVideo from "@/components/v2/ProjectVideo";

// Case study template, first used for eSIM (Thomas, 2026-11-16).
// Minimal pass (Thomas, 2026-11-16 "too busy"): no hero, title + one meta line, three short
// sections, one full-bleed visual each. Desktop keeps the text in view while the visual scrolls.
// ALL COPY BELOW IS PLACEHOLDER until Thomas writes the real case study.

export const metadata: Metadata = {
  title: "Digital eSIM Onboarding & Activation — Thomas Rackowe Cork (v2 preview)",
  robots: { index: false, follow: false },
};

export default function EsimCaseStudy() {
  return (
    <>
      <Header home="/v2" />

      <div className="v2-cs">
        <div className="v2-cs__intro">
          <Link href="/v2#work" className="v2-cs__back">
            <span aria-hidden="true">←</span> All work
          </Link>
          <h1>Digital eSIM Onboarding & Activation</h1>
          <p className="v2-cs__meta">Proximus, 2023–2025</p>
        </div>

        <section className="v2-cs__section" aria-labelledby="cs-problem">
          <div className="v2-cs__text">
            <h2 id="cs-problem" className="v2-cs__heading">
              Problem
            </h2>
            <p>
              Placeholder. Phones were going eSIM-only, but activating a line still meant a shop visit, a courier or a
              call.
            </p>
          </div>
          <div className="v2-cs__media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="v2-cs__photo"
              src="/v2/esim/billboard.webp"
              alt="Proximus billboard by a road reading “En de nieuwe eSIM”, with a person lying on a colourful blanket."
              width={1800}
              height={985}
              loading="lazy"
            />
          </div>
        </section>

        <section className="v2-cs__section" aria-labelledby="cs-contribution">
          <div className="v2-cs__text">
            <h2 id="cs-contribution" className="v2-cs__heading">
              My contribution
            </h2>
            <p>
              Placeholder. I led the design of digital onboarding and activation, so customers could install their eSIM
              without leaving the app.
            </p>
          </div>
          <div className="v2-cs__media">
            <ProjectVideo src="/v2/esim-flow.mp4" poster="/v2/esim/flow-poster.jpg" title="eSIM activation flow" />
          </div>
        </section>

        <section className="v2-cs__section" aria-labelledby="cs-impact">
          <div className="v2-cs__text">
            <h2 id="cs-impact" className="v2-cs__heading">
              Impact
            </h2>
            <p className="v2-cs__figure">Days to minutes</p>
            <p>Placeholder. Activation became fully digital, a foundation for future devices and services.</p>
          </div>
          <div className="v2-cs__media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="v2-cs__photo"
              src="/v2/esim/digital.webp"
              alt="The same billboard, now reading “100% digital”."
              width={1600}
              height={1200}
              loading="lazy"
            />
          </div>
        </section>

        <nav className="v2-cs__next" aria-label="More work">
          <Link href="/v2#work">
            All work <span aria-hidden="true">→</span>
          </Link>
        </nav>
      </div>

      <footer className="v2-footer">
        <p>© 2026</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}
