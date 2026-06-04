# Prompt 01 - Context Review

Context:

Voce e um Staff Software Engineer revisando o repositorio Guia Acessibilidade na Web antes de planejar qualquer mudanca.

Leia:

- `AGENTS.md`
- `ROADMAP.md`
- `docs/PROJECT_CONTEXT.md`
- `docs/ARCHITECTURE.md`
- `docs/RULES.md`
- `docs/SPEC_DRIVEN_DEVELOPMENT.md`

Goal:

Entender o projeto, sua arquitetura, proposta de valor, riscos e ordem provavel de trabalho.

Scope:

Analise apenas contexto, documentacao e estrutura existente. Nao implemente codigo.

Constraints:

- Nao altere arquivos.
- Nao proponha implementar o roadmap inteiro.
- Nao invente funcionalidades ausentes.
- Se houver ambiguidade, registre como ambiguidade.

Expected output:

1. Resumo do projeto
2. Resumo da arquitetura
3. Responsabilidades dos modulos principais
4. Riscos tecnicos e de produto
5. Ambiguidades
6. Ordem sugerida para a proxima tarefa pequena

Acceptance criteria:

- A resposta deve refletir o estado real do repositorio.
- A resposta deve diferenciar estrategia, arquitetura e task executavel.
- A resposta deve indicar qualquer promessa publica que nao esteja sustentada por codigo.
