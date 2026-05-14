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

    if (!servicesSection) {
      return;
    }

    const isServicesReached = () => {
      const rect = servicesSection.getBoundingClientRect();
      return rect.top <= window.innerHeight * 0.65 && rect.bottom >= window.innerHeight * 0.25;
    };

    const schedulePrompt = () => {
      if (showTimerRef.current) {
        return;
      }

      showTimerRef.current = window.setTimeout(showPrompt, PROMPT_DELAY_MS);
    };

    const syncPromptTimer = () => {
      if (isServicesReached()) {
        schedulePrompt();
        return;
      }

      clearShowTimer();
    };

    if (typeof IntersectionObserver === "undefined") {
      window.addEventListener("scroll", syncPromptTimer, { passive: true });
      window.addEventListener("resize", syncPromptTimer);
      syncPromptTimer();

      return () => {
        clearShowTimer();
        window.removeEventListener("scroll", syncPromptTimer);
        window.removeEventListener("resize", syncPromptTimer);
      };
    }

    let isIntersecting = false;

    const handleViewportChange = () => {
      if (!isIntersecting) {
        clearShowTimer();
        return;
      }

      syncPromptTimer();
    };

    window.addEventListener("scroll", handleViewportChange, { passive: true });
    window.addEventListener("resize", handleViewportChange);

    const observer = new IntersectionObserver(([entry]) => {
      isIntersecting = entry.isIntersecting;
      handleViewportChange();
    });

    observer.observe(servicesSection);
    handleViewportChange();

    return () => {
      clearShowTimer();
      window.removeEventListener("scroll", handleViewportChange);
      window.removeEventListener("resize", handleViewportChange);
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
          initial={{ opacity: 0, y: 12, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.97 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed bottom-24 right-4 z-30 w-[calc(100%-2rem)] max-w-[18rem] rounded-2xl border border-primary/20 bg-white p-4 shadow-[0_12px_40px_rgba(166,58,45,0.12)] md:bottom-8 md:right-8"
        >
          <button
            type="button"
            onClick={handleDismiss}
            className="absolute right-2 top-2 flex size-7 items-center justify-center rounded-full text-[#8A949B] transition-colors hover:bg-[#F4F8FB] hover:text-[#1F2528]"
            aria-label={language === "ru" ? "Закрыть" : "Жабу"}
          >
            <X weight="bold" className="size-3.5" />
          </button>
          
          <div className="pr-4">
            <h3 className="text-sm font-bold leading-tight text-[#1F2528]">{copy.promptTitle}</h3>
            <p className="mt-1.5 text-[13px] leading-relaxed text-[#606A70]">{copy.promptText}</p>
            
            <BookingModal open={isBookingOpen} onOpenChange={handleBookingOpenChange}>
              <button
                type="button"
                onClick={() => setHideAfterBooking(true)}
                className="mt-3.5 flex items-center gap-1.5 text-xs font-bold text-primary transition-colors hover:text-[#8F2F25]"
              >
                {copy.book}
                <ArrowRight weight="bold" className="size-3" />
              </button>
            </BookingModal>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
