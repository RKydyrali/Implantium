import { n as useLanguage } from "./useLanguage-D1hkxYkq.js";
import { d as content, t as DentalParallaxBackground } from "../entry-server.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/sections/AboutClinic.tsx
var aboutCards = [
	{
		title: {
			ru: "Современные технологии",
			kk: "Заманауи технологиялар"
		},
		text: {
			ru: "Диагностика и лечение строятся на точных данных, понятных этапах и аккуратной работе с тканями.",
			kk: "Диагностика мен емдеу нақты деректерге, түсінікті кезеңдерге және ұқыпты тәсілге негізделеді."
		}
	},
	{
		title: {
			ru: "Стерильность и безопасность",
			kk: "Стерильділік және қауіпсіздік"
		},
		text: {
			ru: "Инструменты проходят обработку по протоколам, а лечение проводится с вниманием к безопасности и комфорту пациента.",
			kk: "Құралдар хаттамаларға сай өңделеді, ал ем пациенттің қауіпсіздігі мен жайлылығын ескере отырып жүргізіледі."
		}
	},
	{
		title: {
			ru: "Точная диагностика",
			kk: "Нақты диагностика"
		},
		text: {
			ru: "Врач объясняет ситуацию, варианты лечения, сроки и ориентировочную стоимость до начала процедур.",
			kk: "Дәрігер жағдайыңызды, ем нұсқаларын, мерзімін және шамамен құнын алдын ала түсіндіреді."
		}
	},
	{
		title: {
			ru: "Комфорт и забота",
			kk: "Жайлылық және қамқорлық"
		},
		text: {
			ru: "Спокойная атмосфера, внимательное общение и бережный подход на каждом этапе лечения.",
			kk: "Тыныш атмосфера, мұқият қарым-қатынас және әр кезеңдегі ұқыпты күтім."
		}
	}
];
function AboutClinic() {
	const { language } = useLanguage();
	const t = content[language];
	return /* @__PURE__ */ jsxs("section", {
		id: "about",
		className: "relative isolate overflow-hidden bg-white px-4 py-14 md:px-8 md:py-20",
		children: [/* @__PURE__ */ jsx(DentalParallaxBackground, { surface: "home-about" }), /* @__PURE__ */ jsxs("div", {
			className: "relative z-10 mx-auto max-w-[1320px]",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
					className: "mb-3 block text-sm font-semibold uppercase tracking-[0.16em] text-primary",
					children: t.about.eyebrow
				}), /* @__PURE__ */ jsx("h2", {
					className: "font-display text-3xl font-normal text-[#1F2528] md:text-4xl",
					children: language === "ru" ? "О клинике IMPLANTIUM" : "IMPLANTIUM клиникасы туралы"
				})] }), /* @__PURE__ */ jsx("p", {
					className: "max-w-2xl text-base leading-8 text-[#606A70]",
					children: t.about.text
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4",
				children: aboutCards.map((card) => {
					return /* @__PURE__ */ jsxs("article", {
						className: "clinical-card-soft clinical-lift overflow-hidden rounded-[1.6rem] p-5 md:p-6",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "mb-3 text-lg font-bold text-[#1F2528]",
							children: card.title[language]
						}), /* @__PURE__ */ jsx("p", {
							className: "text-sm leading-7 text-[#606A70]",
							children: card.text[language]
						})]
					}, card.title.ru);
				})
			})]
		})]
	});
}
//#endregion
export { AboutClinic };
