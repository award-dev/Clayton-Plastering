import Image from "next/image";

import { business, smsHref, telHref } from "@/data/business";
import { photos } from "@/data/projects";

import { Confirm } from "./Confirm";
import { CorniceRule } from "./CorniceRule";
import { CameraIcon, PhoneIcon, StarIcon } from "./Icons";

export function Hero() {
  const g = business.ratings.google;
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <CorniceRule run="load" />
      <div className="wrap grid gap-10 pb-14 pt-6 sm:pt-12 lg:grid-cols-12 lg:gap-8 lg:pb-8 lg:pt-16">
        {/* Words */}
        <div className="lg:col-span-6 lg:pr-4">
          <p className="kicker text-sage-ink">
            Plaster · Stucco · Tuckpointing <span className="text-muted">— St. Louis, MO</span>
          </p>
          <h1 id="hero-title" className="mt-3 text-[2.625rem] sm:mt-4 font-semibold text-ink xs:text-[3.25rem] sm:text-6xl lg:text-[3.75rem] xl:text-[4.25rem]">
            Six generations of St.&nbsp;Louis <em className="font-medium text-green">plaster.</em>
          </h1>
          <p className="mt-4 max-w-xl text-[1.0625rem] leading-relaxed text-ink sm:mt-5 sm:text-[1.1875rem]">
            The hole the plumber left. The stucco nobody else could match. The cornice your house was built with. We fix all three, and this
            family has been doing it for six generations.
          </p>

          <div className="mt-6 flex flex-col gap-3 xs:flex-row sm:mt-7">
            <a href={telHref} className="btn btn-primary text-[1.0625rem]">
              <PhoneIcon />
              Call {business.phone}
            </a>
            <a href="#match" className="btn btn-ghost hidden text-[1.0625rem] sm:inline-flex">
              <CameraIcon />
              Send us a photo
            </a>
          </div>

          <ul className="mt-6 grid max-w-xl grid-cols-4 gap-x-3 border-t border-rule pt-4 text-[0.8125rem] sm:mt-8 sm:gap-x-4 sm:pt-5 sm:text-[0.9375rem]">
            <li>
              <a href={g.url} target="_blank" rel="noopener" className="group block">
                <span className="flex items-center gap-1 font-display text-2xl font-semibold text-ink">
                  {g.value}
                  <StarIcon className="h-4 w-4 text-sepia" />
                </span>
                <span className="block leading-snug text-muted group-hover:underline">
                  on Google, as of {g.asOf.replace("November", "Nov.")}
                  <span className="sr-only"> (opens Google in a new tab)</span>
                </span>
              </a>
            </li>
            <li>
              <a href={business.ratings.bbb.url} target="_blank" rel="noopener" className="group block">
                <span className="block font-display text-2xl font-semibold text-ink">A+</span>
                <span className="block leading-snug text-muted group-hover:underline">
                  BBB rating
                  <span className="sr-only"> (opens BBB.org in a new tab)</span>
                </span>
              </a>
            </li>
            <li>
              <span className="block font-display text-2xl font-semibold text-ink">6th</span>
              <span className="block leading-snug text-muted">generation, family&#8209;run</span>
            </li>
            <li>
              <span className="block font-display text-2xl font-semibold text-ink">Free</span>
              <span className="block leading-snug text-muted">estimates</span>
            </li>
          </ul>
        </div>

        {/* Then / now plates */}
        <div className="relative lg:col-span-6">
          <div className="grid grid-cols-12 items-start gap-3 sm:gap-5">
            <figure className="plate settle col-span-7 mt-10 [--tilt:-1.2deg] sm:mt-16 lg:col-span-7" style={{ transform: "rotate(-1.2deg)" }}>
              <Image
                src={photos.oldCrew.src}
                alt={photos.oldCrew.alt}
                sizes="(min-width: 1024px) 26vw, 55vw"
                className="h-auto w-full"
               
              />
              <figcaption className="plate-caption">
                <span className="plate-no">Then.</span> An old plastering crew, from the company&rsquo;s own photos.
              </figcaption>
            </figure>
            <figure className="plate settle settle-2 col-span-5 lg:col-span-5">
              <Image
                src={photos.corniceRestored.src}
                alt={photos.corniceRestored.alt}
                sizes="(min-width: 1024px) 20vw, 40vw"
                className="aspect-[4/5] h-auto w-full object-cover"
                priority
               
              />
              <figcaption className="plate-caption">
                <span className="plate-no">Now.</span> Park Royal ballroom, 2025.
              </figcaption>
            </figure>
          </div>
          <p className="mt-6 text-right">
            <Confirm>who&rsquo;s in the old crew photo, and the year</Confirm>
          </p>
        </div>
      </div>
    </section>
  );
}
