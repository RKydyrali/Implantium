import { motion } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";
import heroClinicalImplant from "@/assets/hero-clinical-implant.png";
import { useLanguage } from "@/hooks/useLanguage";
import { landingCopy } from "@/data/landing";
import { Button } from "@/components/ui/button";
import { BookingModal } from "@/components/sections/BookingModal";

export function Hero() {
  const { language } = useLanguage();
  const t = landingCopy[language];

  return (
    <section className="relative isolate overflow-hidden pt-[5.4rem]">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroClinicalImplant}
          alt={t.hero.imageAlt}
          className="absolute inset-0 h-full w-full object-cover object-[95%_center] sm:object-[76%_center] md:object-[66%_center] lg:object-[62%_center]"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-white/50 sm:hidden" />
      </div>

      <div className="section-shell pb-8 pt-1 sm:pt-8 md:pb-12 md:pt-10 lg:pb-16">
        <div className="flex items-center min-h-[540px] sm:min-h-[550px] lg:min-h-[610px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex max-w-2xl flex-col items-start gap-5 sm:gap-6"
          >
            <h1 className="font-display max-w-[12ch] text-[2.4rem] font-normal leading-[1.05] text-[#1F2528] sm:text-[3.5rem] md:text-6xl lg:text-[5.2rem]">
              {t.hero.lineOne}
              <br />
              {t.hero.lineTwo}
              <br />
              <span>{t.hero.accent}</span>
              <br />
              <span className="italic text-primary">{t.hero.lineThree}</span>
            </h1>

            <p className="max-w-[20rem] text-sm leading-relaxed text-[#606A70] sm:max-w-[35rem] sm:text-base md:text-lg">
              {t.hero.subheadline}
            </p>

            <div className="flex w-full flex-col gap-3 pt-1 sm:w-auto sm:flex-row sm:flex-wrap">
              <BookingModal>
                <Button
                  size="lg"
                  className="accent-button-shadow h-14 rounded-2xl bg-primary px-7 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#8F2F25] active:translate-y-[1px]"
                >
                  {t.hero.primaryCta}
                  <ArrowRight data-icon="inline-end" className="size-4" />
                </Button>
              </BookingModal>
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
        </div>
      </div>
    </section>
  );
}
