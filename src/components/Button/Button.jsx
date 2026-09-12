import { motion } from "framer-motion";

const VARIANTS = {
  primary:
    "border border-accent bg-accent text-canvas font-bold shadow-md hover:border-ink hover:bg-ink hover:text-canvas hover:shadow-lg",
  secondary:
    "border border-accent/60 bg-surface-2 text-ink font-semibold shadow-sm hover:border-accent hover:bg-accent-soft",
  ghost: "text-muted hover:text-ink underline-offset-4 hover:underline",
};

/**
 * Universal button. Renders a real <a> when `href` is provided
 * or a <button> otherwise.
 */
export default function Button({
  children,
  href,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
  icon: Icon,
  className = "",
  target,
  rel,
  ...rest
}) {
  const classes = `focus-ring group inline-flex h-12 cursor-pointer items-center justify-center gap-2 rounded-full px-6 text-sm transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-40 disabled:grayscale ${VARIANTS[variant]} ${className}`;

  const iconClasses =
    "transition-transform duration-200 group-hover:translate-x-0.5";

  const motionProps = disabled
    ? {}
    : {
        whileHover: { y: -1 },
        whileTap: { scale: 0.97 },
      };

  if (href && !disabled) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        className={classes}
        {...motionProps}
        {...rest}
      >
        {Icon && <Icon aria-hidden="true" className={iconClasses} />}
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      {...motionProps}
      {...rest}
    >
      {Icon && <Icon aria-hidden="true" className={iconClasses} />}
      {children}
    </motion.button>
  );
}
