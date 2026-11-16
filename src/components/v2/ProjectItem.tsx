"use client";

import { useEffect, useId, useRef } from "react";
import ProjectVideo, { type ThemedSrc } from "./ProjectVideo";

// Play the slide-out before closing, unless the visitor asked for reduced motion.
function closeDialog(dialog: HTMLDialogElement) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    dialog.close();
    return;
  }
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
// project's information. The panel slides in from the right, like the Contact page on the
// live site (Thomas, 2026-11-16). Native <dialog>: focus stays inside, Escape closes, and
// focus returns to the visual afterwards.
export default function ProjectItem({ title, meta, description, video, poster }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const comma = meta.indexOf(",");
  const company = comma === -1 ? meta : meta.slice(0, comma);
  const years = comma === -1 ? "" : meta.slice(comma + 1).trim();

  const open = () => dialogRef.current?.showModal();

  const close = () => dialogRef.current && closeDialog(dialogRef.current);

  // Escape: use the same animated close.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onCancel = (event: Event) => {
      event.preventDefault();
      closeDialog(dialog);
    };
    dialog.addEventListener("cancel", onCancel);
    return () => dialog.removeEventListener("cancel", onCancel);
  }, []);

  return (
    <>
      <ProjectVideo src={video} poster={poster} title={title} onOpen={open} />
      <div className="v2-min__caption">
        <h3>{title}</h3>
        <p className="v2-project__meta">{meta}</p>
      </div>

      <dialog ref={dialogRef} className="v2-panel" aria-labelledby={titleId}>
        <div className="v2-panel__bar">
          <span className="v2-panel__name">Thomas Cork</span>
          <button type="button" className="v2-panel__close" onClick={close}>
            Close <span aria-hidden="true">✕</span>
          </button>
        </div>

        <div className="v2-panel__body">
          <div className="v2-panel__main">
            <h2 id={titleId} className="v2-panel__title">
              {title}
            </h2>
            <p className="v2-panel__text">{description}</p>
          </div>
          <dl className="v2-panel__facts">
            <div>
              <dt>Company</dt>
              <dd>{company}</dd>
            </div>
            {years && (
              <div>
                <dt>Year</dt>
                <dd>{years}</dd>
              </div>
            )}
          </dl>
        </div>
      </dialog>
    </>
  );
}
