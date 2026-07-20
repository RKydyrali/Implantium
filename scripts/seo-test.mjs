import { readFileSync, existsSync } from 'fs';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

const rootDir = resolve(fileURLToPath(import.meta.url), '..', '..');
const distDir = resolve(rootDir, 'dist');
const sitemapPath = resolve(distDir, 'sitemap.xml');
const robotsPath = resolve(distDir, 'robots.txt');
const notFoundPath = resolve(distDir, '404.html');
const vercelConfigPath = resolve(rootDir, 'vercel.json');
const PRODUCTION_ORIGIN = 'https://www.implantium.kz';
const LEGACY_ORIGIN = 'https://implantium.kz';

// Same routes as prerender
const ROUTES = [
  '/',
  '/doctors',
  '/services/implants',
  '/services/bone-augmentation',
  '/services/frenectomy',
  '/services/tooth-extraction',
  '/services/wisdom-tooth-removal',
  '/services/crowns',
  '/services/dentures',
  '/services/braces',
  '/services/treatment',
  '/services/cleaning'
];

console.log('🔍 Starting SEO Audit of dist/ folder...\n');

let hasErrors = false;

// 1. Check Sitemap & Robots
if (!existsSync(sitemapPath)) {
  console.error('❌ sitemap.xml is missing!');
  hasErrors = true;
} else {
  console.log('✅ sitemap.xml exists');
}

if (!existsSync(robotsPath)) {
  console.error('❌ robots.txt is missing!');
  hasErrors = true;
} else {
  console.log('✅ robots.txt exists');
}

const sitemapContent = existsSync(sitemapPath) ? readFileSync(sitemapPath, 'utf8') : '';
const robotsContent = existsSync(robotsPath) ? readFileSync(robotsPath, 'utf8') : '';
const vercelConfig = JSON.parse(readFileSync(vercelConfigPath, 'utf8'));

if (sitemapContent.includes(LEGACY_ORIGIN)) {
  console.error(`❌ sitemap.xml contains legacy origin ${LEGACY_ORIGIN}`);
  hasErrors = true;
}

if (!robotsContent.includes(`Sitemap: ${PRODUCTION_ORIGIN}/sitemap.xml`)) {
  console.error(`❌ robots.txt must reference ${PRODUCTION_ORIGIN}/sitemap.xml`);
  hasErrors = true;
}

if (!existsSync(notFoundPath)) {
  console.error('❌ dist/404.html is missing');
  hasErrors = true;
} else {
  const notFoundHtml = readFileSync(notFoundPath, 'utf8');
  if (!/<meta\s+name="robots"\s+content="noindex, follow"/.test(notFoundHtml)) {
    console.error('❌ 404.html must contain server-visible noindex, follow');
    hasErrors = true;
  }
  if (/<link\s+rel="canonical"/.test(notFoundHtml)) {
    console.error('❌ 404.html must not contain a canonical link');
    hasErrors = true;
  }
}

const homepageFallbackRewrite = (vercelConfig.rewrites ?? []).some(
  (rewrite) => rewrite.destination === '/index.html',
);
if (homepageFallbackRewrite) {
  console.error('❌ vercel.json still rewrites unknown URLs to homepage HTML');
  hasErrors = true;
}

// 2. Check each route
for (const route of ROUTES) {
  const filePath = resolve(distDir, route === '/' ? 'index.html' : `${route.slice(1)}/index.html`);
  
  if (!existsSync(filePath)) {
    console.error(`❌ Route missing: ${route} (expected at ${filePath})`);
    hasErrors = true;
    continue;
  }

  const html = readFileSync(filePath, 'utf8');
  const errors = [];

  if (html.includes(LEGACY_ORIGIN)) errors.push(`Contains legacy origin ${LEGACY_ORIGIN}`);
  if (!html.includes(PRODUCTION_ORIGIN)) errors.push(`Missing production origin ${PRODUCTION_ORIGIN}`);

  // Title
  if (!/<title>.*?<\/title>/.test(html)) errors.push('Missing <title>');
  // Description
  if (!/<meta\s+name="description"\s+content=".*?"/.test(html)) errors.push('Missing description');
  // Canonical
  if (!/<link\s+rel="canonical"\s+href=".*?"/.test(html)) errors.push('Missing canonical');
  // Noindex check
  if (/<meta\s+name="robots"\s+content=".*?noindex.*?"/.test(html)) errors.push('Has noindex!');
  // Sitemap check
  if (sitemapContent && !sitemapContent.includes(`<loc>https://implantium.kz${route === '/' ? '' : route}</loc>`)) {
    if (!sitemapContent.includes(route === '/' ? 'implantium.kz</loc>' : `${route}</loc>`)) {
      errors.push('Not in sitemap.xml');
    }
  }

  // JSON-LD check
  const jsonLdMatches = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];
  if (jsonLdMatches.length === 0) {
    errors.push('Missing JSON-LD structured data');
  } else if (jsonLdMatches.length !== 1) {
    errors.push(`Expected exactly one JSON-LD graph, found ${jsonLdMatches.length}`);
  } else {
    const match = jsonLdMatches[0];
    if (match?.[1]) {
      try {
        JSON.parse(match[1]);
      } catch (e) {
        errors.push('JSON-LD is invalid JSON');
      }
    }
  }

  const mainMatch = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/);
  const h1Count = (html.match(/<h1\b/g) ?? []).length;
  if (!mainMatch) errors.push('Missing prerendered <main>');
  if (h1Count !== 1) errors.push(`Expected exactly one prerendered <h1>, found ${h1Count}`);

  if (mainMatch) {
    const mainText = mainMatch[1]
      .replace(/<script[\s\S]*?<\/script>/g, ' ')
      .replace(/<style[\s\S]*?<\/style>/g, ' ')
      .replace(/<[^>]+>/g, ' ')
      .replace(/&[a-z#0-9]+;/gi, ' ')
      .replace(/\s+/g, ' ')
      .trim();
    const internalLinks = [...mainMatch[1].matchAll(/href="(\/[^"#]*)/g)];

    if (mainText.length < 200) errors.push(`Prerendered main text is too short (${mainText.length} characters)`);
    if (internalLinks.length === 0) errors.push('Prerendered main has no internal links');
  }

  if (errors.length > 0) {
    console.error(`❌ [${route}] failed:`);
    errors.forEach(err => console.error(`   - ${err}`));
    hasErrors = true;
  } else {
    console.log(`✅ [${route}] passed all SEO checks`);
  }
}

console.log('\n----------------------------------------');
if (hasErrors) {
  console.error('❌ SEO Audit Failed! Please fix the errors above.');
  process.exit(1);
} else {
  console.log('🎉 SEO Audit Passed! The build is ready for production.');
}
