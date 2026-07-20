import { t as cn } from "./utils-BmXddvPc.js";
import { t as ServiceComparisonTable } from "./ServiceComparisonTable-D7q_-s9O.js";
import { useState } from "react";
import { Anchor, ArrowsLeftRight, Tooth } from "@phosphor-icons/react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/data/dentureTypes.ts
var dentureTypesCopy = {
	ru: {
		sectionTitle: "Какие бывают протезы?",
		sectionIntro: "Протезы помогают восстановить утраченные зубы — снова удобно жевать и уверенно улыбаться. На консультации врач подберёт вариант под вашу ситуацию и бюджет.",
		fixedTitle: "Несъёмный на имплантах",
		fixedCaption: "Протез фиксируется на имплантах и не снимается ежедневно. Подходит, когда нет многих зубов или целой челюсти, но нужна максимально стабильная фиксация.",
		fixedBadge: "All-on-4 / All-on-6",
		fixedHint: "Фиксация на имплантах",
		removableTitle: "Съёмный частичный",
		removableCaption: "Классический съёмный протез с кламмерами на опорные зубы. Быстрый и доступный способ восстановить несколько отсутствующих зубов.",
		removableBadge: "Частичный протез",
		removableHint: "Съёмная конструкция",
		typesTitle: "Виды съёмных протезов",
		types: [
			{
				id: "acrylic",
				title: "Акриловый протез",
				pros: "Самый доступный по цене, можно изготовить быстро.",
				cons: "Чуть массивнее, нужен период привыкания."
			},
			{
				id: "bugel",
				title: "Бюгельный протез",
				pros: "Надёжнее держится, меньше перекрывает нёбо.",
				cons: "Нужны опорные зубы, стоимость выше акрилового."
			},
			{
				id: "valplast",
				title: "Valplast-протез",
				pros: "Гибкий, лёгкий, без металла, гипоаллергенный.",
				cons: "Подбирается не во всех клинических случаях."
			},
			{
				id: "vacuum",
				title: "Вакуумный протез",
				pros: "Держится за счёт плотного прилегания, без крючков.",
				cons: "Требует правильной формы челюсти, подходит не всем."
			}
		],
		comparisonTitle: "Съёмный или несъёмный?",
		rows: [
			{
				label: "Фиксация",
				fixed: "На имплантах, не снимается",
				removable: "Снимается для ухода"
			},
			{
				label: "Когда выбирают",
				fixed: "Полное отсутствие зубов на челюсти",
				removable: "Отсутствует часть зубов"
			},
			{
				label: "Комфорт",
				fixed: "Максимально стабильно при жевании",
				removable: "Нужно время на привыкание"
			},
			{
				label: "Уход",
				fixed: "Гигиена как за своими зубами + осмотры",
				removable: "Снятие и чистка дома"
			},
			{
				label: "Срок изготовления",
				fixed: "Зависит от имплантации",
				removable: "Обычно 2–3 недели"
			}
		],
		timelineNote: "Сроки зависят от выбранного протеза — врач назовёт их после осмотра и слепков."
	},
	kk: {
		sectionTitle: "Тіс протездері қандай болады?",
		sectionIntro: "Тіс протездері жоғалған тістерді қалпына келтіреді — қайта ыңғайлы шайнауға және сенімді күлуге көмектеседі. Кеңесте дәрігер жағдайыңыз бен бюджетке сай нұсқаны таңдайды.",
		fixedTitle: "Импланттағы тұрақты",
		fixedCaption: "Протез импланттарға бекітіледі және күнделікті шешілмейді. Көп тіс немесе тұтас жақ жоқ, бірақ ең тұрақты бекіту қажет болғанда қолайлы.",
		fixedBadge: "All-on-4 / All-on-6",
		fixedHint: "Имплантқа бекіту",
		removableTitle: "Алмалы жартылай",
		removableCaption: "Тіректі тістерге ілмектері бар классикалық алмалы протез. Бірнеше жоқ тісті қалпына келтірудің жылдам әрі қолжетімді жолы.",
		removableBadge: "Жартылай протез",
		removableHint: "Алмалы конструкция",
		typesTitle: "Алмалы протез түрлері",
		types: [
			{
				id: "acrylic",
				title: "Акрил протезі",
				pros: "Баға жағынан ең қолжетімді, тез жасалады.",
				cons: "Сәл ауыррақ, үйрену уақыты қажет."
			},
			{
				id: "bugel",
				title: "Бюгельді протез",
				pros: "Нығырақ тұрады, төбені аз жабады.",
				cons: "Тіректі тістер керек, акрилге қарағанда қымбаттау."
			},
			{
				id: "valplast",
				title: "Valplast протезі",
				pros: "Иілгіш, жеңіл, металлсыз, аллергия тудырмайды.",
				cons: "Барлық жағдайға сай келмейді."
			},
			{
				id: "vacuum",
				title: "Вакуумды протез",
				pros: "Қысқышсыз, тығыз жабысу арқылы тұрады.",
				cons: "Жақ пішіні маңызды, барлығына қолайлы емес."
			}
		],
		comparisonTitle: "Алмалы ма, тұрақты ма?",
		rows: [
			{
				label: "Бекіту",
				fixed: "Имплантта, шешілмейді",
				removable: "Күтім үшін шешіледі"
			},
			{
				label: "Қашан таңдайды",
				fixed: "Жақта тіс толық жоқ болса",
				removable: "Тістердің бір бөлігі жоқ болса"
			},
			{
				label: "Жайлылық",
				fixed: "Шайнауда ең тұрақты",
				removable: "Үйрену уақыты қажет"
			},
			{
				label: "Күтім",
				fixed: "Өз тісіндей гигиена + бақылау",
				removable: "Үйде шешіп тазалау"
			},
			{
				label: "Жасау мерзімі",
				fixed: "Имплантацияға байланысты",
				removable: "Әдетте 2–3 апта"
			}
		],
		timelineNote: "Мерзімдер протез түріне байланысты — дәрігер тексеру мен қалып алудан кейін айтады."
	}
};
function getDentureTypesCopy(language) {
	return dentureTypesCopy[language];
}
//#endregion
//#region src/assets/education/implant-arch-prosthesis.jpg
var implant_arch_prosthesis_default = "/assets/implant-arch-prosthesis-DWxXtChQ.jpg";
//#endregion
//#region src/assets/education/partial-denture-removable.jpg
var partial_denture_removable_default = "/assets/partial-denture-removable-JCG-wBh2.jpg";
//#endregion
//#region src/components/services/DentureTypesEducation.tsx
function DentureTypesEducation({ language }) {
	const copy = getDentureTypesCopy(language);
	const [activeTab, setActiveTab] = useState("fixed");
	return /* @__PURE__ */ jsxs("section", {
		className: "overflow-hidden rounded-[1.5rem] border border-[#DDE3E7] bg-white p-5 shadow-[0_18px_55px_rgba(31,37,40,0.05)] sm:p-7",
		"aria-labelledby": "denture-types-title",
		children: [
			/* @__PURE__ */ jsx("h3", {
				id: "denture-types-title",
				className: "font-display text-3xl font-normal text-[#1F2528] md:text-4xl",
				children: copy.sectionTitle
			}),
			/* @__PURE__ */ jsx("p", {
				className: "mt-3 max-w-3xl text-base leading-relaxed text-[#606A70]",
				children: copy.sectionIntro
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mt-6 flex rounded-2xl border border-[#DDE3E7] bg-[#FAFBFC] p-1 md:hidden",
				children: [/* @__PURE__ */ jsx(TabButton, {
					active: activeTab === "fixed",
					onClick: () => setActiveTab("fixed"),
					icon: /* @__PURE__ */ jsx(Anchor, {
						weight: "duotone",
						className: "size-4"
					}),
					label: copy.fixedTitle
				}), /* @__PURE__ */ jsx(TabButton, {
					active: activeTab === "removable",
					onClick: () => setActiveTab("removable"),
					icon: /* @__PURE__ */ jsx(ArrowsLeftRight, {
						weight: "duotone",
						className: "size-4"
					}),
					label: copy.removableTitle
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mt-6 grid gap-4 md:grid-cols-2",
				children: [/* @__PURE__ */ jsx(SolutionVisual, {
					title: copy.fixedTitle,
					caption: copy.fixedCaption,
					imageSrc: implant_arch_prosthesis_default,
					imageAlt: language === "ru" ? "Несъёмный протез на имплантах — полный зубной ряд" : "Импланттағы тұрақты толық протез",
					badge: copy.fixedBadge,
					hint: copy.fixedHint,
					className: cn(activeTab !== "fixed" && "hidden md:block")
				}), /* @__PURE__ */ jsx(SolutionVisual, {
					title: copy.removableTitle,
					caption: copy.removableCaption,
					imageSrc: partial_denture_removable_default,
					imageAlt: language === "ru" ? "Съёмный частичный протез с металлическими кламмерами" : "Металл ілмектері бар алмалы жартылай протез",
					badge: copy.removableBadge,
					hint: copy.removableHint,
					className: cn(activeTab !== "removable" && "hidden md:block")
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mt-8",
				children: [
					/* @__PURE__ */ jsx("h4", {
						className: "text-sm font-bold uppercase tracking-[0.12em] text-primary",
						children: copy.typesTitle
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-4 grid gap-3 sm:grid-cols-2",
						children: copy.types.map((type) => /* @__PURE__ */ jsxs("article", {
							className: "rounded-2xl border border-[#DDE3E7] bg-[#FAFBFC] p-4",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "mb-2 flex items-center gap-2",
									children: [/* @__PURE__ */ jsx("span", {
										className: "flex size-8 items-center justify-center rounded-xl bg-[#EEF6FA] text-[#3D7EA6]",
										children: /* @__PURE__ */ jsx(Tooth, {
											weight: "duotone",
											className: "size-4"
										})
									}), /* @__PURE__ */ jsx("h5", {
										className: "text-base font-bold text-[#1F2528]",
										children: type.title
									})]
								}),
								/* @__PURE__ */ jsxs("p", {
									className: "text-sm leading-relaxed text-[#606A70]",
									children: [/* @__PURE__ */ jsx("span", {
										className: "font-semibold text-[#1F2528]",
										children: "+ "
									}), type.pros]
								}),
								/* @__PURE__ */ jsxs("p", {
									className: "mt-2 text-sm leading-relaxed text-[#8A949B]",
									children: [/* @__PURE__ */ jsx("span", {
										className: "font-semibold",
										children: "− "
									}), type.cons]
								})
							]
						}, type.id))
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-4 text-sm leading-relaxed text-[#606A70]",
						children: copy.timelineNote
					})
				]
			}),
			/* @__PURE__ */ jsx(ServiceComparisonTable, {
				className: "mt-8",
				title: copy.comparisonTitle,
				columns: [{
					id: "fixed",
					title: copy.fixedTitle,
					tone: "blue"
				}, {
					id: "removable",
					title: copy.removableTitle,
					tone: "primary"
				}],
				rows: copy.rows.map((row) => ({
					label: row.label,
					values: {
						fixed: row.fixed,
						removable: row.removable
					}
				}))
			})
		]
	});
}
function TabButton({ active, onClick, icon, label }) {
	return /* @__PURE__ */ jsxs("button", {
		type: "button",
		onClick,
		className: cn("inline-flex flex-1 items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-sm font-bold transition-colors", active ? "bg-white text-[#3D7EA6] shadow-sm" : "text-[#606A70] hover:text-[#1F2528]"),
		children: [icon, /* @__PURE__ */ jsx("span", {
			className: "text-left leading-snug",
			children: label
		})]
	});
}
function SolutionVisual({ title, caption, imageSrc, imageAlt, badge, hint, className }) {
	return /* @__PURE__ */ jsxs("article", {
		className: cn("overflow-hidden rounded-2xl border border-[#DDE3E7] bg-[#FAFBFC]", className),
		children: [/* @__PURE__ */ jsxs("div", {
			className: "relative aspect-[4/3] overflow-hidden bg-[#E8F4FA]",
			children: [/* @__PURE__ */ jsx("img", {
				src: imageSrc,
				alt: imageAlt,
				className: "size-full object-cover object-center",
				loading: "lazy",
				decoding: "async"
			}), /* @__PURE__ */ jsxs("div", {
				className: "absolute bottom-3 left-3 rounded-xl border border-white/40 bg-[#1F2528]/75 px-3 py-2 text-white backdrop-blur-sm",
				children: [/* @__PURE__ */ jsx("p", {
					className: "text-xs font-bold leading-tight",
					children: badge
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-0.5 text-[10px] leading-snug text-white/75",
					children: hint
				})]
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "p-4",
			children: [/* @__PURE__ */ jsx("h4", {
				className: "text-base font-bold text-[#1F2528]",
				children: title
			}), /* @__PURE__ */ jsx("p", {
				className: "mt-2 text-sm leading-relaxed text-[#606A70]",
				children: caption
			})]
		})]
	});
}
//#endregion
export { DentureTypesEducation };
