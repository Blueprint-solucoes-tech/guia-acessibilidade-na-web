# RULES

## Regras para IA e colaboradores

Antes de codificar, leia:

- `AGENTS.md`
- `ROADMAP.md`
- `docs/PROJECT_CONTEXT.md`
- `docs/ARCHITECTURE.md`
- `docs/RULES.md`
- task atual em `tasks/`, se existir

## Regras de produto

- O projeto deve ser uma referencia pratica de acessibilidade aplicada.
- Nao transformar o site em um resumo generico da WCAG.
- Nao prometer funcionalidades que ainda nao existem.
- Toda nova pagina, ferramenta ou componente deve ter uma razao clara dentro do roadmap.
- Conteudo deve ajudar a implementar, validar ou revisar algo concreto.

## Regras de acessibilidade

- Use HTML semantico antes de ARIA.
- Use ARIA apenas quando houver necessidade real.
- Controles interativos devem ser acessiveis por teclado.
- Foco visivel e ordem de foco previsivel sao obrigatorios.
- Textos de links e botoes devem comunicar a acao ou destino.
- Imagens informativas precisam de texto alternativo adequado.
- Imagens decorativas devem ser ocultadas corretamente de tecnologias assistivas.
- Validar contraste nao substitui validar semantica, foco e teclado.
- Checklists e ferramentas devem explicitar seus limites.

## Regras de arquitetura

- Prefira padroes existentes no repositorio.
- Use `src/components/core` para componentes estruturais reutilizaveis.
- Use `src/components/ui` para composicoes de interface e ferramentas.
- Coloque logica pura e testavel em `src/lib`.
- Use Astro Content Collections para conteudo editorial.
- Use alias `~/*` para imports a partir de `src`.
- Evite acoplamento entre conteudo, ferramenta e layout quando uma separacao simples for suficiente.

## Regras de implementacao

- Nao implemente escopo futuro sem task.
- Nao faca refatoracoes amplas sem necessidade direta.
- Nao misture mudanca de comportamento com reorganizacao estetica sem explicitar na spec.
- Ao alterar logica, adicionar ou atualizar testes unitarios.
- Ao alterar navegacao, componentes interativos ou formularios, revisar teclado e foco.
- Ao alterar paginas publicas, validar texto, hierarquia de headings e landmarks.

## Regras de documentacao

- Specs devem ser pequenas e implementaveis em uma iteracao.
- Documentos devem refletir o estado real do projeto.
- Quando houver incerteza, registrar como risco ou ambiguidade em vez de inventar requisito.
- `ROADMAP.md` define direcao estrategica.
- `docs/` define contexto operacional.
- `tasks/` define unidades de trabalho.
- `prompts/` define comandos reutilizaveis para agentes.

## Validacoes recomendadas

Use conforme o tipo de mudanca:

```bash
npm run lint:check
npm run test
npm run build
```

Para mudancas visuais ou interativas, tambem validar manualmente:

- navegacao por teclado;
- estado de foco;
- leitura e ordem de conteudo;
- labels e nomes acessiveis;
- contraste;
- responsividade basica.
