# Clayton Plastering & Tuckpointing: preview notes

Gathered 9 Nov 2026. Direction A ("The Pattern Book") built the same day.

**Preview handling:** share the link only with the owner. If they say no, or don't answer within 30 days (by **9 Dec 2026**), delete the Vercel deployment and the downloaded assets, and note the date here.

## Sources checked

| Source | Result | What we took |
|---|---|---|
| claytonplasteringandtuckpointing.com (7 pages) | Loaded | Facts, 56 photos, 5 testimonials (undated, no source) |
| facebook.com/claytonplasteringandtuckpointing | Photos, reels, videos, reviews and contact tabs load without login. The main feed and single photo pages need a login. | 161 photos (square crops, 720–1536px), 9 videos, 3 dated recommendations, contact info, Feb 2025 ballroom post |
| BBB.org profile | Loaded | Legal name, A+ rating, incorporation date, 1-year workmanship policy |
| GuildQuality | Loaded, no review data shown | Old address only |
| Google Business Profile (share.google link from Aaron) | Limited view only. Reviews and count need a sign-in. | 4.4 stars, "Plasterer", Monday hours 8 AM–4 PM. **Still need:** review count and 2–3 reviews (name + date). |
| Instagram | None found | n/a |

## Facts (source)

- Legal name: Clayton Plastering & Tuckpointing, LLC (BBB). Incorporated 3/5/2004 (BBB).
- Phone (314) 726-6359 (site, BBB, FB lists it as "Mobile"). Email plasteringandtuckpointing@gmail.com (site, FB).
- Hours: Mon–Sat 8:00–5:00, Sun closed (site).
- Payment: cash, check, Visa, Mastercard, Discover, Amex, PayPal (site icons). BBB says checks.
- BBB rating A+, **not** BBB Accredited, 0 complaints in 3 years (BBB, as of Nov 2026).
- Policy: "We will return and fix our workmanship mistakes for one year." (BBB)
- Family: **6th generation** (from Aaron, Nov 2026; site still says "5th generation"). Family-owned and operated (site).
- People: Jesse Mohan (FB posts; named in reviews), Tina Mohan (FB replies to reviews; a BBB search snippet lists her as President), Matt and Pat (named in reviews), Trevor Quinlisk (FB video caption).
- Notable job: "Park Royal ballroom plaster repair." Posted by Jesse Mohan on 19 Feb 2025, with photos of ornate cornice casting and repair.
- Services (site + BBB): plaster repair and renovation, texture matching, water damage repair, cornice work, medallions, crown and window moldings, niches, stucco, EIFS/Dryvit, tuckpointing, masonry (chimneys, patios, walkways, porches, brick mailboxes), stone veneer, foundation stucco and parging, waterproofing and caulking, drywall, cement board. Residential and commercial (storefronts, offices, churches, municipal buildings). Also works with property managers and condo associations.
- Exclusions: none given.

## Conflicts the owner must settle

- **Address:** BBB has 13032 Lakeridge Dr, St. Louis 63138. Facebook and GuildQuality have 6614 Clayton Rd, St. Louis 63117. Plan: show service area only, no street address.
- **Start year:** BBB says business started 1/1/1970 ("56 years"). The About page says "late 1980's". The home page says "Since 2004". Plan: lead with "6th generation" and leave the year out.
- **Experience:** the site says "80 years of combined experience". This is old copy and the owner needs to confirm it.

## Claims from the current site we will NOT repeat without proof

"St. Louis' Choice", "100% satisfaction guarantee", "renovated thousands of business exteriors", "featured in St. Louis Magazine's top ten homes", "served Habitat for Humanity", "finest materials", "second to none".

## Reviews (word for word)

Facebook recommendations (FB shows "Not yet rated (4 reviews)"; 3 are readable logged out):
- Leslie E. Weinberg, Oct 28, 2016. Exterior stucco blend.
- Shelley Welsch, Jul 29, 2019. Plastering a 91-year-old home. FB truncates the text; the full text matches the website.
- Thomas Gilliland, Jan 18, 2020. "They do amazing work. Highly recommend"

Website testimonials (no date or source): Leslie W., Shelley W., Dustin M., David D., C.J. J. The site shows two different texts under "David D."; owner to confirm.

