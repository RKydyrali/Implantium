import { n as useLanguage } from "./useLanguage-D1hkxYkq.js";
import { t as cn } from "./utils-DVvWhTIj.js";
import { a as StaggerItem, c as clinicContact, g as Button, i as Stagger, l as getWhatsAppUrl, n as MotionListItem, o as TextReveal, r as Reveal, s as BookingModal, u as hasContactValue, y as content } from "../entry-server.js";
import { t as DentalParallaxBackground } from "./DentalParallaxBackground-BqYR4s3Q.js";
import { n as CompactDoctorCardSkeleton } from "./DoctorSkeletons-BGIYgWVM.js";
import { n as usePublicDoctors, t as DoctorPhoto } from "./DoctorPhoto-DOksaJFy.js";
import { n as useSeo, t as getSiteOrigin } from "./useSeo-BpLXIewB.js";
import { t as services } from "./services-D-OeEqLJ.js";
import { i as buildServiceJsonLd, n as buildClinicJsonLd, o as getServiceSeo, r as buildFaqJsonLd, t as buildBreadcrumbJsonLd } from "./seo-rlBEYM3X.js";
import { i as AccordionTrigger, n as AccordionContent, r as AccordionItem, t as Accordion } from "./accordion-C0Sf2kTr.js";
import * as React from "react";
import { Suspense, lazy, useCallback, useEffect, useRef, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, CalendarCheck, CaretLeft, CaretRight, Check, Clock, FirstAidKit, Heartbeat, Phone, ShieldCheck, Smiley, Sparkle, Tooth, WhatsappLogo } from "@phosphor-icons/react";
//#region src/components/ui/card.tsx
var Card = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", {
	ref,
	className: cn("rounded-lg border bg-card text-card-foreground shadow-sm", className),
	...props
}));
Card.displayName = "Card";
var CardHeader = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", {
	ref,
	className: cn("flex flex-col space-y-1.5 p-6", className),
	...props
}));
CardHeader.displayName = "CardHeader";
var CardTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", {
	ref,
	className: cn("text-2xl font-semibold leading-none tracking-tight", className),
	...props
}));
CardTitle.displayName = "CardTitle";
var CardDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
CardDescription.displayName = "CardDescription";
var CardContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", {
	ref,
	className: cn("p-6 pt-0", className),
	...props
}));
CardContent.displayName = "CardContent";
var CardFooter = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", {
	ref,
	className: cn("flex items-center p-6 pt-0", className),
	...props
}));
CardFooter.displayName = "CardFooter";
//#endregion
//#region src/components/common/CompactHorizontalDoctorCard.tsx
var CARD_HEIGHT = "h-[11.75rem]";
function CompactHorizontalDoctorCard({ doctor, language, className }) {
	const experience = getDoctorExperienceLine(doctor, language);
	return /* @__PURE__ */ jsx(Card, {
		className: cn("h-full overflow-hidden rounded-[1.2rem] border-border/70 bg-white shadow-[0_16px_42px_rgba(68,45,34,0.06)]", className),
		children: /* @__PURE__ */ jsxs("div", {
			className: cn("flex", CARD_HEIGHT),
			children: [/* @__PURE__ */ jsx("div", {
				className: "relative h-full w-36 shrink-0 overflow-hidden bg-secondary",
				children: /* @__PURE__ */ jsx(DoctorPhoto, {
					doctor,
					language,
					className: "absolute inset-0 size-full object-cover object-top"
				})
			}), /* @__PURE__ */ jsxs("div", {
				className: "flex min-w-0 flex-1 flex-col justify-center gap-2 p-5",
				children: [
					/* @__PURE__ */ jsx("h3", {
						className: "line-clamp-2 text-base font-bold leading-snug text-foreground",
						children: doctor.name[language]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "line-clamp-2 text-sm leading-relaxed text-muted-foreground",
						children: doctor.specialty[language]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "line-clamp-1 text-sm font-medium text-muted-foreground",
						children: experience
					})
				]
			})]
		})
	});
}
function getDoctorExperienceLine(doctor, language) {
	if (typeof doctor.experienceYears === "number" && doctor.experienceYears > 0) return language === "ru" ? `${doctor.experienceYears} лет опыта` : `${doctor.experienceYears} жылдық тәжірибесі бар`;
	const firstSentence = doctor.description[language].split(".")[0]?.trim();
	return firstSentence ? `${firstSentence}.` : language === "ru" ? "Специалист" : "Маман";
}
//#endregion
//#region src/components/ui/image-slider.tsx
function ImageSlider({ beforeImage, afterImage, beforeLabel = "Before", afterLabel = "After", className }) {
	const [sliderPosition, setSliderPosition] = useState(50);
	const [isDragging, setIsDragging] = useState(false);
	const containerRef = useRef(null);
	const handleMove = useCallback((clientX) => {
		if (!containerRef.current) return;
		const rect = containerRef.current.getBoundingClientRect();
		setSliderPosition(Math.max(0, Math.min(clientX - rect.left, rect.width)) / rect.width * 100);
	}, []);
	const onMouseDown = (e) => {
		setIsDragging(true);
		if ("clientX" in e) handleMove(e.clientX);
		else handleMove(e.touches[0].clientX);
	};
	const onMouseUp = () => setIsDragging(false);
	const onMouseMove = (e) => {
		if (isDragging) handleMove(e.clientX);
	};
	const onTouchMove = (e) => {
		if (isDragging) handleMove(e.touches[0].clientX);
	};
	useEffect(() => {
		const handleGlobalMouseUp = () => setIsDragging(false);
		const handleGlobalMouseMove = (e) => {
			if (isDragging) handleMove(e.clientX);
		};
		if (isDragging) {
			window.addEventListener("mouseup", handleGlobalMouseUp);
			window.addEventListener("mousemove", handleGlobalMouseMove);
		}
		return () => {
			window.removeEventListener("mouseup", handleGlobalMouseUp);
			window.removeEventListener("mousemove", handleGlobalMouseMove);
		};
	}, [isDragging, handleMove]);
	return /* @__PURE__ */ jsxs("div", {
		ref: containerRef,
		className: cn("relative aspect-[4/3] w-full overflow-hidden rounded-xl select-none bg-secondary", className),
		onMouseMove,
		onMouseDown,
		onMouseUp,
		onTouchMove,
		onTouchStart: onMouseDown,
		onTouchEnd: onMouseUp,
		children: [
			/* @__PURE__ */ jsx("img", {
				src: afterImage,
				alt: afterLabel,
				className: "absolute inset-0 size-full object-cover object-[center_42%]",
				draggable: false
			}),
			/* @__PURE__ */ jsx("div", {
				className: "absolute inset-0 overflow-hidden border-r-2 border-white/80 shadow-[4px_0_24px_rgba(0,0,0,0.25)]",
				style: { width: `${sliderPosition}%` },
				children: /* @__PURE__ */ jsx("img", {
					src: beforeImage,
					alt: beforeLabel,
					className: "absolute inset-0 h-full object-cover object-center",
					style: {
						width: `${1e4 / sliderPosition}%`,
						maxWidth: "none"
					},
					draggable: false
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "pointer-events-none absolute inset-x-3 top-3 z-10 flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ jsx("span", {
					className: "rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-primary shadow-sm backdrop-blur",
					children: beforeLabel
				}), /* @__PURE__ */ jsx("span", {
					className: "rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-primary shadow-sm backdrop-blur",
					children: afterLabel
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "absolute bottom-0 top-0 z-20 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)]",
				style: { left: `${sliderPosition}%` },
				children: /* @__PURE__ */ jsx("div", {
					className: "absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[3px] border-white bg-primary text-white shadow-xl transition-transform hover:scale-110 active:scale-95 cursor-ew-resize",
					children: /* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-center gap-0.5",
						children: [/* @__PURE__ */ jsx(CaretLeft, {
							weight: "bold",
							className: "size-4"
						}), /* @__PURE__ */ jsx(CaretRight, {
							weight: "bold",
							className: "size-4"
						})]
					})
				})
			})
		]
	});
}
//#endregion
//#region src/components/services/ServiceDetailTemplate.tsx
var IconMap = {
	CalendarCheck,
	Check,
	Clock,
	FirstAidKit,
	Heartbeat,
	ShieldCheck,
	Smiley,
	Sparkle,
	Tooth
};
var CrownVeneerComparison = lazy(() => import("./CrownVeneerComparison-BUQ98bO_.js").then((module) => ({ default: module.CrownVeneerComparison })));
var DentureTypesEducation = lazy(() => import("./DentureTypesEducation-BtLpV6CI.js").then((module) => ({ default: module.DentureTypesEducation })));
var OrthopedicSectionNav = lazy(() => import("./OrthopedicSectionNav-DoRjMlKL.js").then((module) => ({ default: module.OrthopedicSectionNav })));
var detailCopy = {
	ru: {
		home: "Главная",
		service: "Услуги",
		suitableTitle: "Кому подходит услуга",
		processTitle: "Как проходит лечение",
		advantagesTitle: "Преимущества",
		doctorsTitle: "Наши специалисты",
		allDoctors: "Смотреть всех врачей",
		faqTitle: "Частые вопросы",
		beforeAfterTitle: "До и после",
		moreCases: "Смотреть больше",
		learnMore: "Узнать больше",
		phoneCaption: "Позвоните нам",
		whatsappCaption: "Ответим быстро",
		phonePending: "Телефон скоро появится",
		whatsappPending: "WhatsApp скоро появится",
		readyTitle: "Готовы восстановить уверенность в своей улыбке?",
		readyText: "Запишитесь на бесплатную консультацию и получите персональный план лечения.",
		consultationNote: "Только консультация бесплатная, 3D рентген платный",
		naturalResultTitle: "Естественный результат",
		naturalResultText: "Прогнозируемый и безопасный результат на долгие годы.",
		fallbackFaq: [
			{
				question: "Больно ли проходит процедура?",
				answer: "Процедура проводится с комфортным обезболиванием по показаниям, врач заранее объясняет каждый этап."
			},
			{
				question: "Сколько длится лечение?",
				answer: "Срок зависит от услуги и клинической ситуации. Ориентир врач назовет после диагностики."
			},
			{
				question: "Есть ли противопоказания?",
				answer: "Да, они оцениваются индивидуально на консультации с учетом состояния здоровья и снимков."
			}
		]
	},
	kk: {
		home: "Басты бет",
		service: "Қызметтер",
		suitableTitle: "Қызмет кімге арналған",
		processTitle: "Ем қалай өтеді",
		advantagesTitle: "Артықшылықтары",
		doctorsTitle: "Біздің мамандар",
		allDoctors: "Барлық дәрігерлерді көру",
		faqTitle: "Жиі қойылатын сұрақтар",
		beforeAfterTitle: "Дейін және кейін",
		moreCases: "Көбірек көру",
		learnMore: "Толығырақ",
		phoneCaption: "Бізге қоңырау шалыңыз",
		whatsappCaption: "Тез жауап береміз",
		phonePending: "Телефон кейін қосылады",
		whatsappPending: "WhatsApp кейін қосылады",
		readyTitle: "Күлкіңізге сенімділікті қайтаруға дайынсыз ба?",
		readyText: "Тегін консультацияға жазылып, жеке ем жоспарын алыңыз.",
		consultationNote: "Тек кеңес алу тегін, 3D рентген ақылы",
		naturalResultTitle: "Табиғи нәтиже",
		naturalResultText: "Ұзақ жылдарға болжамды әрі қауіпсіз нәтиже.",
		fallbackFaq: [
			{
				question: "Процедура ауырта ма?",
				answer: "Көрсетілім бойынша жайлы жансыздандыру жасалады, дәрігер әр кезеңді алдын ала түсіндіреді."
			},
			{
				question: "Ем қанша уақыт алады?",
				answer: "Мерзім қызмет түрі мен клиникалық жағдайға байланысты. Нақты бағдар диагностикадан кейін айтылады."
			},
			{
				question: "Қарсы көрсетілімдер бар ма?",
				answer: "Иә, олар консультацияда денсаулық жағдайы мен суреттерге қарап жеке бағаланады."
			}
		]
	}
};
function ServiceDetailTemplate({ service, doctors, doctorsLoading, language }) {
	const t = content[language];
	const copy = detailCopy[language];
	const seo = getServiceSeo(service);
	const serviceFaq = getFaqItems(service, language);
	const hasPhone = hasContactValue(clinicContact.phoneHref);
	const hasWhatsapp = hasContactValue(clinicContact.whatsappUrl);
	return /* @__PURE__ */ jsxs("main", {
		className: "flex-1 overflow-hidden bg-[#fdfaf7]",
		children: [
			/* @__PURE__ */ jsxs("section", {
				className: "relative isolate overflow-hidden border-b border-border/70 bg-[#f6f9fb] px-4 pt-24 pb-10 md:px-8 md:pt-32 md:pb-16 lg:min-h-[720px]",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "absolute inset-0 z-0",
					children: [
						/* @__PURE__ */ jsx("img", {
							src: service.heroImage,
							alt: "",
							"aria-hidden": "true",
							className: "size-full object-cover object-[66%_center] opacity-55 md:object-[72%_center] md:opacity-100",
							loading: "eager",
							fetchPriority: "high",
							decoding: "async"
						}),
						/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[linear-gradient(90deg,#f8fbfd_0%,#f8fbfd_32%,rgba(248,251,253,0.92)_48%,rgba(248,251,253,0.54)_66%,rgba(248,251,253,0.12)_84%,rgba(248,251,253,0)_100%)]" }),
						/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.82)_0%,rgba(255,255,255,0.42)_46%,#f6f9fb_100%)]" }),
						/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(164,58,40,0.08),transparent_32%)]" })
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "relative z-10 mx-auto max-w-[1360px]",
					children: [/* @__PURE__ */ jsxs("nav", {
						className: "mb-8 flex flex-wrap items-center gap-2 text-xs font-medium text-muted-foreground md:mb-10",
						children: [
							/* @__PURE__ */ jsx(Link, {
								to: "/",
								className: "transition-colors hover:text-primary",
								children: copy.home
							}),
							/* @__PURE__ */ jsx("span", { children: "/" }),
							/* @__PURE__ */ jsx("a", {
								href: "/#services",
								className: "transition-colors hover:text-primary",
								children: copy.service
							}),
							/* @__PURE__ */ jsx("span", { children: "/" }),
							/* @__PURE__ */ jsx("span", {
								className: "text-foreground/70",
								children: service.title[language]
							})
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "grid min-h-[520px] items-center gap-10 lg:grid-cols-[0.56fr_0.44fr] lg:gap-16",
						children: [/* @__PURE__ */ jsxs(Reveal, {
							className: "max-w-3xl py-2 md:py-6",
							children: [
								/* @__PURE__ */ jsx(TextReveal, { children: /* @__PURE__ */ jsxs("h1", {
									className: "font-display max-w-[10ch] text-5xl font-normal leading-[0.95] text-[#23201f] sm:text-6xl lg:text-7xl",
									children: [service.title[language], /* @__PURE__ */ jsx("span", {
										className: "mt-1 block text-primary",
										children: service.heroAccent[language]
									})]
								}) }),
								/* @__PURE__ */ jsxs("p", {
									className: "mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg",
									children: [
										service.shortDescription[language],
										" ",
										service.explanation[language]
									]
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-4 max-w-2xl text-sm font-medium leading-7 text-[#52657B] md:text-base",
									children: seo.intro[language]
								}),
								/* @__PURE__ */ jsx("div", {
									className: "mt-8 grid gap-4 sm:grid-cols-2",
									children: service.heroHighlights.map((item) => /* @__PURE__ */ jsx(MiniFeature, {
										item,
										language
									}, item.title.ru))
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mt-8 flex flex-wrap items-center gap-3 sm:gap-4",
									children: [/* @__PURE__ */ jsx(BookingModal, { children: /* @__PURE__ */ jsxs(Button, {
										size: "lg",
										className: "group h-12 shrink-0 rounded-full bg-primary px-5 text-sm font-bold text-white shadow-[0_18px_38px_rgba(164,58,40,0.22)] transition-all hover:-translate-y-0.5 hover:bg-primary/90 active:translate-y-[1px] sm:h-14 sm:px-8",
										children: [t.common.bookConsultation, /* @__PURE__ */ jsx(ArrowRight, {
											weight: "bold",
											className: "ml-2 size-4 transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
										})]
									}) }), /* @__PURE__ */ jsx(Button, {
										asChild: true,
										variant: "outline",
										size: "lg",
										className: "group h-12 shrink-0 rounded-full border-primary/15 bg-white px-5 text-sm font-bold text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:bg-secondary active:translate-y-[1px] sm:h-14 sm:px-8",
										children: /* @__PURE__ */ jsxs("a", {
											href: "#service-process",
											children: [copy.learnMore, /* @__PURE__ */ jsx(ArrowRight, {
												weight: "fill",
												className: "size-4 text-primary transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
											})]
										})
									})]
								}),
								/* @__PURE__ */ jsxs("p", {
									className: "mt-6 inline-flex items-center gap-2 text-xs font-medium text-muted-foreground",
									children: [/* @__PURE__ */ jsx(ShieldCheck, {
										weight: "fill",
										className: "size-4 text-primary"
									}), copy.consultationNote]
								})
							]
						}), /* @__PURE__ */ jsx("div", {
							"aria-hidden": "true",
							className: "hidden lg:block"
						})]
					})]
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				id: "service-process",
				className: "relative isolate overflow-hidden bg-white px-4 py-10 md:px-8 md:py-14",
				children: [/* @__PURE__ */ jsx(DentalParallaxBackground, { surface: "service-process" }), /* @__PURE__ */ jsxs("div", {
					className: "relative z-10 mx-auto grid max-w-[1360px] gap-10 lg:grid-cols-[0.62fr_1.38fr] lg:gap-12",
					children: [/* @__PURE__ */ jsxs(Reveal, { children: [/* @__PURE__ */ jsx("h2", {
						className: "font-display text-3xl font-normal text-foreground md:text-4xl",
						children: copy.suitableTitle
					}), /* @__PURE__ */ jsx(Stagger, {
						className: "mt-6 grid gap-4",
						children: service.suitableFor[language].map((item) => /* @__PURE__ */ jsxs(StaggerItem, {
							className: "flex items-center gap-3 text-sm leading-relaxed text-muted-foreground",
							children: [/* @__PURE__ */ jsx("span", {
								className: "flex size-6 shrink-0 items-center justify-center rounded-full border border-primary/15 bg-[#fff8f3] text-primary",
								children: /* @__PURE__ */ jsx(Check, {
									weight: "bold",
									className: "size-3.5"
								})
							}), /* @__PURE__ */ jsx("span", { children: item })]
						}, item))
					})] }), /* @__PURE__ */ jsxs(Reveal, {
						className: "border-t border-border/70 pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12",
						children: [/* @__PURE__ */ jsx("h2", {
							className: "font-display text-3xl font-normal text-foreground md:text-4xl",
							children: copy.processTitle
						}), /* @__PURE__ */ jsx(Stagger, {
							className: "mt-7 grid gap-5 sm:grid-cols-2 xl:grid-cols-4",
							children: service.processDetails.map((step, index) => /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsx(ProcessStep, {
								step,
								index,
								language
							}) }, step.title.ru))
						})]
					})]
				})]
			}),
			service.id === "crowns" && /* @__PURE__ */ jsxs("section", {
				className: "relative isolate overflow-hidden bg-white px-4 py-8 md:px-8 md:py-12",
				children: [/* @__PURE__ */ jsx(DentalParallaxBackground, { surface: "service-advantages" }), /* @__PURE__ */ jsx("div", {
					className: "relative z-10 mx-auto max-w-[1360px] space-y-6",
					children: /* @__PURE__ */ jsxs(Suspense, {
						fallback: null,
						children: [
							/* @__PURE__ */ jsx(OrthopedicSectionNav, { language }),
							/* @__PURE__ */ jsx(CrownVeneerComparison, { language }),
							/* @__PURE__ */ jsx("div", {
								id: "prosthetics",
								className: "scroll-mt-28",
								children: /* @__PURE__ */ jsx(DentureTypesEducation, { language })
							})
						]
					})
				})]
			}),
			service.id === "dentures" && /* @__PURE__ */ jsxs("section", {
				className: "relative isolate overflow-hidden bg-white px-4 py-8 md:px-8 md:py-12",
				children: [/* @__PURE__ */ jsx(DentalParallaxBackground, { surface: "service-advantages" }), /* @__PURE__ */ jsx("div", {
					className: "relative z-10 mx-auto max-w-[1360px]",
					children: /* @__PURE__ */ jsx(Suspense, {
						fallback: null,
						children: /* @__PURE__ */ jsx(DentureTypesEducation, { language })
					})
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "relative isolate overflow-hidden bg-white px-4 py-8 md:px-8 md:py-12",
				children: [/* @__PURE__ */ jsx(DentalParallaxBackground, { surface: "service-advantages" }), /* @__PURE__ */ jsxs(Reveal, {
					className: "relative z-10 mx-auto max-w-[1360px] border-t border-border/70 pt-10",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "font-display text-3xl font-normal text-foreground md:text-4xl",
						children: copy.advantagesTitle
					}), /* @__PURE__ */ jsx(Stagger, {
						className: "mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-5",
						children: service.advantages.map((item) => /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsx(AdvantageCard, {
							item,
							language
						}) }, item.title.ru))
					})]
				})]
			}),
			(doctorsLoading || doctors.length > 0) && /* @__PURE__ */ jsxs("section", {
				className: "relative isolate overflow-hidden bg-white px-4 py-8 md:px-8 md:py-12",
				children: [/* @__PURE__ */ jsx(DentalParallaxBackground, { surface: "service-doctors" }), /* @__PURE__ */ jsxs("div", {
					className: "relative z-10 mx-auto max-w-[1360px]",
					children: [/* @__PURE__ */ jsxs(Reveal, {
						className: "mb-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
						children: [/* @__PURE__ */ jsx("h2", {
							className: "font-display text-3xl font-normal text-foreground md:text-4xl",
							children: copy.doctorsTitle
						}), /* @__PURE__ */ jsxs("a", {
							href: "/doctors",
							className: "group inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80",
							children: [copy.allDoctors, /* @__PURE__ */ jsx(ArrowRight, {
								weight: "bold",
								className: "size-4 transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
							})]
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "grid items-stretch gap-5 lg:grid-cols-3",
						children: /* @__PURE__ */ jsx(AnimatePresence, {
							initial: false,
							children: doctorsLoading ? Array.from({ length: 3 }).map((_, index) => /* @__PURE__ */ jsx(MotionListItem, {
								index,
								className: "h-full",
								children: /* @__PURE__ */ jsx(CompactDoctorCardSkeleton, { variant: "horizontal" })
							}, `service-doctor-skeleton-${index}`)) : doctors.slice(0, 3).map((doctor, index) => /* @__PURE__ */ jsx(MotionListItem, {
								index,
								className: "h-full",
								interactive: true,
								children: /* @__PURE__ */ jsx(CompactHorizontalDoctorCard, {
									doctor,
									language
								})
							}, doctor.id))
						})
					})]
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "relative isolate overflow-hidden bg-white px-4 py-8 md:px-8 md:py-14",
				children: [/* @__PURE__ */ jsx(DentalParallaxBackground, { surface: "service-faq" }), /* @__PURE__ */ jsxs(Reveal, {
					className: "relative z-10 mx-auto grid max-w-[1360px] gap-10 border-t border-border/70 pt-10 lg:grid-cols-[0.9fr_1.1fr]",
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
						className: "font-display mb-6 text-3xl font-normal text-foreground md:text-4xl",
						children: copy.faqTitle
					}), /* @__PURE__ */ jsx(Accordion, {
						type: "single",
						collapsible: true,
						className: "grid gap-3",
						children: serviceFaq.map((faqItem, index) => /* @__PURE__ */ jsxs(AccordionItem, {
							value: `faq-${index}`,
							className: "rounded-xl border border-border/70 bg-white px-4 shadow-sm",
							children: [/* @__PURE__ */ jsx(AccordionTrigger, {
								className: "text-left text-sm font-semibold text-foreground hover:text-primary hover:no-underline",
								children: faqItem.question[language]
							}), /* @__PURE__ */ jsx(AccordionContent, {
								className: "text-sm leading-relaxed text-muted-foreground",
								children: faqItem.answer[language]
							})]
						}, `${faqItem.question.ru}-${index}`))
					})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
						className: "mb-6",
						children: /* @__PURE__ */ jsx("h2", {
							className: "font-display text-3xl font-normal text-foreground md:text-4xl",
							children: copy.beforeAfterTitle
						})
					}), /* @__PURE__ */ jsx("div", {
						className: cn("grid gap-5", (service.beforeAfterCases ?? []).some((c) => c.useSlider) ? "grid-cols-1" : "sm:grid-cols-2"),
						children: (service.beforeAfterCases ?? []).map((caseItem) => /* @__PURE__ */ jsxs(Card, {
							className: "overflow-hidden rounded-[1.2rem] border-border/70 bg-white p-3 shadow-[0_16px_42px_rgba(68,45,34,0.06)]",
							children: [caseItem.useSlider ? /* @__PURE__ */ jsx(ImageSlider, {
								beforeImage: caseItem.beforeImage,
								afterImage: caseItem.afterImage,
								beforeLabel: language === "ru" ? "До" : "Дейін",
								afterLabel: language === "ru" ? "После" : "Кейін"
							}) : /* @__PURE__ */ jsxs("div", {
								className: "grid gap-1 overflow-hidden rounded-xl sm:grid-cols-2",
								children: [/* @__PURE__ */ jsx(ResultImage, {
									src: caseItem.beforeImage,
									alt: copy.beforeAfterTitle,
									label: language === "ru" ? "До" : "Дейін"
								}), /* @__PURE__ */ jsx(ResultImage, {
									src: caseItem.afterImage,
									alt: caseItem.title[language],
									label: language === "ru" ? "После" : "Кейін"
								})]
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-4 text-center text-sm font-medium text-muted-foreground",
								children: caseItem.title[language]
							})]
						}, caseItem.title.ru))
					})] })]
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "relative isolate overflow-hidden bg-white px-4 pb-12 md:px-8 md:pb-16",
				children: [/* @__PURE__ */ jsx(DentalParallaxBackground, { surface: "service-cta" }), /* @__PURE__ */ jsxs("div", {
					className: "relative z-10 mx-auto max-w-[1360px]",
					children: [/* @__PURE__ */ jsxs(Reveal, {
						className: "grid min-w-0 gap-5 overflow-hidden rounded-[1.7rem] border border-primary/10 bg-[linear-gradient(135deg,#fff8f3,#fffdfb)] p-5 shadow-[0_18px_55px_rgba(68,45,34,0.08)] md:p-7 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex min-w-0 items-center gap-5",
							children: [/* @__PURE__ */ jsx("span", {
								className: "hidden size-20 shrink-0 items-center justify-center rounded-full border border-primary/10 bg-white text-primary shadow-sm sm:flex",
								children: /* @__PURE__ */ jsx(Phone, {
									weight: "fill",
									className: "size-8"
								})
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
								className: "font-display text-2xl font-normal leading-tight text-foreground md:text-3xl",
								children: copy.readyTitle
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base",
								children: copy.readyText
							})] })]
						}), /* @__PURE__ */ jsxs("div", {
							className: "grid min-w-0 gap-3 lg:grid-cols-[auto_auto_auto] lg:items-center",
							children: [
								/* @__PURE__ */ jsx(ContactPill, {
									icon: /* @__PURE__ */ jsx(Phone, {
										weight: "fill",
										className: "size-5"
									}),
									href: clinicContact.phoneHref,
									title: clinicContact.phoneDisplay ?? copy.phonePending,
									caption: copy.phoneCaption,
									disabled: !hasPhone
								}),
								/* @__PURE__ */ jsx(ContactPill, {
									icon: /* @__PURE__ */ jsx(WhatsappLogo, {
										weight: "fill",
										className: "size-5"
									}),
									href: getWhatsAppUrl(language),
									title: hasWhatsapp ? "WhatsApp" : copy.whatsappPending,
									caption: copy.whatsappCaption,
									disabled: !hasWhatsapp,
									external: true
								}),
								/* @__PURE__ */ jsx(BookingModal, { children: /* @__PURE__ */ jsxs(Button, {
									size: "lg",
									className: "group h-14 w-full min-w-0 justify-center rounded-full bg-primary px-7 text-sm font-bold text-white shadow-[0_18px_38px_rgba(164,58,40,0.22)] transition-all hover:-translate-y-0.5 hover:bg-primary/90 active:translate-y-[1px] lg:w-auto",
									children: [t.common.bookConsultation, /* @__PURE__ */ jsx(ArrowRight, {
										weight: "bold",
										className: "ml-2 size-4 transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
									})]
								}) })
							]
						})]
					}), /* @__PURE__ */ jsxs("p", {
						className: "mt-4 flex items-center justify-center gap-2 text-xs font-medium text-muted-foreground",
						children: [/* @__PURE__ */ jsx(ShieldCheck, {
							weight: "fill",
							className: "size-4 text-primary"
						}), copy.consultationNote]
					})]
				})]
			})
		]
	});
}
function MiniFeature({ item, language }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-center gap-3",
		children: [/* @__PURE__ */ jsx("span", {
			className: "flex size-10 shrink-0 items-center justify-center rounded-2xl border border-primary/10 bg-white text-primary shadow-sm",
			children: /* @__PURE__ */ jsx(IconMap[item.iconName] ?? Tooth, {
				weight: "duotone",
				className: "size-5"
			})
		}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
			className: "text-sm font-bold leading-snug text-foreground",
			children: item.title[language]
		}), /* @__PURE__ */ jsx("p", {
			className: "mt-1 text-sm leading-relaxed text-muted-foreground",
			children: item.text[language]
		})] })]
	});
}
function ProcessStep({ step, index, language }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "relative text-center",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "mx-auto flex size-20 items-center justify-center rounded-full border border-primary/15 bg-white text-primary shadow-sm",
				children: /* @__PURE__ */ jsx(IconMap[step.iconName] ?? Tooth, {
					weight: "duotone",
					className: "size-9"
				})
			}),
			/* @__PURE__ */ jsxs("p", {
				className: "mt-5 text-sm font-bold text-foreground",
				children: [
					index + 1,
					". ",
					step.title[language]
				]
			}),
			/* @__PURE__ */ jsx("p", {
				className: "mx-auto mt-2 max-w-[14rem] text-xs leading-relaxed text-muted-foreground",
				children: step.text[language]
			})
		]
	});
}
function AdvantageCard({ item, language }) {
	return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(Card, {
		className: "h-full rounded-[1.15rem] border-border/70 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_18px_45px_rgba(164,58,40,0.08)]",
		children: [
			/* @__PURE__ */ jsx("span", {
				className: "mx-auto flex size-12 items-center justify-center rounded-2xl bg-[#fff8f3] text-primary",
				children: /* @__PURE__ */ jsx(IconMap[item.iconName] ?? ShieldCheck, {
					weight: "duotone",
					className: "size-7"
				})
			}),
			/* @__PURE__ */ jsx("h3", {
				className: "mt-5 text-sm font-bold leading-snug text-foreground",
				children: item.title[language]
			}),
			/* @__PURE__ */ jsx("p", {
				className: "mt-2 text-xs leading-relaxed text-muted-foreground",
				children: item.text[language]
			})
		]
	}) });
}
function ResultImage({ src, alt, label }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "relative min-h-[8.5rem] overflow-hidden bg-secondary",
		children: [/* @__PURE__ */ jsx("img", {
			src,
			alt,
			className: "size-full object-cover",
			loading: "lazy",
			decoding: "async"
		}), /* @__PURE__ */ jsx("span", {
			className: "absolute left-3 top-3 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-primary shadow-sm backdrop-blur",
			children: label
		})]
	});
}
function ContactPill({ icon, href, title, caption, disabled, external = false }) {
	const titleLines = title.split(",").map((line) => line.trim()).filter(Boolean);
	const contentNode = /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx("span", {
		className: "flex size-10 shrink-0 items-center justify-center rounded-full bg-white text-primary shadow-sm",
		children: icon
	}), /* @__PURE__ */ jsxs("span", {
		className: "min-w-0",
		children: [titleLines.map((line) => /* @__PURE__ */ jsx("span", {
			className: "block truncate text-[13px] font-bold leading-tight text-foreground",
			children: line
		}, line)), /* @__PURE__ */ jsx("span", {
			className: "block truncate text-xs font-medium text-muted-foreground",
			children: caption
		})]
	})] });
	if (!disabled && href) return /* @__PURE__ */ jsx("a", {
		href,
		className: "flex h-14 w-full min-w-0 items-center gap-3 rounded-full border border-border/70 bg-white px-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/20 active:translate-y-[1px] lg:w-auto",
		...external ? {
			target: "_blank",
			rel: "noopener noreferrer"
		} : {},
		children: contentNode
	});
	return /* @__PURE__ */ jsx("button", {
		type: "button",
		disabled: true,
		className: "flex h-14 w-full min-w-0 cursor-not-allowed items-center gap-3 rounded-full border border-border/70 bg-white/75 px-4 opacity-80 shadow-sm lg:w-auto",
		children: contentNode
	});
}
function getFaqItems(service, language) {
	if (service.faq.length > 0) return service.faq;
	return detailCopy[language].fallbackFaq.map((item) => ({
		question: {
			ru: language === "ru" ? item.question : detailCopy.ru.fallbackFaq[0].question,
			kk: language === "kk" ? item.question : detailCopy.kk.fallbackFaq[0].question
		},
		answer: {
			ru: language === "ru" ? item.answer : detailCopy.ru.fallbackFaq[0].answer,
			kk: language === "kk" ? item.answer : detailCopy.kk.fallbackFaq[0].answer
		}
	}));
}
//#endregion
//#region src/pages/ServiceDetail.tsx
function ServiceDetail() {
	const { id } = useParams();
	const { language } = useLanguage();
	const { doctors, isLoading: doctorsLoading } = usePublicDoctors();
	const service = services.find((item) => item.id === id);
	const serviceId = service?.id;
	const seo = service ? getServiceSeo(service) : void 0;
	const siteOrigin = getSiteOrigin();
	const servicePath = serviceId ? `/services/${serviceId}` : "/404";
	const serviceDoctors = serviceId ? doctors.filter((doctor) => doctor.serviceIds.includes(serviceId)) : [];
	useSeo({
		title: seo?.title[language] ?? "Страница не найдена | IMPLANTIUM",
		description: seo?.description[language] ?? "Страница не найдена на сайте стоматологической клиники IMPLANTIUM.",
		keywords: seo?.keywords ?? [],
		path: servicePath,
		noindex: !service,
		jsonLd: service && seo ? [
			buildClinicJsonLd(siteOrigin, services.map((item) => item.title.ru)),
			buildServiceJsonLd(siteOrigin, servicePath, service, seo, language),
			buildBreadcrumbJsonLd(siteOrigin, [
				{
					name: language === "ru" ? "Главная" : "Басты бет",
					path: "/"
				},
				{
					name: language === "ru" ? "Услуги" : "Қызметтер",
					path: "/#services"
				},
				{
					name: service.title[language],
					path: servicePath
				}
			]),
			...service.faq.length > 0 ? [buildFaqJsonLd(service.faq, language)] : []
		] : []
	});
	if (!service) return /* @__PURE__ */ jsx(Navigate, {
		to: "/404",
		replace: true
	});
	return /* @__PURE__ */ jsx(ServiceDetailTemplate, {
		service,
		doctors: serviceDoctors,
		doctorsLoading,
		language
	});
}
//#endregion
export { ServiceDetail as default };
