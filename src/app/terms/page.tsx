import type { Metadata } from "next";

import { LegalPage } from "@/components/LegalPage";
import { business, mailHref, telHref } from "@/data/business";

export const metadata: Metadata = {
  title: `Terms of Use (draft) | ${business.name}`,
  description: `Terms for using the ${business.legalName} website. Draft for owner review.`,
};

export default function Terms() {
  return (
    <LegalPage title="Terms of Use" updated="November 2026">
      <p>By using this website you agree to these terms. Effective date: to be set at launch.</p>
      <h2>Information on this site</h2>
      <p>
        We try to keep what&rsquo;s here accurate, but it&rsquo;s general information, not a quote. Every job is priced after we see it. Photos show past work
        and are examples, not promises about your job.
      </p>
      <h2>Estimates and work</h2>
      <p>The price, scope and schedule for your job are set in the estimate or agreement we give you, not on this website.</p>
      <h2>Text messages</h2>
      <p>
        If you text us, we&rsquo;ll reply about your estimate or job. Message frequency varies. Msg &amp; data rates may apply. Reply STOP to opt out, HELP for
        help. We don&rsquo;t send marketing texts.
      </p>
      <h2>Photos and content</h2>
      <p>Photos and text on this site belong to {business.legalName}. Please don&rsquo;t reuse them without asking.</p>
      <h2>Links</h2>
      <p>Links to other sites (Facebook, Google, BBB.org) are for convenience. We don&rsquo;t control those sites.</p>
      <h2>Governing law</h2>
      <p>These terms are governed by the laws of the State of Missouri.</p>
      <h2>Contact</h2>
      <p>
        <a href={telHref}>{business.phone}</a> · <a href={mailHref}>{business.email}</a>
      </p>
    </LegalPage>
  );
}
