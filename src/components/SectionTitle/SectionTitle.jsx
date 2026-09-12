import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../../lib/motion";

/**
 * Consistent section heading. Left-aligned by default to support the
 * editorial layout — pass align="center" only where centering is
 * deliberate (e.g. a short closing statement).
 */
export default function SectionTitle({ eyebrow, title, description, align = "left" }) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <motion.div
      className={`flex flex-col gap-3 max-w-2xl ${alignment}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink text-balance">{title}</h2>
      <span className="h-[2px] w-8 bg-accent" aria-hidden="true" />
      {description && <p className="text-muted text-base leading-relaxed">{description}</p>}
    </motion.div>
  );
}
