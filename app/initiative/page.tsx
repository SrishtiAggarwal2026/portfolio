import InitiativePage from "@/components/initiative/InitiativePage";
import { getPublicGalleryImages } from "@/lib/get-public-gallery-images";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "The Initiative",
  description:
    "Rights to Reality Advocacy Clinic and Voices Unheard — welfare enrollment, ethical storytelling, and slam poetry.",
  pathname: "/initiative",
  keywords: ["welfare schemes", "PMMVY", "advocacy clinic", "ethical storytelling"],
});

export default function Page() {
  const galleryImages = getPublicGalleryImages();
  const clinicPhoto = galleryImages.length > 6 ? galleryImages[6] : galleryImages[0];
  return <InitiativePage clinicPhoto={clinicPhoto} />;
}
