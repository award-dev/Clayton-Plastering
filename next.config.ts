import type { NextConfig } from "next";

// Preview builds must never be indexed. The header covers every route and file,
// including images and video, on top of the meta tag and robots.txt.
const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [375, 480, 640, 768, 960, 1280, 1600],
    imageSizes: [96, 160, 240, 320],
    qualities: [70, 75, 80],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
