"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { PageReady, TransitionLink } from "./PageTransition";
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
      className="interim-landing flex flex-col overflow-hidden"
      style={{ backgroundColor: bg, color: fg }}
    >
      <style>{`
        body { background-color: ${bg}; }
        .interim-landing { height: 100vh; height: 100svh; }
        .interim-tape { animation: interim-tape 40s linear infinite; }
        @keyframes interim-tape { to { transform: translateX(-50%); } }
        @media (prefers-reduced-motion: reduce) { .interim-tape { animation: none; } }
      `}</style>

      <PageReady />

      <header className="flex items-center justify-between px-5 pb-5 pt-6 md:pt-5 lg:px-8 lg:pt-7">
        <Link href="/" className="text-[16px] font-medium leading-none lg:text-[18px]">
          Thomas Rackowe Cork
        </Link>

        <TransitionLink
          direction="open"
          href="/contact"
          className="hidden text-[16px] font-medium leading-none md:block lg:text-[18px]"
        >
          Contact
        </TransitionLink>

        <TransitionLink direction="open" href="/contact" aria-label="Contact" className="-m-2 p-2 md:hidden">
          <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
            <rect x="1" y="8" width="22" height="2" rx="1" fill="currentColor" />
            <rect x="9" y="14" width="14" height="2" rx="1" fill="currentColor" />
          </svg>
        </TransitionLink>
      </header>

      <div className="flex-1" />

      <div className="overflow-hidden pb-5 pt-3 lg:pb-7">
        <span className="sr-only">Under construction</span>
        <div className="interim-tape flex w-max" aria-hidden="true">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center">
              {TAPE_WORDS.map((word, i) => (
                <span
                  key={i}
                  className="flex items-center whitespace-nowrap text-[16px] font-medium tracking-[0.04em] lg:text-[20px]"
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
