import { memo, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
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
import { usePublicDoctors } from "@/hooks/useDoctors";
import type { Doctor, Language } from "@/types";
import { cn } from "@/lib/utils";
import implantsIcon from "@/assets/service-icons/implants.png";
import crownsIcon from "@/assets/service-icons/crowns.png";
import treatmentIcon from "@/assets/service-icons/treatment.png";
import extractionIcon from "@/assets/service-icons/extraction.png";
import cleaningIcon from "@/assets/service-icons/cleaning.png";
import bracesIcon from "@/assets/service-icons/braces.png";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DoctorPhoto } from "@/components/common/DoctorPhoto";
import { CompactDoctorCardSkeleton } from "@/components/common/DoctorSkeletons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { BookingModal } from "@/components/sections/BookingModal";
import { DentalParallaxBackground } from "@/components/decor/DentalParallaxBackground";
import { MobileServiceSheet } from "@/components/sections/MobileServiceSheet";
import { ServicesConsultationPrompt } from "@/components/sections/ServicesConsultationPrompt";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { CrownVeneerComparison } from "@/components/services/CrownVeneerComparison";

const IconMap: Record<string, ComponentType<IconProps>> = {
  Tooth,
  ShieldCheck,
  Smiley,
  FirstAidKit,
  Sparkle,
  Heartbeat,
};

const ServiceIconAssets: Record<string, string> = {
  implants: implantsIcon,
  crowns: crownsIcon,
  treatment: treatmentIcon,
  "tooth-extraction": extractionIcon,
  cleaning: cleaningIcon,
  braces: bracesIcon,
};

