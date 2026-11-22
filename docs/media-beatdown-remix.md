# BEATDOWN REMIX: catálogo de clipes e imagens

Não é publicado com o site. Serve para saber **o que cada clipe ou imagem mostra, de onde vem e onde cabe** na página `src/content/projects/beatdown-remix.md`.

## De onde vêm

Tudo sai do jogo de verdade, no repositório `D:\BEATDOWN REMIX`. As explicações completas ficam lá:

- `docs/portfolio/gifs/README.md`: cada clipe pronto, com duração, legenda sugerida, data de aprovação e defeitos conhecidos.
- `docs/portfolio/dossier/11_media_checklist.md`: a lista das 44 tomadas planejadas (`#n`), com status, como capturar cada uma e a seção de destino.

Clipes da Bonnie (o jogo real): saem de uma única tomada de autoplay da luta inteira (`output/full_take.mp4`, 6,5 min com som, fora do git), cortada com ffmpeg. São 960×540, H.264, sem áudio. Cada loop de frase tem exatamente uma frase (8 batidas a 107,36 BPM = 4,47 s), começa no quadro em que o deck muda para REC e só usa frases sem erro (Perfect ou Good).

Loops dos bosses de exemplo: capturas quadro a quadro das cenas `?mock=valse` / `?mock=molotov`, a 25 fps, com `npm run shots -- --boss <nome> --record docs/portfolio/gifs/<nome>_mock`.

Screenshots do jogo (Call, Response, título, calibração, resultados): capturados com o script de shots do jogo, sem UI de debug e sem a etiqueta MUTED (commit `3f5ff6e`).

O site usa só o **mp4** (e um `.jpg` de cartaz no hero), copiados à mão para `public/media/beatdown-remix/` com outro nome. O `.gif` não vai para o site: os dos bosses têm de 9 a 18 MB. Depois de regravar no jogo, copie de novo com o nome do site.

## Os clipes

| No site (`public/media/beatdown-remix/`) | No jogo (`docs/portfolio/gifs/`) | Tomada | Duração | O que acontece na tela |
|---|---|---|---|---|
| `hero-loop.mp4` + `hero-loop.jpg` | `bonnie_loop.mp4` | #1 | 4,47 s | Uma frase inteira da Seção 1: o Call da Bonnie (REC, boss projetado), o rewind de uma batida (REW), a Response (PLAY) com blocks Perfect, depois o finisher (BAM) e o bonus no contratempo. O `.jpg` é um quadro de 3,2 s tirado com ffmpeg. |
| `clip-walking.mp4` | `bonnie_walking.mp4` | #3 | 4,47 s | Frase da Seção 2 com feints: a nota de borda marcada começa numa batida e corre para outra; a Response segue o destino. |
| `clip-claps.mp4` | `bonnie_claps.mp4` | #5 | 4,47 s | Frase de 6 notas da Seção 3: as mãos da plateia fecham sobre a fita a cada batida e escondem os botões, que só aparecem entre as palmas. Termina em POW e BONUS! PERFECT. |
| `clip-intermission.mp4` | `bonnie_opening_dialogue.mp4` | #43 (cobre a #7) | 13,2 s | Balões de fala sobre o palco ao vivo, do "Ever tried asking nicely?" da Bonnie até a promo gritada quando "Riot" começa, terminando na Kass. É a abertura, não um intermission do meio da música: por isso a legenda diz "Dialogue". |
| `valse-loop.mp4` | `valse_mock.mp4` | #38 | 4,8 s | Count Valse em 3/4: defende, defende, ataca, com a fita dividida em dois compassos de três. |
| `molotov-loop.mp4` | `molotov_mock.mp4` | #39 | 7,68 s | Maestro Molotov: uma hold note desenhada como pavio, a bomba jogada e a explosão quando o jogador solta no fim do pavio. |

Defeito conhecido, aceito pelo Bruno: nos primeiros instantes de cada loop de frase, o texto lateral da frase anterior ("FINISHER!" / "BONUS! PERFECT") ainda está sumindo. É o que o jogo mostra.

## Onde cada clipe encaixa

