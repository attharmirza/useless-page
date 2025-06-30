import { writable } from 'svelte/store'
import { getCookie } from '@/utils'

/**
 * Available themes for use in the application. The key is the theme name, and the value is an object with `light`
 * and `dark` color values.
 *
 * All themes based on the "Haishoku Soukan" by Sanzo Wada, as depicted in the book
 * "A Dictionary of Color Combinations."
 *
 * @see https://www.giuseppegallo.design/books-for-architects-and-designers/a-dictionary-of-color-combinations-sanzo-wada/
 *
 * Themes were converted from CMYK using colordesigner.io, a really awesome website by Wojciech Banaś.
 *
 * @see https://colordesigner.io/convert/cmyktorgb
 */
export const themes = {
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
	},
	['Mineral Gray & Pompeian Red']: {
		light: 'rgb(159, 194, 178)',
		dark: 'rgb(169, 6, 54)'
	}
} as const

/**
 * A valid theme name.
 */
export type ThemeName = keyof typeof themes

/**
 * The default theme.
 */
export const defaultTheme: ThemeName = 'Glaucous Green & Orange'

/**
 * Set active theme value based on whether a cookie already exists.
 */
const activeThemeInitialValue = () => {
	try {
		return getCookie('theme') as ThemeName
	} catch (error) {
		return defaultTheme
	}
}

/**
 * A store for the currently selected theme.
 */
export const activeTheme = writable<ThemeName>(activeThemeInitialValue())
