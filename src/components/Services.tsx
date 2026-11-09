import Image from "next/image";

import { services, type Service } from "@/data/services";

function PlateImage({ s }: { s: Service }) {
  if (s.pair) {
    const [before, after] = s.pair;
    return (
      <div className="grid grid-cols-2 gap-2">
        {[before, after].map((p, i) => (
          <figure key={p.source} className="relative">
            <Image src={p.src} alt={p.alt} sizes="(min-width: 1024px) 18vw, 45vw" className="aspect-square h-auto w-full object-cover" />
            <figcaption className={`kicker absolute left-2 top-2 px-2 py-1 text-[0.6875rem] ${i === 0 ? "bg-plaster text-ink" : "bg-green text-lime"}`}>
              {p.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    );
  }
  return (
    <Image src={s.photo.src} alt={s.photo.alt} sizes="(min-width: 1024px) 36vw, 92vw" className="aspect-[4/3] h-auto w-full object-cover" />
  );
}

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="py-16 sm:py-24">
      <div className="wrap">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="kicker text-sage-ink">The pattern book</p>
            <h2 id="services-title" className="mt-3 text-4xl font-semibold sm:text-5xl lg:text-6xl">
              What we patch, match <em className="font-medium text-green">and make.</em>
            </h2>
          </div>
          <p className="max-w-md text-[1.0625rem] text-muted lg:col-span-5 lg:justify-self-end">
            Old plaster, new stucco, worn brick. Inside and out, homes and businesses, all over St.&nbsp;Louis.
          </p>
        </div>

        <ol className="mt-12 grid gap-x-10 gap-y-14 md:grid-cols-2 lg:mt-16">
          {services.map((s, i) => (
            <li key={s.id} id={s.id} className={`flex flex-col ${i % 2 === 1 ? "md:mt-20" : ""}`}>
              <div className="plate">
                <PlateImage s={s} />
              </div>
              <div className="mt-6 grid grid-cols-[3.25rem_1fr] gap-x-3 sm:grid-cols-[4rem_1fr]">
                <span className="plate-no pt-1 text-3xl leading-none sm:text-4xl" aria-hidden="true">
                  {s.plate}.
                </span>
                <div>
                  <h3 className="text-[1.75rem] font-semibold sm:text-3xl">
                    <span className="sr-only">Plate {s.plate}: </span>
                    {s.name}
                  </h3>
                  <p className="mt-2 font-display text-lg italic text-sage-ink">{s.line}</p>
                  <p className="mt-3 text-ink">{s.body}</p>
                  <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 text-[0.9375rem] text-muted">
                    {s.includes.map((x) => (
                      <li key={x} className="flex items-baseline gap-2">
                        <span aria-hidden="true" className="inline-block h-1.5 w-1.5 translate-y-[-2px] rotate-45 bg-sage" />
                        {x}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
