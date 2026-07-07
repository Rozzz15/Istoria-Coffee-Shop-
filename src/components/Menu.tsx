import { Reveal, LineReveal, RevealItem } from "./Reveals";
import { MENU } from "../data/content";

export function Menu() {
  return (
    <section
      id="menu"
      className="relative mx-auto max-w-5xl px-6 py-[18vh] md:py-[22vh]"
    >
      <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <Reveal>
            <p className="eyebrow mb-6">A short list</p>
          </Reveal>
          <LineReveal
            lines={["Curated,", "not listed."]}
            as="h2"
            className="font-display text-5xl font-light leading-[0.95] text-espresso sm:text-6xl"
          />
        </div>
        <Reveal delay={0.2}>
          <p className="max-w-xs font-serif text-base italic leading-relaxed text-walnut/80">
            We don't print calories. We print the feeling you'll leave with.
          </p>
        </Reveal>
      </div>

      <div className="divide-y divide-umber/20">
        {MENU.map((item, i) => (
          <RevealItem key={item.name} delay={i * 0.08}>
            <article
              data-cursor="hover"
              className="group grid grid-cols-1 gap-3 py-9 transition-colors duration-500 md:grid-cols-12 md:items-baseline md:gap-8"
            >
              <span className="font-sans text-xs tracking-[0.2em] text-umber/60 md:col-span-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-3xl font-light text-espresso transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2 md:col-span-5 md:text-4xl">
                {item.name}
              </h3>
              <p className="font-serif text-lg italic leading-relaxed text-coffee/80 md:col-span-6 md:text-xl">
                {item.note}
              </p>
            </article>
          </RevealItem>
        ))}
      </div>
    </section>
  );
}
