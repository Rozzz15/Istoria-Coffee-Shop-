import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * A quiet opening title card. Cream, a single word, a held breath — then it
 * dissolves and the scene underneath is already unfolding.
 */
export function Intro() {
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setGone(true), 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-cream"
      initial={{ opacity: 1 }}
      animate={{ opacity: gone ? 0 : 1 }}
      transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: gone ? 0 : 1.4 }}
      style={{ pointerEvents: gone ? "none" : "auto" }}
      aria-hidden
    >
      <motion.div
        initial={{ opacity: 0, letterSpacing: "0.7em" }}
        animate={{ opacity: 1, letterSpacing: "0.42em" }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        className="font-display text-3xl font-light text-espresso sm:text-4xl"
      >
        ISTORIA
      </motion.div>
    </motion.div>
  );
}
