# Tá Online — Briefing do Projeto

Landing page revisada da agência **Tá Online** (Niterói/RJ, dev solo).
**Sempre leia este arquivo antes de fazer qualquer edição.**

---

## 1. Negócio

- Agência pequena focada em sites para 3 nichos: **personal trainers/studios**, **advogados** e **clínicas de estética**.
- **4 páginas**: 1 hub neutro na raiz + 3 landings com mesmo design system mas conteúdo/paleta por nicho:
  - `/` → hub minimalista (bifurcação para os 3 nichos, sem conteúdo de venda)
  - `/personal` → personal trainers e studios
  - `/advogados` → advogados e escritórios
  - `/estetica` → clínicas de estética
- **Por que hub na raiz**: domínio cru (`agenciataonline.com.br`) é divulgação genérica da marca. Anúncio segmentado manda link específico (`/personal`, `/advogados`, `/estetica`) — não cai no hub.
- Modelo: **setup único + mensalidade**, posicionamento "tudo cuidado por nós, você não precisa pensar em parte técnica".
- A mensalidade é vendida como **benefício** (alterações ilimitadas, suporte, hospedagem inclusa), nunca como custo.

### Contato
- WhatsApp: **`5521990847321`** (DDD 21, Niterói). Exibição: `(21) 99084-7321`.
- Email: `contato@agenciataonline.com.br`
- Endereço (Schema): `Icaraí, Niterói - RJ, Brasil` · coords `-22.9036, -43.1042`
- Áreas atendidas: Niterói, São Gonçalo, Maricá, Itaboraí
- Domínio: `https://www.agenciataonline.com.br`

### ⚠ Proibições (não negociáveis)

- **NUNCA** usar o número antigo `5511978481415`.
- **NUNCA** mencionar "sem mensalidade" / "zero mensalidade" / "investimento único" / "site é seu, paga uma vez".
- **NUNCA** clichês de agência: "transformamos sua presença digital", "leve seu negócio ao próximo nível", "soluções inovadoras", "potencialize", "alavanque".
- **NUNCA** promessa específica de resultado ("primeiro lugar no Google", "10x mais clientes", "dobre seu faturamento").
- **NUNCA** depoimentos falsos.
- **NÃO** adicionar libs (sem framer-motion, sem clsx, sem nada extra).
- **NÃO** deletar arquivos do projeto original sem perguntar (arquivos que **você** criou na sessão pode deletar).
- **NÃO** mudar `package.json` sem perguntar.

### ⚠ Cuidado especial: `/advogados` e OAB

- Sem "**captação**" (frase comum mas sensível na OAB). Use "presença digital", "visibilidade", "chegada de novos clientes".
- Sem "**especialista**" — só pode quem tem o título registrado na OAB. Use "áreas de atuação".
- Sem promessa de resultado nem comparação com outros profissionais.
- Tom institucional, informativo, sóbrio — é o que o Código de Ética da OAB permite.
- FAQ da OAB **é a primeira pergunta** do nicho.

---

## 2. Stack

- **Next.js 16.2.1** (App Router, Turbopack) + **React 19.2.4** + **Tailwind CSS v4** (`@tailwindcss/postcss`, `@theme inline` no CSS).
- **TypeScript estrito**, ESLint 9 (`eslint-config-next`).
- **Fontes**: `Inter` (corpo) + `Fraunces` (display/títulos) via `next/font/google`.
- **Sem libs adicionais** — animações são CSS puro, ícones são SVG inline.

### ⚠ Next.js 16 tem breaking changes

Antes de mexer em qualquer convention do Next (metadata, sitemap, robots, image, font, dev indicators, etc.), **leia o doc relevante em `node_modules/next/dist/docs/`**. Não confie na memória.

