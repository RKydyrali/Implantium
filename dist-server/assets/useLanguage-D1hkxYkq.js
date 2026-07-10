import { createContext, useContext, useEffect, useState } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/hooks/useLanguage.tsx
var LanguageContext = createContext(void 0);
function LanguageProvider({ children }) {
	const [language, setLanguageState] = useState(() => {
		if (typeof localStorage === "undefined") return "ru";
		const saved = localStorage.getItem("implantium_lang");
		return saved === "ru" || saved === "kk" ? saved : "ru";
	});
	const setLanguage = (lang) => {
		setLanguageState(lang);
		if (typeof localStorage !== "undefined") localStorage.setItem("implantium_lang", lang);
	};
	useEffect(() => {
		document.documentElement.lang = language;
	}, [language]);
	return /* @__PURE__ */ jsx(LanguageContext.Provider, {
		value: {
			language,
			setLanguage
		},
		children
	});
}
function useLanguage() {
	const context = useContext(LanguageContext);
	if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
	return context;
}
//#endregion
export { useLanguage as n, LanguageProvider as t };
