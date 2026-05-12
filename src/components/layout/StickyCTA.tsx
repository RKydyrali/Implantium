import { Phone, WhatsappLogo } from "@phosphor-icons/react";
import { useLanguage } from "@/hooks/useLanguage";
import { content } from "@/data/content";
import { landingCopy } from "@/data/landing";
import { clinicContact, hasContactValue } from "@/data/clinicContact";

export function StickyCTA() {
  const { language } = useLanguage();
  const t = content[language];
  const landing = landingCopy[language];
  const hasPhone = hasContactValue(clinicContact.phoneHref);
  const hasWhatsapp = hasContactValue(clinicContact.whatsappUrl);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 flex items-center gap-2 border-t border-border/80 bg-white/92 p-3 shadow-[0_-16px_45px_rgba(68,45,34,0.10)] backdrop-blur-xl md:hidden">
      <a
        href="/#booking"
        className="flex h-12 flex-1 items-center justify-center rounded-full bg-primary px-4 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(164,58,40,0.22)] transition-colors hover:bg-primary/90"
      >
        {t.common.bookConsultation}
      </a>
      {hasWhatsapp ? (
        <a
          href={clinicContact.whatsappUrl}
          className="flex size-12 shrink-0 items-center justify-center rounded-full border border-primary/15 bg-secondary text-primary shadow-sm transition-colors hover:bg-secondary/80"
          aria-label="WhatsApp"
        >
          <WhatsappLogo weight="fill" className="size-5" />
        </a>
      ) : (
        <button
          type="button"
          disabled
          title={landing.contact.whatsappPending}
          className="flex size-12 shrink-0 cursor-not-allowed items-center justify-center rounded-full border border-primary/15 bg-secondary text-primary/70 shadow-sm"
          aria-label={landing.contact.whatsappPending}
        >
          <WhatsappLogo weight="fill" className="size-5" />
        </button>
      )}
      {hasPhone ? (
        <a
          href={clinicContact.phoneHref}
          className="flex size-12 shrink-0 items-center justify-center rounded-full border border-primary/15 bg-secondary text-primary shadow-sm transition-colors hover:bg-secondary/80"
          aria-label={t.common.call}
        >
          <Phone weight="fill" className="size-5" />
        </a>
      ) : (
        <button
          type="button"
          disabled
          title={t.common.linkPending}
          className="flex size-12 shrink-0 cursor-not-allowed items-center justify-center rounded-full border border-primary/15 bg-secondary text-primary/70 shadow-sm"
          aria-label={t.common.linkPending}
        >
          <Phone weight="fill" className="size-5" />
        </button>
      )}
    </div>
  );
}
