import { readdirSync } from "fs";
import { join } from "path";
import type { PublicGalleryImage } from "@/lib/public-gallery-image";

const IMAGE_FILE_RE = /\.(jpe?g|png|webp|gif)$/i;

function encodePathSegment(name: string): string {
  return name
    .split("/")
    .map((part) => encodeURIComponent(part))
    .join("/");
}

/** All photo files in `public/images` (sorted). Returns [] if the folder is missing. */
export function getPublicGalleryImages(): PublicGalleryImage[] {
  const dir = join(process.cwd(), "public", "images");
  let files: string[];
  try {
    files = readdirSync(dir);
  } catch {
    return [];
  }

  return files
    .filter((f) => IMAGE_FILE_RE.test(f))
    .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base", numeric: true }))
    .map((filename) => ({
      filename,
      src: `/images/${encodePathSegment(filename)}`,
      unoptimized: false,
    }));
}

/** Prefer a JPEG hero for broad browser support; fall back to first file. */
export function pickHeroGalleryImage(images: PublicGalleryImage[]): PublicGalleryImage | null {
  if (images.length === 0) return null;
  const jpg = images.find((i) => /\.jpe?g$/i.test(i.filename));
  return jpg ?? images[0];
}
