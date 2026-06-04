# AI Development Spec - Guia Acessibilidade na Web

## 1. Visao geral

Guia Acessibilidade na Web e um projeto Astro para acessibilidade aplicada. O processo de desenvolvimento deve usar IA como assistente de engenharia, nao como gerador irrestrito de codigo.

O objetivo e criar um fluxo profissional onde a IA:

- entende contexto antes de agir;
- planeja antes de implementar;
- trabalha em escopos pequenos;
- valida acessibilidade como criterio central;
- revisa codigo contra specs e regras do repositorio.

## 2. Objetivo do produto

Evoluir o projeto como referencia pratica para:

- estudar componentes acessiveis;
- comparar implementacoes corretas e incorretas;
- validar interfaces com checklists simples;
- revisar semantica, teclado, foco, ARIA e contraste;
- auditar codigo gerado com ajuda de IA antes de publicar.

## 3. Filosofia de desenvolvimento

O projeto deve seguir Spec-Driven Development.

A IA nao deve gerar codigo antes de ler e entender:

- `AGENTS.md`
- `ROADMAP.md`
- `docs/PROJECT_CONTEXT.md`
- `docs/ARCHITECTURE.md`
- `docs/RULES.md`
- `docs/SPEC_DRIVEN_DEVELOPMENT.md`
- task atual em `tasks/`, quando existir

Cada etapa de implementacao deve incluir:

- objetivo;
- escopo;
- arquivos afetados;
- criterios de aceite;
- testes;
- checklist de revisao.

## Phase 1 - LLM Fundamentals and Prompt Engineering

### Objective

Usar LLMs de forma controlada, previsivel e documentada.

A IA deve ser tratada como assistente de engenharia. Ela deve receber contexto suficiente, restricoes claras e saida esperada.

### What to study

- arquitetura basica de LLMs;
- tokens;
- limites de contexto;
- diferencas entre modelos;
- prompt engineering;
- zero-shot;
- few-shot;
- structured prompting;
- evaluation harnesses.

### Project application

Criar e manter prompts reutilizaveis em `prompts/`.

```text
prompts/
  01-context-review.md
  02-next-task-planning.md
  03-implementation.md
  04-qa-review.md
  05-accessibility-review.md
```

### Required prompt pattern

Todo prompt deve conter:

```text
Context:
Goal:
Scope:
Constraints:
Expected output:
Acceptance criteria:
```

## Phase 2 - Behavior Control: Context, Rules and Tools

### Objective

Fazer a IA operar como agente especializado neste repositorio.

### What to study

- system prompts;
- rules;
- tool use;
- function calling;
- structured outputs;
- context injection;
- RAG basico.

### Project application

`AGENTS.md` e `docs/RULES.md` definem comportamento obrigatorio.

A IA deve:

- ler documentacao antes de codificar;
- preservar acessibilidade como criterio central;
- seguir arquitetura Astro existente;
- manter logica testavel em `src/lib` quando aplicavel;
- escrever testes quando alterar logica;
- evitar overengineering;
- evitar escopo futuro sem spec;
- explicar decisoes arquiteturais relevantes.

A IA nao deve:

- gerar grandes mudancas nao relacionadas;
- inventar requisitos nao presentes nos documentos;
- pular testes quando alterar logica;
- trocar HTML semantico por ARIA desnecessaria;
- criar promessas publicas sem funcionalidade real;
- implementar roadmap inteiro em uma unica iteracao.

## Phase 3 - Planning, MCP and Spec-Driven Development

### Objective

Usar IA principalmente para planejar, desenhar e decompor trabalho antes de codificar.

### What to study

- Model Context Protocol;
- agentes de codigo;
- agentes de planejamento;
- Spec-Driven Development;
- specs tecnicas;
- decomposicao de tarefas.

### Project application

Antes de uma mudanca relevante, criar ou atualizar uma task em `tasks/`.

Exemplos:

```text
tasks/
  001-document-current-accessibility-tools.md
  002-document-component-reference-model.md
```

Cada task deve ser pequena o suficiente para uma iteracao segura.

## Phase 4 - Execution Agents and Autonomous Loops

### Objective

Usar agentes para implementar, testar, revisar e corrigir tarefas de forma iterativa.

### What to study

- implementation agents;
- QA agents;
- review agents;
- ReAct pattern;
- autonomous loops;
- compile-test-fix cycles.

### Project agent roles

1. Planning Agent
2. Implementation Agent
3. QA Agent
4. Accessibility Review Agent
5. Refactor Agent

### Implementation loop

```text
Task Spec
  -> Implementation Agent
  -> Run relevant checks
  -> If failure: return error to agent
  -> Fix
  -> Run checks again
  -> QA Agent
  -> Accessibility Review Agent
  -> Accept when criteria pass
```

## Agent roles

### Planning Agent

Responsavel por ler contexto, identificar proxima tarefa e criar uma spec pequena.

Nao deve escrever codigo.

### Implementation Agent

Responsavel por implementar apenas a task atual.

Nao deve implementar itens futuros do roadmap.

### QA Agent

Responsavel por revisar corretude, cobertura de testes, aderencia a arquitetura e riscos.

### Accessibility Review Agent

Responsavel por revisar semantica, teclado, foco, ARIA, contraste e clareza de conteudo.

### Refactor Agent

Responsavel por simplificar codigo existente apenas quando a refatoracao estiver prevista na task.

## Acceptance criteria for AI workflow

O fluxo sera considerado adequado quando:

- toda tarefa relevante for documentada antes da implementacao;
- implementacoes com logica tiverem testes;
- a IA nao gerar codigo nao relacionado;
- a arquitetura permanecer clara;
- acessibilidade for validada como criterio de aceite;
- documentos e interface publica nao prometerem funcionalidades inexistentes;
- tarefas forem pequenas e revisaveis;
- prompts produzirem saidas estruturadas.
