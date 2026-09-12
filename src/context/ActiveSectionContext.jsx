import { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { navLinks } from "../data/site";
import { navigateToSection } from "../lib/navigation";

const SECTION_IDS = navLinks.map((link) => link.to);
const ActiveSectionContext = createContext(null);
// Slightly longer than the scroll animation itself, so the observer's
// intermediate-section events during the scroll never flicker the
// active item before the destination is reached.
const OVERRIDE_HOLD_MS = 450;

/**
 * One IntersectionObserver for the whole app (not one per consumer).
 * Tracks which section currently crosses the "reading line" — roughly
 * 30% down the viewport, adjusted for the fixed navbar — and exposes
 * an override setter so a clicked nav item activates immediately and
 * stays active for the duration of the scroll animation.
 */
export function ActiveSectionProvider({ children }) {
  const [activeId, setActiveId] = useState(SECTION_IDS[0]);
  const overrideRef = useRef(null);
  const overrideTimeoutRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== "/") return undefined;

    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean);
    if (elements.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        if (overrideRef.current) return;

        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        } else if (window.scrollY < 40) {
          setActiveId("hero");
        } else if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) {
          setActiveId("contact");
        }
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [location.pathname]);

  useEffect(() => () => clearTimeout(overrideTimeoutRef.current), []);

  const goToSection = useMemo(
    () => (sectionId) => {
      clearTimeout(overrideTimeoutRef.current);
      overrideRef.current = sectionId;
      setActiveId(sectionId);
      overrideTimeoutRef.current = setTimeout(() => {
        overrideRef.current = null;
      }, OVERRIDE_HOLD_MS);

      if (location.pathname === "/") {
        navigateToSection(sectionId);
      } else {
        // Cross-route: HomePage reads location.state.scrollTo once its
        // sections exist and calls navigateToSection itself.
        navigate("/", { state: { scrollTo: sectionId } });
      }
    },
    [location.pathname, navigate]
  );

  const value = useMemo(() => ({ activeId, goToSection }), [activeId, goToSection]);

  return <ActiveSectionContext.Provider value={value}>{children}</ActiveSectionContext.Provider>;
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);
  if (!context) throw new Error("useActiveSectionContext must be used within ActiveSectionProvider");
  return context;
}
