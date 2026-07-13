export const site = {
  name: 'rdvid',
  title: '</rdvid>',
  author: 'Rafael David',
  url: 'https://rdvid.github.io/aboutme',
  email: 'mailto:rafael@rdvid.com.br',
  social: {
    github: 'https://github.com/rdvid',
    linkedin: 'https://www.linkedin.com/in/rdvid/',
  },
  resume: {
    en: 'en-resume-022024.pdf',
    br: 'br-resume-022024.pdf',
  },
} as const;

export const navKeys = [
  { href: '/about', key: 'nav.about' },
  { href: '/projects', key: 'nav.projects' },
  { href: '/blog', key: 'nav.blog' },
] as const;
