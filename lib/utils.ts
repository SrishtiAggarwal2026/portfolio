import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { about } from "@/data/site"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getGalleryImageCaption(filename: string, index: number): string {
  const name = filename.toLowerCase();
  if (name.includes("2026_work_1")) return "Noida Sector 8 Anganwadi clinic session";
  if (name.includes("2026_work_2")) return "Community outreach and legal awareness program";
  if (name.includes("2026_work_3")) return "One-on-one documentation support with a beneficiary";
  if (name.includes("2026_work_4")) return "Distributing welfare scheme information brochures";
  if (name.includes("2026_work_5")) return "Story documentation session with community members";
  if (name.includes("2026_work_6")) return "Advocacy session with mothers at Noida Anganwadi";
  return about.galleryCaptions[index % about.galleryCaptions.length];
}
