# Visão da arquitetura e estrutura do projeto

Este documento descreve a organização das pastas principais e onde estão os componentes mais relevantes.

## Estrutura principal

- `src/`
  - `assets/` — imagens, ícones e arquivos estáticos usados pela aplicação.
  - `componets/` — componentes React reutilizáveis (Header, MenuAside, Modal, etc.).
  - `pages/` — páginas agrupadas por área funcional (ex.: `moradores`, `sindico`, `portaria`).
  - `routes/` — configuração de roteamento (ex.: `Router.jsx`).
  - `App.jsx` — ponto de montagem das rotas e layout global.
  - `main.jsx` — bootstrap do React e integrações (Tailwind, providers).

## Principais componentes

- `Header.jsx` — cabeçalho do aplicativo (logo/título, ações rápidas).
- `MenuAside.jsx` — menu lateral com links por área (usa Material UI em algumas partes).
- `Modal.jsx`, `ChildModal.jsx`, `ButtonModal.jsx` — componentes para diálogos e botões.

## Convenções

- Componentes funcionais com hooks.
- Nomes de pastas e arquivos em inglês/português mistos (padrão atual do projeto). Considere padronizar caso deseje consistência (recomendado: `components`, `pages`).
- Tailwind para utilitários CSS; mantenha classes utilitárias legíveis e conte com `prettier-plugin-tailwindcss` para ordenar quando configurado.

## Fluxo de navegação

- `Router.jsx` define rotas por área; cada rota carrega a página correspondente em `pages/`.
- `MenuAside` navega entre as rotas, baseado no primeiro segmento da URL (ex.: `/sindico/apartamentos`).

## Próximos passos arquiteturais (sugestões)

- Padronizar nomes de pastas para inglês.
- Extrair hooks reutilizáveis para chamadas de API e estados comuns.
- Adicionar testes unitários para componentes críticos.
