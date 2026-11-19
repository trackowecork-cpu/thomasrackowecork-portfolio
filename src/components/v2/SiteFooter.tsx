"use client";

import { useEffect, useRef, useState } from "react";
import { CONTACT_LINKS } from "@/components/interim/palette";

/*
  Sticky reveal footer, adapted from 21st.dev "sticky-footer" by efferd (Thomas, 2026-11-19).
  Same structure as the original: a clipped wrapper with the footer pinned underneath, soft
  diagonal light beams, a brand block beside link groups, a bottom bar, and groups that fade
  in from a light blur as they arrive. Rebuilt in plain CSS (no Tailwind, motion or icon
  libraries) in the v2 type and colours. Contact moved here from its own section.
*/

const EMAIL = CONTACT_LINKS.find((link) => link.label === "Email")!;

type FooterLink = { title: string; href: string; external?: boolean };

const GROUPS: { label: string; links: FooterLink[] }[] = [
  {
    label: "Contact",
    links: [
      // The email address sits in full beside the name, so the group holds LinkedIn and CV,
      // LinkedIn and CV read as plain words with the link inside (Thomas, 2026-11-19).
      ...CONTACT_LINKS.filter((link) => link.label !== "Email").map((link) => ({
        title: link.label,
        href: link.href,
        external: link.external,
      })),
    ],
  },
  {
    label: "Explore",
    links: [
      { title: "Work", href: "#work" },
      { title: "About", href: "#about" },
    ],
  },
];

export default function SiteFooter() {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"static" | "ready" | "in">("static");

  // Content is visible without JavaScript. Once mounted, groups wait hidden until the footer
  // scrolls into view, then animate in once. Reduced motion is handled in CSS.
  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;
    setState("ready");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("in");
          io.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="v2-footer-reveal" data-animate={state}>
      <div className="v2-footer-reveal__track">
        <footer id="contact" className="v2-footer" aria-labelledby="v2-footer-name">
          <div className="v2-footer__beams" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>

          <div className="v2-footer__top">
            <div className="v2-footer__brand v2-footer__anim" style={{ "--d": "0.1s" } as React.CSSProperties}>
              <h2 id="v2-footer-name" className="v2-footer__name">
                Thomas Rackowe Cork
              </h2>
              <p className="v2-footer__intro">
                I connect people, business, and technology to shape solutions that deliver meaningful impact.
              </p>
              <a className="v2-footer__email" href={EMAIL.href}>
                {EMAIL.value}
              </a>
            </div>

            {GROUPS.map((group, i) => (
              <nav
                key={group.label}
                className="v2-footer__group v2-footer__anim"
                style={{ "--d": `${0.2 + i * 0.1}s` } as React.CSSProperties}
                aria-labelledby={`v2-footer-${group.label.toLowerCase()}`}
              >
                <h3 id={`v2-footer-${group.label.toLowerCase()}`} className="v2-footer__label">
                  {group.label}
                </h3>
                <ul>
                  {group.links.map((link) => (
                    <li key={link.title}>
                      <a
                        href={link.href}
                        {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      >
                        {link.title}
                        {link.external ? (
                          <>
                            <span aria-hidden="true">{" ↗"}</span>
                            <span className="v2-visually-hidden"> (opens in a new tab)</span>
                          </>
                        ) : null}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          <div className="v2-footer__bar">
            <p>© 2026 Thomas Rackowe Cork</p>
            <a href="#top">
              Back to top <span aria-hidden="true">↑</span>
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
