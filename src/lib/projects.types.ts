import type { Lang } from '../i18n/ui';

export type LocalizedString = Record<Lang, string>;

export type PortfolioProject = {
  slug: string;
  title: string;
  description: LocalizedString;
  coverUrl: string;
  badges: string[];
  repositoryUrl: string;
  underDevelopment: boolean;
  docUrl?: string;
  liveDemoUrl?: string;
  stars: number;
  bodyHtml: string;
};

/** JSON-safe shape stored in projects.snapshot.json */
export type PortfolioProjectSnapshot = PortfolioProject;
