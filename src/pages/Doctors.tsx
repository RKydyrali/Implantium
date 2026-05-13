import { useEffect, type ComponentType } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  Heartbeat,
  Phone,
  ShieldCheck,
  Tooth,
  UsersThree,
  type IconProps,
} from "@phosphor-icons/react";
import heroClinicRoom from "@/assets/doctors/hero-clinic-room.png";
import { DoctorPhoto } from "@/components/common/DoctorPhoto";
import { BookingModal } from "@/components/sections/BookingModal";
import { Button } from "@/components/ui/button";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { DentalParallaxBackground } from "@/components/decor/DentalParallaxBackground";
import { useLanguage } from "@/hooks/useLanguage";
import { clinicContact, hasContactValue } from "@/data/clinicContact";
import { doctors } from "@/data/doctors";
import { services } from "@/data/services";
import type { Doctor, Language } from "@/types";

const doctorPageCopy = {
  ru: {
    title: "Наши специалисты",
    eyebrow: "Врачи IMPLANTIUM",
    breadcrumbHome: "Главная",
    breadcrumbCurrent: "Врачи",
    intro:
      "На этой странице представлены специалисты клиники, их опыт, специализация и оказываемые услуги.",
    specialistsLabel: "специалистов",
    experienceLabel: "клинический опыт",
    directionsLabel: "направлений лечения",
    appointmentLabel: "прием по записи",
    appointmentValue: "по записи",
    featuredKicker: "Ведущий специалист",
    featuredTitle: "Специалист крупным планом",
    competenceTitle: "Связанные направления",
    allDoctorsTitle: "Команда врачей",
    allDoctorsText:
      "В клинике IMPLANTIUM работают опытные специалисты по всем основным направлениям. В этом разделе указаны их квалификация, стаж и ключевые услуги.",
    chooseDoctor: "Записаться к специалисту",
    trustTitle: "Почему нам доверяют",
    reviewsTitle: "Отзывы о наших врачах",
    reviewsLink: "Смотреть все отзывы",
    ctaTitle: "Запишитесь на консультацию к любому специалисту",
    ctaText:
      "Мы подберем удобное время и предложим оптимальный план лечения после осмотра.",
    phoneCaption: "Ежедневно по графику клиники",
    photoSoon: "Фото скоро",
    fallbackExperience: "стаж уточняется",
    years: "лет",
    trustCards: [
      {
        title: "Опытные специалисты",
        text: "Стаж указан в профиле каждого врача.",
        icon: UsersThree,
      },
      {
        title: "Командный подход",
        text: "Врачи разных направлений помогают подобрать маршрут лечения.",
        icon: Heartbeat,
      },
      {
        title: "Понятные рекомендации",
        text: "Пациент получает объяснение этапов до начала процедур.",
        icon: CheckCircle,
      },
      {
        title: "Современная клиника",
        text: "Диагностика и прием проходят в аккуратной клинической среде.",
        icon: ShieldCheck,
      },
    ],
  },
  kk: {
    title: "Біздің мамандар",
    eyebrow: "IMPLANTIUM дәрігерлері",
    breadcrumbHome: "Басты бет",
    breadcrumbCurrent: "Дәрігерлер",
    intro:
      "Бұл бетте клиника мамандары, олардың тәжірибесі, бағыты және көрсететін қызметтері берілген.",
    specialistsLabel: "маман",
    experienceLabel: "клиникалық тәжірибе",
    directionsLabel: "емдеу бағыты",
    appointmentLabel: "қабылдау жазылу арқылы",
    appointmentValue: "жазылу арқылы",
    featuredKicker: "Жетекші маман",
    featuredTitle: "Маман туралы қысқаша",
    competenceTitle: "Байланысты бағыттар",
    allDoctorsTitle: "Дәрігерлер командасы",
    allDoctorsText:
      "IMPLANTIUM клиникасында әр бағыт бойынша тәжірибелі мамандар жұмыс істейді. Бұл бөлімде дәрігерлердің кәсіби бағыты, тәжірибесі және көрсететін негізгі қызметтері көрсетілген",
    chooseDoctor: "Маманға жазылу",
    trustTitle: "Неліктен бізге сенеді",
    reviewsTitle: "Дәрігерлер туралы пікірлер",
    reviewsLink: "Барлық пікірлерді көру",
    ctaTitle: "Кез келген маманға консультацияға жазылыңыз",
    ctaText:
      "Біз ыңғайлы уақытты таңдап, тексеруден кейін оңтайлы ем жоспарын ұсынамыз.",
    phoneCaption: "Клиника кестесі бойынша күн сайын",
    photoSoon: "Фото кейін қосылады",
    fallbackExperience: "тәжірибе нақтыланады",
    years: "жыл",
    trustCards: [
      {
        title: "Тәжірибелі мамандар",
        text: "Әр дәрігердің тәжірибесі профилінде көрсетілген.",
        icon: UsersThree,
      },
      {
        title: "Командалық тәсіл",
        text: "Әртүрлі бағыттағы дәрігерлер ем жолын таңдауға көмектеседі.",
        icon: Heartbeat,
      },
      {
        title: "Түсінікті ұсыныстар",
        text: "Пациент процедураларға дейін кезеңдерді түсінеді.",
        icon: CheckCircle,
      },
      {
        title: "Заманауи клиника",
        text: "Диагностика мен қабылдау ұқыпты клиникалық ортада өтеді.",
        icon: ShieldCheck,
      },
    ],
  },
} satisfies Record<Language, DoctorsCopy>;

