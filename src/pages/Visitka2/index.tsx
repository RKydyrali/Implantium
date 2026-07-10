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
import logoImage from "@/assets/generated/inventa-logo.png"
import toothImage from "@/assets/generated/inventa_tooth.png"
import sphereImage from "@/assets/generated/inventa_sphere.png"
import abstractImage from "@/assets/generated/inventa_abstract.png"

const STORAGE_KEY = "inventa-link-page-language"

function getInitialLanguage(): Language {
  if (typeof window === "undefined") {
    return "kk"
  }
  const saved = window.localStorage.getItem(STORAGE_KEY)
  return saved === "ru" || saved === "kk" ? saved : "kk"
}

export default function Visitka2() {
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
    <main className="relative isolate min-h-[100dvh] overflow-hidden bg-[#525252] text-white">
      <FloatingAsset
        src={abstractImage}
        alt=""
        className="right-[-6.2rem] top-[8.6rem] hidden w-[13rem] rotate-[14deg] opacity-60 mix-blend-lighten sm:block sm:right-[calc(50%-25rem)] sm:top-[7.4rem] sm:w-[15rem] lg:right-[calc(50%-31rem)]"
        delay={0.25}
        duration={9}
        floatY={22}
        floatX={10}
        rotate={7}
      />
      <FloatingAsset
        src={toothImage}
        alt=""
        className="left-[-6.8rem] top-[15rem] w-[12rem] -rotate-[18deg] opacity-70 mix-blend-lighten sm:left-[calc(50%-27rem)] sm:top-[17rem] sm:w-[14rem] lg:left-[calc(50%-34rem)]"
        delay={0.8}
        duration={10.5}
        floatY={18}
        floatX={8}
        rotate={6}
      />
      <FloatingAsset
        src={sphereImage}
        alt=""
        className="bottom-[1.5rem] right-[-5.8rem] w-[13.5rem] opacity-75 mix-blend-lighten sm:bottom-[2.5rem] sm:right-[calc(50%-27rem)] sm:w-[15rem] lg:right-[calc(50%-35rem)]"
        delay={1.1}
        duration={11}
        floatY={20}
        floatX={12}
        rotate={5}
      />

      <section className="relative z-10 mx-auto flex min-h-[100dvh] w-full max-w-[42rem] flex-col px-4 py-6 sm:px-8 sm:py-9">
        <motion.header
          className="flex items-center justify-between gap-4"
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0.1 : 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src={logoImage}
            alt="INVENTA Dental Clinic"
            className="h-auto w-[13rem] mix-blend-lighten sm:w-[15rem]"
            loading="eager"
            decoding="async"
          />
          <LanguageToggle value={language} onChange={setLanguage} />
        </motion.header>

        <motion.div
          className="mx-auto mt-8 flex w-full max-w-[32rem] flex-1 flex-col items-center text-center sm:mt-10"
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: shouldReduceMotion ? 0 : 0.12, duration: shouldReduceMotion ? 0.1 : 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-col items-center gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-white/60">
              {copy.kicker}
            </p>
            <h1 className="w-full text-center text-[2.05rem] font-extrabold leading-[1.08] tracking-normal text-white sm:text-[2.9rem]">
              {copy.titleLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="max-w-[24rem] text-balance text-[1.02rem] font-medium leading-relaxed text-white/80 sm:text-[1.12rem]">
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
