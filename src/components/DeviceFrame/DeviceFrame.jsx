import { FaLaptopCode, FaLock } from "react-icons/fa";

/**
 * Frames a project screenshot inside a browser-window or mobile-device
 * chrome so images read as real product previews instead of bare <img>
 * tags. Falls back to a clean placeholder when no image is provided.
 */
export default function DeviceFrame({
  image,
  alt,
  deviceType = "browser",
  isPrivate = false,
  placeholderTitle,
  placeholderMessage,
}) {
  if (deviceType === "mobile") {
    return (
      <div className="mx-auto w-full max-w-[220px]">
        <div className="card rounded-[2rem] p-2 shadow-sm">
          <div className="relative overflow-hidden rounded-[1.5rem] aspect-[9/19.5] bg-surface-2">
            <div className="absolute left-1/2 top-2 h-1.5 w-10 -translate-x-1/2 rounded-full bg-line z-10" />
            {image ? (
              <img
                src={image}
                alt={alt}
                className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            ) : (
              <Placeholder
                compact
                isPrivate={isPrivate}
                title={placeholderTitle}
                message={placeholderMessage}
              />
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card overflow-hidden rounded-xl shadow-sm">
      <div className="flex items-center gap-1.5 border-b border-line px-4 py-2.5 bg-surface-2">
        <span className="h-2.5 w-2.5 rounded-full bg-line" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" aria-hidden="true" />
      </div>
      <div className="relative aspect-[16/10] bg-surface-2">
        {image ? (
          <img
            src={image}
            alt={alt}
            className="h-full w-full object-contain object-center"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <Placeholder
            isPrivate={isPrivate}
            title={placeholderTitle}
            message={placeholderMessage}
          />
        )}
      </div>
    </div>
  );
}

function Placeholder({ compact = false, isPrivate = false, title, message }) {
  const Icon = isPrivate ? FaLock : FaLaptopCode;
  const heading = title || (isPrivate ? "Private internal system" : "Screenshot coming soon");

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3 px-6 text-center text-faint">
      <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-line bg-canvas text-accent">
        <Icon className={compact ? "text-base" : "text-xl"} aria-hidden="true" />
      </span>
      <span className="font-mono text-xs uppercase tracking-[0.14em]">{heading}</span>
      {message && !compact && (
        <span className="max-w-sm text-xs leading-5 text-muted">{message}</span>
      )}
    </div>
  );
}
