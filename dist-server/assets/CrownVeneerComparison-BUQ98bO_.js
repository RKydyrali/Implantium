import { t as cn } from "./utils-DVvWhTIj.js";
import { t as ServiceComparisonTable } from "./ServiceComparisonTable-C9JDrIY4.js";
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { Crown, Sparkle } from "@phosphor-icons/react";
//#region src/data/crownVeneerComparison.ts
var crownVeneerCopy = {
	ru: {
		sectionTitle: "Коронка или винир: в чём разница?",
		sectionIntro: "Оба решения улучшают улыбку, но подходят для разных клинических задач. Ниже — наглядное сравнение, чтобы проще понять, что выбрать на консультации.",
		crownTitle: "Коронка",
		veneerTitle: "Винир",
		comparisonTitle: "Сравнение в двух словах",
		materialsTitle: "Материалы коронок",
		materialsCaption: "Слева — цельная керамика (циркон / E-max): без металла, естественная прозрачность. Справа — металлокерамика: металлический каркас и керамическое покрытие, прочнее при высокой нагрузке.",
		veneerCaption: "Винир — тонкая керамическая накладка только на переднюю поверхность зуба. Минимальная обточка, максимум эстетики для передних зубов.",
		rows: [
			{
				label: "Покрытие зуба",
				crown: "Весь зуб, как «колпачок»",
				veneer: "Только передняя поверхность и режущий край"
			},
			{
				label: "Когда выбирают",
				crown: "Сильное разрушение, лечение каналов, имплант",
				veneer: "Эстетика, сколы, щели, изменение формы"
			},
			{
				label: "Обточка",
				crown: "Зуб подготавливают со всех сторон",
				veneer: "Минимальная подготовка спереди"
			},
			{
				label: "Прочность",
				crown: "Высокая, выдерживает жевательную нагрузку",
				veneer: "Для передних зубов при умеренной нагрузке"
			},
			{
				label: "Срок службы",
				crown: "В среднем 10–15 лет при уходе",
				veneer: "В среднем 10–15 лет при уходе"
			},
			{
				label: "Цена в клинике",
				crown: "от 45 000 ₸ (металлокерамика)",
				veneer: "от 100 000 ₸"
			}
		],
		crownPoints: [
			"Восстанавливает сильно повреждённый или ослабленный зуб",
			"Закрывает весь зуб — защита и форма одновременно",
			"Подходит после лечения каналов и на имплант"
		],
		veneerPoints: [
			"Исправляет цвет, форму и небольшие дефекты спереди",
			"Сохраняет больше собственных тканей зуба",
			"Даёт «голливудскую» эстетику улыбки"
		],
		ceramicLabel: "Цельная керамика",
		ceramicHint: "Циркон / E-max · без металла, максимум эстетики",
		pfmLabel: "Металлокерамика",
		pfmHint: "Металл + керамика · высокая прочность",
		veneerShellLabel: "Тонкая накладка",
		veneerShellHint: "Только фронтальная поверхность"
	},
	kk: {
		sectionTitle: "Қаптама ма, винир ме: айырмашылығы неде?",
		sectionIntro: "Екі шешім де күлкіні жақсартады, бірақ әртүрлі клиникалық мақсатқа арналған. Төменде — кеңесте не таңдау керектігін оңай түсіну үшін салыстырмалы ақпарат.",
		crownTitle: "Қаптама",
		veneerTitle: "Винир",
		comparisonTitle: "Қысқаша салыстыру",
		materialsTitle: "Қаптама материалдары",
		materialsCaption: "Сол жақта — бітімді керамика (циркон / E-max): металлсыз, табиғи мөлдірлік. Оң жақта — металлокерамика: металл каркасы және керамикалық қабаты, жоғары жүктемеде берік.",
		veneerCaption: "Винир — тістің тек алдыңғы бетіне қойылатын жұқа керамикалық қабат. Аз дайындау, алдыңғы тістер үшін жоғары эстетика.",
		rows: [
			{
				label: "Тісті жабу",
				crown: "Бүкіл тіс, «қақпақ» сияқты",
				veneer: "Тек алдыңғы беті және тілу жиегі"
			},
			{
				label: "Қашан таңдайды",
				crown: "Қатты бұзылған, түбір емделген, имплант",
				veneer: "Эстетика, сынық, бос орын, пішінді түзету"
			},
			{
				label: "Дайындау",
				crown: "Тіс барлық жағынан дайындалады",
				veneer: "Алдыңғы жағынан аз дайындау"
			},
			{
				label: "Беріктік",
				crown: "Жоғары, шайнау жүктемесін көтереді",
				veneer: "Алдыңғы тістерде орташа жүктеме үшін"
			},
			{
				label: "Қызмет мерзімі",
				crown: "Дұрыс күтіммен орташа 10–15 жыл",
				veneer: "Дұрыс күтіммен орташа 10–15 жыл"
			},
			{
				label: "Клиникадағы баға",
				crown: "45 000 ₸ бастап (металлокерамика)",
				veneer: "100 000 ₸ бастап"
			}
		],
		crownPoints: [
			"Қатты зақымдалған немесе әлсіреген тісті қалпына келтіреді",
			"Бүкіл тісті жабады — қорғау мен пішін бірге",
			"Түбір емделгеннен кейін және имплантқа қолайлы"
		],
		veneerPoints: [
			"Алдыңғы жағындағы түс, пішін және кіші ақауларды түзетеді",
			"Өз тіс тіндерін көбірек сақтайды",
			"Күлкінің эстетикасын айтарлықтай жақсартады"
		],
		ceramicLabel: "Бітімді керамика",
		ceramicHint: "Циркон / E-max · металлсыз",
		pfmLabel: "Металлокерамика",
		pfmHint: "Металл + керамика · жоғары беріктік",
		veneerShellLabel: "Жұқа қабат",
		veneerShellHint: "Тек алдыңғы бет"
	}
};
function getCrownVeneerCopy(language) {
	return crownVeneerCopy[language];
}
//#endregion
//#region src/assets/education/crown-materials-comparison.jpg
var crown_materials_comparison_default = "/assets/crown-materials-comparison-Db47ZDdC.jpg";
//#endregion
//#region src/assets/education/veneers-explainer.jpg
var veneers_explainer_default = "/assets/veneers-explainer-CsCuRBO8.jpg";
//#endregion
//#region src/components/services/CrownVeneerComparison.tsx
function CrownVeneerComparison({ language }) {
	const copy = getCrownVeneerCopy(language);
	const [activeTab, setActiveTab] = useState("crown");
	return /* @__PURE__ */ jsxs("section", {
		className: "overflow-hidden rounded-[1.5rem] border border-[#DDE3E7] bg-white p-5 shadow-[0_18px_55px_rgba(31,37,40,0.05)] sm:p-7",
		"aria-labelledby": "crown-veneer-comparison-title",
		children: [
			/* @__PURE__ */ jsx("h3", {
				id: "crown-veneer-comparison-title",
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
					active: activeTab === "crown",
					onClick: () => setActiveTab("crown"),
					icon: /* @__PURE__ */ jsx(Crown, {
						weight: "duotone",
						className: "size-4"
					}),
					label: copy.crownTitle
				}), /* @__PURE__ */ jsx(TabButton, {
					active: activeTab === "veneer",
					onClick: () => setActiveTab("veneer"),
					icon: /* @__PURE__ */ jsx(Sparkle, {
						weight: "duotone",
						className: "size-4"
					}),
					label: copy.veneerTitle
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mt-6 grid gap-4 md:grid-cols-2",
				children: [/* @__PURE__ */ jsx(VisualPanel, {
					title: copy.crownTitle,
					caption: copy.materialsCaption,
					imageSrc: crown_materials_comparison_default,
					imageAlt: language === "ru" ? "Сравнение цельной керамической и металлокерамической коронок в разрезе" : "Бітімді керамикалық және металлокерамикалық қаптамаларды салыстыру",
					badges: [{
						label: copy.ceramicLabel,
						hint: copy.ceramicHint,
						position: "left"
					}, {
						label: copy.pfmLabel,
						hint: copy.pfmHint,
						position: "right"
					}],
					materialsHeading: copy.materialsTitle,
					className: cn(activeTab !== "crown" && "hidden md:block")
				}), /* @__PURE__ */ jsx(VisualPanel, {
					title: copy.veneerTitle,
					caption: copy.veneerCaption,
					imageSrc: veneers_explainer_default,
					imageAlt: language === "ru" ? "Улыбка и схема установки виниров на передние зубы" : "Күлкі және алдыңғы тістерге винир орнату схемасы",
					badges: [{
						label: copy.veneerShellLabel,
						hint: copy.veneerShellHint,
						position: "center"
					}],
					className: cn(activeTab !== "veneer" && "hidden md:block")
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mt-6 grid gap-4 md:grid-cols-2",
				children: [/* @__PURE__ */ jsx(ComparisonCard, {
					title: copy.crownTitle,
					icon: /* @__PURE__ */ jsx(Crown, {
						weight: "duotone",
						className: "size-5"
					}),
					points: copy.crownPoints,
					className: cn(activeTab !== "crown" && "hidden md:block")
				}), /* @__PURE__ */ jsx(ComparisonCard, {
					title: copy.veneerTitle,
					icon: /* @__PURE__ */ jsx(Sparkle, {
						weight: "duotone",
						className: "size-5"
					}),
					points: copy.veneerPoints,
					className: cn(activeTab !== "veneer" && "hidden md:block")
				})]
			}),
			/* @__PURE__ */ jsx(ServiceComparisonTable, {
				className: "mt-8",
				title: copy.comparisonTitle,
				columns: [{
					id: "crown",
					title: copy.crownTitle,
					tone: "primary"
				}, {
					id: "veneer",
					title: copy.veneerTitle,
					tone: "blue"
				}],
				rows: copy.rows.map((row) => ({
					label: row.label,
					values: {
						crown: row.crown,
						veneer: row.veneer
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
		className: cn("inline-flex flex-1 items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-sm font-bold transition-colors", active ? "bg-white text-primary shadow-sm" : "text-[#606A70] hover:text-[#1F2528]"),
		children: [icon, label]
	});
}
function ComparisonCard({ title, icon, points, className }) {
	return /* @__PURE__ */ jsxs("article", {
		className: cn("rounded-2xl border border-[#DDE3E7] bg-[#FAFBFC] p-4", className),
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mb-3 flex items-center gap-2.5",
			children: [/* @__PURE__ */ jsx("span", {
				className: "flex size-9 items-center justify-center rounded-xl bg-[#F4E7E4]/70 text-primary",
				children: icon
			}), /* @__PURE__ */ jsx("h4", {
				className: "text-lg font-bold text-[#1F2528]",
				children: title
			})]
		}), /* @__PURE__ */ jsx("ul", {
			className: "grid gap-2.5",
			children: points.map((point) => /* @__PURE__ */ jsxs("li", {
				className: "flex gap-2.5 text-sm leading-relaxed text-[#606A70]",
				children: [/* @__PURE__ */ jsx("span", { className: "mt-2 size-1.5 shrink-0 rounded-full bg-primary" }), /* @__PURE__ */ jsx("span", { children: point })]
			}, point))
		})]
	});
}
function VisualPanel({ title, caption, imageSrc, imageAlt, badges, className, materialsHeading }) {
	return /* @__PURE__ */ jsxs("article", {
		className: cn("overflow-hidden rounded-2xl border border-[#DDE3E7] bg-white", className),
		children: [/* @__PURE__ */ jsxs("div", {
			className: "relative aspect-[16/10] overflow-hidden bg-[#0F1214]",
			children: [
				/* @__PURE__ */ jsx("img", {
					src: imageSrc,
					alt: imageAlt,
					className: "size-full object-cover object-center",
					loading: "lazy",
					decoding: "async"
				}),
				/* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(15,18,20,0)_52%,rgba(15,18,20,0.72)_100%)]" }),
				badges.map((badge) => /* @__PURE__ */ jsxs("div", {
					className: cn("absolute bottom-3 max-w-[46%] rounded-xl border border-white/15 bg-[#1F2528]/78 px-3 py-2 text-white backdrop-blur-sm", badge.position === "left" && "left-3", badge.position === "right" && "right-3", badge.position === "center" && "left-1/2 -translate-x-1/2 text-center"),
					children: [/* @__PURE__ */ jsx("p", {
						className: "text-xs font-bold leading-tight",
						children: badge.label
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-0.5 text-[10px] leading-snug text-white/75",
						children: badge.hint
					})]
				}, badge.label))
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "p-4",
			children: [
				materialsHeading && /* @__PURE__ */ jsx("p", {
					className: "mb-1 text-xs font-bold uppercase tracking-[0.12em] text-primary",
					children: materialsHeading
				}),
				/* @__PURE__ */ jsx("h4", {
					className: "text-base font-bold text-[#1F2528]",
					children: title
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm leading-relaxed text-[#606A70]",
					children: caption
				})
			]
		})]
	});
}
//#endregion
export { CrownVeneerComparison };
