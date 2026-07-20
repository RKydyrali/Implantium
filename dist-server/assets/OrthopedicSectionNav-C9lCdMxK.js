import { t as cn } from "./utils-BmXddvPc.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/services/OrthopedicSectionNav.tsx
var navCopy = {
	ru: {
		crowns: "Коронки и виниры",
		prosthetics: "Протезы"
	},
	kk: {
		crowns: "Қаптамалар мен винирлер",
		prosthetics: "Протездер"
	}
};
function OrthopedicSectionNav({ language, className }) {
	const copy = navCopy[language];
	return /* @__PURE__ */ jsxs("nav", {
		className: cn("flex flex-wrap gap-2 rounded-2xl border border-[#DDE3E7] bg-[#FAFBFC] p-2", className),
		"aria-label": language === "ru" ? "Разделы ортопедии" : "Ортопедия бөлімдері",
		children: [/* @__PURE__ */ jsx(NavPill, {
			href: "#crown-veneer-comparison-title",
			children: copy.crowns
		}), /* @__PURE__ */ jsx(NavPill, {
			href: "#prosthetics",
			children: copy.prosthetics
		})]
	});
}
function NavPill({ href, children }) {
	return /* @__PURE__ */ jsx("a", {
		href,
		className: "inline-flex items-center rounded-xl bg-white px-4 py-2.5 text-sm font-bold text-[#1F2528] shadow-sm transition-colors hover:text-primary",
		children
	});
}
//#endregion
export { OrthopedicSectionNav };
