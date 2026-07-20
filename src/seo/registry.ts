import { doctorsSeo, homeSeo, serviceSeo, type PageSeoContent, type ServiceSeoContent } from "../data/seo.ts";
import type { Language } from "../types/index.ts";

export const PRODUCTION_ORIGIN = "https://www.implantium.kz" as const;

export const SERVICE_ROUTE_IDS = [
  "implants",
  "bone-augmentation",
  "frenectomy",
  "tooth-extraction",
  "wisdom-tooth-removal",
  "crowns",
  "dentures",
  "braces",
  "treatment",
  "cleaning",
] as const;

export type ServiceRouteId = (typeof SERVICE_ROUTE_IDS)[number];
export type SeoRouteKey = "home" | "doctors" | `service:${ServiceRouteId}`;
export type SeoPageType = "home" | "doctors" | "service";

export type SeoRouteDefinition = {
  key: SeoRouteKey;
  pageType: SeoPageType;
  serviceId?: ServiceRouteId;
  localePaths: Record<Language, string>;
  canonicalPath: Record<Language, string>;
  alternates: Record<Language, string>;
  indexable: true;
  includeInSitemap: true;
  sitemapPriority: string;
  sitemapChangefreq: "weekly";
  seo: PageSeoContent | ServiceSeoContent;
  ogImagePath: string;
};

const sharedLegacyPath = (path: string): Record<Language, string> => ({ ru: path, kk: path });

export const SEO_ROUTES: readonly SeoRouteDefinition[] = [
  {
    key: "home",
    pageType: "home",
    localePaths: sharedLegacyPath("/"),
    canonicalPath: sharedLegacyPath("/"),
    alternates: sharedLegacyPath("/"),
    indexable: true,
    includeInSitemap: true,
    sitemapPriority: "1.0",
    sitemapChangefreq: "weekly",
    seo: homeSeo,
    ogImagePath: "/og-image.png",
  },
  {
    key: "doctors",
    pageType: "doctors",
    localePaths: sharedLegacyPath("/doctors"),
    canonicalPath: sharedLegacyPath("/doctors"),
    alternates: sharedLegacyPath("/doctors"),
    indexable: true,
    includeInSitemap: true,
    sitemapPriority: "0.8",
    sitemapChangefreq: "weekly",
    seo: doctorsSeo,
    ogImagePath: "/og-image.png",
  },
  ...SERVICE_ROUTE_IDS.map((serviceId): SeoRouteDefinition => {
    const path = `/services/${serviceId}`;

    return {
      key: `service:${serviceId}`,
      pageType: "service",
      serviceId,
      localePaths: sharedLegacyPath(path),
      canonicalPath: sharedLegacyPath(path),
      alternates: sharedLegacyPath(path),
      indexable: true,
      includeInSitemap: true,
      sitemapPriority: "0.9",
      sitemapChangefreq: "weekly",
      seo: serviceSeo[serviceId],
      ogImagePath: `/og/${serviceId}.jpg`,
    };
  }),
];

const routesByKey = new Map(SEO_ROUTES.map((route) => [route.key, route]));
const routesByServiceId = new Map(
  SEO_ROUTES.filter((route) => route.serviceId).map((route) => [route.serviceId, route]),
);

export function getSeoRoute(key: SeoRouteKey): SeoRouteDefinition {
  const route = routesByKey.get(key);

  if (!route) {
    throw new Error(`Unknown SEO route: ${key}`);
  }

  return route;
}

export function getServiceSeoRoute(serviceId: string): SeoRouteDefinition | undefined {
  return routesByServiceId.get(serviceId as ServiceRouteId);
}

export function absoluteUrl(path: string): string {
  return path === "/" ? PRODUCTION_ORIGIN : `${PRODUCTION_ORIGIN}${path}`;
}
