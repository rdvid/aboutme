import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { config as loadDotenv } from 'dotenv';

let envLoaded = false;
let missingTokenWarned = false;

function ensureDotenv(): void {
  if (envLoaded) return;
  envLoaded = true;
  const root = process.cwd();
  for (const file of ['.env.local', '.env']) {
    const path = resolve(root, file);
    if (existsSync(path)) {
      loadDotenv({ path });
      break;
    }
  }
}

/** Token for GitHub API (GraphQL + raw). Prefer GH_PAT in .env when GITHUB_* is reserved. */
export function getGitHubToken(): string | undefined {
  ensureDotenv();
  const token =
    process.env.GITHUB_TOKEN?.trim() ||
    process.env.GH_TOKEN?.trim() ||
    process.env.GH_PAT?.trim();

  if (!token && !missingTokenWarned) {
    missingTokenWarned = true;
    const hasEnvFile =
      existsSync(resolve(process.cwd(), '.env')) ||
      existsSync(resolve(process.cwd(), '.env.local'));
    const formatHint = hasEnvFile
      ? ' .env was found but GH_PAT/GH_TOKEN/GITHUB_TOKEN is missing — use GH_PAT=ghp_... (see .env.example).'
      : ' Copy .env.example to .env and set GH_PAT=ghp_....';
    console.warn(
      `[projects] No GitHub token.${formatHint} Unauthenticated requests may hit API rate limits.`,
    );
  }

  return token || undefined;
}
