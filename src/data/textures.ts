import type { StaticImageData } from "next/image";

import smooth from "@/assets/textures/smooth-plaster.jpg";
import scored from "@/assets/textures/scored-stone.jpg";
import knife from "@/assets/textures/heavy-knife.jpg";
import swirl from "@/assets/textures/soft-swirl.jpg";
import sand from "@/assets/textures/sand-stucco.jpg";
import ornament from "@/assets/textures/cast-ornament.jpg";
import brick from "@/assets/textures/brick-and-mortar.jpg";
import stone from "@/assets/textures/stone-foundation.jpg";

import { photos, type Photo } from "./projects";

// "Match my wall": the signature interaction.
// Every swatch is cropped from a real Clayton job photo (sources in projects.ts / src/assets/_asset_log.json).

export type Option = { id: string; label: string; phrase: string };

export const places: Option[] = [
  { id: "wall", label: "Inside wall", phrase: "an inside wall" },
  { id: "ceiling", label: "Ceiling", phrase: "a ceiling" },
  { id: "trim", label: "Cornice or molding", phrase: "a cornice or molding" },
  { id: "stucco", label: "Outside stucco", phrase: "outside stucco" },
  { id: "masonry", label: "Brick, stone or chimney", phrase: "brick, stone or a chimney" },
];

export const problems: Option[] = [
  { id: "hole", label: "Hole from a plumber or electrician", phrase: "a hole left by a plumber or electrician" },
  { id: "water", label: "Water damage", phrase: "water damage" },
  { id: "cracks", label: "Cracks", phrase: "cracks" },
  { id: "falling", label: "Pieces coming off", phrase: "pieces coming off" },
  { id: "mortar", label: "Mortar washing out", phrase: "mortar washing out of the joints" },
  { id: "tired", label: "It just looks tired", phrase: "a surface that just looks tired" },
];

export type Finish = {
  id: string;
  label: string;
  phrase: string;
  swatch: StaticImageData;
  swatchAlt: string;
  /** A real job with this finish: "we've matched this before." */
  job: Photo;
  jobCaption: string;
};

export const finishes: Finish[] = [
  { id: "smooth", label: "Smooth", phrase: "smooth plaster", swatch: smooth, swatchAlt: "Close-up of smooth white plaster", job: photos.fireplaceAfter, jobCaption: "A living room wall around the fireplace, replastered smooth." },
  { id: "swirl", label: "Soft swirl", phrase: "a soft swirl texture", swatch: swirl, swatchAlt: "Close-up of plaster with a soft hand-swirled texture", job: photos.archedDoorway, jobCaption: "Hand-troweled texture around an arched doorway." },
  { id: "knife", label: "Heavy knife", phrase: "a heavy knife texture", swatch: knife, swatchAlt: "Close-up of deep, ridged knife-troweled plaster texture", job: photos.archedDoorway, jobCaption: "Heavy hand-troweled texture, matched around a new arch." },
  { id: "scored", label: "Scored stone", phrase: "plaster scored to look like stone", swatch: scored, swatchAlt: "Close-up of plaster scored into blocks like cut stone", job: photos.scoredWall, jobCaption: "A hallway finished in plaster scored to look like cut stone." },
  { id: "ornament", label: "Ornament", phrase: "cast ornament", swatch: ornament, swatchAlt: "Close-up of a cast plaster ornament with scrolls", job: photos.corniceRestored, jobCaption: "Park Royal ballroom, 2025: new ornament cast and set." },
  { id: "sand", label: "Sand stucco", phrase: "sand-finish stucco", swatch: sand, swatchAlt: "Close-up of fine sand-finish stucco", job: photos.commercialBlock, jobCaption: "A commercial building finished in stucco." },
  { id: "brick", label: "Brick & mortar", phrase: "brick and mortar", swatch: brick, swatchAlt: "Close-up of red brick with fresh mortar joints", job: photos.chimneyAfter, jobCaption: "A brick chimney after tuckpointing." },
  { id: "stone", label: "Old stone", phrase: "old stone", swatch: stone, swatchAlt: "Close-up of a rough limestone foundation wall", job: photos.stoneFoundation, jobCaption: "A stone foundation wall, repointed." },
];

export function buildNote(place?: Option, problem?: Option, finish?: Finish) {
  const where = place ? place.phrase : "a wall";
  const what = problem ? ` with ${problem.phrase}` : " that needs a look";
  const looks = finish ? ` The finish looks like ${finish.phrase}.` : "";
  return `Hi Clayton Plastering, I've got ${where}${what}.${looks} Photo attached. My ZIP is `;
}
