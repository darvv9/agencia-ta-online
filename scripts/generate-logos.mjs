// Generates Tá Online logo PNGs for WhatsApp Business (profile + banner).
// Output: C:\Users\darv9\Downloads\ta-online-logos\
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const OUT_DIR = "C:\\Users\\darv9\\Downloads\\ta-online-logos";
fs.mkdirSync(OUT_DIR, { recursive: true });

// Brand tokens (from app/globals.css [data-theme="personal"] + favicon)
const COLORS = {
  bgDark: "#1a1f1c",
  bgCreme: "#f7f4ee",
  fgCreme: "#f7f4ee",
  fgDark: "#1a1f1c",
  fgMuted: "#5a6660",
  accent: "#c9a87c",
};

// We use Georgia (system serif on Windows/Mac) instead of embedded Fraunces because
// sharp/librsvg's @font-face rendering ignores per-glyph advance metrics, which
// breaks letter spacing. Georgia is the closest widely-installed serif that matches
// Fraunces's classical proportions and gives correct kerning out of the box.
const SERIF = "Georgia, 'Times New Roman', serif";

// ---------- 1. Symbol mark — square, fills canvas (for WhatsApp profile photo) ----------
// WhatsApp crops to circle, so no rounded corners on the outer square — solid fill.
function symbolSvg({ size, bg, mark, dot }) {
  // Reproduces app/icon.svg geometry but at full canvas size.
  // Original viewBox 32x32: T-bar at y=11.5, x=9..22, vertical center x=15.5..y=24, dot at (24, 22.5) r=2.6.
  // For a centered, balanced standalone mark we rebuild the geometry:
  // T-bar centered horizontally, dot to the bottom-right.
  const s = size;
  // proportional units (relative to 1024):
  const stroke = (s * 90) / 1024;
  const barTop = s * 0.34;
  const barLeft = s * 0.22;
  const barRight = s * 0.78;
  const barCenterX = s * 0.5;
  const barBottom = s * 0.74;
  const dotR = (s * 95) / 1024;
  const dotCx = s * 0.78;
  const dotCy = s * 0.74;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}" viewBox="0 0 ${s} ${s}">
  <rect width="${s}" height="${s}" fill="${bg}"/>
  <path d="M ${barLeft} ${barTop} L ${barRight} ${barTop} M ${barCenterX} ${barTop} L ${barCenterX} ${barBottom}"
        stroke="${mark}" stroke-width="${stroke}" stroke-linecap="round" fill="none"/>
  <circle cx="${dotCx}" cy="${dotCy}" r="${dotR}" fill="${dot}"/>
</svg>`;
}

// ---------- 2. Wordmark "tá online." ----------
function wordmarkSvg({ width, height, bg, fg, muted, accent }) {
  const fontSize = Math.round(height * 0.42);
  const cy = height / 2 + fontSize * 0.32;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <rect width="${width}" height="${height}" fill="${bg}"/>
  <text x="${width / 2}" y="${cy}" font-family="${SERIF}" font-size="${fontSize}" text-anchor="middle">
    <tspan font-weight="700" fill="${fg}">tá</tspan><tspan fill="${muted}" dx="0.18em">online</tspan><tspan font-weight="700" fill="${accent}">.</tspan>
  </text>
</svg>`;
}

