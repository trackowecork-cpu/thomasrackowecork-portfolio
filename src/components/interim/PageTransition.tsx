"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLayoutEffect, type ComponentProps, type MouseEvent } from "react";

// Slide transition between the landing and contact pages, using the View
// Transitions API. "open" slides the contact page in from the right over the
// landing; "close" slides it back out. Browsers without the API, and visitors
// with reduced motion on, get the normal instant navigation.

type Direction = "open" | "close";

let resolvePending: (() => void) | null = null;

function settle() {
  resolvePending?.();
  resolvePending = null;
}

type ViewTransitionDocument = Document & {
  startViewTransition?: (update: () => Promise<void>) => { finished: Promise<void> };
};

export function TransitionLink({
  direction,
  href,
  onClick,
  ...rest
}: ComponentProps<typeof Link> & { direction: Direction; href: string }) {
  const router = useRouter();

  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    onClick?.(e);
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const doc = document as ViewTransitionDocument;
    if (!doc.startViewTransition || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    e.preventDefault();
    const root = document.documentElement;
    root.dataset.vt = direction;
    const transition = doc.startViewTransition(
      () =>
        new Promise<void>((resolve) => {
          resolvePending = resolve;
          router.push(href);
          // Never hold the page frozen if the new page is slow to mount.
          window.setTimeout(settle, 1000);
        }),
    );
    transition.finished.finally(() => delete root.dataset.vt);
  }

  return <Link href={href} onClick={handleClick} {...rest} />;
}

// Rendered by each page: tells a pending transition the new page is on screen,
// and carries the transition styles.
export function PageReady() {
  useLayoutEffect(settle, []);

  return (
    <style>{`
      html[data-vt="open"]::view-transition-old(root) { animation: none; }
      html[data-vt="open"]::view-transition-new(root) {
        animation: vt-slide-in 0.45s cubic-bezier(0.22, 1, 0.36, 1) both;
      }
      html[data-vt="close"]::view-transition-old(root) {
        z-index: 2;
        animation: vt-slide-out 0.4s cubic-bezier(0.64, 0, 0.78, 0) both;
      }
      html[data-vt="close"]::view-transition-new(root) { z-index: 1; animation: none; }
      @keyframes vt-slide-in { from { transform: translateX(100%); } }
      @keyframes vt-slide-out { to { transform: translateX(100%); } }
    `}</style>
  );
}
