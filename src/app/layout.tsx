import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

import { business } from "@/data/business";
import { services } from "@/data/services";

import "./globals.css";

// Fonts are self-hosted (OFL, via Fontsource), instanced to the weights we use and subset to the characters on the site.
// Nothing is loaded from Google's servers. See CREDITS.md.
const bodoni = localFont({
  src: [
    { path: "../fonts/bodoni-moda-latin-opsz-normal.sub.woff2", style: "normal", weight: "500 700" },
    { path: "../fonts/bodoni-moda-latin-opsz-italic.sub.woff2", style: "italic", weight: "500 700" },
  ],
  variable: "--font-bodoni",
  display: "swap",
  adjustFontFallback: "Times New Roman",
  fallback: ["Georgia", "serif"],
});

const instrument = localFont({
  src: [{ path: "../fonts/instrument-sans-latin-wght-normal.sub.woff2", style: "normal", weight: "400 700" }],
  variable: "--font-instrument",
  display: "swap",
  fallback: ["Helvetica Neue", "Helvetica", "sans-serif"],
});

const SITE_URL = "https://clayton-plastering-preview.vercel.app";
const title = "Plaster, Stucco & Tuckpointing in St. Louis | Clayton Plastering & Tuckpointing";
const description =
  "Sixth-generation family plasterers in St. Louis. Plaster repair and texture matching, ornamental cornices, stucco and EIFS, tuckpointing and chimneys. Free estimates: (314) 726-6359.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  // Preview only: never indexed, followed or archived (also sent as X-Robots-Tag and in robots.txt).
  robots: { index: false, follow: false, noarchive: true, nocache: true, googleBot: { index: false, follow: false, noarchive: true } },
  openGraph: {
    type: "website",
    title,
    description,
    siteName: business.name,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Restored ornamental plaster cornice beside the words Six generations of St. Louis plaster" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og.jpg"] },
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#eef0ea",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: business.name,
  legalName: business.legalName,
  url: business.currentWebsite,
  telephone: business.phoneE164,
  email: business.email,
  image: `${SITE_URL}/og.jpg`,
  slogan: business.brandLine,
  areaServed: { "@type": "City", name: "St. Louis", containedInPlace: { "@type": "State", name: "Missouri" } },
  openingHours: business.hours.map((h) => h.schema).filter(Boolean),
  paymentAccepted: business.payment.join(", "),
  sameAs: [business.links.facebook],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Plastering and masonry services",
    itemListElement: services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.name } })),
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bodoni.variable} ${instrument.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[100] focus:bg-green focus:px-4 focus:py-3 focus:font-semibold focus:text-lime"
        >
          Skip to content
        </a>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
