import { Reveal } from "./Reveals";
import { scrollToId } from "../hooks/useSmoothScroll";
import { IMAGES } from "../data/content";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Footer() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <footer
      id="find"
      ref={ref}
      className="relative overflow-hidden bg-night px-6 py-[20vh] text-cream"
    >
      {/* Cinematic background image */}
      <motion.div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        style={{ y: imgY }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `url(${IMAGES.window}) center / cover no-repeat`,
            filter: "saturate(0.85) contrast(1.1) brightness(0.35) sepia(0.12)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(18,13,8,0.3) 0%, rgba(18,13,8,0.55) 40%, rgba(18,13,8,0.85) 75%, rgba(18,13,8,1) 100%)",
          }}
        />
      </motion.div>

      {/* Warm atmospheric glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2"
        style={{
          width: "70%",
          height: "60%",
          background:
            "radial-gradient(50% 80% at 50% -10%, rgba(192,138,74,0.12) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-24 md:mb-32">
          <Reveal>
            <p className="eyebrow mb-6 tracking-[0.5em] text-honey/60">
              Find the door
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-display text-5xl font-light leading-[0.92] tracking-tight text-cream sm:text-6xl md:text-8xl">
              We saved
              <br />
              <span className="italic text-honey/80">you a seat.</span>
            </h2>
          </Reveal>
        </div>

        {/* Divider line */}
        <div className="mb-20 flex items-center gap-6">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-honey/30 to-transparent" />
          <span className="font-serif text-2xl italic text-honey/40">✦</span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-honey/30 to-transparent" />
        </div>

        {/* Info grid */}
        <div className="mb-28 grid grid-cols-1 gap-16 md:grid-cols-3">
          <Reveal delay={0.15}>
            <div className="group">
              <div className="mb-5 flex items-center gap-3">
                <span className="block h-px w-6 bg-honey/40" />
                <p className="eyebrow tracking-[0.4em] text-cream/35">
                  Where
                </p>
              </div>
              <p className="font-serif text-2xl leading-relaxed text-cream/90 md:text-3xl">
                14 Linden Lane
              </p>
              <p className="mt-2 font-serif text-lg leading-relaxed text-cream/50">
                Between the bakery
                <br />
                and the bookstore
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="group">
              <div className="mb-5 flex items-center gap-3">
                <span className="block h-px w-6 bg-honey/40" />
                <p className="eyebrow tracking-[0.4em] text-cream/35">When</p>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="font-serif text-lg text-cream/50">Mon – Fri</p>
                  <p className="font-serif text-2xl text-cream/90 md:text-3xl">
                    7 till late
                  </p>
                </div>
                <div>
                  <p className="font-serif text-lg text-cream/50">Sat – Sun</p>
                  <p className="font-serif text-2xl text-cream/90 md:text-3xl">
                    8 till late
                  </p>
                </div>
                <p className="mt-4 font-serif text-lg italic text-cream/40">
                  Always, for you
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.35}>
            <div className="group">
              <div className="mb-5 flex items-center gap-3">
                <span className="block h-px w-6 bg-honey/40" />
                <p className="eyebrow tracking-[0.4em] text-cream/35">Speak</p>
              </div>
              <p className="font-serif text-2xl text-cream/90 transition-colors duration-500 hover:text-honey md:text-3xl">
                business.istoria@gmail.com
              </p>
              <p className="mt-2 font-serif text-2xl text-cream/90 transition-colors duration-500 hover:text-honey md:text-3xl">
                +00 0000 0000
              </p>
              <button
                data-cursor="hover"
                onClick={() => scrollToId("top")}
                className="link-underline mt-8 font-sans text-[0.65rem] uppercase tracking-[0.35em] text-honey/70 transition-colors duration-500 hover:text-honey"
              >
                back to the beginning
              </button>
            </div>
          </Reveal>
        </div>

        {/* Footer base */}
        <div className="flex flex-col items-center gap-6 border-t border-cream/8 pt-12 text-center md:flex-row md:justify-between">
          <span className="flex items-center gap-2">
            <img
              src="/images/logo.jpg"
              alt=""
              className="h-5 w-auto"
            />
            <span className="font-display text-2xl italic tracking-wide text-cream/50">
              ISTORIA
            </span>
          </span>
          <p className="font-serif text-sm italic text-cream/35">
            A place where coffee becomes memories.
          </p>
          <p className="font-sans text-[0.55rem] uppercase tracking-[0.35em] text-cream/25">
            &copy; {new Date().getFullYear()} — every table holds another chapter
          </p>
        </div>
      </div>
    </footer>
  );
}
