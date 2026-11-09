import { photos, type Photo } from "./projects";

// Services come from the current website and the BBB profile. No exclusions were given.
// Each one is a "plate" in the pattern book. Plate numbers are Roman, like an old trade catalog.

export type Service = {
  plate: string;
  id: string;
  name: string;
  line: string;
  body: string;
  includes: string[];
  photo: Photo;
  /** Optional before/after pair shown instead of the single photo. */
  pair?: [Photo, Photo];
};

export const services: Service[] = [
  {
    plate: "I",
    id: "plaster-repair",
    name: "Plaster repair & texture matching",
    line: "The hole the plumber left. The ceiling the tub leaked through.",
    body: "We patch old plaster so the patch doesn't announce itself: smooth, sand, swirl, heavy knife, whatever the house already has. Whole rooms, too.",
    includes: ["Holes after plumbers and electricians", "Water damage", "Cracks and sagging ceilings", "Skim coats and full replaster", "Drywall"],
    photo: photos.fireplaceAfter,
    pair: [photos.fireplaceBefore, photos.fireplaceAfter],
  },
  {
    plate: "II",
    id: "ornamental",
    name: "Ornamental plaster",
    line: "Cornices, medallions, ribs and crowns. Cast, run and set.",
    body: "When a piece of the ceiling's decoration is missing, we make another one that looks like it was always there.",
    includes: ["Cornice repair and new runs", "Ceiling medallions", "Crown and window moldings", "Niches and arches", "Ribbed and vaulted ceilings"],
    photo: photos.gothicCeiling,
  },
  {
    plate: "III",
    id: "stucco-eifs",
    name: "Stucco & EIFS",
    line: "Old stucco blended with new. New stucco from scratch.",
    body: "Exteriors, additions and foundations, in traditional stucco or EIFS (Dryvit-type) systems. Spanish adobe to sand pebble finishes.",
    includes: ["Stucco repair and matching", "New stucco and EIFS", "Foundation stucco", "Stone veneer", "Additions"],
    photo: photos.spanishStucco,
  },
  {
    plate: "IV",
    id: "tuckpointing",
    name: "Tuckpointing & masonry",
    line: "St. Louis is a brick town. Brick needs mortar.",
    body: "We grind out tired joints and repoint them, rebuild chimneys, and fix the stone and brick around the house.",
    includes: ["Tuckpointing", "Chimneys", "Stone foundations", "Patios, walkways and porches", "Brick mailboxes"],
    photo: photos.chimneyAfter,
    pair: [photos.chimneyBefore, photos.chimneyAfter],
  },
  {
    plate: "V",
    id: "waterproofing",
    name: "Waterproofing & caulking",
    line: "The unglamorous part that keeps the rest standing.",
    body: "Sealing joints, openings and masonry so the water stays outside where it belongs.",
    includes: ["Caulking", "Masonry water sealing", "Cement board", "Washing"],
    photo: photos.stoneFoundation,
  },
  {
    plate: "VI",
    id: "commercial",
    name: "Commercial & property managers",
    line: "Storefronts, offices, churches and condo buildings.",
    body: "Facades, interior plaster and EIFS for businesses, plus steady repair work for property managers and condo associations.",
    includes: ["Storefront facades", "EIFS projects", "Churches and older public buildings", "Property management and condo associations"],
    photo: photos.commercialBlock,
  },
];
