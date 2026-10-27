import InitiativePage from "@/components/initiative/InitiativePage";
import { getPublicGalleryImages } from "@/lib/get-public-gallery-images";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Initiative",
  description:
    "Rights to Reality Advocacy Clinic and Voices Unheard — welfare enrollment, ethical storytelling, and slam poetry.",
  pathname: "/initiative",
  keywords: ["welfare schemes", "PMMVY", "advocacy clinic", "ethical storytelling"],
});

export default function Page() {
  const galleryImages = getPublicGalleryImages();
  const clinicPhoto =
    galleryImages.find((img) => img.src === "/Pillars%20Of%20Change/Advocacy%20Clinics/1%20Right%20Of%20Reality%20.jpeg") ||
    galleryImages.find((img) => img.filename === "1 Right Of Reality .jpeg") ||
    galleryImages.find((img) => img.filename === "58.jpeg") ||
    galleryImages.find((img) => img.filename === "2026_work_2.jpeg") || {
      filename: "1 Right Of Reality .jpeg",
      src: "/Pillars%20Of%20Change/Advocacy%20Clinics/1%20Right%20Of%20Reality%20.jpeg",
      category: "Advocacy Clinic",
      unoptimized: false,
    };
  return <InitiativePage clinicPhoto={clinicPhoto} />;
}
