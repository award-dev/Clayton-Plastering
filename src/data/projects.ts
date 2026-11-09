import type { StaticImageData } from "next/image";

import oldCrew from "@/assets/heritage/old-plastering-crew.jpg";
import corniceRestored from "@/assets/ballroom/cornice-restored-corner.jpg";
import corniceDamaged from "@/assets/ballroom/cornice-damaged-corner.jpg";
import castOrnament from "@/assets/ballroom/cast-ornament-on-bench.jpg";
import ornamentSet from "@/assets/ballroom/ornament-set-in-ceiling.jpg";
import plastererCeiling from "@/assets/ballroom/plasterer-at-ceiling.jpg";
import ballroomScaffold from "@/assets/ballroom/ballroom-on-scaffold.jpg";
import flashlight from "@/assets/raking/flashlight-on-wall.jpg";
import tapedOut from "@/assets/raking/panels-taped-out.jpg";
import scoredWall from "@/assets/raking/scored-wall-finished.jpg";
import fireplaceBefore from "@/assets/services/fireplace-wall-before.jpg";
import fireplaceAfter from "@/assets/services/fireplace-wall-after.jpg";
import gothicCeiling from "@/assets/services/gothic-rib-ceiling.jpg";
import spanishStucco from "@/assets/services/spanish-revival-stucco.jpg";
import tudorCrew from "@/assets/services/tudor-tuckpointing-crew.jpg";
import chimneyBefore from "@/assets/services/chimney-before.jpg";
import chimneyAfter from "@/assets/services/chimney-after.jpg";
import commercialBlock from "@/assets/services/commercial-stucco-block.jpg";
import stoneFoundation from "@/assets/services/stone-foundation-wall.jpg";
import spanishRear from "@/assets/work/spanish-revival-rear.jpg";
import tudorFront from "@/assets/work/tudor-brick-front.jpg";
import cinema from "@/assets/work/cinema-facade.jpg";
import churchAltar from "@/assets/work/church-altar-arch.jpg";
import outdoorKitchen from "@/assets/work/outdoor-kitchen-stucco.jpg";
import stuccoChimney from "@/assets/work/stucco-house-tall-chimney.jpg";
import turret from "@/assets/work/turret-stucco-scaffold.jpg";
import archedDoorway from "@/assets/work/arched-doorway-texture.jpg";
import brownCoat from "@/assets/work/commercial-brown-coat.jpg";
import modernTownhomes from "@/assets/work/modern-stucco-townhomes.jpg";

export type Photo = {
  src: StaticImageData;
  alt: string;
  caption?: string;
  /** Exact URL the asset came from. Every photo on this preview is the client's own. */
  source: string;
  /** Pairs before/after shots of the same job. */
  pair?: string;
};

const FB = "https://www.facebook.com/photo.php?fbid=";
const FB_SET = "&set=pb.100063621159680.-2207520000&type=3";
const SITE = "https://irp.cdn-website.com/db73d7c9/dms3rep/multi/";

