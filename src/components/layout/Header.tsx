import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { List, Phone, X } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "framer-motion";
import implantiumLogo from "@/assets/implantium-logo-cropped.png";
import { useLanguage } from "@/hooks/useLanguage";
import { content } from "@/data/content";
import { landingCopy } from "@/data/landing";
import { clinicContact, hasContactValue } from "@/data/clinicContact";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { BookingModal } from "@/components/sections/BookingModal";

export function Header() {
  const { language, setLanguage } = useLanguage();
  const t = content[language];
  const landing = landingCopy[language];
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const hasPhone = hasContactValue(clinicContact.phoneHref);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 18);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.services, href: "/#services" },
    { name: t.nav.doctors, href: "/#doctors" },
    { name: t.nav.about, href: "/#about" },
    { name: t.nav.reviews, href: "/#reviews" },
    { name: t.nav.location, href: "/#location" },
    { name: t.nav.contact, href: "/#booking" },
  ];

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-[#DDE3E7] bg-white/[0.94] py-1.5 shadow-[0_14px_42px_rgba(31,37,40,0.06)] backdrop-blur-xl"
          : "border-b border-white/60 bg-white/[0.82] py-2 backdrop-blur-md"
      )}
    >
      <div className="mx-auto flex max-w-[1360px] items-center justify-between gap-4 px-4 md:px-8">
        <Link
          to="/"
          className="group flex h-14 w-[10rem] items-center md:h-16 md:w-[11.5rem]"
          aria-label={t.common.clinicName}
        >
          <img
            src={implantiumLogo}
            alt={t.common.clinicName}
            className="size-full object-contain object-left mix-blend-multiply transition-transform duration-300 group-hover:-translate-y-0.5"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex xl:gap-9">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-[#606A70] transition-colors hover:text-primary"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <div className="flex items-center rounded-full border border-[#DDE3E7] bg-[#FAFBFC] p-1 text-sm font-semibold">
            <button
              type="button"
              onClick={() => setLanguage("ru")}
              className={cn(
                "rounded-full px-3 py-1.5 transition-colors",
                language === "ru" ? "bg-white text-primary shadow-sm" : "text-[#6E7B83] hover:text-[#1F2528]"
              )}
            >
              {t.common.languageRu}
            </button>
            <button
              type="button"
              onClick={() => setLanguage("kk")}
              className={cn(
                "rounded-full px-3 py-1.5 transition-colors",
                language === "kk" ? "bg-white text-primary shadow-sm" : "text-[#6E7B83] hover:text-[#1F2528]"
              )}
            >
              {t.common.languageKk}
            </button>
          </div>

          {hasPhone ? (
            <a
              href={clinicContact.phoneHref}
              className="flex size-12 items-center justify-center rounded-full border border-[#DDE3E7] bg-white text-primary shadow-[0_10px_28px_rgba(31,37,40,0.05)] transition-all hover:-translate-y-0.5 hover:border-[#C8D3D9]"
              aria-label={t.common.call}
            >
              <Phone weight="fill" className="size-5" />
            </a>
          ) : (
            <button
              type="button"
              disabled
              title={landing.contact.phonePending}
              className="flex size-12 cursor-not-allowed items-center justify-center rounded-full border border-[#DDE3E7] bg-white text-[#AEBBC2] shadow-sm"
              aria-label={landing.contact.phonePending}
            >
              <Phone weight="fill" className="size-5" />
            </button>
          )}

          <BookingModal>
            <Button
              className="accent-button-shadow h-12 rounded-full bg-primary px-7 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#8F2F25] active:translate-y-[1px]"
            >
              {landing.hero.primaryCta}
            </Button>
          </BookingModal>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <BookingModal>
            <button
              className="hidden h-10 items-center rounded-full bg-primary px-4 text-xs font-bold text-white shadow-[0_12px_28px_rgba(166,58,45,0.18)] sm:inline-flex"
            >
              {language === "ru" ? "Запись" : "Жазылу"}
            </button>
          </BookingModal>
          <div className="flex items-center rounded-full border border-[#DDE3E7] bg-white/85 p-0.5 text-xs font-bold shadow-sm">
            <button
              type="button"
              onClick={() => setLanguage("ru")}
              className={cn("rounded-full px-2.5 py-1.5", language === "ru" ? "bg-primary text-white" : "text-[#6E7B83]")}
            >
              {t.common.languageRu}
            </button>
            <button
              type="button"
              onClick={() => setLanguage("kk")}
              className={cn("rounded-full px-2.5 py-1.5", language === "kk" ? "bg-primary text-white" : "text-[#6E7B83]")}
            >
              {t.common.languageKk}
            </button>
          </div>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="flex size-11 items-center justify-center rounded-full border border-[#DDE3E7] bg-white text-[#1F2528] shadow-sm"
            aria-label={t.nav.contact}
          >
            <List className="size-6" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-50 flex min-h-[100dvh] flex-col bg-[#F5F7F8]"
          >
            <div className="flex items-center justify-between border-b border-[#DDE3E7] bg-white p-4">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex h-14 w-[10rem] items-center"
              >
                <img
                  src={implantiumLogo}
                  alt={t.common.clinicName}
                  className="size-full object-contain object-left mix-blend-multiply"
                />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="flex size-11 items-center justify-center rounded-full border border-[#DDE3E7] bg-white text-[#1F2528]"
                aria-label={t.common.closeMenu}
              >
                <X className="size-6" />
              </button>
            </div>

            <div className="flex flex-1 flex-col gap-6 overflow-y-auto p-5">
              <nav className="grid gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-2xl border border-[#DDE3E7] bg-white px-5 py-4 text-lg font-semibold text-[#1F2528] shadow-sm transition-colors hover:text-primary"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              <div className="mt-auto rounded-[1.5rem] border border-[#DDE3E7] bg-white p-5 shadow-[0_18px_50px_rgba(31,37,40,0.06)]">
                <p className="mb-4 text-sm font-semibold leading-relaxed text-[#606A70]">
                  {landing.contact.address}
                </p>
                <BookingModal>
                  <Button className="h-12 w-full rounded-2xl bg-primary text-sm font-bold text-white hover:bg-[#8F2F25]">
                    {landing.hero.primaryCta}
                  </Button>
                </BookingModal>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
