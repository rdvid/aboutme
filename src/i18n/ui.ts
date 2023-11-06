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
        'nav.downloadcv': 'Download CV',
        'nav.language.en': 'English',
        'nav.language.fr': 'French',
        'nav.language.es': 'Spanish',
        'nav.language.br': 'Brazilian Portuguese',
        'home.title': "I'm Rafael David",
        'home.subtitle': 'Backend Software Developer',
    },
    fr: {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.contact': 'Contact',
        'nav.projects': 'Projects',
        'nav.technologies': 'Technologies',
        'nav.downloadcv': 'Download CV',
        'nav.language.en': 'English',
        'nav.language.fr': 'French',
        'nav.language.es': 'Spanish',
        'nav.language.br': 'Brazilian Portuguese',
        'home.title': "I'm Rafael David",
        'home.subtitle': 'Backend Software Developer',
    },
    br: {
        'nav.home': 'Home',
        'nav.about': 'Sobre',
        'nav.contact': 'Contato',
        'nav.projects': 'Projetos',
        'nav.technologies': 'Tecnologias',
        'nav.downloadcv': 'Download CV',
        'nav.language.en': 'English',
        'nav.language.fr': 'French',
        'nav.language.es': 'Spanish',
        'nav.language.br': 'Brazilian Portuguese',
        'home.title': "Me chamo Rafael David",
        'home.subtitle': 'Desenvolvedor Backend',
    },
    es: {
        'nav.home': 'Principal',
        'nav.about': 'Sobre',
        'nav.contact': 'Contacto',
        'nav.projects': 'Projectos',
        'nav.technologies': 'Tecnologias',
        'nav.downloadcv': 'Download CV',
        'nav.language.en': 'English',
        'nav.language.fr': 'French',
        'nav.language.es': 'Spanish',
        'nav.language.br': 'Brazilian Portuguese',
        'home.title': "Me llamo Rafael David",
        'home.subtitle': 'Desenvolvedor Backend',
    }
} as const;