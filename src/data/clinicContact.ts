export type ClinicContact = {
  phoneDisplay?: string;
  phoneHref?: string;
  whatsappUrl?: string;
  instagramUrl?: string;
  twoGisUrl?: string;
  routeUrl?: string;
  mapEmbedUrl?: string;
};

const WHATSAPP_MESSAGE = {
  ru: "Здравствуйте! 👋 Хочу записаться на консультацию в стоматологию IMPLANTIUM. Подскажите, пожалуйста, какое время свободно на этой неделе?",
  kk: "Сәлеметсіз бе! 👋 IMPLANTIUM стоматологиясына консультацияға жазылғым келеді. Осы аптада қандай уақыт бос екенін айтып жібере аласыз ба?",
} as const;

export const clinicContact: ClinicContact = {
  phoneDisplay: "+7 (702) 713-39-39, +7 (707) 362-13-39",
  phoneHref: "tel:+77027133939",
  whatsappUrl: "https://wa.me/77027133939",
  instagramUrl: "https://www.instagram.com/implantium.aktau",
  twoGisUrl: "https://2gis.kz/aktau/firm/70000001038002984/tab/reviews",
};

/**
 * Returns a WhatsApp deep-link URL with a pre-filled localized booking message.
 * Falls back to the bare whatsappUrl if the contact is not configured.
 */
export function getWhatsAppUrl(language: "ru" | "kk"): string | undefined {
  const base = clinicContact.whatsappUrl;
  if (!hasContactValue(base) || !base) return undefined;
  const message = encodeURIComponent(WHATSAPP_MESSAGE[language]);
  return `${base}?text=${message}`;
}

export function hasContactValue(value?: string) {
  return Boolean(value && !value.includes("_HERE"));
}
