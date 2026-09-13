import { useEffect, useRef, useState } from "react";
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion";

/**
 * Seamless-looping technology strip. Renders the item list twice so the
 * CSS animation can shift exactly -50% and loop without a visible seam.
 * Direction: "left" scrolls right-to-left, "right" scrolls left-to-right.
 */
export default function Marquee({ items, direction = "left", renderItem }) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const marqueeRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin: "120px 0px" },
    );

    observer.observe(marquee);
    return () => observer.disconnect();
  }, []);

  const animationClass = prefersReducedMotion || !isVisible
    ? ""
    : direction === "left"
    ? "animate-marquee"
    : "animate-marquee-reverse";

  return (
    <div
      ref={marqueeRef}
      className="group relative overflow-hidden"
      style={{
        maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div className={`flex w-max gap-3 ${animationClass} group-hover:[animation-play-state:paused]`}>
        {[...items, ...items].map((item, index) => (
          <div key={`${item.name}-${index}`} className="flex-shrink-0">
            {renderItem(item)}
          </div>
        ))}
      </div>
    </div>
  );
}
