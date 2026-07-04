import { useEffect, useMemo, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import {
  GlobeHemisphereWest,
  InstagramLogo,
  MapPin,
  Phone,
  WhatsappLogo,
} from "@phosphor-icons/react"

import { ActionLink } from "./components/ActionLink"
import { FloatingAsset } from "./components/FloatingAsset"
import { LanguageToggle } from "./components/LanguageToggle"
import { content, type Language } from "./content"
import backgroundImage from "@/assets/generated/cream-dental-background.png"
import implantImage from "@/assets/generated/implant.png"
import logoImage from "@/assets/generated/implantium-logo-transparent.png"
import pearlsImage from "@/assets/generated/pearls.png"
import toothImage from "@/assets/generated/tooth.png"

const STORAGE_KEY = "implantium-link-page-language"

function getInitialLanguage(): Language {
  if (typeof window === "undefined") {
    return "kk"
  }

  const saved = window.localStorage.getItem(STORAGE_KEY)
  return saved === "ru" || saved === "kk" ? saved : "kk"
}

export default function Visitka() {
  const [language, setLanguage] = useState<Language>(getInitialLanguage)
  const shouldReduceMotion = useReducedMotion()
  const copy = content[language]

  const actions = useMemo(
    () => [
      { ...copy.actions.call, icon: Phone },
      { ...copy.actions.whatsapp, icon: WhatsappLogo },
      { ...copy.actions.location, icon: MapPin },
      { ...copy.actions.instagram, icon: InstagramLogo },
      { ...copy.actions.website, icon: GlobeHemisphereWest },
    ],
    [copy]
  )

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language)
    document.documentElement.lang = language === "kk" ? "kk" : "ru"
    document.title = copy.metaTitle
  }, [copy.metaTitle, language])

  return (
    <main className="relative isolate min-h-[100dvh] overflow-hidden bg-[#f5eee6] text-[#322927]">
      <img
        src={backgroundImage}
        alt=""
        className="absolute inset-0 -z-20 size-full object-cover object-center"
        loading="eager"
        decoding="async"
      />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,250,244,0.38),rgba(247,237,226,0.08)_48%,rgba(226,205,187,0.2))]" />

      <FloatingAsset
        src={implantImage}
        alt=""
        className="right-[-6.2rem] top-[8.6rem] hidden w-[13rem] rotate-[14deg] opacity-90 sm:block sm:right-[calc(50%-25rem)] sm:top-[7.4rem] sm:w-[15rem] lg:right-[calc(50%-31rem)]"
        delay={0.25}
        duration={9}
        floatY={22}
        floatX={10}
        rotate={7}
      />
      <FloatingAsset
        src={toothImage}
        alt=""
        className="left-[-6.8rem] top-[15rem] w-[12rem] -rotate-[18deg] opacity-70 sm:left-[calc(50%-27rem)] sm:top-[17rem] sm:w-[14rem] lg:left-[calc(50%-34rem)]"
        delay={0.8}
        duration={10.5}
        floatY={18}
        floatX={8}
        rotate={6}
      />
      <FloatingAsset
        src={pearlsImage}
        alt=""
        className="bottom-[1.5rem] right-[-5.8rem] w-[13.5rem] opacity-85 sm:bottom-[2.5rem] sm:right-[calc(50%-27rem)] sm:w-[15rem] lg:right-[calc(50%-35rem)]"
        delay={1.1}
        duration={11}
        floatY={20}
        floatX={12}
        rotate={5}
      />

      <section className="relative z-10 mx-auto flex min-h-[100dvh] w-full max-w-[42rem] flex-col px-4 py-6 sm:px-8 sm:py-9">
        <motion.header
          className="flex items-start justify-between gap-4"
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0.1 : 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src={logoImage}
            alt="IMPLANTIUM Dental Clinic"
            className="h-auto w-[13rem] mix-blend-multiply sm:w-[15rem]"
            loading="eager"
            decoding="async"
          />
          <LanguageToggle value={language} onChange={setLanguage} />
        </motion.header>

        <motion.div
          className="mx-auto mt-16 flex w-full max-w-[32rem] flex-1 flex-col items-center text-center sm:mt-20"
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: shouldReduceMotion ? 0 : 0.12, duration: shouldReduceMotion ? 0.1 : 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-col items-center gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#a34431]">
              {copy.kicker}
            </p>
            <h1 className="w-full text-center text-[2.05rem] font-extrabold leading-[1.08] tracking-normal text-[#342c2a] sm:text-[2.9rem]">
              {copy.titleLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="max-w-[24rem] text-balance text-[1.02rem] font-medium leading-relaxed text-[#4f4642] sm:text-[1.12rem]">
              {copy.mission}
            </p>
          </div>

          <motion.ul
            className="mt-10 flex w-full flex-col gap-4 pb-5 sm:mt-12 sm:gap-5"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: shouldReduceMotion ? 0 : 0.08,
                  delayChildren: shouldReduceMotion ? 0 : 0.28,
                },
              },
            }}
          >
            {actions.map((action) => (
              <motion.li
                key={action.href}
                variants={{
                  hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 18 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: shouldReduceMotion ? 0.1 : 0.48, ease: [0.16, 1, 0.3, 1] }}
              >
                <ActionLink {...action} />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </section>
    </main>
  )
}
