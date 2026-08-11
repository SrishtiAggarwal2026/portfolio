import { SECTION_IDS } from "@/lib/constants";
import { site } from "@/lib/content/site";
import { EditorialImage } from "@/components/shared/editorial-image";
import { FeatureCard } from "@/components/shared/feature-card";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionWrapper } from "@/components/shared/section-wrapper";

export function ProblemSection() {
  return (
    <SectionWrapper id={SECTION_IDS.problem} variant="paper" className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_100%_0%,oklch(0.92_0.04_75/0.25),transparent_50%)]" />
      <FadeIn>
        <SectionHeading
          eyebrow="The gap"
          title="The quiet cost of unread rights"
          description="These are not abstract failures — they are daily experiences that shape who gets heard, who gets help, and who disappears from the record."
          size="display"
        />
      </FadeIn>

      <FadeIn delay={0.06} className="mb-12">
        <EditorialImage
          src="/mock2.jpg"
          alt="Community context"
          aspectClassName="aspect-[16/7] md:aspect-[21/8]"
          priority
        />
      </FadeIn>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {site.problems.map((p, i) => (
          <FadeIn key={p.title} delay={i * 0.08}>
            <FeatureCard
              title={p.title}
              description={p.description}
              imageSrc={p.image}
              imageAlt=""
            />
          </FadeIn>
        ))}
      </div>
    </SectionWrapper>
  );
}
