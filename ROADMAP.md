# ROADMAP

## Resumo

Este documento orienta a evolução do projeto para a era da IA. O objetivo não é competir com conteúdo genérico sobre WCAG, mas consolidar o repositório como uma referência prática para curadoria, exemplos confiáveis, validação de acessibilidade e revisão de código gerado por IA.

Público-alvo deste roadmap:

- mantenedor do projeto
- futuros colaboradores
- Codex e outros agentes que forem implementar o backlog

## Contexto atual

O repositório já possui uma base pública coerente com a proposta de acessibilidade aplicada. A home, o README, as rotas principais e as ferramentas atuais foram reposicionados para comunicar um guia prático, sem depender de promessas amplas sobre cobertura completa de WCAG.

- Existe uma landing page com narrativa institucional e foco em implementação, validação e revisão crítica.
- Existe uma página de componentes com exemplos, snippets de uso e uma primeira referência técnica completa para Accordion em [src/pages/components.astro](/Users/gabrielteixeira/Github/blueprint/guia-acessibilidade-na-web/src/pages/components.astro:1).
- O blog usa Astro Content Collections e já possui artigos reais em `src/content/blog`.
- O verificador de contraste está disponível em `/ferramentas/contraste` e usa lógica testada em `src/lib/contrast.ts`.
- O checklist de revisão a11y está disponível em `/ferramentas/checklist-a11y` como apoio para revisão manual.
- A declaração de acessibilidade existe, mas deve permanecer honesta sobre o que já foi validado e o que ainda depende de auditoria recorrente.

## Problema de posicionamento

Conteúdo introdutório sobre acessibilidade foi comoditizado por IA. Hoje é fácil gerar explicações genéricas sobre WCAG, HTML semântico e ARIA. Isso reduz o valor percebido de qualquer projeto que se limite a repetir teoria.

Se este repositório continuar operando apenas como “guia explicativo”, ele tende a perder relevância. O diferencial precisa estar em algo que a IA ainda entrega mal sem revisão humana consistente:

- curadoria técnica
- exemplos realmente confiáveis
- comparação entre solução correta e incorreta
- critérios claros de validação
- apoio para revisar interfaces produzidas com ajuda de IA

## Nova proposta de valor

O projeto deve evoluir para ser uma referência prática de acessibilidade aplicada, com foco em uso real e revisão crítica.

Direção proposta:

- componentes acessíveis reutilizáveis, com contexto de uso e limites claros
- exemplos corretos vs. incorretos para apoiar aprendizado e revisão
- checklists curtos para revisão manual
- instruções de testes manuais e automatizados
- auditoria de código gerado por IA, com foco em semântica, teclado, foco, feedback e uso adequado de ARIA

O valor do projeto deve estar menos em “explicar acessibilidade” e mais em “mostrar como implementar, validar e corrigir”.

## Lacunas do repositório hoje

As lacunas abaixo são observáveis no estado atual do código e precisam ser tratadas antes de ampliar o escopo do projeto.

- Nem todos os componentes implementados seguem ainda o modelo completo de referência técnica; Accordion funciona como o exemplo mais completo.
- `Dark mode toggle` e `High contrast toggle` aparecem como planejados na referência de componentes e ainda não devem ser tratados como componentes documentados.
- A evidência de validação por componente ainda é parcial: há checklist prático em conteúdo, mas não há automação ou registro de teste manual para cada componente.
- A declaração de acessibilidade precisa evitar linguagem de conformidade plena quando não houver auditoria formal registrada.
- A documentação operacional deve registrar claramente o modelo de referência de componentes e os limites das ferramentas atuais.

## Backlog priorizado

### Prioridade 1

#### Item 1. Reposicionar a narrativa do projeto

- Objetivo: alinhar o discurso do projeto com a proposta prática que ele realmente deve sustentar.
- Status: concluído para o MVP inicial; manter em revisão conforme novas entregas forem publicadas.
- Impacto esperado: reduzir promessa excessiva e deixar claro o diferencial do repositório na era da IA.
- Entregáveis: revisão do README, revisão da home e ajuste da navegação para refletir a proposta real do projeto.
- Dependências: nenhuma.
- Definição de pronto: README, home e textos principais descrevem o projeto como referência prática, sem prometer entregas inexistentes.

#### Item 2. Remover ou ajustar promessas não sustentadas

- Objetivo: eliminar desalinhamento entre documentação e estado atual do código.
- Status: parcialmente concluído; continuar revisando páginas públicas e declaração de acessibilidade antes de cada lançamento.
- Impacto esperado: aumentar a credibilidade do repositório e facilitar futuras contribuições.
- Entregáveis: revisão das menções a blog, checker de contraste, estrutura editorial e funcionalidades ainda não consolidadas.
- Dependências: decisão de posicionamento consolidada no item anterior.
- Definição de pronto: não há promessa principal no README ou nas páginas públicas que não possa ser verificada no repositório.