Conventions já validadas no projeto:
- `app/icon.svg` — favicon SVG (Next 16 detecta automaticamente, gera `<link rel="icon">`).
- `apple-icon` **só aceita .jpg/.jpeg/.png** no Next 16 (SVG não funciona — tentado e falhou).
- `app/sitemap.ts` retorna `MetadataRoute.Sitemap`.
- `app/robots.ts` retorna `MetadataRoute.Robots`.
- `devIndicators: false` no `next.config.ts` desliga o overlay do dev.

---

## 3. Arquitetura de código

```
lib/
  site.ts                     # constantes globais (whatsapp, email, endereço, áreas)
  whatsapp.ts                 # whatsappUrl(message) — URL-encoded
  schema.ts                   # buildJsonLd(content) → LocalBusiness | LegalService
  content/
    types.ts                  # interface NicheContent
    personal.ts               # copy do nicho /personal
    advogados.ts              # copy do nicho /advogados
    estetica.ts               # copy do nicho /estetica

components/
  ui/
    Container.tsx             # wrapper mx-auto max-w (sizes: narrow/default/wide)
    Section.tsx               # <section> com variant (default/surface/primary)
    Button.tsx                # CTA com variants (primary/secondary/ghost/onPrimary)
    JsonLd.tsx                # <script type="application/ld+json">
    BrowserMock.tsx           # mockup SVG de browser (usado no Portfolio)
    Logo.tsx                  # wordmark "tá online." em Fraunces
  sections/
    SiteHeader.tsx            # header sticky minimalista (logo + âncora "Investimento")
    Hero.tsx                  # H1 + subhead + 2 CTAs
    Dores.tsx                 # 3 cards numerados
    Solucao.tsx               # 5 itens com ícone SVG
    Portfolio.tsx             # 2 BrowserMock + comentário TODO
    ComoFunciona.tsx          # 4 passos numerados
    Investimento.tsx          # 2 cards (setup + mensal) + CTA
    Sobre.tsx                 # avatar placeholder com <Logo> dentro + texto
    FAQ.tsx                   # <details> nativo (sem JS)
    CTAFinal.tsx              # bloco grande centralizado
    Footer.tsx                # contato + cross-sell + copyright
  NichePage.tsx               # orquestra: aplica data-theme + renderiza todas seções
  FloatingWhatsappBar.tsx     # botão flutuante verde WhatsApp

app/
  layout.tsx                  # fontes + metadata base
  page.tsx                    # / → HubPage (não usa NichePage; auto-contida com data-theme="hub")
  personal/page.tsx           # /personal (NichePage + personalContent)
  advogados/page.tsx          # /advogados
  estetica/page.tsx           # /estetica
  sitemap.ts                  # 4 rotas
  robots.ts
  globals.css                 # @theme + paletas dos 4 [data-theme] (3 nichos + hub)
  icon.svg                    # favicon SVG vetorial
```

### Como adicionar/modificar conteúdo de um nicho

Tudo está em `lib/content/<nicho>.ts` seguindo o tipo `NicheContent`. O componente `NichePage` recebe esse content via props e aplica `data-theme={content.niche}` num wrapper — as CSS vars trocam automaticamente. **Zero duplicação de componente entre nichos.**

### Como funciona o tema

`app/globals.css` define tokens via `@theme inline { --color-bg: var(--bg); ... }` e três blocos `[data-theme="..."]` definem os valores das vars `--bg`, `--primary`, `--accent`, etc. Componentes usam classes neutras (`bg-bg`, `text-fg`, `bg-primary`, `text-primary-fg`, `border-line`, `bg-accent`, etc.).

---

## 4. Decisões já fechadas (não revisitar sem motivo)

### Tom & copy
- **Pronome**: sempre **`nós`** / verbo 1ª pessoa do plural (`Cuidamos`, `Atendemos`, `Entregamos`). **Nunca `eu`**, nem na seção Sobre. `a gente` evitar (coloquial demais).
- Trata o leitor por **`você`** (mesmo na página de advogados — formal mas próximo).
- **Profissional mais formal**: sem gírias, sem jargão técnico. Frases curtas e diretas. Foco em **benefício**, não feature técnica.
- Honestidade sem promessa. Cada mensagem WhatsApp termina com ponto final.
- Aplicar o mesmo padrão das outras 2 páginas no que falta escrever.

