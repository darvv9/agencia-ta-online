# Objetivo do negócio — Tá Online

> Norte financeiro do projeto. Toda decisão de produto, preço e esforço deve ser
> lida sob esta lente. **Leia junto com `PROJECT_CONTEXT.md`.**

---

## 1. A meta

**Faturar ~R$ 60.000 com a agência** — somando **tudo**: setups, mensalidades e
renovações ao longo do tempo, já descontando a saída (churn) de parte dos
clientes.

Não é um negócio pra tocar pra sempre. É um **projeto com linha de chegada**:
quando o acumulado chegar perto de R$ 60k (ou o recorrente estabilizar num
patamar confortável), o objetivo é **reduzir o envolvimento / fazer o exit** e
liberar tempo/capital pra **focar em outro projeto futuro**.

O que isso significa na prática:
- O sucesso não é "ter o máximo de clientes pra sempre" — é **chegar nos R$ 60k
  com o menor esforço operacional possível**.
- Cada cliente é somado uma vez pelo setup e continua somando pela mensalidade
  enquanto ficar. **A saída de clientes é esperada e já entra na conta** — não é
  fracasso, é parte do modelo.

---

## 2. O que conta pro R$ 60k

```
Receita total = Σ (setups fechados)  +  Σ (mensalidades pagas até o cliente sair)
```

- **Setup** = dinheiro de entrada, pago uma vez por cliente.
- **Mensalidade** = recorrente, soma todo mês enquanto o cliente fica ativo.
- **Churn (exit de clientes)** = quando um cliente cancela, ele para de somar no
  recorrente — mas o que já pagou continua contando. A meta é **líquida**: conta
  o que entrou de verdade, não o que "poderia" entrar.

### Preços atuais (base do cálculo)

| Nicho | Setup | Mensal |
|---|---|---|
| personal | R$ 997 | R$ 97 |
| clínicas | R$ 1.997 | R$ 147 |
| advogados | R$ 997 | R$ 79,90 |

Setup médio ≈ **R$ 1.330** · Mensal médio ≈ **R$ 108**.

> A fonte da verdade dos preços é `lib/content/<nicho>.ts` — é o que o cliente vê
> na landing. Esta tabela e a do `PROJECT_CONTEXT.md` seguem o código; se
> divergirem, o código vence.

---

## 3. Dois caminhos pra chegar lá (ilustrativos)

> Números de exemplo pra dar tamanho à meta — **ajuste com os seus reais** de
> conversão de anúncio, ticket e churn.

### Caminho A — corrida de ~12 meses (mais setups)
- ~32 clientes fechados no ano (mix dos 3 nichos)
- Setups: 32 × R$ 1.330 ≈ **R$ 42.600**
- Recorrente acumulado no ano (com ~20% de churn) ≈ **R$ 16.600**
- **Total ≈ R$ 59.200** ✅

### Caminho B — menos clientes, mais tempo (mais recorrente)
- ~22 clientes, mantidos em média ~16–18 meses
- Setups: 22 × R$ 1.330 ≈ **R$ 29.300**
- Recorrente: MRR ~R$ 2.000 × ~16 meses ≈ **R$ 32.000**
- **Total ≈ R$ 61.300** ✅

> **Efeito do corte de preço de ago/26**: com o setup médio caindo de R$ 1.800
> para R$ 1.330 e o mensal de R$ 164 para R$ 108, a meta passou a exigir ~45%
> mais clientes que a versão anterior deste documento (A: 22 → 32 · B: 15 → 22).
> A aposta é que o preço menor converta bem mais barato no Meta Ads e compense
> o volume extra — é isso que a campanha de advogados precisa provar.

O Caminho B dá **menos operação por real faturado** (o recorrente trabalha por
você) — costuma ser o melhor pra quem quer fazer o exit e sair.

---

## 4. Como a meta guia as decisões

- **Priorizar o recorrente.** O setup paga o trabalho; a mensalidade é o que
  aproxima do exit sem esforço novo. Preços já foram calibrados pra baixar a
  barreira de entrada (setup) e proteger a mensalidade — ver
  `PROJECT_CONTEXT.md`.
- **Não inflar custo fixo.** Dev solo, sem libs pagas, sem equipe. Cada custo
  fixo novo empurra a linha de chegada pra frente.
- **Maximizar conversão no Meta Ads.** É o motor de aquisição. Preço e copy da
  landing existem pra transformar clique em conversa no WhatsApp.
- **Churn não é inimigo.** Um cliente que fica 10 meses e sai já cumpriu o papel
  dele na meta. O foco é o **acumulado**, não reter todo mundo pra sempre.

---

## 5. Sinal de "cheguei"

Considerar o exit / desaceleração quando **qualquer um** acontecer:
- Acumulado (setups + mensalidades pagas) cruzar **~R$ 60.000**; ou
- O recorrente (MRR) atingir um patamar que se sustenta sozinho e o próximo
  projeto ficar mais interessante que buscar cliente novo.

A partir daí: parar de investir em aquisição, manter só a base que dá pouco
trabalho (ou repassar/vender a carteira) e migrar o foco.
