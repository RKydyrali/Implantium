import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  FirstAidKit,
  Heartbeat,
  ShieldCheck,
  Smiley,
  Sparkle,
  Tooth,
  type IconProps,
} from "@phosphor-icons/react";
import type { ComponentType } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { landingCopy, landingServices } from "@/data/landing";
import { doctors } from "@/data/doctors";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DoctorPhoto } from "@/components/common/DoctorPhoto";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookingModal } from "@/components/sections/BookingModal";

const IconMap: Record<string, ComponentType<IconProps>> = {
  Tooth,
  ShieldCheck,
  Smiley,
  FirstAidKit,
  Sparkle,
  Heartbeat,
};

export function ServicesPreview() {
  const { language } = useLanguage();
  const t = landingCopy[language];
  const [activeId, setActiveId] = useState(landingServices[0].id);
  const activeService = useMemo(
    () => landingServices.find((service) => service.id === activeId) ?? landingServices[0],
    [activeId]
  );
  const serviceDoctors = useMemo(
    () => doctors.filter((doctor) => doctor.serviceIds.includes(activeService.serviceId)).slice(0, 2),
    [activeService.serviceId]
  );
  const ActiveIcon = IconMap[activeService.iconName] ?? Tooth;

  return (
    <section id="services" className="clinical-section px-4 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-[1320px]">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>

            <h2 className="font-display text-3xl font-normal text-[#1F2528] md:text-4xl">
              {t.services.title}
            </h2>
          </div>
          <a
            href="/#booking"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#606A70] transition-colors hover:text-primary"
          >
            {t.services.allServices}
            <ArrowRight className="size-4" />
          </a>
        </div>

        <Tabs value={activeId} onValueChange={setActiveId} className="w-full">
          <div className="-mx-4 overflow-x-auto px-4 pb-5 md:mx-0 md:px-0">
            <TabsList className="flex h-auto min-w-max justify-start gap-3 rounded-none bg-transparent p-0 md:grid md:min-w-0 md:grid-cols-3 lg:grid-cols-6">
              {landingServices.map((service) => {
                const Icon = IconMap[service.iconName] ?? Tooth;
                return (
                  <TabsTrigger
                    key={service.id}
                    value={service.id}
                    className="group flex h-24 min-w-[9.5rem] flex-col gap-2 rounded-2xl border border-[#DDE3E7] bg-white px-4 py-4 text-[#606A70] shadow-[0_12px_34px_rgba(31,37,40,0.04)] transition-all hover:-translate-y-0.5 hover:border-[#C8D3D9] data-[state=active]:border-primary/45 data-[state=active]:bg-[#F4E7E4]/55 data-[state=active]:text-[#1F2528] data-[state=active]:shadow-[0_18px_44px_rgba(166,58,45,0.08)] md:min-w-0"
                  >
                    <Icon weight="duotone" className="size-8 text-[#6E7B83] transition-colors group-data-[state=active]:text-primary" />
                    <span className="text-sm font-bold leading-tight">{service.shortTitle[language]}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </div>
        </Tabs>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="clinical-card grid gap-8 rounded-[2rem] p-5 md:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-9"
          >
            <div className="flex flex-col gap-7">
              <div>
                <Badge
                  variant="secondary"
                  className="mb-4 rounded-full border border-primary/15 bg-[#F4E7E4]/60 px-4 py-1.5 text-primary hover:bg-[#F4E7E4]/60"
                >
                  {activeService.shortTitle[language]}
                </Badge>
                <h3 className="font-display mb-4 text-4xl font-normal leading-tight text-[#1F2528] md:text-5xl">
                  {activeService.title[language]}
                </h3>
                <p className="max-w-xl text-base leading-8 text-[#606A70]">
                  {activeService.summary[language]}
                </p>
              </div>

              <div className="grid gap-3">
                {activeService.bullets[language].map((bullet) => (
                  <div key={bullet} className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border border-[#DDE3E7] bg-[#FAFBFC] text-primary">
                      <CheckCircle weight="fill" className="size-4" />
                    </span>
                    <span className="text-sm font-semibold leading-relaxed text-[#1F2528]/80">{bullet}</span>
                  </div>
                ))}
              </div>

              <div className="rounded-[1.4rem] border border-[#DDE3E7] bg-[#FAFBFC] p-4 md:p-5">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-white text-primary shadow-[0_12px_30px_rgba(31,37,40,0.05)]">
                    <ActiveIcon weight="duotone" className="size-6" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
                      {t.services.pricesTitle}
                    </p>
                    <p className="mt-1 text-xs text-[#8A949B]">{t.services.consultationNote}</p>
                  </div>
                </div>

                <div className="divide-y divide-[#DDE3E7]">
                  {activeService.prices.map((price) => (
                    <div key={`${price.label.ru}-${price.value.ru}`} className="grid gap-2 py-3 sm:grid-cols-[1fr_auto] sm:items-center">
                      <span className="text-sm font-medium leading-snug text-[#606A70]">
                        {price.label[language]}
                      </span>
                      <span className="text-left text-base font-bold text-[#1F2528] sm:text-right">
                        {price.value[language]}
                      </span>
                      {price.note && (
                        <span className="text-xs font-semibold text-primary sm:col-span-2 sm:text-right">
                          {price.note[language]}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <BookingModal>
                  <Button
                    className="accent-button-shadow h-14 rounded-2xl bg-primary px-7 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#8F2F25] active:translate-y-[1px]"
                  >
                    {t.services.book}
                    <ArrowRight data-icon="inline-end" className="size-4 ml-2" />
                  </Button>
                </BookingModal>
                <Button
                  asChild
                  variant="outline"
                  className="h-14 rounded-2xl border-[#DDE3E7] bg-white px-7 text-sm font-bold text-[#1F2528] hover:border-[#C8D3D9] hover:bg-[#FAFBFC]"
                >
                  <Link to={`/services/${activeService.serviceId}`}>{t.services.details}</Link>
                </Button>
              </div>
            </div>

            <div className="grid content-start gap-5">
              <section aria-labelledby="landing-specialists-title">
                <h4 id="landing-specialists-title" className="font-display mb-4 text-2xl font-normal text-[#1F2528]">
                  {t.services.specialistsTitle}
                </h4>
                <div className={cn("grid gap-4", serviceDoctors.length > 1 ? "sm:grid-cols-2" : "sm:grid-cols-1")}>
                  {serviceDoctors.map((doctor) => (
                    <article
                      key={doctor.id}
                      data-doctor-card={doctor.id}
                      className="clinical-card-soft overflow-hidden rounded-[1.35rem]"
                    >
                      <div className="h-32 bg-[#EEF2F4] md:h-36">
                        <DoctorPhoto doctor={doctor} language={language} initialsClassName="size-14 text-base" />
                      </div>
                      <div className="p-5">
                        <p className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-primary">
                          {getDoctorExperience(doctor.description[language])}
                        </p>
                        <h5 className="mb-2 text-lg font-bold leading-tight text-[#1F2528]">
                          {doctor.name[language]}
                        </h5>
                        <p className="mb-3 text-xs font-bold uppercase tracking-[0.08em] text-[#606A70]">
                          {doctor.specialty[language]}
                        </p>
                        <p className="line-clamp-4 text-sm leading-relaxed text-[#606A70]">
                          {doctor.description[language]}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              <section aria-labelledby="landing-faq-title" className="rounded-[1.35rem] border border-[#DDE3E7] bg-white px-4 shadow-[0_18px_55px_rgba(31,37,40,0.045)]">
                <h4 id="landing-faq-title" className="sr-only">
                  {t.services.faqTitle}
                </h4>
                <div className="border-b border-[#DDE3E7] py-4">
                  <p className="font-display text-2xl font-normal text-[#1F2528]">{t.services.faqTitle}</p>
                </div>
                <Accordion type="single" collapsible>
                  {activeService.faqs.map((faq, idx) => (
                    <AccordionItem key={faq.question.ru} value={`${activeService.id}-${idx}`} className="border-[#DDE3E7]">
                      <AccordionTrigger className="text-left text-sm font-bold text-[#1F2528] hover:text-primary hover:no-underline">
                        {faq.question[language]}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm leading-relaxed text-[#606A70]">
                        {faq.answer[language]}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function getDoctorExperience(description: string) {
  const match = description.match(/(?:Стаж работы|Опыт работы|Жұмыс тәжірибесі):?\s*([^..]+[.)]?)/i);
  return match?.[1]?.replace(/\.$/, "") ?? "Опытный специалист";
}
