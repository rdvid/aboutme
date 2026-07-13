---
title: Bem-vindo ao novo site
description: Uma configuração simples em Astro para um site pessoal e blog no GitHub Pages.
pubDate: 2026-07-13
tags: [astro, meta]
lang: br
---

Este site agora é um Astro estático direto: poucas páginas, posts em Markdown e um único deploy no GitHub Pages.

## O que mudou

- Mantivemos roteamento bilíngue em inglês e português brasileiro
- Substituímos modais sociais e sidebars por links simples
- Adicionamos um blog em Markdown com content collections

## Como escrever um post

Adicione arquivos correspondentes em `src/content/blog/en/` e `src/content/blog/br/` (mesmo nome de arquivo):

```md
---
title: Meu próximo post
description: Um resumo curto para listagens e SEO.
pubDate: 2026-07-20
tags: [nodejs]
lang: br
---

Seu conteúdo aqui.
```

Faça push em `main` e o GitHub Actions reconstrói o site.
