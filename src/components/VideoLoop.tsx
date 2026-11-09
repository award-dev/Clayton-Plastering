"use client";

import { useEffect, useRef, useState } from "react";

import type { Clip } from "@/data/projects";

/**
 * Silent job clip. Plays muted and looped only while on screen, never under prefers-reduced-motion,
 * and always has a visible pause/play button (clips loop longer than 5 seconds).
 */
export function VideoLoop({ clip }: { clip: Clip }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const [near, setNear] = useState(false);

  // Load the poster only when the clip gets close to the screen, so it doesn't compete with the hero.
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setNear(true), { rootMargin: "800px 0px" });
    io.observe(v);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || userPaused) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          v.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
        } else {
          v.pause();
          setPlaying(false);
        }
      },
      { threshold: 0.35 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, [userPaused]);

  function toggle() {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      setUserPaused(false);
      v.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    } else {
      setUserPaused(true);
      v.pause();
      setPlaying(false);
    }
  }

  return (
    <div className="relative">
      <video
        ref={ref}
        className="h-auto w-full bg-lime-deep"
        width={clip.width}
        height={clip.height}
        poster={near ? clip.poster : undefined}
        muted
        loop
        playsInline
        preload="none"
        aria-label={`${clip.title}. Silent clip. ${clip.summary}`}
      >
        <source src={clip.src} type="video/mp4" />
        <track kind="captions" src="/video/silent.vtt" srcLang="en" label="English (no sound)" />
      </video>
      <button
        type="button"
        onClick={toggle}
        className="absolute bottom-2 left-2 inline-flex min-h-11 min-w-11 items-center gap-2 bg-green px-3 text-[0.875rem] font-semibold text-lime hover:bg-green-deep"
      >
        {playing ? (
          <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4" fill="currentColor">
            <rect x="3" y="2" width="3.5" height="12" />
            <rect x="9.5" y="2" width="3.5" height="12" />
          </svg>
        ) : (
          <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4" fill="currentColor">
            <path d="M4 2l10 6-10 6z" />
          </svg>
        )}
        <span>{playing ? "Pause" : "Play"}</span>
        <span className="sr-only"> clip: {clip.title}</span>
      </button>
    </div>
  );
}