### Identidade visual
- **Logo wordmark**: `<Logo>` em `components/ui/Logo.tsx`. "tá" semibold + "online" regular cor `fg-muted` + ponto em cor `accent`. Tamanhos: `sm` / `md` / `lg` / `xl`.
- **Favicon** (`app/icon.svg`): símbolo T-bar branco + ponto champagne sobre quadrado preto arredondado.
- **Header sticky** mínimo (só Logo + âncora "Investimento", sem navegação cruzada). **Só nas 3 páginas de nicho** — hub não tem header.
- **Navegação cruzada entre nichos** = **só no footer** (`crossSell`) nas páginas de nicho. No hub, os 3 cards JÁ são o cross-sell.
- **Hub** (`/`) é auto-contido em `app/page.tsx` — não usa `NichePage`, `SiteHeader` nem `Footer` de nicho. Tem Logo central + H1 + subhead + 3 cards + footer mínimo + `FloatingWhatsappBar`. Schema é `Organization` (sem nicho).
- **Sobre** tem um círculo placeholder que mostra `<Logo size="lg">` no centro. Quando o usuário enviar a foto, substituir por `<Image src="/sobre.jpg" ... />` (comentário TODO já no código).
- **Portfólio** usa `BrowserMock` em SVG/CSS. Cada nicho tem 2 demos fictícios com `href: null` (badge "Em breve"). Quando o usuário gerar URLs reais, trocar `href: null` em `lib/content/<nicho>.ts`.

### Paletas (em `app/globals.css`)

| Tema | Fundo | Texto | Primária | Accent |
|---|---|---|---|---|
| `personal` (default `:root`) | `#f7f4ee` creme | `#1a1f1c` | sage `#3a5246` | champagne `#c9a87c` |
| `advogados` | `#f7f8fa` neutro | `#0c1a2e` | marinho `#14304f` | dourado `#b8924d` |
| `estetica` | `#fdf8f4` rosado | `#1f1611` | rose escuro `#6d3d3d` | rose nude `#d4a89a` + soft champagne `#c9a87c` |
| `hub` | `#fafaf8` neutro morno | `#1a1a1a` cinza escuro | sage `#3a5246` (herda da marca) | champagne `#c9a87c` |

### Preços (por nicho)

| Nicho | Setup | Parcelado | Mensal |
|---|---|---|---|
| `personal` | R$ 1.997 | 3x R$ 697 | R$ 147/mês |
| `advogados` | R$ 2.497 | 3x R$ 867 | R$ 197/mês |
| `estetica` | R$ 1.997 | 3x R$ 697 | R$ 147/mês |

### SEO por página

| Rota | Schema | Title |
|---|---|---|
| `/` (hub) | `Organization` | `Tá Online — Sites para pequenos negócios em Niterói` |
| `/personal` | `LocalBusiness` | `Tá Online — Sites para Personal Trainers e Studios em Niterói` |
| `/advogados` | `LegalService` | `Tá Online — Sites para Advogados e Escritórios em Niterói` |
| `/estetica` | `LocalBusiness` | `Tá Online — Sites para Clínicas de Estética em Niterói` |

---

## 5. Estado atual (commits)

| Commit | Etapa | Status |
|---|---|---|
| `38fd775` | Etapa 1 — Scaffold (fundação + componentes) | ✅ pushed |
| `4b1e651` | Etapa 2 — Página `/` (personal) + branding (Logo + favicon + SiteHeader) | ✅ pushed |
| `4e23efd` | Etapa 3 — Página `/advogados` | ✅ pushed |
| `205e1e2` | Fix — `SiteHeader` usa `next/link` no logo | ✅ pushed |
| `5b9c078` | Etapa 4 — Página `/estetica` | ✅ pushed |
| `fd7a3ab` | Doc — `PROJECT_CONTEXT.md` reflete etapas 3 e 4 | ✅ pushed |
| `bed649f` | Etapa 6 — `/` vira hub neutro e personal migra pra `/personal` | 🟡 local (não pushed) |

