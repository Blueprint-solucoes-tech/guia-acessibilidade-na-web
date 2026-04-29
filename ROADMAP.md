# ROADMAP

## Resumo

Este documento orienta a evolução do projeto para a era da IA. O objetivo não é competir com conteúdo genérico sobre WCAG, mas consolidar o repositório como uma referência prática para curadoria, exemplos confiáveis, validação de acessibilidade e revisão de código gerado por IA.

Público-alvo deste roadmap:

- mantenedor do projeto
- futuros colaboradores
- Codex e outros agentes que forem implementar o backlog

## Contexto atual

O repositório já possui uma base visível de interface e alguns blocos de documentação prática, mas ainda existe desalinhamento entre o que o projeto promete e o que ele entrega hoje.

- Existe uma landing page com narrativa institucional e seções introdutórias sobre acessibilidade.
- Existe uma página de componentes com exemplos e orientações iniciais em [src/pages/components.astro](/Users/gabrielteixeira/Github/blueprint/guia-acessibilidade-na-web/src/pages/components.astro:1).
- O [README.md](/Users/gabrielteixeira/Github/blueprint/guia-acessibilidade-na-web/README.md:1) promete artigos, verificador de contraste e uma estrutura de conteúdo maior do que a implementada.
- A página de blog em [src/pages/blog.astro](/Users/gabrielteixeira/Github/blueprint/guia-acessibilidade-na-web/src/pages/blog.astro:1) ainda usa conteúdo mockado.
- Há links e menções ao checker de contraste no projeto, mas essa funcionalidade não está consolidada como entrega real e verificável.

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

As lacunas abaixo são observáveis no estado atual do código e precisam ser tratadas antes de ampliar o discurso do projeto.

- O blog ainda não representa um fluxo de conteúdo real; a listagem atual usa posts mockados.
- O discurso sobre checker de contraste aparece no README e na navegação, mas não há uma entrega consolidada que sustente essa promessa.
- Ainda não existe uma conexão forte entre o conteúdo editorial e os componentes práticos.
- Os componentes exibem boas práticas, mas não há evidência consistente de testes de acessibilidade por componente.
- O README comunica uma abrangência maior do que a implementação atual sustenta.

## Backlog priorizado

### Prioridade 1

#### Item 1. Reposicionar a narrativa do projeto

- Objetivo: alinhar o discurso do projeto com a proposta prática que ele realmente deve sustentar.
- Impacto esperado: reduzir promessa excessiva e deixar claro o diferencial do repositório na era da IA.
- Entregáveis: revisão do README, revisão da home e ajuste da navegação para refletir a proposta real do projeto.
- Dependências: nenhuma.
- Definição de pronto: README, home e textos principais descrevem o projeto como referência prática, sem prometer entregas inexistentes.

#### Item 2. Remover ou ajustar promessas não sustentadas

- Objetivo: eliminar desalinhamento entre documentação e estado atual do código.
- Impacto esperado: aumentar a credibilidade do repositório e facilitar futuras contribuições.
- Entregáveis: revisão das menções a blog, checker de contraste, estrutura editorial e funcionalidades ainda não consolidadas.
- Dependências: decisão de posicionamento consolidada no item anterior.
- Definição de pronto: não há promessa principal no README ou nas páginas públicas que não possa ser verificada no repositório.

### Prioridade 2

#### Item 3. Transformar componentes em referência técnica reutilizável

- Objetivo: fazer da página de componentes uma base prática de estudo, adaptação e revisão.
- Impacto esperado: aumentar a utilidade do projeto para desenvolvedores e para agentes que geram código.
- Entregáveis: para cada componente priorizado, adicionar “quando usar”, “quando não usar”, “erros comuns”, “teclado”, “leitor de tela” e “WCAG relacionada”.
- Dependências: narrativa reposicionada e escopo dos componentes prioritários definido.
- Definição de pronto: ao menos um componente completo segue esse formato de documentação prática e pode servir de modelo para os demais.

#### Item 4. Incluir exemplos corretos vs. incorretos

- Objetivo: ensinar revisão crítica, não apenas reprodução de código.
- Impacto esperado: tornar o projeto mais útil para validar interfaces feitas por humanos ou por IA.
- Entregáveis: exemplos comparativos com explicação objetiva do problema, da correção e do impacto para uso real.
- Dependências: estrutura base de documentação dos componentes.
- Definição de pronto: ao menos um componente possui comparação entre implementação inadequada e implementação recomendada.

#### Item 5. Evidenciar critérios de teste por componente

- Objetivo: conectar implementação com validação prática.
- Impacto esperado: reduzir o risco de componentes parecerem acessíveis sem serem de fato testados.
- Entregáveis: checklist de teclado, foco, semântica, leitor de tela e validação automatizada para componentes priorizados.
- Dependências: documentação técnica mínima por componente.
- Definição de pronto: ao menos um componente documentado inclui checklist de teste acionável e replicável.

### Prioridade 3

#### Item 6. Criar um fluxo editorial real

- Objetivo: sair de páginas demonstrativas e consolidar conteúdo real conectado ao código.
- Impacto esperado: aumentar profundidade, recorrência de manutenção e valor do projeto como referência.
- Entregáveis: estrutura mínima para artigos reais, com pelo menos um conteúdo publicado e conectado à página de componentes.
- Dependências: narrativa revisada e recorte editorial definido.
- Definição de pronto: existe ao menos um fluxo de conteúdo real além da home, sem uso de dados mockados como entrega principal.

#### Item 7. Consolidar uma ferramenta ou rotina prática de validação

- Objetivo: oferecer um recurso operacional, não apenas conteúdo descritivo.
- Impacto esperado: reforçar o diferencial do projeto como guia de implementação e verificação.
- Entregáveis: checker de contraste funcional ou uma rotina clara de validação prática incorporada ao projeto.
- Dependências: decisão sobre qual recurso agrega mais valor imediato ao posicionamento.
- Definição de pronto: existe pelo menos uma funcionalidade ou rotina verificável para apoiar validação prática de acessibilidade.

#### Item 8. Adicionar conteúdo focado em revisão de código gerado por IA

- Objetivo: tornar o projeto explicitamente relevante no contexto atual de uso de IA no desenvolvimento.
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