export const photos = {
  oldCrew: {
    src: oldCrew,
    alt: "Old sepia photograph of a plastering crew in white work clothes, one man holding a hawk overhead",
    caption: "An old plastering crew, from the current Clayton Plastering website.",
    source: `${SITE}Stucco_--_Exterior-Clayton_Plastering-Saint_Louis-025-2880w+%281%29.jpg`,
  },
  corniceRestored: {
    src: corniceRestored,
    alt: "Restored ceiling corner in the Park Royal ballroom: white plaster ornament over a sage-green dentil cornice",
    caption: "Park Royal ballroom, 2025. The finished corner.",
    source: `${FB}1152485270215501${FB_SET}`,
    pair: "ballroom",
  },
  corniceDamaged: {
    src: corniceDamaged,
    alt: "Damaged ballroom ceiling corner with the plaster ornament broken away down to bare patches",
    caption: "Where the ornament had let go.",
    source: `${FB}1152485210215507${FB_SET}`,
    pair: "ballroom",
  },
  castOrnament: {
    src: castOrnament,
    alt: "Freshly cast plaster ornament with scrolls and leaves lying on a workbench",
    caption: "A new piece, cast and drying.",
    source: `${FB}1152485413548820${FB_SET}`,
  },
  ornamentSet: {
    src: ornamentSet,
    alt: "Ornamental plaster crest with urn and scrollwork set into a white ceiling",
    caption: "Set in place and blended.",
    source: `${FB}1152485363548825${FB_SET}`,
  },
  plastererCeiling: {
    src: plastererCeiling,
    alt: "Plasterer on a ladder working ornament into a ballroom ceiling corner",
    caption: "Working the ornament into the corner.",
    source: `${FB}1152485546882140${FB_SET}`,
  },
  ballroomScaffold: {
    src: ballroomScaffold,
    alt: "Ballroom ceiling with ornate plaster cornice and wall panels, with scaffolding in the corner",
    source: `${FB}1152485316882163${FB_SET}`,
  },
  flashlight: {
    src: flashlight,
    alt: "Hand holding a flashlight flat against a painted wall; the low light shows the outline of an old arched plaster panel",
    caption: "Light held flat to the wall shows what paint hides.",
    source: `${FB}1073342144796481${FB_SET}`,
  },
  tapedOut: {
    src: tapedOut,
    alt: "Blue painter's tape outlining an arched panel and rectangles on a patched plaster wall",
    caption: "The old pattern, taped out.",
    source: `${FB}1073342301463132${FB_SET}`,
  },
  scoredWall: {
    src: scoredWall,
    alt: "Finished plaster hallway wall scored into blocks to look like cut stone, with an arched opening",
    caption: "Finished: plaster scored to look like cut stone.",
    source: `${FB}1073342208129808${FB_SET}`,
  },
  fireplaceBefore: {
    src: fireplaceBefore,
    alt: "Living room wall around a fireplace with plaster fallen away, showing brick underneath",
    caption: "Before",
    source: `${FB}4644526762287630${FB_SET}`,
    pair: "fireplace",
  },
  fireplaceAfter: {
    src: fireplaceAfter,
    alt: "Same living room after replastering: smooth walls around the fireplace and both windows",
    caption: "After",
    source: `${FB}4644527028954270${FB_SET}`,
    pair: "fireplace",
  },
  gothicCeiling: {
    src: gothicCeiling,
    alt: "Vaulted plaster ceiling with white ribs fanning out from small rosettes, a brass chandelier in the middle",
    caption: "Ribbed plaster ceiling.",
    source: `${FB}2871484292925228${FB_SET}`,
  },
  spanishStucco: {
    src: spanishStucco,
    alt: "Two-story white stucco house with a red clay tile porch roof and dark windows",
    caption: "Spanish-style stucco, finished.",
    source: `${SITE}Stucco_--_Exterior-Clayton_Plastering-Saint_Louis-058.jpg`,
  },
  tudorCrew: {
    src: tudorCrew,
    alt: "Two workers on tall extension ladders tuckpointing the brick face of a Tudor-style house",
    caption: "Tuckpointing a Tudor.",
    source: `${FB}2677933395613653${FB_SET}`,
  },
  chimneyBefore: {
    src: chimneyBefore,
    alt: "Worn red brick chimney on a shingled roof, with tarps laid around the base",
    caption: "Before",
    source: `${FB}3007088012698188${FB_SET}`,
    pair: "chimney",
  },
  chimneyAfter: {
    src: chimneyAfter,
    alt: "The same chimney after the work, with tight new mortar joints and a clean cap",
    caption: "After",
    source: `${FB}3007087846031538${FB_SET}`,
    pair: "chimney",
  },
  commercialBlock: {
    src: commercialBlock,
    alt: "Long single-story commercial building finished in smooth stucco scored into panels, with black storefront windows",
    caption: "Commercial stucco, scored to look like stone panels.",
    source: `${FB}7647800615293548${FB_SET}`,
  },
  stoneFoundation: {
    src: stoneFoundation,
    alt: "Basement stone foundation wall with fresh mortar between rough limestone blocks",
    caption: "Stone foundation, repointed.",
    source: `${FB}6932594413480842${FB_SET}`,
  },
  spanishRear: {
    src: spanishRear,
    alt: "Back of a white stucco house with a red tile roof over a covered patio",
    caption: "Stucco and arches, back of the house.",
    source: `${FB}2342919852448344${FB_SET}`,
  },
  tudorFront: {
    src: tudorFront,
    alt: "Brick Tudor house with half-timbered gable and a stone stair through a green front yard",
    caption: "Brick and half-timber Tudor.",
    source: `${FB}2677933875613605${FB_SET}`,
  },
  cinema: {
    src: cinema,
    alt: "Movie theater facade with large red CINEMA letters on a white stucco panel, a lift parked in front",
    caption: "Cinema facade.",
    source: `${SITE}Stucco_--_Exterior-Clayton_Plastering-Saint_Louis-062.jpg`,
  },
  churchAltar: {
    src: churchAltar,
    alt: "Pointed plaster arch framing a carved white stone altar in a church",
    caption: "Church arch.",
    source: `${FB}2871484499591874${FB_SET}`,
  },
  outdoorKitchen: {
    src: outdoorKitchen,
    alt: "Outdoor kitchen under a timber-framed roof with a new smooth stucco wall",
    caption: "Outdoor kitchen wall.",
    source: `${FB}3967769353296711${FB_SET}`,
  },
  stuccoChimney: {
    src: stuccoChimney,
    alt: "Corner of a two-story stucco house with dark casement windows and a tall stucco chimney",
    caption: "Stucco, top to chimney.",
    source: `${FB}7236160359790911${FB_SET}`,
  },
  turret: {
    src: turret,
    alt: "Stucco house with a round turret and bay windows, scaffolding set up along the side",
    caption: "Turret house, mid-job.",
    source: `${FB}5687378691335760${FB_SET}`,
  },
  archedDoorway: {
    src: archedDoorway,
    alt: "Arched interior doorway in heavy hand-troweled plaster texture",
    caption: "Hand-troweled arch.",
    source: `${FB}2342920062448323${FB_SET}`,
  },
  brownCoat: {
    src: brownCoat,
    alt: "Commercial building in gray base coat stucco, before the finish coat",
    caption: "Base coat on.",
    source: `${FB}7647801621960114${FB_SET}`,
    pair: "commercial",
  },
  modernTownhomes: {
    src: modernTownhomes,
    alt: "Modern townhomes with smooth white and red stucco panels against a blue sky",
    caption: "Modern stucco townhomes.",
    source: `${SITE}Stucco_--_Exterior-Clayton_Plastering-Saint_Louis-067-1920w.jpg`,
  },
} satisfies Record<string, Photo>;

