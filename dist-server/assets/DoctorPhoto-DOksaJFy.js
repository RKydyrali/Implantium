import { t as cn } from "./utils-DVvWhTIj.js";
import { t as isConvexConfigured } from "../entry-server.js";
import { o as api } from "./DoctorSkeletons-BGIYgWVM.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useQuery_experimental } from "convex/react";
//#region src/data/doctors.ts
var doctors = [
	{
		id: "zhaksybaev-bauyrzhan",
		name: {
			ru: "Жаксыбаев Бауыржан Советханович",
			kk: "Жаксыбаев Бауыржан Советханович"
		},
		specialty: {
			ru: "ЧЛХ, хирург-имплантолог",
			kk: "Жақ-бет хирургы, хирург-имплантолог"
		},
		description: {
			ru: "Стаж работы: 15 лет. Специализируется на имплантации, синус-лифтинге, пластике десны, костной пластике и сложном удалении зубов.",
			kk: "15 жылдық тәжірибесі бар. Имплантация, синус-лифтинг, қызыл иек пластикасы, сүйек пластикасы және күрделі тіс жұлу бағыттарында жұмыс істейді."
		},
		photo: "",
		experienceYears: 15,
		serviceIds: [
			"implants",
			"bone-augmentation",
			"frenectomy",
			"tooth-extraction",
			"wisdom-tooth-removal"
		]
	},
	{
		id: "doskaziev-bauyrzhan",
		name: {
			ru: "Досказиев Бауыржан Саинович",
			kk: "Досказиев Бауыржан Саинович"
		},
		specialty: {
			ru: "Врач-ортопед",
			kk: "Стоматолог-ортопед"
		},
		description: {
			ru: "Стаж работы: 15 лет. Выполняет коронки на зубы и импланты, виниры и протезирование.",
			kk: "15 жылдық тәжірибесі бар. Тіске және имплантқа қаптама, винир және протездеу жұмыстарын орындайды."
		},
		photo: "",
		experienceYears: 15,
		serviceIds: ["crowns", "dentures"]
	},
	{
		id: "kolesnikova-natalya",
		name: {
			ru: "Колесникова Наталья Сергеевна",
			kk: "Колесникова Наталья Сергеевна"
		},
		specialty: {
			ru: "Стоматолог-терапевт · Ортодонт",
			kk: "Стоматолог-терапевт · Ортодонт"
		},
		description: {
			ru: "Стаж работы: 13 лет. Проводит комплексное лечение зубов и работает с современными брекет-системами.",
			kk: "13 жылдық тәжірибесі бар. Тістерді кешенді емдейді және заманауи брекет жүйелерімен жұмыс істейді."
		},
		photo: "",
		experienceYears: 13,
		serviceIds: [
			"treatment",
			"cleaning",
			"braces"
		]
	},
	{
		id: "aibolatov-bolek",
		name: {
			ru: "Айболатов Болек Айболатович",
			kk: "Айболатов Болек Айболатович"
		},
		specialty: {
			ru: "Стоматолог-терапевт · Ортодонт",
			kk: "Стоматолог-терапевт · Ортодонт"
		},
		description: {
			ru: "Опыт работы: 7 лет. Проводит лечение зубов, исправление прикуса и работу с современными брекет-системами.",
			kk: "7 жылдық тәжірибесі бар. Тіс емдеу, тістемді түзету және заманауи брекет жүйелерімен жұмыс жүргізеді."
		},
		photo: "",
		experienceYears: 7,
		serviceIds: [
			"treatment",
			"cleaning",
			"braces"
		]
	},
	{
		id: "burabai-dastan",
		name: {
			ru: "Бурабай Дастан Бекболатович",
			kk: "Бурабай Дастан Бекболатович"
		},
		specialty: {
			ru: "Стоматолог-терапевт · Ортопед · Хирург · Имплантолог",
			kk: "Стоматолог-терапевт · Ортопед · Хирург · Имплантолог"
		},
		description: {
			ru: "Опыт работы: 7 лет. Выполняет полный спектр стоматологических услуг.",
			kk: "7 жылдық тәжірибесі бар. Стоматологиялық қызметтердің толық спектрін орындайды."
		},
		photo: "",
		experienceYears: 7,
		serviceIds: [
			"implants",
			"bone-augmentation",
			"frenectomy",
			"tooth-extraction",
			"wisdom-tooth-removal",
			"crowns",
			"dentures",
			"treatment",
			"cleaning"
		]
	},
	{
		id: "madreimova-damira",
		name: {
			ru: "Мадреймова Дамира Орынбаевна",
			kk: "Мадреймова Дамира Орынбаевна"
		},
		specialty: {
			ru: "Стоматолог-ортодонт",
			kk: "Стоматолог-ортодонт"
		},
		description: {
			ru: "Опыт работы: 3 года. Занимается исправлением прикуса и брекет-системами.",
			kk: "3 жылдық тәжірибесі бар. Тістемді түзету және брекет жүйелерімен айналысады."
		},
		photo: "",
		experienceYears: 3,
		serviceIds: ["braces"]
	},
	{
		id: "izturganov-duman",
		name: {
			ru: "Изтурганов Думан Куанышович",
			kk: "Изтурганов Думан Куанышович"
		},
		specialty: {
			ru: "Стоматолог-ортопед",
			kk: "Стоматолог-ортопед"
		},
		description: {
			ru: "Опыт работы: 7 лет. Выполняет коронки, виниры и протезирование.",
			kk: "7 жылдық тәжірибесі бар. Қаптама, винир және протездеу жұмыстарын орындайды."
		},
		photo: "",
		experienceYears: 7,
		serviceIds: ["crowns", "dentures"]
	}
];
//#endregion
//#region src/hooks/useDoctors.ts
function usePublicDoctors() {
	const result = useQuery_experimental({
		query: api.doctors.listPublicDoctors,
		args: isConvexConfigured ? {} : "skip"
	});
	if (!isConvexConfigured) return {
		doctors,
		isLoading: false,
		isUsingFallback: true
	};
	if (result.status === "pending") return {
		doctors: [],
		isLoading: true,
		isUsingFallback: false
	};
	if (result.status === "error") return {
		doctors,
		isLoading: false,
		isUsingFallback: true,
		error: result.error
	};
	return {
		doctors: result.data,
		isLoading: false,
		isUsingFallback: false
	};
}
//#endregion
//#region src/components/common/DoctorPhoto.tsx
function DoctorPhoto({ doctor, language, className, style, initialsClassName, labelClassName }) {
	if (doctor.photo) return /* @__PURE__ */ jsx("img", {
		src: doctor.photo,
		alt: doctor.name[language],
		className: cn("size-full object-cover", className),
		style,
		loading: "lazy",
		decoding: "async"
	});
	return /* @__PURE__ */ jsxs("div", {
		"data-photo-placeholder": true,
		className: cn("relative flex size-full flex-col items-center justify-center gap-3 overflow-hidden bg-[radial-gradient(circle_at_50%_20%,rgba(217,225,229,0.9),transparent_42%),linear-gradient(145deg,#FAFBFC,#EEF2F4)] text-primary", className),
		style,
		children: [
			/* @__PURE__ */ jsx("div", { className: "absolute inset-x-8 top-8 h-px bg-white/80" }),
			/* @__PURE__ */ jsx("div", { className: "absolute bottom-0 h-20 w-40 rounded-t-full border border-white/80 bg-white/38 blur-sm" }),
			/* @__PURE__ */ jsx("span", {
				className: cn("relative flex size-16 items-center justify-center rounded-full border border-white bg-white/90 text-lg font-bold shadow-[0_18px_46px_rgba(31,37,40,0.08)]", initialsClassName),
				children: getDoctorInitials(doctor.name.ru)
			}),
			/* @__PURE__ */ jsx("span", {
				className: cn("relative text-xs font-semibold text-[#6E7B83]", labelClassName),
				children: language === "ru" ? "Фото скоро" : "Фото кейін қосылады"
			})
		]
	});
}
function getDoctorInitials(name) {
	return name.split(" ").filter(Boolean).slice(0, 2).map((part) => part[0]).join("");
}
//#endregion
export { usePublicDoctors as n, DoctorPhoto as t };
