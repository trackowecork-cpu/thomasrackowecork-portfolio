"use client";

import { useEffect, useId, useRef, useState } from "react";
import { CloseIcon } from "./icons";

const LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

type Props = {
  /** Path of the homepage when the header sits on another page (e.g. a case study), so links go back to its sections. */
  home?: string;
};

export default function Header({ home = "" }: Props) {
  const menuRef = useRef<HTMLDialogElement>(null);
  const menuId = useId();

  const openMenu = () => menuRef.current?.showModal();
  const closeMenu = () => menuRef.current?.close();

  // Hide the header while scrolling down, bring it back as soon as the visitor scrolls up
  // (Thomas, 2026-11-16). Always shown near the top of the page.
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;
    const update = () => {
      ticking = false;
      const y = window.scrollY;
      const delta = y - lastY;
      if (y < 100) setHidden(false);
      else if (delta > 6) setHidden(true);
      else if (delta < -6) setHidden(false);
      if (Math.abs(delta) > 6 || y < 100) lastY = y;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // The full-screen menu only exists on phones; close it if the window grows past that.
  useEffect(() => {
    const wide = window.matchMedia("(min-width: 768px)");
    const onChange = () => wide.matches && menuRef.current?.close();
    wide.addEventListener("change", onChange);
    return () => wide.removeEventListener("change", onChange);
  }, []);

  return (
    <header className={`v2-header v2-site-header${hidden ? " is-hidden" : ""}`}>
      <a href={home || "#top"} className="v2-header__name">
        Thomas Rackowe Cork
      </a>

      <nav aria-label="Main" className="v2-header__nav">
        <ul>
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={home + link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <button
        type="button"
        className="v2-menu-button"
        onClick={openMenu}
        aria-label="Open menu"
        aria-haspopup="dialog"
        aria-controls={menuId}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>

      <dialog ref={menuRef} id={menuId} className="v2-menu" aria-label="Menu">
        <div className="v2-header">
          <a href={home || "#top"} className="v2-header__name" onClick={closeMenu}>
            Thomas Rackowe Cork
          </a>
          <button type="button" className="v2-menu__close" onClick={closeMenu} aria-label="Close menu">
            <CloseIcon />
          </button>
        </div>

        <nav aria-label="Main" className="v2-menu__links">
          <ul>
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={home + link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

      </dialog>
    </header>
  );
}
