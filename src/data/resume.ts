// Single source of truth for the resume. Used by /resume/ (web) and /resume/print/ (PDF source).
// Fields named `web*` are shown only on the web page; everything else appears on both.
import { siteConfig } from '../site.config';

export const portfolioUrl = 'https://awkner.github.io/game-design-portfolio/';
export const portfolioLabel = 'awkner.github.io/game-design-portfolio';
export const stripScheme = (u: string) => u.replace(/^https:\/\/(www\.)?/, '');

export const header = {
  name: 'Bruno S. Briseno',
  headline: 'Game Designer / Senior 3D Generalist',
  location: 'Brazil (GMT-3), remote',
  email: siteConfig.email,
  linkedin: siteConfig.linkedin,
  artstation: siteConfig.artstation,
};

export const profile =
  "13 years shipping games, mostly as a senior 3D generalist and art lead, with informal design contributions at three studios: mechanics and tactical/RPG systems at Behold Studios, the Spirit of the Island customization system, and game concepts pitched at Kluge Interactive to partners including Apple and Nintendo. In 2026 I directed the design of three original prototypes (tactics roguelike, rhythm combat, Roblox asymmetric co-op), documented as case studies. Degree and postgraduate degree in game design and development.";

export const titleNote = 'No official game designer title: the design work below was informal and uncredited.';

export const projectsHeading = { title: 'Design projects', sub: '2026 · solo design direction, AI-assisted implementation' };

export type ResumeProject = { slug: string; title: string; meta: string; points: string[] };
export const projects: ResumeProject[] = [
  {
    slug: 'diceforce',
    title: 'DICEFORCE',
    meta: 'Hex-grid tactics roguelike · PC (Godot, C#) · Prototype · since Aug 2026',
    points: [
      'Replaced a hand-tuned initiative clock with one rule, ascending die size, so the 17 hand-set values could be deleted. Enemy faces are shown before they act.',
      'Set the bot-bench method and read a 2,400-match sweep: 74 hit the round cap, but 58 of them finished when given 40 rounds, so only 16 (0.7%) were real stalemates. Conclusions must now hold across three bot profiles.',
    ],
  },
  {
    slug: 'beatdown-remix',
    title: 'BEATDOWN REMIX',
    meta: 'Rhythm combat, call and response · Web (TypeScript) · Prototype · Sep to Nov 2026',
    points: [
      'Replaced a pulse-reading fight loop with call and response. Replaced boss HP with finish tiers (under 20% attack score is a draw, under 70% a T.K.O., 70% or more a K.O.) after simulations showed about a 3x spread in damage between players.',
      'Moved hit feedback to the input after a playtest found it about 170 ms late. One authored chart, 99 notes, two boss twists, deterministic engine.',
    ],
  },
  {
    slug: 'roblox-anomaly',
    title: 'Não Tire o Olho (working title)',
    meta: 'Asymmetric co-op · Roblox (Luau) · Prototype · Nov 2026',
    points: [
      'Turned a spot-the-difference game into a game of work: an invisible Ghost walks the house and changes objects only where no Watcher is looking, defined by a server-checked rule (camera frustum, nine points per object, wall-aware rays, 1.5 s memory).',
      'Set the rule that no check may leak which objects are altered. Dropped a "no shadow" anomaly because it was invisible in Studio and depends on graphics settings. No outside playtest yet.',
    ],
  },
];

