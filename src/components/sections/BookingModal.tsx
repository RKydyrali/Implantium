import type { ReactNode } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Phone, WhatsappLogo } from "@phosphor-icons/react";
import { useLanguage } from "@/hooks/useLanguage";
import { clinicContact, getWhatsAppUrl } from "@/data/clinicContact";

type BookingModalProps = {
  children?: ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export function BookingModal({ children, open, onOpenChange }: BookingModalProps) {
  const { language } = useLanguage();
  const copy = {
    ru: {
      title: "Записаться на прием",
      description: "Выберите удобный способ связи, и мы ответим вам в ближайшее время.",
      whatsapp: "Написать в WhatsApp",
      close: "Закрыть окно записи",
    },
    kk: {
      title: "Қабылдауға жазылу",
      description: "Өзіңізге ыңғайлы байланыс тәсілін таңдаңыз, біз сізге жақын арада жауап береміз.",
      whatsapp: "WhatsApp-қа жазу",
      close: "Жазылу терезесін жабу",
    },
  }[language];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {children ? <DialogTrigger asChild>{children}</DialogTrigger> : null}
      <DialogContent
        motionPreset="booking"
        overlayClassName="bg-[#1F2528]/45 backdrop-blur-[2px]"
        className="rounded-t-[1.75rem] rounded-b-none sm:rounded-[1.5rem]"
        closeLabel={copy.close}
      >
        <DialogHeader>
          <DialogTitle className="font-display text-2xl text-center">
            {copy.title}
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-3 py-4">
          <p className="mb-2 text-center text-sm text-[#606A70]">
            {copy.description}
          </p>
          
          <a
            href={getWhatsAppUrl(language)}
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
