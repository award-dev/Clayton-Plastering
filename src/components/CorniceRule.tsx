import { useId } from "react";

/**
 * A section rule drawn as a classical cornice in elevation: fillet, cyma, dentils, bead-and-reel.
 * It "runs" across the page the way a plasterer pulls a zinc mould profile through wet plaster
 * (on load for the hero, on scroll elsewhere). Static under prefers-reduced-motion or without support.
 */
export function CorniceRule({
  run = "scroll",
  tone = "light",
  className = "",
}: {
  run?: "load" | "scroll" | "none";
  tone?: "light" | "dark";
  className?: string;
}) {
  const id = useId().replace(/:/g, "");
  const c =
    tone === "light"
      ? { fillet: "#1f4a34", line: "#3f5a4c", cymaTop: "#f8f9f5", cymaBot: "#9fb1a8", dentil: "#7f978c", gap: "#d3dbd4", bead: "#3f5a4c" }
      : { fillet: "#c9d4cb", line: "#9fb1a8", cymaTop: "#2d5a43", cymaBot: "#163828", dentil: "#7f978c", gap: "#163828", bead: "#c9d4cb" };

  return (
    <div
      className={`cornice ${className}`}
      data-run={run}
      aria-hidden="true"
      style={{ "--cover": tone === "light" ? "#eef0ea" : "#1f4a34" } as React.CSSProperties}
    >
      <svg className="cornice-band" height="36" role="presentation" focusable="false">
        <defs>
          <linearGradient id={`cyma-${id}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor={c.cymaTop} />
            <stop offset="1" stopColor={c.cymaBot} />
          </linearGradient>
          <pattern id={`dentil-${id}`} width="14" height="10" patternUnits="userSpaceOnUse">
            <rect width="14" height="10" fill={c.gap} />
            <rect x="1" width="9" height="10" fill={c.dentil} />
            <rect x="1" width="9" height="2" fill={c.cymaTop} opacity="0.5" />
          </pattern>
          <pattern id={`bead-${id}`} width="14" height="6" patternUnits="userSpaceOnUse">
            <circle cx="4" cy="3" r="2.6" fill={c.bead} />
            <rect x="9" y="2" width="4" height="2" rx="1" fill={c.bead} />
          </pattern>
        </defs>
        <rect width="100%" height="3" fill={c.fillet} />
        <rect y="3" width="100%" height="10" fill={`url(#cyma-${id})`} />
        <rect y="13" width="100%" height="1.5" fill={c.line} />
        <rect y="15" width="100%" height="10" fill={`url(#dentil-${id})`} />
        <rect y="25.5" width="100%" height="1.5" fill={c.line} />
        <rect y="28" width="100%" height="6" fill={`url(#bead-${id})`} />
        <rect y="34" width="100%" height="2" fill={c.fillet} />
      </svg>
      {run !== "none" && (
        // A cover slides off the band (transform only, so it stays on the compositor) with the mould plate at its leading edge.
        <div className="cornice-cover">
          <svg className="cornice-knife" viewBox="0 0 22 36" preserveAspectRatio="none" role="presentation" focusable="false">
            <path d="M0 0H22V36H0V34H6V28H4V27H8V15H5V13.5H9C9 9 6 5 3 3H0Z" fill={tone === "light" ? "#57524a" : "#e9c77b"} />
            <rect x="20" width="2" height="36" fill={tone === "light" ? "#2b2620" : "#f8f9f5"} opacity="0.5" />
          </svg>
        </div>
      )}
    </div>
  );
}
