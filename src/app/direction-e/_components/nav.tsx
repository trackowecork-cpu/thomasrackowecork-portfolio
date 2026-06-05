"use client";
import { usePathname } from "next/navigation";
import { GR, BD, INK, FNT, S } from "../_tokens";

export function DirectionENav() {
  const path = usePathname();
  const isAbout = path.startsWith("/direction-e/about");

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
      `}</style>
      <header className="en">
        <a href="/" className="en-name">Thomas Rackowe Cork</a>
        <nav className="en-links">
          <a
            href="/direction-e#work"
            className={`en-link${!isAbout ? " en-active" : ""}`}
          >
            Work
          </a>
          <a
            href="/direction-e/about"
            className={`en-link${isAbout ? " en-active" : ""}`}
          >
            About
          </a>
        </nav>
      </header>
    </>
  );
}
