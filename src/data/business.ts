// Everything the page says about the business lives here.
// Facts carry their source. Unknowns are marked TODO(client) and render as "Owner to confirm".
// Gathered November 2026.

export const AS_OF = "November 2026";

export const business = {
  name: "Clayton Plastering & Tuckpointing",
  shortName: "Clayton Plastering",
  // Source: BBB.org profile.
  legalName: "Clayton Plastering & Tuckpointing, LLC",
  // Brand line, written for this preview. The founding year is in dispute (see below), so we lean on the generation count instead.
  brandLine: "Est. six generations ago",
  // Source: Aaron (Elward AI Dev), Nov 2026. The current website still says "5th generation".
  generation: 6,
  // Source: website, BBB, Facebook ("Mobile"), Google.
  phone: "(314) 726-6359",
  phoneE164: "+13147266359",
  // Source: website, Facebook.
  email: "plasteringandtuckpointing@gmail.com",
  // Source: website. Used only for schema and links, never as the preview's own address.
  currentWebsite: "https://www.claytonplasteringandtuckpointing.com",
  city: "St. Louis",
  region: "MO",
  // TODO(client): confirm the towns and neighborhoods they cover. The site only says "throughout St. Louis, MO".
  serviceArea: "St. Louis and the surrounding area",
  serviceAreaConfirmed: false,
  // TODO(client): BBB lists 13032 Lakeridge Dr, 63138. Facebook and GuildQuality list 6614 Clayton Rd, 63117.
  // Not shown on the page until the owner picks one (or says it's a service-area business).
  address: null as string | null,
  // TODO(client): BBB says started 1/1/1970. About page says "late 1980's". Home page says "Since 2004". LLC incorporated 3/5/2004 (BBB).
  foundedYear: null as number | null,
  // TODO(client): who should prospects ask for? Jesse Mohan and Tina Mohan both appear on Facebook.
  ownerFirstName: null as string | null,
  crewNames: ["Jesse", "Tina", "Matt", "Pat"], // From Facebook posts and review text. TODO(client): confirm who's current.
  // Source: website contact page. Google shows Monday 8 AM–4 PM. TODO(client): confirm.
  hours: [
    { days: "Monday–Saturday", open: "8:00 am", close: "5:00 pm", schema: "Mo-Sa 08:00-17:00" },
    { days: "Sunday", open: null, close: null, schema: null },
  ],
  hoursConfirmed: false,
  // Source: website contact page (payment icons). BBB lists checks.
  payment: ["Cash", "Check", "Visa", "Mastercard", "Discover", "American Express", "PayPal"],
  // Source: website ("free quote and consultation with no obligation").
  freeEstimates: true,
  // Source: BBB.org "Refund and exchange policy". TODO(client): confirm wording before launch.
  workmanshipPromise: "If our workmanship fails within a year, we come back and fix it.",
  workmanshipPromiseConfirmed: false,
  // TODO(client): license and insurance details. Nothing public found.
  licensedInsured: null as string | null,
  // TODO(client): can customers text photos to the main number? Facebook lists it as a mobile.
  textsOk: false,
  ratings: {
    // Source: Google Maps limited view, Nov 2026. Review count was not visible without signing in.
    google: { value: 4.4, count: null as number | null, asOf: AS_OF, url: "https://share.google/e2nSzaMHCpdNbvRpU" },
    // Source: BBB.org. Rating only. The business is NOT BBB Accredited, so we never imply it.
    bbb: {
      grade: "A+",
      asOf: AS_OF,
      url: "https://www.bbb.org/us/mo/saint-louis/profile/plastering-contractors/clayton-plastering-tuckpointing-0734-310012946",
    },
    // Source: Facebook reviews tab: "Not yet rated (4 reviews)".
    facebook: {
      count: 4,
      asOf: AS_OF,
      url: "https://www.facebook.com/claytonplasteringandtuckpointing/reviews",
    },
  },
  links: {
    facebook: "https://www.facebook.com/claytonplasteringandtuckpointing",
    google: "https://share.google/e2nSzaMHCpdNbvRpU",
  },
} as const;

export const telHref = `tel:${business.phoneE164}`;
export const mailHref = `mailto:${business.email}`;

/** Cross-platform SMS link (iOS and Android both accept "?&body="). */
export function smsHref(body?: string) {
  return body ? `sms:${business.phoneE164}?&body=${encodeURIComponent(body)}` : `sms:${business.phoneE164}`;
}

export const preview = {
  studio: "Elward AI Dev LLC",
  year: 2026,
  disclaimer:
    "Concept preview by Elward AI Dev LLC, made for review by Clayton Plastering & Tuckpointing. Not the official Clayton Plastering & Tuckpointing website. Photos and clips are from Clayton Plastering & Tuckpointing's own website and Facebook page and will be removed on request. Reviews are quoted exactly as posted on Facebook.",
};
