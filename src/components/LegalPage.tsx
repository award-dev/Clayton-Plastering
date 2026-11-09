import { Confirm } from "./Confirm";
import { MobileCallBar } from "./MobileCallBar";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export function LegalPage({ title, updated, children }: { title: string; updated: string; children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main id="main" tabIndex={-1} className="wrap max-w-3xl py-14 sm:py-20">
        <p className="kicker text-sage-ink">Draft · {updated}</p>
        <h1 className="mt-3 text-5xl font-semibold sm:text-6xl">{title}</h1>
        <p className="mt-5">
          <Confirm>this whole page is a draft for the owner (and their lawyer, if they have one) to review before launch</Confirm>
        </p>
        <div className="legal mt-10 space-y-5 text-[1.0625rem] [&_h2]:mt-10 [&_h2]:text-3xl [&_h2]:font-semibold [&_li]:ml-5 [&_li]:list-disc [&_a]:text-green [&_a]:underline">
          {children}
        </div>
      </main>
      <SiteFooter />
      <MobileCallBar />
    </>
  );
}
