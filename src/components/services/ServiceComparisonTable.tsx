import { Fragment } from "react";
import { cn } from "@/lib/utils";

export type ComparisonColumn = {
  id: string;
  title: string;
  tone: "primary" | "blue";
};

export type ComparisonRow = {
  label: string;
  values: Record<string, string>;
};

type ServiceComparisonTableProps = {
  title: string;
  columns: ComparisonColumn[];
  rows: ComparisonRow[];
  className?: string;
};

const toneStyles = {
  primary: {
    header: "bg-[#F4E7E4]/80 text-primary",
  },
  blue: {
    header: "bg-[#E8F4FA] text-[#2F6F8F]",
  },
};

export function ServiceComparisonTable({ title, columns, rows, className }: ServiceComparisonTableProps) {
  const gridTemplateColumns = `minmax(8.5rem, 1fr) repeat(${columns.length}, minmax(0, 1.15fr))`;
  const valueGridClass = columns.length > 1 ? "grid-cols-2 divide-x divide-[#EEF2F4]" : "grid-cols-1";

  return (
    <div className={cn("border-t border-[#DDE3E7] pt-8", className)}>
      <h4 className="font-display text-2xl font-normal text-[#1F2528] md:text-3xl">{title}</h4>

      {/* Desktop */}
      <div className="mt-5 hidden overflow-hidden rounded-2xl border border-[#DDE3E7] bg-white shadow-[0_12px_40px_rgba(31,37,40,0.04)] sm:block">
        <div className="grid gap-px bg-[#DDE3E7]" style={{ gridTemplateColumns }}>
          <div className="bg-[#FAFBFC] px-4 py-4" aria-hidden="true" />
          {columns.map((column) => (
            <div
              key={column.id}
              className={cn(
                "px-4 py-4 text-center text-sm font-bold leading-snug",
                toneStyles[column.tone].header
              )}
            >
              {column.title}
            </div>
          ))}

          {rows.map((row) => (
            <Fragment key={row.label}>
              <div className="flex items-center bg-[#FAFBFC] px-4 py-4 text-sm font-semibold leading-snug text-[#1F2528]">
                {row.label}
              </div>
              {columns.map((column) => (
                <div
                  key={`${row.label}-${column.id}`}
                  className="flex items-center bg-white px-4 py-4 text-sm leading-relaxed text-[#606A70]"
                >
                  {row.values[column.id]}
                </div>
              ))}
            </Fragment>
          ))}
        </div>
      </div>

      {/* Mobile: column names once at top, rows show only differences */}
      <div className="mt-5 overflow-hidden rounded-2xl border border-[#DDE3E7] bg-white shadow-[0_10px_28px_rgba(31,37,40,0.04)] sm:hidden">
        <div
          className={cn("grid border-b border-[#DDE3E7]", valueGridClass)}
          role="row"
          aria-label={columns.map((c) => c.title).join(", ")}
        >
          {columns.map((column) => (
            <div
              key={column.id}
              role="columnheader"
              className={cn(
                "px-3 py-3.5 text-center text-xs font-bold leading-snug",
                toneStyles[column.tone].header
              )}
            >
              {column.title}
            </div>
          ))}
        </div>

        {rows.map((row, index) => (
          <article
            key={row.label}
            className={cn(index < rows.length - 1 && "border-b border-[#EEF2F4]")}
          >
            <p className="border-b border-[#EEF2F4] bg-[#FAFBFC] px-4 py-2.5 text-xs font-bold uppercase tracking-[0.06em] text-[#8A949B]">
              {row.label}
            </p>
            <div className={cn("grid bg-white", valueGridClass)}>
              {columns.map((column) => (
                <p
                  key={`${row.label}-${column.id}`}
                  className="px-3 py-3.5 text-sm leading-relaxed text-[#606A70]"
                >
                  {row.values[column.id]}
                </p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
