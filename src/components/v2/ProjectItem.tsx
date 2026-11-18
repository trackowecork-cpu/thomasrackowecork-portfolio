"use client";

import Image from "next/image";
import { useEffect, useId, useRef } from "react";
import ProjectVideo, { type ThemedSrc } from "./ProjectVideo";

const VT_NAME = "v2-project-visual";

const hasViewTransitions = () =>
  typeof document !== "undefined" && "startViewTransition" in document;

const reducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Open or close the panel so the visual visibly travels between the homepage and the panel.
 * - Browsers with View Transitions: the clicked visual grows into the panel's visual (and
 *   shrinks back on close) while the panel fades in around it.
 * - Others: the panel slides in from the right, like the live site's Contact page.
 * - Reduced motion: instant.
 */
function morph(
  direction: "open" | "close",
  from: HTMLElement | null,
  to: HTMLElement | null,
  update: () => void,
) {
  if (reducedMotion() || !hasViewTransitions() || !from || !to) {
    update();
    return false;
  }
  // Lets the CSS give opening and closing their own choreography.
  const root = document.documentElement;
  root.dataset.v2Panel = direction;
  from.style.viewTransitionName = VT_NAME;
  const transition = document.startViewTransition(() => {
    from.style.viewTransitionName = "";
    to.style.viewTransitionName = VT_NAME;
    update();
  });
  transition.finished.finally(() => {
    to.style.viewTransitionName = "";
    delete root.dataset.v2Panel;
  });
  return true;
}

/** A still in the panel, below the opening visual (Problem → Contribution → Impact). */
export type ProjectStill = {
  src: string;
  alt: string;
  caption: string;
  /** Keep 16:9 on phones too, for artefacts that can't be cropped (e.g. the whole blueprint). */
  wide?: boolean;
};

/** A project's panel copy. Each section is one or more paragraphs. */
export type ProjectStory = {
  summary: string;
  problem: string[];
  contribution: string[];
  impact: string[];
};

// Placeholder for projects whose copy Thomas hasn't written yet.
const LOREM_TEXT = {
  summary:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  problem:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus. Maecenas faucibus mollis interdum, nulla vitae elit libero, a pharetra augue.",
  contribution:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum, vestibulum id ligula porta felis euismod semper.",
  impact:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur.",
};
const LOREM: ProjectStory = {
  summary: LOREM_TEXT.summary,
  problem: [LOREM_TEXT.problem],
  contribution: [LOREM_TEXT.contribution],
  impact: [LOREM_TEXT.impact],
};

type Props = {
  title: string;
  /** "Company, years" */
  meta: string;
  /** Earlier one-paragraph copy; not shown while the structured placeholder is in. */
  description?: string;
  video: ThemedSrc;
  poster: ThemedSrc;
  /** Panel copy; lorem ipsum until written. */
  story?: ProjectStory;
  /** Panel stills; placeholders until made. */
  stills?: ProjectStill[];
};

