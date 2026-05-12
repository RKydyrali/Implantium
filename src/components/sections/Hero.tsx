import { motion } from "framer-motion";
import {
  ArrowRight,
  ClipboardText,
  ShieldCheck,
  Tooth,
  UserCircle,
  type IconProps,
} from "@phosphor-icons/react";
import type { ComponentType } from "react";
import heroClinicalImplant from "@/assets/hero-clinical-implant.png";
import { useLanguage } from "@/hooks/useLanguage";
import { landingCopy } from "@/data/landing";
import { Button } from "@/components/ui/button";

const trustIcons: ComponentType<IconProps>[] = [
  ShieldCheck,
  UserCircle,
  Tooth,
  ClipboardText,
];

export function Hero() {
  const { language } = useLanguage();
  const t = landingCopy[language];

  return (
    <section className="relative isolate overflow-hidden bg-[#F5F7F8] pt-[5.4rem]">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(200,211,217,0.48),transparent_34rem),linear-gradient(180deg,#ffffff_0%,#f5f7f8_64%,#eef2f4_100%)]" />
        <div className="cool-grid absolute inset-x-0 top-24 h-[26rem] opacity-35 [mask-image:linear-gradient(to_bottom,transparent,black_22%,transparent)]" />
      </div>

      <div className="section-shell pb-8 pt-8 md:pb-12 md:pt-10 lg:pb-16">
        <div className="grid items-center gap-8 lg:min-h-[610px] lg:grid-cols-[0.88fr_1.12fr] lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex max-w-2xl flex-col items-start gap-6"
          >
            <span className="rounded-full border border-[#DDE3E7] bg-white/80 px-4 py-2 text-sm font-semibold text-[#606A70] shadow-[0_12px_36px_rgba(31,37,40,0.04)] backdrop-blur">
              {t.hero.eyebrow}
            </span>

            <h1 className="font-display max-w-[12ch] text-[3rem] font-normal leading-[0.98] text-[#1F2528] sm:text-6xl lg:text-[5.2rem]">
              {t.hero.lineOne}
              <br />
              {t.hero.lineTwo}
              <br />
              <span>{t.hero.accent}</span>
              <br />
              <span className="italic text-primary">{t.hero.lineThree}</span>
            </h1>

            <p className="max-w-[35rem] text-base leading-8 text-[#606A70] md:text-lg">
              {t.hero.subheadline}
            </p>

            <div className="flex w-full flex-col gap-3 pt-1 sm:w-auto sm:flex-row sm:flex-wrap">
              <Button
                asChild
                size="lg"
                className="accent-button-shadow h-14 rounded-2xl bg-primary px-7 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#8F2F25] active:translate-y-[1px]"
              >
                <a href="/#booking">
                  {t.hero.primaryCta}
                  <ArrowRight data-icon="inline-end" className="size-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-14 rounded-2xl border-[#DDE3E7] bg-white/75 px-6 text-sm font-bold text-[#1F2528] shadow-[0_12px_30px_rgba(31,37,40,0.04)] backdrop-blur transition-all hover:-translate-y-0.5 hover:border-[#C8D3D9] hover:bg-white active:translate-y-[1px]"
              >
                <a href="/#services">
                  {t.hero.secondaryCta}
                  <span className="flex size-7 items-center justify-center rounded-full bg-[#EEF2F4] text-primary">
                    <ArrowRight className="size-3.5" />
                  </span>
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
            className="relative min-h-[21rem] overflow-hidden rounded-[2rem] border border-white bg-[#EEF2F4] shadow-[0_30px_90px_rgba(31,37,40,0.10)] sm:min-h-[28rem] lg:min-h-[34rem]"
          >
            <img
              src={heroClinicalImplant}
              alt={t.hero.imageAlt}
              className="absolute inset-0 size-full object-cover object-[76%_center] md:object-[66%_center] lg:object-[62%_center]"
              loading="eager"
              decoding="async"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(245,247,248,0.22)_0%,rgba(245,247,248,0)_56%)] md:bg-[linear-gradient(90deg,rgba(245,247,248,0.46)_0%,rgba(245,247,248,0)_54%)] lg:bg-[linear-gradient(90deg,rgba(245,247,248,0.38)_0%,rgba(245,247,248,0)_44%)]" />
            <div className="absolute bottom-5 left-5 rounded-2xl border border-white/80 bg-white/78 px-4 py-3 shadow-[0_18px_50px_rgba(31,37,40,0.08)] backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6E7B83]">
                IMPLANTIUM
              </p>
              <p className="mt-1 text-sm font-semibold text-[#1F2528]">
                {language === "ru" ? "Клиническая точность" : "Клиникалық дәлдік"}
              </p>
            </div>
          </motion.div>
        </div>

        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {t.trustBadges.map((badge, index) => {
            const Icon = trustIcons[index] ?? ShieldCheck;
            return (
              <div
                key={badge}
                className="clinical-card clinical-lift flex min-h-[6rem] items-start gap-4 rounded-2xl p-4"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl border border-[#E8EDF0] bg-[#FAFBFC] text-primary">
                  <Icon weight="duotone" className="size-6" />
                </span>
                <span className="pt-1 text-sm font-semibold leading-relaxed text-[#1F2528]">
                  {badge}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
