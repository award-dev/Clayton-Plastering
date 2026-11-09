import Link from "next/link";

import { business, telHref } from "@/data/business";

import { PhoneIcon } from "./Icons";
import { Wordmark } from "./Wordmark";

const nav = [
  { href: "/#services", label: "Services" },
  { href: "/#match", label: "Match my wall" },
  { href: "/#work", label: "Work" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#how", label: "How it works" },
];

export function SiteHeader() {
  return (
    <header className="relative z-40 border-b border-rule bg-lime lg:sticky lg:top-0">
      <div className="wrap flex items-center justify-between gap-4 py-3">
        <Link href="/" className="-m-1 p-1">
          <Wordmark showLine={false} />
          <span className="sr-only">, home</span>
        </Link>
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="inline-flex min-h-11 items-center px-3 text-[0.9375rem] font-medium text-ink hover:text-green hover:underline hover:underline-offset-4">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href={telHref} className="btn btn-primary min-h-11 px-3 text-[0.9375rem] sm:px-4">
          <PhoneIcon className="h-4 w-4" />
          <span className="sm:sr-only">Call</span>
          <span className="sr-only sm:not-sr-only">{business.phone}</span>
        </a>
      </div>
    </header>
  );
}
