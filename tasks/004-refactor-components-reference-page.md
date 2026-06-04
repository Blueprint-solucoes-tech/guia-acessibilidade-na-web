# Task: Refatorar pagina de componentes e mostrar codigo dos exemplos

## Goal

Organizar incrementalmente a arquitetura da pagina `/components` e exibir codigo de exemplo junto dos previews existentes.

## Scope

- Criar uma pasta de referencia de componentes em `src/components/ui/ComponentReference/`.
- Extrair as secoes implementadas da pagina para componentes Astro proprios.
- Criar metadados colocalizados para alimentar a ordem e o indice da pagina.
- Atualizar `ExampleDisclosure` para aceitar e renderizar um bloco opcional de codigo.
- Mostrar snippets de uso dos exemplos dentro dos disclosures existentes.
- Manter a rota `/components` como orquestradora de layout, breadcrumbs, secoes, placeholders e TOC.

## Non-goals

- Nao criar content collection para componentes.
- Nao criar botao de copiar codigo.
- Nao adicionar dependencia de syntax highlighting.
- Nao implementar `Dark mode toggle` nem `High contrast toggle`.
- Nao alterar componentes `core` alem do uso existente.
- Nao mudar comportamento visual geral da pagina, exceto o novo bloco de codigo dentro dos exemplos.

## Files to create

- `src/components/ui/ComponentReference/componentSections.ts`
- Componentes de secao em `src/components/ui/ComponentReference/`

## Files to modify

- `src/pages/components.astro`
- `src/components/ui/ExampleDisclosure.astro`

## Implementation details

- Extrair as secoes implementadas para `AccordionSection`, `AvatarSection`, `BadgeSection`, `ButtonSection`, `CardSection`, `BreadcrumbsSection`, `FormSection`, `HeadingSection`, `LinkSection` e `MediaSection`.
- Usar `componentSections.ts` para registrar `id`, `label` e `status`.
- Substituir `prioritizedSections` por `status === 'implemented'`.
- Renderizar placeholders apenas para secoes com `status === 'planned'`.
- Adicionar props opcionais em `ExampleDisclosure`: `code?: string` e `codeLabel?: string`.
- Renderizar `<pre><code>{code}</code></pre>` depois da previa e antes das notas.
- Manter snippets manualmente proximos ao preview da secao.

## Acceptance criteria

- `/components` continua exibindo todas as secoes implementadas atuais.
- `Dark mode toggle` e `High contrast toggle` continuam como placeholders.
- Cada disclosure com exemplo passa a mostrar preview, codigo e notas quando houver notas.
- A pagina usa metadados colocalizados para montar o TOC.
- `src/pages/components.astro` fica reduzida a orquestracao da rota.

## Test cases

- `npm run lint:check`
- `npm run build`
- Revisao manual de `/components`.

## Accessibility checklist

- Os blocos de codigo usam contraste adequado em modo claro e escuro.
- Blocos com overflow horizontal podem receber foco visivel.
- `details` e `summary` continuam acessiveis por teclado.
- A hierarquia de headings permanece coerente.
- Os placeholders nao prometem componentes ainda nao implementados.

## Review checklist

- A refatoracao nao muda o escopo dos componentes documentados.
- Os snippets representam codigo de uso, nao HTML renderizado final.
- A task nao adiciona dependencias novas.
- O comportamento dos exemplos continua compreensivel sem depender apenas de cor.
