import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarCheck,
  Check,
  Clock,
  FirstAidKit,
  Heartbeat,
  Phone,
  ShieldCheck,
  Smiley,
  Sparkle,
  Tooth,
  WhatsappLogo,
  type IconProps,
} from "@phosphor-icons/react";
import type { ComponentType, ReactNode } from "react";
import type { Doctor, FAQItem, Language, ServiceData } from "@/types";
import { content } from "@/data/content";
import { clinicContact, hasContactValue } from "@/data/clinicContact";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DoctorPhoto } from "@/components/common/DoctorPhoto";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BookingModal } from "@/components/sections/BookingModal";

const IconMap: Record<string, ComponentType<IconProps>> = {
  CalendarCheck,
  Check,
  Clock,
  FirstAidKit,
  Heartbeat,
  ShieldCheck,
  Smiley,
  Sparkle,
  Tooth,
};

const detailCopy = {
  ru: {
    home: "Главная",
    service: "Услуги",
    suitableTitle: "Кому подходит услуга",
    processTitle: "Как проходит лечение",
    advantagesTitle: "Преимущества",
    doctorsTitle: "Наши специалисты",
    allDoctors: "Смотреть всех врачей",
    faqTitle: "Частые вопросы",
    beforeAfterTitle: "До и после",
    moreCases: "Смотреть больше",
    learnMore: "Узнать больше",
    phoneCaption: "Позвоните нам",
    whatsappCaption: "Ответим быстро",
    phonePending: "Телефон скоро появится",
    whatsappPending: "WhatsApp скоро появится",
    readyTitle: "Готовы восстановить уверенность в своей улыбке?",
    readyText: "Запишитесь на бесплатную консультацию и получите персональный план лечения.",
    consultationNote: "Только консультация бесплатная, 3D рентген платный",
    naturalResultTitle: "Естественный результат",
    naturalResultText: "Прогнозируемый и безопасный результат на долгие годы.",
    fallbackFaq: [
      {
        question: "Больно ли проходит процедура?",
        answer: "Процедура проводится с комфортным обезболиванием по показаниям, врач заранее объясняет каждый этап.",
      },
      {
        question: "Сколько длится лечение?",
        answer: "Срок зависит от услуги и клинической ситуации. Ориентир врач назовет после диагностики.",
      },
      {
        question: "Есть ли противопоказания?",
        answer: "Да, они оцениваются индивидуально на консультации с учетом состояния здоровья и снимков.",
      },
    ],
  },
  kk: {
    home: "Басты бет",
    service: "Қызметтер",
    suitableTitle: "Қызмет кімге арналған",
    processTitle: "Ем қалай өтеді",
    advantagesTitle: "Артықшылықтары",
    doctorsTitle: "Біздің мамандар",
    allDoctors: "Барлық дәрігерлерді көру",
    faqTitle: "Жиі қойылатын сұрақтар",
    beforeAfterTitle: "Дейін және кейін",
    moreCases: "Көбірек көру",
    learnMore: "Толығырақ",
    phoneCaption: "Бізге қоңырау шалыңыз",
    whatsappCaption: "Тез жауап береміз",
    phonePending: "Телефон кейін қосылады",
    whatsappPending: "WhatsApp кейін қосылады",
    readyTitle: "Күлкіңізге сенімділікті қайтаруға дайынсыз ба?",
    readyText: "Тегін консультацияға жазылып, жеке ем жоспарын алыңыз.",
    consultationNote: "Тек кеңес алу тегін, 3D рентген ақылы",
    naturalResultTitle: "Табиғи нәтиже",
    naturalResultText: "Ұзақ жылдарға болжамды әрі қауіпсіз нәтиже.",
    fallbackFaq: [
      {
        question: "Процедура ауырта ма?",
        answer: "Көрсетілім бойынша жайлы жансыздандыру жасалады, дәрігер әр кезеңді алдын ала түсіндіреді.",
      },
      {
        question: "Ем қанша уақыт алады?",
        answer: "Мерзім қызмет түрі мен клиникалық жағдайға байланысты. Нақты бағдар диагностикадан кейін айтылады.",
      },
      {
        question: "Қарсы көрсетілімдер бар ма?",
        answer: "Иә, олар консультацияда денсаулық жағдайы мен суреттерге қарап жеке бағаланады.",
      },
    ],
  },
};

type ServiceDetailTemplateProps = {
  service: ServiceData;
  doctors: Doctor[];
  language: Language;
};

