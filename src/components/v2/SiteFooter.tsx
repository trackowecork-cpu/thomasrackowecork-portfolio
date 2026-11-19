import { CONTACT_LINKS } from "@/components/interim/palette";

/*
  Footer (Thomas, 2026-11-19, after workbytomorrow.com/about): a big "Let's talk" at hero size,
  then LinkedIn, Email and Back to top as large plain-word links, on the page background.
  Replaces the sticky-reveal versions (inverted, gradient and white were all rejected).
  Contact moved here from its own section.
*/

const LINKEDIN = CONTACT_LINKS.find((link) => link.label === "LinkedIn")!;
const EMAIL = CONTACT_LINKS.find((link) => link.label === "Email")!;

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
          <a href={EMAIL.href}>Email</a>
        </li>
        <li>
          <a href="#top">
            Back to top
            <span aria-hidden="true" className="v2-footer__arrow">↑</span>
          </a>
        </li>
      </ul>
      <p className="v2-footer__legal">© 2026 Thomas Rackowe Cork</p>
    </footer>
  );
}
