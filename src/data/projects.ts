import type { Lang } from '../i18n/ui';

export type LocalizedString = Record<Lang, string>;

export type Project = {
  title: string;
  description: LocalizedString;
  imageUrl: string;
  badges: string[];
  repositoryUrl: string;
  underDevelopment: boolean;
  docUrl?: string;
  liveDemoUrl?: string;
};

const image = (file: string) => `https://cdn.rdvid.online/images/${file}`;

export const projects: Project[] = [
  {
    imageUrl: image('_ee852ade-2b90-4342-b5f6-c7194b277dac.jpg'),
    title: 'Market Scrappy',
    description: {
      en: 'Fullstack app to scrape Amazon search results and visualize them on the web.',
      br: 'Aplicação fullstack para scrapear resultados de busca da Amazon e visualizá-los na web.',
    },
    badges: ['typescript', 'express', 'redis', 'docker'],
    repositoryUrl: 'https://github.com/rdvid/fullstack-scrapy',
    underDevelopment: false,
    docUrl: 'https://fullstack-scrapy.onrender.com/api-docs',
    liveDemoUrl: 'https://frontend-scrappy.netlify.app/',
  },
  {
    imageUrl: image('_f981b484-5b4e-49aa-847e-e99c260a1e44.jpg'),
    title: 'Next Ecommerce',
    description: {
      en: 'Next.js storefront with product search and filtering.',
      br: 'Vitrine em Next.js com busca e filtros de produtos.',
    },
    badges: ['react', 'next', 'typescript', 'git'],
    repositoryUrl: 'https://github.com/rdvid/next-ecommerce',
    underDevelopment: true,
    docUrl: 'https://github.com/rdvid/next-ecommerce',
    liveDemoUrl: 'https://next-ecommerce-rdvid.vercel.app/home',
  },
  {
    imageUrl: image('_5f401606-0cd3-44e6-847c-a43a58746d77.jpg'),
    title: 'PDV IFood API',
    description: {
      en: 'Logistics API built through a partnership program with iFood.',
      br: 'API de logística desenvolvida em um programa de parceria com o iFood.',
    },
    badges: ['typescript', 'jest', 'postgres', 'git'],
    repositoryUrl: 'https://github.com/rdvid/pdv-api-ifood',
    underDevelopment: false,
    docUrl: 'https://concerned-pink-kingfisher.cyclic.app/api-docs',
  },
  {
    imageUrl: image('_24395a01-bdfc-4c4a-8d97-69e15cf91eae.jpg'),
    title: 'Nest Ecommerce API',
    description: {
      en: 'Online shop core built with NestJS modular architecture.',
      br: 'Núcleo de loja online com arquitetura modular NestJS.',
    },
    badges: ['typescript', 'nest', 'jest', 'docker'],
    repositoryUrl: 'https://github.com/rdvid/nest-ecommerce-api',
    underDevelopment: false,
    docUrl: 'https://github.com/rdvid/nest-ecommerce-api',
  },
  {
    imageUrl: image('_43f65027-0046-434c-9d77-3f9563b380ad.jpg'),
    title: 'Angular Pokedex',
    description: {
      en: 'Pokedex built with Angular and Ionic.',
      br: 'Pokédex feita com Angular e Ionic.',
    },
    badges: ['angular', 'typescript', 'playwright', 'ionic'],
    repositoryUrl: 'https://github.com/rdvid/angular-pokedex',
    underDevelopment: true,
    docUrl: 'https://github.com/rdvid/angular-pokedex',
  },
  {
    imageUrl: image('_abf94c6a-d5c3-46b3-8d40-54a247b4b15d.jpg'),
    title: 'Django Social Webshare',
    description: {
      en: 'Social app for sharing images found on the internet.',
      br: 'App social para compartilhar imagens encontradas na internet.',
    },
    badges: ['python', 'django', 'docker', 'javascript'],
    repositoryUrl: 'https://github.com/rdvid/django-social-webshare',
    underDevelopment: true,
    docUrl: 'https://github.com/rdvid/django-social-webshare',
  },
  {
    imageUrl: image('_eca23ca1-86de-4e0a-9de8-353d04f8bf71.jpg'),
    title: 'Flask Book API',
    description: {
      en: 'Microservice that sends EPUB/PDF files to Kindle via SMTP.',
      br: 'Microsserviço que envia arquivos EPUB/PDF para o Kindle via SMTP.',
    },
    badges: ['python', 'docker', 'git', 'flask'],
    repositoryUrl: 'https://github.com/rdvid/flask-book',
    underDevelopment: false,
    docUrl: 'https://github.com/rdvid/flask-book',
  },
  {
    imageUrl: image('_9112e8b3-8354-41ad-986f-c8c35a444aca.jpg'),
    title: 'React Book UI',
    description: {
      en: 'Form-based UI for the Flask Book API.',
      br: 'Interface baseada em formulários para a Flask Book API.',
    },
    badges: ['react', 'typescript', 'git', 'tailwind'],
    repositoryUrl: 'https://github.com/rdvid/react-book',
    underDevelopment: false,
    docUrl: 'https://github.com/rdvid/react-book',
  },
];
