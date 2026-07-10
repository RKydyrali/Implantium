import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = fileURLToPath(new URL("..", import.meta.url));
const distDir = resolve(rootDir, "dist");
const servicesFile = resolve(rootDir, "src/data/services.ts");

loadEnvFile(resolve(rootDir, ".env.local"));
loadEnvFile(resolve(rootDir, ".env"));

const siteUrl = resolveSiteUrl();
const serviceIds = readServiceIds();
const today = new Date().toISOString().slice(0, 10);
const routes = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/doctors", priority: "0.8", changefreq: "weekly" },
  ...serviceIds.map((id) => ({
    path: `/services/${id}`,
    priority: "0.9",
    changefreq: "weekly",
  })),
];

mkdirSync(distDir, { recursive: true });
writeFileSync(resolve(distDir, "sitemap.xml"), buildSitemap(routes), "utf8");
writeFileSync(resolve(distDir, "robots.txt"), buildRobots(), "utf8");

console.log(`Generated sitemap.xml and robots.txt for ${routes.length} public routes at ${siteUrl}`);

function loadEnvFile(filePath) {
  if (!existsSync(filePath)) {
    return;
  }

  const lines = readFileSync(filePath, "utf8").split(/\r?\n/);

  for (const line of lines) {
    const trimmed = line.trim();

    if (!trimmed || trimmed.startsWith("#")) {
      continue;
    }

    const separatorIndex = trimmed.indexOf("=");

    if (separatorIndex === -1) {
      continue;
    }

    const key = trimmed.slice(0, separatorIndex).trim();
    const value = trimmed.slice(separatorIndex + 1).trim().replace(/^["']|["']$/g, "");

    if (key && process.env[key] === undefined) {
      process.env[key] = value;
    }
  }
}

function resolveSiteUrl() {
  const explicitUrl = process.env.VITE_SITE_URL;
  const rawUrl = explicitUrl || "https://implantium.kz";

  if (!explicitUrl) {
    console.warn("VITE_SITE_URL is not set; defaulting strictly to https://implantium.kz for generated SEO files.");
  }

  const withProtocol = /^https?:\/\//i.test(rawUrl) ? rawUrl : `https://${rawUrl}`;
  return withProtocol.replace(/\/+$/, "");
}

function readServiceIds() {
  const source = readFileSync(servicesFile, "utf8");
  const baseServicesStart = source.indexOf("const baseServices");
  const detailsStart = source.indexOf("const serviceDetails");

  if (baseServicesStart === -1 || detailsStart === -1) {
    throw new Error("Could not find baseServices block in src/data/services.ts");
  }

  const baseServicesSource = source.slice(baseServicesStart, detailsStart);
  const ids = [...baseServicesSource.matchAll(/id:\s*"([^"]+)"/g)].map((match) => match[1]);

  if (ids.length === 0) {
    throw new Error("Could not find service IDs for sitemap generation");
  }

  return ids;
}

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