### Próximo passo concreto

As **4 páginas** estão no ar (em build local), commitadas e prontas. **Branch `main` está 1 commit à frente de `origin/main`** — esperar o usuário pedir `git push`.

#### Arquivos do usuário criados entre sessões (não commitar sem perguntar)

- `scripts/generate-logos.mjs` — script criado pelo usuário entre as sessões. Está untracked, não foi incluído em nenhum commit do agente. Pertence ao usuário (perguntar antes de tocar).

#### O que falta — dependente de ativos do usuário, não de código

1. **Foto da seção Sobre** — substituir o placeholder em `components/sections/Sobre.tsx` por `<Image src="/sobre.jpg" ... />` quando a foto chegar.
2. **Links reais do Portfolio** — quando os 6 demos forem ao ar (2 por nicho), trocar `href: null` em `lib/content/<nicho>.ts → portfolio.demos[i].href` pela URL real.
3. **`apple-icon.png`** (opcional) — gerar a partir de `app/icon.svg` se quiser cobrir iOS antigo (Next 16 não aceita SVG pra apple-icon — testado).
4. **`public/favicon.png`** (671KB, não referenciado) — pode deletar manualmente.
5. **`git push`** quando o usuário aprovar mandar `bed649f` pro `origin/main`.

#### ⚠ Impacto SEO da migração `/` → `/personal`

- A `/` deixou de ser a landing densa de personal. O conteúdo continua existindo em `/personal` (mesma copy, mesma estrutura). Google vai reindexar em 2–4 semanas — palavras-chave como "personal trainer Niterói" passam a ranquear `/personal` em vez de `/`.
- **Não foi configurado redirect 301** porque `/` continua existindo (com conteúdo de hub). Se o ranking despencar e demorar pra recuperar, considerar avisar o Google via Search Console que `/personal` é a nova URL canônica do conteúdo.

---

## 6. Comandos

```bash
npm run dev      # sobe em :3000 (devIndicators off)
npm run build    # build Turbopack
npm run lint     # ESLint
```

### PowerShell — gotchas
- Heredoc (`<<'EOF'`) **não funciona** — usar arquivo temporário pra commit messages longas.
- Pra matar dev server na porta 3000:
  ```powershell
  $p = Get-NetTCPConnection -LocalPort 3000 -State Listen -EA SilentlyContinue | Select -First 1 -Exp OwningProcess
  if ($p) { Stop-Process -Id $p -Force }
  ```

---

## 7. Convenções de processo (pedidos do usuário)

- **Commit por seção/página** (pra ele poder reverter um nicho sem perder os outros).
- Esperar **OK explícito** do usuário entre cada nicho antes de seguir pro próximo.
- Antes de editar copy, **mostrar rascunho do tom/copy** pra ele revisar — economiza retrabalho.
- Build final + resumo só depois das 3 páginas aprovadas.

---

## 8. TODOs persistentes no código

Estes TODOs ficam no código pra o usuário substituir quando tiver os ativos:

- `components/sections/Portfolio.tsx` — substituir `BrowserMock` pelos demos reais quando os links estiverem prontos. Editar `href` em `lib/content/<nicho>.ts → portfolio.demos[i].href`.
- `components/sections/Sobre.tsx` — substituir o bloco "avatar placeholder" por `<Image src="/sobre.jpg" alt="..." width=... height=... />` quando a foto chegar.
- `app/apple-icon.png` (não existe) — gerar a partir do `app/icon.svg` se quiser cobrir iOS antigo (Next 16 não aceita SVG pra apple-icon).
- `public/favicon.png` — arquivo antigo (671KB), não é mais referenciado em lugar nenhum mas continua em `/public`. Pode deletar manualmente quando quiser.
