"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { C, M, S, GR, BD, INK, IN2, MUT, FNT } from "../_tokens";

export function DirectionENav() {
  const path = usePathname();
  const isAbout = path.startsWith("/about");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <>
      <style>{`
        .en {
          position: sticky; top: 0; z-index: 20;
          background: ${GR}; border-bottom: 1px solid ${BD};
          height: 52px;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 clamp(1.25rem, 5vw, 5rem);
        }
        .en-name {
          font-family: ${S}; font-size: 15px; font-weight: 400;
          color: ${INK}; text-decoration: none;
          letter-spacing: -0.02em;
          transition: opacity 180ms ease;
        }
        .en-name:hover { opacity: 0.65; }
        .en-links { display: flex; align-items: center; gap: 28px; }
        .en-link {
          font-family: ${S}; font-size: 14px;
          color: ${FNT}; text-decoration: none;
          transition: color 180ms ease;
        }
        .en-link:hover { color: ${INK}; }
        .en-active { color: ${INK}; }

        /* ── Hamburger — mobile only ─────────────────────────────────────── */
        .en-burger {
          display: none;
          background: none; border: none; cursor: pointer;
          padding: 6px; margin-right: -6px;
          color: ${INK};
          align-items: center; justify-content: center;
          line-height: 1;
        }
        @media (max-width: 639px) {
          .en-links  { display: none; }
          .en-burger { display: flex; }
        }

        /* ── Mobile menu overlay ─────────────────────────────────────────── */
        .en-menu {
          position: fixed; inset: 0; z-index: 500;
          background: ${GR};
          display: flex; flex-direction: column;
          -webkit-font-smoothing: antialiased;
        }
        .en-menu-bar {
          height: 52px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 clamp(1.25rem, 5vw, 5rem);
          border-bottom: 1px solid ${BD};
        }
        .en-menu-close {
          background: none; border: none; cursor: pointer;
          padding: 6px; margin-right: -6px;
          color: ${INK};
          display: flex; align-items: center; justify-content: center;
        }
        .en-menu-body {
          flex: 1;
          display: flex; flex-direction: column; justify-content: space-between;
          padding: clamp(2.5rem, 8vw, 4rem) clamp(1.25rem, 5vw, 5rem);
          overflow-y: auto;
        }
        .en-menu-nav { display: flex; flex-direction: column; }
        .en-menu-link {
          font-family: ${C}; font-weight: 400;
          font-size: clamp(2.5rem, 12vw, 3.5rem);
          line-height: 1.1; letter-spacing: -0.02em;
          color: ${IN2}; text-decoration: none;
          padding: clamp(1rem, 4vw, 1.5rem) 0;
          border-bottom: 1px solid ${BD};
          display: block;
          transition: color 180ms ease;
        }
        .en-menu-link:first-child { border-top: 1px solid ${BD}; }
        .en-menu-link:hover { color: ${INK}; }
        .en-menu-link-active { color: ${INK}; }
        .en-menu-ext {
          font-family: ${M}; font-size: 11px;
          text-transform: uppercase; letter-spacing: 0.12em;
          color: ${FNT}; text-decoration: none;
          transition: color 180ms ease;
          display: inline-flex; align-items: center; gap: 6px;
        }
        .en-menu-ext:hover { color: ${MUT}; }
      `}</style>

      <header className="en">
        <a href="/" className="en-name">Thomas Rackowe Cork</a>

        {/* Desktop nav links */}
        <nav className="en-links">
          <a
            href="/#work"
            className={`en-link${!isAbout ? " en-active" : ""}`}
          >
            Work
          </a>
          <a
            href="/about"
            className={`en-link${isAbout ? " en-active" : ""}`}
          >
            About
          </a>
        </nav>

        {/* Mobile hamburger button */}
        <button
          className="en-burger"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={menuOpen}
          aria-controls="en-mobile-menu"
        >
          <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden="true">
            <rect width="18" height="1.5" rx="0.75" fill="currentColor"/>
            <rect y="5.25" width="18" height="1.5" rx="0.75" fill="currentColor"/>
            <rect y="10.5" width="18" height="1.5" rx="0.75" fill="currentColor"/>
          </svg>
        </button>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          id="en-mobile-menu"
          className="en-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          <div className="en-menu-bar">
            <a href="/" className="en-name" onClick={() => setMenuOpen(false)}>
              Thomas Rackowe Cork
            </a>
            <button
              className="en-menu-close"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <line x1="1.5" y1="1.5" x2="14.5" y2="14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="14.5" y1="1.5" x2="1.5" y2="14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          <div className="en-menu-body">
            <nav className="en-menu-nav" aria-label="Mobile navigation">
              <a
                href="/#work"
                className={`en-menu-link${!isAbout ? " en-menu-link-active" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                Work
              </a>
              <a
                href="/about"
                className={`en-menu-link${isAbout ? " en-menu-link-active" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                About
              </a>
            </nav>

            <a
              href="https://linkedin.com/in/thomasrackowecork"
              target="_blank"
              rel="noopener noreferrer"
              className="en-menu-ext"
              onClick={() => setMenuOpen(false)}
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      )}
    </>
  );
}
