import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site-url";

const routes: { path: string; changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"]; priority: number }[] =
  [
    { path: "/", changeFrequency: "weekly", priority: 1 },
    { path: "/about", changeFrequency: "monthly", priority: 0.9 },
    { path: "/initiative", changeFrequency: "monthly", priority: 0.9 },
    { path: "/impact", changeFrequency: "monthly", priority: 0.85 },
    { path: "/voices", changeFrequency: "monthly", priority: 0.85 },
    { path: "/timeline", changeFrequency: "monthly", priority: 0.8 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.9 },
  ];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency,
    priority,
  }));
}
