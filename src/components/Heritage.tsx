import Image from "next/image";

import { photos } from "@/data/projects";

import { Confirm } from "./Confirm";

const gens = ["I", "II", "III", "IV", "V", "VI"];

export function Heritage() {
  return (
    <section id="family" aria-labelledby="family-title" className="bg-sepia-wash py-16 sm:py-24">
      <div className="wrap grid items-center gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5 lg:order-2">
          <p className="kicker text-sepia-ink">Six generations</p>
          <h2 id="family-title" className="mt-3 text-4xl font-semibold sm:text-5xl lg:text-[3.25rem]">
            The family <em className="font-medium text-sepia-ink">trade.</em>
          </h2>
          <div className="mt-5 space-y-4 text-[1.0625rem]">
            <p>
              Clayton Plastering &amp; Tuckpointing is family-owned and family-run, and the people on your job are the sixth generation in the
              trade. Hawk, trowel, lime and sand: the tools haven&rsquo;t changed much. Neither has the patience.
            </p>
            <p className="text-muted">
              In the reviews, customers mention Jesse and Matt by name. That&rsquo;s how a family business gets talked about.
            </p>
          </div>

          {/* Generation rule, drawn as dentil blocks */}
          <div className="mt-8">
            <p className="sr-only">Generations one through six. The sixth generation runs the business today.</p>
            <ol className="grid grid-cols-6 items-end gap-1.5" aria-hidden="true">
              {gens.map((g, i) => (
                <li
                  key={g}
                  className={`flex flex-col items-center justify-end pb-2 font-display text-xl italic ${
                    i === 5 ? "bg-green text-lime" : "bg-plaster text-sepia-ink"
                  }`}
                  style={{ height: `${3 + i * 0.5}rem` }}
                >
                  {g}
                </li>
              ))}
            </ol>
            <div className="mt-2 flex justify-between text-[0.875rem] text-muted">
              <span>Generation I</span>
              <span className="font-semibold text-green">VI: on the scaffold now</span>
            </div>
          </div>
          <p className="mt-6">
            <Confirm>names and years for each generation (this is the About page, waiting to happen)</Confirm>
          </p>
        </div>

        <figure className="plate lg:order-1 lg:col-span-7" style={{ transform: "rotate(0.6deg)" }}>
          <Image src={photos.oldCrew.src} alt={photos.oldCrew.alt} sizes="(min-width: 1024px) 52vw, 92vw" className="h-auto w-full" />
          <figcaption className="plate-caption">
            <span className="plate-no mr-1">Plate IX.</span>
            An old plastering crew, white clothes and all. From the company&rsquo;s own photos.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
