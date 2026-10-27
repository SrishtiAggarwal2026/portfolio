import galleryManifest from "@/data/gallery-manifest.json";
import type { PublicGalleryImage } from "@/lib/public-gallery-image";

type ManifestItem =
  | string
  | {
      relPath?: string;
      filename: string;
      src?: string;
      category?: string;
    };

/** All photo files in `public/` (sorted and indexed across all subfolders). */
export function getPublicGalleryImages(): PublicGalleryImage[] {
  const items = galleryManifest as ManifestItem[];
  return items.map((item) => {
    if (typeof item === "string") {
      const clean = item.replace(/^\//, "");
      const relPath = clean.includes("/") ? clean : `images/${clean}`;
      const filename = relPath.split("/").pop() || relPath;
      const src = "/" + relPath.split("/").map((p) => encodeURIComponent(p)).join("/");
      return {
        filename,
        src,
        unoptimized: false,
        category: "Advocacy & Community",
        relPath,
      };
    }

    const filename = item.filename;
    const src =
      item.src ||
      (item.relPath
        ? "/" + item.relPath.split("/").map((p) => encodeURIComponent(p)).join("/")
        : `/images/${encodeURIComponent(filename)}`);

    return {
      filename,
      src,
      unoptimized: false,
      category: item.category || "Advocacy & Community",
      relPath: item.relPath,
    };
  });
}

/** Prefer a JPEG hero for broad browser support; fall back to first file. */
export function pickHeroGalleryImage(images: PublicGalleryImage[]): PublicGalleryImage | null {
  if (images.length === 0) return null;
  const jpg = images.find((i) => /\.jpe?g$/i.test(i.filename));
  return jpg ?? images[0];
}
