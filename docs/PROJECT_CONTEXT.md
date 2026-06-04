# PROJECT_CONTEXT

## Visao geral

Guia Acessibilidade na Web e um projeto em Astro voltado para acessibilidade aplicada. O objetivo nao e ser um resumo generico da WCAG, mas uma referencia pratica para implementar, validar e revisar interfaces web com criterios reais.

O projeto deve ajudar humanos e agentes de IA a produzir interfaces mais confiaveis, com atencao a semantica, teclado, foco, contraste, conteudo e uso adequado de ARIA.

## Proposta de valor

O diferencial do projeto esta em:

- componentes acessiveis com contexto de uso;
- exemplos corretos vs. incorretos;
- checklists curtos e acionaveis;
- ferramentas simples de validacao;
- conteudo editorial conectado ao codigo;
- revisao critica de interfaces geradas com ajuda de IA.

O projeto deve mostrar como implementar, validar e corrigir, nao apenas explicar conceitos de acessibilidade.

## Publico-alvo

- Desenvolvedores que precisam implementar interfaces acessiveis.
- Pessoas revisando componentes ou paginas geradas por IA.
- Mantenedores do repositorio.
- Colaboradores que vao criar conteudo, componentes ou ferramentas.
- Agentes de IA que precisam de contexto antes de planejar ou codificar.

## O que existe hoje

- Home com posicionamento do projeto.
- Pagina de componentes acessiveis.
- Blog baseado em Astro Content Collections.
- Artigos em Markdown em `src/content/blog`.
- Ferramenta de verificacao de contraste.
- Checklist de revisao a11y.
- Declaracao de acessibilidade do proprio site.
- Logica testada para calculo de contraste em `src/lib/contrast.ts`.

## O que o projeto nao tenta ser

- Uma copia resumida da WCAG.
- Uma colecao de snippets sem contexto.
- Uma vitrine de promessas nao implementadas.
- Um substituto para testes manuais com teclado e leitor de tela.
- Uma ferramenta automatica que garante acessibilidade completa sozinha.

## Direcao estrategica

O `ROADMAP.md` e a fonte estrategica do projeto. Ele orienta a evolucao para uma referencia pratica com componentes confiaveis, validacao real e revisao de codigo gerado por IA.

Esta pasta `docs/` e a camada operacional: explica arquitetura, regras, fluxo de desenvolvimento e como transformar ideias em specs pequenas.
