<script lang="ts">
	import type { ThemeName } from '@/utils'
	import { setCookie, themes, activeTheme } from '@/utils'

	export let name: ThemeName = 'Seashell Pink & Deep Slate Green'

	const setTheme = (name: ThemeName) => {
		setCookie('theme', name)
		activeTheme.set(name)
	}

	const themeColors = themes[name]
</script>

<button
	class="selector"
	onclick={() => setTheme(name)}
	style={`color: ${themeColors.light}; background-color: ${themeColors.dark}`}
>
	<span class="selectorText">{name}</span>
</button>

<style>
	.selector {
		all: unset;
		width: 100%;
		height: 100%;
		white-space: nowrap;
		cursor: auto;
	}

	.selector:hover {
		cursor: pointer;
	}
</style>
