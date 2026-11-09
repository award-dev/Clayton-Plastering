import { business, smsHref, telHref } from "@/data/business";

import { CorniceRule } from "./CorniceRule";
import { PhoneIcon, TextIcon } from "./Icons";

export function ClosingCta() {
  return (
    <section aria-labelledby="cta-title" className="on-green bg-green text-lime">
      <CorniceRule tone="dark" />
      <div className="wrap py-16 text-left sm:py-24">
        <p className="kicker text-amber">Free estimates</p>
        <h2 id="cta-title" className="mt-3 max-w-3xl text-5xl font-semibold text-lime sm:text-6xl lg:text-7xl">
          Show us <em className="font-medium text-green-soft">the wall.</em>
        </h2>
        <p className="mt-5 max-w-xl text-[1.125rem] text-green-soft">
          Call or text a photo to {business.phone}, Monday through Saturday. Six generations in, we&rsquo;ve probably seen one like it.
        </p>
        <div className="mt-8 flex flex-col gap-3 xs:flex-row">
          <a href={telHref} className="btn btn-light text-[1.0625rem]">
            <PhoneIcon />
            Call {business.phone}
          </a>
          <a href={smsHref("Hi Clayton Plastering, I have a wall that needs a look. Photo attached.")} className="btn btn-outline-light text-[1.0625rem]">
            <TextIcon />
            Text a photo
          </a>
        </div>
      </div>
    </section>
  );
}
