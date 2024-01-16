import { ui, defaultLang } from '../i18n/ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: string) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export var darkTheme: boolean = false;

export function switchTheme(){
  darkTheme = !darkTheme
}

// export function switchLanguageOfUrl(url: string, lang: string){
//   let currentlyLang = url.
//   const newUrl = url.replace()
// }