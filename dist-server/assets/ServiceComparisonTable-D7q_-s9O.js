import { t as cn } from "./utils-BmXddvPc.js";
import { Fragment } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/services/ServiceComparisonTable.tsx
var toneStyles = {
	primary: { header: "bg-[#F4E7E4]/80 text-primary" },
	blue: { header: "bg-[#E8F4FA] text-[#2F6F8F]" }
};
function ServiceComparisonTable({ title, columns, rows, className }) {
	const gridTemplateColumns = `minmax(8.5rem, 1fr) repeat(${columns.length}, minmax(0, 1.15fr))`;
	const valueGridClass = columns.length > 1 ? "grid-cols-2 divide-x divide-[#EEF2F4]" : "grid-cols-1";
	return /* @__PURE__ */ jsxs("div", {
		className: cn("border-t border-[#DDE3E7] pt-8", className),
		children: [
			/* @__PURE__ */ jsx("h4", {
				className: "font-display text-2xl font-normal text-[#1F2528] md:text-3xl",
				children: title
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mt-5 hidden overflow-hidden rounded-2xl border border-[#DDE3E7] bg-white shadow-[0_12px_40px_rgba(31,37,40,0.04)] sm:block",
				children: /* @__PURE__ */ jsxs("div", {
					className: "grid gap-px bg-[#DDE3E7]",
					style: { gridTemplateColumns },
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "bg-[#FAFBFC] px-4 py-4",
							"aria-hidden": "true"
						}),
						columns.map((column) => /* @__PURE__ */ jsx("div", {
							className: cn("px-4 py-4 text-center text-sm font-bold leading-snug", toneStyles[column.tone].header),
							children: column.title
						}, column.id)),
						rows.map((row) => /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
							className: "flex items-center bg-[#FAFBFC] px-4 py-4 text-sm font-semibold leading-snug text-[#1F2528]",
							children: row.label
						}), columns.map((column) => /* @__PURE__ */ jsx("div", {
							className: "flex items-center bg-white px-4 py-4 text-sm leading-relaxed text-[#606A70]",
							children: row.values[column.id]
						}, `${row.label}-${column.id}`))] }, row.label))
					]
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mt-5 overflow-hidden rounded-2xl border border-[#DDE3E7] bg-white shadow-[0_10px_28px_rgba(31,37,40,0.04)] sm:hidden",
				children: [/* @__PURE__ */ jsx("div", {
					className: cn("grid border-b border-[#DDE3E7]", valueGridClass),
					role: "row",
					"aria-label": columns.map((c) => c.title).join(", "),
					children: columns.map((column) => /* @__PURE__ */ jsx("div", {
						role: "columnheader",
						className: cn("px-3 py-3.5 text-center text-xs font-bold leading-snug", toneStyles[column.tone].header),
						children: column.title
					}, column.id))
				}), rows.map((row, index) => /* @__PURE__ */ jsxs("article", {
					className: cn(index < rows.length - 1 && "border-b border-[#EEF2F4]"),
					children: [/* @__PURE__ */ jsx("p", {
						className: "border-b border-[#EEF2F4] bg-[#FAFBFC] px-4 py-2.5 text-xs font-bold uppercase tracking-[0.06em] text-[#8A949B]",
						children: row.label
					}), /* @__PURE__ */ jsx("div", {
						className: cn("grid bg-white", valueGridClass),
						children: columns.map((column) => /* @__PURE__ */ jsx("p", {
							className: "px-3 py-3.5 text-sm leading-relaxed text-[#606A70]",
							children: row.values[column.id]
						}, `${row.label}-${column.id}`))
					})]
				}, row.label))]
			})
		]
	});
}
//#endregion
export { ServiceComparisonTable as t };
