import { defaultLang, languages, ui, type Lang, type UiKey } from './ui';

/** Always `/aboutme/`-style, with a trailing slash. */
function baseUrl(): string {
  const base = import.meta.env.BASE_URL || '/';
  return base.endsWith('/') ? base : `${base}/`;
}

function baseSegment(): string {
  return baseUrl().replace(/^\/|\/$/g, '');
}

function withBase(path: string): string {
  const base = baseUrl().replace(/\/$/, '');
  if (!path || path === '/') return `${base}/`;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${base}${normalized}`;
}

export function isLang(value: string): value is Lang {
  return value in languages;
}

/** Path segments after the project base (`aboutme`). */
export function pathSegments(pathname: string): string[] {
  const segments = pathname.split('/').filter(Boolean);
  const base = baseSegment();
  if (base && segments[0] === base) return segments.slice(1);
  return segments;
}

export function getLangFromUrl(url: URL): Lang {
  const [maybeLang] = pathSegments(url.pathname);
  if (maybeLang && isLang(maybeLang) && maybeLang !== defaultLang) return maybeLang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: UiKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/**
 * Localized path (respects `base: /aboutme`).
 * English (default): `/aboutme/blog`
 * Portuguese: `/aboutme/br/blog`
 */
export function pathFor(lang: Lang, path = ''): string {
  const normalized = path === '/' ? '' : path.replace(/\/$/, '');
  const suffix = normalized.startsWith('/')
    ? normalized
    : normalized
      ? `/${normalized}`
      : '';

  if (lang === defaultLang) {
    return withBase(suffix || '/');
  }

  return withBase(`/${lang}${suffix}`);
}

/** Swap language while keeping the rest of the path. */
export function switchLangPath(pathname: string, next: Lang): string {
  const segments = pathSegments(pathname);

  if (segments[0] && isLang(segments[0])) {
    segments.shift();
  }

  const rest = segments.length ? `/${segments.join('/')}` : '';
  return pathFor(next, rest);
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
  return `${baseUrl()}${file.replace(/^\//, '')}`;
}
