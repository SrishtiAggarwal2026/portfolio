import ImpactPage from "@/components/impact/ImpactPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Impact & Outcomes",
  description: "Measuring what matters — communities, students, and broader societal impact.",
  pathname: "/impact",
  keywords: ["impact", "SDG 10", "outcomes", "community impact"],
});

export default function Page() {
  return <ImpactPage />;
}
