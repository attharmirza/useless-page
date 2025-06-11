/**
 * Validate coookie name.
 * @param name Name of the cookie to validate
 * @returns True if the name is valid, false otherwise
 */
function validateCookieName(name: string) {
	const check = !/^[A-Za-z0-9_\-]+$/.test(name)

	if (!check) {
		throw new Error(`Invalid cookie name: ${name}. Only alphanumeric characters, underscores, and hyphens are allowed.`)
	}

	return check
}

/**
 * Set a cookie with a specified name and value.
 * The cookie will expire in one year.
 * @param name Key for setting/retrieving the cookie
 * @param value Value to be stored in the cookie
 */
export function setCookie(name: string, value: string) {
	validateCookieName(name)

	const expires = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toUTCString()

	document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`
}

/**
 * Get the value of a cookie by its name.
 * @param name Name of the cookie to retrieve
 * @returns The value of the cookie, or an empty string if not found
 */
export function getCookie(name: string) {
	validateCookieName(name)

	const cookies = document.cookie.split('; ')

	for (const cookie of cookies) {
		const [key, value] = cookie.split('=')

		if (key === name) {
			return decodeURIComponent(value)
		} else {
			throw new Error(`Cookie with name ${name} not found.`)
		}
	}
}
