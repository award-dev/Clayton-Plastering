import Link from "next/link";

import { business, mailHref, preview, telHref } from "@/data/business";

import { Wordmark } from "./Wordmark";

export function SiteFooter() {
  return (
    <footer className="bg-green-deep pb-28 pt-14 text-green-soft lg:pb-14">
      <div className="wrap grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <Wordmark tone="light" />
          <p className="mt-4 max-w-xs text-[0.9375rem]">Plaster, stucco, ornamental plaster and tuckpointing in St. Louis, MO. Family-run, sixth generation.</p>
        </div>
        <div className="md:col-span-3">
          <h2 className="kicker text-amber">Contact</h2>
          <ul className="mt-3 space-y-2">
            <li>
              <a href={telHref} className="inline-flex min-h-11 items-center text-lime underline-offset-4 hover:underline">
                {business.phone}
              </a>
            </li>
            <li>
              <a href={mailHref} className="inline-flex min-h-11 items-center break-all text-lime underline-offset-4 hover:underline">
                {business.email}
              </a>
            </li>
            {business.hours
              .filter((h) => h.open)
              .map((h) => (
                <li key={h.days}>
                  {h.days}, {h.open} – {h.close}
                </li>
              ))}
          </ul>
        </div>
        <div className="md:col-span-2">
          <h2 className="kicker text-amber">Pages</h2>
          <ul className="mt-3 space-y-1">
            {[
              ["/privacy", "Privacy"],
              ["/terms", "Terms"],
              ["/accessibility", "Accessibility"],
            ].map(([href, label]) => (
              <li key={href}>
                <Link href={href} className="inline-flex min-h-11 items-center text-lime underline-offset-4 hover:underline">
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <a href={business.links.facebook} target="_blank" rel="noopener" className="inline-flex min-h-11 items-center text-lime underline-offset-4 hover:underline">
                Facebook<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="md:col-span-3">
          <h2 className="kicker text-amber">About this page</h2>
          <p className="mt-3 text-[0.875rem] leading-relaxed">{preview.disclaimer}</p>
        </div>
      </div>
      <div className="wrap mt-10 border-t border-green pt-6 text-[0.875rem]">
        <p>
          © {preview.year} {business.legalName}
        </p>
      </div>
    </footer>
  );
}
