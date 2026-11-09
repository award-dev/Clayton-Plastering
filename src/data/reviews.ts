// Reviews are quoted word for word. Never edit, trim or combine them.
// Source: Facebook recommendations on facebook.com/claytonplasteringandtuckpointing/reviews (read Nov 2026).
// Facebook shows "Not yet rated (4 reviews)". Three were readable without logging in.
// Shelley Welsch's text is truncated on Facebook ("See more"); the full text matches the testimonial on the company's website.
//
// TODO(client): Google shows 4.4 stars, but the review count and review text need a signed-in view.
// Send 2–3 Google reviews (name + date) to feature, and the current review count.
//
// Not used: the website's testimonials from Dustin M., David D. and C.J. J. have no date or source.

export type Review = {
  name: string;
  source: "Facebook" | "Google";
  date: string; // ISO
  dateLabel: string;
  text: string;
  url: string;
  /** Short pull-quote: must be an exact substring of `text`. */
  pull?: string;
};

export const reviews: Review[] = [
  {
    name: "Shelley Welsch",
    source: "Facebook",
    date: "2019-07-29",
    dateLabel: "July 29, 2019",
    pull: "kept to the original bid",
    text: "We have used Clayton Plastering & Tuckpointing multiple times over the years, for both tuckpointing and plastering. We used them again - this time for major plastering throughout our 91-year-old home. The price quoted was very fair. We had taken the time to mark all the areas we thought needed attention. Jesse and Matt did those, but also did additional needed work that their experienced eyes could see, and kept to the original bid. We had prepared ourselves for a mess after all the work was completed, but? It did not happen. They left the house in good shape - I had to sweep up a few pieces of plaster that fell from the drop cloths they placed in every room in which they worked, but otherwise, the place looked great. We have recommended Clayton Plastering & Tuckpointing to others in the past, and we will do so in the future. Five stars, no question.",
    url: "https://www.facebook.com/claytonplasteringandtuckpointing/reviews",
  },
  {
    name: "Leslie E. Weinberg",
    source: "Facebook",
    date: "2016-10-28",
    dateLabel: "October 28, 2016",
    pull: "blending the old stucco with the new",
    text: "So pleased we chose Clayton Plaster & Tuckpointing. They did an amazing job on our exterior stucco! They far surpassed my expectations. They did a superior job on blending the old stucco with the new. Not only were they timely, they were courteous, but they also cleaned up spotless after the job was completed. I highly recommend using them!",
    url: "https://www.facebook.com/claytonplasteringandtuckpointing/reviews",
  },
  {
    name: "Thomas Gilliland",
    source: "Facebook",
    date: "2020-01-18",
    dateLabel: "January 18, 2020",
    text: "They do amazing work. Highly recommend",
    url: "https://www.facebook.com/claytonplasteringandtuckpointing/reviews",
  },
];
