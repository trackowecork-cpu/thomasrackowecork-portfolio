import Header from "@/components/v2/Header";
import ProjectItem, { type ProjectStory } from "@/components/v2/ProjectItem";
import type { ThemedSrc } from "@/components/v2/ProjectVideo";
import { CONTACT_LINKS } from "@/components/interim/palette";

type Project = {
  title: string;
  meta: string;
  description: string;
  video: ThemedSrc;
  poster: ThemedSrc;
  story?: ProjectStory;
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
    description:
      "As Proximus+, the app had expanded beyond telecom, gradually pushing core product management into the background. I helped shape its evolution from discovery through implementation, refocusing the experience on customers' telecom products and services. The first phase launched in September 2026, establishing a more scalable foundation for future development.",
    // A version per theme, each on a tone of its page background.
    // Trial (2026-11-15): the dark-background version in both themes. The light one is
    // still in public/v2/proximus-light.* if Thomas wants it back.
    // proximus-depth = phone keyed onto an out-of-focus warm room with parallax (proximus-sun = window-light version)
    // (render script: project files portfolio-build/v2-preview/proximus-depth-render.py).
    // proximus-wide = 16:9 render: same phone at full source height, room extended at the sides (less zoomed in).
    video: { light: "/v2/proximus-wide.mp4", dark: "/v2/proximus-wide.mp4" },
    poster: { light: "/v2/proximus-wide.jpg", dark: "/v2/proximus-wide.jpg" },
  },
  {
    title: "Digital Acquisition & Checkout Redesign",
    meta: "Proximus, 2024–2025",
    description:
      "Proximus was losing digital sales while support calls climbed. The checkout took the blame, but the problems ran deeper: fragmented acquisition journeys, an external identification process, and lengthy fibre installations. I redesigned core acquisition journeys around how customers discover, choose, and order products. Completed orders increased by 17% and self-installation by 76%.",
    ...placeholder(2),
  },
  {
    title: "Digital eSIM Onboarding & Activation",
    meta: "Proximus, 2023–2025",
    description:
      "As device manufacturers moved towards eSIM-only phones, Proximus's activation model remained dependent on physical processes. I contributed to the eSIM strategy and roadmap alongside external vendors and Apple, leading the design of digital onboarding and activation across Proximus's channels. Activation went from days to minutes, establishing scalable foundations for future devices and services.",
    // Draft: billboard intro, activation flow on a phone over it, then the billboard reads "100% digital" (intro: "From days to minutes").
    video: "/v2/esim-flow.mp4",
    poster: "/v2/esim-flow.jpg",
    // Final panel copy (Thomas, 2026-11-17). Keep verbatim.
    story: {
      summary:
        "The move to eSIM was not driven by customers, but by device manufacturers. Proximus had to make mobile connectivity fully digital, and fast.",
      problem: [
        "eSIM promised instant connection, yet Proximus still relied on physical processes. New customers had to wait for a paper QR code by post, while existing customers had to visit a store to switch to an eSIM. Both undermined the fully digital nature of eSIM technology and created friction for customers. Meanwhile, Apple and other manufacturers progressively rolled out eSIM-only devices. The pace was set externally, and Proximus was not ready.",
      ],
      contribution: [
        "I began with the foundations. With product and engineering, I mapped the backend and provisioning systems to understand how a manual, physical process could become a digital one. On that basis, I designed a fully digital onboarding experience across the online sales flows, and a native activation journey in the Proximus app. Clear guidance and real-time feedback built trust in a process that was still unfamiliar.",
        "I designed the activation flow as a reusable foundation. This allowed me to extend it to a native SIM-to-eSIM swap, so existing customers no longer needed a store. When manufacturers introduced Quick Transfer, I adapted the relevant Proximus touchpoints to support it, so that statuses and next steps remained clear for customers throughout.",
      ],
      impact: [
        "Onboarding and activation time fell from days to minutes, with no reliance on a physical SIM card. As manufacturers like Apple redefined how people set up and connect their devices, Proximus customers could follow that shift without friction. Proximus also became the first Belgian operator to launch Quick Transfer, with over 14,000 eSIM activations in the first month. Above all, the work established reusable foundations, which paved the way for Proximus to extend the experience as customer needs and industry standards evolve.",
      ],
    },
  },
  {
    title: "Art Collection Management Platform Redesign",
    meta: "Arteïa, 2021",
    description:
      "Arteïa's ambition to serve the entire art market had left its collection management platform without a clear primary audience. Research revealed an opportunity to refocus the experience around private collectors and their everyday needs. I contributed to this repositioning, redesigning key workflows and extending the desktop-centric platform into mobile experiences suited to real-world collection management.",
    ...placeholder(4),
    // Final panel copy (Thomas, 2026-11-17). Keep verbatim.
    story: {
      summary:
        "Arteïa was built around the NFT boom. When the market shifted, the challenge was no longer the improvement of the product, but its redefinition.",
      problem: [
        "Arteïa had tried to be everything to everyone. It addressed galleries, artists and collectors alike, and anchored much of its value in NFTs just as interest declined. The result was a product without a clear audience or a durable reason to exist.",
      ],
      contribution: [
        "I joined as a UX/UI designer to extend core features. However, exploratory interviews to understand what users valued and what was missing soon challenged that brief. Artists saw little need for the platform, and galleries lacked the operational basics to adopt it. Collectors, by contrast, already relied on it and made up 75% of customers. The product had to be built around them.",
        "I translated this into a roadmap within the current architecture. I redesigned the catalogue around multiple categories, so collectors could keep a single record of everything they own, from art to watches, cars and books. I also designed the foundations of the Arteïa mobile app to put key information at hand, with desktop as the reference platform.",
      ],
      impact: [
        "Arteïa did not abandon NFTs or digital authentication. It did, however, gain what it had lacked: a defined core audience, an evidence-based roadmap, and a clear vision of the platform as a home for an entire collection.",
      ],
    },
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
        {/* Minimal homepage: visual + title + company/year. Descriptions move to each case study page. */}
        <ul className="v2-projects v2-projects--min">
          {PROJECTS.map((project) => (
            <li
              key={project.title}
              className="v2-project v2-project--min"
            >
              <ProjectItem {...project} />
            </li>
          ))}
        </ul>
      </section>

      <div className="v2-info">
        <section id="about" className="v2-about" aria-labelledby="v2-about-label">
          <h2 id="v2-about-label" className="v2-label">
            About me
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
