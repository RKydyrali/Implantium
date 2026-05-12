export type ClinicContact = {
  phoneDisplay?: string;
  phoneHref?: string;
  whatsappUrl?: string;
  instagramUrl?: string;
  twoGisUrl?: string;
  routeUrl?: string;
  mapEmbedUrl?: string;
};

export const clinicContact: ClinicContact = {};

export function hasContactValue(value?: string) {
  return Boolean(value && !value.includes("_HERE"));
}
