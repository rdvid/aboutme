import type { UiLangs } from "../interface/Language";

export const languages = {
    en: 'English',
    fr: 'Français',
    br: 'Brazilian Portuguese',
    es: 'Spanish'
};
  
export const defaultLang = 'en';
  
export const showDefaultLang = false;

export const ui: UiLangs = {
    en: {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.contact': 'Contact',
        'nav.projects': 'Projects',
        'nav.technologies': 'Technologies',
        'nav.downloadcv': 'Download Resume',
        'nav.language.en': 'English',
        'nav.language.fr': 'French',
        'nav.language.es': 'Spanish',
        'nav.language.br': 'Brazilian Portuguese',
        'home.title': "I'm Rafael David",
        'home.subtitle': 'Software Developer',
        'home.second-subtitle': 'Piano Enthusiast',
    },
    fr: {
        'nav.home': 'Home',
        'nav.about': 'À propos',
        'nav.contact': 'Contact',
        'nav.projects': 'Projets',
        'nav.technologies': 'Les Technologies',
        'nav.downloadcv': 'Télécharger le CV',
        'nav.language.en': 'Anglais',
        'nav.language.fr': 'Français',
        'nav.language.es': 'Espagnol',
        'nav.language.br': 'Portugais',
        'home.title': "Je suis Rafael David",
        'home.subtitle': 'Développeur de logiciels',
        'home.second-subtitle': 'Étudiant en piano'
    },
    br: {
        'nav.home': 'Home',
        'nav.about': 'Sobre',
        'nav.contact': 'Contato',
        'nav.projects': 'Projetos',
        'nav.technologies': 'Tecnologias',
        'nav.downloadcv': 'Baixar CV',
        'nav.language.en': 'English',
        'nav.language.fr': 'French',
        'nav.language.es': 'Spanish',
        'nav.language.br': 'Brazilian Portuguese',
        'home.title': "Me chamo Rafael David",
        'home.subtitle': 'Desenvolvedor de Software',
        'home.second-subtitle': 'Aspirante à Pianista'
    },
    es: {
        'nav.home': 'Principal',
        'nav.about': 'Sobre',
        'nav.contact': 'Contacto',
        'nav.projects': 'Projectos',
        'nav.technologies': 'Tecnologias',
        'nav.downloadcv': 'Descargar Currículum',
        'nav.language.en': 'English',
        'nav.language.fr': 'French',
        'nav.language.es': 'Spanish',
        'nav.language.br': 'Brazilian Portuguese',
        'home.title': "Llamo me Rafael David",
        'home.subtitle': 'Desarrollador de Software',
        'home.second-subtitle': 'Entusiasta del Piano'
    }
} as const;