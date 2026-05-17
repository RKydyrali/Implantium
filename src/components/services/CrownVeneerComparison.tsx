import { useState, type ReactNode } from "react";
import { Crown, Sparkle } from "@phosphor-icons/react";
import type { Language } from "@/types";
import { cn } from "@/lib/utils";
import { getCrownVeneerCopy } from "@/data/crownVeneerComparison";
import crownMaterialsImage from "@/assets/education/crown-materials-comparison.jpg";
import veneersExplainerImage from "@/assets/education/veneers-explainer.jpg";

type CrownVeneerComparisonProps = {
  language: Language;
  compact?: boolean;
};

type CompareTab = "crown" | "veneer";

export function CrownVeneerComparison({ language, compact = false }: CrownVeneerComparisonProps) {
  const copy = getCrownVeneerCopy(language);
  const [activeTab, setActiveTab] = useState<CompareTab>("crown");

  return (
    <section
      className={cn(
        "overflow-hidden rounded-[1.5rem] border border-[#DDE3E7] bg-[linear-gradient(180deg,#FFFFFF_0%,#FAFBFC_100%)] shadow-[0_18px_55px_rgba(31,37,40,0.05)]",
        compact ? "p-4 sm:p-5" : "p-5 sm:p-7"
      )}
      aria-labelledby="crown-veneer-comparison-title"
    >
      <div className={cn("grid gap-6", compact ? "" : "lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-8")}>
        <div>
          <h3
            id="crown-veneer-comparison-title"
            className={cn(
              "font-display font-normal text-[#1F2528]",
              compact ? "text-2xl leading-tight" : "text-3xl md:text-4xl"
            )}
          >
            {copy.sectionTitle}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-[#606A70] md:text-base">{copy.sectionIntro}</p>

          <div className="mt-5 flex rounded-2xl border border-[#DDE3E7] bg-[#FAFBFC] p-1 lg:hidden">
            <TabButton
              active={activeTab === "crown"}
              onClick={() => setActiveTab("crown")}
              icon={<Crown weight="duotone" className="size-4" />}
              label={copy.crownTitle}
            />
            <TabButton
              active={activeTab === "veneer"}
              onClick={() => setActiveTab("veneer")}
              icon={<Sparkle weight="duotone" className="size-4" />}
              label={copy.veneerTitle}
            />
          </div>

          <div className="mt-5 space-y-4 lg:mt-6">
            <ComparisonCard
              title={copy.crownTitle}
              icon={<Crown weight="duotone" className="size-5" />}
              points={copy.crownPoints}
              className={cn(activeTab !== "crown" && "hidden lg:block")}
            />
            <ComparisonCard
              title={copy.veneerTitle}
              icon={<Sparkle weight="duotone" className="size-5" />}
              points={copy.veneerPoints}
              className={cn(activeTab !== "veneer" && "hidden lg:block")}
            />
          </div>
        </div>

        <div className="grid gap-4">
          <VisualPanel
            title={copy.crownTitle}
            caption={copy.materialsCaption}
            imageSrc={crownMaterialsImage}
            imageAlt={
              language === "ru"
                ? "Сравнение цельной керамической и металлокерамической коронок в разрезе"
                : "Бітімді керамикалық және металлокерамикалық қаптамаларды салыстыру"
            }
            badges={[
              { label: copy.ceramicLabel, hint: copy.ceramicHint, position: "left" },
              { label: copy.pfmLabel, hint: copy.pfmHint, position: "right" },
            ]}
            className={cn(activeTab !== "crown" && "hidden lg:block")}
            materialsHeading={copy.materialsTitle}
          />
          <VisualPanel
            title={copy.veneerTitle}
            caption={copy.veneerCaption}
            imageSrc={veneersExplainerImage}
            imageAlt={
              language === "ru"
                ? "Улыбка и схема установки виниров на передние зубы"
                : "Күлкі және алдыңғы тістерге винир орнату схемасы"
            }
            badges={[{ label: copy.veneerShellLabel, hint: copy.veneerShellHint, position: "center" }]}
            className={cn(activeTab !== "veneer" && "hidden lg:block")}
          />
        </div>
      </div>

      <div className="mt-6 border-t border-[#DDE3E7] pt-6">
        <h4 className="text-sm font-bold uppercase tracking-[0.12em] text-primary">{copy.comparisonTitle}</h4>
        <div className="mt-4 overflow-hidden rounded-2xl border border-[#DDE3E7] bg-white">
          <div className="hidden grid-cols-[1.1fr_1fr_1fr] gap-3 border-b border-[#DDE3E7] bg-[#FAFBFC] px-4 py-3 text-xs font-bold uppercase tracking-[0.08em] text-[#8A949B] sm:grid">
            <span />
            <span className="text-[#1F2528]">{copy.crownTitle}</span>
            <span className="text-[#1F2528]">{copy.veneerTitle}</span>
          </div>
          {copy.rows.map((row, index) => (
            <div
              key={row.label}
              className={cn(
                "grid gap-2 px-4 py-3.5 sm:grid-cols-[1.1fr_1fr_1fr] sm:gap-3 sm:py-4",
                index < copy.rows.length - 1 && "border-b border-[#EEF2F4]"
              )}
            >
              <p className="text-xs font-bold uppercase tracking-[0.06em] text-[#8A949B] sm:text-sm sm:normal-case sm:tracking-normal sm:text-[#606A70]">
                {row.label}
              </p>
              <p className="text-sm leading-relaxed text-[#1F2528]">
                <span className="mb-1 block font-bold text-primary sm:hidden">{copy.crownTitle}</span>
                {row.crown}
              </p>
              <p className="text-sm leading-relaxed text-[#1F2528]">
                <span className="mb-1 block font-bold text-primary sm:hidden">{copy.veneerTitle}</span>
                {row.veneer}
              </p>
            </div>
          ))}
        </div>
      </div>
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
        active ? "bg-white text-primary shadow-sm" : "text-[#606A70] hover:text-[#1F2528]"
      )}
    >
      {icon}
      {label}
    </button>
  );
}

