import { execSync } from 'child_process';
import { writeFileSync, mkdirSync, rmSync } from 'fs';
import { join, resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const OUT = resolve(__dirname, '..', 'public', 'brand');
const TMP = resolve(__dirname, '..', '.tmp-logos');

mkdirSync(OUT, { recursive: true });
mkdirSync(TMP, { recursive: true });

const FONT = 'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,600&display=block';

function page(w, h, body) {
  return `<!DOCTYPE html><html><head><meta charset="utf-8">
<link rel="stylesheet" href="${FONT}">
<style>*{margin:0;padding:0}html,body{width:${w}px;height:${h}px;overflow:hidden;background:transparent}</style>
</head><body>${body}</body></html>`;
}

// ─── SVGs ────────────────────────────────────────────────────────────────────

// Perfil 400×400 — símbolo (fundo escuro e sage usam paths idênticos)
function svgPerfilSimbolo(bg) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="400" height="400">
  <rect width="400" height="400" rx="88" fill="${bg}"/>
  <path d="M130 165 L270 165 M200 165 L200 285" stroke="#f7f4ee" stroke-width="30" stroke-linecap="round" fill="none"/>
  <circle cx="292" cy="271" r="28" fill="#c9a87c"/>
</svg>`;
}

// Perfil 400×400 — wordmark (fundo claro)
const svgPerfilWordmark = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="400" height="400">
  <rect width="400" height="400" rx="88" fill="#f7f4ee"/>
  <text x="200" y="200" text-anchor="middle" dominant-baseline="central"
        font-family="'Fraunces', Georgia, serif" font-size="68">
    <tspan font-weight="600" fill="#1a1f1c">tá</tspan><tspan dx="8" font-weight="400" fill="#1a1f1c" fill-opacity="0.45">online</tspan><tspan font-weight="600" fill="#c9a87c">.</tspan>
  </text>
</svg>`;

// Banner 1200×628 — símbolo + wordmark horizontal
function svgBanner(bg, fgColor, fgOpacity, strokeColor) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 628" width="1200" height="628">
  <rect width="1200" height="628" fill="${bg}"/>
  <path d="M320 265 L420 265 M370 265 L370 360" stroke="${strokeColor}" stroke-width="22" stroke-linecap="round" fill="none"/>
  <circle cx="435" cy="349" r="20" fill="#c9a87c"/>
  <text x="505" y="314" text-anchor="start" dominant-baseline="central"
        font-family="'Fraunces', Georgia, serif" font-size="80">
    <tspan font-weight="600" fill="${fgColor}">${'tá'}</tspan><tspan dx="10" font-weight="400" fill="${fgColor}" fill-opacity="${fgOpacity}">${'online'}</tspan><tspan font-weight="600" fill="#c9a87c">.</tspan>
  </text>
</svg>`;
}

// Banner com slogan 1200×628 — símbolo pequeno + wordmark + slogan empilhados
function svgBannerSlogan(bg, fgColor, fgOpacity, sloganOpacity, strokeColor) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 628" width="1200" height="628">
  <rect width="1200" height="628" fill="${bg}"/>
  <path d="M570 174 L630 174 M600 174 L600 219" stroke="${strokeColor}" stroke-width="13" stroke-linecap="round" fill="none"/>
  <circle cx="639" cy="214" r="12" fill="#c9a87c"/>
  <text x="600" y="316" text-anchor="middle" dominant-baseline="central"
        font-family="'Fraunces', Georgia, serif" font-size="86">
    <tspan font-weight="600" fill="${fgColor}">${'tá'}</tspan><tspan dx="11" font-weight="400" fill="${fgColor}" fill-opacity="${fgOpacity}">${'online'}</tspan><tspan font-weight="600" fill="#c9a87c">.</tspan>
  </text>
  <text x="600" y="446" text-anchor="middle" dominant-baseline="central"
        font-family="'Fraunces', Georgia, serif" font-size="28" font-weight="300"
        fill="${fgColor}" fill-opacity="${sloganOpacity}" letter-spacing="3">Sites que trabalham por você.</text>
</svg>`;
}

// ─── Manifesto ────────────────────────────────────────────────────────────────

const images = [
  { name: 'perfil-01-simbolo-escuro', w: 400, h: 400, svg: svgPerfilSimbolo('#1a1f1c') },
  { name: 'perfil-02-simbolo-sage',   w: 400, h: 400, svg: svgPerfilSimbolo('#3a5246') },
  { name: 'perfil-03-wordmark-claro', w: 400, h: 400, svg: svgPerfilWordmark },

  { name: 'banner-01-escuro', w: 1200, h: 628, svg: svgBanner('#1a1f1c', '#f7f4ee', '0.58', '#f7f4ee') },
  { name: 'banner-02-sage',   w: 1200, h: 628, svg: svgBanner('#3a5246', '#f7f4ee', '0.65', '#f7f4ee') },
  { name: 'banner-03-claro',  w: 1200, h: 628, svg: svgBanner('#f7f4ee', '#1a1f1c', '0.42', '#1a1f1c') },

  { name: 'banner-slogan-01-escuro', w: 1200, h: 628, svg: svgBannerSlogan('#1a1f1c', '#f7f4ee', '0.58', '0.55', '#f7f4ee') },
  { name: 'banner-slogan-02-sage',   w: 1200, h: 628, svg: svgBannerSlogan('#3a5246', '#f7f4ee', '0.65', '0.62', '#f7f4ee') },
  { name: 'banner-slogan-03-claro',  w: 1200, h: 628, svg: svgBannerSlogan('#f7f4ee', '#1a1f1c', '0.42', '0.45', '#1a1f1c') },
];

// ─── Geração ──────────────────────────────────────────────────────────────────

let ok = 0, fail = 0;

for (const img of images) {
  const htmlPath = join(TMP, `${img.name}.html`);
  const pngPath  = join(OUT, `${img.name}.png`);

  writeFileSync(htmlPath, page(img.w, img.h, img.svg), 'utf8');

  const url = 'file:///' + htmlPath.replace(/\\/g, '/');
  const cmd = `"${CHROME}" --headless --disable-gpu --hide-scrollbars --force-device-scale-factor=1 --window-size=${img.w},${img.h} --screenshot="${pngPath}" "${url}"`;

  try {
    execSync(cmd, { stdio: 'pipe' });
    console.log(`✓  ${img.name}.png`);
    ok++;
  } catch (e) {
    console.error(`✗  ${img.name}: ${e.stderr?.toString().slice(0, 120)}`);
    fail++;
  }
}

rmSync(TMP, { recursive: true, force: true });
console.log(`\n${ok} gerados, ${fail} falhas — em public/brand/`);
