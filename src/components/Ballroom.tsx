import Image from "next/image";

import { photos } from "@/data/projects";

import { Confirm } from "./Confirm";

const steps = [
  { photo: photos.corniceDamaged, label: "Where the ornament had let go." },
  { photo: photos.castOrnament, label: "A new piece, cast and drying." },
  { photo: photos.plastererCeiling, label: "Worked into the corner." },
  { photo: photos.corniceRestored, label: "Finished. Find the seam." },
];

export function Ballroom() {
  return (
    <section id="ballroom" aria-labelledby="ballroom-title" className="py-16 sm:py-24">
      <div className="wrap">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="kicker text-sage-ink">
              <span className="plate-no normal-case tracking-normal">Plate VII.</span> From the job book, February 2025
            </p>
            <h2 id="ballroom-title" className="mt-3 text-4xl font-semibold sm:text-5xl lg:text-[3.25rem]">
              The Park Royal <em className="font-medium text-green">ballroom.</em>
            </h2>
          </div>
          <div className="space-y-4 text-[1.0625rem] lg:col-span-6 lg:col-start-7 lg:pt-10">
            <p>
              A corner of the ballroom ceiling had come down, ornament and all. New pieces were cast, set into the ceiling and blended into the old
              work until the corner reads as one piece again.
            </p>
            <p className="text-muted">
              Same trade as patching a hallway. More patience, taller ladder.
            </p>
            <p>
              <Confirm>job details, and that we can name the building</Confirm>
            </p>
          </div>
        </div>

        <ol className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.photo.source}>
              <figure className={`plate h-full ${i % 2 === 1 ? "lg:mt-10" : ""}`}>
                <Image src={s.photo.src} alt={s.photo.alt} sizes="(min-width: 1024px) 22vw, 45vw" className="aspect-square h-auto w-full object-cover" />
                <figcaption className="plate-caption">
                  <span className="plate-no mr-1">{i + 1}.</span>
                  {s.label}
                </figcaption>
              </figure>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
