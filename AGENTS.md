# AGENTS.md

Este arquivo define as instrucoes obrigatorias para agentes de IA e colaboradores que forem planejar, implementar ou revisar mudancas neste repositorio.

## Prioridade de leitura

Antes de codificar, leia nesta ordem:

1. `AGENTS.md`
2. `ROADMAP.md`
3. `docs/PROJECT_CONTEXT.md`
4. `docs/ARCHITECTURE.md`
5. `docs/RULES.md`
6. task atual em `tasks/`, quando existir

## Regras obrigatorias

- Trabalhe de forma incremental.
- Nao implemente o roadmap inteiro de uma vez.
- Nao gere codigo antes de entender contexto, arquitetura, regras e task atual.
- Preserve acessibilidade como criterio central de produto.
- Nao prometa funcionalidades que nao existem no repositorio.
- Nao crie funcionalidades fora da spec aprovada.
- Inclua testes quando alterar logica, transformacao de dados ou comportamento interativo.
- Valide semantica, teclado, foco, contraste, ARIA e conteudo antes de considerar a tarefa pronta.
- Prefira componentes e padroes ja existentes no projeto.
- Evite refatoracoes amplas sem necessidade direta para a task.

## Fluxo esperado

1. Ler contexto e task.
2. Identificar ambiguidades.
3. Planejar uma mudanca pequena.
4. Implementar apenas o escopo definido.
5. Rodar validacoes relevantes.
6. Revisar acessibilidade e aderencia a arquitetura.
7. Reportar arquivos alterados, testes executados e limitacoes conhecidas.

## Comandos uteis

```bash
npm run lint:check
npm run test
npm run build
```
