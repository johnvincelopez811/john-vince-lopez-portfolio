// ---------------------------------------------------------------------------
// Centralized section navigation. One animated-scroll implementation used
// everywhere (Navbar, Hero CTA, Footer, Build Index, mobile menu) so there
// is never more than one scrolling system running at a time.
// ---------------------------------------------------------------------------

// Must match the fixed navbar's height (h-16 = 64px) so the target
// section's heading lands fully visible below it.
export const NAVBAR_OFFSET = 64;

// Fast but still visibly animated, per design spec (300–500ms window).
const SCROLL_DURATION = 380;

function prefersReducedMotion() {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function easeInOutQuad(t) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

let activeFrame = null;

/**
 * Animates directly to a section by id — one short, fast, cancellable
 * scroll (no easing library, no react-scroll, no CSS smooth-scroll).
 * Any in-flight animation is cancelled before starting a new one, so
 * rapid clicks never fight each other. Falls back to an instant jump
 * when the user prefers reduced motion.
 */
export function navigateToSection(sectionId, { updateHash = true } = {}) {
  const target = document.getElementById(sectionId);
  if (!target) return false;

  const destination = Math.max(
    target.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET,
    0
  );

  if (activeFrame) {
    cancelAnimationFrame(activeFrame);
    activeFrame = null;
  }

  if (updateHash && window.history?.replaceState) {
    window.history.replaceState(null, "", `#${sectionId}`);
  }

  if (prefersReducedMotion()) {
    window.scrollTo({ top: destination, behavior: "auto" });
    return true;
  }

  const start = window.scrollY;
  const distance = destination - start;
  const startTime = performance.now();

  function step(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / SCROLL_DURATION, 1);
    window.scrollTo(0, start + distance * easeInOutQuad(progress));

    if (progress < 1) {
      activeFrame = requestAnimationFrame(step);
    } else {
      activeFrame = null;
    }
  }

  activeFrame = requestAnimationFrame(step);
  return true;
}
