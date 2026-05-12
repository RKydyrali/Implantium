import { motion } from "framer-motion";
import { Clock, MapPin, Phone, WhatsappLogo } from "@phosphor-icons/react";
import type { ReactNode } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { landingCopy } from "@/data/landing";
import { clinicContact, hasContactValue } from "@/data/clinicContact";
import map2gis from "@/assets/map-2gis.png";

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
            <InfoLine icon={<WhatsappLogo weight="fill" className="size-5" />} label={hasContactValue(clinicContact.whatsappUrl) ? (clinicContact.phoneDisplay ?? "") : t.contact.whatsappPending} muted={!hasContactValue(clinicContact.whatsappUrl)} />
            <InfoLine icon={<Clock weight="fill" className="size-5" />} label={t.contact.hoursWeek} />
            <InfoLine icon={<Clock weight="fill" className="size-5" />} label={t.contact.hoursSunday} />
            <InfoLine icon={<Clock weight="fill" className="size-5" />} label={t.contact.hoursDoctors} />
          </div>
        </div>

        <div className="relative min-h-[21rem] overflow-hidden border-t border-[#DDE3E7] bg-[#EEF2F4] lg:min-h-[26rem] lg:border-l lg:border-t-0">
          <a
            href="https://go.2gis.com/kQV98"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 block size-full transition-opacity hover:opacity-90"
            title="Открыть в 2GIS"
          >
            <img
              src={map2gis}
              alt="Карта 2GIS"
              className="size-full object-cover"
              loading="lazy"
            />
          </a>
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
