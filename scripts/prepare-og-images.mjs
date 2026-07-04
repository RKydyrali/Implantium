/**
 * prepare-og-images.mjs
 * Converts service hero WebP → JPEG 1200×630 in public/og/.
 * These static files are served as og:image by the prerenderer.
 * Run: node scripts/prepare-og-images.mjs (or automatically via prebuild).
 */

import sharp from 'sharp';
import { existsSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const rootDir = resolve(fileURLToPath(import.meta.url), '..', '..');
const OG_W = 1200;
const OG_H = 630;
const QUALITY = 85;

const SERVICE_IDS = [
  'implants',
  'bone-augmentation',
  'frenectomy',
  'tooth-extraction',
  'wisdom-tooth-removal',
  'crowns',
  'dentures',
  'braces',
  'treatment',
  'cleaning',
];

const ogDir = resolve(rootDir, 'public', 'og');
mkdirSync(ogDir, { recursive: true });

let generated = 0;
let skipped = 0;

for (const id of SERVICE_IDS) {
  const src = resolve(rootDir, 'src', 'assets', 'services', `${id}-hero.webp`);
  const dest = resolve(ogDir, `${id}.jpg`);

  if (!existsSync(src)) {
    console.warn(`[og-images] ⚠️  Source not found, skipping: ${src}`);
    skipped++;
    continue;
  }

  const meta = await sharp(src).metadata();
  const srcAspect = (meta.width ?? OG_W) / (meta.height ?? OG_H);
  const targetAspect = OG_W / OG_H; // 1.9047...

  // Log source dimensions for visibility
  console.log(`[og-images] ${id}: ${meta.width}×${meta.height} (${srcAspect.toFixed(2)}:1) → ${OG_W}×${OG_H}`);

  await sharp(src)
    .resize(OG_W, OG_H, {
      fit: 'cover',
      position: srcAspect > targetAspect ? 'centre' : 'top', // portrait: crop from top
    })
    .jpeg({ quality: QUALITY, mozjpeg: true })
    .toFile(dest);

  const { size } = await sharp(dest).metadata();
  generated++;
  console.log(`[og-images] ✓ public/og/${id}.jpg`);
}

console.log(`[og-images] Done. ${generated} generated, ${skipped} skipped.`);
