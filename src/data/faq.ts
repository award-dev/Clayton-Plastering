// Answers stick to what the business has said publicly (website, BBB, Facebook).
// Anything not confirmed is flagged with `confirm`.

export type Faq = { q: string; a: string; confirm?: string };

export const faqs: Faq[] = [
  {
    q: "The plumber left a hole in my ceiling. Is that too small a job?",
    a: "No. Walls and ceilings opened up by plumbers, electricians and leaks are regular work for us. Send a photo and we'll tell you what it needs.",
  },
  {
    q: "Will the patch match the rest of the wall?",
    a: "That's the whole job. We match the texture that's already there, inside or out. Leslie Weinberg's review says we \"did a superior job on blending the old stucco with the new.\" We'll take that.",
  },
  {
    q: "What does it cost?",
    a: "It depends on the wall, the damage and the finish. The estimate is free, and you get a price before we start.",
  },
  {
    q: "Are you going to wreck my house?",
    a: "Drop cloths go down in every room we work in, and cleanup is part of the job. One customer still found a few crumbs of plaster on the floor afterward. We read our reviews too.",
  },
  {
    q: "Do you work with property managers and condo associations?",
    a: "Yes. Repairs after leaks and other trades, common areas, facades and stucco for managed buildings.",
  },
  {
    q: "Do you do commercial work?",
    a: "Storefronts, offices, churches and municipal buildings: facades, EIFS, stucco and interior plaster.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Owner to confirm before launch.",
    confirm: "License and insurance details",
  },
];
