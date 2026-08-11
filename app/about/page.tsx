import AboutPage from "@/components/about/AboutPage";
import { getPublicGalleryImages } from "@/lib/get-public-gallery-images";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About Our Founder",
  description:
    "Srishti Aggarwal — founder of Voices Unheard and the Rights to Reality Advocacy Clinic, in partnership with Hamari Pahchan NGO.",
  pathname: "/about",
  keywords: ["Srishti Aggarwal", "founder", "The British School New Delhi"],
});

export default function Page() {
  const galleryImages = getPublicGalleryImages();
  return <AboutPage galleryImages={galleryImages} />;
}
