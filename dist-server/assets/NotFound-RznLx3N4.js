import { n as useLanguage } from "./useLanguage-D1hkxYkq.js";
import { g as Button, y as content } from "../entry-server.js";
import { n as useSeo } from "./useSeo-BpLXIewB.js";
import { Link } from "react-router-dom";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/pages/NotFound.tsx
function NotFound() {
	const { language } = useLanguage();
	const t = content[language];
	useSeo({
		title: language === "ru" ? "Страница не найдена | IMPLANTIUM" : "Бет табылмады | IMPLANTIUM",
		description: language === "ru" ? "Страница не найдена на сайте стоматологической клиники IMPLANTIUM в Актау." : "Ақтаудағы IMPLANTIUM стоматологиясының сайтында бұл бет табылмады.",
		path: "/404",
		noindex: true
	});
	return /* @__PURE__ */ jsx("main", {
		className: "flex-1 flex items-center justify-center pt-32 pb-24",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container mx-auto px-4 text-center max-w-md",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-6xl font-bold text-primary mb-4",
					children: "404"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "text-2xl font-semibold mb-2",
					children: t.common.notFoundTitle
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-muted-foreground mb-8",
					children: t.common.notFoundText
				}),
				/* @__PURE__ */ jsx(Button, {
					asChild: true,
					size: "lg",
					className: "rounded-full bg-primary hover:bg-primary/90 text-white",
					children: /* @__PURE__ */ jsx(Link, {
						to: "/",
						children: t.common.backToHome
					})
				})
			]
		})
	});
}
//#endregion
export { NotFound as default };
