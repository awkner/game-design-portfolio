# DICEFORCE: catálogo dos clipes

Não é publicado com o site. Serve para saber **o que cada clipe mostra e onde ele cabe** na página `src/content/projects/diceforce.md` (ou em qualquer outra página que fale do jogo).

## De onde vêm

Todos os clipes são gravados do jogo de verdade, por roteiro, sem edição de regra:

- Repositório do jogo: `D:\DICEFORCE`. Comando: `gifs.bat` (todos os de combate) ou `gifs.bat <nome>`; `gifs.bat run-flow` grava o fluxo de menus.
- Godot Movie Maker a 30 fps. Os roteiros (`game/CapturaRoteiros.cs`, `game/CapturaRoteirosCombos.cs`, `game/CapturaFluxo.cs`) só apertam os botões do jogador e cravam a face dos dados (a mesma porta do menu de debug). Nenhuma regra é falsificada.
- Saída em `D:\DICEFORCE\logs\gifs\`: `<nome>.mp4` (1280 px, H.264, para o site), `<nome>.jpg` (cartaz), `<nome>.gif` (640 px, 10 fps, para README ou rede social) e `<nome>_sheet.png` (6 quadros, para conferir sem abrir o vídeo).
- O site usa só o **mp4 + jpg**, copiados à mão para `public/media/diceforce/`. Depois de regravar, copie os dois de novo.

Os mapas dos clipes de combate são feitos para a gravação (`D:\DICEFORCE\mapas\gif-*-v2.txt`). Cada um tem um cenário diferente, para a página não passar a ideia de que todo mapa é igual.

## Os clipes

| Arquivo | Duração | Mapa / câmera | O que acontece na tela |
|---|---|---|---|
| `push-tank` | 14,1 s | Pátio industrial com anel de rua; câmera de 150° | Archer usa Incendiary Burst num Stinger em cima de óleo, e ele começa a queimar. Colossus usa Shoulder Charge, com os dois cliques do empurrão (alvo, depois destino), e joga o Stinger em chamas contra o Fuel Tank. O tanque pega fogo, explode (BOOM) e acende o óleo em volta, queimando os inimigos. |
| `enemy-turn` | 10,9 s | Parque com lago e trilhas; câmera de 80°, mais de cima | Abertura da rodada: os dados rolam (o show dos dados), depois os inimigos andam e travam os ataques, cada um com o selo de preview mostrando quem vai acertar (`2 D5 > COLOSSUS`), antes de o esquadrão agir. |
| `boss-magnetizer` | 18,6 s | Centro da cidade, cruzamento com pracinha; câmera de 330° | O chefe Magnetizer (núcleo D9 + blindagem D5, age duas vezes por rodada) mostra a preview, os mechas atacam, ele se protege com escudo (+2) e absorve um tiro. Depois lança Magnetic Storm, que puxa os mechas e gera colisões (STUNNED, COLLISION, BLOCKED). |
| `electric-water` | 8,7 s | Canal com cais e ponte; câmera de 240° | Archer dispara Voltaic Arc num Crawler dentro da poça. Quem está na água leva +1, a corrente salta de unidade em unidade, e a partir do Stinger (Condutor) salta 2 tiles e alcança um Crawler em terra seca. |
| `run-flow` | 14,5 s | Telas 2D (sem mapa de combate) | Hangar do esquadrão, depois o mapa da run, a carta de recompensa, a compra e o reparo na garagem, e um mod equipado numa face do dado. |

Ritmo: os clipes de combate são mais pausados que o jogo normal (a mira fica 1,2 a 1,5 s na tela antes do clique e há pausa depois de cada ação), para dar tempo de ler os números. A câmera orbita devagar durante o clipe.

## Onde cada um encaixa

Seções de `diceforce.md` e o clipe que prova cada uma. "Hoje" é onde ele já está.

| Clipe | Hoje | Por que cabe ali | Outros lugares possíveis |
|---|---|---|---|
| `push-tank` | Hero, no topo | É a cadeia que nenhuma regra descreve: fogo, óleo, empurrão e o resultado de morte do tanque se combinam sozinhos. Mostra o pilar "Systemic by rule" em 14 s. | Process & iterations, história 2 (Fuel Tank: o tanque que explode por estar queimando) e história 3 (os dois cliques do Push/Pull). |
| `enemy-turn` | Watch it | Mostra o pilar "Dominate the luck": o inimigo mostra a face e trava o ataque às claras antes de o jogador agir. | Process & iterations, história 1 (iniciativa pelo tamanho do dado: a fila de dados no topo). |
| `boss-magnetizer` | Watch it | O chefe de duas partes, cada uma com o próprio dado, entrando duas vezes na ordem da rodada. | História 1 (o chefe D9 + D5 entra na ordem duas vezes); Result (o chefe tem modelo 3D e joga no build). |
| `electric-water` | Watch it | Terreno lido pelo estado: a água torna a unidade Condutora, e o arco usa isso sem regra escrita para "água + raio". | Goals / pillars (Systemic by rule); como segundo exemplo de emergência ao lado do `push-tank`. |
| `run-flow` | Watch it | O loop da run de ponta a ponta. | Result ("A playable prototype from squad select to map, combat, reward, garage and inventory"). |

## Cuidados ao usar

- **Texto alternativo:** cada `<video>` tem `aria-label` descrevendo a cena. Se trocar o clipe de lugar, leve o `aria-label` junto. Se regravar com outra cena, reescreva o `aria-label`.
- **Peso:** só o hero usa `preload="metadata"`; os outros usam `preload="none"` para não baixar 8 MB ao abrir a página. Mantenha assim.
- **Caminho:** os `src` levam o prefixo do `base` (`/game-design-portfolio/media/diceforce/...`).
- **Legenda:** a legenda diz o que o clipe prova (a decisão de design), não só o que acontece. Ver as atuais em `diceforce.md`.
- **GIF:** o `.gif` não vai para o site, porque o mp4 é muito menor. O de `boss-magnetizer` tem cerca de 10 MB.
