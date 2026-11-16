"use client";

import { useEffect, useId, useRef } from "react";
import { CloseIcon } from "./icons";
import ProjectVideo, { type ThemedSrc } from "./ProjectVideo";

const VT_NAME = "v2-project-visual";

const hasViewTransitions = () => typeof document !== "undefined" && "startViewTransition" in document;

const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Open or close the panel so the visual visibly travels between the homepage and the panel.
 * - Browsers with View Transitions: the clicked visual grows into the panel's visual (and
 *   shrinks back on close) while the panel fades in around it.
 * - Others: the panel slides in from the right, like the live site's Contact page.
 * - Reduced motion: instant.
 */
function morph(from: HTMLElement | null, to: HTMLElement | null, update: () => void) {
  if (reducedMotion() || !hasViewTransitions() || !from || !to) {
    update();
    return false;
  }
  from.style.viewTransitionName = VT_NAME;
  const transition = document.startViewTransition(() => {
    from.style.viewTransitionName = "";
    to.style.viewTransitionName = VT_NAME;
    update();
  });
  transition.finished.finally(() => {
    to.style.viewTransitionName = "";
  });
  return true;
}

type Props = {
  title: string;
  /** "Company, years" */
  meta: string;
  description: string;
  video: ThemedSrc;
  poster: ThemedSrc;
};

// One featured project: the visual with its caption, and a full-screen panel with the
// project's information (Thomas, 2026-11-16). The panel repeats the visual and caption at the
// top so it's clear which project it belongs to. Native <dialog>: focus stays inside, Escape
// closes, and focus returns to the visual afterwards.
export default function ProjectItem({ title, meta, description, video, poster }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const tileRef = useRef<HTMLDivElement>(null);
  const panelVisualRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const titleRef = useRef<HTMLHeadingElement>(null);

  const visualIn = (el: HTMLElement | null) => el?.querySelector<HTMLElement>(".v2-project__visual") ?? null;

  // Keep the two copies of the video on the same frame, so the hand-over is seamless.
  const syncVideo = (from: HTMLElement | null, to: HTMLElement | null) => {
    const a = from?.querySelector("video");
    const b = to?.querySelector("video");
    if (a && b && a.readyState > 0) b.currentTime = a.currentTime;
  };

  const open = () => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const morphed = morph(visualIn(tileRef.current), visualIn(panelVisualRef.current), () => {
      syncVideo(tileRef.current, panelVisualRef.current);
      dialog.classList.toggle("is-morph", true);
      dialog.showModal();
      dialog.scrollTop = 0;
      // Focus the project title rather than the close button: no focus ring flashes on the
      // close button after a tap, screen readers start at the title, and Tab reaches Close.
      titleRef.current?.focus({ preventScroll: true });
    });
    if (!morphed) dialog.classList.remove("is-morph");
  };

  const close = () => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (hasViewTransitions() && !reducedMotion()) {
      morph(visualIn(panelVisualRef.current), visualIn(tileRef.current), () => {
        syncVideo(panelVisualRef.current, tileRef.current);
        dialog.close();
      });
      return;
    }
    syncVideo(panelVisualRef.current, tileRef.current);
    if (reducedMotion()) {
      dialog.close();
      return;
    }
    // Fallback: slide back out.
    let finished = false;
    const done = () => {
      if (finished) return;
      finished = true;
      dialog.classList.remove("is-closing");
      dialog.close();
    };
    dialog.classList.add("is-closing");
    dialog.addEventListener("animationend", done, { once: true });
    window.setTimeout(done, 500);
  };

  // Escape uses the same animated close.
  const closeRef = useRef(close);
  useEffect(() => {
    closeRef.current = close;
  });
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onCancel = (event: Event) => {
      event.preventDefault();
      closeRef.current();
    };
    dialog.addEventListener("cancel", onCancel);
    return () => dialog.removeEventListener("cancel", onCancel);
  }, []);

  return (
    <>
      <div ref={tileRef}>
        <ProjectVideo src={video} poster={poster} title={title} onOpen={open} />
      </div>
      <div className="v2-min__caption">
        <h3>{title}</h3>
        <p className="v2-project__meta">{meta}</p>
      </div>

      <dialog ref={dialogRef} className="v2-panel" aria-labelledby={titleId}>
        <div className="v2-panel__bar">
          <button type="button" className="v2-panel__close" onClick={close} aria-label="Close project">
            <CloseIcon />
          </button>
        </div>

        <div className="v2-panel__inner">
          <div ref={panelVisualRef} className="v2-panel__visual">
            <ProjectVideo src={video} poster={poster} title={title} />
          </div>
          <div className="v2-min__caption v2-panel__caption">
            <h2 id={titleId} ref={titleRef} tabIndex={-1}>{title}</h2>
            <p className="v2-project__meta">{meta}</p>
          </div>
          <p className="v2-panel__text">{description}</p>
        </div>
      </dialog>
    </>
  );
}
