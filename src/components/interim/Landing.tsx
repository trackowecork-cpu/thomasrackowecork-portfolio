"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { COLOUR_STATES, STATE_DURATION_MS } from "./palette";

const TAPE_WORDS = Array.from({ length: 8 }, () => "UNDER CONSTRUCTION");

export default function Landing() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % COLOUR_STATES.length),
      STATE_DURATION_MS,
    );
    return () => window.clearInterval(id);
  }, []);

  const { bg, fg } = COLOUR_STATES[index];

  return (
    <div
      className="flex h-[100svh] flex-col overflow-hidden"
      style={{ backgroundColor: bg, color: fg }}
    >
      <style>{`
        body { background-color: ${bg}; }
        .interim-tape { animation: interim-tape 40s linear infinite; }
        @keyframes interim-tape { to { transform: translateX(-50%); } }
        @media (prefers-reduced-motion: reduce) { .interim-tape { animation: none; } }
      `}</style>

      <header className="flex items-center justify-between px-5 pb-5 pt-6 md:pt-5">
        <Link href="/" className="text-[16px] font-medium leading-none">
          Thomas Rackowe Cork
        </Link>

        <Link href="/contact" className="hidden text-[16px] font-medium leading-none md:block">
          Contact
        </Link>

        <Link href="/contact" aria-label="Contact" className="-m-2 p-2 md:hidden">
          <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
            <rect x="1" y="8" width="22" height="2" rx="1" fill="currentColor" />
            <rect x="9" y="14" width="14" height="2" rx="1" fill="currentColor" />
          </svg>
        </Link>
      </header>

      <div className="flex-1" />

      <div className="overflow-hidden pb-5 pt-3">
        <span className="sr-only">Under construction</span>
        <div className="interim-tape flex w-max" aria-hidden="true">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center">
              {TAPE_WORDS.map((word, i) => (
                <span
                  key={i}
                  className="flex items-center whitespace-nowrap text-[16px] font-medium tracking-[0.04em] lg:text-[18px]"
                >
                  <span className="px-3 md:px-4">{word}</span>
                  <span className="text-[0.45em]">●</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
