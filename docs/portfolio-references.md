# Referências: como escrever as páginas de projeto do portfólio

Não é publicado com o site. É a base para o guia de escrita (`docs/writing-guide.md`, próximo passo). Pesquisa feita em 2026-11-22.

As citações ficam em inglês, como estão na fonte. Passaram por uma ferramenta que resume páginas, então conferir na página antes de reusar qualquer uma publicamente.

## De onde vem

| Frente | O que rendeu | Peso |
|---|---|---|
| Thread do r/gamedesign que o Bruno indicou | 4 dos 6 comentários (o Reddit bloqueou o resto). Um comentarista que trabalha em estúdio. Links: GDD do Silent Hill, EntryLevel Games, "The Door Problem" da Liz England. | Baixo |
| Vídeo "How to make a Game Design Portfolio" (Cybercow Studios, 2022, 6 min) | Transcrição completa. Fala de hospedagem, curadoria e profundidade em camadas. Não fala de como escrever uma página. | Baixo |
| Conselhos de quem contrata (20 fontes) | 5 vozes fortes com papel de contratação; o resto é escola ou marketing. | Alto nas 5 fortes |
| Portfólios reais (14 sites, ~10 páginas de projeto lidas) | Como designers empregados escrevem de fato. | Alto |

Arquivos brutos (fora do git): `output/reddit-portfolio-thread.md`, `output/youtube-portfolio-video.md`, `output/research-hiring-advice.md`, `output/research-portfolio-examples.md`.

### As fontes que pesam

Quem contrata ou revisa portfólios:
- **Kate Killick** (game designer, Mojiworks), "11 portfolio tips for game design graduates", PocketGamer.biz, 2018.
- **Ethan Levy** (contratava na BioWare San Francisco), "Breaking into Game Design" partes 2 e 3, Game Developer, 2013.
- **Simon Mann** (senior designer, Creative Assembly), Game Developer, 2018.
- **Robert Yang** (level designer e professor, revisa portfólios), Radiator Blog, 2018.
- **Eileen Seemann** (Lead UX Designer, Massive), blog de recrutamento da Massive.
- Apoio: Elliot Pinkus (2013), Richard Atlas (2021), Dan Norton (Filament Games, 2021), Arnold Hendrick (1998).

Portfólios que servem de modelo:
- **Michiel Werring** (Lead LD em Helldivers 2): páginas dos mods de Fallout 3, "Developing a Handheld Mortar".
- **Max Pears** (Senior LD, Cyberpunk Phantom Liberty): níveis pessoais, "Spider-Man: Fisk Hideout".
- **Hugo Peters** (Massive): "The Runthrough", protótipo solo.
- **Jory House** (Huntsman): "Solace", RPG solo.
- **Tom Francis** (Gunpoint, Heat Signature, Tactical Breach Wizards): ensaios de design no blog.
- **German López** (combat designer na Crema): o protótipo solo de Ratchet & Clank.

Para o projeto do Bruno, os mais próximos são Runthrough (revisão por revisão, um vídeo em cada), Solace (afirmação, motivo, clipe curto), Handheld Mortar (objetivo, versões, resultado) e Fisk Hideout (motivo, viradas, resumo honesto).

### Palestras da GDC no YouTube

O canal oficial da GDC não tem palestra sobre portfólio **de design**. As "Killer Portfolio or Portfolio Killer" (2017-2019) são de artistas. As mais próximas tratam de contratação e entrevista de designers:

| Palestra | Status | O que rendeu |
|---|---|---|
| "Interviewing For Game Design", Richard Carrillo (game director, Ubisoft Toronto), GDC 2017 | Transcrição lida | Não fala de portfólio. A frase útil é sobre como apresentar uma decisão: "here are my goals, here are the problems I was trying to solve, here's some ideas I had that didn't work and here's why I went to this one" (conferida na transcrição). Também: o designer projeta sistemas e não é "idea generator"; ele quer ouvir o raciocínio, não só a resposta. |
| "Getting Hired with a Personal Touch", recrutador e diretor criativo de estúdio indie em Estocolmo, GDC 2024 | Transcrição lida | Quase nada de portfólio de design. Pontos úteis: o melhor trabalho no topo; explicar quando e por que você se desviou do plano; saber dizer o que melhoraria no próprio trabalho; e "don't use AI generated text please". |
| "Tips From the Trenches: How To Help Recruiters and Hiring Managers Get You In The Door", painel, GDC 2022 | Bloqueada (o YouTube recusou as legendas) | — |
| "The Impossible Quest: Getting a Job in Games", microtalks, GDC 2021 | Bloqueada | — |

