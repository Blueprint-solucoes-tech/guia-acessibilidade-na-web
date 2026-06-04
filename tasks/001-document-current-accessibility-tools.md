# Task: Document current accessibility tools

## Goal

Documentar o estado atual das ferramentas de acessibilidade existentes no projeto.

## Scope

- Especificar o verificador de contraste existente.
- Especificar o checklist de revisao a11y existente.
- Registrar responsabilidades, limites e criterios de validacao das ferramentas.
- Manter a documentacao alinhada ao estado real do codigo.

## Non-goals

- Nao implementar novas funcionalidades.
- Nao alterar interface das ferramentas.
- Nao alterar `src/lib/contrast.ts`.
- Nao adicionar novas categorias ao checklist.
- Nao criar promessa de auditoria automatica completa.

## Files to create

- Documento de spec da ferramenta, caso ainda nao exista.

## Files to modify

- Arquivos em `docs/` ou `tasks/`, se necessario.
- Nao modificar arquivos de produto nesta task.

## Implementation details

O verificador de contraste esta em `/ferramentas/contraste` e usa `ContrastChecker`.

A logica central fica em `src/lib/contrast.ts`:

- `normalizeHexColor`
- `hexToRgb`
- `relativeLuminance`
- `calculateContrastRatio`
- `evaluateContrast`
- `formatContrastRatio`

Os testes atuais ficam em `src/lib/contrast.test.ts`.

O checklist de revisao a11y esta em `/ferramentas/checklist-a11y` e usa `A11yChecklist`.

A documentacao deve explicitar que:

- contraste e apenas um criterio de acessibilidade;
- checklist e apoio para revisao manual;
- nenhuma das ferramentas substitui teste real com teclado, leitor de tela e validacao da tarefa.

## Acceptance criteria

- A spec descreve as duas ferramentas existentes.
- A spec cita limites das ferramentas.
- A spec nao promete funcionalidades inexistentes.
- A spec identifica testes existentes para contraste.
- A spec recomenda validacoes manuais aplicaveis.

## Test cases

- Conferir se a documentacao menciona `src/lib/contrast.test.ts`.
- Conferir se a documentacao nao descreve automacao inexistente.
- Se houver mudanca de texto publico no futuro, rodar `npm run build`.

## Accessibility checklist

- Confirmar que a ferramenta de contraste nao e apresentada como garantia completa de acessibilidade.
- Confirmar que o checklist orienta revisao manual de semantica, teclado, foco, formularios, ARIA e contraste.
- Confirmar que limites e responsabilidades estao claros para usuarios e agentes.

## Review checklist

- A task permanece documental.
- O texto reflete o estado real do projeto.
- Nao ha alteracao de produto.
- Nao ha duplicacao desnecessaria do `ROADMAP.md`.
