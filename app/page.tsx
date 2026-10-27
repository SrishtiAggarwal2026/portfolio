import { HomePage } from "@/components/home/HomePage";
import { siteMeta } from "@/data/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Home",
  description: siteMeta.description,
  pathname: "/",
  keywords: ["home", "advocacy clinic", "women empowerment"],
});

export default function Page() {
  return <HomePage />;
}
