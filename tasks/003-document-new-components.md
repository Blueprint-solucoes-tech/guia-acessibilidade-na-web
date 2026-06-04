# Task: Documentar exemplos restantes da página de componentes

## Goal

Completar uma primeira leva incremental de exemplos práticos na página `/components`.

## Scope

- Documentar `Avatar`, `Badge` e `Card` em `src/pages/components.astro`.
- Seguir o modelo já usado por `Accordion`, `Button`, `Breadcrumbs`, `Form`, `Heading`, `Link` e `Media`.
- Para cada componente, incluir:
  - descrição curta;
  - boas práticas;
  - exemplo dentro de `ExampleDisclosure`;
  - notas práticas;
  - checklist de acessibilidade quando aplicável.

## Non-goals

- Não alterar layout global da página.
- Não criar novos componentes reutilizáveis nesta task.
- Não implementar `Dark mode toggle` nem `High contrast toggle` nesta task.
- Não refatorar os componentes existentes.

## Files to create

None.

## Files to modify

- `src/pages/components.astro`

## Implementation details

- Remover `avatar`, `badge` e `card` do fluxo de placeholders ao adicioná-los ao conjunto priorizado.
- Reusar classes e padrões já existentes na página.
- Usar HTML semântico antes de ARIA.
- Evitar exemplos que prometam comportamento não implementado.

## Acceptance criteria

- `/components` exibe exemplos reais para `Avatar`, `Badge` e `Card`.
- Os placeholders restantes continuam funcionando para componentes ainda não implementados.
- A hierarquia de headings permanece coerente.
- Os exemplos têm rótulos, textos e contexto suficientes para revisão de acessibilidade.

## Test cases

- `npm run lint:check`
- `npm run build`
- Revisão manual da página `/components`.

## Accessibility checklist

- Headings continuam em ordem lógica.
- Textos de exemplo não dependem só de cor.
- Elementos interativos, se houver, usam controles nativos.
- Não há ARIA desnecessário.
- Conteúdo visual tem texto alternativo ou é claramente decorativo.

## Review checklist

- A task não implementa o roadmap inteiro.
- O padrão visual e textual segue os componentes já existentes.
- A página não promete componentes que ainda não existem.
