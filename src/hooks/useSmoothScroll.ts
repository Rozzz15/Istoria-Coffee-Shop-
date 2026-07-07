import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Cinematic smooth scroll. Creates a single Lenis instance, stores it on the
 * window for anchor navigation, and drives it from one requestAnimationFrame loop.
 * Mount once near the root of the app.
 */
export function useSmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.4,
    });

    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      (window as unknown as { __lenis?: Lenis }).__lenis = undefined;
    };
  }, []);
}

/** Scroll to any element by id with silk-smooth easing */
export function scrollToId(id: string) {
  const lenis = (window as unknown as { __lenis?: Lenis }).__lenis;
  const el = document.getElementById(id);
  if (!el) return;
  if (lenis) lenis.scrollTo(el, { offset: 0, duration: 1.6 });
  else el.scrollIntoView({ behavior: "smooth" });
}
