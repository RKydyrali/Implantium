import { Quotes, Star } from "@phosphor-icons/react";
import { useLanguage } from "@/hooks/useLanguage";
import { landingCopy } from "@/data/landing";
import { clinicContact, hasContactValue } from "@/data/clinicContact";

const reviewerNames = {
  ru: ["Айгерим Т.", "Ерлан К.", "Наталья С."],
  kk: ["Айгерім Т.", "Ерлан К.", "Наталья С."],
};

export function ReviewsSection() {
  const { language } = useLanguage();
  const t = landingCopy[language];

  return (
    <section id="reviews" className="bg-white px-4 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-[1320px]">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              {t.reviews.source}
            </span>
            <h2 className="font-display text-3xl font-normal text-[#1F2528] md:text-4xl">
              {language === "ru" ? "Отзывы пациентов" : "Пациент пікірлері"}
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-[#606A70]">{t.reviews.title}</p>
        </div>

        <div className="grid gap-5 md:grid-cols-[0.62fr_1fr_1fr_1fr]">
          <div className="clinical-card rounded-[1.5rem] p-6">
            <p className="font-display text-6xl font-normal leading-none text-[#1F2528]">{t.reviews.rating}</p>
            <div className="mt-4 flex gap-1 text-primary">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star key={idx} weight="fill" className="size-4" />
              ))}
            </div>
            <p className="mt-5 text-sm leading-relaxed text-[#606A70]">{t.reviews.basedOn}</p>
            <p className="mt-5 text-lg font-bold text-[#1F2528]">{t.reviews.source}</p>
          </div>

          {t.reviews.cards.map((review, idx) => (
            <article
              key={review}
              className="clinical-card-soft clinical-lift rounded-[1.5rem] p-6"
            >
              <Quotes weight="fill" className="mb-5 size-8 text-primary/80" />
              <p className="min-h-[8rem] text-sm font-medium leading-7 text-[#1F2528]/80">{review}</p>
              <p className="mt-5 text-sm font-bold text-[#1F2528]">{reviewerNames[language][idx]}</p>
            </article>
          ))}
        </div>

        {hasContactValue(clinicContact.twoGisUrl) && (
          <div className="mt-6">
            <a
              href={clinicContact.twoGisUrl}
              className="inline-flex h-12 items-center justify-center rounded-2xl border border-[#DDE3E7] bg-white px-6 text-sm font-bold text-[#1F2528] shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/35 hover:text-primary"
            >
              {t.reviews.title}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
