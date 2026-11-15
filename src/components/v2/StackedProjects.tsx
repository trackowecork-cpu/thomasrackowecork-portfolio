"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import ProjectVideo, { type ThemedSrc } from "./ProjectVideo";

export type Project = {
  title: string;
  meta: string;
  description: string;
  impact: string[];
  video: ThemedSrc;
  poster: ThemedSrc;
};

type VT = { finished: Promise<void> };
type DocWithVT = Document & { startViewTransition?: (cb: () => void) => VT };

const GAP = 24; // px kept clear above (and below, for tall cards) a pinned card

// Projects as a stack of tiles.
// - Scrolling: each tile pins near the top of the screen and the next one slides over it,
//   while the covered tile eases back (smaller, fading into the page). Tiles taller than the
//   screen pin by their bottom edge instead, so every line can still be read.
// - "View case study" opens the project in a full-screen sheet (native <dialog>); where the
//   browser supports it, the tile's visual morphs into the sheet.
// - Reduced motion: no easing back and no morph, just the stack and an instant sheet.
export default function StackedProjects({ projects }: { projects: Project[] }) {
  const listRef = useRef<HTMLUListElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);
  const [active, setActive] = useState<number | null>(null);

  // Sticky offsets + "covered" progress for each tile.
  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const items = Array.from(list.children) as HTMLElement[];
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const layout = () => {
      const vh = window.innerHeight;
      for (const el of items) {
        const h = el.offsetHeight;
        el.style.setProperty("--v2-stick", `${Math.min(GAP, vh - h - GAP)}px`);
      }
      update();
    };
    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      items.forEach((el, i) => {
        const next = items[i + 1];
        let p = 0;
        if (next && !reduced.matches) {
          const top = parseFloat(el.style.getPropertyValue("--v2-stick")) || GAP;
          const nextTop = next.getBoundingClientRect().top;
          p = Math.min(1, Math.max(0, 1 - (nextTop - Math.max(top, 0)) / (vh - Math.max(top, 0))));
        }
        el.style.setProperty("--v2-covered", p.toFixed(3));
      });
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    layout();
    const ro = new ResizeObserver(layout);
    items.forEach((el) => ro.observe(el));
    window.addEventListener("resize", layout);
    window.addEventListener("scroll", onScroll, { passive: true });
    reduced.addEventListener("change", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", layout);
      window.removeEventListener("scroll", onScroll);
      reduced.removeEventListener("change", update);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const withTransition = useCallback((index: number, change: () => void) => {
    const doc = document as DocWithVT;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const tileVisual = listRef.current?.children[index]?.querySelector<HTMLElement>(".v2-project__visual");
    if (!doc.startViewTransition || reduced || !tileVisual) {
      change();
      return;
    }
    tileVisual.style.viewTransitionName = "v2-case-visual";
    const vt = doc.startViewTransition(() => {
      tileVisual.style.viewTransitionName = "";
      flushSync(change);
    });
    vt.finished.finally(() => {
      tileVisual.style.viewTransitionName = "";
    });
  }, []);

  const open = (index: number, opener: HTMLButtonElement) => {
    openerRef.current = opener;
    withTransition(index, () => {
      setActive(index);
      dialogRef.current?.showModal();
      document.documentElement.classList.add("v2-sheet-open");
    });
  };

  const close = () => {
    const index = active;
    const finish = () => {
      dialogRef.current?.close();
      document.documentElement.classList.remove("v2-sheet-open");
      setActive(null);
    };
    if (index === null) return finish();
    // Reverse morph: the sheet's visual returns to the tile.
    const doc = document as DocWithVT;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const tileVisual = listRef.current?.children[index]?.querySelector<HTMLElement>(".v2-project__visual");
    if (!doc.startViewTransition || reduced || !tileVisual) return finish();
    const vt = doc.startViewTransition(() => {
      flushSync(finish);
      tileVisual.style.viewTransitionName = "v2-case-visual";
    });
    vt.finished.finally(() => {
      tileVisual.style.viewTransitionName = "";
    });
  };

  // Esc fires "cancel": route it through close() so the class and state reset.
  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    const onCancel = (e: Event) => {
      e.preventDefault();
      close();
    };
    const onClose = () => openerRef.current?.focus();
    d.addEventListener("cancel", onCancel);
    d.addEventListener("close", onClose);
    return () => {
      d.removeEventListener("cancel", onCancel);
      d.removeEventListener("close", onClose);
    };
  });

  const p = active === null ? null : projects[active];

  return (
    <>
      <ul className="v2-projects v2-projects--stack" ref={listRef}>
        {projects.map((project, i) => (
          <li key={project.title} className="v2-project">
            <ProjectVideo src={project.video} poster={project.poster} title={project.title} />
            <div className="v2-project__text">
              <div className="v2-project__heading">
                <h3>{project.title}</h3>
                <p className="v2-project__meta">{project.meta}</p>
              </div>
              <p>{project.description}</p>
              <button
                type="button"
                className="v2-case-open"
                aria-haspopup="dialog"
                onClick={(e) => open(i, e.currentTarget)}
              >
                View case study <span aria-hidden="true">→</span>
                <span className="v2-visually-hidden">: {project.title}</span>
              </button>
            </div>
          </li>
        ))}
      </ul>

      <dialog ref={dialogRef} className="v2-sheet" aria-labelledby="v2-sheet-title">
        {p && (
          <div className="v2-sheet__inner">
            <div className="v2-sheet__bar">
              <button type="button" className="v2-sheet__close" onClick={close}>
                <span aria-hidden="true">✕</span>
                <span className="v2-visually-hidden">Close case study</span>
              </button>
            </div>
            <div className="v2-sheet__visual">
              <ProjectVideo src={p.video} poster={p.poster} title={p.title} />
            </div>
            <div className="v2-sheet__body">
              <div className="v2-project__heading">
                <h2 id="v2-sheet-title">{p.title}</h2>
                <p className="v2-project__meta">{p.meta}</p>
              </div>
              <p>{p.description}</p>
              <h3 className="v2-sheet__label">Impact</h3>
              <ul className="v2-sheet__impact">
                {p.impact.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <p className="v2-sheet__note">Full case study available on request.</p>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
