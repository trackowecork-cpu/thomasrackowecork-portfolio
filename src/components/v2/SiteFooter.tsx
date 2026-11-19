"use client";

import { useEffect, useRef, useState } from "react";
import { CONTACT_LINKS } from "@/components/interim/palette";

/*
  Minimal sticky reveal footer, adapted from 21st.dev "sticky-footer" by efferd (Thomas, 2026-11-19).
  A clipped wrapper with the footer pinned underneath, two link groups and a bottom bar; groups
  fade in from a light blur as they arrive. Plain CSS (no Tailwind, motion or icon libraries).
  Contact moved here from its own section. Name and intro line removed: "super minimal".
*/

const EMAIL = CONTACT_LINKS.find((link) => link.label === "Email")!;

type FooterLink = { title: string; href: string; external?: boolean };

const GROUPS: { label: string; links: FooterLink[] }[] = [
  {
    label: "Contact",
    links: [
      { title: EMAIL.value, href: EMAIL.href },
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
        <footer id="contact" className="v2-footer">
          <div className="v2-footer__top">
            {GROUPS.map((group, i) => (
              <nav
                key={group.label}
                className="v2-footer__group v2-footer__anim"
                style={{ "--d": `${0.1 + i * 0.1}s` } as React.CSSProperties}
                aria-labelledby={`v2-footer-${group.label.toLowerCase()}`}
              >
                <h2 id={`v2-footer-${group.label.toLowerCase()}`} className="v2-footer__label">
                  {group.label}
                </h2>
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
