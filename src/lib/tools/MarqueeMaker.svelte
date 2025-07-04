<script lang="ts">
	interface Props {
		text: string
	}

	const { text }: Props = $props()
</script>

<span class="marqueeContainer">
	<span>{text}</span>
	<span>{text}</span>
</span>

<style>
	.marqueeContainer {
		display: flex;
	}
</style>
