import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { PRODUCTION_ORIGIN, SEO_ROUTES } from "../src/seo/registry.ts";

const rootDir = fileURLToPath(new URL("..", import.meta.url));
const distDir = resolve(rootDir, "dist");
const siteUrl = PRODUCTION_ORIGIN;
const today = new Date().toISOString().slice(0, 10);
const routes = SEO_ROUTES.filter((route) => route.includeInSitemap).map((route) => ({
  path: route.localePaths.ru,
  priority: route.sitemapPriority,
  changefreq: route.sitemapChangefreq,
}));

mkdirSync(distDir, { recursive: true });
writeFileSync(resolve(distDir, "sitemap.xml"), buildSitemap(routes), "utf8");
writeFileSync(resolve(distDir, "robots.txt"), buildRobots(), "utf8");

console.log(`Generated sitemap.xml and robots.txt for ${routes.length} public routes at ${siteUrl}`);

function buildSitemap(routeList) {
  const urls = routeList
    .map(({ path, priority, changefreq }) => {
      const loc = `${siteUrl}${path === "/" ? "" : path}`;

      return [
        "  <url>",
        `    <loc>${escapeXml(loc)}</loc>`,
        `    <lastmod>${today}</lastmod>`,
        `    <changefreq>${changefreq}</changefreq>`,
        `    <priority>${priority}</priority>`,
        "  </url>",
      ].join("\n");
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

function buildRobots() {
  return [
    "User-agent: *",
    "Allow: /",
    "Disallow: /admin",
    "",
    `Sitemap: ${siteUrl}/sitemap.xml`,
    "",
  ].join("\n");
}

function escapeXml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
