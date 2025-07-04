<script lang="ts">
	import { ThemeSelector, NavigationButton, MarqueeMaker } from '$lib'
	import { themes, type ThemeName } from '@/utils'

	const themeNames = Object.keys(themes) as ThemeName[]
</script>

<div class="container">
	<NavigationButton route="/" text="Back" />
	<div class="row"></div>
	<div class="row rowTitle">
		<MarqueeMaker text="Select Theme" isCentered={true} separator="&nbsp;" />
	</div>
	<div class="row"></div>
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
		min-width: 100%;
		min-height: 100vh;
	}

	.row {
		width: 100%;
		font-size: var(--element-height);
		line-height: var(--element-height);
		height: var(--element-height);
		overflow: hidden;
		text-transform: uppercase;
		text-align: center;
	}

	.row p {
		margin: 0;
		white-space: nowrap;
	}

	.row :deep(p) {
		margin: 0;
	}

	.rowTitle {
		color: var(--color-light);
		text-align: center;
	}
</style>
