---
name: commit
description: Commita e pusha as mudanças do projeto em conventional commits (feat/fix/chore com escopo), em português, com push seguro via rebase. Use quando o usuário pedir para "commitar", "subir", "pushar", "salvar no git" ou disser "/commit".
---

# Skill: commit + push versionado

Objetivo: transformar o estado atual do working tree em um (ou mais) commit(s)
limpos, no padrão do projeto, e mandar pro `origin/main` sem quebrar nada.

## Padrão de commit deste projeto

Conventional Commits, **mensagem em português**, subject no imperativo e minúsculo:

```
<tipo>(<escopo>): <resumo curto em pt-br>

<corpo opcional: o porquê da mudança, não o "o quê">

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>
```

- **tipos**: `feat` (novo comportamento visível), `fix` (correção de bug),
  `chore` (build/deps/assets/config), `docs` (doc/markdown), `refactor`
  (reorganização sem mudar comportamento), `style` (só formatação), `perf`.
- **escopo** = a área tocada, curto e em minúsculo. Exemplos reais do projeto:
  `whatsapp`, `home`, `personal`, `advogados`, `clinicas`, `tracking`,
  `assets`, `seo`, `hero`, `footer`. Se pegar várias áreas, use a dominante.
- **subject**: até ~60 caracteres, sem ponto final, imperativo
  ("adiciona", "corrige", "remove", "renomeia"), não "adicionei".
- **corpo**: só quando o motivo não é óbvio. Explica o *porquê*. Sem ponto no
  fim das linhas de código; frases normais podem ter ponto.
- Sempre termina com a linha `Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>`.

## Passos

1. **Entender o diff**: rode `git status --short` e `git diff` (staged +
   unstaged). Não commite às cegas.
2. **Respeitar as proibições do PROJECT_CONTEXT.md**: nunca commitar dados de
   cliente, `.env`, ou os arquivos do usuário marcados como "não commitar sem
   perguntar" (ex.: `scripts/generate-logos.mjs`). Na dúvida sobre um arquivo
   novo/estranho, pergunte antes de adicioná-lo.
3. **Agrupar por assunto**: se as mudanças são de temas diferentes (ex.: um fix
   de copy + uma mudança de tracking), faça **commits separados** com
   `git add <arquivos>` por grupo — o usuário prefere poder reverter um assunto
   sem perder os outros. Se for tudo o mesmo assunto, um commit só.
4. **Escrever a mensagem** no padrão acima. Passe corpo multi-linha via
   `git commit -F -` com heredoc (heredoc funciona no Bash tool; **não** no
   PowerShell — se usar PowerShell, escreva num arquivo temporário).
5. **Push seguro**: `git push origin main`. Se der `rejected (fetch first)`,
   rode `git pull --rebase origin main` e pushe de novo. Nunca use
   `--force`/`--no-verify` sem o usuário pedir.
6. **Reportar**: mostre o hash e o range do push (`<old>..<new> main -> main`).

## Observações

- O projeto trabalha direto na `main` (é o fluxo estabelecido, dev solo). Não
  crie branch a menos que o usuário peça.
- Aviso de `LF will be replaced by CRLF` é normal no Windows — ignore.
- Não rode `npm run build` como parte do commit a menos que o usuário peça;
  mudanças de copy/config não precisam. Se tocou lógica/TSX arriscado, ofereça.
