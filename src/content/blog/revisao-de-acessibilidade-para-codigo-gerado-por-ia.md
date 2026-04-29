---
title: Revisao de acessibilidade para codigo gerado por IA
description: Checklist pratico para revisar semantica, teclado, foco, feedback e ARIA em interfaces geradas com ajuda de IA.
pubDate: 2026-04-29
readingTime: 6 min de leitura
category: Revisao
tags:
  - ia
  - acessibilidade
  - auditoria
---

Gerar interface com IA economiza tempo. Publicar sem revisar custa caro.

O problema mais comum nao e a aparencia. O markup costuma parecer correto em uma leitura rapida, mas falha quando a interface precisa responder bem a teclado, foco, leitor de tela e mensagens de erro.

## O que revisar primeiro

Comece por cinco perguntas:

1. O elemento nativo escolhido combina com a acao?
2. O foco chega onde deveria chegar?
3. A interface responde bem a teclado sem truques?
4. O estado atual fica claro para tecnologia assistiva?
5. Existe ARIA sobrando para compensar HTML ruim?

## Semantica

Trocar `<button>` por `<div>` clicavel continua sendo um dos erros mais frequentes em codigo gerado por IA.

Revise:

- acao usando botao
- navegacao usando link
- grupos relacionados usando `fieldset` e `legend` quando fizer sentido
- headings seguindo ordem estrutural

Se voce precisar adicionar muito ARIA para um controle simples funcionar, provavelmente o problema esta na base semantica.

## Navegacao por teclado

Uma interface pode parecer boa no mouse e ainda assim falhar na tarefa real.

Valide:

- `Tab` percorre os controles em ordem previsivel
- `Shift + Tab` retorna sem prender foco
- `Enter` e `Space` funcionam nos gatilhos esperados
- menus, accordions e dialogs nao criam armadilhas

## Foco visivel

IA costuma remover contorno padrao ou aplicar estilos que deixam o foco invisivel.

Revise:

- foco aparece em contraste suficiente
- foco nao depende so de cor sutil
- o elemento focado continua legivel em temas claros e escuros

## Feedback e estados

Formularios e componentes interativos precisam comunicar o que aconteceu.

Procure por:

- mensagens de erro associadas com `aria-describedby` quando necessario
- estados expandidos e recolhidos anunciados corretamente
- texto de botao que descreve a acao
- placeholders usados apenas como apoio, nunca como rotulo principal

## Uso indevido de ARIA

ARIA nao corrige uma estrutura ruim. Na pratica, ele costuma mascarar problemas que deveriam ser resolvidos com HTML melhor.

Sinais de alerta:

- `role="button"` em elemento que poderia ser um botao
- `aria-label` substituindo texto visivel sem necessidade
- `aria-hidden="true"` aplicado perto de conteudo relevante
- combinacoes de `aria-controls`, `aria-expanded` e ids sem comportamento consistente

## Como usar este checklist no projeto

Antes de reaproveitar um snippet gerado por IA:

1. valide o elemento nativo
2. navegue so com teclado
3. force estados de erro e expansao
4. confira o rotulo e o estado em leitor de tela
5. simplifique ARIA onde o HTML nativo resolver melhor

Esse tipo de revisao precisa ser parte do fluxo normal de front-end, nao uma etapa opcional no fim.
