import { n as useLanguage } from "./useLanguage-D1hkxYkq.js";
import { t as cn } from "./utils-DVvWhTIj.js";
import { _ as landingCopy, d as Dialog, f as DialogContent, g as Button, h as DialogTitle, m as DialogHeader, n as MotionListItem, o as TextReveal, p as DialogDescription, r as Reveal, s as BookingModal, v as landingServices } from "../entry-server.js";
import { t as DentalParallaxBackground } from "./DentalParallaxBackground-BqYR4s3Q.js";
import { n as CompactDoctorCardSkeleton } from "./DoctorSkeletons-BGIYgWVM.js";
import { n as usePublicDoctors, t as DoctorPhoto } from "./DoctorPhoto-DOksaJFy.js";
import { n as useSeo, t as getSiteOrigin } from "./useSeo-BpLXIewB.js";
import { t as services } from "./services-D-OeEqLJ.js";
import { t as Badge } from "./badge-DifIX8yv.js";
import { n as buildClinicJsonLd, s as homeSeo } from "./seo-rlBEYM3X.js";
import { i as AccordionTrigger, n as AccordionContent, r as AccordionItem, t as Accordion } from "./accordion-C0Sf2kTr.js";
import { Suspense, lazy, memo, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useDragControls, useReducedMotion } from "framer-motion";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, CheckCircle, FirstAidKit, HandHeart, Heartbeat, ShieldCheck, Smiley, Sparkle, Tooth, X } from "@phosphor-icons/react";
import { X as X$1 } from "lucide-react";
import { createPortal } from "react-dom";
//#region src/assets/hero-clinical-implant.png
var hero_clinical_implant_default = "/assets/hero-clinical-implant-Dx0V7BDd.png";
//#endregion
//#region src/components/sections/Hero.tsx
function Hero() {
	const { language } = useLanguage();
	const t = landingCopy[language];
	const reduceMotion = useReducedMotion();
	return /* @__PURE__ */ jsxs("section", {
		className: "relative isolate overflow-hidden bg-white pt-[5.4rem]",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "absolute inset-0 -z-10",
			children: [
				/* @__PURE__ */ jsx("img", {
					src: hero_clinical_implant_default,
					alt: t.hero.imageAlt,
					className: "absolute inset-0 h-full w-full object-cover object-[95%_center] sm:object-[76%_center] md:object-[66%_center] lg:object-[62%_center]",
					loading: "eager",
					fetchPriority: "high",
					decoding: "async"
				}),
				/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-white/60 backdrop-blur-[4px] sm:bg-white/10 sm:backdrop-blur-0" }),
				/* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 left-0 w-full bg-gradient-to-r from-white/95 via-white/80 to-transparent sm:w-[60%] md:w-[50%]" })
			]
		}), /* @__PURE__ */ jsx("div", {
			className: "section-shell pb-8 pt-4 sm:pt-12 md:pb-12 md:pt-16 lg:pb-20",
			children: /* @__PURE__ */ jsx("div", {
				className: "flex items-center min-h-[500px] sm:min-h-[580px] lg:min-h-[640px]",
				children: /* @__PURE__ */ jsxs(motion.div, {
					initial: reduceMotion ? { opacity: 0 } : {
						opacity: 0,
						x: -20
					},
					animate: {
						opacity: 1,
						x: 0
					},
					transition: {
						duration: reduceMotion ? .12 : .7,
						ease: [
							.16,
							1,
							.3,
							1
						]
					},
					className: "relative z-10 flex max-w-2xl flex-col items-start gap-6 sm:gap-8",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "flex flex-col gap-1",
							children: /* @__PURE__ */ jsx(TextReveal, { children: /* @__PURE__ */ jsx("h1", {
								className: "text-[2.6rem] font-medium leading-[1.15] tracking-tight text-[#1F2528] sm:text-[3.8rem] md:text-[4.4rem] lg:text-[4.8rem]",
								children: language === "kk" ? /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsxs("span", {
									className: "font-inter font-normal",
									children: [
										"Ақтаудағы ",
										/* @__PURE__ */ jsx("br", {}),
										"заманауи ",
										/* @__PURE__ */ jsx("br", {}),
										"стоматология ",
										/* @__PURE__ */ jsx("br", {}),
										"Сау әрі әдемі ",
										/* @__PURE__ */ jsx("br", {}),
										"күлкіге ",
										/* @__PURE__ */ jsx("br", {})
									]
								}), /* @__PURE__ */ jsx("span", {
									className: "font-display italic text-primary",
									children: t.hero.lineThree
								})] }) : /* @__PURE__ */ jsxs(Fragment$1, { children: [
									"Современная ",
									/* @__PURE__ */ jsx("br", {}),
									"стоматология ",
									/* @__PURE__ */ jsx("br", {}),
									"в Актау — ",
									/* @__PURE__ */ jsx("br", {}),
									"путь к ",
									/* @__PURE__ */ jsx("br", {}),
									/* @__PURE__ */ jsx("span", {
										className: "font-display italic text-primary",
										children: "здоровой улыбке"
									})
								] })
							}) })
						}),
						/* @__PURE__ */ jsxs(motion.div, {
							initial: reduceMotion ? { opacity: 0 } : {
								opacity: 0,
								y: 10
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								delay: reduceMotion ? 0 : .2,
								duration: reduceMotion ? .12 : .5
							},
							className: "flex max-w-[22rem] items-center gap-3 rounded-[1.5rem] border border-white/80 bg-white/85 p-3 pr-5 shadow-[0_12px_45px_rgba(31,37,40,0.06)] backdrop-blur-xl sm:max-w-[28rem] sm:gap-4 sm:rounded-[2rem] sm:p-4 sm:pr-6",
							children: [/* @__PURE__ */ jsx("div", {
								className: "flex size-11 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-[#F4E7E4] text-primary sm:size-14",
								children: /* @__PURE__ */ jsx(HandHeart, {
									weight: "bold",
									className: "size-5 sm:size-7"
								})
							}), /* @__PURE__ */ jsx("p", {
								className: "text-[13px] font-semibold leading-snug text-[#343D42] sm:text-sm sm:font-medium sm:leading-relaxed",
								children: t.hero.subheadline
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex w-full flex-col gap-4 pt-2 sm:w-auto sm:flex-row",
							children: [/* @__PURE__ */ jsx(BookingModal, { children: /* @__PURE__ */ jsxs(Button, {
								size: "lg",
								className: "group accent-button-shadow h-16 rounded-[1.25rem] bg-primary px-10 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#8F2F25] active:translate-y-[1px]",
								children: [t.hero.primaryCta, /* @__PURE__ */ jsx(ArrowRight, {
									weight: "bold",
									className: "ml-2 size-4 opacity-70 transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
								})]
							}) }), /* @__PURE__ */ jsx(Button, {
								asChild: true,
								variant: "outline",
								size: "lg",
								className: "group h-16 rounded-[1.25rem] border-white/50 bg-white/70 px-10 text-base font-bold text-[#1F2528] shadow-[0_12px_30px_rgba(31,37,40,0.03)] backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-white active:translate-y-[1px]",
								children: /* @__PURE__ */ jsxs("a", {
									href: "/#services",
									children: [t.hero.secondaryCta, /* @__PURE__ */ jsx(ArrowRight, {
										weight: "bold",
										className: "ml-2 size-4 text-[#606A70] transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
									})]
								})
							})]
						})
					]
				})
			})
		})]
	});
}
//#endregion
//#region src/assets/service-icons/implants.png
var implants_default = "/assets/implants-BRuLdyXy.png";
//#endregion
//#region src/assets/service-icons/crowns.png
var crowns_default = "/assets/crowns-Csa108Su.png";
//#endregion
//#region src/assets/service-icons/treatment.png
var treatment_default = "/assets/treatment-Bl_pEKQx.png";
//#endregion
//#region src/assets/service-icons/extraction.png
var extraction_default = "/assets/extraction-D70BWU8d.png";
//#endregion
//#region src/assets/service-icons/cleaning.png
var cleaning_default = "/assets/cleaning-D8zkHm_I.png";
//#endregion
//#region src/assets/service-icons/braces.png
var braces_default = "/assets/braces-fZyjWHns.png";
//#endregion
//#region src/assets/service-icons/dentures.png
var dentures_default = "/assets/dentures-h5g1-q4x.png";
//#endregion
//#region src/components/sections/MobileServiceSheet.tsx
var sheetTitleId = "mobile-service-sheet-title";
var sheetDescriptionId = "mobile-service-sheet-description";
var CLOSE_DRAG_OFFSET = 96;
var CLOSE_VELOCITY = 720;
var EXPAND_DRAG_OFFSET = -48;
var EXPAND_VELOCITY = -420;
var COLLAPSE_DRAG_OFFSET = 56;
var COLLAPSE_VELOCITY = 420;
function MobileServiceSheet({ open, onOpenChange, expanded, onExpandedChange, closeLabel, expandLabel, collapseLabel, title, description, children, className }) {
	const dragControls = useDragControls();
	const reduceMotion = useReducedMotion();
	useEffect(() => {
		if (!open) return;
		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = previousOverflow;
		};
	}, [open]);
	const sheetTransition = reduceMotion ? { duration: 0 } : {
		duration: .26,
		ease: [
			.32,
			.72,
			0,
			1
		]
	};
	const overlayTransition = reduceMotion ? { duration: 0 } : { duration: .18 };
	const sheet = /* @__PURE__ */ jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(motion.button, {
		type: "button",
		"aria-label": closeLabel,
		className: "fixed inset-0 z-[100] bg-[#1F2528]/50",
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		transition: overlayTransition,
		onClick: () => onOpenChange(false)
	}), /* @__PURE__ */ jsxs(motion.div, {
		role: "dialog",
		"aria-modal": "true",
		"aria-labelledby": sheetTitleId,
		"aria-describedby": sheetDescriptionId,
		className: cn("fixed inset-x-0 bottom-0 z-[100] flex will-change-transform flex-col overflow-hidden rounded-t-[1.75rem] border border-b-0 border-[#DDE3E7] bg-white shadow-[0_28px_90px_rgba(31,37,40,0.16)] transition-[height] duration-300 ease-out", expanded ? "h-[92dvh]" : "h-[70dvh]", className),
		initial: { y: "100%" },
		animate: { y: 0 },
		exit: { y: "100%" },
		transition: sheetTransition,
		drag: "y",
		dragControls,
		dragListener: false,
		dragConstraints: {
			top: 0,
			bottom: 0
		},
		dragElastic: {
			top: .08,
			bottom: .28
		},
		onDragEnd: (_, info) => {
			const { offset, velocity } = info;
			if (offset.y > CLOSE_DRAG_OFFSET || velocity.y > CLOSE_VELOCITY) {
				if (!expanded || offset.y > CLOSE_DRAG_OFFSET * 1.35 || velocity.y > CLOSE_VELOCITY * 1.15) {
					onOpenChange(false);
					return;
				}
				onExpandedChange(false);
				return;
			}
			if (offset.y < EXPAND_DRAG_OFFSET || velocity.y < EXPAND_VELOCITY) {
				onExpandedChange(true);
				return;
			}
			if (offset.y > COLLAPSE_DRAG_OFFSET || velocity.y > COLLAPSE_VELOCITY) onExpandedChange(false);
		},
		children: [
			/* @__PURE__ */ jsx("button", {
				type: "button",
				"aria-label": expanded ? collapseLabel : expandLabel,
				"aria-expanded": expanded,
				onPointerDown: (event) => dragControls.start(event),
				className: "flex h-10 w-full shrink-0 cursor-grab touch-none items-center justify-center text-[#8A949B] active:cursor-grabbing",
				children: /* @__PURE__ */ jsx("span", { className: "h-1.5 w-14 rounded-full bg-[#C8D3D9]" })
			}),
			/* @__PURE__ */ jsx("h2", {
				id: sheetTitleId,
				className: "sr-only",
				children: title
			}),
			/* @__PURE__ */ jsx("p", {
				id: sheetDescriptionId,
				className: "sr-only",
				children: description
			}),
			/* @__PURE__ */ jsx("button", {
				type: "button",
				"aria-label": closeLabel,
				onClick: () => onOpenChange(false),
				className: "absolute right-4 top-4 rounded-sm text-[#8A949B] opacity-80 transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
				children: /* @__PURE__ */ jsx(X$1, { className: "size-4" })
			}),
			/* @__PURE__ */ jsx(motion.div, {
				className: "min-h-0 flex-1 overflow-y-auto overscroll-contain",
				children
			})
		]
	})] }) });
	if (typeof document === "undefined") return null;
	return createPortal(sheet, document.body);
}
//#endregion
//#region src/components/sections/ServicesConsultationPrompt.tsx
var PROMPT_DELAY_MS = 3500;
var AUTO_HIDE_MS = 8e3;
function ServicesConsultationPrompt() {
	const { language } = useLanguage();
	const copy = landingCopy[language].services;
	const reduceMotion = useReducedMotion();
	const showTimerRef = useRef(null);
	const [hasShown, setHasShown] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const [isBookingOpen, setIsBookingOpen] = useState(false);
	useEffect(() => {
		if (hasShown || isVisible) return;
		const clearShowTimer = () => {
			if (showTimerRef.current) {
				window.clearTimeout(showTimerRef.current);
				showTimerRef.current = null;
			}
		};
		const showPrompt = () => {
			setHasShown(true);
			setIsVisible(true);
		};
		const servicesSection = document.getElementById("services");
		if (!servicesSection) return;
		const isServicesReached = () => {
			const rect = servicesSection.getBoundingClientRect();
			return rect.top <= window.innerHeight * .65 && rect.bottom >= window.innerHeight * .25;
		};
		const schedulePrompt = () => {
			if (showTimerRef.current) return;
			showTimerRef.current = window.setTimeout(showPrompt, PROMPT_DELAY_MS);
		};
		const syncPromptTimer = () => {
			if (isServicesReached()) {
				schedulePrompt();
				return;
			}
			clearShowTimer();
		};
		if (typeof IntersectionObserver === "undefined") {
			window.addEventListener("scroll", syncPromptTimer, { passive: true });
			window.addEventListener("resize", syncPromptTimer);
			syncPromptTimer();
			return () => {
				clearShowTimer();
				window.removeEventListener("scroll", syncPromptTimer);
				window.removeEventListener("resize", syncPromptTimer);
			};
		}
		let isIntersecting = false;
		const handleViewportChange = () => {
			if (!isIntersecting) {
				clearShowTimer();
				return;
			}
			syncPromptTimer();
		};
		window.addEventListener("scroll", handleViewportChange, { passive: true });
		window.addEventListener("resize", handleViewportChange);
		const observer = new IntersectionObserver(([entry]) => {
			isIntersecting = entry.isIntersecting;
			handleViewportChange();
		});
		observer.observe(servicesSection);
		handleViewportChange();
		return () => {
			clearShowTimer();
			window.removeEventListener("scroll", handleViewportChange);
			window.removeEventListener("resize", handleViewportChange);
			observer.disconnect();
		};
	}, [hasShown, isVisible]);
	useEffect(() => {
		if (!isVisible || isBookingOpen) return;
		const hideTimer = window.setTimeout(() => {
			setIsVisible(false);
		}, AUTO_HIDE_MS);
		return () => window.clearTimeout(hideTimer);
	}, [isBookingOpen, isVisible]);
	const handleDismiss = () => {
		setHasShown(true);
		setIsVisible(false);
	};
	const handleBookingOpenChange = (open) => {
		setIsBookingOpen(open);
		if (open) setIsVisible(false);
	};
	const handleOpenBooking = () => {
		setIsBookingOpen(true);
		setIsVisible(false);
	};
	const prompt = /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(AnimatePresence, { children: isVisible && /* @__PURE__ */ jsxs(motion.aside, {
		"aria-live": "polite",
		initial: reduceMotion ? { opacity: 0 } : {
			opacity: 0,
			y: 12,
			scale: .97
		},
		animate: {
			opacity: 1,
			y: 0,
			scale: 1
		},
		exit: reduceMotion ? { opacity: 0 } : {
			opacity: 0,
			y: 8,
			scale: .97
		},
		transition: {
			duration: reduceMotion ? .12 : .25,
			ease: "easeOut"
		},
		className: "fixed bottom-24 right-4 z-[60] w-[calc(100%-2rem)] max-w-[18rem] rounded-2xl border border-primary/20 bg-white p-4 shadow-[0_12px_40px_rgba(166,58,45,0.12)] md:bottom-8 md:right-8",
		children: [/* @__PURE__ */ jsx("button", {
			type: "button",
			onClick: handleDismiss,
			className: "absolute right-2 top-2 flex size-7 items-center justify-center rounded-full text-[#8A949B] transition-colors hover:bg-[#F4F8FB] hover:text-[#1F2528]",
			"aria-label": language === "ru" ? "Закрыть" : "Жабу",
			children: /* @__PURE__ */ jsx(X, {
				weight: "bold",
				className: "size-3.5"
			})
		}), /* @__PURE__ */ jsxs("div", {
			className: "pr-4",
			children: [
				/* @__PURE__ */ jsx("h3", {
					className: "text-sm font-bold leading-tight text-[#1F2528]",
					children: copy.promptTitle
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-1.5 text-[13px] leading-relaxed text-[#606A70]",
					children: copy.promptText
				}),
				/* @__PURE__ */ jsxs("button", {
					type: "button",
					onClick: handleOpenBooking,
					className: "mt-3.5 flex items-center gap-1.5 text-xs font-bold text-primary transition-colors hover:text-[#8F2F25]",
					children: [copy.book, /* @__PURE__ */ jsx(ArrowRight, {
						weight: "bold",
						className: "size-3"
					})]
				})
			]
		})]
	}) }), /* @__PURE__ */ jsx(BookingModal, {
		open: isBookingOpen,
		onOpenChange: handleBookingOpenChange
	})] });
	if (typeof document === "undefined") return null;
	return createPortal(prompt, document.body);
}
//#endregion
//#region src/hooks/useMediaQuery.ts
function useMediaQuery(query) {
	const [matches, setMatches] = useState(() => {
		if (typeof window === "undefined") return false;
		return window.matchMedia(query).matches;
	});
	useEffect(() => {
		const mediaQuery = window.matchMedia(query);
		const handleChange = () => setMatches(mediaQuery.matches);
		handleChange();
		mediaQuery.addEventListener("change", handleChange);
		return () => mediaQuery.removeEventListener("change", handleChange);
	}, [query]);
	return matches;
}
//#endregion
//#region src/components/sections/ServicesPreview.tsx
var IconMap = {
	Tooth,
	ShieldCheck,
	Smiley,
	FirstAidKit,
	Sparkle,
	Heartbeat
};
var ServiceIconAssets = {
	implants: implants_default,
	crowns: crowns_default,
	treatment: treatment_default,
	"tooth-extraction": extraction_default,
	cleaning: cleaning_default,
	braces: braces_default,
	dentures: dentures_default
};
function ServicesPreview() {
	const { language } = useLanguage();
	const isMobileSheet = useMediaQuery("(max-width: 639px)");
	const reduceMotion = useReducedMotion();
	const { doctors, isLoading: doctorsLoading } = usePublicDoctors();
	const t = landingCopy[language];
	const [selectedServiceId, setSelectedServiceId] = useState(null);
	const [isServiceDialogOpen, setIsServiceDialogOpen] = useState(false);
	const [isServiceSheetExpanded, setIsServiceSheetExpanded] = useState(false);
	const [isBookingOpen, setIsBookingOpen] = useState(false);
	const selectedService = useMemo(() => selectedServiceId ? landingServices.find((service) => service.id === selectedServiceId) : void 0, [selectedServiceId]);
	const handleServiceClick = (serviceId) => {
		setSelectedServiceId(serviceId);
		setIsServiceSheetExpanded(false);
		setIsServiceDialogOpen(true);
	};
	const handleServiceDialogOpenChange = (open) => {
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
		collapse: language === "ru" ? "Свернуть информацию об услуге" : "Қызмет ақпаратын жию"
	};
	return /* @__PURE__ */ jsxs("section", {
		id: "services",
		className: "clinical-section relative isolate overflow-hidden px-4 py-12 md:px-8 md:py-16",
		children: [/* @__PURE__ */ jsx(DentalParallaxBackground, { surface: "home-services" }), /* @__PURE__ */ jsxs("div", {
			className: "relative z-10 mx-auto max-w-[1320px]",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between",
					children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h2", {
						className: "font-display text-3xl font-normal text-[#1F2528] md:text-4xl",
						children: t.services.title
					}) })
				}),
				/* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4",
					children: landingServices.map((service) => {
						const Icon = IconMap[service.iconName] ?? Tooth;
						const isActive = isServiceDialogOpen && selectedServiceId === service.id;
						const generatedIcon = ServiceIconAssets[service.serviceId];
						return /* @__PURE__ */ jsxs(motion.button, {
							type: "button",
							"aria-haspopup": "dialog",
							"aria-expanded": isActive,
							onClick: () => handleServiceClick(service.id),
							whileHover: reduceMotion ? void 0 : {
								y: -4,
								scale: 1.006
							},
							whileTap: reduceMotion ? void 0 : {
								y: -1,
								scale: .992
							},
							transition: {
								type: "spring",
								stiffness: 320,
								damping: 26
							},
							className: cn("group grid min-h-[5.75rem] grid-cols-[auto_1fr] items-center gap-3 rounded-2xl border bg-white p-4 text-left shadow-[0_12px_34px_rgba(31,37,40,0.04)] transition-[border-color,background-color,box-shadow] duration-200 ease-out hover:border-[#C8D3D9] hover:shadow-[0_18px_46px_rgba(31,37,40,0.06)] sm:min-h-[6.6rem] sm:gap-4 sm:p-5", isActive ? "border-primary/55 bg-[#F4E7E4]/45 text-[#1F2528] shadow-[0_18px_44px_rgba(166,58,45,0.08)]" : "border-[#DDE3E7] text-[#606A70]"),
							children: [/* @__PURE__ */ jsx("span", {
								className: cn("flex size-11 shrink-0 items-center justify-center rounded-2xl border transition-[border-color,background-color,color,transform] duration-200 sm:size-12 motion-reduce:transform-none", isActive ? "border-primary/20 bg-white text-primary" : "border-[#E8EDF0] bg-[#FAFBFC] text-[#6E7B83] group-hover:scale-[1.03] group-hover:text-primary"),
								children: /* @__PURE__ */ jsx(ServiceTileIcon, {
									src: generatedIcon,
									title: service.shortTitle[language],
									fallbackIcon: Icon
								})
							}), /* @__PURE__ */ jsxs("span", {
								className: "min-w-0 overflow-hidden",
								children: [/* @__PURE__ */ jsx("span", {
									className: "block break-words text-xs font-bold leading-snug text-[#1F2528] sm:text-sm",
									children: service.shortTitle[language]
								}), /* @__PURE__ */ jsx("span", {
									className: "mt-1 hidden text-xs leading-snug text-[#606A70] sm:line-clamp-2 sm:text-sm",
									children: service.summary[language]
								})]
							})]
						}, service.id);
					})
				}),
				selectedService && isServiceDialogOpen && (isMobileSheet ? /* @__PURE__ */ jsx(MobileServiceSheet, {
					open: isServiceDialogOpen,
					onOpenChange: handleServiceDialogOpenChange,
					expanded: isServiceSheetExpanded,
					onExpandedChange: setIsServiceSheetExpanded,
					closeLabel: serviceSheetLabels.close,
					expandLabel: serviceSheetLabels.expand,
					collapseLabel: serviceSheetLabels.collapse,
					title: selectedService.title[language],
					description: selectedService.summary[language],
					children: /* @__PURE__ */ jsx(ServiceSheetBody, {
						service: selectedService,
						language,
						doctors,
						doctorsLoading,
						onBook: handleBookFromService,
						deferHeavyContent: true
					})
				}) : /* @__PURE__ */ jsx(Dialog, {
					open: isServiceDialogOpen,
					onOpenChange: handleServiceDialogOpenChange,
					children: /* @__PURE__ */ jsxs(DialogContent, {
						overlayClassName: "bg-[#1F2528]/50",
						className: "max-h-[calc(100dvh-3rem)] overflow-hidden p-0 sm:max-w-[1120px] sm:rounded-[2rem]",
						closeLabel: serviceSheetLabels.close,
						children: [/* @__PURE__ */ jsxs(DialogHeader, {
							className: "sr-only",
							children: [/* @__PURE__ */ jsx(DialogTitle, { children: selectedService.title[language] }), /* @__PURE__ */ jsx(DialogDescription, { children: selectedService.summary[language] })]
						}), /* @__PURE__ */ jsx("div", {
							className: "max-h-[calc(100dvh-3rem)] overflow-y-auto",
							children: /* @__PURE__ */ jsx(ServiceSheetBody, {
								service: selectedService,
								language,
								doctors,
								doctorsLoading,
								onBook: handleBookFromService
							})
						})]
					})
				})),
				/* @__PURE__ */ jsx(BookingModal, {
					open: isBookingOpen,
					onOpenChange: setIsBookingOpen,
					children: /* @__PURE__ */ jsx("button", {
						type: "button",
						className: "sr-only",
						children: t.services.book
					})
				}),
				/* @__PURE__ */ jsx(ServicesConsultationPrompt, {})
			]
		})]
	});
}
var ServiceSheetBody = memo(function ServiceSheetBody({ service, language, doctors, doctorsLoading, onBook, deferHeavyContent = false }) {
	return /* @__PURE__ */ jsx("div", {
		className: "p-4 sm:max-h-[calc(100dvh-3rem)] sm:p-6 lg:p-7",
		children: /* @__PURE__ */ jsxs("div", {
			className: "grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8",
			children: [/* @__PURE__ */ jsx(ServiceMainPanel, {
				service,
				language,
				onBook
			}), /* @__PURE__ */ jsx(ServiceSheetExtraSections, {
				service,
				language,
				doctors,
				doctorsLoading,
				deferMount: deferHeavyContent
			})]
		})
	});
});
function ServiceSheetExtraSections({ service, language, doctors, doctorsLoading, deferMount = false }) {
	const t = landingCopy[language];
	const [readyServiceId, setReadyServiceId] = useState(null);
	useEffect(() => {
		if (!deferMount) return;
		let secondFrame = 0;
		const firstFrame = requestAnimationFrame(() => {
			secondFrame = requestAnimationFrame(() => setReadyServiceId(service.id));
		});
		return () => {
			cancelAnimationFrame(firstFrame);
			if (secondFrame) cancelAnimationFrame(secondFrame);
		};
	}, [deferMount, service.id]);
	const isReady = !deferMount || readyServiceId === service.id;
	const serviceDoctors = useMemo(() => doctors.filter((doctor) => doctor.serviceIds.includes(service.serviceId)).slice(0, 2), [doctors, service.serviceId]);
	if (!isReady) return /* @__PURE__ */ jsxs("div", {
		className: "grid content-start gap-5",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ jsx("div", { className: "motion-skeleton h-48 rounded-[1.35rem]" }), /* @__PURE__ */ jsx("div", { className: "motion-skeleton h-36 rounded-[1.35rem]" })]
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "grid content-start gap-5",
		children: [/* @__PURE__ */ jsxs("section", {
			"aria-labelledby": "landing-specialists-title",
			children: [/* @__PURE__ */ jsx("h4", {
				id: "landing-specialists-title",
				className: "font-display mb-4 text-2xl font-normal text-[#1F2528]",
				children: t.services.specialistsTitle
			}), /* @__PURE__ */ jsx("div", {
				className: cn("grid gap-4", doctorsLoading || serviceDoctors.length > 1 ? "sm:grid-cols-2" : "sm:grid-cols-1"),
				children: /* @__PURE__ */ jsx(AnimatePresence, {
					initial: false,
					children: doctorsLoading ? Array.from({ length: 2 }).map((_, index) => /* @__PURE__ */ jsx(MotionListItem, {
						index,
						children: /* @__PURE__ */ jsx(CompactDoctorCardSkeleton, {})
					}, `service-sheet-doctor-skeleton-${index}`)) : serviceDoctors.map((doctor, index) => /* @__PURE__ */ jsx(MotionListItem, {
						index,
						interactive: true,
						children: /* @__PURE__ */ jsxs("article", {
							"data-doctor-card": doctor.id,
							className: "clinical-card-soft overflow-hidden rounded-[1.35rem]",
							children: [/* @__PURE__ */ jsx("div", {
								className: "aspect-square bg-[#EEF2F4]",
								children: /* @__PURE__ */ jsx(DoctorPhoto, {
									doctor,
									language,
									initialsClassName: "size-14 text-base"
								})
							}), /* @__PURE__ */ jsxs("div", {
								className: "p-5",
								children: [
									/* @__PURE__ */ jsx("p", {
										className: "mb-2 text-xs font-bold uppercase tracking-[0.12em] text-primary",
										children: getDoctorExperience(doctor, language)
									}),
									/* @__PURE__ */ jsx("h5", {
										className: "mb-2 text-lg font-bold leading-tight text-[#1F2528]",
										children: doctor.name[language]
									}),
									/* @__PURE__ */ jsx("p", {
										className: "mb-3 text-xs font-bold uppercase tracking-[0.08em] text-[#606A70]",
										children: doctor.specialty[language]
									}),
									/* @__PURE__ */ jsx("p", {
										className: "line-clamp-4 text-sm leading-relaxed text-[#606A70]",
										children: doctor.description[language]
									})
								]
							})]
						})
					}, doctor.id))
				})
			})]
		}), /* @__PURE__ */ jsxs("section", {
			"aria-labelledby": "landing-faq-title",
			className: "rounded-[1.35rem] border border-[#DDE3E7] bg-white px-4 shadow-[0_18px_55px_rgba(31,37,40,0.045)]",
			children: [
				/* @__PURE__ */ jsx("h4", {
					id: "landing-faq-title",
					className: "sr-only",
					children: t.services.faqTitle
				}),
				/* @__PURE__ */ jsx("div", {
					className: "border-b border-[#DDE3E7] py-4",
					children: /* @__PURE__ */ jsx("p", {
						className: "font-display text-2xl font-normal text-[#1F2528]",
						children: t.services.faqTitle
					})
				}),
				/* @__PURE__ */ jsx(Accordion, {
					type: "single",
					collapsible: true,
					children: service.faqs.map((faq, idx) => /* @__PURE__ */ jsxs(AccordionItem, {
						value: `${service.id}-${idx}`,
						className: "border-[#DDE3E7]",
						children: [/* @__PURE__ */ jsx(AccordionTrigger, {
							className: "text-left text-sm font-bold text-[#1F2528] hover:text-primary hover:no-underline",
							children: faq.question[language]
						}), /* @__PURE__ */ jsx(AccordionContent, {
							className: "text-sm leading-relaxed text-[#606A70]",
							children: faq.answer[language]
						})]
					}, faq.question.ru))
				})
			]
		})]
	});
}
function ServiceTileIcon({ src, title, fallbackIcon: FallbackIcon }) {
	const [hasImageError, setHasImageError] = useState(false);
	if (!src || hasImageError) return /* @__PURE__ */ jsx(FallbackIcon, {
		weight: "duotone",
		className: "size-7 sm:size-8"
	});
	return /* @__PURE__ */ jsx("img", {
		src,
		alt: "",
		"aria-hidden": "true",
		title,
		className: "size-8 object-contain sm:size-9",
		onError: () => setHasImageError(true)
	});
}
function ServiceMainPanel({ service, language, onBook }) {
	const t = landingCopy[language];
	const ActiveIcon = IconMap[service.iconName] ?? Tooth;
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col gap-7",
		children: [
			/* @__PURE__ */ jsxs("div", { children: [
				/* @__PURE__ */ jsx(Badge, {
					variant: "secondary",
					className: "mb-4 rounded-full border border-primary/15 bg-[#F4E7E4]/60 px-4 py-1.5 text-primary hover:bg-[#F4E7E4]/60",
					children: service.shortTitle[language]
				}),
				/* @__PURE__ */ jsx("h3", {
					className: "font-display mb-4 text-3xl font-normal leading-tight text-[#1F2528] md:text-5xl",
					children: service.title[language]
				}),
				/* @__PURE__ */ jsx("p", {
					className: "max-w-xl text-base leading-8 text-[#606A70]",
					children: service.summary[language]
				})
			] }),
			/* @__PURE__ */ jsx("div", {
				className: "grid gap-3",
				children: service.bullets[language].map((bullet) => /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ jsx("span", {
						className: "flex size-6 shrink-0 items-center justify-center rounded-full border border-[#DDE3E7] bg-[#FAFBFC] text-primary",
						children: /* @__PURE__ */ jsx(CheckCircle, {
							weight: "fill",
							className: "size-4"
						})
					}), /* @__PURE__ */ jsx("span", {
						className: "text-sm font-semibold leading-relaxed text-[#1F2528]/80",
						children: bullet
					})]
				}, bullet))
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "rounded-[1.4rem] border border-[#DDE3E7] bg-[#FAFBFC] p-4 md:p-5",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "mb-4 flex items-center gap-3",
					children: [/* @__PURE__ */ jsx("span", {
						className: "flex size-11 items-center justify-center rounded-2xl bg-white text-primary shadow-[0_12px_30px_rgba(31,37,40,0.05)]",
						children: /* @__PURE__ */ jsx(ActiveIcon, {
							weight: "duotone",
							className: "size-6"
						})
					}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
						className: "text-xs font-bold uppercase tracking-[0.14em] text-primary",
						children: t.services.pricesTitle
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-1 text-xs text-[#8A949B]",
						children: t.services.consultationNote
					})] })]
				}), /* @__PURE__ */ jsx("div", {
					className: "divide-y divide-[#DDE3E7]",
					children: service.prices.map((price) => /* @__PURE__ */ jsxs("div", {
						className: "grid gap-2 py-3 sm:grid-cols-[1fr_auto] sm:items-center",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "text-sm font-medium leading-snug text-[#606A70]",
								children: price.label[language]
							}),
							/* @__PURE__ */ jsx("span", {
								className: "text-left text-base font-bold text-[#1F2528] sm:text-right",
								children: price.value[language]
							}),
							price.note && /* @__PURE__ */ jsx("span", {
								className: "text-xs font-semibold text-primary sm:col-span-2 sm:text-right",
								children: price.note[language]
							})
						]
					}, `${price.label.ru}-${price.value.ru}`))
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex flex-col gap-3 sm:flex-row",
				children: [/* @__PURE__ */ jsxs(Button, {
					onClick: onBook,
					className: "group accent-button-shadow inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-primary px-7 text-sm font-bold leading-none text-white transition-all hover:-translate-y-0.5 hover:bg-[#8F2F25] active:translate-y-[1px]",
					children: [/* @__PURE__ */ jsx("span", { children: t.services.book }), /* @__PURE__ */ jsx(ArrowRight, { className: "size-4 shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transform-none" })]
				}), /* @__PURE__ */ jsx(Button, {
					asChild: true,
					variant: "outline",
					className: "group h-14 rounded-2xl border-[#DDE3E7] bg-white px-7 text-sm font-bold text-[#1F2528] hover:border-[#C8D3D9] hover:bg-[#FAFBFC]",
					children: /* @__PURE__ */ jsx(Link, {
						to: `/services/${service.serviceId}`,
						children: t.services.details
					})
				})]
			})
		]
	});
}
function getDoctorExperience(doctor, language) {
	if (typeof doctor.experienceYears === "number" && doctor.experienceYears > 0) return language === "ru" ? `${doctor.experienceYears} лет` : `${doctor.experienceYears} жыл`;
	return doctor.description[language].match(/(?:Стаж работы|Опыт работы|Жұмыс тәжірибесі):?\s*([^..]+[.)]?)/i)?.[1]?.replace(/\.$/, "") ?? (language === "ru" ? "Опытный специалист" : "Тәжірибелі маман");
}
//#endregion
//#region src/pages/Home.tsx
var AboutClinic = lazy(() => import("./AboutClinic-BUyyXSkq.js").then((module) => ({ default: module.AboutClinic })));
var DoctorsSection = lazy(() => import("./DoctorsSection-7MLVI3Di.js").then((module) => ({ default: module.DoctorsSection })));
var ReviewsSection = lazy(() => import("./ReviewsSection-KaiiHPZb.js").then((module) => ({ default: module.ReviewsSection })));
var LocationSection = lazy(() => import("./LocationSection-CB8gSfpv.js").then((module) => ({ default: module.LocationSection })));
function Home() {
	const { language } = useLanguage();
	useSeo({
		title: homeSeo.title[language],
		description: homeSeo.description[language],
		keywords: homeSeo.keywords,
		path: "/",
		jsonLd: [buildClinicJsonLd(getSiteOrigin(), services.map((service) => service.title.ru))]
	});
	return /* @__PURE__ */ jsxs("main", {
		className: "flex-1 w-full overflow-hidden bg-[#F5F7F8]",
		children: [
			/* @__PURE__ */ jsx(Hero, {}),
			/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx(ServicesPreview, {}) }),
			/* @__PURE__ */ jsx(LazyPublicSection, { children: /* @__PURE__ */ jsx(AboutClinic, {}) }),
			/* @__PURE__ */ jsx(LazyPublicSection, { children: /* @__PURE__ */ jsx(DoctorsSection, {}) }),
			/* @__PURE__ */ jsx(LazyPublicSection, { children: /* @__PURE__ */ jsx(ReviewsSection, {}) }),
			/* @__PURE__ */ jsx(LazyPublicSection, { children: /* @__PURE__ */ jsx(LocationSection, {}) })
		]
	});
}
function LazyPublicSection({ children }) {
	return /* @__PURE__ */ jsx(Suspense, {
		fallback: null,
		children: /* @__PURE__ */ jsx(Reveal, { children })
	});
}
//#endregion
export { Home as default };
