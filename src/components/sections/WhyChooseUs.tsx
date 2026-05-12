import { motion } from "framer-motion";
import { Heartbeat, ShieldCheck, Smiley, Star } from "@phosphor-icons/react";
import { useLanguage } from "@/hooks/useLanguage";
import { content } from "@/data/content";

const icons = [Star, ShieldCheck, Heartbeat, Smiley];

export function WhyChooseUs() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section className="relative overflow-hidden bg-[#251f1c] py-20 text-white md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(164,58,40,0.24),transparent_28%),radial-gradient(circle_at_90%_72%,rgba(216,183,160,0.12),transparent_32%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mb-14 max-w-3xl">
          <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.16em] text-[#e7c5b7]">
            IMPLANTIUM
          </span>
          <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">{t.whyChooseUs.title}</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {t.whyChooseUs.cards.map((card, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                className="group rounded-[1.7rem] border border-white/12 bg-white/[0.055] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_24px_70px_rgba(0,0,0,0.18)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-white/[0.075] md:p-8"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/25 bg-primary/15 text-[#f0c3b3] shadow-[0_0_40px_rgba(164,58,40,0.12)] transition-colors group-hover:bg-primary group-hover:text-white">
                  <Icon weight="duotone" className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">{card.title}</h3>
                <p className="max-w-xl leading-relaxed text-[#d8cdc6]">{card.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