export function ServicesPreview() {
  const { language } = useLanguage();
  const isMobileSheet = useMediaQuery("(max-width: 639px)");
  const { doctors, isLoading: doctorsLoading } = usePublicDoctors();
  const t = landingCopy[language];
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [isServiceDialogOpen, setIsServiceDialogOpen] = useState(false);
  const [isServiceSheetExpanded, setIsServiceSheetExpanded] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const selectedService = useMemo(
    () => (selectedServiceId ? landingServices.find((service) => service.id === selectedServiceId) : undefined),
    [selectedServiceId]
  );

  const handleServiceClick = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setIsServiceSheetExpanded(false);
    setIsServiceDialogOpen(true);
  };

  const handleServiceDialogOpenChange = (open: boolean) => {
    setIsServiceDialogOpen(open);

    if (!open) {
      setIsServiceSheetExpanded(false);
      setSelectedServiceId(null);
    }
  };

  const handleBookFromService = () => {
    setIsServiceDialogOpen(false);
    setIsServiceSheetExpanded(false);
    setSelectedServiceId(null);
    setIsBookingOpen(true);
  };

  const serviceSheetLabels = {
    close: language === "ru" ? "Закрыть окно услуги" : "Қызмет терезесін жабу",
    expand: language === "ru" ? "Развернуть информацию об услуге" : "Қызмет ақпаратын жаю",
    collapse: language === "ru" ? "Свернуть информацию об услуге" : "Қызмет ақпаратын жию",
  };

  return (
    <section id="services" className="clinical-section relative isolate overflow-hidden px-4 py-12 md:px-8 md:py-16">
      <DentalParallaxBackground surface="home-services" />
      <div className="relative z-10 mx-auto max-w-[1320px]">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-3xl font-normal text-[#1F2528] md:text-4xl">
              {t.services.title}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {landingServices.map((service) => {
            const Icon = IconMap[service.iconName] ?? Tooth;
            const isActive = isServiceDialogOpen && selectedServiceId === service.id;
            const generatedIcon = ServiceIconAssets[service.serviceId];

            return (
              <button
                key={service.id}
                type="button"
                aria-haspopup="dialog"
                aria-expanded={isActive}
                onClick={() => handleServiceClick(service.id)}
                className={cn(
                  "group grid min-h-[5.75rem] grid-cols-[auto_1fr] items-center gap-3 rounded-2xl border bg-white p-4 text-left shadow-[0_12px_34px_rgba(31,37,40,0.04)] transition-[border-color,background-color,box-shadow,transform] duration-200 ease-out hover:-translate-y-0.5 hover:border-[#C8D3D9] hover:shadow-[0_18px_46px_rgba(31,37,40,0.06)] active:translate-y-[1px] sm:min-h-[6.6rem] sm:gap-4 sm:p-5",
                  isActive
                    ? "border-primary/55 bg-[#F4E7E4]/45 text-[#1F2528] shadow-[0_18px_44px_rgba(166,58,45,0.08)]"
                    : "border-[#DDE3E7] text-[#606A70]"
                )}
              >
                <span
                  className={cn(
                    "flex size-11 shrink-0 items-center justify-center rounded-2xl border transition-colors sm:size-12",
                    isActive
                      ? "border-primary/20 bg-white text-primary"
                      : "border-[#E8EDF0] bg-[#FAFBFC] text-[#6E7B83] group-hover:text-primary"
                  )}
                >
                  <ServiceTileIcon
                    src={generatedIcon}
                    title={service.shortTitle[language]}
                    fallbackIcon={Icon}
                  />
                </span>
                <span className="min-w-0 overflow-hidden">
                  <span className="block break-words text-xs font-bold leading-snug text-[#1F2528] sm:text-sm">
                    {service.shortTitle[language]}
                  </span>
                  <span className="mt-1 hidden text-xs leading-snug text-[#606A70] sm:line-clamp-2 sm:text-sm">
                    {service.summary[language]}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {selectedService && isServiceDialogOpen && (
          isMobileSheet ? (
            <MobileServiceSheet
              open={isServiceDialogOpen}
              onOpenChange={handleServiceDialogOpenChange}
              expanded={isServiceSheetExpanded}
              onExpandedChange={setIsServiceSheetExpanded}
              closeLabel={serviceSheetLabels.close}
              expandLabel={serviceSheetLabels.expand}
              collapseLabel={serviceSheetLabels.collapse}
              title={selectedService.title[language]}
              description={selectedService.summary[language]}
            >
              <ServiceSheetBody
                service={selectedService}
                language={language}
                doctors={doctors}
                doctorsLoading={doctorsLoading}
                onBook={handleBookFromService}
                deferHeavyContent
              />
            </MobileServiceSheet>
          ) : (
            <Dialog open={isServiceDialogOpen} onOpenChange={handleServiceDialogOpenChange}>
              <DialogContent
                overlayClassName="bg-[#1F2528]/50"
                className="max-h-[calc(100dvh-3rem)] overflow-hidden p-0 sm:max-w-[1120px] sm:rounded-[2rem]"
                closeLabel={serviceSheetLabels.close}
              >
                <DialogHeader className="sr-only">
                  <DialogTitle>{selectedService.title[language]}</DialogTitle>
                  <DialogDescription>{selectedService.summary[language]}</DialogDescription>
                </DialogHeader>
                <div className="max-h-[calc(100dvh-3rem)] overflow-y-auto">
                  <ServiceSheetBody
                    service={selectedService}
                    language={language}
                    doctors={doctors}
                    doctorsLoading={doctorsLoading}
                    onBook={handleBookFromService}
                  />
                </div>
              </DialogContent>
            </Dialog>
          )
        )}

        <BookingModal open={isBookingOpen} onOpenChange={setIsBookingOpen}>
          <button type="button" className="sr-only">
            {t.services.book}
          </button>
        </BookingModal>

        <ServicesConsultationPrompt />
      </div>
    </section>
  );
}

type ServiceSheetBodyProps = {
  service: (typeof landingServices)[number];
  language: Language;
  doctors: Doctor[];
  doctorsLoading: boolean;
  onBook: () => void;
  deferHeavyContent?: boolean;
};

const ServiceSheetBody = memo(function ServiceSheetBody({
  service,
  language,
  doctors,
  doctorsLoading,
  onBook,
  deferHeavyContent = false,
}: ServiceSheetBodyProps) {
  return (
    <div className="p-4 sm:max-h-[calc(100dvh-3rem)] sm:p-6 lg:p-7">
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8">
        <ServiceMainPanel service={service} language={language} onBook={onBook} />
        <ServiceSheetExtraSections
          service={service}
          language={language}
          doctors={doctors}
          doctorsLoading={doctorsLoading}
          deferMount={deferHeavyContent}
        />
      </div>
    </div>
  );
});

type ServiceSheetExtraSectionsProps = {
  service: (typeof landingServices)[number];
  language: Language;
  doctors: Doctor[];
  doctorsLoading: boolean;
  deferMount?: boolean;
};

function ServiceSheetExtraSections({
  service,
  language,
  doctors,
  doctorsLoading,
  deferMount = false,
}: ServiceSheetExtraSectionsProps) {
  const t = landingCopy[language];
  const [isReady, setIsReady] = useState(!deferMount);

  useEffect(() => {
    if (!deferMount) {
      setIsReady(true);
      return;
    }

    setIsReady(false);
    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(() => setIsReady(true));
    });

    return () => cancelAnimationFrame(frame);
  }, [deferMount, service.id]);

  const serviceDoctors = useMemo(
    () => doctors.filter((doctor) => doctor.serviceIds.includes(service.serviceId)).slice(0, 2),
    [doctors, service.serviceId]
  );

  if (!isReady) {
    return (
      <div className="grid content-start gap-5" aria-hidden="true">
        <div className="h-48 animate-pulse rounded-[1.35rem] bg-[#EEF2F4]" />
        <div className="h-36 animate-pulse rounded-[1.35rem] bg-[#EEF2F4]" />
      </div>
    );
  }

  return (
    <div className="grid content-start gap-5">
      <section aria-labelledby="landing-specialists-title">
        <h4 id="landing-specialists-title" className="font-display mb-4 text-2xl font-normal text-[#1F2528]">
          {t.services.specialistsTitle}
        </h4>
        <div className={cn("grid gap-4", doctorsLoading || serviceDoctors.length > 1 ? "sm:grid-cols-2" : "sm:grid-cols-1")}>
          {doctorsLoading &&
            Array.from({ length: 2 }).map((_, index) => (
              <CompactDoctorCardSkeleton key={index} />
            ))}
          {serviceDoctors.map((doctor) => (
            <article
              key={doctor.id}
              data-doctor-card={doctor.id}
              className="clinical-card-soft overflow-hidden rounded-[1.35rem]"
            >
              <div className="aspect-square bg-[#EEF2F4]">
                <DoctorPhoto doctor={doctor} language={language} initialsClassName="size-14 text-base" />
              </div>
              <div className="p-5">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-primary">
                  {getDoctorExperience(doctor, language)}
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
          {service.faqs.map((faq, idx) => (
            <AccordionItem key={faq.question.ru} value={`${service.id}-${idx}`} className="border-[#DDE3E7]">
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
  );
}

type ServiceMainPanelProps = {
  service: (typeof landingServices)[number];
  language: Language;
  onBook: () => void;
};

type ServiceTileIconProps = {
  src?: string;
  title: string;
  fallbackIcon: ComponentType<IconProps>;
};

function ServiceTileIcon({ src, title, fallbackIcon: FallbackIcon }: ServiceTileIconProps) {
  const [hasImageError, setHasImageError] = useState(false);

  if (!src || hasImageError) {
    return <FallbackIcon weight="duotone" className="size-7 sm:size-8" />;
  }

  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      title={title}
      className="size-8 object-contain sm:size-9"
      onError={() => setHasImageError(true)}
    />
  );
}

function ServiceMainPanel({ service, language, onBook }: ServiceMainPanelProps) {
  const t = landingCopy[language];
  const ActiveIcon = IconMap[service.iconName] ?? Tooth;

  return (
    <div className="flex flex-col gap-7">
      <div>
        <Badge
          variant="secondary"
          className="mb-4 rounded-full border border-primary/15 bg-[#F4E7E4]/60 px-4 py-1.5 text-primary hover:bg-[#F4E7E4]/60"
        >
          {service.shortTitle[language]}
        </Badge>
        <h3 className="font-display mb-4 text-3xl font-normal leading-tight text-[#1F2528] md:text-5xl">
          {service.title[language]}
        </h3>
        <p className="max-w-xl text-base leading-8 text-[#606A70]">
          {service.summary[language]}
        </p>
      </div>

      {service.serviceId === "crowns" && <CrownVeneerComparison language={language} compact />}

      <div className="grid gap-3">
        {service.bullets[language].map((bullet) => (
          <div key={bullet} className="flex items-center gap-3">
            <span className="flex size-6 shrink-0 items-center justify-center rounded-full border border-[#DDE3E7] bg-[#FAFBFC] text-primary">
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
          {service.prices.map((price) => (
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
        <Button
          onClick={onBook}
          className="accent-button-shadow inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-primary px-7 text-sm font-bold leading-none text-white transition-all hover:-translate-y-0.5 hover:bg-[#8F2F25] active:translate-y-[1px]"
        >
          <span>{t.services.book}</span>
          <ArrowRight className="size-4 shrink-0" />
        </Button>
        <Button
          asChild
          variant="outline"
          className="h-14 rounded-2xl border-[#DDE3E7] bg-white px-7 text-sm font-bold text-[#1F2528] hover:border-[#C8D3D9] hover:bg-[#FAFBFC]"
        >
          <Link to={`/services/${service.serviceId}`}>{t.services.details}</Link>
        </Button>
      </div>
    </div>
  );
}

function getDoctorExperience(doctor: { description: Record<Language, string>; experienceYears?: number }, language: Language) {
  if (typeof doctor.experienceYears === "number" && doctor.experienceYears > 0) {
    return language === "ru" ? `${doctor.experienceYears} лет` : `${doctor.experienceYears} жыл`;
  }

  const description = doctor.description[language];
  const match = description.match(/(?:Стаж работы|Опыт работы|Жұмыс тәжірибесі):?\s*([^..]+[.)]?)/i);
  return match?.[1]?.replace(/\.$/, "") ?? (language === "ru" ? "Опытный специалист" : "Тәжірибелі маман");
}
