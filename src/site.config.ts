// Central place for site-wide settings.
export const siteConfig = {
  name: 'Bruno Santos Briseno - Game Designer',
  ownerName: 'Bruno Santos Briseno',
  // Main specialty, shown in the home headline
  specialty: 'Game Designer',
  // Short tagline shown in the home hero
  tagline: 'Game designer across systems (tactics), rhythm combat with narrative, and asymmetric multiplayer, with 13+ years in game development.',
  // Availability badge. Leave empty ('') to hide it.
  availability: 'Open to game design roles',
  languages: ['Portuguese (native)', 'English (fluent)'],
  description: 'Game design portfolio: systems design, rhythm combat and asymmetric multiplayer case studies, plus 13+ years of game development experience.',
  email: 'brunosbriseno@gmail.com',
  linkedin: 'https://www.linkedin.com/in/brunobriseno',
  artstation: 'https://awkner.artstation.com',
  // Put resume.pdf in /public and set to '/resume.pdf' (leave empty to hide the link and show "available on request").
  resumeUrl: '',
  // Default social preview image (1200x630 PNG in /public).
  ogImage: '/og-default.png',
  // Bump when projects change (YYYY-MM)
  lastUpdated: '2026-11',
};

export const statusLabels = {
  released: 'Released',
  prototype: 'Prototype',
  'game-jam': 'Game jam',
  'in-development': 'In development',
  unreleased: 'Unreleased',
  redesign: 'Redesign',
  'paper-prototype': 'Paper prototype',
} as const;
