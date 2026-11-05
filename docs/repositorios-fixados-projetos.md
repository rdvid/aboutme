# Conteúdo nos repositórios fixados (aba Projetos)

A aba **Projetos** do site ([`/projects`](https://me.rdvid.online/projects), [`/br/projects`](https://me.rdvid.online/br/projects)) lista repositórios **fixados no perfil GitHub** de [`rdvid`](https://github.com/rdvid). Os dados são buscados **no build** do site `aboutme` (SSG): GraphQL para pins + arquivos em cada repositório na branch padrão.

Este guia descreve o que configurar em **cada repositório fixado** para cards, capa e modal de detalhes ficarem corretos.

> **Blog:** capas de posts usam R2 + Sveltia CMS, não este contrato — ver [`sveltia-cms-media.md`](./sveltia-cms-media.md).

## Visão geral

| Onde | O quê |
|------|--------|
| Perfil GitHub | Até **6** repositórios **pinned** (ordem do pin = ordem na página) |
| Repositório do projeto | `public/cover.png` — imagem do card e do modal |
| Repositório do projeto | `public/manifest.md` — metadados + texto longo do modal |
| Repo `aboutme` | Build/deploy atualiza a listagem (CI usa token do GitHub Actions) |

Repositório **não fixado** no perfil **não aparece** na aba Projetos, mesmo com `manifest.md` e capa.

Templates e exemplos:

- **Exemplo preenchido (novos pins):** [`description-example.md`](./description-example.md) — copie o arquivo inteiro para `public/manifest.md` no repo do projeto e edite os placeholders.
- **Template mínimo:** [`templates/public/manifest.template.md`](../templates/public/manifest.template.md) e [`templates/public/README.md`](../templates/public/README.md).

## Passo a passo por repositório

1. **Fixar** o repositório no perfil GitHub (Settings do perfil → **Pinned repositories**).
2. Na **branch padrão** do repo (geralmente `main`), criar a pasta `public/` se não existir.
3. Adicionar **`public/cover.png`** (recomendado).
4. Copiar [`description-example.md`](./description-example.md) (ou o template) para **`public/manifest.md`** e ajustar frontmatter + corpo.
5. Fazer commit e push.
6. Aguardar o **deploy agendado** do `aboutme` ou disparar um build manual (ver abaixo).

## Imagem de capa (`public/cover.png`)

- **Caminho fixo:** `public/cover.png` na raiz do repositório (branch padrão).
- **Uso:** thumbnail no grid de projetos e imagem no topo do modal **Detalhes**.
- **Proporção sugerida:** 16:10 ou ~1200×630 px; o site usa `object-cover` (bordas podem ser cortadas).
- **Formato:** PNG (nome e extensão exatos: `cover.png`).
- **Se faltar ou a URL falhar:** o site exibe um placeholder genérico (`project-cover-placeholder.svg` no `aboutme`).

URL usada no build (referência):

```text
https://raw.githubusercontent.com/{owner}/{repo}/{branch}/public/cover.png
```

## Manifesto (`public/manifest.md`)

Arquivo Markdown com **YAML frontmatter** entre `---` e **corpo** abaixo para o modal.

### Frontmatter (campos)

| Campo | Obrigatório | Valores / notas |
|--------|-------------|------------------|
| `title` | Não | Título exibido; se omitido, usa o nome do repo em Title Case |
| `status` | Não | `ready` (padrão) → badge “Disponível” / `dev` → “Em desenvolvimento” |
| `description.en` | **Sim**¹ | Texto curto no card (inglês) |
| `description.br` | **Sim**¹ | Texto curto no card (português) |
| `badges` | Não | Lista de strings (ex.: `typescript`, `docker`); no site aparecem **no máximo 3** |
| `docUrl` | Não | URL válida → botão “Docs” |
| `liveDemoUrl` | Não | URL válida → botão “Demo ao vivo” |

¹ Obrigatório **quando o arquivo existe**: se o frontmatter for inválido ou faltar `description.en` / `description.br`, o manifesto **inteiro é ignorado** (como se o arquivo não existisse).

**Evite** linhas de comentário `# ...` dentro do YAML em produção; use o [template](../templates/public/manifest.template.md) apenas como base e remova comentários ao copiar.

### Corpo (abaixo do frontmatter)

Markdown livre: títulos, listas, links. É convertido para HTML no build e exibido na área `.prose` do modal **Detalhes** (mesmo idioma do corpo para EN e BR hoje; cards usam `description.en` ou `description.br` conforme a rota).

### Exemplo mínimo válido

```markdown
---
title: Market Scrappy
status: ready
badges: [typescript, express, redis]
docUrl: https://example.com/api-docs
liveDemoUrl: https://example.com
description:
  en: Fullstack app to scrape and visualize Amazon search results.
  br: App fullstack para scrapear e visualizar buscas na Amazon.
---

## Visão geral

O que o projeto faz, stack principal e links úteis.

## Destaques

- Ponto 1
- Ponto 2
```

## Quando não há `manifest.md` (fallback)

O pin **continua listado** com dados do GitHub:

| Campo no site | Origem |
|---------------|--------|
| Título | Nome do repositório (formatado) |
| Descrição do card | Descrição do repo (About), mesma linha em EN e BR |
| Badges | Até 3 **topics** + idioma principal |
| Demo | **Website** do repositório (se configurado no GitHub) |
| Estrelas | Contagem do GitHub |
| Corpo do modal | Vazio |
| Capa | `public/cover.png` se existir; senão placeholder |

Para controle fino (bilingue, links, status, texto do modal), use sempre `public/manifest.md`.

## Configuração útil no GitHub (sem manifest)

No repositório, em **About** (lado direito):

- **Description** — blurb do card no fallback
- **Website** — vira link de demo se não houver `liveDemoUrl`
- **Topics** — viram badges (até 3 no site)

## Atualizar o site ao vivo (deploy)

Mudanças nos repos fixados **não** aparecem sozinhas no ar: o `aboutme` precisa **build + deploy**.

| Gatilho | Quando |
|--------|--------|
| **Cron** | Duas vezes ao dia (**08:00** e **20:00 UTC**) — workflow [`.github/workflows/deploy.yml`](../.github/workflows/deploy.yml). GitHub pode atrasar alguns minutos. |
| **Push** | Commit na branch **`v2`** do `aboutme` |
| **Manual** | Actions → *Deploy to GitHub Pages* → **Run workflow** |

O cron só roda se esse workflow existir na **branch padrão** do repositório `aboutme` (ajuste a branch padrão ou mantenha `deploy.yml` sincronizado).

Depois de alterar pins/manifest/capa, no máximo ~12 h até o próximo cron (ou rode o workflow manualmente para imediato).

## Build local e cache

- Desenvolvimento: [`GH_PAT`](../.env.example) em `.env` evita rate limit da API (`GH_PAT=ghp_...`).
- Se a API falhar, o build usa [`src/data/projects.snapshot.json`](../src/data/projects.snapshot.json).
- Em **produção**, um build bem-sucedido **atualiza** o snapshot; em **dev** o snapshot não é reescrito (evita loop de reload do Vite).

## Checklist rápido

- [ ] Repositório fixado no perfil (máx. 6)
- [ ] `public/cover.png` na branch padrão
- [ ] `public/manifest.md` com `description.en` e `description.br`
- [ ] URLs em `docUrl` / `liveDemoUrl` completas (`https://...`)
- [ ] `status: dev` apenas se ainda estiver em desenvolvimento
- [ ] Push no repo do projeto; site atualiza no próximo cron deploy ou via *Run workflow*

## Ver no site

- Inglês: `/projects`
- Português: `/br/projects`

Botão no final da página leva à [lista completa de repositórios no GitHub](https://github.com/rdvid?tab=repositories).
