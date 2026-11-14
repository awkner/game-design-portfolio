// Central place for site-wide settings. Edit the TODO values.
export const siteConfig = {
  // TODO: your site name
  name: 'Your Name - Game Designer',
  // TODO: your name
  ownerName: 'Your Name',
  // TODO: your main specialty (one, maybe two), shown in the home headline
  specialty: 'Systems Designer',
  // TODO: short tagline shown in the home hero
  tagline: 'Game designer focused on systems, levels and player experience.',
  // TODO: availability badge. Leave empty ('') to hide it.
  availability: 'Open to junior game design roles',
  // TODO: languages and fluency
  languages: ['Portuguese (native)', 'English (fluent)'],
  description: 'Game design portfolio: case studies, systems design and playable prototypes.',
  // TODO: replace with real contact links
  email: 'hello@example.com',
  linkedin: 'https://www.linkedin.com/in/your-handle',
  itch: 'https://your-handle.itch.io',
  // TODO: put resume.pdf in /public and set to '/resume.pdf' (leave empty to hide the link)
  resumeUrl: '',
  // Default social preview image (1200x630 PNG in /public).
  ogImage: '/og-default.png',
  // TODO: bump when projects change (YYYY-MM)
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
