import type { UiLangs } from "../interface/Language";
import { enLang } from "./en";
import { esLang } from "./es";
import { frLang } from "./fr";
import { brLang } from "./ptbr";

export const languages = {
    en: 'English',
    fr: 'Français',
    br: 'Brazilian Portuguese',
    es: 'Spanish'
};
  
export const defaultLang = 'en';
  
export const showDefaultLang = false;

export const ui: UiLangs = {
    en: enLang,
    fr: frLang,
    br: brLang,
    es: esLang
} as const;