| Clipe | Hoje | Por que cabe ali | Outros lugares possíveis |
|---|---|---|---|
| `hero-loop` | Hero, no topo | O loop central inteiro numa olhada: o boss grava, a fita volta, você responde. | The first version asked too much. |
| `clip-walking` | Twists without new buttons, grade | A feint: nota de borda marcada que corre meia batida no Call antes de cobrar na Response. | — |
| `clip-claps` | Twists without new buttons, grade | As palmas: esconder os botões no ritmo sem esconder o ritmo. | A série de iterações das palmas (#35) se um dia existir. |
| `clip-intermission` | The story | A regra "a música nunca para": a história acontece em cima do palco e da música. | — |
| `valse-loop` | Every opponent plays differently | Cada luta tem mecânicas próprias: Valse em 3/4, fita em dois compassos de três. | — |
| `molotov-loop` | Every opponent plays differently | Cada luta tem mecânicas próprias: hold note como pavio (segura para se preparar, solta para esquivar). | — |

## As imagens (`src/assets/projects/beatdown-remix/`)

Nenhuma é cópia byte a byte de um arquivo do jogo: foram redimensionadas ou exportadas para o site. A origem abaixo vem do commit e da lista de tomadas.

| Arquivo | Onde está na página | Origem | O que mostra |
|---|---|---|---|
| `cover.png` | Capa (card e topo) | Mesma imagem de `shot-response.png` (script de shots do jogo, tomada #37) | A Response: Kass bloqueia um tapa da Bonnie, PERFECT na tela. |
| `shot-call.png` | How it plays | Script de shots do jogo, tomada #37 | O Call: filtro de gravação, REC piscando, Bonnie projetada, notas na fita. |
| `shot-response.png` | Fora da página (é a capa) | Script de shots do jogo, tomada #37 | A Response: palco em cores, Kass bloqueando, efeito na cor do botão. |
| `chart-timeline.png` | Twists without new buttons (fim da seção) | Diagrama feito a partir de `public/chart.json`, tomada #21 | A chart de "Riot": intro, quatro seções e três intermissions em 2:59. |
| `shot-title.png` | Art and front end (recolhida) | Script de shots do jogo, tomada #11 | Tela de título com logo e key art da Kass. |
| `shot-calibration.png` | Art and front end (recolhida) | Script de shots do jogo, tomada #27 | Calibração: 16 toques na batida com a Kass socando o saco de pancada. |
| `bonnie-poses.png` | Art and front end (recolhida) | `docs/design/art/sprites/final/` (pose sheet), tomada #18 | Nove poses da Bonnie, do idle à derrota. |
| `rig-vs-sprite.png` | Art and front end (recolhida) | `docs/design/art/rig/kass_rig_v4/punch_vs_sprite.png`, tomada #16 | O rig recortado contra o sprite: uma abordagem descartada, com a prova. |
| `arena-backdrop.png` | Art and front end (recolhida) | `docs/design/art/stage/` (fundo da arena) | A arena vazia com treliça, holofotes e arquibancada. |
| `crowd-hyped.png` | Art and front end (recolhida) | `docs/design/art/crowd/` (sheet "hyped"), tomada #20 | Doze membros da plateia no humor animado. |
| `shot-results.png` | Art and front end (recolhida) | Script de shots do jogo, tomada #10 | Tela de resultados depois de um T.K.O. |

## O que não existe (e não deve voltar para a página sem gravar antes)

- **Vídeo de gameplay com som** (#26): descartado pelo Bruno em 2026-11-22. A seção "Watch it" saiu da página; o link do itch.io ficou como frase.
- **Clipe do final T.K.O.** (#9): nunca gravado. Saiu da grade. Pode ser cortado de `output/full_take.mp4` no jogo.

## Cuidados ao usar

- **Texto alternativo:** cada `<video>` tem `aria-label` descrevendo a cena. Se trocar o clipe de lugar, leve o `aria-label` junto. Se regravar com outra cena, reescreva o `aria-label`.
- **Peso:** só o hero usa `preload="metadata"`; os outros usam `preload="none"`. Mantenha assim.
- **Caminho:** os `src` levam o prefixo do `base` (`/game-design-portfolio/media/beatdown-remix/...`).
- **Legenda:** a legenda diz o que o clipe prova (a decisão de design), não só o que acontece. As sugeridas no README do jogo são ponto de partida; a palavra final é do Bruno.
- **Nome:** o jogo usa `bonnie_*` / `*_mock`; o site usa `hero-loop`, `clip-*` e `*-loop`. A tabela acima é o mapa entre os dois.
