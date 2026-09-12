import { motion } from "framer-motion";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";
import { useTheme } from "../../context/ThemeContext";

export default function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={isDark}
      className={`focus-ring card flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:border-accent/60 ${className}`}
    >
      <motion.span
        key={theme}
        initial={{ opacity: 0, rotate: -60, scale: 0.7 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="text-lg"
      >
        {isDark ? <HiOutlineSun aria-hidden="true" /> : <HiOutlineMoon aria-hidden="true" />}
      </motion.span>
    </button>
  );
}
