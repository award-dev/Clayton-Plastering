import { Ballroom } from "@/components/Ballroom";
import { ClosingCta } from "@/components/ClosingCta";
import { CorniceRule } from "@/components/CorniceRule";
import { Faq } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { Heritage } from "@/components/Heritage";
import { HowItWorks } from "@/components/HowItWorks";
import { JobBook } from "@/components/JobBook";
import { MatchMyWall } from "@/components/MatchMyWall";
import { MobileCallBar } from "@/components/MobileCallBar";
import { RakingLight } from "@/components/RakingLight";
import { Reviews } from "@/components/Reviews";
import { Services } from "@/components/Services";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Services />
        <MatchMyWall />
        <Ballroom />
        <RakingLight />
        <Heritage />
        <Reviews />
        <CorniceRule />
        <JobBook />
        <HowItWorks />
        <Faq />
        <ClosingCta />
      </main>
      <SiteFooter />
      <MobileCallBar />
    </>
  );
}
