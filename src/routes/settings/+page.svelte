<script lang="ts">
	import { ThemeSelector } from '$lib'
	import { themes, type ThemeName } from '@/utils'

	const themeNames = Object.keys(themes) as ThemeName[]
</script>

<div class="container">
	<div class="row">
		<p>Select a Theme</p>
	</div>
	{#each themeNames as name}
		<div class="row">
			<ThemeSelector {name} />
		</div>
	{/each}
</div>

<style>
	.container {
		--element-height: calc(100vh / 12);

		display: flex;
		flex-direction: column;
		width: 100%;
	}

	.row {
		width: 100%;
		font-size: var(--element-height);
		line-height: var(--element-height);
		max-height: var(--element-height);
		overflow: hidden;
		text-transform: uppercase;
	}

	.row p {
		margin: 0;
	}

	.row :deep(p) {
		margin: 0;
	}
</style>
