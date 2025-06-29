/**
 * A Useless Page color theme.
 *
 * All themes based on the "Haishoku Soukan" by Sanzo Wada, as depicted in the book "A Dictionary of Color Combinations."
 *
 * @see https://www.giuseppegallo.design/books-for-architects-and-designers/a-dictionary-of-color-combinations-sanzo-wada/
 */

interface ThemeDefinition {
	/**
	 * Name of the theme, the two colors separated by an ampersand.
	 */
	name: string
	/**
	 * The brighter of the two colors, should always be a CSS compatible format.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
	 */
	light: string
	/**
	 * The darker of the two colors, should always be a CSS compatible format.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
	 */
	dark: string
}

/**
 * Available themes for use in the application. The key is the theme name, and the value is an object with `light` and `dark` color values.
 *
 * All themes based on the "Haishoku Soukan" by Sanzo Wada, as depicted in the book "A Dictionary of Color Combinations."
 *
 * @see https://www.giuseppegallo.design/books-for-architects-and-designers/a-dictionary-of-color-combinations-sanzo-wada/
 */
const themeDefinitions = {
	['Seashell Pink & Deep Slate Green']: {
		light: 'rgb(255, 207, 196)',
		dark: 'rgb(15, 38, 31)'
	},
	['Glaucous Green & Orange']: {
		light: 'rgb(179, 232, 194)',
		dark: 'rgb(255, 82, 0)'
	},
	['Pale Lemon Yellow & Raw Sienna']: {
		light: 'rgb(255, 245, 158)',
		dark: 'rgb(184, 94, 0)'
	},
	['Old Rose & White']: {
		light: 'rgb(255, 255, 255)',
		dark: 'rgb(217, 77, 153)'
	},
	['Sulphur Yellow & Light Mauve']: {
		light: 'rgb(245, 245, 184)',
		dark: 'rgb(145, 97, 242)'
	}
} as const

/**
 * A valid theme name.
 */
export type ThemeName = keyof typeof themeDefinitions

/**
 * Generate a map from an array of theme definitions.
 *
 * @returns A map for theme definitions
 */
const generateThemes = () => new Map(themeDefinitions.map((d) => [d.name, d]))

/**
 * All Useless Page color themes, accessible through their names.
 */
export const themes: Map<ThemeName, ThemeDefinition> = generateThemes()
