import TimelinePage from "@/components/timeline/TimelinePage";
import { getPublicGalleryImages } from "@/lib/get-public-gallery-images";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Project Timeline",
  description: "From first volunteering to Voices Unheard performances and scale-up plans.",
  pathname: "/timeline",
  keywords: ["timeline", "Mahipalpur", "project history"],
});

export default function Page() {
  const galleryImages = getPublicGalleryImages();
  return <TimelinePage galleryImages={galleryImages} />;
}