export type Game = { title: string; year?: string; note?: string };
export type Job = {
  role: string;
  studio: string;
  when: string;
  /** Short context shown on the web page only (what kind of project). */
  webContext?: string;
  games?: Game[];
  design?: string;
  points: string[];
  webPoints?: string[];
};
export const jobs: Job[] = [
  {
    role: 'Senior Generalist 3D Artist',
    studio: 'PM Studios',
    when: 'Mar 2026 to present',
    webContext: 'Top-down 3D action RPG.',
    games: [{ title: 'Roshpit Champions 2', note: 'unreleased; PC/Steam; 17 classes, 18 environments; team of 8' }],
    points: ['Rebuilt the legacy animation set to the current quality bar.'],
    webPoints: ['Environment assembly and trim sheet authoring for the art team.'],
  },
  {
    role: 'Senior Generalist 3D Artist',
    studio: 'Kluge Interactive',
    when: 'Aug 2024 to Dec 2025',
    webContext: '8 Meta Horizon experiences for mobile VR (titles not named).',
    design: 'Designed game concepts, rapid prototypes and pitch material for new projects, including pitches to Apple and Nintendo.',
    points: ['Art: characters, rigging, environments and optimization for 8 Meta Horizon experiences on mobile VR.'],
    webPoints: ['Built high-fidelity visual targets and deck assets that supported pitches to partners such as Nintendo and Apple.'],
  },
  {
    role: 'Lead 3D Artist / Senior 3D Artist',
    studio: '1M Bits Horde',
    when: '2020 to 2022; Jul 2023 to Jul 2024',
    webContext: 'Lead 3D Artist 2020 to 2022; Senior 3D Artist (second stint) Jul 2023 to Jul 2024.',
    games: [{ title: 'Spirit of the Island', year: '2022' }, { title: 'Nested Lands' }],
    design: 'Designed and built the character customization system of Spirit of the Island (40+ archetypes, dozens of interchangeable outfits and accessories) as an extensible system.',
    points: ['Art: visual direction across four 3D artists on Spirit of the Island.'],
    webPoints: [
      'Spirit of the Island: modeled, rigged and animated the 40+ archetypes and the outfits and accessories behind the customization system.',
      'Nested Lands: modeling, rigging and animation of realistic characters, props and environments; clothing, accessory and hair variety for character customization; supported 3D art direction and visual consistency.',
    ],
  },
  {
    role: '3D Generalist & Pixel Artist',
    studio: 'Behold Studios',
    when: 'Feb 2013 to Jul 2022',
    webContext: 'Award-winning indie titles, from concept to Unity implementation.',
    games: [
      { title: 'Chroma Squad', year: '2015' },
      { title: 'Galaxy of Pen & Paper', year: '2017' },
      { title: 'Out of Space', year: '2020' },
      { title: 'Cosplay Club' },
    ],
    design: 'Mechanics and RPG/tactical systems on Chroma Squad and Galaxy of Pen & Paper; design input on Out of Space; structured the character customization systems of Cosplay Club.',
    points: ['Art: core artist on four indie titles, from concept to Unity implementation.'],
    webPoints: ['3D environments, pixel art characters, UI assets and modular character systems. Also collaborated on VFX.'],
  },
  {
    role: 'Pixel Artist',
    studio: 'Armor Games Studios',
    when: '2019',
    games: [{ title: 'Jet Lancer' }],
    points: ['Character portraits, dialogue assets, animated cutscenes and UI support.'],
  },
];

export const skills: [string, string[]][] = [
  ['Design', ['systems and rule design', 'tactics/RPG', 'progression and customization', 'rhythm feel and feedback', 'asymmetric multiplayer', 'playtesting and bot benches', 'design docs and rule ledgers']],
  ['Prototyping', ['Unity', 'Godot C#', 'Roblox Studio/Luau', 'TypeScript/web', 'AI-assisted implementation from my specs']],
  ['Art', ['Blender', 'ZBrush', 'Substance', 'Maya', 'rigging and animation']],
  ['Production', ['Jira', 'Git/Plastic SCM', 'agile']],
];

export const education = [
  { school: 'Centro Universitário FMU | FIAM-FAAM', degree: 'Postgraduate Degree, Digital Game Development', years: '2014-2015' },
  { school: 'Centro Universitário IESB', degree: 'Undergraduate Degree, Game Design and Development', years: '2011-2014' },
];

export const gamesLine = (games: Game[]) =>
  games.map((g) => `${g.title}${g.year ? ` (${g.year})` : ''}${g.note ? ` (${g.note})` : ''}`).join(', ');
