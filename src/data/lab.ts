import { playAt } from '~/config';
import type { L } from '~/i18n';

/** The animated glyph that illustrates an experiment's core mechanic. */
export type Glyph =
  | 'combat'
  | 'build'
  | 'ramp'
  | 'gravity'
  | 'arena'
  | 'runner'
  | 'logic'
  | 'magnet'
  | 'rewind'
  | 'orbit'
  | 'alchemy'
  | 'ghost'
  | 'fluid'
  | 'cell'
  | 'dungeon'
  | 'rift'
  | 'swarm'
  | 'pachinko'
  | 'defense';

export interface Experiment {
  repo: string;
  name: string;
  line: L;
  glyph: Glyph;
  series: 'bounce' | 'worlds';
  /** Slug of the game this experiment grew into. */
  graduated?: string;
  /** Where the experiment is played in the browser, as a standalone app on its own subdomain. */
  play?: string;
}

export const experiments: Experiment[] = [
  {
    repo: 'BounceBound',
    name: 'Bouncebound',
    line: { en: 'Bouncing is the combat system.', fa: 'جهیدن، خودِ سیستم نبرد است.' },
    glyph: 'combat',
    series: 'bounce',
    play: playAt('bounce-bound'),
  },
  {
    repo: 'Ballborn',
    name: 'Ballborn',
    line: { en: 'Build a ball. Feel it. Break it. Rebuild it.', fa: 'یک توپ بساز، حسش کن، بشکنش، دوباره بسازش.' },
    glyph: 'build',
    series: 'bounce',
    play: playAt('ballborn'),
  },
  {
    repo: 'BounceArchitect',
    name: 'Bounce Architect',
    line: { en: 'Don’t steer the ball. Engineer the world around it.', fa: 'توپ را هدایت نکن؛ دنیای اطرافش را مهندسی کن.' },
    glyph: 'ramp',
    series: 'bounce',
    play: playAt('bounce-architect'),
  },
  {
    repo: 'Gravityball',
    name: 'Gravityball',
    line: { en: 'You don’t move the ball. You turn gravity.', fa: 'توپ را حرکت نمی‌دهی؛ جاذبه را می‌چرخانی.' },
    glyph: 'gravity',
    series: 'bounce',
    play: playAt('gravityball'),
  },
  {
    repo: 'BounceArena',
    name: 'Bounce Arena',
    line: { en: 'Speed is power. Spend it on a hit, or on staying alive.', fa: 'سرعت یعنی قدرت؛ خرج ضربه کن، یا خرج زنده ماندن.' },
    glyph: 'arena',
    series: 'bounce',
    play: playAt('bounce-arena'),
  },
  {
    repo: 'InfiniteBounce',
    name: 'Infinite Bounce',
    line: { en: 'An endless runner where you are the ball.', fa: 'یک دوندهٔ بی‌پایان که در آن خودت توپی.' },
    glyph: 'runner',
    series: 'bounce',
    play: playAt('infinite-bounce'),
  },
  {
    repo: 'PachinkoRoguelite',
    name: 'PLUMB',
    line: { en: 'A pachinko roguelite. You can still decide the fall.', fa: 'روگ‌لایت پاچینکو. سقوط را تو انتخاب می‌کنی.' },
    glyph: 'pachinko',
    series: 'bounce',
    graduated: 'plumb',
  },
  {
    repo: 'BounceLogic',
    name: 'Bounce Logic',
    line: { en: 'Plan a machine. Press play. See if the plan was true.', fa: 'ماشینی طراحی کن، اجرا را بزن، ببین نقشه درست بود یا نه.' },
    glyph: 'logic',
    series: 'bounce',
    play: playAt('bounce-logic'),
  },
  {
    repo: 'MagnetBall',
    name: 'Magnet Ball',
    line: { en: 'Flip the poles. Keep the momentum.', fa: 'قطب را برگردان، تکانه را نگه دار.' },
    glyph: 'magnet',
    series: 'bounce',
    play: playAt('magnet-ball'),
  },
  {
    repo: 'Bounceback',
    name: 'Bounceback',
    line: { en: 'Every few seconds, time rewinds.', fa: 'هر چند ثانیه، زمان به عقب برمی‌گردد.' },
    glyph: 'rewind',
    series: 'bounce',
    play: playAt('bounceback'),
  },
  {
    repo: 'PlanetBounce',
    name: 'Planet Bounce',
    line: { en: 'Slingshot between tiny planets on momentum alone.', fa: 'فقط با تکانه، از سیاره‌ای کوچک به سیارهٔ دیگر بپر.' },
    glyph: 'orbit',
    series: 'bounce',
    play: playAt('planet-bounce'),
  },
  {
    repo: 'BounceDefense',
    name: 'Bounce Defense',
    line: { en: 'Launch a weaponised ball. Build a machine around it.', fa: 'توپی مسلح پرتاب کن و ماشینی دورش بساز.' },
    glyph: 'defense',
    series: 'bounce',
    graduated: 'bounce-defense',
  },
  {
    repo: 'AlchemyBall',
    name: 'Alchemy Ball',
    line: { en: 'Every collision changes the ball.', fa: 'هر برخورد، توپ را دگرگون می‌کند.' },
    glyph: 'alchemy',
    series: 'bounce',
    play: playAt('alchemy-ball'),
  },
  {
    repo: 'GhostBounce',
    name: 'Ghost Bounce',
    line: { en: 'Every failed attempt becomes a ghost teammate.', fa: 'هر تلاش ناموفق، یک هم‌تیمیِ شبح می‌شود.' },
    glyph: 'ghost',
    series: 'bounce',
    play: playAt('ghost-bounce'),
  },
  {
    repo: 'FluidBall',
    name: 'Fluid Ball',
    line: { en: 'Swim in water. Fall upward in lava. Float in the void.', fa: 'در آب شنا کن، در گدازه رو به بالا بیفت، در خلأ شناور شو.' },
    glyph: 'fluid',
    series: 'bounce',
    play: playAt('fluid-ball'),
  },
  {
    repo: 'Lifeform',
    name: 'Lifeform',
    line: { en: 'Build a living creature. Leave a lineage.', fa: 'یک موجود زنده بساز. نسلی به جا بگذار.' },
    glyph: 'cell',
    series: 'worlds',
    play: playAt('lifeform'),
  },
  {
    repo: 'Gravityborn',
    name: 'Gravityborn',
    line: { en: 'Turn the entire room into a weapon.', fa: 'کل اتاق را به سلاح تبدیل کن.' },
    glyph: 'gravity',
    series: 'worlds',
    play: playAt('gravityborn'),
  },
  {
    repo: 'DungeonArchitect',
    name: 'Dungeon Architect',
    line: { en: 'You are not the hero. You are the dungeon’s architect.', fa: 'تو قهرمان نیستی؛ معمار سیاه‌چالی.' },
    glyph: 'dungeon',
    series: 'worlds',
    play: playAt('dungeon-architect'),
  },
  {
    repo: 'AlchemyWars',
    name: 'Alchemy Wars',
    line: { en: 'Collect elements, not heroes. Watch the reactions fight.', fa: 'عنصر جمع کن، نه قهرمان. نبرد واکنش‌ها را تماشا کن.' },
    glyph: 'alchemy',
    series: 'worlds',
    play: playAt('alchemy-wars'),
  },
  {
    repo: 'Echo',
    name: 'Echo',
    line: { en: 'Cooperate with earlier versions of yourself. Made in Godot.', fa: 'با نسخه‌های قبلیِ خودت همکاری کن. ساخته‌شده با Godot.' },
    glyph: 'ghost',
    series: 'worlds',
  },
  {
    repo: 'TinyUniverse',
    name: 'Tiny Universe',
    line: { en: 'Begin with one tiny planet. End with another Big Bang.', fa: 'با یک سیارهٔ کوچک شروع کن؛ با مه‌بانگی دیگر تمام کن.' },
    glyph: 'orbit',
    series: 'worlds',
    play: playAt('tiny-universe'),
  },
  {
    repo: 'MonsterWorkshop',
    name: 'Monster Workshop',
    line: { en: 'Build creatures that could never exist in nature.', fa: 'موجوداتی بساز که هرگز در طبیعت وجود نداشته‌اند.' },
    glyph: 'cell',
    series: 'worlds',
    play: playAt('monster-workshop'),
  },
  {
    repo: 'Riftbound',
    name: 'Riftbound',
    line: { en: 'One more night. Twelve outcasts, one spellbook.', fa: 'یک شب دیگر. دوازده رانده‌شده، یک کتاب جادو.' },
    glyph: 'rift',
    series: 'worlds',
    play: playAt('riftbound'),
  },
  {
    repo: 'overload',
    name: 'Overload',
    line: { en: 'An action RPG about earning the right to rewrite one rule.', fa: 'نقش‌آفرینی اکشنی دربارهٔ به دست آوردنِ حقِ بازنویسیِ یک قانون.' },
    glyph: 'rift',
    series: 'worlds',
  },
  {
    repo: 'wow-survivors',
    name: 'Wow Survivors',
    line: { en: 'A survival roguelite, solo or two-player couch co-op.', fa: 'روگ‌لایت بقا، تک‌نفره یا دونفره روی یک دستگاه.' },
    glyph: 'swarm',
    series: 'worlds',
    play: playAt('wow-survivors'),
  },
  {
    repo: 'soulforge',
    name: 'Soulforge',
    line: { en: 'Twelve characters, thirty-five weapons, one endless night.', fa: 'دوازده شخصیت، سی‌وپنج سلاح، یک شب بی‌پایان.' },
    glyph: 'rift',
    series: 'worlds',
    graduated: 'soulforge',
  },
];
