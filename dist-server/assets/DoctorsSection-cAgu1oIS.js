import { n as useLanguage } from "./useLanguage-D1hkxYkq.js";
import { a as MotionListItem, c as BookingModal, d as content, i as usePublicDoctors, l as Button, n as HomeDoctorCardSkeleton, o as Reveal, r as DoctorPhoto, s as TextReveal } from "../entry-server.js";
import { AnimatePresence } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/sections/DoctorsSection.tsx
function DoctorsSection() {
	const { language } = useLanguage();
	const { doctors, isLoading } = usePublicDoctors();
	const t = content[language];
	const previewDoctors = doctors.slice(0, 4);
	return /* @__PURE__ */ jsx("section", {
		id: "doctors",
		className: "bg-[#F5F7F8] px-4 py-14 md:px-8 md:py-20",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-[1320px]",
			children: [/* @__PURE__ */ jsxs(Reveal, {
				className: "mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
					className: "mb-3 block text-sm font-semibold uppercase tracking-[0.16em] text-primary",
					children: "IMPLANTIUM"
				}), /* @__PURE__ */ jsx(TextReveal, { children: /* @__PURE__ */ jsx("h2", {
					className: "font-display text-3xl font-normal text-[#1F2528] md:text-4xl",
					children: language === "ru" ? "Наши специалисты" : "Біздің мамандар"
				}) })] }), /* @__PURE__ */ jsxs("a", {
					href: "/doctors",
					className: "group inline-flex items-center gap-2 text-sm font-bold text-[#606A70] transition-colors hover:text-primary",
					children: [t.common.allDoctors, /* @__PURE__ */ jsx(ArrowRight, { className: "size-4 transition-transform group-hover:translate-x-1 motion-reduce:transform-none" })]
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
				children: /* @__PURE__ */ jsx(AnimatePresence, {
					initial: false,
					children: isLoading ? Array.from({ length: 4 }).map((_, index) => /* @__PURE__ */ jsx(MotionListItem, {
						index,
						children: /* @__PURE__ */ jsx(HomeDoctorCardSkeleton, {})
					}, `home-doctor-skeleton-${index}`)) : previewDoctors.map((doctor, index) => /* @__PURE__ */ jsx(MotionListItem, {
						index,
						interactive: true,
						children: /* @__PURE__ */ jsxs("article", {
							"data-doctor-card": doctor.id,
							className: "clinical-card flex h-full flex-col overflow-hidden rounded-[1.6rem] transition-[border-color,box-shadow] duration-300 hover:border-[#C8D3D9] hover:shadow-[0_28px_85px_rgba(31,37,40,0.08)]",
							children: [/* @__PURE__ */ jsx("div", {
								className: "relative aspect-[4/3.8] overflow-hidden bg-[#EEF2F4]",
								children: /* @__PURE__ */ jsx(DoctorPhoto, {
									doctor,
									language,
									initialsClassName: "size-20 text-xl"
								})
							}), /* @__PURE__ */ jsxs("div", {
								className: "flex flex-1 flex-col p-5",
								children: [
									/* @__PURE__ */ jsx("span", {
										className: "mb-3 w-fit rounded-full border border-[#DDE3E7] bg-[#FAFBFC] px-3 py-1 text-xs font-bold text-primary",
										children: getDoctorExperience(doctor, language)
									}),
									/* @__PURE__ */ jsx("h3", {
										className: "mb-2 text-lg font-bold leading-tight text-[#1F2528]",
										children: doctor.name[language]
									}),
									/* @__PURE__ */ jsx("p", {
										className: "mb-3 text-xs font-bold uppercase tracking-[0.08em] text-[#606A70]",
										children: doctor.specialty[language]
									}),
									/* @__PURE__ */ jsx("p", {
										className: "mb-5 line-clamp-4 flex-1 text-sm leading-7 text-[#606A70]",
										children: doctor.description[language]
									}),
									/* @__PURE__ */ jsx(BookingModal, { children: /* @__PURE__ */ jsxs(Button, {
										type: "button",
										variant: "outline",
										className: "group/cta h-11 rounded-2xl border-[#DDE3E7] bg-white text-sm font-bold text-[#1F2528] hover:border-primary/35 hover:bg-[#F4E7E4]/45 hover:text-primary",
										children: [t.doctors.chooseDoctor, /* @__PURE__ */ jsx(ArrowRight, { className: "size-4 transition-transform group-hover/cta:translate-x-1 motion-reduce:transform-none" })]
									}) })
								]
							})]
						})
					}, doctor.id))
				})
			})]
		})
	});
}
function getDoctorExperience(doctor, language) {
	if (typeof doctor.experienceYears === "number" && doctor.experienceYears > 0) return language === "ru" ? `${doctor.experienceYears} лет` : `${doctor.experienceYears} жыл`;
	return doctor.description[language].match(/(?:Стаж работы|Опыт работы|Жұмыс тәжірибесі):?\s*([^..]+[.)]?)/i)?.[1]?.replace(/\.$/, "") ?? (language === "ru" ? "Специалист" : "Маман");
}
//#endregion
export { DoctorsSection };
