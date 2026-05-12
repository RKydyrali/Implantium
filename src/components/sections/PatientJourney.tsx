import { motion } from "framer-motion";
import { ClipboardText, FirstAidKit, Heartbeat, MagnifyingGlass, SealCheck } from "@phosphor-icons/react";
import { useLanguage } from "@/hooks/useLanguage";
import { content } from "@/data/content";

const icons = [ClipboardText, MagnifyingGlass, SealCheck, FirstAidKit, Heartbeat];

export function PatientJourney() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section className="relative overflow-hidden bg-secondary/50 py-20 md:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mb-12 max-w-2xl">
          <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            IMPLANTIUM
          </span>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">{t.patientJourney.title}</h2>
        </div>

        <div className="relative rounded-[2rem] border border-border/70 bg-white/70 p-4 shadow-[0_24px_70px_rgba(68,45,34,0.08)] md:p-6">
          <div className="absolute left-10 right-10 top-[4.35rem] hidden h-px bg-gradient-to-r from-primary/15 via-primary/35 to-primary/15 lg:block" />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {t.patientJourney.steps.map((step, idx) => {
              const Icon = icons[idx];
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.45, delay: idx * 0.06 }}
                  className="group relative rounded-[1.5rem] border border-border/70 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_18px_45px_rgba(164,58,40,0.10)]"
                >
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-sm font-bold text-white shadow-[0_14px_30px_rgba(164,58,40,0.22)]">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <Icon weight="duotone" className="h-5 w-5" />
                    </span>
                  </div>
                  <h3 className="mb-2 text-lg font-bold leading-tight text-foreground">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