Arquivos: `output/gdc/*.digest.md`.

## O que a pesquisa diz

### 1. A abertura diz o que o jogo é, ou por que ele existe

Nenhuma página boa abre com o trabalho feito nem com uma mudança. Abrem de dois jeitos:
- "X é um [gênero] sobre [gancho]": "Helldivers 2 is a co-op extraction shooter." (Werring); "Void Bastards is a roguelike first-person shooter about boarding randomly generated spaceships." (Francis).
- "Eu quis / comecei / me propus a...": "I started with the existing missile launcher to create a hip-firing mortar." (Werring); "I set out to create a similar movement system that tackled the problem of seamless switching between gun and melee combat." (Batka); "The Runthrough started as kind of a copy of The Impossible Game..." (Peters).

Quem contrata pede o mesmo: escrever para um leitor que não sabe nada ("The reader begins with no knowledge of you or your project.", Killick) e pôr o mais forte primeiro, porque a primeira leitura é por cima ("Show your best work in the shortest time possible.", Mann).

**Contra o que temos:** "Replaced the original fight loop with call and response" pressupõe que o leitor viu a versão 1 e trata revisar o próprio trabalho como feito. Nenhuma fonte trata desse caso diretamente; a conclusão é minha, mas todos os modelos fazem o contrário.

### 2. O papel aparece uma vez, como fato, e às vezes nem aparece

- Páginas solo: "Solo project." (Batka), um campo de metadados ("Primary Role(s): Gameplay design / coding", Peters), ou nada, porque o "eu" já deixa claro (Werring, Runthrough).
- A lista de contribuições em bullets só aparece em jogos de equipe lançados (López/Temtem, Bahadur, Huntsman). O próprio López tira a lista no protótipo solo.
- Quem contrata exige papel claro **em projetos de equipe** (Yang, Seemann). Nenhuma fonte pede seção de contribuição em projeto solo. Killick: usar "eu", não "nós".

**Contra o que temos:** a lista "what I did" (`contribution` no frontmatter) não tem apoio em nenhuma fonte para trabalho solo.

### 3. Decisões contadas como sequência, com o que aconteceu ao jogar

- "The first version was effectively an overpowered, clumsy shotgun." Depois vem a correção, e depois o próximo problema (Werring).
- "I noticed that the level was overall symmetrical", e por isso entrou altura (Pears).
- "The behavior of multiple vamps getting picked up was actually a bug, but we decided to keep it!" (Peters).
- A ordem é cronológica (Initial Prototype / Revision 1...4) ou versão a versão, não decisão rotulada por decisão rotulada.

Quem contrata lê para entender como você pensa ("A case study is not just a description of a project.", Killick). Carrillo (Ubisoft, GDC 2017) descreve a mesma ordem para defender uma decisão: objetivos, problema, ideias que não funcionaram, e por que a escolhida. Contar uma história de como você melhorou o jogo a partir de feedback é, para Levy, "an instant ticket to a full team interview".

### 4. Falha e corte ditos sem rodeio

"Again all of this mission was cut." (Pears); "I can not honestly say it was completed" (Pears); "After completion I was unhappy with these simple modifications." (Werring); a Runthrough explica por que o desenvolvimento parou.

É o principal sinal de credibilidade e o que separa essas páginas de um currículo. Pinkus: "If all your designs are perfect on the first pass, you're doing it wrong."

### 5. Sem caixa de TL;DR

- Nenhum dos 14 portfólios usa bloco problema / decisão / evidência.
- Killick recomenda a ordem contexto, problema, processo, resultado, com o processo como a parte mais longa. Mas a reclamação dela é falta de análise, não falta de títulos.
- Nenhuma fonte de contratação chama o modelo de clichê. A leitura de que um bloco rotulado no topo parece preenchimento de template é inferência minha, apoiada no fato de nenhum modelo usar.
- Os títulos das seções são substantivos simples: Overview, Flow, Initial Prototype, Revision 2, What's next?, Final Outcome.

### 6. Tom

