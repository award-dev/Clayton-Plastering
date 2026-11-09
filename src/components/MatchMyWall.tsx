"use client";

import Image from "next/image";
import { useState } from "react";

import { business, smsHref, telHref } from "@/data/business";
import { buildNote, finishes, places, problems, type Option } from "@/data/textures";

import { Confirm } from "./Confirm";
import { TextIcon } from "./Icons";

function Check() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4 shrink-0">
      <path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Pills({
  name,
  legend,
  step,
  options,
  value,
  onChange,
}: {
  name: string;
  legend: string;
  step: number;
  options: Option[];
  value?: string;
  onChange: (id: string) => void;
}) {
  return (
    <fieldset>
      <legend className="flex items-baseline gap-3 font-display text-2xl font-semibold text-lime">
        <span className="font-display text-lg italic text-amber" aria-hidden="true">
          {step}.
        </span>
        {legend}
      </legend>
      <div className="mt-4 flex flex-wrap gap-2">
        {options.map((o) => {
          const on = value === o.id;
          return (
            <label key={o.id} className="relative cursor-pointer">
              <input type="radio" name={name} value={o.id} checked={on} onChange={() => onChange(o.id)} className="peer absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0" />
              <span
                className={`inline-flex min-h-11 items-center gap-2 border px-4 py-2 text-[0.9375rem] leading-tight transition-colors peer-focus-visible:outline-3 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-amber ${
                  on ? "border-lime bg-lime font-semibold text-green-deep" : "border-green-soft text-lime hover:bg-green-deep"
                }`}
              >
                {on && <Check />}
                {o.label}
              </span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

export function MatchMyWall() {
  const [place, setPlace] = useState<string>();
  const [problem, setProblem] = useState<string>();
  const [finish, setFinish] = useState<string>();
  const [copied, setCopied] = useState("");

  const p = places.find((x) => x.id === place);
  const pr = problems.find((x) => x.id === problem);
  const f = finishes.find((x) => x.id === finish);
  const note = buildNote(p, pr, f);
  const picked = [p, pr, f].filter(Boolean).length;

  async function copy() {
    try {
      await navigator.clipboard.writeText(note);
      setCopied("Copied. Paste it into a text with your photo.");
    } catch {
      setCopied("Couldn't copy here. Use the text button instead.");
    }
  }

  return (
    <section id="match" aria-labelledby="match-title" className="on-green relative bg-green py-16 text-lime sm:py-24">
      <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <p className="kicker text-amber">Match my wall</p>
          <h2 id="match-title" className="mt-3 text-4xl font-semibold text-lime sm:text-5xl lg:text-[3.25rem]">
            Will the patch show? <em className="font-medium text-green-soft">Show us the wall.</em>
          </h2>
          <p className="mt-5 max-w-2xl text-[1.0625rem] text-green-soft">
            Three taps and we&rsquo;ll write the text for you. Attach a photo of the damage, hit send. Every finish below is cut from one of our own job
            photos.
          </p>

          <form className="mt-10 space-y-10" onSubmit={(e) => e.preventDefault()} aria-describedby="match-help">
            <p id="match-help" className="sr-only">
              Choose where the damage is, what happened, and the closest finish. A text message is written for you below.
            </p>
            <Pills name="place" legend="Where is it?" step={1} options={places} value={place} onChange={setPlace} />
            <Pills name="problem" legend="What happened?" step={2} options={problems} value={problem} onChange={setProblem} />

            <fieldset>
              <legend className="flex items-baseline gap-3 font-display text-2xl font-semibold text-lime">
                <span className="font-display text-lg italic text-amber" aria-hidden="true">
                  3.
                </span>
                Which finish is closest?
              </legend>
              <div className="mt-4 grid grid-cols-4 gap-2 sm:gap-3">
                {finishes.map((o) => {
                  const on = finish === o.id;
                  return (
                    <label key={o.id} className="group relative cursor-pointer">
                      <input
                        type="radio"
                        name="finish"
                        value={o.id}
                        checked={on}
                        onChange={() => setFinish(o.id)}
                        className="peer absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0"
                      />
                      <span
                        className={`block border-2 p-1 transition-colors peer-focus-visible:outline-3 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-amber ${
                          on ? "border-amber bg-lime" : "border-transparent group-hover:border-green-soft"
                        }`}
                      >
                        <span className="relative block">
                          <Image src={o.swatch} alt="" sizes="(min-width: 1024px) 140px, 22vw" className="aspect-square h-auto w-full object-cover" />
                          {on && (
                            <span className="absolute right-1 top-1 grid h-6 w-6 place-items-center bg-amber text-green-deep">
                              <Check />
                            </span>
                          )}
                        </span>
                      </span>
                      <span className={`mt-1.5 block text-center text-[0.8125rem] leading-tight sm:text-[0.875rem] ${on ? "font-semibold text-lime" : "text-green-soft"}`}>
                        {o.label}
                      </span>
                    </label>
                  );
                })}
              </div>
            </fieldset>
          </form>
        </div>

        {/* The note */}
        <div className="lg:col-span-5">
          <div className="bg-plaster p-5 text-ink shadow-[8px_8px_0_0_#163828] sm:p-7 lg:sticky lg:top-28">
            <p className="kicker text-sage-ink">Your text to {business.shortName}</p>
            <p className="mt-1 text-[0.875rem] text-muted">{picked}/3 picked</p>
            <p className="mt-4 border-l-4 border-sage pl-4 font-display text-[1.375rem] italic leading-snug text-ink" aria-live="polite">
              &ldquo;{note}
              <span className="not-italic text-muted">_____</span>&rdquo;
            </p>

            <div className="mt-6 grid gap-2">
              <a href={smsHref(note)} className="btn btn-primary w-full text-[1.0625rem]">
                <TextIcon />
                Text this with your photo
              </a>
              <button type="button" onClick={copy} className="btn btn-ghost w-full">
                Copy the note
              </button>
              <p role="status" className="min-h-6 text-[0.9375rem] text-sage-ink">
                {copied}
              </p>
            </div>

            <p className="mt-2 text-[0.9375rem] text-muted">
              Rather talk?{" "}
              <a href={telHref} className="link inline-flex min-h-11 items-center font-semibold">
                Call {business.phone}
              </a>
              , Monday to Saturday.
            </p>

            {f && (
              <figure className="mt-6 grid grid-cols-[6rem_1fr] items-center gap-4 border-t border-rule pt-5">
                <Image src={f.job.src} alt={f.job.alt} sizes="96px" className="aspect-square h-auto w-full object-cover" />
                <figcaption className="text-[0.9375rem] leading-snug">
                  <span className="kicker block text-[0.75rem] text-sage-ink">Matched before</span>
                  {f.jobCaption}
                </figcaption>
              </figure>
            )}

            <p className="mt-6">
              <Confirm>that {business.phone} can take texts and photos</Confirm>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
