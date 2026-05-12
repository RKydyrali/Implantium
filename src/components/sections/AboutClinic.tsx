import { useLanguage } from "@/hooks/useLanguage";
import { content } from "@/data/content";

const aboutCards: {
  title: { ru: string; kk: string };
  text: { ru: string; kk: string };
}[] = [
  {
    title: { ru: "Современные технологии", kk: "Заманауи технологиялар" },
    text: {
      ru: "Диагностика и лечение строятся на точной картине, понятных этапах и аккуратной работе с тканями.",
      kk: "Диагностика мен емдеу нақты көрініске, түсінікті кезеңдерге және ұқыпты тәсілге негізделеді.",
    },
  },
  {
    title: { ru: "Стерильность и безопасность", kk: "Стерильдік және қауіпсіздік" },
    text: {
      ru: "Инструменты проходят обработку по протоколам, а лечение проводится с заботой о комфорте пациента.",
      kk: "Құралдар протокол бойынша өңделеді, ем пациент жайлылығын ескере отырып жүргізіледі.",
    },
  },
  {
    title: { ru: "Точная диагностика", kk: "Нақты диагностика" },
    text: {
      ru: "Врач объясняет ситуацию, варианты лечения, сроки и ориентир по стоимости до начала процедур.",
      kk: "Дәрігер жағдайды, ем нұсқаларын, мерзімін және баға бағдарын алдын ала түсіндіреді.",
    },
  },
  {
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
