# bazimazi.games

The website of [bazimazi](https://github.com/bazimazi), an open game studio. Simple games, Persian soul.

It is a static [Astro](https://astro.build) site in English and Persian (right to left), with no client framework. Interactive parts (the bouncing-ball hero, the playable dooz board, filters) are small vanilla TypeScript scripts.

## Run it

Requires Node.js 22.12 or newer.

```bash
npm install
npm run dev        # http://localhost:4321
npm run check      # type-check every .astro and .ts file
npm run build      # static site in dist/
npm run preview    # serve dist/
```

## Where things live

```
src/
├── config.ts            site URL, social links, contact email
├── i18n/index.ts        locales, shared UI strings, Persian digits and dates
├── data/
│   ├── games.ts         the game catalogue (copy in both languages, platforms, stack, colours)
│   ├── lab.ts           prototypes and experiments shown in the Lab
│   ├── github.ts        repository data, fetched at build time
│   └── repos.snapshot.json   fallback when GitHub cannot be reached
├── components/          header, footer, hero, cards, mascot, game art, mini dooz…
├── views/               one view per page, shared by both languages
├── pages/               thin routes: English at the root, Persian under /fa/
└── styles/global.css    design tokens and base styles
public/                  favicon, icons, Open Graph images, brand downloads, CNAME
```

Each page's copy sits next to its markup, in an `{ en, fa }` object at the top of the view or component.

### Adding a game

1. Add an entry to `src/data/games.ts`. The `slug` becomes `/games/<slug>/` and `/fa/games/<slug>/`.
2. Draw its cover in `src/components/GameArt.astro` (a branch keyed by the slug).
3. If it started in the Lab, set `graduated: '<slug>'` on its entry in `src/data/lab.ts`.

### Adding an experiment

Add an entry to `src/data/lab.ts` and pick a `glyph`, the small animated illustration drawn by `src/components/LabGlyph.astro`.

## Repository data

Stars, languages and "last updated" times come from the GitHub API during the build. If the API is unreachable or rate-limited, the build uses `src/data/repos.snapshot.json` instead, so it never fails because of GitHub. Set `BAZIMAZI_OFFLINE=1` to skip the network entirely, and run `npm run snapshot` to refresh the fallback file.

## Deployment

`.github/workflows/deploy.yml` builds every pull request and deploys `main` to GitHub Pages. It also rebuilds once a day so repository activity stays current.

One-time setup:

1. In the repository settings, under **Pages**, set the source to **GitHub Actions**.
2. Point the `bazimazi.games` DNS records at GitHub Pages (apex `A` records, or `ALIAS`/`ANAME`), as described in [GitHub's custom domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site). `public/CNAME` already names the domain.

## License

MIT. See [LICENSE](LICENSE).
