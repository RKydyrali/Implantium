import { n as useLanguage } from "./useLanguage-D1hkxYkq.js";
import { _ as landingCopy, c as clinicContact, u as hasContactValue, y as content } from "../entry-server.js";
import { t as DentalParallaxBackground } from "./DentalParallaxBackground-BqYR4s3Q.js";
import { motion } from "framer-motion";
import { jsx, jsxs } from "react/jsx-runtime";
import { Clock, MapPin, Phone, WhatsappLogo } from "@phosphor-icons/react";
//#region src/assets/map-2gis.png
var map_2gis_default = "/assets/map-2gis-DHmFSxT1.png";
//#endregion
//#region src/components/sections/LocationSection.tsx
function LocationSection() {
	const { language } = useLanguage();
	const t = landingCopy[language];
	const labels = content[language];
	return /* @__PURE__ */ jsxs("section", {
		id: "location",
		className: "relative isolate overflow-hidden bg-[#F5F7F8] px-4 py-14 md:px-8 md:py-20",
		children: [/* @__PURE__ */ jsx(DentalParallaxBackground, { surface: "home-location" }), /* @__PURE__ */ jsxs(motion.div, {
			className: "clinical-card relative z-10 mx-auto grid max-w-[1320px] overflow-hidden rounded-[2rem] lg:grid-cols-[0.72fr_1.28fr]",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "p-6 md:p-8 lg:p-10",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-primary",
						children: language === "ru" ? "Актау" : "Ақтау"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "font-display mb-6 text-3xl font-normal text-[#1F2528] md:text-4xl",
						children: t.contact.title
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "grid gap-4",
						children: [
							/* @__PURE__ */ jsx(InfoLine, {
								icon: /* @__PURE__ */ jsx(MapPin, {
									weight: "fill",
									className: "size-5"
								}),
								label: t.contact.address
							}),
							/* @__PURE__ */ jsx(InfoLine, {
								icon: /* @__PURE__ */ jsx(Phone, {
									weight: "fill",
									className: "size-5"
								}),
								label: clinicContact.phoneDisplay ?? t.contact.phonePending,
								muted: !clinicContact.phoneDisplay
							}),
							/* @__PURE__ */ jsx(InfoLine, {
								icon: /* @__PURE__ */ jsx(WhatsappLogo, {
									weight: "fill",
									className: "size-5"
								}),
								label: hasContactValue(clinicContact.whatsappUrl) ? clinicContact.phoneDisplay ?? "" : t.contact.whatsappPending,
								muted: !hasContactValue(clinicContact.whatsappUrl)
							}),
							/* @__PURE__ */ jsx(InfoLine, {
								icon: /* @__PURE__ */ jsx(Clock, {
									weight: "fill",
									className: "size-5"
								}),
								label: t.contact.hoursWeek
							}),
							/* @__PURE__ */ jsx(InfoLine, {
								icon: /* @__PURE__ */ jsx(Clock, {
									weight: "fill",
									className: "size-5"
								}),
								label: t.contact.hoursSunday
							}),
							/* @__PURE__ */ jsx(InfoLine, {
								icon: /* @__PURE__ */ jsx(Clock, {
									weight: "fill",
									className: "size-5"
								}),
								label: t.contact.hoursDoctors
							})
						]
					})
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "relative min-h-[21rem] overflow-hidden border-t border-[#DDE3E7] bg-[#EEF2F4] lg:min-h-[26rem] lg:border-l lg:border-t-0",
				children: /* @__PURE__ */ jsx("a", {
					href: "https://go.2gis.com/kQV98",
					target: "_blank",
					rel: "noopener noreferrer",
					className: "absolute inset-0 block size-full transition-opacity hover:opacity-90",
					title: labels.location.open2gis,
					children: /* @__PURE__ */ jsx("img", {
						src: map_2gis_default,
						alt: t.contact.mapLabel,
						className: "size-full object-cover",
						loading: "lazy"
					})
				})
			})]
		})]
	});
}
function InfoLine({ icon, label, muted }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-center gap-3 text-sm",
		children: [/* @__PURE__ */ jsx("span", {
			className: "flex size-10 shrink-0 items-center justify-center rounded-2xl border border-[#DDE3E7] bg-[#FAFBFC] text-primary",
			children: icon
		}), /* @__PURE__ */ jsx("span", {
			className: muted ? "leading-relaxed text-[#8A949B]" : "leading-relaxed text-[#1F2528]/80",
			children: label
		})]
	});
}
//#endregion
export { LocationSection };
