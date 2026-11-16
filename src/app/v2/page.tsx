import Header from "@/components/v2/Header";
import ProjectVideo, { type ThemedSrc } from "@/components/v2/ProjectVideo";
import { CONTACT_LINKS } from "@/components/interim/palette";

// problem/outcome: draft two-line statement per project (option 6), for Thomas to rewrite.
type Project = {
  title: string;
  meta: string;
  problem: string;
  outcome: string;
  description: string;
  video: ThemedSrc;
  poster: ThemedSrc;
};

const placeholder = (n: number) => ({
  video: { light: `/v2/placeholder-${n}-light.mp4`, dark: `/v2/placeholder-${n}-dark.mp4` },
  poster: { light: `/v2/placeholder-${n}-light.jpg`, dark: `/v2/placeholder-${n}-dark.jpg` },
});

// Projects 2–4 use tone-on-tone placeholders until their visuals are ready.
const PROJECTS: Project[] = [
  {
    title: "Telecom App Redesign",
    meta: "Proximus, 2026",
    problem: "The app had drifted away from telecom.",
    outcome: "Now it puts customers’ own products first.",
    description:
      "As Proximus+, the app had expanded beyond telecom, gradually pushing core product management into the background. I helped shape its evolution from discovery through implementation, refocusing the experience on customers' telecom products and services. The first phase launched in September 2026, establishing a more scalable foundation for future development.",
    // A version per theme, each on a tone of its page background.
    // Trial (2026-11-15): the dark-background version in both themes. The light one is
    // still in public/v2/proximus-light.* if Thomas wants it back.
    // proximus-depth = phone keyed onto an out-of-focus warm room with parallax (proximus-sun = window-light version)
    // (render script: project files portfolio-build/v2-preview/proximus-depth-render.py).
    video: { light: "/v2/proximus-depth.mp4", dark: "/v2/proximus-depth.mp4" },
    poster: { light: "/v2/proximus-depth.jpg", dark: "/v2/proximus-depth.jpg" },
  },
  {
    title: "Digital Acquisition & Checkout Redesign",
    meta: "Proximus, 2024–2025",
    problem: "Digital sales were falling as support calls rose.",
    outcome: "Completed orders up 17%, self-installation up 76%.",
    description:
      "Proximus was losing digital sales while support calls climbed. The checkout took the blame, but the problems ran deeper: fragmented acquisition journeys, an external identification process, and lengthy fibre installations. I redesigned core acquisition journeys around how customers discover, choose, and order products. Completed orders increased by 17% and self-installation by 76%.",
    ...placeholder(2),
  },
  {
    title: "Digital eSIM Onboarding & Activation",
    meta: "Proximus, 2023–2025",
    problem: "Activating a SIM took days.",
    outcome: "Now it takes minutes, fully digital.",
    description:
      "As device manufacturers moved towards eSIM-only phones, Proximus's activation model remained dependent on physical processes. I contributed to the eSIM strategy and roadmap alongside external vendors and Apple, leading the design of digital onboarding and activation across Proximus's channels. Activation went from days to minutes, establishing scalable foundations for future devices and services.",
    // Draft: billboard intro, activation flow on a phone over it, then the billboard reads "100% digital" (intro: "From days to minutes").
    video: "/v2/esim-flow.mp4",
    poster: "/v2/esim-flow.jpg",
  },
  {
    title: "Art Collection Management Platform Redesign",
    meta: "Arteïa, 2021",
    problem: "A platform for everyone, built for no one in particular.",
    outcome: "Refocused on private collectors, from desktop to mobile.",
    description:
      "Arteïa's ambition to serve the entire art market had left its collection management platform without a clear primary audience. Research revealed an opportunity to refocus the experience around private collectors and their everyday needs. I contributed to this repositioning, redesigning key workflows and extending the desktop-centric platform into mobile experiences suited to real-world collection management.",
    ...placeholder(4),
  },
];

// Same bio as the live contact page.
const BIO = [
  "I'm a product and service designer who works best where design and strategy overlap.",
  "I see experiences as interconnected systems, not isolated screens. I bring people from different disciplines together to build a shared vision, test ideas quickly, and lay solid foundations so every learning moves us forward.",
];

export default function V2Page() {
  return (
    <>
      <Header />

      <section className="v2-hero" aria-labelledby="v2-headline">
        <h1 id="v2-headline">I shape product experiences that turn understanding into measurable impact.</h1>
      </section>

      <section id="work" className="v2-work" aria-labelledby="v2-work-label">
        <h2 id="v2-work-label" className="v2-label">
          Featured work
        </h2>
        <ul className="v2-projects">
          {PROJECTS.map((project) => (
            <li key={project.title} className="v2-project">
              <ProjectVideo src={project.video} poster={project.poster} title={project.title} />
              <div className="v2-project__text">
                <div className="v2-project__heading">
                  <h3>{project.title}</h3>
                  <p className="v2-project__meta">{project.meta}</p>
                </div>
                <p className="v2-statement">
                  <span className="v2-statement__problem">{project.problem}</span>{" "}
                  <span className="v2-statement__outcome">{project.outcome}</span>
                </p>
                <p className="v2-project__desc">{project.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <div className="v2-info">
        <section id="about" className="v2-about" aria-labelledby="v2-about-label">
          <h2 id="v2-about-label" className="v2-label">
            About
          </h2>
          <div className="v2-about__body">
            <div className="v2-about__text">
              {BIO.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            {/* Placeholder until Thomas picks a photo; swap for an <img> with alt text then.
                Text comes first in the DOM; on smaller screens CSS shows the photo above it. */}
            <div className="v2-about__photo" aria-hidden="true" />
          </div>
        </section>

        <section id="contact" className="v2-contact" aria-labelledby="v2-contact-label">
          <h2 id="v2-contact-label" className="v2-label">
            Contact
          </h2>
          <dl>
            {CONTACT_LINKS.map((link) => (
              <div key={link.label} className="v2-contact__row">
                <dt>{link.label}</dt>
                <dd>
                  <a
                    href={link.href}
                    {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {link.value}
                    {link.external ? (
                      <>
                        {" ↗"}
                        <span className="v2-visually-hidden"> (opens in a new tab)</span>
                      </>
                    ) : null}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </section>
      </div>

      <footer className="v2-footer">
        <p>© 2026</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}
