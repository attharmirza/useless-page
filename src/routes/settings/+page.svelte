<script lang="ts">
	import { Color } from '$lib'
</script>

<div class="container">
	<div class="row">
		<p>Select a Color</p>
	</div>
	<div class="row">
		<Color name="Basic" dark="#" light="#" />
		<Color name="Warm Tones" dark="#" light="#" />
	</div>
</div>

<style>
	.container {
		--element-height: calc(100vh / 12);

		display: grid;
		grid-template-rows: var(--element-height);
	}

	.row {
		margin: 0;
		font-size: var(--element-height);
		line-height: var(--element-height);
		max-height: var(--element-height);
		overflow: hidden;
	}

	.row p {
		margin: 0;
	}

	.row :deep(p) {
		margin: 0;
	}
</style>
