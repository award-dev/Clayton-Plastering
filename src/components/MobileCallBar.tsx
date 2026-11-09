import { business, smsHref, telHref } from "@/data/business";

import { PhoneIcon, TextIcon } from "./Icons";

/** Always-reachable call and text on phones and tablets. */
export function MobileCallBar() {
  return (
    <nav
      aria-label="Call or text"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-green-deep bg-green px-3 pt-2 lg:hidden"
      style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto grid max-w-xl grid-cols-[1.55fr_1fr] gap-2">
        <a href={telHref} className="btn btn-light min-h-12 gap-1.5 px-2 text-[0.9375rem]">
          <PhoneIcon className="h-[1.125rem] w-[1.125rem] shrink-0" />
          <span className="whitespace-nowrap">Call {business.phone}</span>
        </a>
        <a href={smsHref("Hi Clayton Plastering, I have a wall that needs a look. Photo attached.")} className="btn btn-outline-light min-h-12 gap-1.5 px-2 text-[0.9375rem]">
          <TextIcon className="h-[1.125rem] w-[1.125rem] shrink-0" />
          <span className="whitespace-nowrap">Text a photo</span>
        </a>
      </div>
    </nav>
  );
}
