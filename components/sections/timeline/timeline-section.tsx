import { SECTION_IDS } from "@/lib/constants";
import { site } from "@/lib/content/site";
import { EditorialImage } from "@/components/shared/editorial-image";
import { FadeIn } from "@/components/shared/fade-in";
import { ImageStrip } from "@/components/shared/image-strip";
import { ParallaxMedia } from "@/components/shared/parallax-media";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { TimelineItem } from "@/components/shared/timeline-item";

export function TimelineSection() {
  return (
    <SectionWrapper id={SECTION_IDS.timeline} variant="wash" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100/50 via-transparent to-stone-200/40 dark:from-amber-950/30 dark:to-stone-900/50" />
      </div>
      <FadeIn>
        <SectionHeading
          eyebrow="The journey"
          title="From listening to lasting change"
          description="We move carefully — because trust is built in small, repeatable steps."
          size="display"
        />
      </FadeIn>

      <FadeIn delay={0.05} className="mb-12">
        <EditorialImage
          src="/mock1.jpg"
          alt="Journey in practice"
          aspectClassName="aspect-[18/7] md:aspect-[21/8]"
        />
      </FadeIn>

      <FadeIn delay={0.08} className="mb-14">
        <ImageStrip
          items={[
            { src: "/mock2.jpg", alt: "Listen" },
            { src: "/mock1.jpg", alt: "Translate" },
            { src: "/mock2.jpg", alt: "Amplify" },
          ]}
        />
      </FadeIn>

      <div className="mt-6 grid gap-14 lg:grid-cols-12 lg:items-start">
        <FadeIn className="lg:col-span-5">
          <ParallaxMedia
            src="/mock2.jpg"
            alt="Community timeline"
            className="shadow-2xl shadow-black/15"
            imageClassName="object-[center_55%]"
          />
          <div className="mt-6 rounded-xl border border-border/60 bg-card/80 p-6 text-sm leading-relaxed text-muted-foreground shadow-md backdrop-blur-sm">
            <p className="font-medium text-foreground">How to read this timeline</p>
            <p className="mt-2">
              Each phase is iterative, not linear. Communities may enter at different
              points — and we return to listening whenever new facts appear.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.08} className="lg:col-span-7">
          <div>
            {site.timeline.map((item, i) => (
              <TimelineItem
                key={item.phase}
                phase={item.phase}
                detail={item.detail}
                index={i}
                isLast={i === site.timeline.length - 1}
              />
            ))}
          </div>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
}
