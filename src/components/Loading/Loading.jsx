import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const FULL_LOADING_TEXT = "Initializing portfolio...";

export default function Loading() {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    let typingInterval;

    const typingDelay = setTimeout(() => {
      typingInterval = setInterval(() => {
        currentIndex += 1;
        setTypedText(FULL_LOADING_TEXT.slice(0, currentIndex));

        if (currentIndex >= FULL_LOADING_TEXT.length) {
          clearInterval(typingInterval);
        }
      }, 45);
    }, 450);

    return () => {
      clearTimeout(typingDelay);
      clearInterval(typingInterval);
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-canvas px-4 sm:px-5"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02, filter: "blur(5px)" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      role="status"
      aria-label="Loading portfolio"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-ink) 1px, transparent 1px), linear-gradient(90deg, var(--color-ink) 1px, transparent 1px)",
          backgroundSize: "38px 38px",
        }}
      />

      <motion.div
        className="pointer-events-none absolute h-80 w-80 rounded-full bg-accent/10 blur-[120px]"
        initial={{ opacity: 0, scale: 0.65 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      />

      <motion.div
        className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-line bg-surface/95 shadow-2xl backdrop-blur-xl"
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-ink/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-ink/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-accent" />
          </div>

          <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted">
            portfolio.exe
          </span>

          <span className="w-[42px]" />
        </div>

        <div className="relative px-6 py-7 sm:px-8 sm:py-8">
          <motion.div
            className="absolute right-7 top-7 hidden flex-col items-center sm:flex"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 0.65, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <div className="flex h-11 w-16 items-center justify-center rounded-md border border-line bg-canvas/70">
              <motion.span
                className="font-mono text-xs text-accent"
                animate={{ opacity: [0.35, 1, 0.35] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
              >
                &lt;/&gt;
              </motion.span>
            </div>

            <div className="h-2 w-[2px] bg-line" />
            <div className="h-[2px] w-8 rounded-full bg-line" />
          </motion.div>

          <motion.div
            className="mb-7 flex items-center gap-3"
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <span className="font-mono text-sm text-accent">&gt;</span>
            <span className="font-mono text-sm text-muted">npm run dev</span>
          </motion.div>

          <div className="flex min-h-8 items-center overflow-hidden pr-1">
            <span className="whitespace-nowrap font-mono text-sm font-semibold text-ink min-[380px]:text-base sm:text-lg">
              {typedText}
            </span>

            <motion.span
              className="ml-1 inline-block h-5 w-[2px] shrink-0 bg-accent sm:h-6"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.65, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <motion.div
            className="mt-5 space-y-2 font-mono text-[10px] text-muted sm:text-[11px]"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.55, duration: 0.4 }}
          >
            <div className="flex items-center gap-2">
              <span className="text-accent">✓</span>
              <span>Loading components</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-accent">✓</span>
              <span>Preparing developer workspace</span>
            </div>
          </motion.div>

          <div className="mt-7 h-[2px] overflow-hidden rounded-full bg-line">
            <motion.div
              className="h-full rounded-full bg-accent"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.2, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          <motion.div
            className="mt-4 flex items-center justify-between gap-3 font-mono text-[8px] uppercase tracking-[0.12em] text-muted min-[380px]:text-[9px] sm:text-[10px] sm:tracking-[0.15em]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.4 }}
          >
            <span className="whitespace-nowrap">John Vince Lopez</span>

            <div className="flex items-center gap-2 whitespace-nowrap">
              <motion.span
                className="h-1.5 w-1.5 rounded-full bg-accent"
                animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1, 0.8] }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
              />
              <span>Server ready</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
