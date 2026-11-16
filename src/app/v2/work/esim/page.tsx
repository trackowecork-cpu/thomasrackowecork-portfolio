import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/v2/Header";
import ProjectVideo from "@/components/v2/ProjectVideo";

// Case study template, first used for eSIM (Thomas, 2026-11-16).
// Desktop: each section's text stays put on the left while its images scroll past on the right.
// Tablet and mobile: text, then images, stacked.
// ALL COPY BELOW IS PLACEHOLDER until Thomas writes the real case study.

export const metadata: Metadata = {
  title: "Digital eSIM Onboarding & Activation — Thomas Cork (v2 preview)",
  robots: { index: false, follow: false },
};

const FACTS = [
  { label: "Company", value: "Proximus" },
  { label: "Year", value: "2023–2025" },
  { label: "Role", value: "Lead product designer" },
  { label: "Platforms", value: "iOS, Android, web" },
];

const IMPACT = [
  { value: "Days → minutes", label: "Time from order to an active line" },
  { value: "00k+", label: "eSIM activations (placeholder)" },
  { value: "00%", label: "Fewer activation calls (placeholder)" },
];

/** A phone screen shown on a soft tonal panel. */
function Screen({ src, alt }: { src: string; alt: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img className="v2-cs__screen" src={src} alt={alt} width={600} height={1299} loading="lazy" />
  );
}

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
          <p className="v2-cs__lede">
            Placeholder: Making a new mobile line something you can switch on from your sofa, in minutes, without a shop
            visit or a plastic card.
          </p>
          <dl className="v2-cs__facts">
            {FACTS.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="v2-cs__hero">
          <ProjectVideo src="/v2/esim-flow.mp4" poster="/v2/esim-flow.jpg" title="Digital eSIM Onboarding & Activation" />
        </div>

        <section className="v2-cs__section" aria-labelledby="cs-problem">
          <div className="v2-cs__text">
            <h2 id="cs-problem" className="v2-cs__heading">
              Problem
            </h2>
            <p className="v2-cs__statement">
              Placeholder: Phones were going eSIM-only, but activating a line still meant a shop, a courier or a call.
            </p>
            <p>
              Placeholder: Customers who bought a new device could wait days for a physical card. Activation relied on
              manual steps across several teams, and every hand-off was a chance for the order to stall. Short paragraph
              on what was at stake for the business.
            </p>
          </div>
          <div className="v2-cs__media">
            <figure>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="v2-cs__photo"
                src="/v2/esim/billboard.webp"
                alt="Proximus billboard by a road reading “En de nieuwe eSIM”, with a person lying on a colourful blanket."
                width={1800}
                height={985}
                loading="lazy"
              />
              <figcaption>Placeholder caption: the launch campaign set the promise the product had to keep.</figcaption>
            </figure>
          </div>
        </section>

        <section className="v2-cs__section" aria-labelledby="cs-contribution">
          <div className="v2-cs__text">
            <h2 id="cs-contribution" className="v2-cs__heading">
              My contribution
            </h2>
            <p className="v2-cs__statement">
              Placeholder: I led the design of onboarding and activation across app, web and shop.
            </p>
            <p>
              Placeholder: Working with external vendors and Apple, I shaped the eSIM strategy and roadmap, mapped the
              journey end to end and designed the flows that let customers install their eSIM without leaving the app.
              One or two sentences on the key decisions.
            </p>
          </div>
          <div className="v2-cs__media">
            <figure>
              <div className="v2-cs__panel">
                <Screen src="/v2/esim/notification.webp" alt="Lock screen notification: your eSIM is now ready to install." />
                <Screen
                  src="/v2/esim/home.webp"
                  alt="MyProximus home screen with a card saying the eSIM is ready, and a Start installation button."
                />
              </div>
              <figcaption>Placeholder caption: customers are told the moment their eSIM is ready.</figcaption>
            </figure>
            <figure>
              <div className="v2-cs__panel v2-cs__panel--single">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="v2-cs__sheet"
                  src="/v2/esim/choose-device.webp"
                  alt="Install eSIM sheet asking whether to install on this device or another device, with a Continue button."
                  width={746}
                  height={688}
                  loading="lazy"
                />
              </div>
              <figcaption>Placeholder caption: one question decides the rest of the flow.</figcaption>
            </figure>
          </div>
        </section>

        <section className="v2-cs__section" aria-labelledby="cs-impact">
          <div className="v2-cs__text">
            <h2 id="cs-impact" className="v2-cs__heading">
              Impact
            </h2>
            <p className="v2-cs__statement">
              Placeholder: Activation went from days to minutes, fully digital.
            </p>
            <dl className="v2-cs__figures">
              {IMPACT.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="v2-cs__media">
            <figure>
              <div className="v2-cs__panel">
                <Screen src="/v2/esim/installing.webp" alt="Loading screen: installing your eSIM." />
                <Screen src="/v2/esim/installed.webp" alt="Mobile usage screen confirming the eSIM is installed and connected." />
              </div>
              <figcaption>Placeholder caption: from tap to connected in a few minutes, without leaving the app.</figcaption>
            </figure>
          </div>
        </section>

        <nav className="v2-cs__next" aria-label="More work">
          <Link href="/v2#work">
            <span className="v2-cs__next-label">Next</span>
            <span className="v2-cs__next-title">
              Back to all work <span aria-hidden="true">→</span>
            </span>
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
