import { business, smsHref, telHref } from "@/data/business";

import { Confirm } from "./Confirm";

const steps = [
  {
    title: "Call, or text a photo",
    body: `${business.phone}. A photo of the damage tells us most of what we need before anyone drives over.`,
  },
  {
    title: "Free estimate",
    body: "We come look, tell you what it needs and what it costs. No obligation.",
  },
  {
    title: "Drop cloths, then plaster",
    body: "Every room we work in gets covered first. Cleanup is part of the job, not an extra.",
  },
  {
    title: "One-year promise",
    body: business.workmanshipPromise,
    confirm: "wording of the one-year workmanship promise (from the BBB profile)",
  },
];

export function HowItWorks() {
  return (
    <section id="how" aria-labelledby="how-title" className="py-16 sm:py-24">
      <div className="wrap">
        <p className="kicker text-sage-ink">How to hire us</p>
        <h2 id="how-title" className="mt-3 text-4xl font-semibold sm:text-5xl lg:text-6xl">
          How a job <em className="font-medium text-green">goes.</em>
        </h2>

        <ol className="mt-12 grid gap-px border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="flex flex-col bg-lime p-6">
              <span className="plate-no text-4xl leading-none" aria-hidden="true">
                {i + 1}.
              </span>
              <h3 className="mt-4 text-2xl font-semibold">
                <span className="sr-only">Step {i + 1}: </span>
                {s.title}
              </h3>
              <p className="mt-2 text-ink">{s.body}</p>
              {s.confirm && (
                <p className="mt-4">
                  <Confirm>{s.confirm}</Confirm>
                </p>
              )}
            </li>
          ))}
        </ol>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-2xl font-semibold">Hours</h3>
            <dl className="mt-3 space-y-1">
              {business.hours.map((h) => (
                <div key={h.days} className="flex justify-between gap-4 border-b border-rule pb-1">
                  <dt>{h.days}</dt>
                  <dd className="text-muted">{h.open ? `${h.open} – ${h.close}` : "Closed"}</dd>
                </div>
              ))}
            </dl>
            {!business.hoursConfirmed && (
              <p className="mt-4">
                <Confirm>hours (website says 8–5; Google lists Monday 8–4)</Confirm>
              </p>
            )}
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Where we work</h3>
            <p className="mt-3">
              {business.serviceArea}: homes, storefronts, churches and condo buildings. Text a photo and your ZIP if you&rsquo;re not sure.
            </p>
            {!business.serviceAreaConfirmed && (
              <p className="mt-4">
                <Confirm>the towns and neighborhoods you cover</Confirm>
              </p>
            )}
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Paying</h3>
            <p className="mt-3">{business.payment.join(", ")}.</p>
            <div className="mt-5 flex flex-wrap gap-2">
              <a href={telHref} className="btn btn-primary">
                Call {business.phone}
              </a>
              <a href={smsHref("Hi Clayton Plastering, I have a wall that needs a look. Photo attached.")} className="btn btn-ghost">
                Text a photo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
