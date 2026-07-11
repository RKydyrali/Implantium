import { n as useLanguage } from "./useLanguage-D1hkxYkq.js";
import { a as StaggerItem, c as clinicContact, g as Button, i as Stagger, n as MotionListItem, o as TextReveal, r as Reveal, s as BookingModal, u as hasContactValue } from "../entry-server.js";
import { t as DentalParallaxBackground } from "./DentalParallaxBackground-BqYR4s3Q.js";
import { i as FeaturedDoctorSkeleton, r as DoctorsGridCardSkeleton } from "./DoctorSkeletons-BGIYgWVM.js";
import { n as usePublicDoctors, t as DoctorPhoto } from "./DoctorPhoto-DOksaJFy.js";
import { n as useSeo, t as getSiteOrigin } from "./useSeo-BpLXIewB.js";
import { t as services } from "./services-D-OeEqLJ.js";
import { a as doctorsSeo, n as buildClinicJsonLd, t as buildBreadcrumbJsonLd } from "./seo-rlBEYM3X.js";
import { Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, CheckCircle, Heartbeat, Phone, ShieldCheck, Tooth, UsersThree } from "@phosphor-icons/react";
//#region src/assets/doctors/hero-clinic-room.png
var hero_clinic_room_default = "/assets/hero-clinic-room-CSmWrkHT.png";
//#endregion
//#region src/pages/Doctors.tsx
var doctorPageCopy = {
	ru: {
		title: "Наши специалисты",
		eyebrow: "Врачи IMPLANTIUM",
		breadcrumbHome: "Главная",
		breadcrumbCurrent: "Врачи",
		intro: "На этой странице представлены специалисты клиники, их опыт, специализация и оказываемые услуги.",
		specialistsLabel: "специалистов",
		experienceLabel: "клинический опыт",
		directionsLabel: "направлений лечения",
		appointmentLabel: "прием по записи",
		appointmentValue: "по записи",
		featuredKicker: "Ведущий специалист",
		featuredTitle: "Специалист крупным планом",
		competenceTitle: "Связанные направления",
		allDoctorsTitle: "Команда врачей",
		allDoctorsText: "В клинике IMPLANTIUM работают опытные специалисты по всем основным направлениям. В этом разделе указаны их квалификация, стаж и ключевые услуги.",
		chooseDoctor: "Записаться к специалисту",
		trustTitle: "Почему нам доверяют",
		reviewsTitle: "Отзывы о наших врачах",
		reviewsLink: "Смотреть все отзывы",
		ctaTitle: "Запишитесь на консультацию к любому специалисту",
		ctaText: "Мы подберем удобное время и предложим оптимальный план лечения после осмотра.",
		phoneCaption: "Ежедневно по графику клиники",
		photoSoon: "Фото скоро",
		fallbackExperience: "стаж уточняется",
		years: "лет",
		trustCards: [
			{
				title: "Опытные специалисты",
				text: "Стаж указан в профиле каждого врача.",
				icon: UsersThree
			},
			{
				title: "Командный подход",
				text: "Врачи разных направлений помогают подобрать маршрут лечения.",
				icon: Heartbeat
			},
			{
				title: "Понятные рекомендации",
				text: "Пациент получает объяснение этапов до начала процедур.",
				icon: CheckCircle
			},
			{
				title: "Современная клиника",
				text: "Диагностика и прием проходят в аккуратной клинической среде.",
				icon: ShieldCheck
			}
		]
	},
	kk: {
		title: "Біздің мамандар",
		eyebrow: "IMPLANTIUM дәрігерлері",
		breadcrumbHome: "Басты бет",
		breadcrumbCurrent: "Дәрігерлер",
		intro: "Бұл бетте клиника мамандары, олардың тәжірибесі, бағыты және көрсететін қызметтері берілген.",
		specialistsLabel: "маман",
		experienceLabel: "клиникалық тәжірибе",
		directionsLabel: "емдеу бағыты",
		appointmentLabel: "қабылдау жазылу арқылы",
		appointmentValue: "жазылу арқылы",
		featuredKicker: "Жетекші маман",
		featuredTitle: "Маман туралы қысқаша",
		competenceTitle: "Байланысты бағыттар",
		allDoctorsTitle: "Дәрігерлер командасы",
		allDoctorsText: "IMPLANTIUM клиникасында әр бағыт бойынша тәжірибелі мамандар жұмыс істейді. Бұл бөлімде дәрігерлердің кәсіби бағыты, тәжірибесі және көрсететін негізгі қызметтері көрсетілген",
		chooseDoctor: "Маманға жазылу",
		trustTitle: "Неліктен бізге сенеді",
		reviewsTitle: "Дәрігерлер туралы пікірлер",
		reviewsLink: "Барлық пікірлерді көру",
		ctaTitle: "Кез келген маманға консультацияға жазылыңыз",
		ctaText: "Біз ыңғайлы уақытты таңдап, тексеруден кейін оңтайлы ем жоспарын ұсынамыз.",
		phoneCaption: "Клиника кестесі бойынша күн сайын",
		photoSoon: "Фото кейін қосылады",
		fallbackExperience: "тәжірибе нақтыланады",
		years: "жыл",
		trustCards: [
			{
				title: "Тәжірибелі мамандар",
				text: "Әр дәрігердің тәжірибесі профилінде көрсетілген.",
				icon: UsersThree
			},
			{
				title: "Командалық тәсіл",
				text: "Әртүрлі бағыттағы дәрігерлер ем жолын таңдауға көмектеседі.",
				icon: Heartbeat
			},
			{
				title: "Түсінікті ұсыныстар",
				text: "Пациент процедураларға дейін кезеңдерді түсінеді.",
				icon: CheckCircle
			},
			{
				title: "Заманауи клиника",
				text: "Диагностика мен қабылдау ұқыпты клиникалық ортада өтеді.",
				icon: ShieldCheck
			}
		]
	}
};
var serviceMap = new Map(services.map((service) => [service.id, service]));
var ReviewsSection = lazy(() => import("./ReviewsSection-KaiiHPZb.js").then((module) => ({ default: module.ReviewsSection })));
function Doctors() {
	const { language } = useLanguage();
	const { doctors, isLoading: doctorsLoading } = usePublicDoctors();
	const copy = doctorPageCopy[language];
	const featuredDoctor = doctors[0];
	useSeo({
		title: doctorsSeo.title[language],
		description: doctorsSeo.description[language],
		keywords: doctorsSeo.keywords,
		path: "/doctors",
		jsonLd: [buildClinicJsonLd(getSiteOrigin(), services.map((service) => service.title.ru)), buildBreadcrumbJsonLd(getSiteOrigin(), [{
			name: language === "ru" ? "Главная" : "Басты бет",
			path: "/"
		}, {
			name: copy.title,
			path: "/doctors"
		}])]
	});
	return /* @__PURE__ */ jsxs("main", {
		className: "flex-1 overflow-hidden bg-[#F4F8FB] text-[#17243B]",
		children: [
			/* @__PURE__ */ jsxs("section", {
				className: "relative isolate overflow-hidden border-b border-[#D8E2EA] px-4 pb-10 pt-24 md:px-8 md:pb-14 md:pt-32",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "absolute inset-0 -z-10",
					children: [
						/* @__PURE__ */ jsx("img", {
							src: hero_clinic_room_default,
							alt: "",
							"aria-hidden": "true",
							className: "size-full object-cover object-[62%_center]",
							loading: "eager",
							fetchPriority: "high",
							decoding: "async"
						}),
						/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[linear-gradient(90deg,#F5F9FC_0%,#F5F9FC_34%,rgba(245,249,252,0.9)_50%,rgba(245,249,252,0.42)_74%,rgba(245,249,252,0.18)_100%)]" }),
						/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.82)_0%,rgba(255,255,255,0.22)_48%,#F4F8FB_100%)]" })
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "mx-auto max-w-[1360px]",
					children: /* @__PURE__ */ jsxs(Reveal, { children: [
						/* @__PURE__ */ jsxs("nav", {
							className: "mb-7 flex flex-wrap items-center gap-2 text-xs font-semibold text-[#66788D]",
							children: [
								/* @__PURE__ */ jsx(Link, {
									to: "/",
									className: "transition-colors hover:text-primary",
									children: copy.breadcrumbHome
								}),
								/* @__PURE__ */ jsx("span", { children: "/" }),
								/* @__PURE__ */ jsx("span", {
									className: "text-[#17243B]",
									children: copy.breadcrumbCurrent
								})
							]
						}),
						/* @__PURE__ */ jsx(TextReveal, { children: /* @__PURE__ */ jsx("h1", {
							className: "max-w-2xl text-4xl font-bold leading-[1.04] tracking-tight text-[#15233A] sm:text-5xl md:text-6xl",
							children: copy.title
						}) }),
						/* @__PURE__ */ jsx("p", {
							className: "mt-6 max-w-2xl text-base leading-8 text-[#52657B] md:text-lg",
							children: copy.intro
						})
					] })
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "relative isolate overflow-hidden px-4 py-10 md:px-8 md:py-14",
				children: [/* @__PURE__ */ jsx(DentalParallaxBackground, { surface: "doctors-featured" }), /* @__PURE__ */ jsx(Reveal, {
					className: "relative z-10 mx-auto max-w-[1360px]",
					children: /* @__PURE__ */ jsx(AnimatePresence, {
						mode: "wait",
						initial: false,
						children: doctorsLoading ? /* @__PURE__ */ jsx(MotionListItem, {
							layout: false,
							children: /* @__PURE__ */ jsx(FeaturedDoctorSkeleton, {})
						}, "featured-doctor-loading") : featuredDoctor ? /* @__PURE__ */ jsx(MotionListItem, {
							layout: false,
							children: /* @__PURE__ */ jsx(FeaturedDoctor, {
								doctor: featuredDoctor,
								language,
								copy
							})
						}, featuredDoctor.id) : null
					})
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "relative isolate overflow-hidden px-4 pb-10 md:px-8 md:pb-14",
				children: [/* @__PURE__ */ jsx(DentalParallaxBackground, { surface: "doctors-list" }), /* @__PURE__ */ jsxs("div", {
					className: "relative z-10 mx-auto max-w-[1360px]",
					children: [/* @__PURE__ */ jsx(Reveal, {
						className: "mb-7 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between",
						children: /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
							className: "text-3xl font-bold tracking-tight text-[#15233A] md:text-4xl",
							children: copy.allDoctorsTitle
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-3 max-w-3xl text-sm leading-7 text-[#52657B] md:text-base",
							children: copy.allDoctorsText
						})] })
					}), /* @__PURE__ */ jsx("div", {
						className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
						children: /* @__PURE__ */ jsx(AnimatePresence, {
							initial: false,
							children: doctorsLoading ? Array.from({ length: 8 }).map((_, index) => /* @__PURE__ */ jsx(MotionListItem, {
								index,
								children: /* @__PURE__ */ jsx(DoctorsGridCardSkeleton, {})
							}, `doctor-grid-skeleton-${index}`)) : doctors.map((doctor, index) => /* @__PURE__ */ jsx(MotionListItem, {
								index,
								interactive: true,
								children: /* @__PURE__ */ jsx(DoctorCard, {
									doctor,
									language,
									copy
								})
							}, doctor.id))
						})
					})]
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "relative isolate overflow-hidden bg-white px-4 pb-16 pt-10 md:px-8 md:pb-24 md:pt-16",
				children: [/* @__PURE__ */ jsx(DentalParallaxBackground, { surface: "doctors-trust" }), /* @__PURE__ */ jsxs("div", {
					className: "relative z-10 mx-auto max-w-[1360px]",
					children: [/* @__PURE__ */ jsxs(Reveal, {
						className: "mb-10 max-w-2xl",
						children: [/* @__PURE__ */ jsx("h2", {
							className: "text-3xl font-bold tracking-tight text-[#15233A] md:text-4xl",
							children: copy.trustTitle
						}), /* @__PURE__ */ jsx("div", { className: "mt-4 h-1 w-16 rounded-full bg-primary/20" })]
					}), /* @__PURE__ */ jsx(Stagger, {
						className: "grid gap-5 md:grid-cols-2 xl:grid-cols-4",
						children: copy.trustCards.map((card) => /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsx(TrustCard, { ...card }) }, card.title))
					})]
				})]
			}),
			/* @__PURE__ */ jsx(Suspense, {
				fallback: null,
				children: /* @__PURE__ */ jsx(ReviewsSection, {
					title: copy.reviewsTitle,
					variant: "doctors"
				})
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "relative isolate overflow-hidden px-4 pb-14 md:px-8 md:pb-20",
				children: [/* @__PURE__ */ jsx(DentalParallaxBackground, { surface: "doctors-cta" }), /* @__PURE__ */ jsx("div", {
					className: "relative z-10 mx-auto max-w-[1360px]",
					children: /* @__PURE__ */ jsxs(Reveal, {
						className: "grid min-w-0 gap-6 overflow-hidden rounded-[1.7rem] border border-[#D8E2EA] bg-white p-5 shadow-[0_24px_80px_rgba(39,64,95,0.07)] md:p-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex min-w-0 flex-col gap-5 sm:flex-row sm:items-center",
							children: [/* @__PURE__ */ jsx("span", {
								className: "flex size-16 shrink-0 items-center justify-center rounded-full border border-[#D8E2EA] bg-[#F4F8FB] text-primary md:size-20",
								children: /* @__PURE__ */ jsx(Tooth, {
									weight: "duotone",
									className: "size-8"
								})
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
								className: "text-2xl font-bold tracking-tight text-[#15233A] md:text-3xl",
								children: copy.ctaTitle
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-2 max-w-2xl text-sm leading-7 text-[#52657B] md:text-base",
								children: copy.ctaText
							})] })]
						}), /* @__PURE__ */ jsxs("div", {
							className: "grid min-w-0 gap-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center",
							children: [hasContactValue(clinicContact.phoneHref) && /* @__PURE__ */ jsxs("a", {
								href: clinicContact.phoneHref,
								className: "flex min-h-14 min-w-0 items-center gap-3 rounded-full border border-[#D8E2EA] bg-[#F7FAFC] px-4 text-[#15233A] transition-all hover:-translate-y-0.5 hover:border-[#C3D2DF] active:translate-y-[1px]",
								children: [/* @__PURE__ */ jsx("span", {
									className: "flex size-10 shrink-0 items-center justify-center rounded-full bg-white text-primary shadow-sm",
									children: /* @__PURE__ */ jsx(Phone, {
										weight: "fill",
										className: "size-5"
									})
								}), /* @__PURE__ */ jsxs("span", {
									className: "flex flex-col gap-0.5 min-w-0",
									children: [clinicContact.phoneDisplay?.split(",").map((phone, i) => /* @__PURE__ */ jsx("span", {
										className: "block truncate text-[13px] font-bold leading-tight",
										children: phone.trim()
									}, i)), /* @__PURE__ */ jsx("span", {
										className: "block truncate text-[11px] font-medium text-[#6B7C90]",
										children: copy.phoneCaption
									})]
								})]
							}), /* @__PURE__ */ jsx(BookingModal, { children: /* @__PURE__ */ jsxs(Button, {
								className: "group h-14 w-full min-w-0 justify-center rounded-full bg-primary px-7 text-sm font-bold text-white shadow-[0_18px_38px_rgba(166,58,45,0.18)] transition-all hover:-translate-y-0.5 hover:bg-[#8F2F25] active:translate-y-[1px] sm:w-auto",
								children: [copy.chooseDoctor, /* @__PURE__ */ jsx(ArrowRight, {
									weight: "bold",
									className: "size-4 transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
								})]
							}) })]
						})]
					})
				})]
			})
		]
	});
}
function FeaturedDoctor({ doctor, language, copy }) {
	const experience = getExperienceText(doctor, language, copy);
	const serviceTitles = getServiceTitles(doctor, language);
	return /* @__PURE__ */ jsx("article", {
		className: "overflow-hidden rounded-[2.5rem] border border-[#D8E2EA] bg-white shadow-[0_42px_120px_rgba(39,64,95,0.12)]",
		children: /* @__PURE__ */ jsxs("div", {
			className: "grid gap-0 lg:grid-cols-[0.45fr_0.55fr]",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "relative min-h-[26rem] overflow-hidden bg-[#EFF5F9] sm:min-h-[32rem] lg:min-h-[40rem]",
				children: [
					/* @__PURE__ */ jsx(DoctorPhoto, {
						doctor,
						language,
						className: "absolute inset-0 object-cover bg-[linear-gradient(145deg,#F9FCFE,#E8F0F6)] text-[#27405F]",
						style: { objectPosition: "center 15%" },
						initialsClassName: "size-28 border-[#D8E2EA] text-3xl",
						labelClassName: "text-[#6B7C90]"
					}),
					/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[#15233A]/10 to-transparent" }),
					/* @__PURE__ */ jsx("span", {
						className: "absolute left-7 top-7 rounded-full border border-white/80 bg-white/95 px-6 py-3 text-[13px] font-bold text-[#27405F] shadow-sm backdrop-blur-sm",
						children: copy.featuredKicker
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "flex min-w-0 flex-col justify-center gap-8 p-7 md:p-12 lg:p-16",
				children: [/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx("h2", {
						className: "max-w-2xl text-3xl font-bold leading-tight tracking-tight text-[#15233A] md:text-4xl lg:text-[2.75rem]",
						children: doctor.name[language]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-3 text-sm font-bold uppercase tracking-[0.12em] text-primary md:text-base",
						children: doctor.specialty[language]
					}),
					/* @__PURE__ */ jsx("div", { className: "mt-7 h-1 w-20 rounded-full bg-primary/10" }),
					/* @__PURE__ */ jsx("p", {
						className: "mt-7 max-w-3xl text-[15px] font-medium leading-relaxed text-[#52657B] md:text-lg md:leading-8",
						children: doctor.description[language]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-8 grid max-w-xl gap-4 sm:grid-cols-2",
						children: [/* @__PURE__ */ jsx(MetricTile, {
							value: experience,
							label: copy.experienceLabel
						}), /* @__PURE__ */ jsx(MetricTile, {
							value: `${serviceTitles.length}`,
							label: copy.directionsLabel
						})]
					})
				] }), /* @__PURE__ */ jsxs("div", {
					className: "border-t border-[#E4EBF1] pt-6",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "text-sm font-bold uppercase tracking-wider text-[#15233A]",
						children: copy.competenceTitle
					}), /* @__PURE__ */ jsx("div", {
						className: "mt-4 flex flex-wrap gap-2.5",
						children: serviceTitles.map((title) => /* @__PURE__ */ jsxs("div", {
							className: "inline-flex max-w-full items-center gap-2.5 rounded-full border border-[#D8E2EA] bg-[#F7FAFC] px-4 py-2.5 text-xs font-bold leading-none text-[#52657B] shadow-sm transition-colors hover:border-[#C3D2DF]",
							children: [/* @__PURE__ */ jsx("span", {
								className: "flex size-4.5 shrink-0 items-center justify-center rounded-full text-primary",
								children: /* @__PURE__ */ jsx(CheckCircle, {
									weight: "fill",
									className: "size-4"
								})
							}), /* @__PURE__ */ jsx("span", {
								className: "truncate",
								children: title
							})]
						}, title))
					})]
				})]
			})]
		})
	});
}
function DoctorCard({ doctor, language, copy }) {
	const serviceTitles = getServiceTitles(doctor, language).slice(0, 3);
	const experience = getExperienceText(doctor, language, copy);
	return /* @__PURE__ */ jsxs("article", {
		className: "group flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-[#D8E2EA] bg-white shadow-[0_18px_55px_rgba(39,64,95,0.055)] transition-[border-color,box-shadow] duration-300 hover:border-[#C3D2DF] hover:shadow-[0_24px_70px_rgba(39,64,95,0.08)]",
		children: [/* @__PURE__ */ jsx("div", {
			className: "aspect-[4/3.75] overflow-hidden bg-[#EFF5F9]",
			children: /* @__PURE__ */ jsx(DoctorPhoto, {
				doctor,
				language,
				className: "bg-[linear-gradient(145deg,#F9FCFE,#E8F0F6)] text-[#27405F]",
				initialsClassName: "size-20 border-[#D8E2EA] text-xl",
				labelClassName: "text-[#6B7C90]"
			})
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex flex-1 flex-col p-5",
			children: [
				/* @__PURE__ */ jsx("span", {
					className: "mb-3 w-fit rounded-full border border-[#D8E2EA] bg-[#F7FAFC] px-3 py-1 text-xs font-bold text-[#52657B]",
					children: experience
				}),
				/* @__PURE__ */ jsx("h3", {
					className: "text-lg font-bold leading-tight text-[#15233A]",
					children: doctor.name[language]
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-xs font-bold uppercase tracking-[0.08em] text-primary",
					children: doctor.specialty[language]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-4 flex flex-1 flex-col gap-2",
					children: serviceTitles.map((title) => /* @__PURE__ */ jsxs("div", {
						className: "flex items-start gap-2 text-xs font-semibold leading-5 text-[#52657B]",
						children: [/* @__PURE__ */ jsx(CheckCircle, {
							weight: "fill",
							className: "mt-0.5 size-4 shrink-0 text-primary/80"
						}), /* @__PURE__ */ jsx("span", { children: title })]
					}, title))
				})
			]
		})]
	});
}
function MetricTile({ value, label }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col gap-1",
		children: [/* @__PURE__ */ jsx("p", {
			className: "text-xl font-bold tracking-tight text-[#15233A]",
			children: value
		}), /* @__PURE__ */ jsx("p", {
			className: "mt-1 text-xs font-semibold leading-snug text-[#6B7C90]",
			children: label
		})]
	});
}
function TrustCard({ title, text, icon: Icon }) {
	return /* @__PURE__ */ jsxs("article", {
		className: "group flex flex-col gap-5 rounded-[2rem] border border-[#D8E2EA] bg-white p-6 shadow-[0_12px_45px_rgba(39,64,95,0.045)] transition-all duration-300 hover:-translate-y-1 hover:border-[#C3D2DF] hover:shadow-[0_20px_60px_rgba(39,64,95,0.07)] sm:p-7",
		children: [/* @__PURE__ */ jsx("div", {
			className: "flex size-14 shrink-0 items-center justify-center rounded-full border border-primary/10 bg-[#F4E7E4] text-primary transition-transform duration-300 group-hover:scale-105",
			children: /* @__PURE__ */ jsx(Icon, {
				weight: "duotone",
				className: "size-7"
			})
		}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
			className: "text-lg font-bold leading-tight text-[#15233A]",
			children: title
		}), /* @__PURE__ */ jsx("p", {
			className: "mt-3 text-[13px] font-medium leading-relaxed text-[#52657B] md:text-sm",
			children: text
		})] })]
	});
}
function getServiceTitles(doctor, language) {
	return doctor.serviceIds.map((serviceId) => serviceMap.get(serviceId)?.title[language]).filter((title) => Boolean(title));
}
function getExperienceYears(doctor) {
	if (typeof doctor.experienceYears === "number") return doctor.experienceYears;
	const match = `${doctor.description.ru} ${doctor.description.kk}`.match(/(\d+)\s*(?:лет|года|год|жыл)/i);
	return match ? Number(match[1]) : 0;
}
function getExperienceText(doctor, language, copy) {
	const years = getExperienceYears(doctor);
	if (!years) return copy.fallbackExperience;
	return formatExperience(years, language, copy);
}
function formatExperience(years, language, copy) {
	if (language === "kk") return `${years} ${copy.years}`;
	const mod10 = years % 10;
	const mod100 = years % 100;
	return `${years} ${mod10 === 1 && mod100 !== 11 ? "год" : mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14) ? "года" : "лет"}`;
}
//#endregion
export { Doctors as default };
