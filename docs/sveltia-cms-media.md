# Mídia do blog (Sveltia CMS + Cloudflare R2)

Capas do blog e outros uploads do CMS ficam no **Cloudflare R2**, não no repositório Git. O conteúdo (Markdown) continua em `src/content/blog/` e é publicado via backend **GitHub** do Sveltia.

**Admin:** [me.rdvid.online/admin/](https://me.rdvid.online/admin/)  
**Config:** [`public/admin/config.yml`](../public/admin/config.yml) (exemplo com placeholders: [`public/admin/config.example.yml`](../public/admin/config.example.yml))

> Capas de **projetos fixados** (`public/cover.png` em cada repo) são outro fluxo — ver [`repositorios-fixados-projetos.md`](./repositorios-fixados-projetos.md).

## Fluxo

1. Entrar no Sveltia com **Sign in with token** (PAT do GitHub).
2. Na primeira vez que usar a biblioteca R2, informar o **Secret Access Key** do R2 (fica só no `localStorage` do navegador).
3. Criar/editar post → campo **Cover image** → upload ou escolha no Asset Library (R2).
4. Salvar → commit no GitHub (`v2`).
5. Deploy do `aboutme` (push em `v2`, cron ou *Run workflow*) → site estático atualizado. A imagem já está no ar via URL pública do R2.

## Configurar o bucket R2 (Cloudflare)

| Passo | Ação |
|--------|------|
| Bucket | Criar ex.: `rdvid-site-media` |
| Prefixo | Objetos sob `blog/` (configurado em `prefix` no CMS) |
| Acesso público | URL pública R2 (`*.r2.dev`) **ou** domínio customizado (ex.: `https://cdn.rdvid.online`) → valor de `public_url` no CMS |
| Credenciais | R2 → Manage R2 API Tokens → token **S3-compatible** (Access Key ID + Secret Access Key) |
| CORS | Origem `https://me.rdvid.online`; métodos `GET`, `PUT`, `DELETE`, `HEAD`; `AllowedHeaders: *` |

Exemplo de CORS (ajuste a origem se usar preview local):

```json
[
  {
    "AllowedOrigins": ["https://me.rdvid.online"],
    "AllowedMethods": ["GET", "PUT", "DELETE", "HEAD"],
    "AllowedHeaders": ["*"],
    "ExposeHeaders": ["ETag"],
    "MaxAgeSeconds": 3600
  }
]
```

Integração nativa no CMS: bloco `media_libraries.cloudflare_r2` com `account_id`, `access_key_id`, `bucket`, `public_url` e opcional `prefix`. Endpoint S3: `https://<ACCOUNT_ID>.r2.cloudflarestorage.com` (calculado pelo Sveltia). Bucket **EU** exige `jurisdiction: eu`.

Use Sveltia **≥ 0.22** (recomendado: versão pinada em [`src/pages/admin/index.html`](../src/pages/admin/index.html)).

**Não commite** o Secret Access Key. O Access Key ID pode ir no `config.yml` se você aceitar expô-lo no repo; alternativa: preencher só no `config.yml` local ou usar placeholders no exemplo.

## Autenticação GitHub (GitHub Pages)

O site **não** está na Netlify, então o OAuth “grátis” da Netlify não se aplica.

| Método | Uso |
|--------|-----|
| **Sign in with token** | PAT fine-grained no repo `aboutme`: **Contents** read/write; **Pull requests** read/write se usar editorial workflow |
| **OAuth** | Deploy do [Sveltia CMS Authenticator](https://github.com/sveltia/sveltia-cms-authenticator) (Cloudflare Workers) e `backend.base_url` no config |

Para uso solo, o token no login do CMS costuma ser suficiente.

## Campos do blog no CMS

Alinhados ao schema Astro ([`src/content.config.ts`](../src/content.config.ts)):

- **Cover image** (`heroImage`) → R2 apenas (`media_libraries.default: false` no campo; credenciais globais em `cloudflare_r2`)
- **Category**, tags, draft, datas, corpo richtext
- Imagens inline no richtext podem usar o Asset Library → R2

Capas antigas em `/images/blog/...` no repo continuam válidas até migrar.

## Otimização de upload

O CMS converte raster para **WebP** (máx. 2048 px), limita tamanho (~5 MB) e renomeia arquivos com template de data + UUID. Ver `media_libraries.all` em `config.yml`.

## Build e URLs no site

O frontmatter guarda URL absoluta (`https://cdn.rdvid.online/blog/...`). Caminhos relativos (`/images/blog/...`) são resolvidos com [`resolveBlogMediaUrl`](../src/lib/blog-media.ts) no build.

## Checklist

- [ ] Bucket R2 + CORS + domínio público
- [ ] `public/admin/config.yml` com `cloudflare_r2` (`account_id`, `access_key_id`, bucket, `public_url`)
- [ ] PAT GitHub para login no `/admin/`
- [ ] Secret R2 informado uma vez no navegador do CMS
- [ ] Post de teste com capa → commit em `v2` → deploy

## R2 não aparece no seletor de imagem

Se em **Locais externos** só aparecem “Inserir URL” e bancos de stock (Unsplash, etc.):

1. **Não use** `cloudflare_r2: {}` no campo — em versões antigas do Sveltia isso substitui a config global por um objeto vazio e o R2 some. Deixe só `default: false` no campo e configure R2 no topo do `config.yml`.
2. Atualize o script do admin para Sveltia recente (ver `index.html`).
3. Confirme CORS com **PUT** (ver acima) e informe o **Secret Access Key** R2 na primeira vez (Configurações / biblioteca R2).
4. Hard refresh no `/admin/` (Ctrl+Shift+R) para carregar o JS novo.

## CSP (futuro)

Se adicionar Content-Security-Policy, inclua em `connect-src` e `img-src` o host do `endpoint` R2 e o `public_url`. Para HEIC no CMS, Sveltia pode exigir `worker-src blob:`.
