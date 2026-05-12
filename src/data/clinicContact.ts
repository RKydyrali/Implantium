export type ClinicContact = {
  phoneDisplay?: string;
  phoneHref?: string;
  whatsappUrl?: string;
  instagramUrl?: string;
  twoGisUrl?: string;
  routeUrl?: string;
  mapEmbedUrl?: string;
};

export const clinicContact: ClinicContact = {
  phoneDisplay: "+7 (702) 713-39-39, +7 (707) 362-13-39",
  phoneHref: "tel:+77027133939",
  whatsappUrl: "https://wa.me/77027133939",
  instagramUrl: "https://www.instagram.com/implantium.aktau",
};

export function hasContactValue(value?: string) {
  return Boolean(value && !value.includes("_HERE"));
}
