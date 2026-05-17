import type { ReactNode } from "react";
import type { Language } from "@/types";
import { cn } from "@/lib/utils";

const navCopy = {
  ru: {
    crowns: "Коронки и виниры",
    prosthetics: "Протезы",
  },
  kk: {
    crowns: "Қаптамалар мен винирлер",
    prosthetics: "Протездер",
  },
} as const;

type OrthopedicSectionNavProps = {
  language: Language;
  className?: string;
};

export function OrthopedicSectionNav({ language, className }: OrthopedicSectionNavProps) {
  const copy = navCopy[language];

  return (
    <nav
      className={cn(
        "flex flex-wrap gap-2 rounded-2xl border border-[#DDE3E7] bg-[#FAFBFC] p-2",
        className
      )}
      aria-label={language === "ru" ? "Разделы ортопедии" : "Ортопедия бөлімдері"}
    >
      <NavPill href="#crown-veneer-comparison-title">{copy.crowns}</NavPill>
      <NavPill href="#prosthetics">{copy.prosthetics}</NavPill>
    </nav>
  );
}

function NavPill({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center rounded-xl bg-white px-4 py-2.5 text-sm font-bold text-[#1F2528] shadow-sm transition-colors hover:text-primary"
    >
      {children}
    </a>
  );
}
