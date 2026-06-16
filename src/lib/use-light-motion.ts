"use client";

import { useSyncExternalStore } from "react";

const QUERY = "(max-width: 1023px), (prefers-reduced-motion: reduce)";

function subscribe(onChange: () => void) {
  const mq = window.matchMedia(QUERY);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function getSnapshot() {
  return window.matchMedia(QUERY).matches;
}

/** True on phones/tablets and when the user prefers reduced motion. */
export function useLightMotion() {
  return useSyncExternalStore(subscribe, getSnapshot, () => false);
}
