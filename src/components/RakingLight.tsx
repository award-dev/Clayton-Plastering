import Image from "next/image";

import { photos } from "@/data/projects";

import { Confirm } from "./Confirm";

export function RakingLight() {
  return (
    <section aria-labelledby="light-title" className="bg-lime-deep py-16 sm:py-24">
      <div className="wrap grid items-center gap-10 lg:grid-cols-12">
        <figure className="plate lg:col-span-7">
          <Image src={photos.flashlight.src} alt={photos.flashlight.alt} sizes="(min-width: 1024px) 52vw, 92vw" className="aspect-[4/3] h-auto w-full object-cover" />
          <figcaption className="plate-caption">
            <span className="plate-no mr-1">Plate VIII.</span>
            {photos.flashlight.caption}
          </figcaption>
        </figure>
        <div className="lg:col-span-5">
          <p className="kicker text-sage-ink">The old trick</p>
          <h2 id="light-title" className="mt-3 text-4xl font-semibold sm:text-5xl">
            Hold a light <em className="font-medium text-green">to it.</em>
          </h2>
          <div className="mt-5 space-y-4 text-[1.0625rem]">
            <p>
              Most people check a wall by looking at it. Plasterers check it by lighting it sideways. A flashlight held flat to the surface shows
              every ridge, patch and hairline crack the overhead light hides.
            </p>
            <p className="text-muted">
              On this job, an arched panel and stone-block scoring were laid out in tape, built up in plaster, and checked the old way.
            </p>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {[photos.tapedOut, photos.scoredWall].map((p) => (
              <figure key={p.source} className="plate">
                <Image src={p.src} alt={p.alt} sizes="(min-width: 1024px) 18vw, 45vw" className="aspect-square h-auto w-full object-cover" />
                <figcaption className="plate-caption text-[0.875rem]">{p.caption}</figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-6">
            <Confirm>the story of this job</Confirm>
          </p>
        </div>
      </div>
    </section>
  );
}
