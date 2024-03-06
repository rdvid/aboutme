// export interface langFields {
//     'nav.home': string;
//     'nav.about': string;
//     'nav.contact': string;
//     'nav.projects': string;
//     'nav.technologies': string;
//     'nav.downloadcv': string;
//     'nav.language.en': string;
//     'nav.language.fr': string;
//     'nav.language.es': string;
//     'nav.language.br': string;
//     'home.title': string;
//     'home.subtitle': string;
//     'home.second-subtitle': string;
//     'about.intro.title': string;
//     'about.intro': string;
//     'about.nowdays.title': string;
//     'about.nowdays': string;
//     'about.keypoints.title': string;
//     'about.keypoints': string;
//     'about.hobbies.title': string;
//     'about.hobbies': string;
// }

export interface langFields {
    [key: string]: string;
}

export interface UiLangs {
    en: langFields,
    fr: langFields,
    br: langFields,
    es: langFields
}