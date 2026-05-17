import { ArrowRight, Quotes, Star } from "@phosphor-icons/react";
import { useLanguage } from "@/hooks/useLanguage";
import { landingCopy } from "@/data/landing";
import { clinicContact, hasContactValue } from "@/data/clinicContact";
import { patientReviews, type PatientReview } from "@/data/reviews";
import { cn } from "@/lib/utils";
import { DentalParallaxBackground } from "@/components/decor/DentalParallaxBackground";

type ReviewsSectionProps = {
  id?: string;
  title?: string;
  variant?: "home" | "doctors";
};

const repeatedReviews = [...patientReviews, ...patientReviews];

export function ReviewsSection({ id, title, variant = "home" }: ReviewsSectionProps) {
  const { language } = useLanguage();
  const copy = landingCopy[language].reviews;
  const isDoctorsVariant = variant === "doctors";
  const sectionId = id ?? (isDoctorsVariant ? undefined : "reviews");

  return (
    <section
      id={sectionId}
      className={cn(
        "relative isolate overflow-hidden px-4 md:px-8",
        isDoctorsVariant ? "bg-[#F4F8FB] py-12 md:py-16" : "bg-white py-14 md:py-20"
      )}
    >
      <DentalParallaxBackground surface={isDoctorsVariant ? "doctors-reviews" : "home-reviews"} />
      <div className="relative z-10 mx-auto max-w-[1320px]">
        <div className="grid gap-7 lg:grid-cols-[0.34fr_0.66fr] lg:items-start">
          <div className="lg:pr-4">
            <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              {copy.source}
            </span>
            <h2 className={cn("font-display font-normal text-[#1F2528]", isDoctorsVariant ? "text-3xl md:text-4xl" : "text-3xl md:text-5xl")}>
              {title ?? (language === "ru" ? "Отзывы пациентов" : "Пациент пікірлері")}
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[#606A70] md:text-base md:leading-8">
              {copy.title}
            </p>

            <div className="clinical-card mt-6 rounded-[1.6rem] p-5 md:p-6">
              <div className="flex flex-wrap items-center gap-5">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-5xl font-medium text-[#1F2528] tracking-tight">{copy.rating.replace('+', '')}</span>
                  <span className="text-xl font-medium text-[#606A70]">/ 5</span>
                </div>
                <div className="hidden h-10 w-px bg-border/80 sm:block"></div>
                <div>
                  <div className="flex gap-1 text-primary" aria-label={copy.starsLabel}>
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star key={idx} weight="fill" className="size-5" />
                    ))}
                  </div>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.1em] text-primary">
                    {copy.selectedLabel}
                  </p>
                </div>
              </div>
              {hasContactValue(clinicContact.twoGisUrl) && (
                <a
                  href={clinicContact.twoGisUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#1F2528] transition-colors hover:text-primary"
                >
                  {copy.viewAll}
                  <ArrowRight weight="bold" className="size-4" />
                </a>
              )}
            </div>
          </div>

          <div className="min-w-0">
            <ReviewsMarquee sourceLabel={copy.openSource} />
          </div>
        </div>

        {!isDoctorsVariant && hasContactValue(clinicContact.twoGisUrl) && (
          <div className="mt-7 flex justify-center lg:justify-end">
            <a
              href={clinicContact.twoGisUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-[#DDE3E7] bg-white px-6 py-3 text-sm font-bold text-[#1F2528] shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/35 hover:text-primary active:translate-y-[1px]"
            >
              {copy.viewAll}
              <ArrowRight weight="bold" className="size-4" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

function ReviewsMarquee({ sourceLabel }: { sourceLabel: string }) {
  const { language } = useLanguage();

  return (
    <div className="reviews-marquee pt-6 pb-8 -mt-6" aria-label={language === "ru" ? "Реальные отзывы пациентов" : "Пациенттердің нақты пікірлері"}>
      <div className="reviews-marquee-track items-start gap-4 md:gap-5">
        {repeatedReviews.map((review, index) => {
          const isDuplicate = index >= patientReviews.length;

          return (
            <ReviewCard
              key={`${review.id}-${index}`}
              review={review}
              sourceLabel={sourceLabel}
              isDuplicate={isDuplicate}
            />
          );
        })}
      </div>
    </div>
  );
}

function ReviewCard({
  review,
  sourceLabel,
  isDuplicate,
}: {
  review: PatientReview;
  sourceLabel: string;
  isDuplicate: boolean;
}) {
  const { language } = useLanguage();
  const initials = review.author
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <article
      aria-hidden={isDuplicate}
      className={cn(
        "clinical-card-soft clinical-lift flex w-[min(82vw,23rem)] shrink-0 flex-col rounded-[1.6rem] p-5 md:w-[25rem] md:p-6",
        isDuplicate && "reviews-marquee-duplicate"
      )}
    >
      <div className="mb-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl border border-[#DDE3E7] bg-white text-sm font-bold text-primary shadow-sm">
            {initials}
          </span>
          <span>
            <span className="block text-sm font-bold leading-tight text-[#1F2528]">{review.author}</span>
            <span className="mt-1 flex gap-0.5 text-primary">
              {Array.from({ length: review.rating }).map((_, idx) => (
                <Star key={idx} weight="fill" className="size-3.5" />
              ))}
            </span>
          </span>
        </div>
        <Quotes weight="fill" className="size-7 shrink-0 text-primary/75" />
      </div>

      <p className="text-sm font-medium leading-6 text-[#1F2528]/80">
        {review.text[language]}
      </p>

      <a
        href={review.sourceUrl}
        target="_blank"
        rel="noreferrer"
        tabIndex={isDuplicate ? -1 : undefined}
        className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-[#DDE3E7] bg-white px-4 py-2 text-xs font-bold text-[#1F2528] shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/35 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/25 active:translate-y-[1px]"
      >
        {sourceLabel}
        <ArrowRight weight="bold" className="size-3.5" />
      </a>
    </article>
  );
}
