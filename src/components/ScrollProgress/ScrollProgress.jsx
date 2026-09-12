import { motion, useScroll } from "framer-motion";

/**
 * Thin progress bar fixed to the top of the viewport. Bound directly to
 * the real-time scroll progress motion value — no spring smoothing, so
 * it never trails behind or keeps moving after the user stops.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[60] bg-accent"
      style={{ scaleX: scrollYProgress }}
      aria-hidden="true"
    />
  );
}
