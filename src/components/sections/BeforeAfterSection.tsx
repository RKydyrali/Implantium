import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkle, Tooth } from "@phosphor-icons/react";
import { useLanguage } from "@/hooks/useLanguage";
import { content } from "@/data/content";

export function BeforeAfterSection() {
  const { language } = useLanguage();
  const t = content[language];
  const [position, setPosition] = useState(52);

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="max-w-xl"
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-secondary px-4 py-2 text-sm font-semibold text-primary">
              <Sparkle weight="fill" className="h-4 w-4" />
              {t.beforeAfter.label}
            </span>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">{t.beforeAfter.title}</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{t.beforeAfter.subtitle}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="rounded-[2rem] border border-border/70 bg-secondary/70 p-3 shadow-[0_24px_70px_rgba(68,45,34,0.10)]"
          >
            <div className="relative overflow-hidden rounded-[1.55rem] border border-white bg-white">
              <div className="relative h-[360px] overflow-hidden sm:h-[410px]">
                <SmilePanel tone="before" label={t.beforeAfter.before} text={t.beforeAfter.beforeText} />
                <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
                  <SmilePanel tone="after" label={t.beforeAfter.after} text={t.beforeAfter.afterText} />
                </div>
                <div
                  className="absolute top-0 h-full w-px bg-white shadow-[0_0_0_1px_rgba(164,58,40,0.35),0_0_34px_rgba(164,58,40,0.28)]"
                  style={{ left: `${position}%` }}
                >
                  <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary/20 bg-white text-primary shadow-[0_18px_40px_rgba(68,45,34,0.15)]">
                    <Tooth weight="duotone" className="h-6 w-6" />
                  </span>
                </div>
              </div>

              <div className="border-t border-border/70 bg-white p-4">
                <input
                  type="range"
                  min="26"
                  max="74"
                  value={position}
                  onChange={(event) => setPosition(Number(event.target.value))}
                  aria-label={t.beforeAfter.label}
                  className="h-2 w-full cursor-pointer accent-primary"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SmilePanel({ tone, label, text }: { tone: "before" | "after"; label: string; text: string }) {
  const isAfter = tone === "after";

  return (
    <div
      className={`absolute inset-0 flex flex-col justify-between p-5 sm:p-7 ${
        isAfter
          ? "bg-[radial-gradient(circle_at_76%_18%,rgba(164,58,40,0.13),transparent_30%),linear-gradient(135deg,#fffaf6,#ffffff)]"
          : "bg-[radial-gradient(circle_at_20%_22%,rgba(35,31,29,0.08),transparent_28%),linear-gradient(135deg,#f4eee8,#fffaf6)]"
      }`}
    >
      <div className="flex items-center justify-between gap-4">
        <span
          className={`rounded-full border px-4 py-2 text-sm font-semibold ${
            isAfter
              ? "border-primary/20 bg-primary text-white"
              : "border-border bg-white text-foreground"
          }`}
        >
          {label}
        </span>
        <span className="rounded-full border border-primary/15 bg-white/80 px-3 py-1 text-xs font-semibold text-primary">
          {text}
        </span>
      </div>

      <div className="mx-auto flex w-full max-w-lg flex-col items-center">
        <div className="relative h-28 w-full max-w-md rounded-[50%] border-t border-primary/10 bg-white/75 shadow-inner">
          <div className="absolute left-1/2 top-6 grid w-[84%] -translate-x-1/2 grid-cols-8 gap-1.5">
            {Array.from({ length: 8 }).map((_, index) => (
              <span
                key={index}
                className={`h-16 rounded-b-[1.6rem] rounded-t-[0.8rem] border shadow-sm ${
                  isAfter
                    ? "border-primary/10 bg-white"
                    : "border-border bg-[#f7f0e8]"
                }`}
              />
            ))}
          </div>
          <div className="absolute bottom-5 left-1/2 h-4 w-[76%] -translate-x-1/2 rounded-full bg-primary/20" />
        </div>
      </div>
    </div>
  );
}
