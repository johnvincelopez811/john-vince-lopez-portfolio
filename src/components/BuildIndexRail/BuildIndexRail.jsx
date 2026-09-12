import { buildIndex } from "../../data/site";
import { useActiveSectionContext } from "../../context/ActiveSectionContext";

/**
 * The Build Index — the portfolio's signature wayfinding feature.
 * A fixed vertical rail of numbered markers, one per major section.
 * Reads the shared ActiveSectionContext (one observer for the whole
 * app) instead of running its own — and switches state instantly, with
 * no marker-travel animation between items.
 */
export default function BuildIndexRail() {
  const { activeId, goToSection } = useActiveSectionContext();

  return (
    <nav
      aria-label="Build Index"
      className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-end gap-0"
    >
      {buildIndex.map((item, index) => {
        const isActive = activeId === item.to;
        return (
          <div key={item.to} className="flex flex-col items-end">
            <button
              type="button"
              onClick={() => goToSection(item.to)}
              aria-current={isActive ? "true" : undefined}
              className="focus-ring group flex items-center gap-2.5 py-2"
            >
              <span
                className={`text-[11px] font-mono transition-colors duration-100 ${
                  isActive ? "text-ink" : "text-faint group-hover:text-muted"
                }`}
              >
                {item.label}
              </span>
              <span
                className={`font-mono text-[11px] transition-colors duration-100 ${
                  isActive ? "text-accent" : "text-faint group-hover:text-muted"
                }`}
              >
                {item.num}
              </span>
              <span
                className={`h-2 w-2 rounded-full transition-colors duration-100 ${
                  isActive ? "bg-accent" : "bg-line"
                }`}
                aria-hidden="true"
              />
            </button>
            {index < buildIndex.length - 1 && <span className="h-4 w-px bg-line" aria-hidden="true" />}
          </div>
        );
      })}
    </nav>
  );
}
