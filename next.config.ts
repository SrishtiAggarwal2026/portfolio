import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingExcludes: {
    "*": ["public/**/*"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
    /** Skip huge breakpoints so we do not generate 2K/4K variants for local photos. */
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [32, 48, 64, 96, 128, 160, 192, 224, 256, 320, 384],
    qualities: [45, 55, 65, 75, 80],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
};

export default nextConfig;
