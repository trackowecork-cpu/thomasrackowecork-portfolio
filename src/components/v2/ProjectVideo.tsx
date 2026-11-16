"use client";

import { useEffect, useId, useRef, useState, useSyncExternalStore } from "react";
import { CloseIcon, PauseIcon, PlayIcon } from "./icons";
import { useTheme } from "./theme";

/** One file for both themes, or a version per theme. */
export type ThemedSrc = string | { light: string; dark: string };

type Props = {
  src: ThemedSrc;
  poster: ThemedSrc;
  /** Project title, used in the play/pause button label. */
  title: string;
  /** Short project summary. When set, clicking the visual reveals it over the image. */
  info?: string;
};

const pick = (value: ThemedSrc, theme: "light" | "dark") =>
  typeof value === "string" ? value : value[theme];

const noop = () => () => {};

// Muted, looping project visual.
// - Only the video for the active theme is loaded; switching theme swaps the source.
// - Plays only while at least half of it is on screen, so off-screen videos don't run.
// - Visitors who ask for reduced motion see the still poster frame; they can still press play.
// - A visible pause/play button is always available (WCAG 2.2.2 Pause, Stop, Hide).
export default function ProjectVideo({ src, poster, title, info }: Props) {
  const [infoOpen, setInfoOpen] = useState(false);
  const infoId = useId();
  const openRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  // Move focus into the summary when it opens and back to the visual when it closes.
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    (infoOpen ? closeRef : openRef).current?.focus();
  }, [infoOpen]);
  const theme = useTheme();
  // False during server render and hydration, true after: the theme is only known in the browser.
  const mounted = useSyncExternalStore(noop, () => true, () => false);
  const videoSrc = pick(src, theme);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  // Set once the visitor presses the button, so scrolling never overrides their choice.
  const userChoice = useRef<"play" | "pause" | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const observer = new IntersectionObserver(
      ([entry]) => {
        const wantsPlay =
          userChoice.current === "play" || (userChoice.current === null && !reducedMotion.matches);
        if (entry.isIntersecting && wantsPlay) {
          video.play().catch(() => setPlaying(false));
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(video);

    const onReducedMotionChange = () => {
      if (reducedMotion.matches && userChoice.current !== "play") video.pause();
    };
    reducedMotion.addEventListener("change", onReducedMotionChange);

    return () => {
      observer.disconnect();
      reducedMotion.removeEventListener("change", onReducedMotionChange);
    };
  }, [mounted, videoSrc]);

  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      userChoice.current = "play";
      video.play().catch(() => setPlaying(false));
    } else {
      userChoice.current = "pause";
      video.pause();
    }
  };

  return (
    <div className={`v2-project__visual${infoOpen ? " is-info-open" : ""}`}>
      {/* Posters for both themes; CSS shows the right one before JavaScript runs, so no flash. */}
      {typeof poster === "string" ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img className="v2-project__poster" src={poster} alt="" />
      ) : (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="v2-project__poster v2-only-light" src={poster.light} alt="" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="v2-project__poster v2-only-dark" src={poster.dark} alt="" loading="lazy" />
        </>
      )}
      {mounted && (
        <video
          key={videoSrc}
          ref={videoRef}
          src={videoSrc}
          poster={pick(poster, theme)}
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          tabIndex={-1}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        />
      )}
      {info && (
        <>
          {/* The whole visual is the button that reveals the summary. */}
          <button
            ref={openRef}
            type="button"
            className="v2-summary-open"
            aria-expanded={infoOpen}
            aria-controls={infoId}
            onClick={() => setInfoOpen(true)}
          >
            <span className="v2-visually-hidden">About this project: {title}</span>
          </button>
          <div
            id={infoId}
            className="v2-summary"
            hidden={!infoOpen}
            onKeyDown={(event) => event.key === "Escape" && setInfoOpen(false)}
          >
            <p>{info}</p>
            <button
              ref={closeRef}
              type="button"
              className="v2-summary-close"
              onClick={() => setInfoOpen(false)}
              aria-label={`Close summary: ${title}`}
            >
              <CloseIcon size={20} />
            </button>
          </div>
        </>
      )}
      <button
        type="button"
        className="v2-video-button"
        onClick={toggle}
        aria-label={`${playing ? "Pause" : "Play"} video: ${title}`}
      >
        {playing ? <PauseIcon /> : <PlayIcon />}
      </button>
    </div>
  );
}
