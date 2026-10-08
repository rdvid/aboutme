import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';
import { formatDate } from '../i18n/utils';

export type BlogEntry = CollectionEntry<'blog'>;

const WORDS_PER_MINUTE = 200;

export async function getBlogPosts(lang: Lang): Promise<BlogEntry[]> {
  const posts = await getCollection('blog', ({ data }) => {
    if (data.lang !== lang) return false;
    if (!data.draft) return true;
    return import.meta.env.DEV;
  });

  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function postCategory(post: BlogEntry): string {
  return post.data.category ?? post.data.tags[0] ?? 'Notes';
}

export function estimateReadTimeMinutes(body: string | undefined, override?: number): number {
  if (override != null) return override;
  const words = (body ?? '').trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
}

export function formatReadTime(minutes: number, minReadLabel: string): string {
  return `${minutes} ${minReadLabel}`;
}

export function formatShortDate(date: Date, lang: Lang): string {
  const locale = lang === 'br' ? 'pt-BR' : 'en-US';
  return date.toLocaleDateString(locale, { month: 'short', day: 'numeric' });
}

export function collectCategories(posts: BlogEntry[], allLabel: string): string[] {
  const set = new Set(posts.map(postCategory));
  return [allLabel, ...[...set].sort((a, b) => a.localeCompare(b))];
}

export function categoryCount(posts: BlogEntry[], category: string, allLabel: string): number {
  if (category === allLabel) return posts.length;
  return posts.filter((p) => postCategory(p) === category).length;
}

export { formatDate };
