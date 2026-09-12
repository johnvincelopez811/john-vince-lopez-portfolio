import { personal } from "../../data/site";

/**
 * Signature Hero visual: frames the portrait with an offset warm-sand
 * layer, a thin olive line, and one or two small identity labels — a
 * deliberate composition, not a generic rounded photo or profile card.
 * Falls back to a monogram panel when no portrait file exists yet.
 */
export default function PortraitFrame({ image }) {
  return (
    <div className="relative">
      {/* Offset background layer, decorative only. */}
      <div className="absolute -right-3 -bottom-3 h-full w-full rounded-2xl bg-accent-soft" aria-hidden="true" />

      <div className="relative rounded-2xl border border-line overflow-hidden bg-surface-2">
        <div className="relative aspect-[5/4]">
          {image ? (
            <img
              src={image}
              alt={personal.portraitAlt}
              className="h-full w-full object-cover object-top"
              fetchPriority="high"
              width={720}
              height={900}
            />
          ) : (
            <div className="keyboard-grid flex h-full w-full flex-col items-center justify-center gap-2">
              <span className="font-display text-6xl font-semibold text-accent">{personal.monogram}</span>
              <span className="text-xs font-mono text-faint">Portrait coming soon</span>
            </div>
          )}
        </div>

        {/* Thin olive accent line. */}
        <div className="h-1 w-full bg-accent" aria-hidden="true" />
      </div>

      {personal.portraitLabels?.length > 0 && (
        <div className="absolute left-3 bottom-4 flex flex-col gap-1.5" aria-hidden="true">
          {personal.portraitLabels.map((label) => (
            <span
              key={label}
              className="w-fit rounded-md bg-canvas/90 backdrop-blur-sm border border-line px-2.5 py-1 font-mono text-[10px] tracking-widest uppercase text-ink"
            >
              {label}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
