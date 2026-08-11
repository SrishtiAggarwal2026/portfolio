/**
 * Canonical origin for metadata, sitemap, and JSON-LD.
 * Set `NEXT_PUBLIC_SITE_URL` (e.g. https://voicesunheard.org) in production.
 * On Vercel, `VERCEL_URL` is used as a fallback when the public URL env is unset.
 */
export function getPublicSiteOrigin(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
  if (explicit) return explicit;
  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) {
    const host = vercel.replace(/^https?:\/\//, "");
    return `https://${host}`;
  }
  return "http://localhost:3000";
}

/** Absolute URL for a site path (leading slash). */
export function absoluteUrl(pathname: string): string {
  const origin = getPublicSiteOrigin();
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  if (path === "/") return `${origin}/`;
  return `${origin}${path}`;
}
