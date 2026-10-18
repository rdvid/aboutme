import matter from 'gray-matter';
import { z } from 'astro/zod';
import type { Lang } from '../i18n/ui';
import type { LocalizedString } from './projects.types';
import { getGitHubToken } from './github-token';

const manifestSchema = z.object({
  title: z.string().optional(),
  status: z.enum(['ready', 'dev']).default('ready'),
  badges: z.array(z.string()).optional(),
  docUrl: z.string().url().optional(),
  liveDemoUrl: z.string().url().optional(),
  description: z.object({
    en: z.string(),
    br: z.string(),
  }),
});

export type ParsedManifest = {
  title?: string;
  underDevelopment: boolean;
  badges?: string[];
  docUrl?: string;
  liveDemoUrl?: string;
  description: LocalizedString;
  bodyMarkdown: string;
};

export function parseManifest(raw: string): ParsedManifest | null {
  try {
    const { data, content } = matter(raw);
    const parsed = manifestSchema.parse(data);
    return {
      title: parsed.title,
      underDevelopment: parsed.status === 'dev',
      badges: parsed.badges,
      docUrl: parsed.docUrl,
      liveDemoUrl: parsed.liveDemoUrl,
      description: parsed.description,
      bodyMarkdown: content.trim(),
    };
  } catch {
    return null;
  }
}

export async function fetchRawFile(
  owner: string,
  repo: string,
  branch: string,
  path: string,
): Promise<string | null> {
  const url = `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${path}`;
  const res = await fetch(url, { headers: authHeaders() });
  if (res.status === 404) return null;
  if (!res.ok) return null;
  return res.text();
}

function authHeaders(): HeadersInit {
  const token = getGitHubToken();
  const headers: HeadersInit = { Accept: 'application/vnd.github.raw' };
  if (token) headers.Authorization = `Bearer ${token}`;
  return headers;
}

export function rawCoverUrl(owner: string, repo: string, branch: string): string {
  return `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/public/cover.png`;
}

export function fallbackDescription(
  githubDescription: string | null,
  repoName: string,
): LocalizedString {
  const text =
    githubDescription?.trim() ||
    `Open-source project: ${repoName.replace(/-/g, ' ')}.`;
  return { en: text, br: text };
}

export function fallbackBadges(topics: string[], primaryLanguage: string | null): string[] {
  const badges = [...topics.slice(0, 3)];
  if (primaryLanguage) {
    const lang = primaryLanguage.toLowerCase();
    if (!badges.some((b) => b.toLowerCase() === lang)) {
      badges.unshift(lang);
    }
  }
  return badges.length ? badges : ['open-source'];
}

/** Placeholder path resolved via assetPath in the page layer */
export const PROJECT_COVER_PLACEHOLDER = 'project-cover-placeholder.svg';

export function displayTitle(manifestTitle: string | undefined, repoName: string): string {
  if (manifestTitle?.trim()) return manifestTitle.trim();
  return repoName
    .split(/[-_]/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

export function slugFromRepo(name: string): string {
  return name.toLowerCase();
}

export type { Lang };
