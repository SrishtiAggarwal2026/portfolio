/** App route paths — use for Link href and metadata */
export const ROUTES = {
  home: "/",
  about: "/about",
  problem: "/problem",
  solution: "/solution",
  timeline: "/timeline",
  impact: "/impact",
  future: "/future",
  gallery: "/gallery",
  poetry: "/poetry",
} as const;

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES];
