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

O site está publicado em https://awkner.github.io/game-design-portfolio/ (GitHub Pages de projeto). `site` e `base` já estão configurados em `astro.config.mjs`; `SITE_URL` pode sobrescrever o `site`. Todos os links internos respeitam o `base`.

- **Netlify**: conecte o repositório, comando de build `npm run build`, pasta de publicação `dist`. Ao usar Netlify, ajuste `site` e remova o `base` em `astro.config.mjs`.
- **GitHub Pages** (atual): o workflow `.github/workflows/deploy.yml` publica o site a cada push em `main` (ou manualmente). Nas configurações do repositório, a origem do Pages deve ser "GitHub Actions". Guia: https://docs.astro.build/en/guides/deploy/github/
