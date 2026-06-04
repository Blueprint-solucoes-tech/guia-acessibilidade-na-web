# Task: Document component reference model

## Goal

Definir o modelo esperado para documentar componentes acessiveis no projeto.

## Scope

- Especificar o formato de referencia tecnica para componentes.
- Registrar secoes obrigatorias para componentes priorizados.
- Conectar o modelo a revisao de codigo gerado por IA.
- Manter o modelo coerente com a pagina `/components`.

## Non-goals

- Nao documentar todos os componentes nesta task.
- Nao criar novos componentes.
- Nao alterar layout da pagina de componentes.
- Nao criar testes automatizados de todos os componentes.

## Files to create

- Documento de orientacao em `docs/`, caso ainda nao exista.

## Files to modify

- Arquivos documentais em `docs/` ou `tasks/`, se necessario.
- Nao modificar componentes nesta task.

## Implementation details

Cada componente priorizado deve ser documentado com:

- quando usar;
- quando nao usar;
- erros comuns;
- teclado;
- leitor de tela;
- WCAG relacionada;
- exemplo correto vs. incorreto, quando aplicavel;
- checklist de teste.

O modelo deve priorizar utilidade pratica. A documentacao deve ajudar uma pessoa ou agente a revisar se o componente e adequado para uso real.

Para componentes interativos, a documentacao deve cobrir:

- elemento semantico esperado;
- comportamento de teclado;
- estado de foco;
- nome acessivel;
- estados relevantes;
- riscos comuns em codigo gerado por IA.

## Acceptance criteria

- O modelo define secoes obrigatorias.
- O modelo diferencia orientacao pratica de teoria generica.
- O modelo inclui revisao de codigo gerado por IA.
- O modelo nao exige documentar todos os componentes de uma vez.
- O modelo pode ser aplicado incrementalmente.

## Test cases

- Validar se um componente como Accordion consegue ser descrito pelo modelo.
- Validar se o modelo cobre teclado, leitor de tela e WCAG relacionada.
- Validar se o modelo deixa claro quando nao usar o componente.

## Accessibility checklist

- O modelo incentiva HTML semantico antes de ARIA.
- O modelo exige criterios de teclado e foco para componentes interativos.
- O modelo exige clareza sobre riscos e limites.
- O modelo evita tratar visual ou layout como sinonimo de acessibilidade.

## Review checklist

- A task permanece documental.
- O modelo e pequeno o suficiente para uso recorrente.
- O modelo esta alinhado ao `ROADMAP.md`.
- O modelo nao cria obrigacoes impossiveis para uma unica iteracao.
