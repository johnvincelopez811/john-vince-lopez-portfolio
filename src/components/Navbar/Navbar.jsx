import { useEffect, useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";
import { navLinks, buildIndex } from "../../data/site";
import { useActiveSectionContext } from "../../context/ActiveSectionContext";
import Container from "../Container/Container";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import JVLMark from "../JVLMark/JVLMark";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { activeId, goToSection } = useActiveSectionContext();
  const onHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  // Menu closes and the jump happens in the same tick — navigation is
  // never delayed by the menu's own (short) exit transition.
  const handleNavClick = (to) => {
    setMenuOpen(false);
    goToSection(to);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 themed-transition ${
        scrolled ? "bg-canvas/90 backdrop-blur-md border-b border-line" : "border-b border-transparent"
      }`}
    >
      <Container as="nav" className="flex h-16 items-center justify-between">
        <RouterLink to="/" className="focus-ring" aria-label="Go to homepage">
          <JVLMark />
        </RouterLink>

        {onHome && (
          <span className="hidden lg:inline-block font-mono text-xs text-faint" aria-hidden="true">
            {buildIndex.find((item) => item.to === activeId)?.num ?? "01"} / {String(buildIndex.length).padStart(2, "0")}
          </span>
        )}

        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = onHome && activeId === link.to;
            return (
              <li key={link.to}>
                <button
                  type="button"
                  onClick={() => handleNavClick(link.to)}
                  className={`focus-ring group cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 ${
                    isActive ? "text-ink" : "text-muted hover:text-ink"
                  }`}
                  aria-current={isActive ? "true" : undefined}
                >
                  <span className="relative">
                    {link.label}
                    <span
                      className={`absolute -bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent transition-opacity duration-200 ${
                        isActive ? "opacity-100" : "opacity-0 group-hover:opacity-40"
                      }`}
                      aria-hidden="true"
                    />
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="focus-ring text-ink text-2xl p-2 -mr-2"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <HiOutlineXMark /> : <HiOutlineBars3 />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="lg:hidden bg-canvas border-t border-line overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.to}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.18, delay: index * 0.03, ease: "easeOut" }}
                >
                  <button
                    type="button"
                    onClick={() => handleNavClick(link.to)}
                    className={`focus-ring block w-full text-left cursor-pointer rounded-lg px-3 py-3 text-base font-medium transition-colors ${
                      onHome && activeId === link.to ? "text-ink bg-surface-2" : "text-muted hover:text-ink hover:bg-surface-2"
                    }`}
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
