import type { Metadata } from "next";

import { LegalPage } from "@/components/LegalPage";
import { business, mailHref, telHref } from "@/data/business";

export const metadata: Metadata = {
  title: `Accessibility (draft) | ${business.name}`,
  description: `Accessibility statement for the ${business.legalName} website. Draft for owner review.`,
};

export default function Accessibility() {
  return (
    <LegalPage title="Accessibility" updated="November 2026">
      <p>
        We want everyone to be able to use this website, including people who use screen readers, keyboards, magnification or voice control. Our
        goal is to meet the Web Content Accessibility Guidelines (WCAG) 2.2, level AA.
      </p>
      <h2>What we&rsquo;ve done</h2>
      <ul>
        <li>Text and controls meet WCAG AA color contrast.</li>
        <li>Everything works with a keyboard, with a visible focus outline.</li>
        <li>Photos have text descriptions. Video clips are silent and come with a written summary.</li>
        <li>Moving clips can be paused, and motion is turned off if your device asks for reduced motion.</li>
        <li>The page works when zoomed to 200% and on narrow screens.</li>
      </ul>
      <h2>Last tested</h2>
      <p>November 2026, with automated checks (axe-core, Lighthouse) and a manual keyboard pass.</p>
      <h2>Tell us about a problem</h2>
      <p>
        If something on this site doesn&rsquo;t work for you, call <a href={telHref}>{business.phone}</a> or email{" "}
        <a href={mailHref}>{business.email}</a>. Tell us the page and what went wrong. We&rsquo;ll respond within 2 business days and help you get what you
        need another way in the meantime.
      </p>
    </LegalPage>
  );
}