function ComparisonCard({
  title,
  icon,
  points,
  className,
}: {
  title: string;
  icon: ReactNode;
  points: readonly string[];
  className?: string;
}) {
  return (
    <article className={cn("rounded-2xl border border-[#DDE3E7] bg-white p-4", className)}>
      <div className="mb-3 flex items-center gap-2.5">
        <span className="flex size-9 items-center justify-center rounded-xl bg-[#F4E7E4]/70 text-primary">{icon}</span>
        <h4 className="text-lg font-bold text-[#1F2528]">{title}</h4>
      </div>
      <ul className="grid gap-2.5">
        {points.map((point) => (
          <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-[#606A70]">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function VisualPanel({
  title,
  caption,
  imageSrc,
  imageAlt,
  badges,
  className,
  materialsHeading,
}: {
  title: string;
  caption: string;
  imageSrc: string;
  imageAlt: string;
  badges: { label: string; hint: string; position: "left" | "right" | "center" }[];
  className?: string;
  materialsHeading?: string;
}) {
  return (
    <article className={cn("overflow-hidden rounded-2xl border border-[#DDE3E7] bg-white", className)}>
      <div className="relative aspect-[16/10] overflow-hidden bg-[#0F1214]">
        <img src={imageSrc} alt={imageAlt} className="size-full object-cover object-center" loading="lazy" decoding="async" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(15,18,20,0)_52%,rgba(15,18,20,0.72)_100%)]" />
        {badges.map((badge) => (
          <div
            key={badge.label}
            className={cn(
              "absolute bottom-3 max-w-[46%] rounded-xl border border-white/15 bg-[#1F2528]/78 px-3 py-2 text-white backdrop-blur-sm",
              badge.position === "left" && "left-3",
              badge.position === "right" && "right-3",
              badge.position === "center" && "left-1/2 -translate-x-1/2 text-center"
            )}
          >
            <p className="text-xs font-bold leading-tight">{badge.label}</p>
            <p className="mt-0.5 text-[10px] leading-snug text-white/75">{badge.hint}</p>
          </div>
        ))}
      </div>
      <div className="p-4">
        {materialsHeading && (
          <p className="mb-1 text-xs font-bold uppercase tracking-[0.12em] text-primary">{materialsHeading}</p>
        )}
        <h4 className="text-base font-bold text-[#1F2528]">{title}</h4>
        <p className="mt-2 text-sm leading-relaxed text-[#606A70]">{caption}</p>
      </div>
    </article>
  );
}
