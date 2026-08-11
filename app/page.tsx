import { HomePage } from "@/components/home/HomePage";
import { siteMeta } from "@/data/site";
import { getPublicGalleryImages, pickHeroGalleryImage } from "@/lib/get-public-gallery-images";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Home",
  description: siteMeta.description,
  pathname: "/",
  keywords: ["home", "advocacy clinic", "women empowerment"],
});

export default function Page() {
  const heroImage = pickHeroGalleryImage(getPublicGalleryImages());
  return <HomePage heroImage={heroImage} />;
}
