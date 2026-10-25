import type { L } from '~/i18n';

export type Status = 'playable' | 'prototype';
export type Family = 'persian' | 'arcade' | 'roguelite';
export type Platform = 'web' | 'pwa' | 'desktop' | 'android' | 'ios';

export interface Game {
  slug: string;
  repo: string;
  name: L;
  /** Name in the other script, shown as a subtitle (e.g. the Persian title on the English page). */
  native?: string;
  tagline: L;
  summary: L;
  description: L<string[]>;
  highlights: L<string[]>;
  status: Status;
  family: Family;
  players: L;
  platforms: Platform[];
  stack: string[];
  /** Shell commands to run the game from source. */
  run: string;
  /** Card colours: background, foreground and accent. */
  theme: { bg: string; fg: string; accent: string };
  screenshot?: { src: string; width: number; height: number; alt: L };
}

const clone = (repo: string, dir = repo, extra = '') =>
  `git clone https://github.com/bazimazi/${repo}\ncd ${dir}${extra}\nnpm install\nnpm run dev`;

export const games: Game[] = [
  {
    slug: 'esm-famil',
    repo: 'esfamil',
    name: { en: 'Esm-Famil', fa: 'اسم فامیل' },
    native: 'اسم فامیل',
    tagline: { en: 'One letter, a thousand memories.', fa: 'یک حرف، هزار خاطره.' },
    summary: {
      en: 'The word game every Iranian grew up with. Pick a letter, then race to fill in a name, a surname, a city, a food, a fruit and an animal before someone shouts “stop!”',
      fa: 'همان بازی پشت دفتر مشق. یک حرف انتخاب می‌شود و همه برای نوشتن اسم، فامیل، شهر، غذا، میوه و حیوان مسابقه می‌دهند تا کسی بگوید «استپ!»',
    },
    description: {
      en: [
        'Esm-Famil is a Persian-first take on the classic Iranian word game, with an original school-notebook and courtyard identity, built for phones and computers alike.',
        'The whole loop is here: writing, review, scoring and results. Answer matching understands Persian spelling, including Persian and Arabic ی and ک, the different forms of alef, vowel marks and half-spaces. Answers it doesn’t know go to a vote among the other players.',
      ],
      fa: [
        'اسم فامیل روایتی فارسی‌محور از بازی کلاسیک ایرانی است؛ با هویتی تازه از دفتر مدرسه و حیاط خانه، هم برای گوشی و هم برای کامپیوتر.',
        'چرخهٔ کامل بازی آماده است: نوشتن، داوری، امتیاز و نتیجه. تطبیق جواب‌ها املای فارسی را می‌فهمد؛ از «ی» و «ک» فارسی و عربی تا شکل‌های مختلف الف، اعراب و نیم‌فاصله. جواب‌های ناآشنا به رأی بقیهٔ بازیکن‌ها گذاشته می‌شوند.',
      ],
    },
    highlights: {
      en: [
        'Solo warm-up against a paper rival',
        'A daily letter: the same challenge for everyone',
        'Pass-and-play for 2–4 players on one device',
        'Private online rooms for up to 8 friends',
      ],
      fa: [
        'یه دست گرم کنیم: تمرین تنهایی با یک حریف کاغذی',
        'حرف امروز: یک چالش مشترک برای همه',
        'دورهمی نوبتی برای ۲ تا ۴ نفر روی یک دستگاه',
        'دورهمی آنلاین در اتاق خصوصی تا ۸ نفر',
      ],
    },
    status: 'prototype',
    family: 'persian',
    players: { en: '1–8 players', fa: '۱ تا ۸ نفر' },
    platforms: ['web', 'pwa'],
    stack: ['React', 'TypeScript', 'Vite', 'Socket.IO'],
    run: clone('esfamil'),
    theme: { bg: '#F4EEDF', fg: '#25358F', accent: '#E8603C' },
    screenshot: {
      src: '/images/games/esm-famil.webp',
      width: 1200,
      height: 1189,
      alt: {
        en: 'The Esm-Famil home screen: a notebook page with name, surname and city columns, and a big orange letter card.',
        fa: 'صفحهٔ اصلی اسم فامیل: برگهٔ دفتری با ستون‌های اسم، فامیل و شهر و یک کارت نارنجی بزرگ با حرف «س».',
      },
    },
  },
  {
    slug: 'noqat',
    repo: 'noqat',
    name: { en: 'Noqat', fa: 'نقطه‌خط' },
    native: 'نقطه‌خط',
    tagline: { en: 'Dots & Boxes, taken seriously.', fa: 'نقطه‌خط، این بار جدی.' },
    summary: {
      en: 'The pen-and-paper classic, with a genuinely strong engine underneath and thirteen culturally handcrafted skins on top.',
      fa: 'بازی کلاسیک کاغذ و قلم، با یک موتور واقعاً قوی در زیر و سیزده پوستهٔ فرهنگیِ دست‌ساز در رو.',
    },
    description: {
      en: [
        'Most Dots & Boxes games are greedy: grab every box in sight, then move at random. Noqat plays the real game: chain theory, loops, tempo, and the counter-intuitive art of giving boxes away.',
        'Its bots range from a forgetful Beginner to a Grandmaster that solves the endgame exactly. Themes are a plugin system, not a palette swap. The Persian skin fills captured boxes with girih stars and composes its soundtrack live in Dastgāh-e Shur.',
      ],
      fa: [
        'بیشتر نسخه‌های نقطه‌خط حریص‌اند: هر خانه‌ای را که ببینند می‌گیرند و بعد تصادفی بازی می‌کنند. نقطه‌خط خودِ بازی را بازی می‌کند: نظریهٔ زنجیره‌ها، حلقه‌ها، تمپو و هنرِ غافلگیرکنندهٔ واگذار کردن خانه‌ها.',
        'ربات‌هایش از یک تازه‌کارِ فراموشکار شروع می‌شوند و به استادبزرگی می‌رسند که پایان بازی را بی‌نقص حل می‌کند. پوسته‌ها فقط تغییر رنگ نیستند: پوستهٔ ایرانی خانه‌های گرفته‌شده را با ستاره‌های گره‌چینی پر می‌کند و موسیقی‌اش را زنده در دستگاه شور می‌سازد.',
      ],
    },
    highlights: {
      en: [
        'Six AI levels, from 600 to 2350 Elo',
        'Persian Garden, Reverse and One Line modes',
        'Daily challenge, streaks and three-star puzzles',
        'Online play with an optional server',
      ],
      fa: [
        'شش سطح هوش مصنوعی، از Elo ۶۰۰ تا ۲۳۵۰',
        'حالت‌های باغ ایرانی، وارونه و یک‌خط',
        'چالش روزانه، رکورد پیاپی و معماهای سه‌ستاره',
        'بازی آنلاین با سرور اختیاری',
      ],
    },
    status: 'playable',
    family: 'persian',
    players: { en: '1–2 players', fa: '۱ تا ۲ نفر' },
    platforms: ['web', 'pwa'],
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'WebSockets'],
    run: clone('noqat'),
    theme: { bg: '#0F5C63', fg: '#F7F0E3', accent: '#F2C14E' },
  },
  {
    slug: 'dooz',
    repo: 'dooz',
    name: { en: 'Dooz', fa: 'دوز' },
    native: 'دوز',
    tagline: { en: 'Tic-tac-toe, grown up.', fa: 'دوز، بزرگ‌تر از همیشه.' },
    summary: {
      en: 'Tic-tac-toe on 3×3, 6×6 and 9×9 boards. Play someone next to you, someone online, or a bot that cannot be beaten at 3×3.',
      fa: 'دوز روی صفحه‌های ۳×۳، ۶×۶ و ۹×۹. با کسی کنار خودت، با کسی آنلاین، یا با رباتی که در ۳×۳ شکست نمی‌خورد.',
    },
    description: {
      en: [
        'Dooz is the game that fills the margins of every notebook in Iran. Our version scales it up, and bigger boards change everything you thought you knew about a draw.',
        'One codebase runs everywhere: on the web, as an installable PWA, on Windows, macOS and Linux, and natively on iOS and Android. Online games run on an authoritative server that treats every client as hostile. The client predicts nothing.',
      ],
      fa: [
        'دوز همان بازی‌ای است که حاشیهٔ هر دفتری در ایران را پر کرده. نسخهٔ ما آن را بزرگ‌تر کرده است، و صفحهٔ بزرگ‌تر هر چیزی را که دربارهٔ مساوی شدن می‌دانستی عوض می‌کند.',
        'یک کد برای همه‌جا: وب، PWA قابل نصب، ویندوز، مک و لینوکس، و اپ بومی iOS و اندروید. بازی آنلاین روی سروری معتبر اجرا می‌شود که به هیچ کلاینتی اعتماد نمی‌کند؛ کلاینت هیچ چیزی را پیش‌بینی نمی‌کند.',
      ],
    },
    highlights: {
      en: [
        '3×3, 6×6 and 9×9 boards',
        'Local, online and bot play',
        'Web, desktop and mobile from one codebase',
        'An unbeatable 3×3 bot (try it on our home page)',
      ],
      fa: [
        'صفحه‌های ۳×۳، ۶×۶ و ۹×۹',
        'بازی محلی، آنلاین و با ربات',
        'وب، دسکتاپ و موبایل از یک کد',
        'رباتی شکست‌ناپذیر در ۳×۳ (در صفحهٔ اول امتحانش کن)',
      ],
    },
    status: 'playable',
    family: 'persian',
    players: { en: '1–2 players', fa: '۱ تا ۲ نفر' },
    platforms: ['web', 'pwa', 'desktop', 'android', 'ios'],
    stack: ['TypeScript', 'React 19', 'Vite 8', 'Tailwind CSS 4', 'Tauri 2', 'Hono'],
    run: clone('dooz', 'dooz/src'),
    theme: { bg: '#1B2163', fg: '#F7F0E3', accent: '#FF8A1F' },
  },
  {
    slug: 'spy',
    repo: 'spy',
    name: { en: 'Spy', fa: 'جاسوس' },
    native: 'جاسوس',
    tagline: { en: 'One word. One liar. Find them.', fa: 'یک کلمه، یک دروغگو. پیدایش کن.' },
    summary: {
      en: 'A Persian pass-the-phone party game. Everyone sees the secret word except the spy. Ask, bluff, vote.',
      fa: 'یک بازی گروهی فارسی که گوشی در آن دست‌به‌دست می‌شود. همه کلمهٔ مخفی را می‌بینند، جز جاسوس. بپرس، بلوف بزن، رأی بده.',
    },
    description: {
      en: [
        'Pass one phone around the room. Each player privately reveals their card: the secret word, or the spy badge. Then the clock starts, questions fly, and the group votes.',
        'The spy can stop the timer at any moment to guess the word and steal the round. Up to 30 players and 8 spies, fully offline, with a screen that stays awake while the timer runs.',
      ],
      fa: [
        'یک گوشی را دور اتاق بچرخانید. هر نفر کارتش را مخفیانه می‌بیند: کلمهٔ مخفی، یا نشان جاسوس. بعد زمان شروع می‌شود، سؤال‌ها رد و بدل می‌شوند و جمع رأی می‌دهد.',
        'جاسوس هر لحظه می‌تواند زمان را نگه دارد، کلمه را حدس بزند و دست را ببرد. تا ۳۰ بازیکن و ۸ جاسوس، کاملاً آفلاین، با صفحه‌ای که تا پایان زمان خاموش نمی‌شود.',
      ],
    },
    highlights: {
      en: ['3–30 players, 1–8 spies', 'Rounds from 1 to 30 minutes', 'Works fully offline', 'Android and iOS apps from the same build'],
      fa: ['۳ تا ۳۰ بازیکن، ۱ تا ۸ جاسوس', 'دست‌هایی از ۱ تا ۳۰ دقیقه', 'کاملاً آفلاین', 'اپ اندروید و iOS از همان کد'],
    },
    status: 'playable',
    family: 'persian',
    players: { en: '3–30 players', fa: '۳ تا ۳۰ نفر' },
    platforms: ['web', 'pwa', 'android', 'ios'],
    stack: ['React 19', 'TypeScript', 'Vite', 'Capacitor 8', 'Playwright'],
    run: clone('spy'),
    theme: { bg: '#17122B', fg: '#F7F0E3', accent: '#FF6B3D' },
  },
  {
    slug: 'bball',
    repo: 'bBall',
    name: { en: 'bBall', fa: 'bBall' },
    tagline: { en: 'Bounce. Battle. Repeat.', fa: 'ضربه، نبرد، تکرار.' },
    summary: {
      en: 'A fast, minimal bouncing-ball duel. Drag to move your paddle, keep the ball alive, and take the points off the bot before it takes them off you.',
      fa: 'یک دوئل سریع و مینیمال با توپ جهنده. پدلت را بکش، توپ را زنده نگه دار و امتیاز را از ربات بگیر، پیش از آنکه او از تو بگیرد.',
    },
    description: {
      en: [
        'Neon paddles, a streaking ball, and nothing else on the screen. Gameplay is drawn on a canvas and every sound is synthesised.',
        'Under that minimal surface: a backend, a native desktop window, and a test suite that renders every menu and checks live gameplay at five screen sizes.',
      ],
      fa: [
        'پدل‌های نئونی، توپی که پشت سرش خط نور می‌کشد، و دیگر هیچ. بازی روی بوم کشیده می‌شود و همهٔ صداها سنتز می‌شوند.',
        'زیر این ظاهر ساده: یک بک‌اند، پنجرهٔ بومی دسکتاپ، و تست‌هایی که همهٔ منوها را رندر می‌کنند و بازی را در پنج اندازهٔ صفحه بررسی می‌کنند.',
      ],
    },
    highlights: {
      en: ['Drag-to-play controls', 'Every sound synthesised', 'Native desktop window', 'Duel the bot'],
      fa: ['کنترل با کشیدن انگشت', 'همهٔ صداها سنتز شده', 'پنجرهٔ بومی دسکتاپ', 'دوئل با ربات'],
    },
    status: 'playable',
    family: 'arcade',
    players: { en: '1 player vs. bot', fa: 'تک‌نفره در برابر ربات' },
    platforms: ['web', 'desktop'],
    stack: ['React', 'TypeScript', 'Vite', 'Canvas', 'Tauri'],
    run: clone('bBall'),
    theme: { bg: '#05070F', fg: '#F7F0E3', accent: '#3FF1E0' },
    screenshot: {
      src: '/images/games/bball.webp',
      width: 1600,
      height: 841,
      alt: {
        en: 'bBall cover art: a cyan paddle and a pink paddle on a dark neon grid, with a white ball streaking between them.',
        fa: 'تصویر جلد bBall: یک پدل فیروزه‌ای و یک پدل صورتی روی شبکه‌ای تیره و نئونی، با توپی سفید که میانشان در حرکت است.',
      },
    },
  },
  {
    slug: 'bounce-defense',
    repo: 'BounceDefense',
    name: { en: 'Bounce Defense', fa: 'Bounce Defense' },
    tagline: { en: 'Launch the ball. Build the machine.', fa: 'توپ را پرتاب کن. ماشین را بساز.' },
    summary: {
      en: 'A mobile-first physics roguelite. You don’t control a character: you launch a weaponised ball and build a machine of destruction around it.',
      fa: 'یک روگ‌لایت فیزیکی برای موبایل. شخصیتی را کنترل نمی‌کنی؛ توپی مسلح را پرتاب می‌کنی و ماشینی از ویرانی دورش می‌سازی.',
    },
    description: {
      en: [
        'It ricochets, crits, burns, freezes, chains lightning, splits, explodes and evolves, while enemies march down toward your defense line.',
        'No runtime dependencies and no art or audio files: every visual is drawn procedurally and every sound is synthesised with WebAudio. Fully playable in Persian, right to left.',
      ],
      fa: [
        'کمانه می‌کند، ضربهٔ بحرانی می‌زند، می‌سوزاند، منجمد می‌کند، صاعقه را زنجیر می‌کند، تکثیر می‌شود، منفجر می‌شود و تکامل پیدا می‌کند؛ در حالی که دشمن‌ها به سمت خط دفاعت پیش می‌آیند.',
        'بدون هیچ وابستگی زمان اجرا و بدون فایل تصویر یا صدا: همهٔ تصاویر رویه‌ای کشیده می‌شوند و همهٔ صداها با WebAudio ساخته می‌شوند. کاملاً فارسی و راست‌به‌چپ.',
      ],
    },
    highlights: {
      en: ['Ricochet builds: burn, freeze, chain, split', 'Talent trees and multiple arenas', 'Procedural art, synthesised audio', 'Full Persian, right to left'],
      fa: ['ساخت‌های کمانه‌ای: سوختن، انجماد، زنجیره، تکثیر', 'درخت استعداد و میدان‌های متنوع', 'گرافیک رویه‌ای و صدای سنتزشده', 'کاملاً فارسی و راست‌به‌چپ'],
    },
    status: 'playable',
    family: 'roguelite',
    players: { en: 'Single player', fa: 'تک‌نفره' },
    platforms: ['web', 'desktop', 'android', 'ios'],
    stack: ['TypeScript', 'Vite', 'Canvas 2D', 'WebAudio', 'Tauri 2'],
    run: clone('BounceDefense'),
    theme: { bg: '#2A0E2E', fg: '#F7F0E3', accent: '#FFB81C' },
  },
  {
    slug: 'plumb',
    repo: 'PachinkoRoguelite',
    name: { en: 'PLUMB', fa: 'PLUMB' },
    tagline: { en: 'You cannot hold it. You can still decide the fall.', fa: 'نمی‌توانی نگهش داری؛ ولی سقوطش را تو انتخاب می‌کنی.' },
    summary: {
      en: 'A pachinko roguelite. The sphere falls through a living machine, and you nudge, release and overdrive it toward the collector.',
      fa: 'یک روگ‌لایت پاچینکو. گوی از دلِ ماشینی زنده پایین می‌افتد و تو با تکان دادن، رها کردن و اوردرایو، راهش را تا جمع‌کننده می‌سازی.',
    },
    description: {
      en: [
        'Every run is a descent through machines that change beneath you: galleries, kilns and dynamos, with bells to strike and relays to light in sequence.',
        'Guardians like the Bellkeeper and the Heartforge add optional physical objectives that pay out in gears and relic drafts, if you survive the fall.',
      ],
      fa: [
        'هر دور، سقوطی است از میان ماشین‌هایی که زیر پایت تغییر می‌کنند: گالری‌ها، کوره‌ها و دینام‌ها، با زنگ‌هایی برای نواختن و رله‌هایی که باید به ترتیب روشن شوند.',
        'نگهبان‌هایی مثل «زنگ‌بان» و «کورهٔ دل» هدف‌های فیزیکی اختیاری اضافه می‌کنند که پاداششان چرخ‌دنده و انتخاب یادگار است؛ البته اگر از سقوط جان سالم به در ببری.',
      ],
    },
    highlights: {
      en: ['Nudge, release and Overdrive', 'Acts, relics and a gear economy', 'Optional guardian objectives', 'Contextual Workshop tips'],
      fa: ['تکان، رهاسازی و اوردرایو', 'پرده‌ها، یادگارها و اقتصاد چرخ‌دنده', 'هدف‌های اختیاری نگهبان‌ها', 'راهنمای کارگاه در لحظه'],
    },
    status: 'prototype',
    family: 'roguelite',
    players: { en: 'Single player', fa: 'تک‌نفره' },
    platforms: ['web'],
    stack: ['TypeScript', 'Vite', 'Canvas', 'Playwright'],
    run: clone('PachinkoRoguelite'),
    theme: { bg: '#3B2412', fg: '#F7F0E3', accent: '#F5C35B' },
  },
  {
    slug: 'soulforge',
    repo: 'soulforge',
    name: { en: 'Soulforge', fa: 'Soulforge' },
    tagline: { en: 'Survive the night. Forge what’s left.', fa: 'شب را دوام بیاور. باقی‌مانده را بساز.' },
    summary: {
      en: 'A browser survivors-like with a heavy meta-progression layer: twelve characters, thirty-five weapons with evolutions, elemental reactions and five biomes.',
      fa: 'یک بازی بقا در مرورگر با لایهٔ سنگین پیشرفت: دوازده شخصیت، سی‌وپنج سلاح با تکامل، واکنش‌های عنصری و پنج زیست‌بوم.',
    },
    description: {
      en: [
        'Talent trees, a crafting forge, shrines, boons and a narrated story wrap around every run. The world is endless, and the minimap is a radar centred on you.',
        'A batched WebGL2 renderer brings coloured HDR lighting, cast shadows, dissolve deaths, shockwave refraction and bloom, with a Canvas 2D fallback. Installable, and playable offline.',
      ],
      fa: [
        'درخت استعداد، کورهٔ ساخت، زیارتگاه‌ها، موهبت‌ها و داستانی روایت‌شده هر دور را در بر می‌گیرند. جهان بی‌انتهاست و نقشهٔ کوچک، راداری است که مرکزش تویی.',
        'رندرکنندهٔ WebGL2 نورپردازی رنگی HDR، سایه، مرگ‌های محوشونده، شکست نور موج انفجار و درخشش را می‌آورد، با جایگزین Canvas 2D. قابل نصب و قابل بازی بدون اینترنت.',
      ],
    },
    highlights: {
      en: ['12 characters, 35 weapons with evolutions', 'Elemental reactions and resonance', 'Keyboard, gamepad and touch', 'Offline-ready PWA'],
      fa: ['۱۲ شخصیت، ۳۵ سلاح با تکامل', 'واکنش‌های عنصری و رزونانس', 'صفحه‌کلید، دسته و لمس', 'PWA قابل اجرا بدون اینترنت'],
    },
    status: 'playable',
    family: 'roguelite',
    players: { en: 'Single player', fa: 'تک‌نفره' },
    platforms: ['web', 'pwa'],
    stack: ['TypeScript', 'WebGL2', 'Vite', 'PWA'],
    run: clone('soulforge'),
    theme: { bg: '#120A1C', fg: '#F7F0E3', accent: '#FF7A3D' },
  },
];

export const gameBySlug = (slug: string) => games.find((g) => g.slug === slug);
