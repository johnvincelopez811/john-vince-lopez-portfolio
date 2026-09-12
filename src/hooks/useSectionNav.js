import { useActiveSectionContext } from "../context/ActiveSectionContext";

/**
 * Thin convenience wrapper so components only need the navigation
 * function without pulling in the active-id state too. Every internal
 * section link in the app (Navbar, Hero CTA, Footer, Build Index,
 * mobile menu) goes through the same ActiveSectionContext instance —
 * one navigation system, no competing scroll implementations.
 */
export default function useSectionNav() {
  return useActiveSectionContext().goToSection;
}