export function ServiceDetailTemplate({ service, doctors, language }: ServiceDetailTemplateProps) {
  const t = content[language];
  const copy = detailCopy[language];
  const serviceFaq = getFaqItems(service, language);
  const hasPhone = hasContactValue(clinicContact.phoneHref);
  const hasWhatsapp = hasContactValue(clinicContact.whatsappUrl);

  return (
    <main className="flex-1 overflow-hidden bg-[#fdfaf7]">
      <section className="relative isolate overflow-hidden border-b border-border/70 bg-[#f6f9fb] px-4 pt-24 pb-10 md:px-8 md:pt-32 md:pb-16 lg:min-h-[720px]">
        <div className="absolute inset-0 z-0">
          <img
            src={service.heroImage}
            alt=""
            aria-hidden="true"
            className="size-full object-cover object-[66%_center] opacity-55 md:object-[72%_center] md:opacity-100"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#f8fbfd_0%,#f8fbfd_32%,rgba(248,251,253,0.92)_48%,rgba(248,251,253,0.54)_66%,rgba(248,251,253,0.12)_84%,rgba(248,251,253,0)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.82)_0%,rgba(255,255,255,0.42)_46%,#f6f9fb_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(164,58,40,0.08),transparent_32%)]" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1360px]">
          <nav className="mb-8 flex flex-wrap items-center gap-2 text-xs font-medium text-muted-foreground md:mb-10">
            <Link to="/" className="transition-colors hover:text-primary">
              {copy.home}
            </Link>
            <span>/</span>
            <a href="/#services" className="transition-colors hover:text-primary">
              {copy.service}
            </a>
            <span>/</span>
            <span className="text-foreground/70">{service.title[language]}</span>
          </nav>

          <div className="grid min-h-[520px] items-center gap-10 lg:grid-cols-[0.56fr_0.44fr] lg:gap-16">
            <div className="max-w-3xl py-2 md:py-6">
              <h1 className="font-display max-w-[10ch] text-5xl font-normal leading-[0.95] text-[#23201f] sm:text-6xl lg:text-7xl">
                {service.title[language]}
                <span className="mt-1 block text-primary">{service.heroAccent[language]}</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                {service.shortDescription[language]} {service.explanation[language]}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {service.heroHighlights.map((item) => (
                  <MiniFeature key={item.title.ru} item={item} language={language} />
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
                <BookingModal>
                  <Button size="lg" className="h-12 shrink-0 rounded-full bg-primary px-5 text-sm font-bold text-white shadow-[0_18px_38px_rgba(164,58,40,0.22)] transition-all hover:-translate-y-0.5 hover:bg-primary/90 active:translate-y-[1px] sm:h-14 sm:px-8">
                    {t.common.bookConsultation}
                    <ArrowRight weight="bold" className="size-4 ml-2" />
                  </Button>
                </BookingModal>
                <Button asChild variant="outline" size="lg" className="h-12 shrink-0 rounded-full border-primary/15 bg-white px-5 text-sm font-bold text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:bg-secondary active:translate-y-[1px] sm:h-14 sm:px-8">
                  <a href="#service-process">
                    {copy.learnMore}
                    <ArrowRight weight="fill" className="size-4 text-primary" />
                  </a>
                </Button>
              </div>

              <p className="mt-6 inline-flex items-center gap-2 text-xs font-medium text-muted-foreground">
                <ShieldCheck weight="fill" className="size-4 text-primary" />
                {copy.consultationNote}
              </p>
            </div>

            <div aria-hidden="true" className="hidden lg:block" />
          </div>
        </div>
      </section>

      <section id="service-process" className="bg-white px-4 py-10 md:px-8 md:py-14">
        <div className="mx-auto grid max-w-[1360px] gap-10 lg:grid-cols-[0.62fr_1.38fr] lg:gap-12">
          <div>
            <h2 className="font-display text-3xl font-normal text-foreground md:text-4xl">{copy.suitableTitle}</h2>
            <div className="mt-6 grid gap-4">
              {service.suitableFor[language].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full border border-primary/15 bg-[#fff8f3] text-primary">
                    <Check weight="bold" className="size-3.5" />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-border/70 pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12">
            <h2 className="font-display text-3xl font-normal text-foreground md:text-4xl">{copy.processTitle}</h2>
            <div className="mt-7 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {service.processDetails.map((step, index) => (
                <ProcessStep key={step.title.ru} step={step} index={index} language={language} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-8 md:px-8 md:py-12">
        <div className="mx-auto max-w-[1360px] border-t border-border/70 pt-10">
          <h2 className="font-display text-3xl font-normal text-foreground md:text-4xl">{copy.advantagesTitle}</h2>
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {service.advantages.map((item) => (
              <AdvantageCard key={item.title.ru} item={item} language={language} />
            ))}
          </div>
        </div>
      </section>

      {doctors.length > 0 && (
        <section className="bg-white px-4 py-8 md:px-8 md:py-12">
          <div className="mx-auto max-w-[1360px]">
            <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="font-display text-3xl font-normal text-foreground md:text-4xl">{copy.doctorsTitle}</h2>
              <a href="/doctors" className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80">
                {copy.allDoctors}
                <ArrowRight weight="bold" className="size-4" />
              </a>
            </div>
            <div className="grid gap-5 lg:grid-cols-3">
              {doctors.slice(0, 3).map((doctor) => (
                <Card key={doctor.id} className="overflow-hidden rounded-[1.2rem] border-border/70 bg-white shadow-[0_16px_42px_rgba(68,45,34,0.06)]">
                  <div className="grid min-h-[9.5rem] grid-cols-[9rem_1fr] items-stretch">
                    <div className="overflow-hidden bg-secondary">
                      <DoctorPhoto doctor={doctor} language={language} className="object-cover" />
                    </div>
                    <div className="flex min-w-0 flex-col justify-center p-5">
                      <h3 className="text-base font-bold leading-snug text-foreground">{doctor.name[language]}</h3>
                      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{doctor.specialty[language]}</p>
                      <p className="mt-4 text-sm font-medium text-muted-foreground">{doctor.description[language].split(".")[0]}.</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-white px-4 py-8 md:px-8 md:py-14">
        <div className="mx-auto grid max-w-[1360px] gap-10 border-t border-border/70 pt-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="font-display mb-6 text-3xl font-normal text-foreground md:text-4xl">{copy.faqTitle}</h2>
            <Accordion type="single" collapsible className="grid gap-3">
              {serviceFaq.map((faqItem, index) => (
                <AccordionItem key={`${faqItem.question.ru}-${index}`} value={`faq-${index}`} className="rounded-xl border border-border/70 bg-white px-4 shadow-sm">
                  <AccordionTrigger className="text-left text-sm font-semibold text-foreground hover:text-primary hover:no-underline">
                    {faqItem.question[language]}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {faqItem.answer[language]}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div>
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="font-display text-3xl font-normal text-foreground md:text-4xl">{copy.beforeAfterTitle}</h2>
              <a href="/#reviews" className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80">
                {copy.moreCases}
                <ArrowRight weight="bold" className="size-4" />
              </a>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {(service.beforeAfterCases ?? []).map((caseItem) => (
                <Card key={caseItem.title.ru} className="overflow-hidden rounded-[1.2rem] border-border/70 bg-white p-3 shadow-[0_16px_42px_rgba(68,45,34,0.06)]">
                  <div className="grid gap-1 overflow-hidden rounded-xl sm:grid-cols-2">
                    <ResultImage src={caseItem.beforeImage} alt={copy.beforeAfterTitle} label={language === "ru" ? "До" : "Дейін"} />
                    <ResultImage src={caseItem.afterImage} alt={caseItem.title[language]} label={language === "ru" ? "После" : "Кейін"} />
                  </div>
                  <p className="mt-4 text-center text-sm font-medium text-muted-foreground">{caseItem.title[language]}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 pb-12 md:px-8 md:pb-16">
        <div className="mx-auto max-w-[1360px]">
          <div className="grid gap-5 rounded-[1.7rem] border border-primary/10 bg-[linear-gradient(135deg,#fff8f3,#fffdfb)] p-5 shadow-[0_18px_55px_rgba(68,45,34,0.08)] md:p-7 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="flex items-center gap-5">
              <span className="hidden size-20 shrink-0 items-center justify-center rounded-full border border-primary/10 bg-white text-primary shadow-sm sm:flex">
                <Phone weight="fill" className="size-8" />
              </span>
              <div>
                <h2 className="font-display text-2xl font-normal leading-tight text-foreground md:text-3xl">{copy.readyTitle}</h2>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">{copy.readyText}</p>
              </div>
            </div>

            <div className="grid gap-3 lg:grid-cols-[auto_auto_auto] lg:items-center">
              <ContactPill
                icon={<Phone weight="fill" className="size-5" />}
                href={clinicContact.phoneHref}
                title={clinicContact.phoneDisplay ?? copy.phonePending}
                caption={copy.phoneCaption}
                disabled={!hasPhone}
              />
              <ContactPill
                icon={<WhatsappLogo weight="fill" className="size-5" />}
                href={clinicContact.whatsappUrl}
                title={hasWhatsapp ? "WhatsApp" : copy.whatsappPending}
                caption={copy.whatsappCaption}
                disabled={!hasWhatsapp}
              />
              <BookingModal>
                <Button size="lg" className="h-14 rounded-full bg-primary px-7 text-sm font-bold text-white shadow-[0_18px_38px_rgba(164,58,40,0.22)] transition-all hover:-translate-y-0.5 hover:bg-primary/90 active:translate-y-[1px]">
                  {t.common.bookConsultation}
                  <ArrowRight weight="bold" className="size-4 ml-2" />
                </Button>
              </BookingModal>
            </div>
          </div>
          <p className="mt-4 flex items-center justify-center gap-2 text-xs font-medium text-muted-foreground">
            <ShieldCheck weight="fill" className="size-4 text-primary" />
            {copy.consultationNote}
          </p>
        </div>
      </section>
    </main>
  );
}

function MiniFeature({ item, language }: { item: ServiceData["heroHighlights"][number]; language: Language }) {
  const Icon = IconMap[item.iconName] ?? Tooth;

  return (
    <div className="flex items-center gap-3">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-2xl border border-primary/10 bg-white text-primary shadow-sm">
        <Icon weight="duotone" className="size-5" />
      </span>
      <div>
        <h3 className="text-sm font-bold leading-snug text-foreground">{item.title[language]}</h3>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.text[language]}</p>
      </div>
    </div>
  );
}

function ProcessStep({ step, index, language }: { step: ServiceData["processDetails"][number]; index: number; language: Language }) {
  const Icon = IconMap[step.iconName] ?? Tooth;

  return (
    <div className="relative text-center">
      <div className="mx-auto flex size-20 items-center justify-center rounded-full border border-primary/15 bg-white text-primary shadow-sm">
        <Icon weight="duotone" className="size-9" />
      </div>
      <p className="mt-5 text-sm font-bold text-foreground">
        {index + 1}. {step.title[language]}
      </p>
      <p className="mx-auto mt-2 max-w-[14rem] text-xs leading-relaxed text-muted-foreground">{step.text[language]}</p>
    </div>
  );
}

function AdvantageCard({ item, language }: { item: ServiceData["advantages"][number]; language: Language }) {
  const Icon = IconMap[item.iconName] ?? ShieldCheck;

  return (
    <div>
      <Card className="h-full rounded-[1.15rem] border-border/70 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_18px_45px_rgba(164,58,40,0.08)]">
        <span className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-[#fff8f3] text-primary">
          <Icon weight="duotone" className="size-7" />
        </span>
        <h3 className="mt-5 text-sm font-bold leading-snug text-foreground">{item.title[language]}</h3>
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{item.text[language]}</p>
      </Card>
    </div>
  );
}

function ResultImage({ src, alt, label }: { src: string; alt: string; label: string }) {
  return (
    <div className="relative min-h-[8.5rem] overflow-hidden bg-secondary">
      <img src={src} alt={alt} className="size-full object-cover" loading="eager" decoding="async" />
      <span className="absolute left-3 top-3 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-primary shadow-sm backdrop-blur">
        {label}
      </span>
    </div>
  );
}

function ContactPill({
  icon,
  href,
  title,
  caption,
  disabled,
}: {
  icon: ReactNode;
  href?: string;
  title: string;
  caption: string;
  disabled: boolean;
}) {
  const contentNode = (
    <>
      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white text-primary shadow-sm">{icon}</span>
      <span className="min-w-0">
        <span className="block truncate text-sm font-bold text-foreground">{title}</span>
        <span className="block truncate text-xs font-medium text-muted-foreground">{caption}</span>
      </span>
    </>
  );

  if (!disabled && href) {
    return (
      <a href={href} className="flex h-14 items-center gap-3 rounded-full border border-border/70 bg-white px-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/20 active:translate-y-[1px]">
        {contentNode}
      </a>
    );
  }

  return (
    <button type="button" disabled className="flex h-14 cursor-not-allowed items-center gap-3 rounded-full border border-border/70 bg-white/75 px-4 opacity-80 shadow-sm">
      {contentNode}
    </button>
  );
}

function getFaqItems(service: ServiceData, language: Language): FAQItem[] {
  if (service.faq.length > 0) {
    return service.faq;
  }

  return detailCopy[language].fallbackFaq.map((item) => ({
    question: {
      ru: language === "ru" ? item.question : detailCopy.ru.fallbackFaq[0].question,
      kk: language === "kk" ? item.question : detailCopy.kk.fallbackFaq[0].question,
    },
    answer: {
      ru: language === "ru" ? item.answer : detailCopy.ru.fallbackFaq[0].answer,
      kk: language === "kk" ? item.answer : detailCopy.kk.fallbackFaq[0].answer,
    },
  }));
}
