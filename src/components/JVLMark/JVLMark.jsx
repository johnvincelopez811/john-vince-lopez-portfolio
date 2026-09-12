/**
 * Custom wordmark — not a monogram-in-a-circle. A bracket rule frames
 * the initials, echoing the "build index / record" language used
 * throughout the site. Reused in Navbar, Loading, and Footer.
 */
export default function JVLMark({ size = "base", className = "" }) {
  const textSize = size === "lg" ? "text-2xl" : size === "sm" ? "text-base" : "text-xl";

  return (
    <span className={`inline-flex items-center gap-[3px] font-display font-semibold ${textSize} ${className}`}>
      <span aria-hidden="true" className="text-accent">
        [
      </span>
      <span className="text-ink">JVL</span>
      <span aria-hidden="true" className="text-accent">
        ]
      </span>
    </span>
  );
}
