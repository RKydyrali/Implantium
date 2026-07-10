import { t as cn } from "./utils-DVvWhTIj.js";
import { g as Button } from "../entry-server.js";
import { n as ToggleGroupItem, t as ToggleGroup } from "./toggle-group-B2Umr3J6.js";
import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { jsx, jsxs } from "react/jsx-runtime";
import { GlobeHemisphereWest, InstagramLogo, MapPin, Phone, WhatsappLogo } from "@phosphor-icons/react";
//#region src/pages/Visitka/components/ActionLink.tsx
function ActionLink({ label, href, external, icon: Icon }) {
	return /* @__PURE__ */ jsx(Button, {
		asChild: true,
		variant: "outline",
		className: "group h-[4.9rem] w-full justify-start rounded-full border-white/75 bg-[#fffaf3]/72 px-4 text-left text-[1.05rem] font-semibold text-[#3f3531] shadow-[inset_0_1px_0_rgba(255,255,255,0.88),0_20px_42px_rgba(76,50,36,0.12)] backdrop-blur-xl transition-[background-color,border-color,box-shadow,transform] hover:-translate-y-0.5 hover:border-white hover:bg-white/88 hover:text-[#342b28] active:translate-y-[1px] sm:h-[5.4rem] sm:px-5 sm:text-[1.18rem] [&_svg]:size-7",
		children: /* @__PURE__ */ jsxs("a", {
			href,
			target: external ? "_blank" : void 0,
			rel: external ? "noreferrer" : void 0,
			children: [/* @__PURE__ */ jsx("span", {
				className: "flex size-14 shrink-0 items-center justify-center rounded-full bg-[#a83d2b] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.24),0_10px_24px_rgba(142,47,35,0.22)] transition-transform duration-300 group-hover:scale-[1.04] sm:size-16",
				children: /* @__PURE__ */ jsx(Icon, {
					"data-icon": "inline-start",
					weight: "bold",
					"aria-hidden": "true"
				})
			}), /* @__PURE__ */ jsx("span", {
				className: "min-w-0 flex-1 whitespace-normal leading-tight",
				children: label
			})]
		})
	});
}
//#endregion
//#region src/pages/Visitka/components/FloatingAsset.tsx
function FloatingAsset({ src, alt, className, delay = 0, duration = 10, floatY = 18, floatX = 8, rotate = 5 }) {
	const shouldReduceMotion = useReducedMotion();
	return /* @__PURE__ */ jsx(motion.img, {
		src,
		alt,
		"aria-hidden": alt ? void 0 : "true",
		draggable: false,
		className: cn("pointer-events-none absolute z-[1] h-auto select-none will-change-transform [filter:drop-shadow(0_22px_34px_rgba(70,47,37,0.24))]", className),
		animate: shouldReduceMotion ? void 0 : {
			y: [
				0,
				-floatY,
				-floatY * .45,
				0
			],
			x: [
				0,
				floatX,
				-floatX * .35,
				0
			],
			rotate: [
				-rotate,
				rotate * .6,
				rotate,
				-rotate
			],
			scale: [
				1,
				1.025,
				1.01,
				1
			]
		},
		transition: shouldReduceMotion ? void 0 : {
			duration,
			delay,
			repeat: Infinity,
			ease: [
				.42,
				0,
				.58,
				1
			]
		}
	});
}
//#endregion
//#region src/pages/Visitka/components/LanguageToggle.tsx
function LanguageToggle({ value, onChange }) {
	return /* @__PURE__ */ jsxs(ToggleGroup, {
		type: "single",
		value,
		onValueChange: (next) => {
			if (next === "kk" || next === "ru") onChange(next);
		},
		variant: "outline",
		size: "sm",
		"aria-label": "Language",
		className: "rounded-full border border-white/70 bg-white/58 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.75),0_12px_24px_rgba(78,54,39,0.09)] backdrop-blur-xl",
		children: [/* @__PURE__ */ jsx(ToggleGroupItem, {
			value: "kk",
			"aria-label": "Қазақша",
			className: "h-9 min-w-11 rounded-full border-0 px-3 text-xs font-bold tracking-normal text-[#6f5f59] data-[state=on]:bg-[#a83d2b] data-[state=on]:text-white",
			children: "KZ"
		}), /* @__PURE__ */ jsx(ToggleGroupItem, {
			value: "ru",
			"aria-label": "Русский",
			className: "h-9 min-w-11 rounded-full border-0 px-3 text-xs font-bold tracking-normal text-[#6f5f59] data-[state=on]:bg-[#a83d2b] data-[state=on]:text-white",
			children: "RU"
		})]
	});
}
//#endregion
//#region src/pages/Visitka/content.ts
var links = {
	phone: "tel:+77027133939",
	whatsapp: `https://wa.me/77027133939?text=${encodeURIComponent("Здравствуйте! Хочу записаться на прием")}`,
	location: "https://2gis.kz/aktau/firm/70000001038002984/tab/reviews",
	instagram: "https://www.instagram.com/implantium.aktau",
	website: "https://implantium.kz"
};
var content = {
	kk: {
		metaTitle: "IMPLANTIUM | Ақтаудағы стоматологиялық клиника",
		kicker: "Dental clinic",
		titleLines: [
			"Ақтаудағы",
			"стоматологиялық",
			"клиника"
		],
		mission: "Біздің миссия — мүлтіксіз ем, үздіксіз дамуда.",
		actions: {
			call: {
				label: "Қоңырау шалу",
				href: links.phone
			},
			whatsapp: {
				label: "WhatsApp-қа жазу",
				href: links.whatsapp,
				external: true
			},
			location: {
				label: "Біз қайдамыз",
				href: links.location,
				external: true
			},
			instagram: {
				label: "Instagram",
				href: links.instagram,
				external: true
			},
			website: {
				label: "Сайтымыз",
				href: links.website,
				external: true
			}
		}
	},
	ru: {
		metaTitle: "IMPLANTIUM | Стоматологическая клиника в Актау",
		kicker: "Dental clinic",
		titleLines: [
			"Стоматологическая",
			"клиника в городе",
			"Актау"
		],
		mission: "Наша миссия — безупречное лечение и постоянное развитие.",
		actions: {
			call: {
				label: "Позвонить нам",
				href: links.phone
			},
			whatsapp: {
				label: "Написать в WhatsApp",
				href: links.whatsapp,
				external: true
			},
			location: {
				label: "Где мы находимся",
				href: links.location,
				external: true
			},
			instagram: {
				label: "Наш Instagram",
				href: links.instagram,
				external: true
			},
			website: {
				label: "Наш сайт",
				href: links.website,
				external: true
			}
		}
	}
};
//#endregion
//#region src/assets/generated/cream-dental-background.png
var cream_dental_background_default = "/assets/cream-dental-background-BbLai_LG.png";
//#endregion
//#region src/assets/generated/implant.png
var implant_default = "/assets/implant-CCSJ1HCq.png";
//#endregion
//#region src/assets/generated/implantium-logo-transparent.png
var implantium_logo_transparent_default = "/assets/implantium-logo-transparent-Dkgf2SCs.png";
//#endregion
//#region src/assets/generated/pearls.png
var pearls_default = "/assets/pearls-C3d2xeKT.png";
//#endregion
//#region src/assets/generated/tooth.png
var tooth_default = "/assets/tooth-D0bBLhgf.png";
//#endregion
//#region src/pages/Visitka/index.tsx
var STORAGE_KEY = "implantium-link-page-language";
function getInitialLanguage() {
	if (typeof window === "undefined") return "kk";
	const saved = window.localStorage.getItem(STORAGE_KEY);
	return saved === "ru" || saved === "kk" ? saved : "kk";
}
function Visitka() {
	const [language, setLanguage] = useState(getInitialLanguage);
	const shouldReduceMotion = useReducedMotion();
	const copy = content[language];
	const actions = useMemo(() => [
		{
			...copy.actions.call,
			icon: Phone
		},
		{
			...copy.actions.whatsapp,
			icon: WhatsappLogo
		},
		{
			...copy.actions.location,
			icon: MapPin
		},
		{
			...copy.actions.instagram,
			icon: InstagramLogo
		},
		{
			...copy.actions.website,
			icon: GlobeHemisphereWest
		}
	], [copy]);
	useEffect(() => {
		window.localStorage.setItem(STORAGE_KEY, language);
		document.documentElement.lang = language === "kk" ? "kk" : "ru";
		document.title = copy.metaTitle;
	}, [copy.metaTitle, language]);
	return /* @__PURE__ */ jsxs("main", {
		className: "relative isolate min-h-[100dvh] overflow-hidden bg-[#f5eee6] text-[#322927]",
		children: [
			/* @__PURE__ */ jsx("img", {
				src: cream_dental_background_default,
				alt: "",
				className: "absolute inset-0 -z-20 size-full object-cover object-center",
				loading: "eager",
				decoding: "async"
			}),
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,250,244,0.38),rgba(247,237,226,0.08)_48%,rgba(226,205,187,0.2))]" }),
			/* @__PURE__ */ jsx(FloatingAsset, {
				src: implant_default,
				alt: "",
				className: "right-[-6.2rem] top-[8.6rem] hidden w-[13rem] rotate-[14deg] opacity-90 sm:block sm:right-[calc(50%-25rem)] sm:top-[7.4rem] sm:w-[15rem] lg:right-[calc(50%-31rem)]",
				delay: .25,
				duration: 9,
				floatY: 22,
				floatX: 10,
				rotate: 7
			}),
			/* @__PURE__ */ jsx(FloatingAsset, {
				src: tooth_default,
				alt: "",
				className: "left-[-6.8rem] top-[15rem] w-[12rem] -rotate-[18deg] opacity-70 sm:left-[calc(50%-27rem)] sm:top-[17rem] sm:w-[14rem] lg:left-[calc(50%-34rem)]",
				delay: .8,
				duration: 10.5,
				floatY: 18,
				floatX: 8,
				rotate: 6
			}),
			/* @__PURE__ */ jsx(FloatingAsset, {
				src: pearls_default,
				alt: "",
				className: "bottom-[1.5rem] right-[-5.8rem] w-[13.5rem] opacity-85 sm:bottom-[2.5rem] sm:right-[calc(50%-27rem)] sm:w-[15rem] lg:right-[calc(50%-35rem)]",
				delay: 1.1,
				duration: 11,
				floatY: 20,
				floatX: 12,
				rotate: 5
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "relative z-10 mx-auto flex min-h-[100dvh] w-full max-w-[42rem] flex-col px-4 py-6 sm:px-8 sm:py-9",
				children: [/* @__PURE__ */ jsxs(motion.header, {
					className: "flex items-start justify-between gap-4",
					initial: shouldReduceMotion ? { opacity: 0 } : {
						opacity: 0,
						y: -14
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: shouldReduceMotion ? .1 : .55,
						ease: [
							.16,
							1,
							.3,
							1
						]
					},
					children: [/* @__PURE__ */ jsx("img", {
						src: implantium_logo_transparent_default,
						alt: "IMPLANTIUM Dental Clinic",
						className: "h-auto w-[13rem] mix-blend-multiply sm:w-[15rem]",
						loading: "eager",
						decoding: "async"
					}), /* @__PURE__ */ jsx(LanguageToggle, {
						value: language,
						onChange: setLanguage
					})]
				}), /* @__PURE__ */ jsxs(motion.div, {
					className: "mx-auto mt-16 flex w-full max-w-[32rem] flex-1 flex-col items-center text-center sm:mt-20",
					initial: shouldReduceMotion ? { opacity: 0 } : {
						opacity: 0,
						y: 18
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						delay: shouldReduceMotion ? 0 : .12,
						duration: shouldReduceMotion ? .1 : .65,
						ease: [
							.16,
							1,
							.3,
							1
						]
					},
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex flex-col items-center gap-4",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "text-sm font-semibold uppercase tracking-[0.26em] text-[#a34431]",
								children: copy.kicker
							}),
							/* @__PURE__ */ jsx("h1", {
								className: "w-full text-center text-[2.05rem] font-extrabold leading-[1.08] tracking-normal text-[#342c2a] sm:text-[2.9rem]",
								children: copy.titleLines.map((line) => /* @__PURE__ */ jsx("span", {
									className: "block",
									children: line
								}, line))
							}),
							/* @__PURE__ */ jsx("p", {
								className: "max-w-[24rem] text-balance text-[1.02rem] font-medium leading-relaxed text-[#4f4642] sm:text-[1.12rem]",
								children: copy.mission
							})
						]
					}), /* @__PURE__ */ jsx(motion.ul, {
						className: "mt-10 flex w-full flex-col gap-4 pb-5 sm:mt-12 sm:gap-5",
						initial: "hidden",
						animate: "visible",
						variants: {
							hidden: {},
							visible: { transition: {
								staggerChildren: shouldReduceMotion ? 0 : .08,
								delayChildren: shouldReduceMotion ? 0 : .28
							} }
						},
						children: actions.map((action) => /* @__PURE__ */ jsx(motion.li, {
							variants: {
								hidden: shouldReduceMotion ? { opacity: 0 } : {
									opacity: 0,
									y: 18
								},
								visible: {
									opacity: 1,
									y: 0
								}
							},
							transition: {
								duration: shouldReduceMotion ? .1 : .48,
								ease: [
									.16,
									1,
									.3,
									1
								]
							},
							children: /* @__PURE__ */ jsx(ActionLink, { ...action })
						}, action.href))
					})]
				})]
			})
		]
	});
}
//#endregion
export { Visitka as default };
