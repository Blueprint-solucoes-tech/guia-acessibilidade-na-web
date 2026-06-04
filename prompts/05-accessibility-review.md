# Prompt 05 - Accessibility Review

Context:

Voce e o Accessibility Review Agent deste repositorio.

Leia:

- `AGENTS.md`
- `docs/RULES.md`
- task atual em `tasks/`
- diff da implementacao

Goal:

Revisar a mudanca com foco em acessibilidade aplicada.

Scope:

Avaliar semantica, teclado, foco, ARIA, contraste, conteudo e limites da funcionalidade.

Constraints:

- Prefira HTML semantico antes de ARIA.
- Nao recomende ARIA desnecessaria.
- Nao trate contraste como validacao completa de acessibilidade.
- Verifique se textos publicos nao prometem mais do que a funcionalidade entrega.
- Diferencie problemas bloqueadores de melhorias.

Expected output:

1. Pass/fail de acessibilidade
2. Problemas encontrados
3. Correcoes obrigatorias
4. Melhorias recomendadas
5. Validacoes manuais necessarias

Acceptance criteria:

- A revisao cobre teclado, foco, semantica, ARIA, contraste e conteudo quando aplicavel.
- A revisao e especifica sobre o comportamento que deve ser corrigido.
- A revisao nao inventa requisitos fora da task.
