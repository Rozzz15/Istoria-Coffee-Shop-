import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { scrollToId } from "../hooks/useSmoothScroll";

const NAV = [
  ["story", "arrival"],
  ["menu", "menu"],
  ["frames", "gallery"],
  ["visit", "find"],
] as const;

export function Chrome() {
  const { scrollYProgress } = useScroll();
  const [shown, setShown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setShown(v > 0.04);
  });

  const handleNav = (id: string) => {
    setMenuOpen(false);
    scrollToId(id);
  };

  return (
    <>
      {/* Top progress line */}
      <motion.div
        className="fixed left-0 right-0 top-0 z-[90] h-px origin-left bg-umber/70"
        style={{ scaleX: scrollYProgress }}
        aria-hidden
      />

      {/* Fixed wordmark */}
      <motion.header
        className="fixed inset-x-0 top-0 z-[85] flex items-center justify-between px-6 py-5 mix-blend-difference md:px-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.6, duration: 1.4 }}
      >
        <button
          data-cursor="hover"
          onClick={() => handleNav("top")}
          className="flex items-center gap-3"
        >
          <img
            src="/images/logo.jpg"
            alt=""
            className="h-7 w-auto"
          />
          <span className="font-display text-lg font-light tracking-[0.4em] text-cream">
            ISTORIA
          </span>
        </button>

        {/* Desktop nav */}
        <motion.nav
          className="hidden items-center gap-9 md:flex"
          animate={{ opacity: shown ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        >
          {NAV.map(([label, id]) => (
            <button
              key={id}
              data-cursor="hover"
              onClick={() => scrollToId(id)}
              className="link-underline font-sans text-[0.7rem] uppercase tracking-[0.28em] text-cream/80"
            >
              {label}
            </button>
          ))}
        </motion.nav>

        {/* Hamburger */}
        <button
          data-cursor="hover"
          onClick={() => setMenuOpen(true)}
          className="flex flex-col items-center gap-[5px] md:hidden"
          aria-label="Open menu"
        >
          <span className="block h-px w-5 bg-cream/80 transition-transform duration-500" />
          <span className="block h-px w-5 bg-cream/80 transition-opacity duration-500" />
          <span className="block h-px w-5 bg-cream/80 transition-transform duration-500" />
        </button>
      </motion.header>

      {/* Mobile overlay */}
      <motion.div
        className="fixed inset-0 z-[95] flex flex-col items-center justify-center gap-12 bg-night/97 backdrop-blur-xl md:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: menuOpen ? 1 : 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ pointerEvents: menuOpen ? "auto" : "none" }}
      >
        {/* Close button */}
        <button
          data-cursor="hover"
          onClick={() => setMenuOpen(false)}
          className="absolute right-6 top-6 flex flex-col items-center gap-[5px]"
          aria-label="Close menu"
        >
          <span className="block h-px w-5 translate-y-[6px] rotate-45 bg-cream/80" />
          <span className="block h-px w-5 -translate-y-[6px] -rotate-45 bg-cream/80" />
        </button>

        {/* Nav links */}
        <nav className="flex flex-col items-center gap-10">
          {NAV.map(([label, id], i) => (
            <motion.button
              key={id}
              data-cursor="hover"
              onClick={() => handleNav(id)}
              className="font-display text-5xl font-light tracking-[0.08em] text-cream/90 transition-colors duration-500 hover:text-honey"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: menuOpen ? 1 : 0, y: menuOpen ? 0 : 32 }}
              transition={{
                delay: menuOpen ? 0.2 + i * 0.08 : 0,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {label}
            </motion.button>
          ))}
        </nav>

        {/* Decorative bottom line */}
        <motion.p
          className="font-serif text-sm italic tracking-wide text-cream/25"
          initial={{ opacity: 0 }}
          animate={{ opacity: menuOpen ? 1 : 0 }}
          transition={{ delay: menuOpen ? 0.6 : 0, duration: 0.8 }}
        >
          A place where coffee becomes memories.
        </motion.p>
      </motion.div>
    </>
  );
}
