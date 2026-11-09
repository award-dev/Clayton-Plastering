import { faqs } from "@/data/faq";

import { Confirm } from "./Confirm";

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="bg-lime-deep py-16 sm:py-24">
      <div className="wrap grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="kicker text-sage-ink">Straight answers</p>
          <h2 id="faq-title" className="mt-3 text-4xl font-semibold sm:text-5xl">
            Questions people ask on the <em className="font-medium text-green">first call.</em>
          </h2>
        </div>
        <div className="lg:col-span-8">
          {faqs.map((f) => (
            <details key={f.q} className="group border-b border-rule first:border-t">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 font-display text-xl font-semibold sm:text-2xl [&::-webkit-details-marker]:hidden">
                {f.q}
                <span aria-hidden="true" className="grid h-8 w-8 shrink-0 place-items-center border border-sage-ink text-sage-ink transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="pb-5 pr-10 text-[1.0625rem]">
                {f.confirm ? <Confirm>{f.confirm}</Confirm> : <p>{f.a}</p>}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
