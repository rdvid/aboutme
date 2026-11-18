export const languages = {
  en: 'English',
  br: 'Português',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

export const htmlLang: Record<Lang, string> = {
  en: 'en',
  br: 'pt-BR',
};

export const dateLocale: Record<Lang, string> = {
  en: 'en-US',
  br: 'pt-BR',
};

export const ui = {
  en: {
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.blog': 'Blog',
    'nav.resume': 'Resume',
    'nav.menu': 'Open menu',
    'nav.lang': 'Language',

    'home.headline': "I'm Rafael David",
    'home.lead':
      'Software developer and backend instructor based in Brazil. I build web APIs, teach Node.js, and write about what I\'m learning.',
    'home.cta.about': 'About me',
    'home.cta.blog': 'Read the blog',
    'home.portraitAlt': 'Portrait of Rafael David',

    'about.title': 'About',
    'about.masthead.kicker': 'Profile',
    'about.lead':
      'Brazil-based Software Engineer focused on backend systems, APIs, data, and cloud infrastructure.',
    'about.description':
      'Brazil-based Software Engineer focused on backend systems, APIs, data, and cloud infrastructure.',
    'about.resumeCta': 'Download resume',
    'about.nav.skills': 'Skills',
    'about.nav.timeline': 'Timeline',
    'about.nav.hobbies': 'Hobbies',
    'about.nav.music': 'Music',
    'about.section.skills': 'Skills & tools',
    'about.section.timeline': 'Timeline',
    'about.section.experience': 'Experience',
    'about.section.education': 'Education',
    'about.section.hobbies': 'Outside of work',
    'about.spotify.title': 'Most played on Spotify',
    'about.spotify.hint': 'A peek at what I have been looping lately — no judgment.',
    'about.spotify.empty': 'Paste a Spotify top-tracks response into src/data/spotify-top.json.',
    'about.spotify.open': 'Open in Spotify',
    'about.present': 'Present',

    'projects.title': 'Projects',
    'projects.lead':
      'Pinned on GitHub — APIs, frontends, and experiments I am actively showcasing.',
    'projects.description': 'Selected projects by Rafael David.',
    'projects.status.dev': 'In development',
    'projects.status.ready': 'Available',
    'projects.repo': 'Repository',
    'projects.docs': 'Docs',
    'projects.demo': 'Live demo',
    'projects.details': 'Details',
    'projects.close': 'Close',
    'projects.stars': 'stars',
    'projects.noCover': 'No cover image',
    'projects.pinnedNote': 'Pinned on GitHub',
    'projects.empty': 'No pinned projects loaded. Try again after the next deploy.',
    'projects.ctaAll': 'Browse all repositories',
    'projects.ctaAllHint': 'Pinned projects are a highlight reel — the full list lives on GitHub.',

    'blog.title': 'Lab Letters',
    'blog.lead': 'Experiments, ideas, and things along the way.',
    'blog.description':
      'A personal space to share things I build, ideas I explore, and thoughts I collect along the way. From software and side projects to business, philosophy, and everything in between.',
    'blog.read': 'Read post →',
    'blog.readNote': 'Read the note',
    'blog.back': '← Back to blog',
    'blog.updated': 'Updated',
    'blog.categories': 'Categories',
    'blog.allNotes': 'All notes',
    'blog.featured': 'Featured',
    'blog.recentNotes': 'Recent notes',
    'blog.notesCount': 'notes',
    'blog.emptyCategory': 'This is the only note in this category so far.',
    'blog.minRead': 'min read',
    'blog.reads': 'reads',
    'blog.readingNow': 'Reading now',
    'blog.readingNowTitle': 'On keeping a notebook in two hands',
    'blog.readingNowProgress': '22 min · 64% read',
    'blog.draft': 'Draft',

    '404.title': 'Not found',
    '404.heading': 'Page not found',
    '404.body': "That route doesn't exist on this site.",
    '404.home': 'Back home',

    'site.description':
      'Software developer based in Brazil. Backend, teaching, and writing about building things on the web.',
  },
  br: {
    'nav.about': 'Sobre',
    'nav.projects': 'Projetos',
    'nav.blog': 'Blog',
    'nav.resume': 'Currículo',
    'nav.menu': 'Abrir menu',
    'nav.lang': 'Idioma',

    'home.headline': 'Eu sou Rafael David',
    'home.lead':
      'Desenvolvedor de software e instrutor de backend no Brasil. Construo APIs web, ensino Node.js e escrevo sobre o que estou aprendendo.',
    'home.cta.about': 'Sobre mim',
    'home.cta.blog': 'Ler o blog',
    'home.portraitAlt': 'Retrato de Rafael David',

    'about.title': 'Sobre',
    'about.masthead.kicker': 'Perfil',
    'about.lead':
      'Engenheiro de Software baseado no Brasil, com foco em sistemas backend, APIs, dados e infraestrutura em cloud.',
    'about.description':
      'Engenheiro de Software baseado no Brasil, com foco em sistemas backend, APIs, dados e infraestrutura em cloud.',
    'about.resumeCta': 'Baixar currículo',
    'about.nav.skills': 'Skills',
    'about.nav.timeline': 'Linha do tempo',
    'about.nav.hobbies': 'Hobbies',
    'about.nav.music': 'Música',
    'about.section.skills': 'Skills e ferramentas',
    'about.section.timeline': 'Linha do tempo',
    'about.section.experience': 'Experiência',
    'about.section.education': 'Formação',
    'about.section.hobbies': 'Fora do trabalho',
    'about.spotify.title': 'Mais tocadas no Spotify',
    'about.spotify.hint': 'Um pedaço do que eu tenho escutado em loop — sem julgamentos.',
    'about.spotify.empty': 'Cole a resposta de top tracks do Spotify em src/data/spotify-top.json.',
    'about.spotify.open': 'Abrir no Spotify',
    'about.present': 'Atual',

    'projects.title': 'Projetos',
    'projects.lead':
      'Fixados no GitHub — APIs, frontends e experimentos que estou destacando agora.',
    'projects.description': 'Projetos selecionados de Rafael David.',
    'projects.status.dev': 'Em desenvolvimento',
    'projects.status.ready': 'Disponível',
    'projects.repo': 'Repositório',
    'projects.docs': 'Docs',
    'projects.demo': 'Demo ao vivo',
    'projects.details': 'Detalhes',
    'projects.close': 'Fechar',
    'projects.stars': 'estrelas',
    'projects.noCover': 'Sem imagem de capa',
    'projects.pinnedNote': 'Fixado no GitHub',
    'projects.empty': 'Nenhum projeto fixado carregado. Tente de novo após o próximo deploy.',
    'projects.ctaAll': 'Ver todos os repositórios',
    'projects.ctaAllHint': 'Os fixados são um recorte — a lista completa está no GitHub.',

    'blog.title': 'Cartas do Laboratório',
    'blog.lead': 'Escrevo sobre backend, ensino e o que aprendo pelo caminho.',
    'blog.description':
      'Notas sobre desenvolvimento de software, ensino e construção na web.',
    'blog.read': 'Ler post →',
    'blog.readNote': 'Ler a nota',
    'blog.back': '← Voltar ao blog',
    'blog.updated': 'Atualizado',
    'blog.categories': 'Categorias',
    'blog.allNotes': 'Todas as notas',
    'blog.featured': 'Destaque',
    'blog.recentNotes': 'Notas recentes',
    'blog.notesCount': 'notas',
    'blog.emptyCategory': 'Esta é a única nota nesta categoria por enquanto.',
    'blog.minRead': 'min de leitura',
    'blog.reads': 'leituras',
    'blog.readingNow': 'Lendo agora',
    'blog.readingNowTitle': 'Sobre manter um caderno com as duas mãos',
    'blog.readingNowProgress': '22 min · 64% lidos',
    'blog.draft': 'Rascunho',

    '404.title': 'Não encontrado',
    '404.heading': 'Página não encontrada',
    '404.body': 'Essa rota não existe neste site.',
    '404.home': 'Voltar ao início',

    'site.description':
      'Desenvolvedor de software no Brasil. Backend, ensino e escrita sobre construção na web.',
  },
} as const;

export type UiKey = keyof typeof ui.en;
