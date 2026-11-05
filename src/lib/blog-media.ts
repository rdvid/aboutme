import { assetPath } from '../i18n/utils';

/** Blog hero and inline media: absolute CDN/R2 URLs pass through; repo paths use site base. */
export function resolveBlogMediaUrl(url: string | undefined): string | undefined {
  if (!url?.trim()) return undefined;
  const trimmed = url.trim();
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return assetPath(trimmed.replace(/^\//, ''));
}
