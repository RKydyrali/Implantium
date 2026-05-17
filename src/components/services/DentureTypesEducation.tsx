import { useState, type ReactNode } from "react";
import { Anchor, ArrowsLeftRight, Tooth } from "@phosphor-icons/react";
import type { Language } from "@/types";
import { cn } from "@/lib/utils";
import { getDentureTypesCopy } from "@/data/dentureTypes";
import { ServiceComparisonTable } from "@/components/services/ServiceComparisonTable";
import implantArchImage from "@/assets/education/implant-arch-prosthesis.jpg";
import partialDentureImage from "@/assets/education/partial-denture-removable.jpg";

type DentureTypesEducationProps = {
  language: Language;
};

type SolutionTab = "fixed" | "removable";

export function DentureTypesEducation({ language }: DentureTypesEducationProps) {
  const copy = getDentureTypesCopy(language);
  const [activeTab, setActiveTab] = useState<SolutionTab>("fixed");

  return (
    <section
      className="overflow-hidden rounded-[1.5rem] border border-[#DDE3E7] bg-white p-5 shadow-[0_18px_55px_rgba(31,37,40,0.05)] sm:p-7"
      aria-labelledby="denture-types-title"
    >
      <h3 id="denture-types-title" className="font-display text-3xl font-normal text-[#1F2528] md:text-4xl">
        {copy.sectionTitle}
      </h3>
      <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#606A70]">{copy.sectionIntro}</p>

      <div className="mt-6 flex rounded-2xl border border-[#DDE3E7] bg-[#FAFBFC] p-1 md:hidden">
        <TabButton
          active={activeTab === "fixed"}
          onClick={() => setActiveTab("fixed")}
          icon={<Anchor weight="duotone" className="size-4" />}
          label={copy.fixedTitle}
        />
        <TabButton
          active={activeTab === "removable"}
          onClick={() => setActiveTab("removable")}
          icon={<ArrowsLeftRight weight="duotone" className="size-4" />}
          label={copy.removableTitle}
        />
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <SolutionVisual
          title={copy.fixedTitle}
          caption={copy.fixedCaption}
          imageSrc={implantArchImage}
          imageAlt={
            language === "ru"
              ? "Несъёмный протез на имплантах — полный зубной ряд"
              : "Импланттағы тұрақты толық протез"
          }
          badge={copy.fixedBadge}
          hint={copy.fixedHint}
          className={cn(activeTab !== "fixed" && "hidden md:block")}
        />
        <SolutionVisual
          title={copy.removableTitle}
          caption={copy.removableCaption}
          imageSrc={partialDentureImage}
          imageAlt={
            language === "ru"
              ? "Съёмный частичный протез с металлическими кламмерами"
              : "Металл ілмектері бар алмалы жартылай протез"
          }
          badge={copy.removableBadge}
          hint={copy.removableHint}
          className={cn(activeTab !== "removable" && "hidden md:block")}
        />
      </div>

      <div className="mt-8">
        <h4 className="text-sm font-bold uppercase tracking-[0.12em] text-primary">{copy.typesTitle}</h4>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {copy.types.map((type) => (
            <article
              key={type.id}
              className="rounded-2xl border border-[#DDE3E7] bg-[#FAFBFC] p-4"
            >
              <div className="mb-2 flex items-center gap-2">
                <span className="flex size-8 items-center justify-center rounded-xl bg-[#EEF6FA] text-[#3D7EA6]">
                  <Tooth weight="duotone" className="size-4" />
                </span>
                <h5 className="text-base font-bold text-[#1F2528]">{type.title}</h5>
              </div>
              <p className="text-sm leading-relaxed text-[#606A70]">
                <span className="font-semibold text-[#1F2528]">+ </span>
                {type.pros}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#8A949B]">
                <span className="font-semibold">− </span>
                {type.cons}
              </p>
            </article>
          ))}
        </div>
        <p className="mt-4 text-sm leading-relaxed text-[#606A70]">{copy.timelineNote}</p>
      </div>

      <ServiceComparisonTable
        className="mt-8"
        title={copy.comparisonTitle}
        columns={[
          { id: "fixed", title: copy.fixedTitle, tone: "blue" },
          { id: "removable", title: copy.removableTitle, tone: "primary" },
        ]}
        rows={copy.rows.map((row) => ({
          label: row.label,
          values: { fixed: row.fixed, removable: row.removable },
        }))}
      />
    </section>
  );
}

function TabButton({
  active,
  onClick,
  icon,
  label,
}: {
  active: boolean;
  onClick: () => void;
  icon: ReactNode;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex flex-1 items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-sm font-bold transition-colors",
        active ? "bg-white text-[#3D7EA6] shadow-sm" : "text-[#606A70] hover:text-[#1F2528]"
      )}
    >
      {icon}
      <span className="text-left leading-snug">{label}</span>
    </button>
  );
}

function SolutionVisual({
  title,
  caption,
  imageSrc,
  imageAlt,
  badge,
  hint,
  className,
}: {
  title: string;
  caption: string;
  imageSrc: string;
  imageAlt: string;
  badge: string;
  hint: string;
  className?: string;
}) {
  return (
    <article className={cn("overflow-hidden rounded-2xl border border-[#DDE3E7] bg-[#FAFBFC]", className)}>
      <div className="relative aspect-[4/3] overflow-hidden bg-[#E8F4FA]">
        <img src={imageSrc} alt={imageAlt} className="size-full object-cover object-center" loading="lazy" decoding="async" />
        <div className="absolute bottom-3 left-3 rounded-xl border border-white/40 bg-[#1F2528]/75 px-3 py-2 text-white backdrop-blur-sm">
          <p className="text-xs font-bold leading-tight">{badge}</p>
          <p className="mt-0.5 text-[10px] leading-snug text-white/75">{hint}</p>
        </div>
      </div>
      <div className="p-4">
        <h4 className="text-base font-bold text-[#1F2528]">{title}</h4>
        <p className="mt-2 text-sm leading-relaxed text-[#606A70]">{caption}</p>
      </div>
    </article>
  );
}
