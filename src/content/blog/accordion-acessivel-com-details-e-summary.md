---
title: Accordion acessivel com details e summary
description: Quando o padrao nativo resolve melhor, vale preferi-lo antes de adicionar JavaScript e ARIA extras.
pubDate: 2026-04-24
readingTime: 4 min de leitura
category: Componentes
tags:
  - accordion
  - html
  - semantica
---

Nem todo accordion precisa nascer de um componente complexo.

Quando o comportamento esperado e simples, `details` e `summary` costumam entregar uma base melhor do que uma implementacao customizada feita com `div`, clique e ARIA manual.

## Por que comecar pelo nativo

Esse padrao ja oferece:

- controle focavel
- estado expandido e recolhido compreensivel
- menos codigo para manter

Isso nao elimina testes. Ainda e preciso validar rotulo, ordem de foco e clareza do conteudo, mas a base semantica parte de um lugar mais seguro.

## Quando evitar

Evite esse caminho quando:

- o design exige comportamento muito distante do controle nativo
- ha dependencia forte entre paineis
- o conteudo aberto precisa de gestao de foco mais complexa

Nesses casos, um botao nativo com relacionamento claro com o painel pode ser mais apropriado.

## O que revisar no resultado

- o titulo do gatilho explica o conteudo
- a tabulacao continua previsivel
- o conteudo nao esconde informacao critica
- a leitura em leitor de tela continua clara

No guia, esse componente passa a ser o modelo inicial para documentar nao apenas o exemplo, mas tambem o criterio de uso e de teste.
