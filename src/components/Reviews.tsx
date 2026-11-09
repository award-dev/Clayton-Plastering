import { business } from "@/data/business";
import { reviews } from "@/data/reviews";

import { Confirm } from "./Confirm";
import { StarIcon } from "./Icons";

export function Reviews() {
  const [lead, ...rest] = reviews;
  const { google, bbb, facebook } = business.ratings;

  return (
    <section id="reviews" aria-labelledby="reviews-title" className="py-16 sm:py-24">
      <div className="wrap">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="kicker text-sage-ink">In their words</p>
            <h2 id="reviews-title" className="mt-3 text-4xl font-semibold sm:text-5xl lg:text-6xl">
              What customers <em className="font-medium text-green">wrote.</em>
            </h2>
          </div>
          <dl className="grid grid-cols-3 gap-4 border-t border-rule pt-4 text-[0.9375rem] lg:col-span-5">
            <div>
              <dt className="text-muted">Google</dt>
              <dd className="flex items-center gap-1 font-display text-2xl font-semibold">
                {google.value} <StarIcon className="h-4 w-4 text-sepia" />
              </dd>
              <dd className="text-[0.8125rem] text-muted">as of {google.asOf}</dd>
            </div>
            <div>
              <dt className="text-muted">Facebook</dt>
              <dd className="font-display text-2xl font-semibold">{facebook.count}</dd>
              <dd className="text-[0.8125rem] text-muted">recommendations, as of {facebook.asOf}</dd>
            </div>
            <div>
              <dt className="text-muted">BBB</dt>
              <dd className="font-display text-2xl font-semibold">
                {bbb.grade.replace("+", "")}
                <span className="font-sans font-bold">+</span>
              </dd>
              <dd className="text-[0.8125rem] text-muted">rating, as of {bbb.asOf}</dd>
            </div>
          </dl>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          <figure className="plate lg:col-span-7 lg:self-start">
            <div className="p-3 sm:p-6">
              {lead.pull && (
                <p className="font-display text-3xl italic leading-tight text-green sm:text-4xl" aria-hidden="true">
                  &ldquo;&hellip;{lead.pull}.&rdquo;
                </p>
              )}
              <blockquote cite={lead.url} className="mt-5 text-[1.0625rem] leading-relaxed">
                <p>{lead.text}</p>
              </blockquote>
              <figcaption className="mt-5 border-t border-rule pt-4 text-[0.9375rem]">
                <span className="font-semibold">{lead.name}</span>
                <span className="text-muted">
                  {" "}
                  · {lead.source} recommendation · <time dateTime={lead.date}>{lead.dateLabel}</time> ·{" "}
                </span>
                <a href={lead.url} target="_blank" rel="noopener" className="link inline-flex min-h-11 items-center">
                  See it on {lead.source}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </figcaption>
            </div>
          </figure>

          <div className="flex flex-col gap-8 lg:col-span-5">
            {rest.map((r) => (
              <figure key={r.name} className="border-l-4 border-sage bg-plaster p-5 sm:p-6">
                {r.pull && (
                  <p className="font-display text-2xl italic leading-tight text-green" aria-hidden="true">
                    &ldquo;&hellip;{r.pull}.&rdquo;
                  </p>
                )}
                <blockquote cite={r.url} className={r.pull ? "mt-4" : ""}>
                  <p className={r.pull ? "" : "font-display text-2xl italic leading-snug text-green"}>{r.text}</p>
                </blockquote>
                <figcaption className="mt-4 text-[0.9375rem]">
                  <span className="font-semibold">{r.name}</span>
                  <span className="text-muted">
                    {" "}
                    · {r.source} recommendation · <time dateTime={r.date}>{r.dateLabel}</time> ·{" "}
                  </span>
                  <a href={r.url} target="_blank" rel="noopener" className="link inline-flex min-h-11 items-center">
                    See it on {r.source}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </figcaption>
              </figure>
            ))}
            <p>
              <Confirm>Google review count, plus 2–3 Google reviews to feature</Confirm>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
