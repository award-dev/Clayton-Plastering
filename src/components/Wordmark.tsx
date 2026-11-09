import { business } from "@/data/business";

/** Text wordmark. The original logo is a 220px raster, too small to use, so this stands in until we redraw it. */
export function Wordmark({ tone = "dark", showLine = true }: { tone?: "dark" | "light"; showLine?: boolean }) {
  const main = tone === "dark" ? "text-green" : "text-lime";
  const sub = tone === "dark" ? "text-ink" : "text-green-soft";
  return (
    <span className="inline-flex flex-col leading-none">
      <span className={`font-display text-[1.75rem] font-bold tracking-[-0.01em] ${main}`}>Clayton</span>{" "}
      <span className={`mt-1 text-[0.6875rem] font-semibold uppercase tracking-[0.2em] ${sub}`}>Plastering &amp; Tuckpointing</span>
      {showLine && (
        <span className={`mt-1.5 font-display text-[0.8125rem] italic ${tone === "dark" ? "text-sepia-ink" : "text-amber"}`}>
          {business.brandLine}
        </span>
      )}
    </span>
  );
}