- Primeira pessoa, passado, levemente casual, com consciência de si: "kind of a copy", "juicy", "Thank you for reading!". Humor só em toques pequenos.
- Quem contrata: nem seco nem formal (Killick); modesto e honesto, sem autopromoção alta (Yang); feito à mão, porque texto genérico se nota (Mann); não vender paixão ("Everyone applying for a game design job is passionate.", Levy).
- Hendrick (1998) julga designers pela capacidade de escrever prosa analítica clara. Isso favorece prosa a bullets.
- A voz de currículo (verbos sem sujeito, "championed", "oversaw", "led") só aparece em sites de créditos de estúdio (Bahadur, Dean Tate, Tomb Raider de Heath Smith), onde os próprios créditos seguram a página. Um protótipo solo não tem créditos para se apoiar, então precisa da narrativa.

### 7. Tamanho

- Páginas de caso: 500 a 1.400 palavras nos modelos; 150 a 300 em projetos pequenos. Páginas muito longas funcionam quando os títulos deixam pular partes.
- Quem contrata quer pouco texto por seção e o raciocínio dentro dele. Yang chega a "a few sentences at most". Killick põe o processo como a parte mais longa, com as imagens carregando o resto.
- Ninguém lê documento longo: "No recruiter will read a 40-page Design Document." (Mann).

### 8. Mídia ao lado da afirmação que ela prova

- Um clipe curto por mecânica (Solace), um vídeo por revisão (Runthrough), diagramas para fluxo e ritmo (Pears).
- Levy: vídeo de "90 second or less" por peça. Killick: GIFs curtos com legenda para explicar uma mecânica; a imagem precisa ser entendida de relance.
- Screenshot decorativo sem legenda é a variante fraca.
- Fatos de apoio (status, duração, ferramentas, engine) ficam numa faixa pequena de metadados, não no texto.

## Antipadrões que quem contrata cita

1. Descrição do projeto sem análise das decisões.
2. Só o resultado final, sem iteração, alternativas ou falhas.
3. Texto seco, formal ou genérico.
4. Blocos grandes de texto.
5. Papel vago em projeto de equipe.
6. Imagem que não se lê de relance.
7. Projetos demais, ou sem relação com a vaga.
8. Vender paixão, hipérbole, elogio à empresa.
9. Autopromoção alta.
10. Documentos de design longos como peça principal.
11. Portfólio que deixa o leitor adivinhar a especialidade.

## O que a pesquisa não cobre

- Nenhuma fonte trata de como escrever o papel num projeto solo, nem de apresentar uma mudança no próprio trabalho como conquista. As conclusões acima nesses dois pontos são inferência, apoiada no que os modelos fazem.
- Nenhum conselho de Riot, Blizzard, Ubisoft, Bungie, CDPR ou Naughty Dog sobre escrita de portfólio de design.
- As sessões da GDC 2026 sobre portfólio ("Designing the Ideal Level Design Portfolio: What Hiring Teams Actually Look For") e as páginas do GDC Vault deram 403; só há títulos. No YouTube não há palestra da GDC sobre portfólio de design, e duas palestras de contratação tiveram as legendas bloqueadas.
- As melhores fontes de contratação são de 2013 e 2018. Os números (3 a 5 projetos, 90 segundos) são regra de bolso de um autor, não dado medido.
- A maioria dos modelos fortes é de level ou combat designers com trabalho lançado ou mods. A evidência de protótipo solo é uma amostra menor (cerca de 5 páginas).
- Comentários 3 a 6 da thread do Reddit não foram lidos.

## Contra as nossas páginas, em resumo

| O que as páginas fazem hoje | O que a pesquisa indica |
|---|---|
| Lista "what I did" (`contribution`) em projeto solo | Sem lista. Papel numa linha de metadados ("Solo project"), ou nada. |
| Abertura com uma mudança ("Replaced...") | Abrir com o que o jogo é, ou por que existe. A mudança aparece depois, dentro da sequência de versões. |
| Caixa TL;DR problema / decisão / evidência (`tldr`) | Nenhum modelo usa. Os mesmos passos contados em ordem: objetivo, primeira tentativa e como jogou, o que mudou, resultado. |
| Tom de currículo | Primeira pessoa com verbos comuns ("I started", "I noticed", "I was unhappy"), falhas e cortes ditos sem rodeio. |
| "Process & iterations" com decisões numeradas e "How I got there" | Seções com títulos simples na ordem em que as coisas aconteceram; uma mídia ao lado de cada afirmação. |
