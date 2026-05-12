import { motion } from "framer-motion";
import { Clock, MapPin, Phone, WhatsappLogo } from "@phosphor-icons/react";
import type { ReactNode } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { landingCopy } from "@/data/landing";
import { clinicContact, hasContactValue } from "@/data/clinicContact";

export function LocationSection() {
  const { language } = useLanguage();
  const t = landingCopy[language];

  return (
    <section id="location" className="bg-[#F5F7F8] px-4 py-14 md:px-8 md:py-20">
      <motion.div className="clinical-card mx-auto grid max-w-[1320px] overflow-hidden rounded-[2rem] lg:grid-cols-[0.72fr_1.28fr]">
        <div className="p-6 md:p-8 lg:p-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            Aktau
          </p>
          <h2 className="font-display mb-6 text-3xl font-normal text-[#1F2528] md:text-4xl">
            {t.contact.title}
          </h2>
          <div className="grid gap-4">
            <InfoLine icon={<MapPin weight="fill" className="size-5" />} label={t.contact.address} />
            <InfoLine icon={<Phone weight="fill" className="size-5" />} label={clinicContact.phoneDisplay ?? t.contact.phonePending} muted={!clinicContact.phoneDisplay} />
            <InfoLine icon={<WhatsappLogo weight="fill" className="size-5" />} label={t.contact.whatsappPending} muted={!hasContactValue(clinicContact.whatsappUrl)} />
            <InfoLine icon={<Clock weight="fill" className="size-5" />} label={t.contact.hoursWeek} />
            <InfoLine icon={<Clock weight="fill" className="size-5" />} label={t.contact.hoursSunday} />
            <InfoLine icon={<Clock weight="fill" className="size-5" />} label={t.contact.hoursDoctors} />
          </div>
        </div>

        <div className="relative min-h-[21rem] overflow-hidden border-t border-[#DDE3E7] bg-[#EEF2F4] lg:min-h-[26rem] lg:border-l lg:border-t-0">
          {hasContactValue(clinicContact.mapEmbedUrl) ? (
            <iframe
              src={clinicContact.mapEmbedUrl}
              title={t.contact.mapLabel}
              className="absolute inset-0 size-full border-0 grayscale"
              loading="lazy"
            />
          ) : (
            <div className="absolute inset-0 overflow-hidden bg-[linear-gradient(135deg,#EEF2F4,#FAFBFC)]">
              <div className="cool-grid absolute inset-0 opacity-90" />
              <div className="absolute left-[10%] top-[28%] h-px w-[80%] rotate-[-8deg] bg-[#AEBBC2]/60" />
              <div className="absolute left-[6%] top-[58%] h-px w-[88%] rotate-[7deg] bg-[#AEBBC2]/60" />
              <div className="absolute left-[52%] top-[-10%] h-[120%] w-px rotate-[14deg] bg-[#AEBBC2]/55" />
              <div className="absolute left-1/2 top-1/2 flex max-w-[18rem] -translate-x-1/2 -translate-y-1/2 items-center gap-3 rounded-2xl border border-white/90 bg-white/[0.88] px-4 py-3 shadow-[0_24px_70px_rgba(31,37,40,0.10)] backdrop-blur">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-primary text-white shadow-[0_16px_32px_rgba(166,58,45,0.18)]">
                  <MapPin weight="fill" className="size-6" />
                </span>
                <span className="text-sm font-bold leading-snug text-[#1F2528]">
                  {t.contact.mapLabel}
                </span>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
}

function InfoLine({ icon, label, muted }: { icon: ReactNode; label: string; muted?: boolean }) {
  return (
    <div className="flex items-start gap-3 text-sm">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-2xl border border-[#DDE3E7] bg-[#FAFBFC] text-primary">
        {icon}
      </span>
      <span className={muted ? "leading-relaxed text-[#8A949B]" : "leading-relaxed text-[#1F2528]/80"}>
        {label}
      </span>
    </div>
  );
}
