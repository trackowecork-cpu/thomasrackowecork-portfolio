import { CONTACT_LINKS } from "@/components/interim/palette";

/*
  Footer (Thomas, 2026-11-19, after workbytomorrow.com/about): a big "Let's talk" at hero size,
  then LinkedIn, GitHub and Email as large plain-word links, on the page background. Back to top sits
  small at the bottom right, opposite the copyright (Thomas, 2026-11-19).
  Replaces the sticky-reveal versions (inverted, gradient and white were all rejected).
  Contact moved here from its own section.
*/

const LINKEDIN = CONTACT_LINKS.find((link) => link.label === "LinkedIn")!;
const EMAIL = CONTACT_LINKS.find((link) => link.label === "Email")!;
// The account that holds this site's repository (Thomas asked for GitHub, 2026-11-19).
const GITHUB_HREF = "https://github.com/trackowecork-cpu";

export default function SiteFooter() {
  return (
    <footer id="contact" className="v2-footer" aria-labelledby="v2-footer-title">
      <h2 id="v2-footer-title" className="v2-footer__title">
        Let&rsquo;s talk
      </h2>
      <ul className="v2-footer__links">
        <li>
          <a href={LINKEDIN.href} target="_blank" rel="noopener noreferrer">
            LinkedIn
            <span aria-hidden="true" className="v2-footer__arrow">↗</span>
            <span className="v2-visually-hidden"> (opens in a new tab)</span>
          </a>
        </li>
        <li>
          <a href={GITHUB_HREF} target="_blank" rel="noopener noreferrer">
            GitHub
            <span aria-hidden="true" className="v2-footer__arrow">↗</span>
            <span className="v2-visually-hidden"> (opens in a new tab)</span>
          </a>
        </li>
        <li>
          <a href={EMAIL.href}>Email</a>
        </li>
      </ul>
      <div className="v2-footer__bar">
        <p>© 2026 Thomas Rackowe Cork</p>
        <a href="#top">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
}
