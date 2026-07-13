import { defaultLang, languages, ui, type Lang, type UiKey } from './ui';

export function isLang(value: string): value is Lang {
  return value in languages;
}

export function getLangFromUrl(url: URL): Lang {
  const [, maybeLang] = url.pathname.split('/');
  if (maybeLang && isLang(maybeLang)) return maybeLang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: UiKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

export function langStaticPaths() {
  return (Object.keys(languages) as Lang[]).map((lang) => ({
    params: { lang },
  }));
}

/** Build a localized path, e.g. pathFor('en', '/blog') => '/en/blog' */
export function pathFor(lang: Lang, path = ''): string {
  const normalized = path === '/' ? '' : path.replace(/\/$/, '');
  const suffix = normalized.startsWith('/') ? normalized : normalized ? `/${normalized}` : '';
  return `/${lang}${suffix}`;
}

/** Swap language while keeping the rest of the path. */
export function switchLangPath(pathname: string, next: Lang): string {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length === 0) return `/${next}`;
  if (isLang(segments[0])) {
    segments[0] = next;
  } else {
    segments.unshift(next);
  }
  return `/${segments.join('/')}`;
}

export function formatDate(date: Date, lang: Lang): string {
  const locale = lang === 'br' ? 'pt-BR' : 'en-US';
  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function postSlug(id: string): string {
  return id.includes('/') ? id.split('/').pop()! : id;
}
