import InitiativePage from "@/components/initiative/InitiativePage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Initiative",
  description:
    "Rights to Reality Advocacy Clinic and Voices Unheard — welfare enrollment, ethical storytelling, and slam poetry.",
  pathname: "/initiative",
  keywords: ["welfare schemes", "PMMVY", "advocacy clinic", "ethical storytelling"],
});

export default function Page() {
  return <InitiativePage />;
}