// One featured project: the visual with its caption, and a full-screen panel with the
// project's information (Thomas, 2026-11-16). The panel repeats the visual and caption at the
// top so it's clear which project it belongs to. Native <dialog>: focus stays inside, Escape
// closes, and focus returns to the visual afterwards.
export default function ProjectItem({
  title,
  meta,
  video,
  poster,
  story = LOREM,
  stills = [],
}: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const tileRef = useRef<HTMLDivElement>(null);
  const panelVisualRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const titleRef = useRef<HTMLHeadingElement>(null);

  const visualIn = (el: HTMLElement | null) =>
    el?.querySelector<HTMLElement>(".v2-project__visual") ?? null;

  // Keep the two copies of the video on the same frame, so the hand-over is seamless.
  const syncVideo = (from: HTMLElement | null, to: HTMLElement | null) => {
    const a = from?.querySelector("video");
    const b = to?.querySelector("video");
    if (a && b && a.readyState > 0) b.currentTime = a.currentTime;
  };

  const open = () => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const morphed = morph(
      "open",
      visualIn(tileRef.current),
      visualIn(panelVisualRef.current),
      () => {
        syncVideo(tileRef.current, panelVisualRef.current);
        dialog.classList.toggle("is-morph", true);
        dialog.showModal();
        dialog.scrollTop = 0;
        // Focus the project title rather than the close button: no focus ring flashes on the
        // close button after a tap, screen readers start at the title, and Tab reaches Close.
        titleRef.current?.focus({ preventScroll: true });
      },
    );
    // Give the panel its own history entry, so the browser's back button (and swipe back on
    // phones) closes it just like the Back button does.
    window.history.pushState({ ...window.history.state, v2Panel: true }, "");
    if (!morphed) dialog.classList.remove("is-morph");
  };

  const close = () => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (hasViewTransitions() && !reducedMotion()) {
      morph(
        "close",
        visualIn(panelVisualRef.current),
        visualIn(tileRef.current),
        () => {
          syncVideo(panelVisualRef.current, tileRef.current);
          dialog.close();
        },
      );
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
    window.setTimeout(done, 700);
  };

  // Back button and Escape step back through history; the popstate below does the closing.
  const back = () => {
    if (window.history.state?.v2Panel) window.history.back();
    else close();
  };

  const closeRef = useRef(close);
  const backRef = useRef(back);
  useEffect(() => {
    closeRef.current = close;
    backRef.current = back;
  });
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onCancel = (event: Event) => {
      event.preventDefault();
      backRef.current();
    };
    const onPopState = () => {
      if (dialog.open) closeRef.current();
    };
    // Same as the site header: the Back bar hides while scrolling down, returns on scroll up.
    const bar = dialog.querySelector<HTMLElement>(".v2-panel__bar");
    let lastY = 0;
    let ticking = false;
    const update = () => {
      ticking = false;
      const y = dialog.scrollTop;
      const delta = y - lastY;
      if (y < 80 || delta < -6) bar?.classList.remove("is-hidden");
      else if (delta > 6) bar?.classList.add("is-hidden");
      if (Math.abs(delta) > 6 || y < 80) lastY = y;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    const onClose = () => {
      bar?.classList.remove("is-hidden");
      lastY = 0;
    };
    dialog.addEventListener("scroll", onScroll, { passive: true });
    dialog.addEventListener("close", onClose);
    dialog.addEventListener("cancel", onCancel);
    window.addEventListener("popstate", onPopState);
    return () => {
      dialog.removeEventListener("scroll", onScroll);
      dialog.removeEventListener("close", onClose);
      dialog.removeEventListener("cancel", onCancel);
      window.removeEventListener("popstate", onPopState);
    };
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
          <button type="button" className="v2-panel__back" onClick={back}>
            Back
          </button>
        </div>

        {/* Desktop: text on the left stays in view while the visuals scroll on the right
            (Thomas, 2026-11-17; reference workbytomorrow.com). Phones and tablets: one column,
            visual first. */}
        <div className="v2-panel__inner">
          <div className="v2-panel__text">
            <div className="v2-min__caption v2-panel__caption">
              <h2 id={titleId} ref={titleRef} tabIndex={-1}>
                {title}
              </h2>
              <p className="v2-project__meta">{meta}</p>
            </div>
            {/* Structure (Thomas, 2026-11-16): one-line summary, then Problem / My contribution / Impact.
                Placeholder copy; the old one-paragraph description stays in the data for reference. */}
            <div className="v2-panel__story">
              <p className="v2-panel__summary">{story.summary}</p>
              <dl className="v2-panel__sections">
                <div>
                  <dt>Problem</dt>
                  <dd>
                    {story.problem.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </dd>
                </div>
                <div>
                  <dt>My contribution</dt>
                  <dd>
                    {story.contribution.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </dd>
                </div>
                <div>
                  <dt>Impact</dt>
                  <dd>
                    {story.impact.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="v2-panel__media">
            <div ref={panelVisualRef} className="v2-panel__visual">
              <ProjectVideo src={video} poster={poster} title={title} />
            </div>
            {/* Process stills (Thomas, 2026-11-18): only the opening visual moves. Projects
                without stills yet keep the placeholder frames. */}
            {stills.length > 0 ? (
              <div className="v2-panel__stills">
                {stills.map((still) => (
                  <figure
                    key={still.src}
                    className={
                      still.wide
                        ? "v2-panel__still v2-panel__still--wide"
                        : "v2-panel__still"
                    }
                  >
                    <Image
                      src={still.src}
                      alt={still.alt}
                      width={1920}
                      height={1080}
                      sizes="(min-width: 1024px) 60vw, 100vw"
                    />
                    <figcaption className="v2-project__meta">
                      {still.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            ) : (
              <div className="v2-panel__gallery" aria-hidden="true">
                <div className="v2-panel__frame v2-panel__frame--wide" />
                <div className="v2-panel__frame" />
                <div className="v2-panel__frame" />
              </div>
            )}
          </div>
        </div>
      </dialog>
    </>
  );
}
