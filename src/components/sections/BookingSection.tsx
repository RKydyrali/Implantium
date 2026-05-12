import { useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Phone, ShieldCheck, Sparkle, WhatsappLogo } from "@phosphor-icons/react";
import { useLanguage } from "@/hooks/useLanguage";
import { content } from "@/data/content";
import { services } from "@/data/services";
import { clinicContact, hasContactValue } from "@/data/clinicContact";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function BookingSection() {
  const { language } = useLanguage();
  const t = content[language];
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const service = formData.get("service") as string;

    const newErrors: Record<string, string> = {};
    if (!name?.trim()) newErrors.name = t.booking.nameErr;
    if (!phone?.trim()) newErrors.phone = t.booking.phoneErr;
    if (!service) newErrors.service = t.booking.serviceErr;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setStatus("submitting");

    setTimeout(() => {
      setStatus("success");
    }, 1200);
  };

  return (
    <section id="booking" className="relative overflow-hidden bg-[#F5F7F8] px-4 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-[1320px]">
        <div className="clinical-card grid overflow-hidden rounded-[2rem] lg:grid-cols-[0.86fr_1.14fr]">
          <div className="relative overflow-hidden bg-[radial-gradient(circle_at_20%_12%,rgba(174,187,194,0.45),transparent_30%),linear-gradient(135deg,#263034,#151C1F)] p-7 text-white md:p-10 lg:p-12">
            <div className="cool-grid absolute inset-0 opacity-[0.12]" />
            <div className="relative z-10 flex h-full flex-col justify-between gap-10">
              <div>
                <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-4 py-2 text-sm font-semibold text-white">
                  <Sparkle weight="fill" className="size-4" />
                  {language === "ru" ? "Бесплатная консультация" : "Тегін кеңес"}
                </span>
                <h3 className="font-display mb-5 text-4xl font-normal leading-tight text-white md:text-5xl">
                  {t.booking.title}
                </h3>
                <p className="max-w-md leading-8 text-white/76">{t.booking.ctaText}</p>
              </div>

              <div className="grid gap-3">
                {t.booking.trustList.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/12 bg-white/[0.07] px-4 py-3 backdrop-blur">
                    <ShieldCheck weight="fill" className="size-5 shrink-0 text-[#D9E1E5]" />
                    <span className="text-sm font-semibold text-white/88">{item}</span>
                  </div>
                ))}
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <BookingSideAction
                  href={clinicContact.whatsappUrl}
                  label={t.booking.messengerCta}
                  helper={t.common.linkPending}
                  icon={<WhatsappLogo weight="fill" className="size-5" />}
                />
                <BookingSideAction
                  href={clinicContact.phoneHref}
                  label={t.booking.phoneCta}
                  helper={t.common.linkPending}
                  icon={<Phone weight="fill" className="size-5" />}
                />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 md:p-10 lg:p-12">
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex min-h-[520px] flex-col items-center justify-center text-center"
              >
                <div className="mb-6 flex size-20 items-center justify-center rounded-full bg-[#EEF2F4] text-primary">
                  <CheckCircle weight="fill" className="size-10" />
                </div>
                <h4 className="mb-6 max-w-md text-2xl font-bold leading-snug text-[#1F2528]">{t.booking.success}</h4>
                <Button onClick={() => setStatus("idle")} variant="outline" className="rounded-2xl border-[#DDE3E7] px-8 text-[#1F2528] hover:border-primary/35 hover:bg-[#F4E7E4]/55 hover:text-primary">
                  {t.booking.sendAgain}
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-5">
                <Field label={t.booking.name} htmlFor="booking-name" error={errors.name}>
                  <Input id="booking-name" name="name" className={inputClassName} aria-invalid={Boolean(errors.name)} />
                </Field>

                <Field label={t.booking.phone} htmlFor="booking-phone" error={errors.phone}>
                  <Input id="booking-phone" name="phone" type="tel" className={inputClassName} aria-invalid={Boolean(errors.phone)} />
                </Field>

                <Field label={t.booking.service} error={errors.service}>
                  <Select name="service">
                    <SelectTrigger className={inputClassName}>
                      <SelectValue placeholder={t.booking.serviceSelect} />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service.id} value={service.id}>
                          {service.title[language]}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>

                <Field label={t.booking.date} htmlFor="booking-date">
                  <Input id="booking-date" name="date" type="date" className={inputClassName} />
                </Field>

                <Field label={t.booking.comment} htmlFor="booking-comment">
                  <Textarea id="booking-comment" name="comment" className="min-h-[110px] resize-none rounded-xl border-[#DDE3E7] bg-[#FAFBFC] text-[#1F2528] shadow-none transition-colors placeholder:text-[#8A949B] focus-visible:border-primary/45 focus-visible:ring-primary/15" />
                </Field>

                <Button
                  type="submit"
                  disabled={status === "submitting"}
                  className="accent-button-shadow mt-2 h-14 rounded-xl bg-primary text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#8F2F25] active:translate-y-[1px]"
                >
                  {status === "submitting" ? t.booking.submitting : t.booking.submit}
                </Button>
                <p className="text-xs leading-relaxed text-[#8A949B]">
                  {language === "ru"
                    ? "Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности."
                    : "Батырманы басу арқылы құпиялылық саясатымен келісесіз."}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

const inputClassName =
  "h-12 rounded-xl border-[#DDE3E7] bg-[#FAFBFC] text-[#1F2528] shadow-none transition-colors placeholder:text-[#8A949B] focus-visible:border-primary/45 focus-visible:ring-primary/15";

function Field({
  label,
  error,
  children,
  htmlFor,
}: {
  label: string;
  error?: string;
  children: ReactNode;
  htmlFor?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="text-sm font-bold text-[#1F2528]">
        {label}
      </label>
      {children}
      {error && <span className="text-xs font-semibold text-destructive">{error}</span>}
    </div>
  );
}

function BookingSideAction({
  href,
  label,
  helper,
  icon,
}: {
  href?: string;
  label: string;
  helper: string;
  icon: ReactNode;
}) {
  if (hasContactValue(href)) {
    return (
      <a href={href} className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-2xl bg-white px-5 text-sm font-bold text-[#1F2528] shadow-sm transition-all hover:-translate-y-0.5 hover:text-primary">
        {icon}
        {label}
      </a>
    );
  }

  return (
    <button
      type="button"
      disabled
      title={helper}
      className="inline-flex min-h-12 flex-1 cursor-not-allowed flex-col items-center justify-center rounded-2xl border border-white/12 bg-white/[0.07] px-5 py-2 text-center backdrop-blur"
    >
      <span className="flex items-center gap-2 text-sm font-semibold text-white/86">
        {icon}
        {label}
      </span>
      <span className="mt-0.5 text-[11px] font-medium text-white/55">{helper}</span>
    </button>
  );
}
