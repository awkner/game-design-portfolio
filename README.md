# Portfólio de Game Design

Site estático feito com [Astro](https://astro.build), sem frameworks de UI e sem framework de CSS. Pensado para ser simples de preencher e rápido de carregar.

## Comandos

Requer Node `>=22.23.4` (o mesmo valor de `engines` no `package.json`; testado com Node 24).

```bash
npm install        # instala as dependências (primeira vez)
npm run dev        # servidor de desenvolvimento em http://localhost:4321
npm run build      # gera o site estático na pasta dist/
npm run preview    # serve a pasta dist/ localmente para conferir o build
npx astro check    # verifica tipos e erros
```

## Como adicionar um novo projeto

1. Copie um arquivo de `src/content/projects/` (por exemplo `project-one.md`) e renomeie. O nome do arquivo vira a URL: `meu-jogo.md` -> `/projects/meu-jogo`.
2. Coloque a imagem de capa em `src/assets/` (PNG, JPG ou WebP, de preferência 16:9; SVG não é suportado nas capas) e aponte para ela em `cover: ../../assets/minha-capa.png`.
3. Preencha o frontmatter:
   - `title`, `summary`, `role`, `tools` (lista), `year`, `cover`, `coverAlt` (texto alternativo), `tags` (lista): obrigatórios.
   - `duration`, `order`, `video`, `playUrl`: opcionais.
   - `featured: true` coloca o projeto antes dos demais na home; `order` define a ordem (menor primeiro).
   - `video`: apenas URL de embed https (use a URL de embed, não a do vídeo): `https://www.youtube.com/embed/ID`, `https://www.youtube-nocookie.com/embed/ID` ou `https://player.vimeo.com/video/ID`. Outros formatos falham no build.
   - `playUrl`: link para jogar (itch.io, por exemplo), somente `https://`.
   - `draft: true` esconde o projeto do site.
4. Escreva o case study no corpo do Markdown (Overview, My Role, Design Goals, Process, Challenges & Solutions, Outcome / Learnings).

## Onde editar as configurações

- `src/site.config.ts`: nome do site, seu nome, tagline, e-mail, LinkedIn, itch.io e link do currículo. Procure pelos comentários `TODO`.
- `astro.config.mjs`: o `site` vem da variável de ambiente `SITE_URL` (ou do valor placeholder no arquivo). O build avisa no console enquanto ainda contiver `example.com`.
- `src/pages/about.astro`: texto da página About. Para o currículo, coloque `resume.pdf` em `public/` e defina `resumeUrl: '/resume.pdf'` em `site.config.ts`.
- `src/styles/global.css`: cores e tipografia ficam nas variáveis CSS no topo do arquivo.

## Deploy

O build gera arquivos estáticos em `dist/`.

**Primeiro passo de qualquer deploy: defina a URL final do site** (`SITE_URL` ou `site` em `astro.config.mjs`). Sem isso, links canônicos e Open Graph apontam para example.com. Se publicar em um subcaminho (GitHub Pages de projeto), defina também `base: '/nome-do-repo'`; todos os links internos já respeitam o `base`.

- **Netlify**: conecte o repositório, comando de build `npm run build`, pasta de publicação `dist`. Atualize `site` em `astro.config.mjs` com a URL do Netlify.
- **GitHub Pages**: o workflow `.github/workflows/deploy.yml` já está pronto (roda a cada push em `main` ou manualmente, usando `withastro/action` e `actions/deploy-pages`). Basta ativar Pages com origem "GitHub Actions" nas configurações do repositório; para definir `SITE_URL`, descomente o bloco `env` no workflow. Defina `site` como `https://SEU-USUARIO.github.io`; se o repositório não for `SEU-USUARIO.github.io`, defina também `base: '/nome-do-repo'`. Guia: https://docs.astro.build/en/guides/deploy/github/
