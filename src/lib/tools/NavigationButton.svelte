<script lang="ts">
	import { goto } from '$app/navigation'

	interface Props {
		route: string
		text: string
	}

	const { route, text }: Props = $props()
</script>

<button class="button" onclick={() => goto(route)}><b>{text}</b></button>

<style>
	.button {
		position: absolute;
		top: 1rem;
		right: 1rem;
		padding: 0.5rem;
		border: 3px solid var(--color-light);
		z-index: 100;
		background-color: var(--color-dark);
		color: var(--color-light);
		border-radius: 0.5rem;
		font-size: 1rem;
	}

	.button:hover {
		cursor: pointer;
	}
</style>