## Step 0: reference sites

What makes them good:
1. Each design starts from the owner's real world (classic cars, a butcher case) and uses the client's own video and photos as proof.
2. Every claim is concrete: real prices, real process, real reviews with names. Gaps say "Owner to confirm" instead of being faked.
3. One interaction mirrors how the business actually sells (load picker = pricing by truck size).

What Clayton must not look like:
1. All four references are **warm cream + near-black + red accent** with condensed or grotesque sans display type (Barlow, Bricolage, Big Shoulders). Clayton gets no cream, no black hero and no red accent.
2. Closest reference is Max's (heritage + tradition). Avoid paper texture, a framed dark hero and condensed signage type.
3. Martens is the other risk (contractor + before/after). Avoid the dark video hero, red CTAs and the "Watch the work" reel rhythm.

## Step 1: the business's world

- **The world:** lime plaster and horsehair over wood lath; hawk and trowel; run moulds pulled along wet plaster to make cornices; casts of ornaments; a flashlight held flat to the wall to check a finish (they do this in their own photos); blue painter's tape; scaffolding on Tudor, Spanish-revival and brick St. Louis homes; churches and ballrooms. Their logo green is the trowel man's shirt.
- **How they sell:** the buyer's fear is "will the patch show?" and "will they wreck my house?" Reviews praise blending old stucco with new and spotless cleanup. Quotes start with a call or a photo, then a free estimate.
- **True and special:** six generations of one family in the same trade. Ornamental work almost nobody else in town does (Park Royal ballroom). Texture matching. A 1-year workmanship promise (BBB).

## Compliance flags

- Videos: 5 of 9 have audio tracks (content unknown). Plan: strip audio on all; play muted with no sound option. Then no captions are needed. Add a text summary next to each.
- People: crew faces in some work shots (team, OK with owner sign-off). The sepia crew photo is historical; owner to confirm who's in it.
- House numbers or plates: mailbox shows a "6", and the Kehrs Mill Rd truck photo may show a plate. Skip both. Street names in source filenames don't go in captions.
- Stock: the current site has a GettyImages file. Dropped.
- Logo: 220px raster, too small. Propose a text wordmark in their green.

## Built: what's real vs placeholder

Every `TODO(client)` in `src/data/` shows on the page as an "Owner to confirm" pencil note:

- Google review count, and 2–3 Google reviews to feature (`reviews.ts`, `business.ts`)
- Owner first name / who prospects ask for (`business.ts`)
- Service area towns (`business.ts`)
- Hours: the site says Mon–Sat 8–5; Google says Monday 8–4 (`business.ts`)
- Street address: BBB and Facebook disagree; not shown (`business.ts`)
- Founding year: 1970 vs late 1980s vs 2004; not shown, "Est. six generations ago" instead (`business.ts`)
- License and insurance details (`business.ts`, `faq.ts`)
- One-year workmanship promise wording, taken from BBB (`business.ts`)
- That (314) 726-6359 accepts texts and photos ("Match my wall", call bar)
- Who's in the old crew photo, and the year (hero, heritage)
- Names and years for generations I–V (heritage)
- Park Royal ballroom job details, and OK to name the building
- Story of the raking-light / scored-stone hallway job
- Privacy, Terms and Accessibility pages: drafts for owner review

## QA (9 Nov 2026, local production build)

- axe-core (WCAG 2.2 AA + best practice), 4 pages × 375px and 1280px: 0 violations, 0 needs review
- Lighthouse mobile (3 runs): Performance 90–95, Accessibility 100, Best Practices 100, SEO 66 (only `is-crawlable` fails: that's the noindex, expected)
- Keyboard: 42 tab stops at 1280px and 38 at 375px. All have a visible focus outline, none are hidden behind the sticky header or call bar, and all targets are 44px or more. "Match my wall" works fully by keyboard (arrow keys inside each group).
- Reflow: no sideways scroll at 320px or at 200% zoom (640px)
- Reduced motion: 0 running animations, videos stay paused
- Not run: a VoiceOver pass (no macOS/iOS in this environment). A headings/landmarks outline was checked instead; do a 5-minute VoiceOver check on a phone before sending.
