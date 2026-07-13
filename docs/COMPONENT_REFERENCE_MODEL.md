# Component reference model

Este documento define o modelo esperado para documentar componentes acessiveis no projeto.

## Objetivo

A referencia de componentes deve ajudar uma pessoa ou agente de IA a decidir, implementar, adaptar e revisar um componente com criterio pratico.

O foco nao e explicar teoria generica de acessibilidade. O foco e registrar uso adequado, riscos comuns, comportamento esperado e formas de validacao.

## Secoes recomendadas

Cada componente priorizado deve incluir, de forma incremental:

- descricao curta;
- quando usar;
- quando nao usar;
- erros comuns;
- comportamento de teclado;
- impacto em leitor de tela;
- WCAG relacionada;
- exemplo de uso;
- exemplo correto vs. incorreto, quando aplicavel;
- checklist de teste.

Nem todo componente precisa receber todas as secoes na mesma iteracao. Para o MVP, um componente completo pode servir como modelo para os demais.

## Componentes interativos

Componentes interativos exigem cuidado adicional. A documentacao deve cobrir:

- elemento semantico esperado;
- nome acessivel;
- estados relevantes;
- ordem de foco;
- ativacao por teclado;
- foco visivel;
- relacao entre controle e conteudo afetado;
- riscos comuns em codigo gerado por IA.

Prefira HTML nativo antes de ARIA. Use ARIA apenas quando o HTML nativo nao comunicar nome, papel, estado ou relacao de forma suficiente.

## Exemplos corretos vs. incorretos

Comparacoes devem explicar:

- qual e o problema da implementacao inadequada;
- qual comportamento real fica quebrado;
- por que a implementacao recomendada e mais previsivel;
- o impacto para teclado, leitor de tela, foco ou compreensao.

Evite exemplos incorretos que sejam apenas caricaturas visuais. O objetivo e treinar revisao critica de problemas que aparecem em projetos reais e em codigo gerado por IA.

## Checklist de teste

Cada checklist deve ser curto e acionavel. Para componentes interativos, incluir pelo menos:

- navegacao por Tab e Shift + Tab;
- ativacao por Enter e Space, quando aplicavel;
- foco visivel;
- nome acessivel compreensivel;
- estado anunciado corretamente;
- ordem logica de leitura;
- validacao de que a experiencia nao depende apenas de cor.

Quando houver logica reutilizavel em TypeScript, adicionar ou atualizar testes unitarios.

## Estado atual

Na pagina `/components`, Accordion e o modelo mais completo para o MVP. Os demais componentes podem continuar com documentacao inicial desde que nao sejam apresentados como cobertura completa.

`Dark mode toggle` e `High contrast toggle` aparecem como planejados e nao devem ser tratados como componentes documentados ate receberem escopo proprio.
