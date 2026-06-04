# SPEC_DRIVEN_DEVELOPMENT

## Objetivo

Spec-Driven Development neste repositorio significa planejar uma mudanca antes de codificar, registrando objetivo, escopo, limites, criterios de aceite, testes e checklist de acessibilidade.

O objetivo nao e burocracia. O objetivo e evitar que humanos ou IA implementem mudancas grandes, vagas ou desalinhadas com a proposta do projeto.

## Quando criar uma task

Crie uma task em `tasks/` quando a mudanca:

- adicionar uma nova funcionalidade;
- alterar comportamento de ferramenta existente;
- criar ou modificar componente acessivel relevante;
- alterar arquitetura, navegacao ou fluxo editorial;
- afetar criterios de acessibilidade;
- exigir testes novos ou atualizados.

Mudancas pequenas de texto, typo ou ajustes isolados podem ser feitas sem task, desde que nao mudem comportamento nem promessa do produto.

## Fluxo

1. Ler `AGENTS.md`, `ROADMAP.md` e `docs/`.
2. Identificar o requisito.
3. Criar ou atualizar uma task em `tasks/`.
4. Revisar escopo e nao objetivos.
5. Implementar apenas a task.
6. Rodar validacoes relevantes.
7. Fazer revisao de QA e acessibilidade.
8. Registrar limitacoes conhecidas.

## Template obrigatorio

Use `tasks/template.md`.

Cada task deve conter:

- Goal;
- Scope;
- Non-goals;
- Files to create;
- Files to modify;
- Implementation details;
- Acceptance criteria;
- Test cases;
- Accessibility checklist;
- Review checklist.

## Caracteristicas de uma boa task

- Pequena o suficiente para uma iteracao.
- Clara sobre o que nao sera feito.
- Conectada ao roadmap ou a uma necessidade concreta.
- Testavel.
- Revisavel sem conhecer conversas externas.
- Especifica sobre acessibilidade quando houver interface, conteudo ou comportamento.

## Regras para agentes

- Planning Agent cria ou ajusta task, mas nao codifica.
- Implementation Agent implementa apenas a task atual.
- QA Agent revisa contra a task.
- Accessibility Review Agent revisa semantica, teclado, foco, ARIA, contraste e conteudo.
- Nenhum agente deve usar o roadmap como permissao para implementar tudo.

## Criterios minimos antes de implementar

Antes de codificar, a task deve responder:

- Qual problema sera resolvido?
- Qual e o escopo exato?
- O que esta fora de escopo?
- Quais arquivos devem ser criados ou alterados?
- Como a mudanca sera validada?
- Quais criterios de acessibilidade se aplicam?

Se essas respostas nao estiverem claras, planeje mais antes de implementar.
