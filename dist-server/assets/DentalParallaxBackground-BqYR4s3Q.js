import { t as cn } from "./utils-DVvWhTIj.js";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { jsx } from "react/jsx-runtime";
//#endregion
//#region src/data/dentalDecor.ts
var tooth = "/assets/levitating-tooth-D3xYFi0n.png";
function decor(id, className, overrides = {}) {
	return {
		id,
		src: tooth,
		className,
		opacity: .22,
		parallax: 44,
		float: 22,
		floatX: 6,
		rotation: 12,
		duration: 6.8,
		sway: 5,
		...overrides
	};
}
/** Small accent tooth — stays at edges, visible from md+ */
function accent(id, side, vertical, overrides = {}) {
	return decor(id, `${side === "left" ? "left-[2%] md:left-[4%]" : "right-[2%] md:right-[4%]"} ${vertical === "top" ? "top-[12%]" : vertical === "mid" ? "top-[48%]" : "bottom-[14%]"} hidden w-16 md:block md:w-20 lg:w-24`, {
		opacity: .14,
		parallax: 20,
		float: 16,
		floatX: 4,
		rotation: side === "left" ? -8 : 8,
		duration: 7.8,
		delay: 1,
		sway: 4,
		...overrides
	});
}
var dentalDecorBySurface = {
	"home-services": [
		decor("home-services-tooth-a", "right-[-4rem] top-6 w-36 sm:right-4 sm:top-8 sm:w-52 lg:right-20 lg:top-10 lg:w-72", {
			opacity: .24,
			parallax: 56,
			float: 26,
			floatX: 8,
			rotation: 13,
			duration: 6.4
		}),
		decor("home-services-tooth-b", "left-[-3.5rem] bottom-4 w-24 sm:left-4 sm:bottom-10 sm:w-32 lg:left-16 lg:w-40", {
			opacity: .18,
			parallax: 32,
			float: 20,
			floatX: 5,
			rotation: -22,
			duration: 7.6,
			delay: .5,
			sway: 6
		}),
		decor("home-services-tooth-c", "right-[10%] top-[38%] hidden w-20 sm:block sm:w-28 lg:w-32", {
			opacity: .15,
			parallax: 24,
			float: 18,
			floatX: 5,
			rotation: 8,
			duration: 8.2,
			delay: 1.2
		}),
		accent("home-services-tooth-d", "left", "top", {
			delay: 1.6,
			float: 14
		})
	],
	"home-about": [
		decor("home-about-tooth-a", "left-[-4.5rem] bottom-2 w-40 sm:left-6 sm:bottom-8 sm:w-56 lg:left-24 lg:w-64", {
			opacity: .23,
			parallax: 44,
			float: 24,
			floatX: 7,
			rotation: -16,
			duration: 7.2,
			delay: .3
		}),
		decor("home-about-tooth-b", "right-[-3rem] top-10 w-28 sm:right-8 sm:top-16 sm:w-36 lg:right-28 lg:w-44", {
			opacity: .17,
			parallax: 36,
			float: 19,
			floatX: 5,
			rotation: 19,
			duration: 6.8,
			delay: .85
		}),
		accent("home-about-tooth-c", "right", "bottom", { delay: 1.3 })
	],
	"home-reviews": [
		decor("home-reviews-tooth-a", "right-[-5rem] bottom-8 w-44 sm:right-8 sm:w-56 lg:right-28 lg:w-72", {
			opacity: .22,
			parallax: 48,
			float: 24,
			floatX: 7,
			rotation: 22,
			duration: 6.6,
			delay: .15
		}),
		decor("home-reviews-tooth-b", "left-[-3.5rem] top-20 w-28 sm:left-6 sm:w-36 lg:left-20 lg:w-44", {
			opacity: .16,
			parallax: 30,
			float: 18,
			floatX: 5,
			rotation: -11,
			duration: 7.8,
			delay: .65
		}),
		accent("home-reviews-tooth-c", "left", "mid", { delay: 1.1 })
	],
	"home-location": [
		decor("home-location-tooth-a", "left-[-3.5rem] top-3 w-36 sm:left-8 sm:top-8 sm:w-48 lg:left-16 lg:w-60", {
			opacity: .22,
			parallax: 38,
			float: 23,
			floatX: 6,
			rotation: -10,
			duration: 7.4
		}),
		decor("home-location-tooth-b", "right-[-2.5rem] bottom-6 w-24 sm:right-10 sm:w-32 lg:right-24 lg:w-40", {
			opacity: .17,
			parallax: 28,
			float: 18,
			floatX: 5,
			rotation: 14,
			duration: 6.6,
			delay: .45
		}),
		accent("home-location-tooth-c", "right", "top", { delay: 1 })
	],
	"doctors-featured": [
		decor("doctors-featured-tooth-a", "right-[-4rem] top-8 w-36 sm:right-6 sm:w-52 lg:right-24 lg:w-64", {
			opacity: .23,
			parallax: 46,
			float: 23,
			floatX: 7,
			rotation: 15,
			duration: 6.6
		}),
		decor("doctors-featured-tooth-b", "left-[-3rem] bottom-16 w-28 sm:left-8 sm:w-36 lg:left-20 lg:w-44", {
			opacity: .16,
			parallax: 34,
			float: 19,
			floatX: 5,
			rotation: -18,
			duration: 7.6,
			delay: .4
		}),
		accent("doctors-featured-tooth-c", "left", "top", { delay: 1.2 })
	],
	"doctors-list": [
		decor("doctors-list-tooth-a", "left-[-5rem] bottom-12 w-44 sm:left-8 sm:w-56 lg:left-24 lg:w-72", {
			opacity: .23,
			parallax: 52,
			float: 26,
			floatX: 8,
			rotation: -18,
			duration: 7,
			delay: .25
		}),
		decor("doctors-list-tooth-b", "right-[-3rem] top-24 w-32 sm:right-12 sm:w-40 lg:right-32 lg:w-48", {
			opacity: .17,
			parallax: 38,
			float: 20,
			floatX: 6,
			rotation: 10,
			duration: 6.8,
			delay: .7
		}),
		decor("doctors-list-tooth-c", "left-[6%] top-[16%] hidden w-20 sm:block sm:w-24 lg:w-28", {
			opacity: .14,
			parallax: 22,
			float: 17,
			floatX: 4,
			rotation: 6,
			duration: 8.4,
			delay: 1.1
		}),
		accent("doctors-list-tooth-d", "right", "bottom", {
			delay: 1.5,
			float: 15
		})
	],
	"doctors-trust": [
		decor("doctors-trust-tooth-a", "right-[-4rem] top-4 w-36 sm:right-8 sm:w-48 lg:right-20 lg:w-60", {
			opacity: .21,
			parallax: 36,
			float: 22,
			floatX: 6,
			rotation: 12,
			duration: 6.8
		}),
		decor("doctors-trust-tooth-b", "left-[-3rem] bottom-8 w-28 sm:left-10 sm:w-36 lg:left-28 lg:w-44", {
			opacity: .16,
			parallax: 30,
			float: 18,
			floatX: 5,
			rotation: -14,
			duration: 7.4,
			delay: .5
		}),
		accent("doctors-trust-tooth-c", "left", "mid", { delay: 1.15 })
	],
	"doctors-reviews": [
		decor("doctors-reviews-tooth-a", "left-[-4rem] top-14 w-36 sm:left-6 sm:w-48 lg:left-20 lg:w-60", {
			opacity: .2,
			parallax: 42,
			float: 22,
			floatX: 6,
			rotation: -14,
			duration: 7.2,
			delay: .45
		}),
		decor("doctors-reviews-tooth-b", "right-[-2.5rem] bottom-10 w-28 sm:right-10 sm:w-36 lg:right-24 lg:w-44", {
			opacity: .16,
			parallax: 32,
			float: 18,
			floatX: 5,
			rotation: 17,
			duration: 6.8,
			delay: .15
		}),
		accent("doctors-reviews-tooth-c", "right", "top", { delay: 1.05 })
	],
	"doctors-cta": [
		decor("doctors-cta-tooth-a", "right-[-4rem] bottom-0 w-36 sm:right-6 sm:w-48 lg:right-16 lg:w-56", {
			opacity: .21,
			parallax: 34,
			float: 22,
			floatX: 6,
			rotation: 19,
			duration: 7
		}),
		decor("doctors-cta-tooth-b", "left-[-3rem] top-8 w-24 sm:left-8 sm:w-32 lg:left-24 lg:w-40", {
			opacity: .16,
			parallax: 26,
			float: 17,
			floatX: 4,
			rotation: -9,
			duration: 7.6,
			delay: .55
		}),
		accent("doctors-cta-tooth-c", "left", "bottom", { delay: 1.2 })
	],
	"service-process": [
		decor("service-process-tooth-a", "right-[-4rem] top-8 w-36 sm:right-8 sm:w-52 lg:right-28 lg:w-64", {
			opacity: .22,
			parallax: 48,
			float: 24,
			floatX: 7,
			rotation: 17,
			duration: 6.6
		}),
		decor("service-process-tooth-b", "left-[-3.5rem] bottom-20 w-32 sm:left-6 sm:w-40 lg:left-20 lg:w-48", {
			opacity: .17,
			parallax: 36,
			float: 19,
			floatX: 5,
			rotation: -12,
			duration: 7.4,
			delay: .35
		}),
		accent("service-process-tooth-c", "left", "top", { delay: 1.1 })
	],
	"service-advantages": [
		decor("service-advantages-tooth-a", "left-[-4.5rem] bottom-4 w-40 sm:left-8 sm:w-52 lg:left-20 lg:w-64", {
			opacity: .21,
			parallax: 42,
			float: 23,
			floatX: 6,
			rotation: -15,
			duration: 7.4,
			delay: .35
		}),
		decor("service-advantages-tooth-b", "right-[-3rem] top-12 w-28 sm:right-10 sm:w-36 lg:right-28 lg:w-44", {
			opacity: .16,
			parallax: 30,
			float: 18,
			floatX: 5,
			rotation: 13,
			duration: 6.8,
			delay: .75
		}),
		accent("service-advantages-tooth-c", "right", "bottom", { delay: 1.2 })
	],
	"service-doctors": [
		decor("service-doctors-tooth-a", "right-[-4rem] top-6 w-36 sm:right-10 sm:w-48 lg:right-24 lg:w-60", {
			opacity: .2,
			parallax: 36,
			float: 22,
			floatX: 6,
			rotation: 11,
			duration: 6.8
		}),
		decor("service-doctors-tooth-b", "left-[-3rem] bottom-12 w-28 sm:left-8 sm:w-36 lg:left-24 lg:w-44", {
			opacity: .16,
			parallax: 28,
			float: 18,
			floatX: 5,
			rotation: -16,
			duration: 7.6,
			delay: .45
		}),
		accent("service-doctors-tooth-c", "left", "mid", { delay: 1.05 })
	],
	"service-faq": [
		decor("service-faq-tooth-a", "left-[-4rem] top-16 w-36 sm:left-8 sm:w-48 lg:left-24 lg:w-60", {
			opacity: .2,
			parallax: 40,
			float: 22,
			floatX: 6,
			rotation: -12,
			duration: 7.2,
			delay: .15
		}),
		decor("service-faq-tooth-b", "right-[-2.5rem] bottom-16 w-28 sm:right-12 sm:w-36 lg:right-32 lg:w-44", {
			opacity: .16,
			parallax: 32,
			float: 18,
			floatX: 5,
			rotation: 15,
			duration: 6.8,
			delay: .6
		}),
		accent("service-faq-tooth-c", "right", "top", { delay: 1.15 })
	],
	"service-cta": [
		decor("service-cta-tooth-a", "right-[-4rem] bottom-0 w-36 sm:right-10 sm:w-48 lg:right-24 lg:w-56", {
			opacity: .21,
			parallax: 30,
			float: 22,
			floatX: 6,
			rotation: 16,
			duration: 6.8
		}),
		decor("service-cta-tooth-b", "left-[-3rem] top-6 w-24 sm:left-12 sm:w-32 lg:left-28 lg:w-40", {
			opacity: .16,
			parallax: 24,
			float: 17,
			floatX: 4,
			rotation: -8,
			duration: 7.6,
			delay: .5
		}),
		accent("service-cta-tooth-c", "left", "bottom", { delay: 1.1 })
	]
};
//#endregion
//#region src/components/decor/DentalParallaxBackground.tsx
function DentalParallaxBackground({ surface, className }) {
	const ref = useRef(null);
	const shouldReduceMotion = useReducedMotion();
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"]
	});
	const items = dentalDecorBySurface[surface];
	return /* @__PURE__ */ jsx(motion.div, {
		ref,
		"aria-hidden": "true",
		className: cn("pointer-events-none absolute inset-0 z-0 overflow-hidden", "[mask-image:linear-gradient(to_bottom,transparent,black_6%,black_94%,transparent)]", className),
		children: items.map((item) => /* @__PURE__ */ jsx(DecorativeTooth, {
			item,
			progress: scrollYProgress,
			shouldReduceMotion: Boolean(shouldReduceMotion)
		}, item.id))
	});
}
function DecorativeTooth({ item, progress, shouldReduceMotion }) {
	const y = useTransform(progress, [0, 1], shouldReduceMotion ? [0, 0] : [item.parallax, -item.parallax]);
	const sway = item.sway ?? 5;
	const drift = item.floatX ?? 6;
	const lift = item.float;
	return /* @__PURE__ */ jsx(motion.div, {
		className: cn("absolute select-none will-change-transform", item.className),
		style: {
			y,
			rotate: item.rotation,
			opacity: item.opacity
		},
		children: /* @__PURE__ */ jsx(motion.img, {
			src: item.src,
			alt: "",
			className: "block h-auto w-full [filter:drop-shadow(0_20px_32px_rgba(68,45,34,0.22))_drop-shadow(0_6px_16px_rgba(255,255,255,0.4))]",
			draggable: false,
			loading: "lazy",
			decoding: "async",
			animate: shouldReduceMotion ? void 0 : {
				y: [
					0,
					-lift * .4,
					-lift,
					-lift * .55,
					0
				],
				x: [
					0,
					drift * .6,
					drift,
					drift * .35,
					0
				],
				rotate: [
					-sway,
					sway * .6,
					sway,
					sway * .35,
					-sway
				],
				scale: [
					1,
					1.02,
					1.05,
					1.02,
					1
				]
			},
			transition: shouldReduceMotion ? void 0 : {
				duration: item.duration,
				delay: item.delay,
				repeat: Infinity,
				ease: [
					.42,
					0,
					.58,
					1
				],
				times: [
					0,
					.22,
					.5,
					.78,
					1
				]
			}
		})
	});
}
//#endregion
export { DentalParallaxBackground as t };
