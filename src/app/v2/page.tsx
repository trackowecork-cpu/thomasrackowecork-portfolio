import Header from "@/components/v2/Header";
import ProjectItem, { type ProjectStill, type ProjectStory } from "@/components/v2/ProjectItem";
import type { ThemedSrc } from "@/components/v2/ProjectVideo";
import { CONTACT_LINKS } from "@/components/interim/palette";

type Project = {
  title: string;
  meta: string;
  description: string;
  video: ThemedSrc;
  poster: ThemedSrc;
  story?: ProjectStory;
  stills?: ProjectStill[];
};

const placeholder = (n: number) => ({
  video: { light: `/v2/placeholder-${n}-light.mp4`, dark: `/v2/placeholder-${n}-dark.mp4` },
  poster: { light: `/v2/placeholder-${n}-light.jpg`, dark: `/v2/placeholder-${n}-dark.jpg` },
});

// Projects 2–4 use tone-on-tone placeholders until their visuals are ready.
const PROJECTS: Project[] = [
  {
    title: "A service-first foundation for Proximus' app",
    meta: "Proximus, 2026",
    description:
      "As Proximus+, the app had expanded beyond telecom, gradually pushing core product management into the background. I helped shape its evolution from discovery through implementation, refocusing the experience on customers' telecom products and services. The first phase launched in September 2026, establishing a more scalable foundation for future development.",
    // A version per theme, each on a tone of its page background.
    // Trial (2026-11-15): the dark-background version in both themes. The light one is
    // still in public/v2/proximus-light.* if Thomas wants it back.
    // proximus-depth = phone keyed onto an out-of-focus warm room with parallax (proximus-sun = window-light version)
    // (render script: project files portfolio-build/v2-preview/proximus-depth-render.py).
    // proximus-wide = 16:9 render: same phone at full source height, room extended at the sides (less zoomed in).
    // Trial (2026-11-18): graphic version, whole phone on a sea-glass field, to sit with the eSIM and eShare
    // loops (render: project files portfolio-build/proximus-loop/proximus-graphic.py). The warm room
    // version is still in public/v2/proximus-wide.* to compare.
    video: { light: "/v2/proximus-graphic-3.mp4", dark: "/v2/proximus-graphic-3.mp4" },
    poster: { light: "/v2/proximus-graphic-3.jpg", dark: "/v2/proximus-graphic-3.jpg" },
    // Panel stills (render: project files portfolio-build/proximus-loop/proximus-stills.py).
    // The Proximus+ screens are not Thomas's work: context only, never beside his concepts.
    stills: [
      {
        src: "/v2/proximus-context.jpg",
        alt: "Two screens of the former Proximus+ app: a home screen led by location, weather and greetings, and a Discover section promoting home, neighbourhood and mobility services.",
        caption: "The starting point: Proximus+ had grown into a super-app, where lifestyle services crowded out product management.",
      },
      {
        src: "/v2/proximus-concepts.jpg",
        alt: "Concept 1 and Concept 2 side by side, two early product overview concepts in Dutch, each surfacing product status and smart tips with a clear action.",
        caption: "Two of the first concepts tested with users.",
      },
    ],
    // Final panel copy (Thomas, 2026-11-18). Keep verbatim.
    story: {
      summary:
        "Proximus' app had grown into a super-app, and its core value had blurred along the way. This project refocused it on what users needed most: reassurance that everything works, and the confidence to act when it doesn't.",
      problem: [
        "Proximus' app had expanded into a super-app, with services well beyond telecom. In the process, its core relationship with users had blurred. Engagement declined, product-related support demand grew, and in-app conversion fell short of business targets. Testing the live app revealed why: information and actions were fragmented, and the commercial strategy had taken precedence over user needs. Over time, users had stopped seeing the app as a place where anything useful could be done. The challenge was not to redesign a tab, but to redefine how users interact with Proximus: how they manage their products and services, and what they expect from their app.",
      ],
      contribution: [
        "As a lead designer, I worked closely with engineering and cross-functional partners. I began by aligning the team on objectives and success metrics, so that design decisions rested on evidence rather than opinion.",
        "Two rounds of concept testing revealed a clear priority: before anything else, users wanted to know that their services were working. I repositioned the product experience around that need, turning a passive list of links into a real-time health overview. Together with engineering, we redefined the logic behind statuses, issues and recommendations across every product. Informed by research, I shaped a prioritisation model that brings only actionable issues to the surface, each paired with a clear path to resolution. No alert leaves users at a dead end.",
        "To make this sustainable, I introduced a consistent page architecture across all products, designed as control panels rather than storefronts. It gave users a predictable way to manage their services and gave Proximus a framework that can scale as its portfolio evolves.",
      ],
      impact: [
        "This first phase laid the foundations, in both experience and technology, with the app now rebuilt in React Native. Product and service management follows a user-validated hierarchy, in which usage and status lead and commercial content plays a supporting role. The new experience is live across every product, with TV now fully native.",
        "Its broader value lies in the model itself: a shared logic for status, actions and communication that absorbs new products without added complexity. The work continues, moving from reassurance towards proactive, personalised support, with agentic capabilities now in development.",
      ],
    },
  },
  {
    title: "Digital Acquisition & Checkout Redesign",
    meta: "Proximus, 2024–2025",
    description:
      "Proximus was losing digital sales while support calls climbed. The checkout took the blame, but the problems ran deeper: fragmented acquisition journeys, an external identification process, and lengthy fibre installations. I redesigned core acquisition journeys around how customers discover, choose, and order products. Completed orders increased by 17% and self-installation by 76%.",
    // Homepage loop (2026-11-18): graphic laptop on coral, address autocompletes, fast-forward to confirmation.
    // Render: project files portfolio-build/eshare-render.py
    video: "/v2/eshare-laptop-3.mp4",
    poster: "/v2/eshare-laptop-3.jpg",
    // Panel stills (render: project files portfolio-build/eshare-stills.py).
    stills: [
      {
        src: "/v2/eshare-address-drawer-2.jpg",
        video: "/v2/eshare-address-drawer-2.mp4",
        alt: "From a pack's Check availability button, a side panel slides in from the left, the address is entered and checked, the panel confirms fibre is available at that address, and Personalize pack is clicked, opening the pack personalisation page.",
        caption: "Customers could check their address straight from a pack, and see what was available to them before choosing.",
      },
      {
        src: "/v2/eshare-id-before.jpg",
        alt: "Before: the old identification step on mobile, annotated: managed outside Proximus as a third-party iframe in the checkout, with around 35% drop-off, and methods listed as equals with none recommended.",
        caption: "Identification before and after: a third-party step with around 35% drop-off became an itsme-first step, with a store as the fallback.",
        also: [
          {
            src: "/v2/eshare-id-after.jpg",
            alt: "After: the new identification step on mobile, annotated: itsme as the default, recommended up front, and a store as the fallback for users without itsme.",
          },
        ],
      },
      {
        src: "/v2/eshare-install.jpg",
        video: "/v2/eshare-install.mp4",
        alt: "The installation method step with self-install preselected as the fastest method. Learn how easy it is opens a side panel explaining self-install: set up in 30 minutes, delivered by bpost in 2–3 business days, with an instruction video and support, then the panel closes.",
        caption: "Self-installation became a confident choice inside the checkout.",
      },
    ],
    // Final panel copy (Thomas, 2026-11-17). Keep verbatim.
    story: {
      summary:
        "Proximus was losing ground online: its digital sales share fell while support calls rose. The challenge was not to optimise the checkout, but to redefine how customers order.",
      problem: [
        "The decline had no single cause. Ordering flows were complex and inconsistent, designed around edge cases rather than the majority of customers. Proximus positioned itself as fibre-first, yet many customers were not eligible for fibre and only discovered this late in the journey. Key steps such as identification and installation added friction and offered little transparency. The result was high drop-off and greater demand on support.",
      ],
      contribution: [
        "As a lead designer on this project, I owned the acquisition flows, from product pages to order completion. With cross-functional teams, I anchored the redesign in one principle: radical simplification for the majority of customers.",
        "The first priority was relevance. I led the redesign of the address check, so customers saw only the offers available at their address from the start. This removed a major source of late drop-off, without frustration for those outside fibre coverage.",
        "Two moments still stalled many orders. The first was identification, which customers had to complete before an order went through. The step was managed externally, clumsy on mobile, and gave little visibility into drop-off. Yet over 80% of completed orders relied on itsme, Belgium's leading digital identity app. That data, user insights and its stronger security made a clear case for itsme as the default. I then redesigned the step with the itsme and security teams.",
        "The second moment was the installation step. Most customers waited for a technician, often with long delays, at a cost to them and to Proximus. With engineering, I reconfigured the logic behind self-installation and integrated it into the checkout, with guidance that made it a confident choice: faster for customers, and less costly for Proximus.",
      ],
      impact: [
        "Completed orders rose by 17% and identification completion by 15%. Self-installation adoption doubled, and support calls fell significantly. Beyond the numbers, digital regained its role as a primary sales channel. The project also changed how teams worked: design moved from execution to a strategic role, shaping business outcomes alongside product and tech.",
      ],
    },
  },
  {
    title: "A scalable activation model for eSIM",
    meta: "Proximus, 2023–2025",
    description:
      "As device manufacturers moved towards eSIM-only phones, Proximus's activation model remained dependent on physical processes. I contributed to the eSIM strategy and roadmap alongside external vendors and Apple, leading the design of digital onboarding and activation across Proximus's channels. Activation went from days to minutes, establishing scalable foundations for future devices and services.",
    // Art-directed take 1 (2026-11-18): top-down unboxing, phone runs the activation flow (render: project files portfolio-build/v2-preview/esim-unbox-render.py). Previous billboard loop: esim-flow.*
    video: "/v2/esim-unbox-4.mp4",
    poster: "/v2/esim-unbox-4.jpg",
    // Panel stills (render scripts: project files portfolio-build/esim-panel/). Codes on the card are dummies.
    stills: [
      {
        src: "/v2/esim-qr-card-2.jpg",
        alt: "Both sides of the old Proximus eSIM card: setup steps on the front, and a QR code with activation codes on the back.",
        caption: "Before: new customers waited for a QR code card by post.",
      },
      {
        src: "/v2/esim-blueprint-2.jpg",
        alt: "The full service blueprint for ordering and activating an eSIM, from product page to eSIM installed.",
        caption: "The service blueprint mapped each step from order to an active eSIM.",
        wide: true,
      },
      {
        src: "/v2/esim-education-2.jpg",
        alt: "Two screens from the Proximus eSIM page: the introduction, and a device compatibility check that confirms an iPhone 14 supports eSIM.",
        caption: "The eSIM page explained the technology and let customers check their device first.",
      },
      {
        src: "/v2/esim-swap.jpg",
        video: "/v2/esim-swap-2.mp4",
        alt: "SIM-to-eSIM swap in the Proximus app",
        caption: "The SIM-to-eSIM swap hands over to the same activation flow.",
      },
    ],
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
    title: "Product strategy for an art platform in transition",
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
