import type { MetadataRoute } from "next";

// Concept preview: disallow everything.
export default function robots(): MetadataRoute.Robots {
  return { rules: [{ userAgent: "*", disallow: "/" }] };
}
