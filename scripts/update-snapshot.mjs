// Refreshes src/data/repos.snapshot.json, the offline fallback used when the
// build cannot reach the GitHub API. Run with `npm run snapshot`.
import { writeFile } from 'node:fs/promises';

const org = 'bazimazi';
const headers = { Accept: 'application/vnd.github+json', 'User-Agent': 'bazimazi-website' };
if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

const res = await fetch(`https://api.github.com/orgs/${org}/repos?per_page=100&type=public`, { headers });
if (!res.ok) throw new Error(`GitHub API responded ${res.status} ${res.statusText}`);

const repos = (await res.json())
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

const file = new URL('../src/data/repos.snapshot.json', import.meta.url);
await writeFile(file, JSON.stringify({ fetchedAt: new Date().toISOString(), repos }, null, 2) + '\n');
console.log(`Saved ${repos.length} repositories.`);