### Prioridade 2

#### Item 3. Transformar componentes em referência técnica reutilizável

- Objetivo: fazer da página de componentes uma base prática de estudo, adaptação e revisão.
- Status: em andamento; Accordion já serve como modelo completo e os demais componentes seguem uma documentação inicial.
- Impacto esperado: aumentar a utilidade do projeto para desenvolvedores e para agentes que geram código.
- Entregáveis: para cada componente priorizado, adicionar “quando usar”, “quando não usar”, “erros comuns”, “teclado”, “leitor de tela” e “WCAG relacionada”.
- Dependências: narrativa reposicionada e escopo dos componentes prioritários definido.
- Definição de pronto: ao menos um componente completo segue esse formato de documentação prática e pode servir de modelo para os demais.

#### Item 4. Incluir exemplos corretos vs. incorretos

- Objetivo: ensinar revisão crítica, não apenas reprodução de código.
- Status: iniciado com Accordion.
- Impacto esperado: tornar o projeto mais útil para validar interfaces feitas por humanos ou por IA.
- Entregáveis: exemplos comparativos com explicação objetiva do problema, da correção e do impacto para uso real.
- Dependências: estrutura base de documentação dos componentes.
- Definição de pronto: ao menos um componente possui comparação entre implementação inadequada e implementação recomendada.

#### Item 5. Evidenciar critérios de teste por componente

- Objetivo: conectar implementação com validação prática.
- Status: iniciado com checklist de teste no Accordion; ainda falta expandir gradualmente.
- Impacto esperado: reduzir o risco de componentes parecerem acessíveis sem serem de fato testados.
- Entregáveis: checklist de teclado, foco, semântica, leitor de tela e validação automatizada para componentes priorizados.
- Dependências: documentação técnica mínima por componente.
- Definição de pronto: ao menos um componente documentado inclui checklist de teste acionável e replicável.

### Prioridade 3

#### Item 6. Criar um fluxo editorial real

- Objetivo: sair de páginas demonstrativas e consolidar conteúdo real conectado ao código.
- Status: concluído para o MVP inicial; o blog já usa Content Collections e artigos reais.
- Impacto esperado: aumentar profundidade, recorrência de manutenção e valor do projeto como referência.
- Entregáveis: estrutura mínima para artigos reais, com pelo menos um conteúdo publicado e conectado à página de componentes.
- Dependências: narrativa revisada e recorte editorial definido.
- Definição de pronto: existe ao menos um fluxo de conteúdo real além da home, sem uso de dados mockados como entrega principal.

#### Item 7. Consolidar uma ferramenta ou rotina prática de validação

- Objetivo: oferecer um recurso operacional, não apenas conteúdo descritivo.
- Status: concluído para o MVP inicial com verificador de contraste e checklist de revisão a11y.
- Impacto esperado: reforçar o diferencial do projeto como guia de implementação e verificação.
- Entregáveis: checker de contraste funcional ou uma rotina clara de validação prática incorporada ao projeto.
- Dependências: decisão sobre qual recurso agrega mais valor imediato ao posicionamento.
- Definição de pronto: existe pelo menos uma funcionalidade ou rotina verificável para apoiar validação prática de acessibilidade.

#### Item 8. Adicionar conteúdo focado em revisão de código gerado por IA

- Objetivo: tornar o projeto explicitamente relevante no contexto atual de uso de IA no desenvolvimento.
- Status: iniciado com artigo editorial e menções nas ferramentas/checklists.
- Impacto esperado: diferenciar o repositório de guias estáticos e ampliar sua utilidade para times modernos.
- Entregáveis: conteúdo ou seção prática com heurísticas para revisar semântica, navegação por teclado, foco, feedback e ARIA em interfaces produzidas com ajuda de IA.
- Dependências: base editorial mínima e modelo de documentação consolidado.
- Definição de pronto: o projeto contém ao menos um material específico para auditoria de código gerado por IA.

## Critérios de sucesso

O roadmap será considerado bem executado quando os resultados abaixo puderem ser verificados no repositório.

- README e roadmap não prometem nada que o projeto não entregue.
- Existe ao menos um fluxo de conteúdo real além da home.
- Existe ao menos um componente documentado com guia de uso, anti-patterns e checklist de teste.
- Existe ao menos uma ferramenta ou rotina clara para validar acessibilidade na prática.
- O projeto passa a comunicar com clareza por que continua relevante mesmo com a popularização de IA generativa.
