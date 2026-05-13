import type { ReactNode } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Phone, WhatsappLogo } from "@phosphor-icons/react";
import { useLanguage } from "@/hooks/useLanguage";
import { clinicContact } from "@/data/clinicContact";

export function BookingModal({ children }: { children: ReactNode }) {
  const { language } = useLanguage();
  const copy = {
    ru: {
      whatsapp: "Написать в WhatsApp",
    },
    kk: {
      whatsapp: "WhatsApp-қа жазу",
    },
  }[language];

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl text-center">
            {language === "ru" ? "Записаться на прием" : "Қабылдауға жазылу"}
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-3 py-4">
          <p className="mb-2 text-center text-sm text-[#606A70]">
            {language === "ru"
              ? "Выберите удобный способ связи, и мы ответим вам в ближайшее время."
              : "Өзіңізге ыңғайлы байланыс тәсілін таңдаңыз, біз сізге жақын арада жауап береміз."}
          </p>
          
          <a
            href={clinicContact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 rounded-2xl bg-[#25D366] p-4 font-semibold text-white shadow-sm transition-colors hover:bg-[#20bd5a]"
          >
            <WhatsappLogo weight="fill" className="size-6" />
            {copy.whatsapp}
          </a>

          <a
            href={clinicContact.phoneHref}
            className="flex items-center justify-center gap-3 rounded-2xl bg-[#EEF2F4] p-4 font-semibold text-[#1F2528] transition-colors hover:bg-[#DDE3E7]"
          >
            <Phone weight="fill" className="size-6 text-primary" />
            +7 (702) 713-39-39
          </a>
          
          <a
            href="tel:+77073621339"
            className="flex items-center justify-center gap-3 rounded-2xl bg-[#EEF2F4] p-4 font-semibold text-[#1F2528] transition-colors hover:bg-[#DDE3E7]"
          >
            <Phone weight="fill" className="size-6 text-primary" />
            +7 (707) 362-13-39
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
