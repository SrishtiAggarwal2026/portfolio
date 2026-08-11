import { ROUTES } from "@/lib/routes";

export const SECTION_IDS = {
  hero: "hero",
  hook: "hook",
  about: "about",
  problem: "problem",
  solution: "solution",
  timeline: "timeline",
  impact: "impact",
  future: "future",
  gallery: "gallery",
  poetry: "poetry",
} as const;

export type SectionId = (typeof SECTION_IDS)[keyof typeof SECTION_IDS];

export const NAV_LINKS: { href: string; label: string }[] = [
  { href: ROUTES.about, label: "About" },
  { href: ROUTES.problem, label: "The gap" },
  { href: ROUTES.solution, label: "What we do" },
  { href: ROUTES.timeline, label: "Journey" },
  { href: ROUTES.impact, label: "Impact" },
  { href: ROUTES.future, label: "Vision" },
  { href: ROUTES.gallery, label: "Gallery" },
  { href: ROUTES.poetry, label: "Voices" },
];
