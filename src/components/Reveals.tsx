import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef, type ReactNode, type ElementType } from "react";
import { cn } from "../utils/cn";

const EASE = [0.16, 1, 0.3, 1] as const;

/* ----------------------------------------------------------------
   Reveal — a single element that drifts up and fades in on view
----------------------------------------------------------------- */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: ElementType;
}) {
  const M = motion(as as ElementType);
  return (
    <M
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px -12% 0px" }}
      transition={{ duration: 1.2, ease: EASE, delay }}
    >
      {children}
    </M>
  );
}

/* ----------------------------------------------------------------
   LineReveal — splits text into masked lines that rise into place
----------------------------------------------------------------- */
const lineWrap: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.05 } },
};
const lineChild: Variants = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 1.15, ease: EASE } },
};

export function LineReveal({
  lines,
  className,
  delay = 0,
  as = "h2",
}: {
  lines: string[];
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p";
}) {
  const M = motion(as);
  return (
    <M
      className={className}
      variants={lineWrap}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px" }}
      style={{ transitionDelay: `${delay}s` }}
    >
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span variants={lineChild} className="block">
            {line}
          </motion.span>
        </span>
      ))}
    </M>
  );
}

/* ----------------------------------------------------------------
   ParallaxImage — an image that drifts slower than the page
----------------------------------------------------------------- */
export function ParallaxImage({
  src,
  alt,
  className,
  amount = 60,
  rounded = "rounded-[3px]",
}: {
  src: string;
  alt: string;
  className?: string;
  amount?: number;
  rounded?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [amount, -amount]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.18, 1.18]);

  return (
    <div ref={ref} className={cn("overflow-hidden", rounded, className)}>
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        style={{ y, scale }}
        className="h-full w-full object-cover img-wash will-change-transform"
      />
    </div>
  );
}

/* ----------------------------------------------------------------
   RevealItem — for grids where children stagger in
----------------------------------------------------------------- */
export function RevealItem({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 1.1, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}
