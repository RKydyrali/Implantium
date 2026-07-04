import { useEffect } from "react";

const FALLBACK_SITE_URL = "https://implantium.kz";

type SeoConfig = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  jsonLd?: unknown[];
  noindex?: boolean;
  type?: "website" | "article";
  image?: string;
};

export function getSiteOrigin() {
  const configuredUrl = import.meta.env.VITE_SITE_URL as string | undefined;
  const normalizedConfiguredUrl = normalizeOrigin(configuredUrl);

  if (normalizedConfiguredUrl) {
    return normalizedConfiguredUrl;
  }

  if (typeof window !== "undefined" && window.location.origin) {
    return normalizeOrigin(window.location.origin) ?? FALLBACK_SITE_URL;
  }

  return FALLBACK_SITE_URL;
}

export function useSeo({
  title,
  description,
  path,
  keywords = [],
  jsonLd = [],
  noindex = false,
  type = "website",
  image,
}: SeoConfig) {
  useEffect(() => {
    const siteOrigin = getSiteOrigin();
    const canonicalUrl = `${siteOrigin}${normalizePath(path)}`;
    const robotsContent = noindex ? "noindex, nofollow" : "index, follow";

    document.title = title;
    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", robotsContent);
    upsertMeta("name", "keywords", keywords.join(", "));
    upsertLink("canonical", canonicalUrl);

    const ogImage = image ?? `${siteOrigin}/og-image.png`;

    upsertMeta("property", "og:site_name", "IMPLANTIUM");
    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:locale", "ru_KZ");
    upsertMeta("property", "og:image", ogImage);

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", ogImage);

    upsertJsonLd(jsonLd);
  }, [description, image, jsonLd, keywords, noindex, path, title, type]);
}

function normalizeOrigin(value?: string) {
  const trimmed = value?.trim();

  if (!trimmed) {
    return "";
  }

  const withProtocol = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
  return withProtocol.replace(/\/+$/, "");
}

function normalizePath(path: string) {
  if (!path || path === "/") {
    return "";
  }

  return path.startsWith("/") ? path : `/${path}`;
}

function upsertMeta(attribute: "name" | "property", key: string, content: string) {
  const selector = `meta[${attribute}="${key}"]`;
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!content) {
    element?.remove();
    return;
  }

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
}

function upsertJsonLd(items: unknown[]) {
  const scriptId = "seo-json-ld";
  let element = document.getElementById(scriptId) as HTMLScriptElement | null;

  if (items.length === 0) {
    element?.remove();
    return;
  }

  if (!element) {
    element = document.createElement("script");
    element.id = scriptId;
    element.type = "application/ld+json";
    document.head.appendChild(element);
  }

  element.textContent = JSON.stringify(items.length === 1 ? items[0] : items);
}
