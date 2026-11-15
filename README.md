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
npm run resume:pdf # build + gera public/resume.pdf a partir de /resume/print/ (precisa do Chrome)
```

## Resume PDF

Os dados do currículo estão em `src/data/resume.ts`. A página `/resume/print/` (`src/pages/resume/print.astro`, sem nav e com noindex) é a versão de uma página; o PDF em `public/resume.pdf` é gerado a partir dela. Depois de editar o currículo, rode `npm run resume:pdf`: ele faz o build, sobe o preview, imprime em A4 com o Chrome headless e confere que o PDF tem 1 página. Se o Chrome não estiver no caminho padrão, defina `CHROME_PATH`. O script também copia o PDF para `dist/` e falha se o PDF tiver links locais.

## Como adicionar um novo projeto

1. Copie um arquivo de `src/content/projects/` (por exemplo `diceforce.md`) e renomeie. O nome do arquivo vira a URL: `meu-jogo.md` -> `/projects/meu-jogo`.
2. Coloque a imagem de capa em `src/assets/` (PNG, JPG ou WebP, de preferência 16:9; SVG não é suportado nas capas) e aponte para ela em `cover: ../../assets/projects/meu-jogo/cover.png`.
3. Preencha o frontmatter:
   - `title`, `summary`, `role`, `status`, `tools` (lista), `year`, `cover`, `coverAlt` (texto alternativo), `tags` (lista): obrigatórios.
   - `duration`, `teamSize`, `platform`, `contribution`, `aiDisclosure` (uma frase sobre o uso de IA, mostrada na caixa de resumo), `order`, `video`, `itchEmbed`, `playUrl`: opcionais.
   - `featured: true` coloca o projeto antes dos demais na home; `order` define a ordem (menor primeiro).
   - `video`: apenas URL de embed https (use a URL de embed, não a do vídeo): `https://www.youtube.com/embed/ID`, `https://www.youtube-nocookie.com/embed/ID` ou `https://player.vimeo.com/video/ID`. Outros formatos falham no build.
   - `playUrl`: link para jogar (itch.io, por exemplo), somente `https://`.
   - `draft: true` esconde o projeto do site.
4. Escreva o case study no corpo do Markdown (veja a seção abaixo).

## Writing a case study

Frontmatter (campos novos além dos listados acima):

- `disciplines` (opcional, até 4): disciplinas de design mostradas como etiquetas coloridas no cartão. Valores permitidos: `Systems Design`, `Combat Design`, `Balancing`, `Information Design`, `Level Design`, `Narrative Design`, `Game Feel`, `Multiplayer Design` (um valor fora da lista quebra o build).
- `status` (obrigatório): `released`, `prototype`, `playable` (rótulo "Playable prototype"), `game-jam`, `in-development`, `unreleased`, `redesign` ou `paper-prototype`. Aparece só como rótulo no cartão da página inicial.
- `teamSize`: número de pessoas (`1` = solo). `platform`: lista (`[PC, Web]`). `contribution`: lista de itens do que você fez (aparece na caixa de resumo).
- `itchEmbed`: URL de embed do itch.io, somente `https://itch.io/embed-upload/...`. O `video` serve de alternativa se o build não abrir.

A página mostra: caixa de resumo (Role, Team, Duration, Tools, Platform, Status, Year, link para jogar), embed/vídeo com carregamento adiado e depois o corpo do Markdown. Estrutura recomendada do corpo, em "eu", curta:

1. `## The problem`
2. `## Goals / pillars`
3. `## Process & iterations`: 2 a 4 etapas "versão, evidência de playtest, mudança"
4. `## Design artifacts`: imagem legendada, planilha ou mapa
5. `## Result`
6. `## What I learned / what I'd do next`
7. `## Credits`

Os três projetos (`diceforce.md`, `beatdown-remix.md`, `roblox-anomaly.md`) usam essa estrutura; cada um tem um comentário HTML no topo com a mídia que ainda falta capturar. A experiência profissional e o currículo vivem em `src/data/resume.ts` (fonte única), usada por `/resume/` (versão web) e `/resume/print/` (versão impressa, base do PDF). `/experience/` redireciona para `/resume/`.

## Onde editar as configurações

- `src/site.config.ts`: nome do site, seu nome, `specialty`, tagline, `languages`, `ogImage` (imagem 1200x630 em `public/`), `lastUpdated` (`'AAAA-MM'`, manual: atualize quando os projetos mudarem; aparece como "Last updated" no rodapé; o ano do © é o do build), e-mail, LinkedIn, ArtStation (`artstation`) e link do currículo. Procure pelos comentários `TODO`.
- `astro.config.mjs`: o `site` vem da variável de ambiente `SITE_URL` (ou do valor placeholder no arquivo). O build avisa no console enquanto ainda contiver `example.com`.
- Para o currículo, coloque `resume.pdf` em `public/` e defina `resumeUrl: '/resume.pdf'` em `site.config.ts`.
- `src/styles/global.css`: cores e tipografia ficam nas variáveis CSS no topo do arquivo.

## Deploy

O build gera arquivos estáticos em `dist/`.

O site está publicado em https://awkner.github.io/game-design-portfolio/ (GitHub Pages de projeto). `site` e `base` já estão configurados em `astro.config.mjs`; `SITE_URL` pode sobrescrever o `site`. Todos os links internos respeitam o `base`.

- **Netlify**: conecte o repositório, comando de build `npm run build`, pasta de publicação `dist`. Ao usar Netlify, ajuste `site` e remova o `base` em `astro.config.mjs`.
- **GitHub Pages** (atual): o workflow `.github/workflows/deploy.yml` publica o site a cada push em `main` (ou manualmente). Nas configurações do repositório, a origem do Pages deve ser "GitHub Actions". Guia: https://docs.astro.build/en/guides/deploy/github/
