import { SITE } from '~/config';
import snapshot from './repos.snapshot.json';

export interface Repo {
  name: string;
  description: string | null;
  language: string | null;
  stars: number;
  forks: number;
  openIssues: number;
  license: string | null;
  createdAt: string;
  pushedAt: string;
  url: string;
}

interface ApiRepo {
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  license: { spdx_id: string } | null;
  created_at: string;
  pushed_at: string;
  html_url: string;
  fork: boolean;
  archived: boolean;
}

const env = (globalThis as { process?: { env: Record<string, string | undefined> } }).process?.env ?? {};

/**
 * Live repository data, fetched once per build. Falls back to the committed
 * snapshot when the API is unreachable or rate-limited, so builds never fail
 * because of GitHub.
 */
async function load(): Promise<Repo[]> {
  if (env.BAZIMAZI_OFFLINE) return snapshot.repos;
  try {
    const headers: Record<string, string> = { Accept: 'application/vnd.github+json', 'User-Agent': 'bazimazi-website' };
    if (env.GITHUB_TOKEN) headers.Authorization = `Bearer ${env.GITHUB_TOKEN}`;
    const res = await fetch(`https://api.github.com/orgs/${SITE.org}/repos?per_page=100&type=public`, {
      headers,
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
    const data = (await res.json()) as ApiRepo[];
    return data
      .filter((r) => !r.fork && !r.archived)
      .map((r) => ({
        name: r.name,
        description: r.description,
        language: r.language,
        stars: r.stargazers_count,
        forks: r.forks_count,
        openIssues: r.open_issues_count,
        license: r.license?.spdx_id ?? null,
        createdAt: r.created_at,
        pushedAt: r.pushed_at,
        url: r.html_url,
      }));
  } catch (error) {
    console.warn(`[github] Using the repository snapshot: ${(error as Error).message}`);
    return snapshot.repos;
  }
}

let cache: Promise<Repo[]> | undefined;
export const getRepos = () => (cache ??= load());

export async function getRepo(name: string) {
  return (await getRepos()).find((r) => r.name.toLowerCase() === name.toLowerCase());
}

/** Repositories that are games or tools, newest activity first. */
export async function getActivity() {
  return (await getRepos())
    .filter((r) => !['.github', 'website'].includes(r.name))
    .sort((a, b) => b.pushedAt.localeCompare(a.pushedAt));
}

export async function getOrgStats() {
  const repos = (await getRepos()).filter((r) => r.name !== '.github');
  const languages = new Set(repos.map((r) => r.language).filter(Boolean));
  return {
    repos: repos.length,
    stars: repos.reduce((sum, r) => sum + r.stars, 0),
    languages: languages.size,
    mit: repos.every((r) => r.license === 'MIT'),
  };
}

/** True when the repository saw a push in the seven days before the build. */
export const isActive = (repo?: Repo) => !!repo && Date.now() - Date.parse(repo.pushedAt) < 7 * 864e5;
