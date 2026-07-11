import { readFileSync, existsSync } from 'fs';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

const rootDir = resolve(fileURLToPath(import.meta.url), '..', '..');
const distDir = resolve(rootDir, 'dist');
const sitemapPath = resolve(distDir, 'sitemap.xml');
const robotsPath = resolve(distDir, 'robots.txt');

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
  if (!/<script[^>]*type="application\/ld\+json"[^>]*>/.test(html)) {
    errors.push('Missing JSON-LD structured data');
  } else {
    const match = html.match(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/);
    if (match && match[1]) {
      try {
        JSON.parse(match[1]);
      } catch (e) {
        errors.push('JSON-LD is invalid JSON');
      }
    }
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