// ---------- 3. Banner: symbol + wordmark side by side ----------
function bannerSvg({ width, height, bg, fg, muted, accent, mark, dot, symbolBg }) {
  // Layout: symbol square on the left (or stacked), wordmark to its right.
  // Banner ratio 1920x1005 (WhatsApp catalog cover-ish).
  const symbolSize = Math.round(height * 0.5);
  const gap = Math.round(width * 0.025);
  const fontSize = Math.round(height * 0.22);
  // total content width approx: symbolSize + gap + ~ (font metrics) — center the group.
  // We'll just left-align symbol at 25% from left, wordmark next to it.
  const groupY = (height - symbolSize) / 2;
  const symbolX = width * 0.18;
  const stroke = (symbolSize * 90) / 1024;
  const barTop = groupY + symbolSize * 0.34;
  const barLeft = symbolX + symbolSize * 0.22;
  const barRight = symbolX + symbolSize * 0.78;
  const barCenterX = symbolX + symbolSize * 0.5;
  const barBottom = groupY + symbolSize * 0.74;
  const dotR = (symbolSize * 95) / 1024;
  const dotCx = symbolX + symbolSize * 0.78;
  const dotCy = groupY + symbolSize * 0.74;
  const textX = symbolX + symbolSize + gap;
  const textY = height / 2 + fontSize * 0.18;
  const tagY = textY + fontSize * 0.55;
  const tagSize = Math.round(fontSize * 0.28);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <rect width="${width}" height="${height}" fill="${bg}"/>
  <rect x="${symbolX}" y="${groupY}" width="${symbolSize}" height="${symbolSize}" rx="${symbolSize * 0.18}" fill="${symbolBg}"/>
  <path d="M ${barLeft} ${barTop} L ${barRight} ${barTop} M ${barCenterX} ${barTop} L ${barCenterX} ${barBottom}"
        stroke="${mark}" stroke-width="${stroke}" stroke-linecap="round" fill="none"/>
  <circle cx="${dotCx}" cy="${dotCy}" r="${dotR}" fill="${dot}"/>
  <text x="${textX}" y="${textY}" font-family="${SERIF}" font-size="${fontSize}">
    <tspan font-weight="700" fill="${fg}">tá</tspan><tspan fill="${muted}" dx="0.18em">online</tspan><tspan font-weight="700" fill="${accent}">.</tspan>
  </text>
  <text x="${textX}" y="${tagY}" font-family="${SERIF}" font-size="${tagSize}" fill="${muted}">sites para quem quer aparecer</text>
</svg>`;
}

async function render(svg, outPath, label) {
  await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(outPath);
  const { size } = fs.statSync(outPath);
  const meta = await sharp(outPath).metadata();
  console.log(`✓ ${label}  ${meta.width}x${meta.height}  ${(size / 1024).toFixed(1)} KB  →  ${path.basename(outPath)}`);
}

// Build the set
const jobs = [
  // ============ PROFILE PHOTOS (square, for WhatsApp profile — gets cropped to circle) ============
  {
    label: "Foto perfil — fundo escuro (recomendado)",
    file: "perfil-1024-fundo-escuro.png",
    svg: symbolSvg({ size: 1024, bg: COLORS.bgDark, mark: COLORS.fgCreme, dot: COLORS.accent }),
  },
  {
    label: "Foto perfil — fundo creme",
    file: "perfil-1024-fundo-creme.png",
    svg: symbolSvg({ size: 1024, bg: COLORS.bgCreme, mark: COLORS.fgDark, dot: COLORS.accent }),
  },
  {
    label: "Foto perfil — versão 640 (mínimo WhatsApp)",
    file: "perfil-640-fundo-escuro.png",
    svg: symbolSvg({ size: 640, bg: COLORS.bgDark, mark: COLORS.fgCreme, dot: COLORS.accent }),
  },

  // ============ BANNERS (16:9 wide, for catalog / status / promo) ============
  {
    label: "Banner 1920x1005 — fundo creme (recomendado)",
    file: "banner-1920x1005-creme.png",
    svg: bannerSvg({
      width: 1920, height: 1005,
      bg: COLORS.bgCreme, fg: COLORS.fgDark, muted: COLORS.fgMuted, accent: COLORS.accent,
      mark: COLORS.fgCreme, dot: COLORS.accent, symbolBg: COLORS.bgDark,
    }),
  },
  {
    label: "Banner 1920x1005 — fundo escuro",
    file: "banner-1920x1005-escuro.png",
    svg: bannerSvg({
      width: 1920, height: 1005,
      bg: COLORS.bgDark, fg: COLORS.fgCreme, muted: "#a8b1ac", accent: COLORS.accent,
      mark: COLORS.fgCreme, dot: COLORS.accent, symbolBg: "#0f1310",
    }),
  },
  {
    label: "Banner widescreen 1920x1080",
    file: "banner-1920x1080-creme.png",
    svg: bannerSvg({
      width: 1920, height: 1080,
      bg: COLORS.bgCreme, fg: COLORS.fgDark, muted: COLORS.fgMuted, accent: COLORS.accent,
      mark: COLORS.fgCreme, dot: COLORS.accent, symbolBg: COLORS.bgDark,
    }),
  },

  // ============ WORDMARK ONLY (extra — útil pra assinatura de email, etc.) ============
  {
    label: "Wordmark — 1600x500 fundo creme",
    file: "wordmark-1600x500-creme.png",
    svg: wordmarkSvg({
      width: 1600, height: 500,
      bg: COLORS.bgCreme, fg: COLORS.fgDark, muted: COLORS.fgMuted, accent: COLORS.accent,
    }),
  },
  {
    label: "Wordmark — 1600x500 fundo escuro",
    file: "wordmark-1600x500-escuro.png",
    svg: wordmarkSvg({
      width: 1600, height: 500,
      bg: COLORS.bgDark, fg: COLORS.fgCreme, muted: "#a8b1ac", accent: COLORS.accent,
    }),
  },
];

console.log(`\nGerando em: ${OUT_DIR}\n`);
for (const j of jobs) {
  await render(j.svg, path.join(OUT_DIR, j.file), j.label);
}
console.log(`\n✓ ${jobs.length} arquivos gerados.`);
