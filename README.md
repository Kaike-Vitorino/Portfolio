# Portfolio de Kaike Vitorino

Portfolio profissional de **Kaike Vitorino de Oliveira**, focado em backend, sistemas corporativos e IA aplicada.

## Stack

- React 18 (Create React App)
- CSS Modules
- Dados centralizados em `src/data/portfolioData.js`
- Script de build/serve via `react-scripts`

## Estrutura

- `src/App.js` — composição da página one-page.
- `src/data/portfolioData.js` — conteúdo do portfólio (perfil, experiência, skills, projetos, educação e certificações).
- `src/components/layout` — barra de navegação e estrutura de layout.
- `src/components/sections` — seções principais do conteúdo.
- `src/components/ui` — componentes de UI reutilizáveis (ex.: `RevealSection`).
- `src/styles/globals.css` — sistema visual global.
- `public/` — metadados, favicon e assets públicos.

## Desenvolvimento local

```bash
npm install
npm start
```

A aplicação abre em `http://localhost:3000`.

## Build de produção

```bash
npm run build
```

## Deploy (GitHub Pages)

```bash
npm run deploy
```

## Padrão adotado

- Visual premium dark-tech para foco em recrutadores.
- Navegação por âncoras com seções:
  - Hero
  - Sobre
  - Experiência
  - Competências
  - Projetos em destaque
  - Certificações / Formação
  - Contato
- Animações de entrada com `IntersectionObserver` e `prefers-reduced-motion` para acessibilidade.
- Conteúdo técnico e textos revisados para posicionamento de backend, observabilidade e IA aplicada.
