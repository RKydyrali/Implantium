import { motion } from "framer-motion";
import { ArrowRight, HandHeart } from "@phosphor-icons/react";
import heroClinicalImplant from "@/assets/hero-clinical-implant.png";
import { useLanguage } from "@/hooks/useLanguage";
import { landingCopy } from "@/data/landing";
import { Button } from "@/components/ui/button";
import { BookingModal } from "@/components/sections/BookingModal";

export function Hero() {
  const { language } = useLanguage();
  const t = landingCopy[language];

  return (
    <section className="relative isolate overflow-hidden bg-white pt-[5.4rem]">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroClinicalImplant}
          alt={t.hero.imageAlt}
          className="absolute inset-0 h-full w-full object-cover object-[95%_center] sm:object-[76%_center] md:object-[66%_center] lg:object-[62%_center]"
          loading="eager"
          decoding="async"
        />
        {/* Subtle brightness + blur overlay to make content pop */}
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[4px] sm:bg-white/10 sm:backdrop-blur-0" />
        <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-white/95 via-white/80 to-transparent sm:w-[60%] md:w-[50%]" />
      </div>

      <div className="section-shell pb-8 pt-4 sm:pt-12 md:pb-12 md:pt-16 lg:pb-20">
        <div className="flex items-center min-h-[500px] sm:min-h-[580px] lg:min-h-[640px]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex max-w-2xl flex-col items-start gap-6 sm:gap-8"
          >
            <div className="flex flex-col gap-1">
              <h1 className="text-[2.6rem] font-medium leading-[1.15] tracking-tight text-[#1F2528] sm:text-[3.8rem] md:text-[4.4rem] lg:text-[4.8rem]">
                {language === "kk" ? (
                  <>
                    Ақтаудағы <br />
                    заманауи <br />
                    стоматология <br />
                    Сау әрі әдемі <br />
                    күлкіге <br />
                    <span className="font-display italic text-primary">{t.hero.lineThree}</span>
                  </>
                ) : (
                  <>
                    Современная <br />
                    стоматология <br />
                    в Актау — <br />
                    путь к <br />
                    <span className="font-display italic text-primary">здоровой улыбке</span>
                  </>
                )}
              </h1>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex max-w-[22rem] items-center gap-3 rounded-[1.5rem] border border-white/80 bg-white/85 p-3 pr-5 shadow-[0_12px_45px_rgba(31,37,40,0.06)] backdrop-blur-xl sm:max-w-[28rem] sm:gap-4 sm:rounded-[2rem] sm:p-4 sm:pr-6"
            >
              <div className="flex size-11 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-[#F4E7E4] text-primary sm:size-14">
                <HandHeart weight="bold" className="size-5 sm:size-7" />
              </div>
              <p className="text-[13px] font-semibold leading-snug text-[#343D42] sm:text-sm sm:font-medium sm:leading-relaxed">
                {t.hero.subheadline}
              </p>
            </motion.div>

            <div className="flex w-full flex-col gap-4 pt-2 sm:w-auto sm:flex-row">
              <BookingModal>
                <Button
                  size="lg"
                  className="accent-button-shadow h-16 rounded-[1.25rem] bg-primary px-10 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#8F2F25] active:translate-y-[1px]"
                >
                  {t.hero.primaryCta}
                  <ArrowRight weight="bold" className="ml-2 size-4 opacity-70" />
                </Button>
              </BookingModal>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-16 rounded-[1.25rem] border-white/50 bg-white/70 px-10 text-base font-bold text-[#1F2528] shadow-[0_12px_30px_rgba(31,37,40,0.03)] backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-white active:translate-y-[1px]"
              >
                <a href="/#services">
                  {t.hero.secondaryCta}
                  <ArrowRight weight="bold" className="ml-2 size-4 text-[#606A70]" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
