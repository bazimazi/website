export const SITE = {
  name: 'bazimazi',
  url: 'https://bazimazi.games',
  org: 'bazimazi',
  github: 'https://github.com/bazimazi',
  x: 'https://x.com/bazimazi',
  npm: 'https://www.npmjs.com/org/bazimazi',
  email: 'info@bazimazi.games',
  source: 'https://github.com/bazimazi/website',
  founded: 2021,
} as const;

export const repoUrl = (repo: string) => `${SITE.github}/${repo}`;

/** A web game published as a standalone app on its own subdomain. */
export const playAt = (subdomain: string) => `https://${subdomain}.bazimazi.games/`;
