import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { IMAGES } from "../data/content";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [loaded, setLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.2, 1.32]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const op = useTransform(scrollYProgress, [0, 1], [0.55, 0.8]);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 120);
    return () => clearTimeout(t);
  }, []);

  const titleChars = "ISTORIA".split("");

  return (
    <section
      ref={ref}
      id="top"
      className="relative h-[100svh] w-full overflow-hidden bg-night"
    >
      {/* Cinematic photograph */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{ y: imgY, scale: imgScale }}
      >
        <motion.img
          src={IMAGES.hero}
          alt="Warm morning light spilling across an empty wooden table at ISTORIA, a cup of coffee resting in the quiet."
          className="h-full w-full object-cover img-wash"
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: loaded ? 1 : 0, scale: 1.2 }}
          transition={{ duration: 2.4, ease: EASE }}
        />
      </motion.div>

      {/* Warm duotone washes + vignette */}
      <motion.div
        className="absolute inset-0"
        style={{ opacity: op }}
        aria-hidden
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(18,13,8,0.55) 0%, rgba(18,13,8,0.12) 32%, rgba(18,13,8,0.05) 50%, rgba(18,13,8,0.78) 100%)",
        }}
        aria-hidden
      />

      {/* Title block */}
      <motion.div
        className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center"
        style={{ y: titleY, opacity: fade }}
      >
        <motion.p
          className="eyebrow mb-7 text-cream/70"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 1.4, ease: EASE }}
        >
          A place where coffee becomes memories
        </motion.p>

        <h1 className="font-display text-cream">
          <span className="block overflow-hidden pb-[0.12em]">
            <motion.span
              className="flex justify-center text-[19vw] font-light leading-[0.82] tracking-[0.04em] sm:text-[15vw] md:text-[13rem]"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.09, delayChildren: 1.2 } },
              }}
            >
              {titleChars.map((c, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  variants={{
                    hidden: { y: "115%" },
                    show: {
                      y: "0%",
                      transition: { duration: 1.5, ease: EASE },
                    },
                  }}
                >
                  {c}
                </motion.span>
              ))}
            </motion.span>
          </span>
        </h1>

        <motion.div
          className="mt-8 flex items-center gap-4 text-cream/65"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 1.6, ease: EASE }}
        >
          <span className="h-px w-12 bg-cream/40" />
          <span className="font-serif text-sm italic tracking-wide">
            est. somewhere between a morning and a memory
          </span>
          <span className="h-px w-12 bg-cream/40" />
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-cream/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1.6 }}
      >
        <div className="flex flex-col items-center gap-3">
          <span className="eyebrow text-cream/50">scroll</span>
          <motion.span
            className="block h-10 w-px bg-cream/40"
            animate={{ scaleY: [0.4, 1, 0.4], originY: 0 }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
