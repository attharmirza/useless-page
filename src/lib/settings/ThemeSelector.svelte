<script lang="ts">
	import type { ThemeName } from '@/utils'
	import { setCookie, themes } from '@/utils'
	import { writable, type Writable } from 'svelte/store'

	interface Props {
		name: ThemeName
	}

	const { name }: Props = $props()

	export const activeTheme: Writable<ThemeName> = writable<ThemeName>('lkdjs')

	const setTheme = (name: ThemeName) => {
		setCookie('theme', name)
	}
</script>

<p class="selector">{name}</p>

<style>
	p {
		margin: 0;
	}
</style>
