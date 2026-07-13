import { defaultLang, languages, ui, type Lang, type UiKey } from './ui';

function baseSegment(): string {
  return import.meta.env.BASE_URL.replace(/^\/|\/$/g, '');
}

function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${base}${normalized}`;
}

export function isLang(value: string): value is Lang {
  return value in languages;
}

export function getLangFromUrl(url: URL): Lang {
  const segments = url.pathname.split('/').filter(Boolean);
  const base = baseSegment();
  const start = base && segments[0] === base ? 1 : 0;
  const maybeLang = segments[start];
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

/** Build a localized path, e.g. pathFor('en', '/blog') => '/aboutme/en/blog' */
export function pathFor(lang: Lang, path = ''): string {
  const normalized = path === '/' ? '' : path.replace(/\/$/, '');
  const suffix = normalized.startsWith('/') ? normalized : normalized ? `/${normalized}` : '';
  return withBase(`/${lang}${suffix}`);
}

/** Swap language while keeping the rest of the path. */
export function switchLangPath(pathname: string, next: Lang): string {
  const segments = pathname.split('/').filter(Boolean);
  const base = baseSegment();
  const langIndex = base && segments[0] === base ? 1 : 0;

  if (segments.length <= langIndex) {
    return withBase(`/${next}`);
  }

  if (isLang(segments[langIndex])) {
    segments[langIndex] = next;
  } else {
    segments.splice(langIndex, 0, next);
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

export function assetPath(file: string): string {
  return `${import.meta.env.BASE_URL}${file.replace(/^\//, '')}`;
}
