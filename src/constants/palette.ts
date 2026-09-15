/**
 * Single source of truth for every color used in the project.
 *
 * Components consume the Tailwind-free CSS custom properties generated below
 * (`paletteCssVars`) instead of hard-coding hex values, so a change here
 * propagates through the whole site.
 */

/** Base palette from the brief. */
export const palette = {
	casualWhite: '#FBF9F2',
	lightGold: '#E8D59E',
	roseGold: '#D9BBB0',
	champagne: '#F7E6CA',
	desertBeige: '#AD9C8E',
} as const;

/** Supporting tones derived from the base palette (kept minimal and muted). */
export const accents = {
	/** Warm near-black used for type and deep surfaces. */
	ink: '#2A2421',
	/** Softer body copy. */
	inkSoft: '#5C5148',
	/** Deepest glass surface, used behind media. */
	shadow: '#1E1916',
	/** Very light wash for section backgrounds. */
	linen: '#F5F0E4',
} as const;

/** Semantic tokens so components read intent, not raw color names. */
export const theme = {
	bg: palette.casualWhite,
	bgAlt: accents.linen,
	text: accents.ink,
	textMuted: accents.inkSoft,
	accent: palette.lightGold,
	accentAlt: palette.roseGold,
	surfaceGlass: 'rgba(251, 249, 242, 0.55)',
	surfaceGlassStrong: 'rgba(251, 249, 242, 0.78)',
	borderGlass: 'rgba(255, 255, 255, 0.55)',
	borderSoft: 'rgba(173, 156, 142, 0.35)',
	surfaceDarkGlass: 'rgba(30, 25, 22, 0.42)',
	onDark: palette.casualWhite,
} as const;

/** [custom-property, value] pairs exported as CSS variables on :root. */
const cssVarEntries: Array<[string, string]> = [
	['--color-casual-white', palette.casualWhite],
	['--color-light-gold', palette.lightGold],
	['--color-rose-gold', palette.roseGold],
	['--color-champagne', palette.champagne],
	['--color-desert-beige', palette.desertBeige],
	['--color-ink', accents.ink],
	['--color-ink-soft', accents.inkSoft],
	['--color-shadow', accents.shadow],
	['--color-linen', accents.linen],
	['--color-bg', theme.bg],
	['--color-bg-alt', theme.bgAlt],
	['--color-text', theme.text],
	['--color-text-muted', theme.textMuted],
	['--color-accent', theme.accent],
	['--color-accent-alt', theme.accentAlt],
	['--surface-glass', theme.surfaceGlass],
	['--surface-glass-strong', theme.surfaceGlassStrong],
	['--border-glass', theme.borderGlass],
	['--border-soft', theme.borderSoft],
	['--surface-dark-glass', theme.surfaceDarkGlass],
	['--color-on-dark', theme.onDark],
];

/** The palette serialised as a `:root { … }` CSS block. */
export const paletteCssVars = `:root{${cssVarEntries
	.map(([name, value]) => `${name}:${value};`)
	.join('')}}`;

/** Readable map for the (rare) places that need a value in TypeScript. */
export const colorVars = Object.fromEntries(
	cssVarEntries.map(([name, value]) => [name.replace(/^--/, ''), value]),
) as Record<string, string>;
