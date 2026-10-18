import { getGitHubToken } from './github-token';

export type PinnedRepository = {
  name: string;
  owner: string;
  url: string;
  description: string | null;
  homepageUrl: string | null;
  defaultBranch: string;
  stargazerCount: number;
  topics: string[];
  primaryLanguage: string | null;
};

const PINNED_QUERY = `
  query PinnedRepos($login: String!) {
    user(login: $login) {
      pinnedItems(first: 6, types: REPOSITORY) {
        nodes {
          ... on Repository {
            name
            url
            description
            homepageUrl
            stargazerCount
            primaryLanguage { name }
            defaultBranchRef { name }
            repositoryTopics(first: 10) {
              nodes { topic { name } }
            }
            owner { login }
          }
        }
      }
    }
  }
`;

type GraphQlResponse = {
  data?: {
    user?: {
      pinnedItems?: {
        nodes?: Array<{
          name: string;
          url: string;
          description: string | null;
          homepageUrl: string | null;
          stargazerCount: number;
          primaryLanguage: { name: string } | null;
          defaultBranchRef: { name: string } | null;
          repositoryTopics: { nodes: Array<{ topic: { name: string } }> };
          owner: { login: string };
        } | null>;
      };
    };
  };
  errors?: Array<{ message: string }>;
};

function authHeaders(): HeadersInit {
  const token = getGitHubToken();
  const headers: HeadersInit = {
    Accept: 'application/vnd.github+json',
    'Content-Type': 'application/json',
  };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return headers;
}

export async function fetchPinnedRepositories(login: string): Promise<PinnedRepository[]> {
  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: authHeaders(),
    body: JSON.stringify({ query: PINNED_QUERY, variables: { login } }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`GitHub GraphQL failed (${res.status}): ${text.slice(0, 200)}`);
  }

  const json = (await res.json()) as GraphQlResponse;
  if (json.errors?.length) {
    throw new Error(json.errors.map((e) => e.message).join('; '));
  }

  const nodes = json.data?.user?.pinnedItems?.nodes ?? [];
  return nodes
    .filter((n): n is NonNullable<typeof n> => n != null)
    .map((repo) => ({
      name: repo.name,
      owner: repo.owner.login,
      url: repo.url,
      description: repo.description,
      homepageUrl: repo.homepageUrl,
      defaultBranch: repo.defaultBranchRef?.name ?? 'main',
      stargazerCount: repo.stargazerCount,
      topics: repo.repositoryTopics.nodes.map((n) => n.topic.name),
      primaryLanguage: repo.primaryLanguage?.name ?? null,
    }));
}
