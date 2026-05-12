import {
  ClipboardText,
  Heartbeat,
  Microscope,
  ShieldCheck,
  Sparkle,
  type IconProps,
} from "@phosphor-icons/react";
import type { ComponentType } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { content } from "@/data/content";

const aboutCards: {
  icon: ComponentType<IconProps>;
  title: { ru: string; kk: string };
  text: { ru: string; kk: string };
}[] = [
  {
    icon: Microscope,
    title: { ru: "Современные технологии", kk: "Заманауи технологиялар" },
    text: {
      ru: "Диагностика и лечение строятся на точной картине, понятных этапах и аккуратной работе с тканями.",
      kk: "Диагностика мен емдеу нақты көрініске, түсінікті кезеңдерге және ұқыпты тәсілге негізделеді.",
    },
  },
  {
    icon: ShieldCheck,
    title: { ru: "Стерильность и безопасность", kk: "Стерильдік және қауіпсіздік" },
    text: {
      ru: "Инструменты проходят обработку по протоколам, а лечение проводится с заботой о комфорте пациента.",
      kk: "Құралдар протокол бойынша өңделеді, ем пациент жайлылығын ескере отырып жүргізіледі.",
    },
  },
  {
    icon: ClipboardText,
    title: { ru: "Точная диагностика", kk: "Нақты диагностика" },
    text: {
      ru: "Врач объясняет ситуацию, варианты лечения, сроки и ориентир по стоимости до начала процедур.",
      kk: "Дәрігер жағдайды, ем нұсқаларын, мерзімін және баға бағдарын алдын ала түсіндіреді.",
    },
  },
  {
    icon: Heartbeat,
    title: { ru: "Комфорт и забота", kk: "Жайлылық және қамқорлық" },
    text: {
      ru: "Спокойная атмосфера, внимательная коммуникация и бережные процедуры для взрослых пациентов.",
      kk: "Ересек пациенттерге арналған тыныш атмосфера, мұқият байланыс және ұқыпты процедуралар.",
    },
  },
];

export function AboutClinic() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section id="about" className="bg-white px-4 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-[1320px]">
        <div className="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#DDE3E7] bg-[#FAFBFC] px-4 py-2 text-sm font-semibold text-primary">
              <Sparkle weight="fill" className="size-4" />
              IMPLANTIUM
            </span>
            <h2 className="font-display text-3xl font-normal text-[#1F2528] md:text-4xl">
              {language === "ru" ? "О клинике IMPLANTIUM" : "IMPLANTIUM клиникасы туралы"}
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-[#606A70]">
            {t.about.text}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {aboutCards.map((card) => {
            const Icon = card.icon;
            return (
              <article
                key={card.title.ru}
                className="clinical-card-soft clinical-lift overflow-hidden rounded-[1.6rem] p-5 md:p-6"
              >
                <div className="mb-5 flex h-32 items-end rounded-[1.2rem] border border-[#E8EDF0] bg-[radial-gradient(circle_at_30%_18%,rgba(217,225,229,0.86),transparent_44%),linear-gradient(135deg,#FAFBFC,#EEF2F4)] p-4">
                  <span className="flex size-12 items-center justify-center rounded-2xl border border-white bg-white/85 text-primary shadow-[0_14px_36px_rgba(31,37,40,0.06)]">
                    <Icon weight="duotone" className="size-6" />
                  </span>
                </div>
                <h3 className="mb-3 text-lg font-bold text-[#1F2528]">{card.title[language]}</h3>
                <p className="text-sm leading-7 text-[#606A70]">{card.text[language]}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
