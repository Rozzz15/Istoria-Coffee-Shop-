import { ParallaxImage, Reveal, LineReveal } from "./Reveals";
import { CHAPTERS } from "../data/content";
import { cn } from "../utils/cn";

export function Chapters() {
  return (
    <div className="relative">
      {CHAPTERS.map((c, i) => (
        <Scene key={c.id} chapter={c} flip={i % 2 === 1} />
      ))}
    </div>
  );
}

function Scene({
  chapter,
  flip,
}: {
  chapter: (typeof CHAPTERS)[number];
  flip: boolean;
}) {
  return (
    <section
      id={chapter.id}
      className="relative mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-10 px-6 py-[14vh] md:grid-cols-12 md:gap-16 md:py-[20vh]"
    >
      {/* Image */}
      <div
        className={cn(
          "md:col-span-7",
          flip ? "md:order-2 md:col-start-6" : "md:order-1 md:col-start-1"
        )}
      >
        <ParallaxImage
          src={chapter.image}
          alt={chapter.caption}
          amount={70}
          className="aspect-[4/5] w-full shadow-[0_40px_80px_-40px_rgba(42,29,18,0.55)]"
        />
        <Reveal delay={0.2}>
          <p className="mt-4 font-serif text-sm italic text-walnut/70">
            {chapter.caption}
          </p>
        </Reveal>
      </div>

      {/* Text */}
      <div
        className={cn(
          "md:col-span-5",
          flip ? "md:order-1 md:col-start-1 md:row-start-1" : "md:order-2 md:col-start-8"
        )}
      >
        <Reveal>
          <p className="eyebrow mb-6">{chapter.index}</p>
        </Reveal>
        <LineReveal
          lines={chapter.title}
          as="h2"
          className="font-display text-5xl font-light leading-[0.95] text-espresso sm:text-6xl md:text-7xl"
        />
        <Reveal delay={0.25}>
          <p className="mt-8 max-w-md font-serif text-lg leading-relaxed text-coffee/90 sm:text-xl">
            {chapter.body}
          </p>
        </Reveal>

        <Reveal delay={0.4}>
          <span className="mt-10 block h-px w-16 bg-umber/50" />
        </Reveal>
      </div>
    </section>
  );
}
