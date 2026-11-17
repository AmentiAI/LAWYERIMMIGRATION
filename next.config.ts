import type { NextConfig } from "next";

/**
 * Retired /local keyword pages, consolidated into the remaining location pages
 * (or the matching core page) to avoid near-duplicate doorway pages.
 */
const RETIRED_LOCAL_PAGES: Record<string, string> = {
  "immigration-attorney-mystic-ct": "/local/immigration-lawyer-mystic-ct",
  "immigration-law-firm-mystic-ct": "/local/immigration-lawyer-mystic-ct",
  "immigration-lawyer-near-me": "/local/immigration-lawyer-mystic-ct",
  "immigration-office": "/local/immigration-lawyer-mystic-ct",
  "immigration-law-office": "/local/immigration-lawyer-mystic-ct",
  "immigration-law-firm": "/local/immigration-lawyer-mystic-ct",
  "immigration-attorney-connecticut": "/local/immigration-lawyer-connecticut",
  "immigration-attorney": "/local/immigration-lawyer-connecticut",
  "immigration-attorney-bridgeport-connecticut": "/local/immigration-lawyer-connecticut",
  "naturalization-attorney-connecticut": "/local/citizenship-lawyer-connecticut",
  "deportation-defense-lawyer-connecticut": "/services",
  "immigration-services": "/services",
  "immigration-legal-services": "/services",
  "immigration-law": "/immigration",
  "us-immigration": "/immigration",
  "immigration-attorney-consultation": "/consultation",
  "green-card-renewal-lawyer": "/services/green-card-renewal",
};

const CONTENT_SECURITY_POLICY = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://upload.wikimedia.org https://www.google-analytics.com https://www.googletagmanager.com",
  "font-src 'self' data:",
  "connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com",
  "frame-src 'self' https://www.google.com https://secure.lawpay.com",
  "form-action 'self' https://secure.lawpay.com",
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "object-src 'none'",
].join("; ");

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  // Report-only first: watch the browser console for violations before enforcing.
  { key: "Content-Security-Policy-Report-Only", value: CONTENT_SECURITY_POLICY },
];

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/attorney",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/practice-areas",
        destination: "/services",
        permanent: true,
      },
      ...Object.entries(RETIRED_LOCAL_PAGES).map(([slug, destination]) => ({
        source: `/local/${slug}`,
        destination,
        permanent: true,
      })),
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        // Plain-text AI summaries: readable by crawlers, kept out of search results.
        source: "/:file(llms\\.txt|llms-full\\.txt)",
        headers: [{ key: "X-Robots-Tag", value: "noindex" }],
      },
      {
        source: "/llms/:section*",
        headers: [{ key: "X-Robots-Tag", value: "noindex" }],
      },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname: "/wikipedia/commons/**",
      },
    ],
  },
};

export default nextConfig;
