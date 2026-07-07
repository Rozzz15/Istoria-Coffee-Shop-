import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal, LineReveal } from "./Reveals";
import { GALLERY } from "../data/content";
import { cn } from "../utils/cn";

export function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // slow horizontal drift across the whole exhibition
  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-4%"]);

  return (
    <section id="gallery" className="relative overflow-hidden py-[18vh]">
      <div className="mx-auto mb-16 max-w-5xl px-6">
        <Reveal>
          <p className="eyebrow mb-6">An exhibition</p>
        </Reveal>
        <LineReveal
          lines={["Frames", "from the room."]}
          as="h2"
          className="font-display text-5xl font-light leading-[0.95] text-espresso sm:text-6xl"
        />
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-md font-serif text-lg italic text-walnut/80">
            Not a gallery. A wall of afternoons, hung slightly out of order.
          </p>
        </Reveal>
      </div>

      {/* Editorial masonry — different scales, overlapping whitespace */}
      <motion.div ref={ref} style={{ x }} className="px-6">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-5 md:grid-cols-12 md:gap-8">
          {GALLERY.map((g, i) => (
            <figure
              key={i}
              className={cn(
                "group relative",
                g.tall
                  ? "col-span-1 row-span-2 self-start md:col-span-4"
                  : "col-span-1 md:col-span-4",
                // stagger vertical offset for magazine composition
                i % 3 === 1 ? "md:mt-24" : "",
                i % 3 === 2 ? "md:mt-12" : ""
              )}
            >
              <div className="overflow-hidden rounded-[3px] shadow-[0_30px_60px_-40px_rgba(42,29,18,0.5)]">
                <img
                  src={g.src}
                  alt={g.caption}
                  loading="lazy"
                  className={cn(
                    "w-full object-cover img-wash transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]",
                    g.tall ? "aspect-[3/4]" : "aspect-[4/3]"
                  )}
                />
              </div>
              <figcaption className="mt-3 font-sans text-[0.65rem] uppercase tracking-[0.28em] text-umber/70">
                {g.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
