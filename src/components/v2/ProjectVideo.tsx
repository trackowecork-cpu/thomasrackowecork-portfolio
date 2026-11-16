"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { PauseIcon, PlayIcon } from "./icons";
import { useTheme } from "./theme";

/** One file for both themes, or a version per theme. */
export type ThemedSrc = string | { light: string; dark: string };

type Props = {
  src: ThemedSrc;
  poster: ThemedSrc;
  /** Project title, used in the play/pause button label. */
  title: string;
  /** When set, the whole visual is a button that opens the project panel. */
  onOpen?: () => void;
};

const pick = (value: ThemedSrc, theme: "light" | "dark") =>
  typeof value === "string" ? value : value[theme];

const noop = () => () => {};

// Muted, looping project visual.
// - Only the video for the active theme is loaded; switching theme swaps the source.
// - Plays only while at least half of it is on screen, so off-screen videos don't run.
// - Visitors who ask for reduced motion see the still poster frame; they can still press play.
// - A visible pause/play button is always available (WCAG 2.2.2 Pause, Stop, Hide).
export default function ProjectVideo({ src, poster, title, onOpen }: Props) {
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

  // "View project" label that follows the mouse with a little easing (none with reduced motion).
  const cursorRef = useRef<HTMLSpanElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const frame = useRef(0);

  const place = () => {
    const el = cursorRef.current;
    if (el) el.style.translate = `${current.current.x}px ${current.current.y}px`;
  };

  const follow = () => {
    const ease = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 1 : 0.22;
    current.current.x += (target.current.x - current.current.x) * ease;
    current.current.y += (target.current.y - current.current.y) * ease;
    place();
    const settled =
      Math.abs(target.current.x - current.current.x) < 0.1 && Math.abs(target.current.y - current.current.y) < 0.1;
    frame.current = settled ? 0 : requestAnimationFrame(follow);
  };

  const moveCursor = (event: React.PointerEvent) => {
    if (event.pointerType !== "mouse") return;
    target.current = { x: event.clientX, y: event.clientY };
    if (!frame.current) frame.current = requestAnimationFrame(follow);
  };

  const showCursor = (event: React.PointerEvent) => {
    if (event.pointerType !== "mouse") return;
    target.current = { x: event.clientX, y: event.clientY };
    current.current = { ...target.current };
    place();
    cursorRef.current?.classList.add("is-visible");
  };

  const hideCursor = () => {
    cursorRef.current?.classList.remove("is-visible");
    cancelAnimationFrame(frame.current);
    frame.current = 0;
  };

  useEffect(() => () => cancelAnimationFrame(frame.current), []);

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
    <div className="v2-project__visual">
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
      {onOpen && (
        // The whole visual opens the project panel; the pause button sits above it.
        // With a mouse, a "View project" label follows the pointer in place of the cursor.
        <button
          type="button"
          className="v2-visual-open"
          aria-haspopup="dialog"
          onClick={onOpen}
          onPointerEnter={showCursor}
          onPointerMove={moveCursor}
          onPointerLeave={hideCursor}
        >
          <span className="v2-visually-hidden">View project: {title}</span>
        </button>
      )}
      {onOpen && (
        <span ref={cursorRef} className="v2-view-cursor" aria-hidden="true">
          View project
        </span>
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
