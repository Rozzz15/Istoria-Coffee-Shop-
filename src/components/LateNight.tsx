import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ParallaxImage, LineReveal, Reveal } from "./Reveals";
import { IMAGES } from "../data/content";

export function LateNight() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const glow = useTransform(scrollYProgress, [0, 0.5, 1], [0.15, 0.4, 0.15]);
  const textY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      id="latenight"
      ref={ref}
      className="relative overflow-hidden bg-night py-[26vh]"
    >
      {/* Ambient parallax window light */}
      <div className="absolute inset-0">
        <ParallaxImage
          src={IMAGES.lateNight}
          alt="A window glowing warm against the dark of a quiet night at ISTORIA."
          amount={90}
          rounded="rounded-none"
          className="h-full w-full opacity-40"
        />
      </div>

      <motion.div
        className="absolute inset-0"
        style={{ opacity: glow }}
        aria-hidden
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(80% 60% at 50% 50%, rgba(156,74,46,0.35) 0%, rgba(18,13,8,0.85) 70%, rgba(18,13,8,0.96) 100%)",
        }}
        aria-hidden
      />

      <motion.div
        className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 text-center text-cream"
        style={{ y: textY }}
      >
        <Reveal>
          <p className="eyebrow mb-8 text-honey/70">Chapter Five</p>
        </Reveal>

        <LineReveal
          lines={["Late nights", "have their own light."]}
          as="h2"
          className="font-display text-5xl font-light leading-[0.95] sm:text-6xl md:text-7xl"
        />

        <Reveal delay={0.3}>
          <p className="mt-10 max-w-xl font-serif text-lg leading-relaxed text-cream/75 sm:text-xl">
            Rain against the glass. A lamp that refuses to sleep. The last
            espresso of someone who isn't ready for the day to end. We keep the
            lights low and the door open a little longer than we should. Some
            stories are only told after dark.
          </p>
        </Reveal>

        <Reveal delay={0.5}>
          <div className="mt-12 flex items-center gap-4 text-cream/50">
            <span className="h-px w-10 bg-cream/30" />
            <span className="font-serif text-sm italic">
              open until the last cup is poured
            </span>
            <span className="h-px w-10 bg-cream/30" />
          </div>
        </Reveal>
      </motion.div>
    </section>
  );
}
