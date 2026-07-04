import { Link } from "react-router-dom";
import { Clock, InstagramLogo, MapPin, Phone, WhatsappLogo } from "@phosphor-icons/react";
import type { ReactNode } from "react";
import implantiumLogo from "@/assets/implantium-logo-cropped.png";
import { useLanguage } from "@/hooks/useLanguage";
import { content } from "@/data/content";
import { landingCopy, landingServices } from "@/data/landing";
import { clinicContact, getWhatsAppUrl, hasContactValue } from "@/data/clinicContact";

export function Footer() {
  const { language } = useLanguage();
  const t = content[language];
  const landing = landingCopy[language];

  return (
    <footer className="border-t border-[#DDE3E7] bg-[#FAFBFC] px-4 py-10 md:px-8 md:py-14">
      <div className="mx-auto max-w-[1360px]">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.25fr_0.75fr_0.85fr_1.05fr]">
          <div className="flex flex-col gap-5">
            <Link to="/" className="flex h-14 w-44 items-center" aria-label={t.common.clinicName}>
              <img src={implantiumLogo} alt={t.common.logoAlt} className="size-full object-contain object-left mix-blend-multiply" />
            </Link>
            <p className="max-w-sm text-sm leading-7 text-[#606A70]">{landing.footer.tagline}</p>
            <div className="flex gap-3">
              <FooterIcon href={clinicContact.instagramUrl} label="Instagram">
                <InstagramLogo weight="fill" className="size-5" />
              </FooterIcon>
              <FooterIcon href={getWhatsAppUrl(language)} label="WhatsApp">
                <WhatsappLogo weight="fill" className="size-5" />
              </FooterIcon>
            </div>
          </div>

          <div>
            <h3 className="font-display mb-4 text-xl font-normal text-[#1F2528]">{language === "ru" ? "Клиника" : "Клиника"}</h3>
            <nav className="grid gap-2.5">
              <a href="/#about" className="footer-link">{t.nav.about}</a>
              <a href="/doctors" className="footer-link">{t.nav.doctors}</a>
              <a href="/#services" className="footer-link">{t.nav.services}</a>
              <a href="/#reviews" className="footer-link">{t.nav.reviews}</a>
              <a href="/#location" className="footer-link">{t.nav.contact}</a>
            </nav>
          </div>

          <div>
            <h3 className="font-display mb-4 text-xl font-normal text-[#1F2528]">{t.nav.services}</h3>
            <nav className="grid gap-2.5">
              {landingServices.map((service) => (
                <Link
                  key={service.id}
                  to={`/services/${service.serviceId}`}
                  className="footer-link"
                >
                  {service.shortTitle[language]}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="font-display mb-4 text-xl font-normal text-[#1F2528]">{t.nav.contact}</h3>
            <ul className="grid gap-3">
              <li className="footer-contact-line">
                <MapPin weight="fill" className="mt-0.5 size-5 shrink-0 text-primary" />
                <span>{landing.contact.address}</span>
              </li>
              <li className="footer-contact-line">
                <Phone weight="fill" className="mt-0.5 size-5 shrink-0 text-primary" />
                {hasContactValue(clinicContact.phoneHref) ? (
                  <a href={clinicContact.phoneHref} className="transition-colors hover:text-primary">
                    {clinicContact.phoneDisplay}
                  </a>
                ) : (
                  <span>{landing.contact.phonePending}</span>
                )}
              </li>
              <li className="footer-contact-line">
                <WhatsappLogo weight="fill" className="mt-0.5 size-5 shrink-0 text-primary" />
                {hasContactValue(clinicContact.whatsappUrl) ? (
                  <a href={getWhatsAppUrl(language)} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary">
                    {clinicContact.phoneDisplay}
                  </a>
                ) : (
                  <span>{landing.contact.whatsappPending}</span>
                )}
              </li>
              <li className="footer-contact-line">
                <Clock weight="fill" className="mt-0.5 size-5 shrink-0 text-primary" />
                <span>
                  {landing.contact.hoursWeek}
                  <br />
                  {landing.contact.hoursSunday}
                  <br />
                  {landing.contact.hoursDoctors}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-3 border-t border-[#DDE3E7] pt-6 text-xs text-[#8A949B] md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} IMPLANTIUM. {t.footer.rights}
          </p>
          <span>{landing.footer.privacy}</span>
        </div>
      </div>
    </footer>
  );
}

function FooterIcon({ href, label, children }: { href?: string; label: string; children: ReactNode }) {
  if (hasContactValue(href)) {
    return (
      <a
        href={href}
        className="flex size-10 items-center justify-center rounded-full border border-[#DDE3E7] bg-white text-primary transition-all hover:-translate-y-0.5 hover:border-primary/35 hover:bg-[#F4E7E4]/60"
        aria-label={label}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      disabled
      className="flex size-10 cursor-not-allowed items-center justify-center rounded-full border border-[#DDE3E7] bg-white text-[#AEBBC2]"
      aria-label={label}
      title={label}
    >
      {children}
    </button>
  );
}