type DoctorsCopy = {
  title: string;
  eyebrow: string;
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  intro: string;
  specialistsLabel: string;
  experienceLabel: string;
  directionsLabel: string;
  appointmentLabel: string;
  appointmentValue: string;
  featuredKicker: string;
  featuredTitle: string;
  competenceTitle: string;
  allDoctorsTitle: string;
  allDoctorsText: string;
  chooseDoctor: string;
  trustTitle: string;
  reviewsTitle: string;
  reviewsLink: string;
  ctaTitle: string;
  ctaText: string;
  phoneCaption: string;
  photoSoon: string;
  fallbackExperience: string;
  years: string;
  trustCards: {
    title: string;
    text: string;
    icon: ComponentType<IconProps>;
  }[];
};

const serviceMap = new Map(services.map((service) => [service.id, service]));

export default function Doctors() {
  const { language } = useLanguage();
  const copy = doctorPageCopy[language];
  const featuredDoctor = doctors[0];

  useEffect(() => {
    document.title =
      language === "ru"
        ? "Врачи IMPLANTIUM - специалисты стоматологической клиники"
        : "IMPLANTIUM дәрігерлері - стоматология мамандары";
  }, [language]);

  return (
    <main className="flex-1 overflow-hidden bg-[#F4F8FB] text-[#17243B]">
      <section className="relative isolate overflow-hidden border-b border-[#D8E2EA] px-4 pb-10 pt-24 md:px-8 md:pb-14 md:pt-32">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroClinicRoom}
            alt=""
            aria-hidden="true"
            className="size-full object-cover object-[62%_center]"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#F5F9FC_0%,#F5F9FC_34%,rgba(245,249,252,0.9)_50%,rgba(245,249,252,0.42)_74%,rgba(245,249,252,0.18)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.82)_0%,rgba(255,255,255,0.22)_48%,#F4F8FB_100%)]" />
        </div>

        <div className="mx-auto max-w-[1360px]">
          <div>
            <nav className="mb-7 flex flex-wrap items-center gap-2 text-xs font-semibold text-[#66788D]">
              <Link to="/" className="transition-colors hover:text-primary">
                {copy.breadcrumbHome}
              </Link>
              <span>/</span>
              <span className="text-[#17243B]">{copy.breadcrumbCurrent}</span>
            </nav>


            <h1 className="max-w-2xl text-4xl font-bold leading-[1.04] tracking-tight text-[#15233A] sm:text-5xl md:text-6xl">
              {copy.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#52657B] md:text-lg">
              {copy.intro}
            </p>


          </div>


        </div>
      </section>

      <section className="relative isolate overflow-hidden px-4 py-10 md:px-8 md:py-14">
        <DentalParallaxBackground surface="doctors-featured" />
        <div className="relative z-10 mx-auto max-w-[1360px]">
          <FeaturedDoctor doctor={featuredDoctor} language={language} copy={copy} />
        </div>
      </section>

      <section className="relative isolate overflow-hidden px-4 pb-10 md:px-8 md:pb-14">
        <DentalParallaxBackground surface="doctors-list" />
        <div className="relative z-10 mx-auto max-w-[1360px]">
          <div className="mb-7 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[#15233A] md:text-4xl">
                {copy.allDoctorsTitle}
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-[#52657B] md:text-base">
                {copy.allDoctorsText}
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} language={language} copy={copy} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-white px-4 py-12 md:px-8 md:py-16">
        <DentalParallaxBackground surface="doctors-trust" />
        <div className="relative z-10 mx-auto max-w-[1360px]">
          <h2 className="text-3xl font-bold tracking-tight text-[#15233A] md:text-4xl">
            {copy.trustTitle}
          </h2>
          <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {copy.trustCards.map((card) => (
              <TrustCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>

      <ReviewsSection title={copy.reviewsTitle} variant="doctors" />

      <section className="relative isolate overflow-hidden px-4 pb-14 md:px-8 md:pb-20">
        <DentalParallaxBackground surface="doctors-cta" />
        <div className="relative z-10 mx-auto max-w-[1360px]">
          <div className="grid min-w-0 gap-6 overflow-hidden rounded-[1.7rem] border border-[#D8E2EA] bg-white p-5 shadow-[0_24px_80px_rgba(39,64,95,0.07)] md:p-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <div className="flex min-w-0 flex-col gap-5 sm:flex-row sm:items-center">
              <span className="flex size-16 shrink-0 items-center justify-center rounded-full border border-[#D8E2EA] bg-[#F4F8FB] text-primary md:size-20">
                <Tooth weight="duotone" className="size-8" />
              </span>
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-[#15233A] md:text-3xl">
                  {copy.ctaTitle}
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-[#52657B] md:text-base">
                  {copy.ctaText}
                </p>
              </div>
            </div>

            <div className="grid min-w-0 gap-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
              {hasContactValue(clinicContact.phoneHref) && (
                <a
                  href={clinicContact.phoneHref}
                  className="flex min-h-14 min-w-0 items-center gap-3 rounded-full border border-[#D8E2EA] bg-[#F7FAFC] px-4 text-[#15233A] transition-all hover:-translate-y-0.5 hover:border-[#C3D2DF] active:translate-y-[1px]"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white text-primary shadow-sm">
                    <Phone weight="fill" className="size-5" />
                  </span>
                  <span className="flex flex-col gap-0.5 min-w-0">
                    {clinicContact.phoneDisplay?.split(',').map((phone, i) => (
                      <span key={i} className="block truncate text-[13px] font-bold leading-tight">
                        {phone.trim()}
                      </span>
                    ))}
                    <span className="block truncate text-[11px] font-medium text-[#6B7C90]">{copy.phoneCaption}</span>
                  </span>
                </a>
              )}

              <BookingModal>
                <Button className="h-14 w-full min-w-0 justify-center rounded-full bg-primary px-7 text-sm font-bold text-white shadow-[0_18px_38px_rgba(166,58,45,0.18)] transition-all hover:-translate-y-0.5 hover:bg-[#8F2F25] active:translate-y-[1px] sm:w-auto">
                  {copy.chooseDoctor}
                  <ArrowRight weight="bold" className="size-4" />
                </Button>
              </BookingModal>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}



function FeaturedDoctor({
  doctor,
  language,
  copy,
}: {
  doctor: Doctor;
  language: Language;
  copy: DoctorsCopy;
}) {
  const experience = getExperienceText(doctor, language, copy);
  const serviceTitles = getServiceTitles(doctor, language);

  return (
    <article className="overflow-hidden rounded-[1.7rem] border border-[#D8E2EA] bg-white shadow-[0_24px_80px_rgba(39,64,95,0.08)]">
      <div className="grid gap-0 lg:grid-cols-[0.36fr_0.64fr]">
        <div className="relative min-h-[20rem] overflow-hidden bg-[#EFF5F9] lg:min-h-full">
          <DoctorPhoto
            doctor={doctor}
            language={language}
            className="bg-[linear-gradient(145deg,#F9FCFE,#E8F0F6)] text-[#27405F]"
            initialsClassName="size-24 border-[#D8E2EA] text-2xl"
            labelClassName="text-[#6B7C90]"
          />
          <span className="absolute left-5 top-5 rounded-full border border-white/80 bg-white/90 px-4 py-2 text-xs font-bold text-[#27405F] shadow-sm">
            {copy.featuredKicker}
          </span>
        </div>

        <div className="grid gap-8 p-5 md:p-8 lg:grid-cols-[1fr_0.72fr] lg:p-10">
          <div className="flex min-w-0 flex-col justify-center">

            <h2 className="text-2xl font-bold leading-tight tracking-tight text-[#15233A] md:text-4xl">
              {doctor.name[language]}
            </h2>
            <p className="mt-3 text-sm font-bold uppercase tracking-[0.08em] text-primary">
              {doctor.specialty[language]}
            </p>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-[#52657B] md:text-base">
              {doctor.description[language]}
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <MetricTile value={experience} label={copy.experienceLabel} />
              <MetricTile value={`${serviceTitles.length}`} label={copy.directionsLabel} />
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="text-sm font-bold text-[#15233A]">{copy.competenceTitle}</h3>
            <div className="mt-4 flex flex-col gap-3">
              {serviceTitles.map((title) => (
                <div key={title} className="flex items-center gap-3 text-sm font-semibold leading-6 text-[#52657B]">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-white text-primary shadow-sm">
                    <CheckCircle weight="fill" className="size-4" />
                  </span>
                  <span>{title}</span>
                </div>
              ))}
            </div>


          </div>
        </div>
      </div>
    </article>
  );
}

function DoctorCard({
  doctor,
  language,
  copy,
}: {
  doctor: Doctor;
  language: Language;
  copy: DoctorsCopy;
}) {
  const serviceTitles = getServiceTitles(doctor, language).slice(0, 3);
  const experience = getExperienceText(doctor, language, copy);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-[#D8E2EA] bg-white shadow-[0_18px_55px_rgba(39,64,95,0.055)] transition-all duration-300 hover:-translate-y-1 hover:border-[#C3D2DF] hover:shadow-[0_24px_70px_rgba(39,64,95,0.08)]">
      <div className="aspect-[4/3.75] overflow-hidden bg-[#EFF5F9]">
        <DoctorPhoto
          doctor={doctor}
          language={language}
          className="bg-[linear-gradient(145deg,#F9FCFE,#E8F0F6)] text-[#27405F]"
          initialsClassName="size-20 border-[#D8E2EA] text-xl"
          labelClassName="text-[#6B7C90]"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <span className="mb-3 w-fit rounded-full border border-[#D8E2EA] bg-[#F7FAFC] px-3 py-1 text-xs font-bold text-[#52657B]">
          {experience}
        </span>
        <h3 className="text-lg font-bold leading-tight text-[#15233A]">{doctor.name[language]}</h3>
        <p className="mt-2 text-xs font-bold uppercase tracking-[0.08em] text-primary">
          {doctor.specialty[language]}
        </p>
        <div className="mt-4 flex flex-1 flex-col gap-2">
          {serviceTitles.map((title) => (
            <div key={title} className="flex items-start gap-2 text-xs font-semibold leading-5 text-[#52657B]">
              <CheckCircle weight="fill" className="mt-0.5 size-4 shrink-0 text-primary/80" />
              <span>{title}</span>
            </div>
          ))}
        </div>


      </div>
    </article>
  );
}

function MetricTile({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-xl font-bold tracking-tight text-[#15233A]">{value}</p>
      <p className="mt-1 text-xs font-semibold leading-snug text-[#6B7C90]">{label}</p>
    </div>
  );
}

function TrustCard({
  title,
  text,
  icon: Icon,
}: {
  title: string;
  text: string;
  icon: ComponentType<IconProps>;
}) {
  return (
    <article className="flex min-h-32 gap-4 rounded-[1.25rem] border border-[#D8E2EA] bg-[#F7FAFC] p-5">
      <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white text-primary shadow-sm">
        <Icon weight="duotone" className="size-6" />
      </span>
      <span>
        <span className="block text-sm font-bold text-[#15233A]">{title}</span>
        <span className="mt-2 block text-xs font-medium leading-6 text-[#52657B]">{text}</span>
      </span>
    </article>
  );
}

function getServiceTitles(doctor: Doctor, language: Language) {
  return doctor.serviceIds
    .map((serviceId) => serviceMap.get(serviceId)?.title[language])
    .filter((title): title is string => Boolean(title));
}

function getExperienceYears(doctor: Doctor) {
  const allDescriptions = `${doctor.description.ru} ${doctor.description.kk}`;
  const match = allDescriptions.match(/(\d+)\s*(?:лет|года|год|жыл)/i);
  return match ? Number(match[1]) : 0;
}

function getExperienceText(doctor: Doctor, language: Language, copy: DoctorsCopy) {
  const years = getExperienceYears(doctor);

  if (!years) {
    return copy.fallbackExperience;
  }

  return formatExperience(years, language, copy);
}

function formatExperience(years: number, language: Language, copy: DoctorsCopy) {
  if (language === "kk") {
    return `${years} ${copy.years}`;
  }

  const mod10 = years % 10;
  const mod100 = years % 100;
  const yearWord = mod10 === 1 && mod100 !== 11 ? "год" : mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14) ? "года" : "лет";
  return `${years} ${yearWord}`;
}
