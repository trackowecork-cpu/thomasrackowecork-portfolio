"use client";

import { useEffect, useRef, useState } from "react";
import { PauseIcon, PlayIcon } from "./icons";

type Props = {
  src: string;
  poster: string;
  /** Project title, used in the play/pause button label. */
  title: string;
};

// Muted, looping project visual.
// - Plays only while at least half of it is on screen, so off-screen videos don't run.
// - Visitors who ask for reduced motion see the still poster frame; they can still press play.
// - A visible pause/play button is always available (WCAG 2.2.2 Pause, Stop, Hide).
export default function ProjectVideo({ src, poster, title }: Props) {
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
  }, []);

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
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        tabIndex={-1}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
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
