// Turns raw Magnific SVGs (docs/design/raw) into on-brand light + dark files in public/art.
//
// Generated SVGs carry approximate colours and a full-bleed background rect. Each colour
// is snapped to one of the five art tokens below, the background is dropped so the art
// sits on whatever card it is placed on, and the result goes through SVGO.
// An <img> can't read the page's CSS variables, so each file is emitted twice (light,
// dark) and the page shows the one matching the theme.
//
// Usage: npm run art

import { readdir, readFile, writeFile, mkdir, stat } from 'node:fs/promises';
import { join, basename } from 'node:path';
import { optimize } from 'svgo';

const SRC = 'docs/design/raw';
const OUT = 'public/art';

// Keep in sync with --art-* in src/app/globals.css.
const TOKENS = {
  light: { paper: '#FFFFFF', ink: '#111412', mute: '#C4C8C3', soft: '#E3F0EE', accent: '#0F6E68' },
  dark: { paper: '#1B201F', ink: '#C9CFCA', mute: '#4A514E', soft: '#1E3B37', accent: '#5FC2B5' },
};

function toHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  const l = (max + min) / 2;
  if (max === min) return { h: 0, s: 0, l };
  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let h;
  if (max === r) h = (g - b) / d + (g < b ? 6 : 0);
  else if (max === g) h = (b - r) / d + 2;
  else h = (r - g) / d + 4;
  return { h: h * 60, s, l };
}

/** Which art token a generated colour stands for. */
function classify(r, g, b) {
  const { h, s, l } = toHsl(r, g, b);
  const teal = h >= 160 && h <= 210 && s > 0.12;
  if (l > 0.95) return 'paper';
  if (teal && l < 0.55) return 'accent';
  if (teal || (l > 0.82 && h >= 150 && h <= 210 && s > 0.05)) return 'soft';
  if (l < 0.5) return 'ink';
  return l > 0.88 ? 'paper' : 'mute';
}

function recolor(svg, palette) {
  // Drop the full-canvas background path (always the first path, starting at 0 0).
  svg = svg.replace(/<path[^>]*d="M 0 0 L (\d+) 0 L \1 (\d+) L 0 \2 L 0 0 z"[^>]*><\/path>/, '');
  svg = svg.replace(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/g, (_, r, g, b) => palette[classify(+r, +g, +b)]);
  // Scale with its box instead of stretching.
  return svg.replace(/preserveAspectRatio="none"/, 'preserveAspectRatio="xMidYMid meet"');
}

const svgoConfig = {
  multipass: true,
  floatPrecision: 1,
  plugins: [
    { name: 'preset-default', params: { overrides: { removeViewBox: false } } },
    'removeDimensions',
    { name: 'removeAttrs', params: { attrs: ['style'] } },
  ],
};

await mkdir(OUT, { recursive: true });
const files = (await readdir(SRC)).filter((f) => f.endsWith('.svg'));
let before = 0,
  after = 0;
for (const file of files) {
  const raw = await readFile(join(SRC, file), 'utf8');
  before += (await stat(join(SRC, file))).size;
  const name = basename(file, '.svg');
  for (const [theme, palette] of Object.entries(TOKENS)) {
    const { data } = optimize(recolor(raw, palette), svgoConfig);
    const out = join(OUT, theme === 'light' ? `${name}.svg` : `${name}-dark.svg`);
    await writeFile(out, data);
    if (theme === 'light') after += data.length;
    console.log(`${out}  ${(data.length / 1024).toFixed(1)} kB`);
  }
}
console.log(`\nLight set: ${(before / 1024).toFixed(0)} kB raw -> ${(after / 1024).toFixed(0)} kB`);
