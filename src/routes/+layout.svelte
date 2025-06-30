<script lang="ts">
	import '@/app.css'
	import { activeTheme, defaultTheme, themes, type ThemeName } from '@/utils'

	let { children } = $props()

	let activeThemeName: ThemeName = $state(defaultTheme)
	let activeThemeColors = $derived(themes[activeThemeName])

	activeTheme.subscribe((v) => (activeThemeName = v))

	const themeColorVariables = $derived(
		`--color-dark: ${activeThemeColors.dark}; --color-light: ${activeThemeColors.light}`
	)
</script>

<svelte:head>
	<title>uSeLeSs</title>
</svelte:head>

<main class="content" style={themeColorVariables}>
	{@render children()}
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Ultra&display=swap');

	.content {
		font-family: 'Ultra';
	}
</style>
