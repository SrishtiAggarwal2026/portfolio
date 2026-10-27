import VoicesPage from "@/components/voices/VoicesPage";
import { getPublicGalleryImages } from "@/lib/get-public-gallery-images";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Voices Unheard",
  description: "Where stories become stanzas — slam poetry as advocacy.",
  pathname: "/voices",
  keywords: ["slam poetry", "literary festivals", "storytelling", "performances"],
});

export default function Page() {
  const galleryImages = getPublicGalleryImages();
  return <VoicesPage galleryImages={galleryImages} />;
}
