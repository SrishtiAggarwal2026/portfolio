import { Suspense } from "react";
import ContactPage from "@/components/contact/ContactPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Get Involved",
  description: "Volunteer, partner, or share your story — contact Voices Unheard.",
  pathname: "/contact",
  keywords: ["volunteer", "partner", "contact", "get involved"],
});

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-xl px-4 py-24 text-center text-sm text-muted-foreground sm:px-6">
          Loading…
        </div>
      }
    >
      <ContactPage />
    </Suspense>
  );
}
