import Image from "next/image";
import { SECTION_IDS } from "@/lib/constants";
import { site } from "@/lib/content/site";
import { EditorialImage } from "@/components/shared/editorial-image";
import { FadeIn } from "@/components/shared/fade-in";
import { ImageStrip } from "@/components/shared/image-strip";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { StatCard } from "@/components/shared/stat-card";

export function ImpactSection() {
  return (
    <SectionWrapper
      id={SECTION_IDS.impact}
      variant="muted"
      className="relative overflow-hidden !bg-transparent py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/mock1.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-25 blur-3xl saturate-[0.8]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/92 to-muted/80 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_60%_at_50%_0%,oklch(0.95_0.03_75/0.4),transparent_55%)]" />
      </div>

      <FadeIn>
        <SectionHeading
          eyebrow={site.impact.eyebrow}
          title={site.impact.heading}
          description={site.impact.narrative}
          size="display"
        />
      </FadeIn>

      <FadeIn delay={0.06} className="mb-14">
        <div className="grid gap-6 lg:grid-cols-2">
          <EditorialImage
            src="/mock2.jpg"
            alt="Impact in community"
            aspectClassName="aspect-[16/10] min-h-[200px]"
            priority
          />
          <EditorialImage
            src="/mock1.jpg"
            alt="Clinic and outreach"
            aspectClassName="aspect-[16/10] min-h-[200px]"
          />
        </div>
      </FadeIn>

      <FadeIn delay={0.1} className="mb-12">
        <ImageStrip
          items={[
            { src: "/mock1.jpg", alt: "Clinic" },
            { src: "/mock2.jpg", alt: "Community" },
            { src: "/mock1.jpg", alt: "Workshop" },
          ]}
        />
      </FadeIn>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {site.impact.stats.map((s, i) => (
          <FadeIn key={s.label} delay={i * 0.07}>
            <StatCard label={s.label} value={s.value} suffix={s.suffix} />
          </FadeIn>
        ))}
      </div>
    </SectionWrapper>
  );
}
