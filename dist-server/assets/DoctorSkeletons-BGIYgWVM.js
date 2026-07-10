import { t as cn } from "./utils-DVvWhTIj.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { anyApi, componentsGeneric } from "convex/server";
//#region convex/_generated/api.js
/**
* Generated `api` utility.
*
* THIS CODE IS AUTOMATICALLY GENERATED.
*
* To regenerate, run `npx convex dev`.
* @module
*/
/**
* A utility for referencing Convex functions in your app's API.
*
* Usage:
* ```js
* const myFunctionReference = api.myModule.myFunction;
* ```
*/
var api = anyApi;
componentsGeneric();
//#endregion
//#region src/components/common/DoctorSkeletons.tsx
function SkeletonBlock({ className }) {
	return /* @__PURE__ */ jsx("div", {
		"aria-hidden": "true",
		className: cn("motion-skeleton rounded-xl", className)
	});
}
function CompactDoctorCardSkeleton({ variant = "vertical" }) {
	if (variant === "horizontal") return /* @__PURE__ */ jsx("article", {
		className: "h-full overflow-hidden rounded-[1.2rem] border border-border/70 bg-white shadow-[0_16px_42px_rgba(68,45,34,0.06)]",
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex h-[11.75rem]",
			children: [/* @__PURE__ */ jsx(SkeletonBlock, { className: "h-full w-36 shrink-0 rounded-none" }), /* @__PURE__ */ jsxs("div", {
				className: "flex min-w-0 flex-1 flex-col justify-center gap-2 p-5",
				children: [
					/* @__PURE__ */ jsx(SkeletonBlock, { className: "h-4 w-4/5" }),
					/* @__PURE__ */ jsx(SkeletonBlock, { className: "h-3 w-full" }),
					/* @__PURE__ */ jsx(SkeletonBlock, { className: "h-3 w-2/3" })
				]
			})]
		})
	});
	return /* @__PURE__ */ jsxs("article", {
		className: "clinical-card-soft overflow-hidden rounded-[1.35rem]",
		children: [/* @__PURE__ */ jsx(SkeletonBlock, { className: "aspect-square rounded-none" }), /* @__PURE__ */ jsxs("div", {
			className: "flex flex-col gap-3 p-5",
			children: [
				/* @__PURE__ */ jsx(SkeletonBlock, { className: "h-3 w-24 rounded-full" }),
				/* @__PURE__ */ jsx(SkeletonBlock, { className: "h-5 w-4/5" }),
				/* @__PURE__ */ jsx(SkeletonBlock, { className: "h-3 w-3/5 rounded-full" }),
				/* @__PURE__ */ jsxs("div", {
					className: "flex flex-col gap-2 pt-1",
					children: [
						/* @__PURE__ */ jsx(SkeletonBlock, { className: "h-3 w-full" }),
						/* @__PURE__ */ jsx(SkeletonBlock, { className: "h-3 w-11/12" }),
						/* @__PURE__ */ jsx(SkeletonBlock, { className: "h-3 w-2/3" })
					]
				})
			]
		})]
	});
}
function HomeDoctorCardSkeleton() {
	return /* @__PURE__ */ jsxs("article", {
		className: "clinical-card clinical-lift flex h-full flex-col overflow-hidden rounded-[1.6rem]",
		children: [/* @__PURE__ */ jsx(SkeletonBlock, { className: "aspect-[4/3.8] rounded-none" }), /* @__PURE__ */ jsxs("div", {
			className: "flex flex-1 flex-col gap-3 p-5",
			children: [
				/* @__PURE__ */ jsx(SkeletonBlock, { className: "h-6 w-20 rounded-full" }),
				/* @__PURE__ */ jsx(SkeletonBlock, { className: "h-5 w-4/5" }),
				/* @__PURE__ */ jsx(SkeletonBlock, { className: "h-3 w-2/3 rounded-full" }),
				/* @__PURE__ */ jsxs("div", {
					className: "flex flex-col gap-2",
					children: [
						/* @__PURE__ */ jsx(SkeletonBlock, { className: "h-3 w-full" }),
						/* @__PURE__ */ jsx(SkeletonBlock, { className: "h-3 w-11/12" }),
						/* @__PURE__ */ jsx(SkeletonBlock, { className: "h-3 w-3/4" })
					]
				}),
				/* @__PURE__ */ jsx(SkeletonBlock, { className: "mt-auto h-11 w-full rounded-2xl" })
			]
		})]
	});
}
function DoctorsGridCardSkeleton() {
	return /* @__PURE__ */ jsxs("article", {
		className: "flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-[#D8E2EA] bg-white shadow-[0_18px_55px_rgba(39,64,95,0.055)]",
		children: [/* @__PURE__ */ jsx(SkeletonBlock, { className: "aspect-[4/3.75] rounded-none" }), /* @__PURE__ */ jsxs("div", {
			className: "flex flex-1 flex-col gap-3 p-5",
			children: [
				/* @__PURE__ */ jsx(SkeletonBlock, { className: "h-6 w-20 rounded-full" }),
				/* @__PURE__ */ jsx(SkeletonBlock, { className: "h-5 w-4/5" }),
				/* @__PURE__ */ jsx(SkeletonBlock, { className: "h-3 w-2/3 rounded-full" }),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-2 flex flex-col gap-3",
					children: [
						/* @__PURE__ */ jsx(SkeletonBlock, { className: "h-3 w-full" }),
						/* @__PURE__ */ jsx(SkeletonBlock, { className: "h-3 w-10/12" }),
						/* @__PURE__ */ jsx(SkeletonBlock, { className: "h-3 w-8/12" })
					]
				})
			]
		})]
	});
}
function FeaturedDoctorSkeleton() {
	return /* @__PURE__ */ jsx("article", {
		className: "overflow-hidden rounded-[1.5rem] border border-[#D8E2EA] bg-white shadow-[0_20px_60px_rgba(39,64,95,0.07)]",
		children: /* @__PURE__ */ jsxs("div", {
			className: "grid gap-0 lg:grid-cols-[0.34fr_0.66fr]",
			children: [/* @__PURE__ */ jsx(SkeletonBlock, { className: "min-h-[16rem] rounded-none sm:min-h-[18rem] lg:min-h-[20rem]" }), /* @__PURE__ */ jsxs("div", {
				className: "flex flex-col justify-center gap-5 p-5 md:p-7 lg:p-8",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex flex-col gap-4",
					children: [
						/* @__PURE__ */ jsx(SkeletonBlock, { className: "h-8 w-4/5" }),
						/* @__PURE__ */ jsx(SkeletonBlock, { className: "h-4 w-2/3 rounded-full" }),
						/* @__PURE__ */ jsxs("div", {
							className: "flex flex-col gap-2 pt-2",
							children: [
								/* @__PURE__ */ jsx(SkeletonBlock, { className: "h-3 w-full" }),
								/* @__PURE__ */ jsx(SkeletonBlock, { className: "h-3 w-11/12" }),
								/* @__PURE__ */ jsx(SkeletonBlock, { className: "h-3 w-3/4" })
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-1 grid max-w-xl gap-3 sm:grid-cols-2",
							children: [/* @__PURE__ */ jsx(SkeletonBlock, { className: "h-16 w-full" }), /* @__PURE__ */ jsx(SkeletonBlock, { className: "h-16 w-full" })]
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex flex-col gap-3 border-t border-[#E4EBF1] pt-4",
					children: [/* @__PURE__ */ jsx(SkeletonBlock, { className: "h-4 w-32" }), /* @__PURE__ */ jsxs("div", {
						className: "flex flex-wrap gap-2",
						children: [
							/* @__PURE__ */ jsx(SkeletonBlock, { className: "h-8 w-28 rounded-full" }),
							/* @__PURE__ */ jsx(SkeletonBlock, { className: "h-8 w-32 rounded-full" }),
							/* @__PURE__ */ jsx(SkeletonBlock, { className: "h-8 w-24 rounded-full" })
						]
					})]
				})]
			})]
		})
	});
}
function AdminDoctorListSkeleton() {
	return /* @__PURE__ */ jsx("div", {
		className: "grid gap-3",
		children: Array.from({ length: 5 }).map((_, index) => /* @__PURE__ */ jsxs("div", {
			className: "grid gap-3 rounded-2xl border border-[#D8E2EA] bg-white p-4 sm:grid-cols-[4rem_1fr_auto] sm:items-center",
			children: [
				/* @__PURE__ */ jsx(SkeletonBlock, { className: "size-16 rounded-2xl" }),
				/* @__PURE__ */ jsxs("div", {
					className: "flex flex-col gap-2",
					children: [/* @__PURE__ */ jsx(SkeletonBlock, { className: "h-4 w-3/4" }), /* @__PURE__ */ jsx(SkeletonBlock, { className: "h-3 w-1/2" })]
				}),
				/* @__PURE__ */ jsx(SkeletonBlock, { className: "h-9 w-28 rounded-full" })
			]
		}, index))
	});
}
//#endregion
export { HomeDoctorCardSkeleton as a, FeaturedDoctorSkeleton as i, CompactDoctorCardSkeleton as n, api as o, DoctorsGridCardSkeleton as r, AdminDoctorListSkeleton as t };
