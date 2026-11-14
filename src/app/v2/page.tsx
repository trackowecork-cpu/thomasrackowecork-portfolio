import Header from "@/components/v2/Header";
import ProjectVideo from "@/components/v2/ProjectVideo";
import { CONTACT_LINKS } from "@/components/interim/palette";

// Placeholder content until the real projects, copy and videos are ready.
const PROJECTS = [
  { title: "Project one", video: "/v2/proximus-app-grey.mp4", poster: "/v2/proximus-app-grey.jpg" },
  { title: "Project two", video: "/v2/project-2.mp4", poster: "/v2/project-2.jpg" },
  { title: "Project three", video: "/v2/project-3.mp4", poster: "/v2/project-3.jpg" },
];

const PROJECT_TEXT =
  "Two or three sentences about this project, what you did and what the outcome was. This gives the hiring manager or design lead an idea and leaves them wanting more.";

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
        <h1 id="v2-headline">I shape product experiences that turn attention → lasting momentum.</h1>
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
                <h3>{project.title}</h3>
                <p>{PROJECT_TEXT}</p>
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
          {/* Placeholder until Thomas picks a photo; swap for an <img> with alt text then. */}
          <div className="v2-about__photo" aria-hidden="true" />
          {BIO.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
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
