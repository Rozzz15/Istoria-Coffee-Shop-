import { motion } from "framer-motion";
import { LineReveal, Reveal } from "./Reveals";
import { scrollToId } from "../hooks/useSmoothScroll";

export function Become() {
  return (
    <section
      id="become"
      className="relative mx-auto max-w-4xl px-6 py-[24vh] text-center"
    >
      <Reveal>
        <p className="eyebrow mb-8">Chapter Six</p>
      </Reveal>

      <LineReveal
        lines={["Become part", "of the story."]}
        as="h2"
        className="font-display text-5xl font-light leading-[0.95] text-espresso sm:text-6xl md:text-7xl"
      />

      <Reveal delay={0.3}>
        <p className="mx-auto mt-10 max-w-xl font-serif text-lg leading-relaxed text-coffee/90 sm:text-xl">
          We don't have a loyalty card. We have a table with your name on it,
          even if you've never been. Come for the coffee. Stay for the chapter
          you didn't know you were writing.
        </p>
      </Reveal>

      <Reveal delay={0.5}>
        <div className="mt-14 flex flex-col items-center gap-8">
          <motion.button
            data-cursor="hover"
            onClick={() => scrollToId("find")}
            className="group relative overflow-hidden rounded-full border border-espresso/30 px-10 py-4"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 200, damping: 22 }}
          >
            <span className="relative z-10 font-sans text-xs uppercase tracking-[0.32em] text-espresso">
              Find the door
            </span>
            <span className="absolute inset-0 -z-0 translate-y-full bg-espresso transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" />
            <span className="absolute inset-0 z-10 flex items-center justify-center font-sans text-xs uppercase tracking-[0.32em] text-cream opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              Find the door
            </span>
          </motion.button>

          <p className="font-display text-3xl italic text-walnut/70">
            — ISTORIA
          </p>
        </div>
      </Reveal>
    </section>
  );
}
