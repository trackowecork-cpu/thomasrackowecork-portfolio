"use client";

import { useEffect, useId, useRef } from "react";
import { CloseIcon, MoonIcon, SunIcon } from "./icons";
import { setTheme, useTheme } from "./theme";

const LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export default function Header() {
  const theme = useTheme();
  const isDark = theme === "dark";
  const menuRef = useRef<HTMLDialogElement>(null);
  const menuId = useId();
  const switchLabelId = useId();

  const openMenu = () => menuRef.current?.showModal();
  const closeMenu = () => menuRef.current?.close();
  const toggleTheme = () => setTheme(isDark ? "light" : "dark");

  // The full-screen menu only exists on phones; close it if the window grows past that.
  useEffect(() => {
    const wide = window.matchMedia("(min-width: 768px)");
    const onChange = () => wide.matches && menuRef.current?.close();
    wide.addEventListener("change", onChange);
    return () => wide.removeEventListener("change", onChange);
  }, []);

  return (
    <header className="v2-header">
      <a href="#top" className="v2-header__name">
        Thomas Cork
      </a>

      <nav aria-label="Main" className="v2-header__nav">
        <ul>
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="v2-icon-button"
          onClick={toggleTheme}
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
          {/* Both icons render; CSS shows the right one before JavaScript loads. */}
          <span className="v2-only-light">
            <MoonIcon />
          </span>
          <span className="v2-only-dark">
            <SunIcon />
          </span>
        </button>
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
          <a href="#top" className="v2-header__name" onClick={closeMenu}>
            Thomas Cork
          </a>
          <button type="button" className="v2-menu__close" onClick={closeMenu} aria-label="Close menu">
            <CloseIcon />
          </button>
        </div>

        <nav aria-label="Main" className="v2-menu__links">
          <ul>
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="v2-menu__appearance">
          <span id={switchLabelId}>Dark mode</span>
          <button
            type="button"
            role="switch"
            aria-checked={isDark}
            aria-labelledby={switchLabelId}
            className="v2-switch"
            onClick={toggleTheme}
          >
            <span className="v2-switch__track" aria-hidden="true">
              <span className="v2-switch__thumb" />
            </span>
          </button>
        </div>
      </dialog>
    </header>
  );
}
