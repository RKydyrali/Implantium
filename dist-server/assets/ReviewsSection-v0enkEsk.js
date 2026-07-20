import { n as useLanguage } from "./useLanguage-D1hkxYkq.js";
import { r as hasContactValue, t as clinicContact } from "./clinicContact-BRM7EXga.js";
import { t as cn } from "./utils-BmXddvPc.js";
import { t as DentalParallaxBackground, u as landingCopy } from "../entry-server.js";
import { ArrowRight, Quotes, Star } from "@phosphor-icons/react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/data/reviews.ts
var patientReviews = [
	{
		id: "zoya-shakirova",
		author: "Зоя Шакирова",
		rating: 5,
		sourceUrl: "https://2gis.kz/reviews/70000001038002984/review/241061174",
		originalLanguage: "kk",
		text: {
			ru: "Давно лечу зубы в этой клинике: ставила импланты и коронки. У врача Бауыржана Советхановича поставила 6 имплантов, у Бауыржана Саиновича — коронки. Всё нравится, спасибо.",
			kk: "Бұрыннан осы клиникада тістерімді емдетіп, имплант орнатып, коронка қойдыртып жүрмін. Бауыржан Советханович деген врачта 6 имплант орнаттым. Бауыржан Саиновичта коронка орнатудамын. Барлығы ұнауда, рақмет🥰"
		}
	},
	{
		id: "erkin-akikatov",
		author: "Еркин Акикатов",
		rating: 5,
		sourceUrl: "https://2gis.kz/reviews/70000001038002984/review/241006260",
		originalLanguage: "kk",
		text: {
			ru: "Клиника IMPLANTIUM мне понравилась, спасибо, будьте здоровы. Благодарю Досказиева Бауыржана Саиновича — доволен его работой.",
			kk: "Имплантиум клиникасы маған ұнады рахмет сау болсын. Досказиев Бауыржан Саиновичке рахмет қызметіне ризамын"
		}
	},
	{
		id: "meirambek-mylkymbaev",
		author: "Мейрамбек Мылкымбаев",
		rating: 5,
		sourceUrl: "https://2gis.kz/reviews/70000001038002984/review/240386903",
		originalLanguage: "kk",
		text: {
			ru: "Огромное спасибо Бауыржану Саиновичу — работу выполнил аккуратно. Желаю успехов команде IMPLANTIUM, пусть ваш труд будет плодотворным!",
			kk: "Бауыржан Саиновичке коп-коп рахмет,оз жұмысын ұкыпты жасады,Имплантиум ұжымына жұмыста табыс тилеймин!!!енбектериниз табысты болсын!!!"
		}
	},
	{
		id: "aynur-usekenova",
		author: "Айнур Усекенова",
		rating: 5,
		sourceUrl: "https://2gis.kz/reviews/70000001038002984/review/240350598",
		originalLanguage: "kk",
		text: {
			ru: "Мне нравится, сервис хороший — лечу зубы только здесь.",
			kk: "Өзіме ұнайды, сервис жақсы, тек омы жерде емдетемін тісімді"
		}
	},
	{
		id: "madina-tokhtabayeva",
		author: "Мадина Тохтабаева",
		rating: 5,
		sourceUrl: "https://2gis.kz/reviews/70000001038002984/review/239215064",
		originalLanguage: "kk",
		text: {
			ru: "Спасибо стоматологической клинике IMPLANTIUM и всей команде. Большое спасибо Бауыржану Сайновичу: поставил имплант, сделал коррекцию и аккуратно восстановил форму без боли, лёгкая рука. Доверяю этой стоматологии.",
			kk: "Имплантиум стоматология клиникасына,ұжымына рахмет. Тісіме имплант салып берген, коррекция жасап, әдемі қалыпқа келтірген,ауыртпай,қолы жеңіл Бауыржан Сайновичке үлкен рахмет, Алла разы болсын. Осы стоматологияға сенімімді білдіремін."
		}
	},
	{
		id: "anar-sarsenbaeva",
		author: "Анар Сарсенбаева",
		rating: 5,
		sourceUrl: "https://2gis.kz/reviews/70000001038002984/review/239209725",
		originalLanguage: "kk",
		text: {
			ru: "Давно лечу зубы здесь, ставила импланты. Всё понравилось, осталась довольна, прошло безболезненно и хорошо. Обслуживание тоже на высоком уровне. Спасибо.",
			kk: "Бұл жерде бұрыннан тісімді емдетіп, имплант салдырдым. Барлығы ұнады, көңілімнен шықты, безболезненно жақсы өтті. Обслуживание тоже жоғары деңгейде. Рақмет"
		}
	},
	{
		id: "guldana-edigaeva",
		author: "Гульдана Едигаева",
		rating: 5,
		sourceUrl: "https://2gis.kz/reviews/70000001038002984/review/238157327",
		originalLanguage: "kk",
		text: {
			ru: "У Бауыржана Саиновича в этой клинике поставила коронку. Очень довольна результатом: врач выполнил работу аккуратно и качественно, всё заранее объяснил. Коронка выглядит естественно, спасибо.",
			kk: "Бауыржан Саинович мен осы клиникада тісіме коронка қойдырдым. Нәтижесіне өте ризамын. Врач жұмысты ұқыпты әрі сапалы жасады, бәрін алдын ала түсіндірді. Коронка табиғи көрінеді рақмет👍🏼"
		}
	}
];
//#endregion
//#region src/components/sections/ReviewsSection.tsx
var repeatedReviews = [...patientReviews, ...patientReviews];
function ReviewsSection({ id, title, variant = "home" }) {
	const { language } = useLanguage();
	const copy = landingCopy[language].reviews;
	const isDoctorsVariant = variant === "doctors";
	return /* @__PURE__ */ jsxs("section", {
		id: id ?? (isDoctorsVariant ? void 0 : "reviews"),
		className: cn("relative isolate overflow-hidden px-4 md:px-8", isDoctorsVariant ? "bg-[#F4F8FB] py-12 md:py-16" : "bg-white py-14 md:py-20"),
		children: [/* @__PURE__ */ jsx(DentalParallaxBackground, { surface: isDoctorsVariant ? "doctors-reviews" : "home-reviews" }), /* @__PURE__ */ jsxs("div", {
			className: "relative z-10 mx-auto max-w-[1320px]",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "grid gap-7 lg:grid-cols-[0.34fr_0.66fr] lg:items-start",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "lg:pr-4",
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "mb-3 block text-sm font-semibold uppercase tracking-[0.16em] text-primary",
							children: copy.source
						}),
						/* @__PURE__ */ jsx("h2", {
							className: cn("font-display font-normal text-[#1F2528]", isDoctorsVariant ? "text-3xl md:text-4xl" : "text-3xl md:text-5xl"),
							children: title ?? (language === "ru" ? "Отзывы пациентов" : "Пациент пікірлері")
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-4 max-w-xl text-sm leading-7 text-[#606A70] md:text-base md:leading-8",
							children: copy.title
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "clinical-card mt-6 rounded-[1.6rem] p-5 md:p-6",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex flex-wrap items-center gap-5",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-baseline gap-2",
										children: [/* @__PURE__ */ jsx("span", {
											className: "font-display text-5xl font-medium text-[#1F2528] tracking-tight",
											children: copy.rating.replace("+", "")
										}), /* @__PURE__ */ jsx("span", {
											className: "text-xl font-medium text-[#606A70]",
											children: "/ 5"
										})]
									}),
									/* @__PURE__ */ jsx("div", { className: "hidden h-10 w-px bg-border/80 sm:block" }),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
										className: "flex gap-1 text-primary",
										"aria-label": copy.starsLabel,
										children: Array.from({ length: 5 }).map((_, idx) => /* @__PURE__ */ jsx(Star, {
											weight: "fill",
											className: "size-5"
										}, idx))
									}), /* @__PURE__ */ jsx("p", {
										className: "mt-2 text-xs font-bold uppercase tracking-[0.1em] text-primary",
										children: copy.selectedLabel
									})] })
								]
							}), hasContactValue(clinicContact.twoGisUrl) && /* @__PURE__ */ jsxs("a", {
								href: clinicContact.twoGisUrl,
								target: "_blank",
								rel: "noreferrer",
								className: "mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#1F2528] transition-colors hover:text-primary",
								children: [copy.viewAll, /* @__PURE__ */ jsx(ArrowRight, {
									weight: "bold",
									className: "size-4"
								})]
							})]
						})
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "min-w-0",
					children: /* @__PURE__ */ jsx(ReviewsMarquee, { sourceLabel: copy.openSource })
				})]
			}), !isDoctorsVariant && hasContactValue(clinicContact.twoGisUrl) && /* @__PURE__ */ jsx("div", {
				className: "mt-7 flex justify-center lg:justify-end",
				children: /* @__PURE__ */ jsxs("a", {
					href: clinicContact.twoGisUrl,
					target: "_blank",
					rel: "noreferrer",
					className: "inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-[#DDE3E7] bg-white px-6 py-3 text-sm font-bold text-[#1F2528] shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/35 hover:text-primary active:translate-y-[1px]",
					children: [copy.viewAll, /* @__PURE__ */ jsx(ArrowRight, {
						weight: "bold",
						className: "size-4"
					})]
				})
			})]
		})]
	});
}
function ReviewsMarquee({ sourceLabel }) {
	const { language } = useLanguage();
	return /* @__PURE__ */ jsx("div", {
		className: "reviews-marquee pt-6 pb-8 -mt-6",
		"aria-label": language === "ru" ? "Реальные отзывы пациентов" : "Пациенттердің нақты пікірлері",
		children: /* @__PURE__ */ jsx("div", {
			className: "reviews-marquee-track items-start gap-4 md:gap-5",
			children: repeatedReviews.map((review, index) => {
				return /* @__PURE__ */ jsx(ReviewCard, {
					review,
					sourceLabel,
					isDuplicate: index >= patientReviews.length
				}, `${review.id}-${index}`);
			})
		})
	});
}
function ReviewCard({ review, sourceLabel, isDuplicate }) {
	const { language } = useLanguage();
	const initials = review.author.split(" ").map((part) => part[0]).join("").slice(0, 2);
	return /* @__PURE__ */ jsxs("article", {
		"aria-hidden": isDuplicate,
		className: cn("clinical-card-soft clinical-lift flex w-[min(82vw,23rem)] shrink-0 flex-col rounded-[1.6rem] p-5 md:w-[25rem] md:p-6", isDuplicate && "reviews-marquee-duplicate"),
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "mb-4 flex items-center justify-between gap-4",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ jsx("span", {
						className: "flex size-11 shrink-0 items-center justify-center rounded-2xl border border-[#DDE3E7] bg-white text-sm font-bold text-primary shadow-sm",
						children: initials
					}), /* @__PURE__ */ jsxs("span", { children: [/* @__PURE__ */ jsx("span", {
						className: "block text-sm font-bold leading-tight text-[#1F2528]",
						children: review.author
					}), /* @__PURE__ */ jsx("span", {
						className: "mt-1 flex gap-0.5 text-primary",
						children: Array.from({ length: review.rating }).map((_, idx) => /* @__PURE__ */ jsx(Star, {
							weight: "fill",
							className: "size-3.5"
						}, idx))
					})] })]
				}), /* @__PURE__ */ jsx(Quotes, {
					weight: "fill",
					className: "size-7 shrink-0 text-primary/75"
				})]
			}),
			/* @__PURE__ */ jsx("p", {
				className: "text-sm font-medium leading-6 text-[#1F2528]/80",
				children: review.text[language]
			}),
			/* @__PURE__ */ jsxs("a", {
				href: review.sourceUrl,
				target: "_blank",
				rel: "noreferrer",
				tabIndex: isDuplicate ? -1 : void 0,
				className: "mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-[#DDE3E7] bg-white px-4 py-2 text-xs font-bold text-[#1F2528] shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/35 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/25 active:translate-y-[1px]",
				children: [sourceLabel, /* @__PURE__ */ jsx(ArrowRight, {
					weight: "bold",
					className: "size-3.5"
				})]
			})
		]
	});
}
//#endregion
export { ReviewsSection };
