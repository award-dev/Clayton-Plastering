import type { Metadata } from "next";

import { LegalPage } from "@/components/LegalPage";
import { business, mailHref, telHref } from "@/data/business";

export const metadata: Metadata = {
  title: `Privacy Policy (draft) | ${business.name}`,
  description: `How ${business.legalName} handles information from this website. Draft for owner review.`,
};

export default function Privacy() {
  return (
    <LegalPage title="Privacy Policy" updated="November 2026">
      <p>
        This policy explains what information {business.legalName} (&ldquo;we&rdquo;) collects through this website and what we do with it. Effective date: to be
        set at launch.
      </p>
      <h2>What this site collects</h2>
      <p>
        This website has no forms that send information to us. If you call, text or email us using the links on this site, your phone carrier or
        email provider delivers that message to us directly, and we receive whatever you choose to send (for example your name, number, address and
        photos of the work).
      </p>
      <p>
        The &ldquo;Match my wall&rdquo; tool runs entirely in your browser. It writes a draft text message for you; nothing is sent until you choose to send it from
        your own phone.
      </p>
      <h2>How we use it</h2>
      <ul>
        <li>To answer your question, give an estimate and schedule work.</li>
        <li>To keep records of jobs and payments.</li>
      </ul>
      <p>We don&rsquo;t sell your information. We don&rsquo;t share it except with people who help us do the job you asked for, or when the law requires it.</p>
      <h2>Text messages</h2>
      <p>
        If you text us, we&rsquo;ll text you back about your job. Text messaging opt-in data and consent will not be shared with third parties or affiliates
        for marketing purposes. Reply STOP to any text from us to stop receiving texts.
      </p>
      <h2>Cookies and tracking</h2>
      <p>This site doesn&rsquo;t use analytics, advertising pixels, session recording or chat widgets, and doesn&rsquo;t set tracking cookies.</p>
      <p>
        Links to Facebook, Google and BBB.org take you to those sites, which have their own privacy policies.
      </p>
      <h2>Contact</h2>
      <p>
        Questions about your information: <a href={telHref}>{business.phone}</a> or <a href={mailHref}>{business.email}</a>.
      </p>
    </LegalPage>
  );
}
