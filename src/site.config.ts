// Central place for site-wide settings.
export const siteConfig = {
  name: 'Bruno Santos Briseno - Game Designer',
  ownerName: 'Bruno Santos Briseno',
  // Main specialty, shown in the home headline
  specialty: 'Game Designer',
  // Short tagline shown in the home hero
  tagline: 'For 13+ years I have shipped games as a senior 3D generalist and art lead, designing along the way: tactical and RPG systems for Chroma Squad and Galaxy of Pen & Paper, the customization system of Spirit of the Island, and game concepts pitched to Apple and Nintendo. In 2026 I designed three original prototypes: a tactics roguelike, a call-and-response rhythm game and a Roblox asymmetric co-op.',
  languages: ['Portuguese (native)', 'English (fluent)'],
  description: 'Game design portfolio of Bruno Santos Briseno: 13+ years shipping games as a senior 3D generalist and art lead with design work throughout, plus case studies on a tactics roguelike, a call-and-response rhythm game and a Roblox asymmetric co-op.',
  email: 'brunosbriseno@gmail.com',
  linkedin: 'https://www.linkedin.com/in/brunobriseno',
  artstation: 'https://awkner.artstation.com',
  // Put resume.pdf in /public and set to '/resume.pdf' (leave empty to hide the link and show "available on request").
  resumeUrl: '/resume.pdf',
  // Default social preview image (1200x630 PNG in /public).
  ogImage: '/og-default.png',
  // Bump when projects change (YYYY-MM)
  lastUpdated: '2026-11',
};

export const statusLabels = {
  released: 'Released',
  prototype: 'Prototype',
  playable: 'Playable prototype',
  'game-jam': 'Game jam',
  'in-development': 'In development',
  unreleased: 'Unreleased',
  redesign: 'Redesign',
  'paper-prototype': 'Paper prototype',
} as const;