/** "From the job book" grid, in display order. */
export const jobBook: Photo[] = [
  photos.spanishRear,
  photos.churchAltar,
  photos.tudorFront,
  photos.cinema,
  photos.archedDoorway,
  photos.modernTownhomes,
  photos.outdoorKitchen,
  photos.stuccoChimney,
  photos.turret,
  photos.stoneFoundation,
];

export type Clip = {
  src: string;
  poster: string;
  width: number;
  height: number;
  title: string;
  /** Text summary, so the clip never has to be watched (or heard) to be understood. */
  summary: string;
  posted: string;
  source: string;
};

// Audio stripped from every clip. Originals had unknown audio, so the preview plays them silent.
export const clips: Clip[] = [
  {
    src: "/video/water-damaged-wall-2018.mp4",
    poster: "/video/water-damaged-wall-2018-poster.jpg",
    width: 720,
    height: 540,
    title: "Water-damaged wall",
    summary: "A wall with paint and plaster peeling between two windows, then the same wall skimmed and finished smooth.",
    posted: "Dec 2018",
    source: "https://www.facebook.com/claytonplasteringandtuckpointing/videos/590402824713390/",
  },
  {
    src: "/video/foundation-stucco-2018.mp4",
    poster: "/video/foundation-stucco-2018-poster.jpg",
    width: 540,
    height: 540,
    title: "Foundation, refinished in stucco",
    summary: "A bare block foundation under a brick house and garage, then the same foundation with a new stucco finish.",
    posted: "Oct 2018",
    source:
      "https://www.facebook.com/claytonplasteringandtuckpointing/videos/applying-a-new-stucco-finish-to-your-foundation-can-be-an-affordable-yet-drastic/690893824613810/",
  },
  {
    src: "/video/plaster-curves-2018.mp4",
    poster: "/video/plaster-curves-2018-poster.jpg",
    width: 540,
    height: 720,
    title: "Custom plaster curves",
    summary: "An arched door and round window opening, plastered and textured by hand around the curves.",
    posted: "Dec 2018",
    source: "https://www.facebook.com/claytonplasteringandtuckpointing/videos/custom-plaster-curves-and-texture/2139573203039562/",
  },
];
