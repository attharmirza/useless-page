<script lang="ts">
	import { goto } from '$app/navigation'

	interface Props {
		route: string
		text: string
	}

	const { route, text }: Props = $props()
</script>

<button class="button" onclick={() => goto(route)}>{text}</button>

<style>
	.button {
		position: absolute;
		top: 1rem;
		right: 1rem;
		border: 1px solid white;
		z-index: 100;
	}
</style>
