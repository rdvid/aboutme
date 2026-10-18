import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { marked } from 'marked';
import { site } from '../data/site';
import { fetchPinnedRepositories } from './github-pinned';
import {
  fetchRawFile,
  fallbackBadges,
  fallbackDescription,
  parseManifest,
  rawCoverUrl,
  slugFromRepo,
  displayTitle,
} from './project-manifest';
import type { PortfolioProject, PortfolioProjectSnapshot } from './projects.types';

const SNAPSHOT_PATH = fileURLToPath(new URL('../data/projects.snapshot.json', import.meta.url));
const MAX_BADGES = 3;

function githubUsername(): string {
  return site.githubUsername;
}

function readSnapshot(): PortfolioProject[] | null {
  if (!existsSync(SNAPSHOT_PATH)) return null;
  try {
    const raw = readFileSync(SNAPSHOT_PATH, 'utf8');
    const data = JSON.parse(raw) as PortfolioProjectSnapshot[];
    if (!Array.isArray(data) || data.length === 0) return null;
    return data;
  } catch {
    return null;
  }
}

function writeSnapshot(projects: PortfolioProject[]): void {
  try {
    writeFileSync(SNAPSHOT_PATH, `${JSON.stringify(projects, null, 2)}\n`, 'utf8');
  } catch (err) {
    console.warn('[projects] Could not write snapshot:', err);
  }
}

async function buildFromPins(): Promise<PortfolioProject[]> {
  const login = githubUsername();
  const pins = await fetchPinnedRepositories(login);

  const projects: PortfolioProject[] = [];

  for (const pin of pins) {
    const manifestRaw = await fetchRawFile(
      pin.owner,
      pin.name,
      pin.defaultBranch,
      'public/manifest.md',
    );
    const manifest = manifestRaw ? parseManifest(manifestRaw) : null;

    const title = displayTitle(manifest?.title, pin.name);
    const description =
      manifest?.description ?? fallbackDescription(pin.description, pin.name);
    const badges = (
      manifest?.badges?.length
        ? manifest.badges
        : fallbackBadges(pin.topics, pin.primaryLanguage)
    ).slice(0, MAX_BADGES);
    const underDevelopment = manifest?.underDevelopment ?? false;
    const docUrl = manifest?.docUrl;
    const liveDemoUrl = manifest?.liveDemoUrl ?? pin.homepageUrl ?? undefined;
    const bodyMarkdown = manifest?.bodyMarkdown ?? '';
    const bodyHtml = bodyMarkdown ? (await marked.parse(bodyMarkdown)) : '';

    projects.push({
      slug: slugFromRepo(pin.name),
      title,
      description,
      coverUrl: rawCoverUrl(pin.owner, pin.name, pin.defaultBranch),
      badges,
      repositoryUrl: pin.url,
      underDevelopment,
      docUrl,
      liveDemoUrl,
      stars: pin.stargazerCount,
      bodyHtml: typeof bodyHtml === 'string' ? bodyHtml : String(bodyHtml),
    });
  }

  return projects;
}

export async function loadPortfolioProjects(): Promise<PortfolioProject[]> {
  try {
    const projects = await buildFromPins();
    // Dev writes here would touch src/data and cause a Vite reload loop on /projects.
    if (projects.length > 0 && import.meta.env.PROD) {
      writeSnapshot(projects);
    }
    return projects;
  } catch (err) {
    const hint =
      err instanceof Error && /rate limit/i.test(err.message)
        ? ' Set GH_PAT in .env (see .env.example) or wait for the limit to reset.'
        : '';
    console.warn(`[projects] GitHub fetch failed, using snapshot if available:${hint}`, err);
    const snapshot = readSnapshot();
    if (snapshot) return snapshot;
    return [];
  }
}

export type { PortfolioProject, LocalizedString } from './projects.types';
