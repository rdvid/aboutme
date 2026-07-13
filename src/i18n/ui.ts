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
    'about.lead':
      'Brazil-based web developer focused on backend systems, teaching, and continuous learning.',
    'about.who.title': 'Who I am',
    'about.who.body':
      "Hello! I'm Rafael David, a results-driven web developer with a knack for backend solutions. With an academic background in business management, I bring creativity, dedication, and a high level of commitment to the table. Whether it's tackling challenging projects or collaborating with multicultural teams, I thrive in environments that value innovation, responsibility, and excellence.",
    'about.now.title': "What I'm doing",
    'about.now.body':
      "I'm currently working with Cubos Academy as a backend instructor, mentoring new developers through pair programming and teaching web development with JavaScript across the Node.js ecosystem — Express REST APIs and React on the frontend.",
    'about.strengths.title': 'Key strengths',
    'about.strengths.body':
      'What sets me apart is dedication to continuous learning and adaptability. In a rapidly evolving software market, I stay close to emerging trends and technologies. Beyond technical skills, clear communication and collaboration help me build strong working relationships with colleagues, stakeholders, and clients.',
    'about.hobbies.title': 'Outside of work',
    'about.hobbies.body':
      "Away from the keyboard, I'm an avid reader and classical piano student. Philosophy, old Russian writers, and piano practice keep creativity sharp and help me approach challenges with a fresh perspective.",
    'about.description': 'About Rafael David — software developer and instructor.',

    'projects.title': 'Projects',
    'projects.lead':
      "A selection of APIs, frontends, and experiments I've built while learning and shipping.",
    'projects.description': 'Selected projects by Rafael David.',
    'projects.status.dev': 'In development',
    'projects.status.ready': 'Available',
    'projects.repo': 'Repository',
    'projects.docs': 'Docs',
    'projects.demo': 'Live demo',

    'blog.title': 'Blog',
    'blog.lead': 'Writing about backend work, teaching, and things I learn along the way.',
    'blog.description':
      'Notes on software development, teaching, and building on the web.',
    'blog.read': 'Read post →',
    'blog.back': '← Back to blog',
    'blog.updated': 'Updated',

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
    'about.lead':
      'Desenvolvedor web no Brasil, focado em backend, ensino e aprendizado contínuo.',
    'about.who.title': 'Quem sou eu',
    'about.who.body':
      'Olá! Sou Rafael David, um desenvolvedor web orientado a resultados, com foco em soluções de backend. Com formação acadêmica em gestão de negócios, trago criatividade, dedicação e alto comprometimento. Seja em projetos desafiadores ou em times multiculturais, me saio bem em ambientes que valorizam inovação, responsabilidade e excelência.',
    'about.now.title': 'O que estou fazendo',
    'about.now.body':
      'Atualmente trabalho na Cubos Academy como instrutor de backend, mentorando novos desenvolvedores com pair programming e ensinando desenvolvimento web com JavaScript no ecossistema Node.js — APIs REST com Express e React no frontend.',
    'about.strengths.title': 'Pontos fortes',
    'about.strengths.body':
      'O que me diferencia é a dedicação ao aprendizado contínuo e à adaptação. Em um mercado que muda rápido, acompanho tendências e tecnologias emergentes. Além das habilidades técnicas, comunicação clara e colaboração me ajudam a construir boas relações com colegas, stakeholders e clientes.',
    'about.hobbies.title': 'Fora do trabalho',
    'about.hobbies.body':
      'Longe do teclado, sou leitor ávido e estudante de piano clássico. Filosofia, escritores russos e prática de piano mantêm a criatividade afiada e me ajudam a encarar desafios com um olhar novo.',
    'about.description': 'Sobre Rafael David — desenvolvedor de software e instrutor.',

    'projects.title': 'Projetos',
    'projects.lead':
      'Uma seleção de APIs, frontends e experimentos que construí enquanto aprendia e entregava.',
    'projects.description': 'Projetos selecionados de Rafael David.',
    'projects.status.dev': 'Em desenvolvimento',
    'projects.status.ready': 'Disponível',
    'projects.repo': 'Repositório',
    'projects.docs': 'Docs',
    'projects.demo': 'Demo ao vivo',

    'blog.title': 'Blog',
    'blog.lead': 'Escrevo sobre backend, ensino e o que aprendo pelo caminho.',
    'blog.description':
      'Notas sobre desenvolvimento de software, ensino e construção na web.',
    'blog.read': 'Ler post →',
    'blog.back': '← Voltar ao blog',
    'blog.updated': 'Atualizado',

    '404.title': 'Não encontrado',
    '404.heading': 'Página não encontrada',
    '404.body': 'Essa rota não existe neste site.',
    '404.home': 'Voltar ao início',

    'site.description':
      'Desenvolvedor de software no Brasil. Backend, ensino e escrita sobre construção na web.',
  },
} as const;

export type UiKey = keyof typeof ui.en;
