export const locales = ['en', 'fa'] as const;
export type Lang = (typeof locales)[number];

/** A piece of copy in every supported language. */
export type L<T = string> = Record<Lang, T>;

export const dir = (lang: Lang) => (lang === 'fa' ? 'rtl' : 'ltr');

/** Prefixes a root-relative path with the locale segment (English lives at the root). */
export function localize(path: string, lang: Lang) {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === 'en' ? clean : `/${lang}${clean === '/' ? '/' : clean}`;
}

/** Removes the locale segment from a pathname, giving the path both languages share. */
export function unlocalize(pathname: string) {
  const stripped = pathname.replace(/^\/fa(?=\/|$)/, '');
  return stripped === '' ? '/' : stripped;
}

export const langFromPath = (pathname: string): Lang => (/^\/fa(\/|$)/.test(pathname) ? 'fa' : 'en');

const numberFormats: L<Intl.NumberFormat> = {
  en: new Intl.NumberFormat('en'),
  fa: new Intl.NumberFormat('fa-IR'),
};

/** Formats a number with the locale's digits (Persian digits in Persian). */
export const num = (value: number, lang: Lang) => numberFormats[lang].format(value);

/** Replaces ASCII digits inside a string with the locale's digits. */
export const digits = (text: string, lang: Lang) =>
  lang === 'fa' ? text.replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[Number(d)]) : text;

export function formatDate(iso: string, lang: Lang, options: Intl.DateTimeFormatOptions = { month: 'long', year: 'numeric' }) {
  return new Intl.DateTimeFormat(lang === 'fa' ? 'fa-IR-u-ca-persian' : 'en-GB', options).format(new Date(iso));
}

export const ui = {
  en: {
    skip: 'Skip to content',
    nav: { games: 'Games', lab: 'Lab', open: 'Open source', studio: 'Studio', menu: 'Menu', close: 'Close' },
    langName: 'English',
    otherLang: 'فارسی',
    switchLang: 'Read this page in Persian',
    github: 'GitHub',
    star: 'Star on GitHub',
    viewSource: 'View source',
    allGames: 'All games',
    readMore: 'Read more',
    copy: 'Copy',
    copied: 'Copied',
    status: { playable: 'Playable build', prototype: 'Prototype' },
    active: 'Active this week',
    family: { persian: 'Persian classics', arcade: 'Arcade', roguelite: 'Roguelites' },
    platform: { web: 'Web', pwa: 'Installable PWA', desktop: 'Desktop', android: 'Android', ios: 'iOS' },
    updated: 'Updated',
    stars: 'Stars',
    license: 'License',
    language: 'Language',
    footer: {
      tagline: 'Simple games. Persian soul. Built in the open.',
      explore: 'Explore',
      elsewhere: 'Elsewhere',
      email: 'Email',
      license: 'Every game is MIT-licensed.',
      source: 'Source of this site',
      made: 'Made with care in Germany, with a Persian accent.',
    },
  },
  fa: {
    skip: 'رفتن به محتوا',
    nav: { games: 'بازی‌ها', lab: 'آزمایشگاه', open: 'متن‌باز', studio: 'استودیو', menu: 'منو', close: 'بستن' },
    langName: 'فارسی',
    otherLang: 'English',
    switchLang: 'Read this page in English',
    github: 'گیت‌هاب',
    star: 'ستاره در گیت‌هاب',
    viewSource: 'دیدن کد',
    allGames: 'همهٔ بازی‌ها',
    readMore: 'بیشتر بخوانید',
    copy: 'کپی',
    copied: 'کپی شد',
    status: { playable: 'نسخهٔ قابل بازی', prototype: 'نمونهٔ اولیه' },
    active: 'فعال در این هفته',
    family: { persian: 'کلاسیک‌های ایرانی', arcade: 'آرکید', roguelite: 'روگ‌لایت' },
    platform: { web: 'وب', pwa: 'PWA قابل نصب', desktop: 'دسکتاپ', android: 'اندروید', ios: 'iOS' },
    updated: 'به‌روزرسانی',
    stars: 'ستاره',
    license: 'مجوز',
    language: 'زبان',
    footer: {
      tagline: 'بازی‌های ساده، با روح ایرانی. ساخته‌شده در فضای باز.',
      explore: 'گشت‌وگذار',
      elsewhere: 'جاهای دیگر',
      email: 'ایمیل',
      license: 'همهٔ بازی‌ها با مجوز MIT منتشر می‌شوند.',
      source: 'کد این سایت',
      made: 'با حوصله در آلمان ساخته شده، با لهجهٔ فارسی.',
    },
  },
} as const;

export const t = (lang: Lang) => ui[lang];
