# ARCHITECTURE

## Stack

O projeto usa:

- Astro para paginas, layouts e componentes.
- TypeScript para logica reutilizavel.
- SCSS e CSS global para estilos.
- Astro Content Collections para o blog.
- Vitest para testes unitarios.
- Cypress para testes end-to-end.
- ESLint e Prettier para qualidade e formatacao.
- `astro-icon` com icones Lucide.

## Estrutura principal

```text
src/
  assets/
  components/
    core/
    ui/
  content/
    blog/
  layouts/
  lib/
  pages/
```

## Responsabilidades

### `src/pages`

Define as rotas publicas do site.

Rotas principais:

- `/`: pagina inicial.
- `/components`: referencia de componentes acessiveis.
- `/blog`: listagem de artigos.
- `/blog/[slug]`: pagina de artigo.
- `/ferramentas/contraste`: verificador de contraste.
- `/ferramentas/checklist-a11y`: checklist de revisao.
- `/accessibility-statement`: declaracao de acessibilidade.

### `src/components/core`

Componentes estruturais e reutilizaveis de baixo nivel.

Exemplos:

- `Header`
- `Footer`
- `Navigation`
- `SkipLink`
- `Link`
- `Heading`
- `Breadcrumbs`
- `Accordion`
- `DarkMode`
- `SiteMeta`

Use `core` para blocos fundamentais que sustentam navegacao, semantica, layout base e acessibilidade recorrente.

### `src/components/ui`

Componentes de interface mais proximos de secoes, exemplos ou ferramentas.

Exemplos:

- `Hero`
- `Feature`
- `PageHeader`
- `ExampleDisclosure`
- `ContrastChecker`
- `A11yChecklist`
- `Toggle`

Use `ui` para composicoes mais especificas da experiencia do site.

### `src/layouts`

Layouts compartilhados. `DefaultLayout.astro` injeta metadados, header, footer, CSS global e o conteudo principal em `main#main-content`.

### `src/content/blog`

Artigos editoriais em Markdown ou MDX. O schema esta em `src/content.config.ts` e exige:

- `title`
- `description`
- `pubDate`
- `readingTime`
- `category`
- `tags`

### `src/lib`

Logica reutilizavel e testavel fora de componentes.

Hoje contem a logica de contraste:

- normalizacao de cores hexadecimais;
- conversao hex para RGB;
- luminancia relativa;
- calculo de taxa de contraste;
- avaliacao AA/AAA;
- formatacao do resultado.

## Imports

O projeto usa alias `~/*` apontando para `src/*`.

Exemplo:

```ts
import DefaultLayout from '~/layouts/DefaultLayout.astro'
```

Prefira esse alias em vez de caminhos relativos longos.

## Ferramentas atuais

### Verificador de contraste

Rota: `/ferramentas/contraste`

Responsabilidades:

- receber cor de texto e cor de fundo;
- calcular taxa de contraste;
- exibir status para texto normal e texto grande;
- comunicar resultado com criterios WCAG AA e AAA.

A logica central fica em `src/lib/contrast.ts` e possui testes em `src/lib/contrast.test.ts`.

### Checklist de revisao a11y

Rota: `/ferramentas/checklist-a11y`

Responsabilidades:

- apoiar revisao manual;
- organizar verificacoes de semantica, teclado, foco, formularios, ARIA e contraste;
- deixar claro que a ferramenta nao substitui teste real com teclado, leitor de tela e validacao da tarefa.

## Principios arquiteturais

- Paginas orquestram conteudo e componentes.
- Componentes `core` devem ser reutilizaveis e semanticamente confiaveis.
- Componentes `ui` podem ser mais especificos, mas nao devem quebrar padroes de acessibilidade.
- Logica pura deve ficar em `src/lib` e receber testes unitarios.
- Conteudo editorial deve viver em `src/content/blog`.
- Funcionalidades novas devem nascer de uma task em `tasks/` quando tiverem impacto relevante.
