import { useLanguage } from "@/hooks/useLanguage";
import { content } from "@/data/content";
import { DentalParallaxBackground } from "@/components/decor/DentalParallaxBackground";

const aboutCards: {
  title: { ru: string; kk: string };
  text: { ru: string; kk: string };
}[] = [
  {
    title: { ru: "Современные технологии", kk: "Заманауи технологиялар" },
    text: {
      ru: "Диагностика и лечение строятся на точных данных, понятных этапах и аккуратной работе с тканями.",
      kk: "Диагностика мен емдеу нақты деректерге, түсінікті кезеңдерге және ұқыпты тәсілге негізделеді.",
    },
  },
  {
    title: { ru: "Стерильность и безопасность", kk: "Стерильділік және қауіпсіздік" },
    text: {
      ru: "Инструменты проходят обработку по протоколам, а лечение проводится с вниманием к безопасности и комфорту пациента.",
      kk: "Құралдар хаттамаларға сай өңделеді, ал ем пациенттің қауіпсіздігі мен жайлылығын ескере отырып жүргізіледі.",
    },
  },
  {
    title: { ru: "Точная диагностика", kk: "Нақты диагностика" },
    text: {
      ru: "Врач объясняет ситуацию, варианты лечения, сроки и ориентировочную стоимость до начала процедур.",
      kk: "Дәрігер жағдайыңызды, ем нұсқаларын, мерзімін және шамамен құнын алдын ала түсіндіреді.",
    },
  },
  {
    title: { ru: "Комфорт и забота", kk: "Жайлылық және қамқорлық" },
    text: {
      ru: "Спокойная атмосфера, внимательное общение и бережный подход на каждом этапе лечения.",
      kk: "Тыныш атмосфера, мұқият қарым-қатынас және әр кезеңдегі ұқыпты күтім.",
    },
  },
];

export function AboutClinic() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section id="about" className="relative isolate overflow-hidden bg-white px-4 py-14 md:px-8 md:py-20">
      <DentalParallaxBackground surface="home-about" />
      <div className="relative z-10 mx-auto max-w-[1320px]">
        <div className="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between">
          <div>

            <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              {t.about.eyebrow}
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
            return (
              <article
                key={card.title.ru}
                className="clinical-card-soft clinical-lift overflow-hidden rounded-[1.6rem] p-5 md:p-6"
              >

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
