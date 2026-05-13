import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChatCircleText, X } from "@phosphor-icons/react";
import { useLanguage } from "@/hooks/useLanguage";
import { landingCopy } from "@/data/landing";
import { Button } from "@/components/ui/button";
import { BookingModal } from "@/components/sections/BookingModal";

const PROMPT_DELAY_MS = 3500;
const AUTO_HIDE_MS = 8000;

export function ServicesConsultationPrompt() {
  const { language } = useLanguage();
  const copy = landingCopy[language].services;
  const showTimerRef = useRef<ReturnType<typeof window.setTimeout> | null>(null);
  const [hasShown, setHasShown] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [hideAfterBooking, setHideAfterBooking] = useState(false);

  useEffect(() => {
    if (hasShown || isVisible) {
      return;
    }

    const clearShowTimer = () => {
      if (showTimerRef.current) {
        window.clearTimeout(showTimerRef.current);
        showTimerRef.current = null;
      }
    };

    const showPrompt = () => {
      setHasShown(true);
      setIsVisible(true);
    };

    const servicesSection = document.getElementById("services");

    if (!servicesSection || !("IntersectionObserver" in window)) {
      showTimerRef.current = window.setTimeout(showPrompt, PROMPT_DELAY_MS);
      return clearShowTimer;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        clearShowTimer();

        if (entry.isIntersecting) {
          showTimerRef.current = window.setTimeout(showPrompt, PROMPT_DELAY_MS);
        }
      },
      { threshold: 0.08 }
    );

    observer.observe(servicesSection);

    return () => {
      clearShowTimer();
      observer.disconnect();
    };
  }, [hasShown, isVisible]);

  useEffect(() => {
    if (!isVisible || isBookingOpen) {
      return;
    }

    const hideTimer = window.setTimeout(() => {
      setIsVisible(false);
    }, AUTO_HIDE_MS);

    return () => window.clearTimeout(hideTimer);
  }, [isBookingOpen, isVisible]);

  const handleDismiss = () => {
    setHasShown(true);
    setIsVisible(false);
  };

  const handleBookingOpenChange = (open: boolean) => {
    setIsBookingOpen(open);

    if (!open && hideAfterBooking) {
      setHideAfterBooking(false);
      setIsVisible(false);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.aside
          aria-live="polite"
          initial={{ opacity: 0, y: 18, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 14, scale: 0.98 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-[5.75rem] right-4 z-30 w-[calc(100%-2rem)] max-w-[22rem] rounded-[1.35rem] border border-primary/15 bg-white/95 p-4 shadow-[0_22px_58px_rgba(31,37,40,0.14)] backdrop-blur-xl md:bottom-6 md:right-6"
        >
          <div className="flex items-start gap-3">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[#F4E7E4]/70 text-primary shadow-sm">
              <ChatCircleText weight="duotone" className="size-6" />
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-base font-bold leading-snug text-[#1F2528]">{copy.promptTitle}</h3>
                <button
                  type="button"
                  onClick={handleDismiss}
                  className="flex size-8 shrink-0 items-center justify-center rounded-full text-[#606A70] transition-colors hover:bg-[#EEF2F4] hover:text-[#1F2528] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  aria-label={language === "ru" ? "Закрыть уведомление" : "Хабарламаны жабу"}
                >
                  <X weight="bold" className="size-4" />
                </button>
              </div>
              <p className="mt-1.5 text-sm leading-relaxed text-[#606A70]">{copy.promptText}</p>
              <BookingModal open={isBookingOpen} onOpenChange={handleBookingOpenChange}>
                <Button
                  type="button"
                  onClick={() => setHideAfterBooking(true)}
                  className="accent-button-shadow mt-4 h-11 rounded-full bg-primary px-5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#8F2F25] active:translate-y-[1px]"
                >
                  {copy.book}
                  <ArrowRight weight="bold" className="ml-1 size-4" />
                </Button>
              </BookingModal>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
