import type { Metadata } from "next";
import { siteMeta, siteSeo } from "@/data/site";
import { absoluteUrl, getPublicSiteOrigin } from "@/lib/site-url";

const defaultOgImage = {
  url: siteSeo.ogImagePath,
  width: 1200,
  height: 630,
  alt: `${siteMeta.title} — ${siteMeta.org}`,
} as const;

/** Root layout metadata: base URL, defaults, and global tags. */
export const rootSeoMetadata: Metadata = {
  metadataBase: new URL(getPublicSiteOrigin()),
  applicationName: siteMeta.title,
  authors: [{ name: siteMeta.founder, url: absoluteUrl("/about") }],
  creator: siteMeta.founder,
  publisher: siteMeta.org,
  keywords: [...siteSeo.keywords],
  category: "social",
  icons: {
    icon: "/icon.svg",
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png" },
      { url: "/apple-touch-icon-precomposed.png" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    siteName: siteMeta.title,
    locale: siteSeo.locale,
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    images: [siteSeo.ogImagePath],
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

/**
 * Per-route metadata with canonical URL, Open Graph, and Twitter.
 * `title` becomes the segment before the template (e.g. "Home" → "Home · Voices Unheard").
 */
export function createPageMetadata(input: {
  title: string;
  description: string;
  pathname: string;
  keywords?: readonly string[];
}): Metadata {
  const url = absoluteUrl(input.pathname);
  const fullTitle = `${input.title} · ${siteMeta.title}`;
  const keywords = input.keywords?.length ? [...siteSeo.keywords, ...input.keywords] : [...siteSeo.keywords];

  return {
    title: input.title,
    description: input.description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      url,
      title: fullTitle,
      description: input.description,
      siteName: siteMeta.title,
      locale: siteSeo.locale,
      type: "website",
      images: [defaultOgImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: input.description,
      images: [siteSeo.ogImagePath],
    },
  };
}
