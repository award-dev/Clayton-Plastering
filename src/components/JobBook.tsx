import Image from "next/image";

import { business } from "@/data/business";
import { clips, jobBook } from "@/data/projects";

import { VideoLoop } from "./VideoLoop";

export function JobBook() {
  return (
    <section id="work" aria-labelledby="work-title" className="bg-lime-deep py-16 sm:py-24">
      <div className="wrap">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="kicker text-sage-ink">Real jobs, real ladders</p>
            <h2 id="work-title" className="mt-3 text-4xl font-semibold sm:text-5xl lg:text-[3.25rem]">
              From the <em className="font-medium text-green">job book.</em>
            </h2>
          </div>
          <p className="max-w-md text-[1.0625rem] text-muted lg:col-span-5 lg:justify-self-end">
            Churches, Tudors, a movie theater, a lot of Spanish-style stucco, and plenty of hallways nobody will ever photograph again.
          </p>
        </div>

        {/* Clips */}
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {clips.map((c) => (
            <li key={c.src}>
              <figure className="plate h-full">
                <VideoLoop clip={c} />
                <figcaption className="plate-caption">
                  <span className="block font-semibold text-ink">{c.title}</span>
                  {c.summary} <span className="whitespace-nowrap">Posted {c.posted}, silent.</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        {/* Photos */}
        <ul className="mt-10 columns-2 gap-4 sm:gap-6 lg:columns-4 [&>li]:mb-4 sm:[&>li]:mb-6">
          {jobBook.map((p) => (
            <li key={p.source} className="break-inside-avoid">
              <figure className="plate">
                <Image src={p.src} alt={p.alt} sizes="(min-width: 1024px) 22vw, 45vw" className="h-auto w-full" />
                {p.caption && <figcaption className="plate-caption text-[0.875rem]">{p.caption}</figcaption>}
              </figure>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-[1.0625rem]">
          More on{" "}
          <a href={business.links.facebook} target="_blank" rel="noopener" className="link inline-flex min-h-11 items-center font-semibold">
            Clayton Plastering&rsquo;s Facebook page
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          .
        </p>
      </div>
    </section>
  );
}
