<script lang="ts">
	interface Props {
		text: string
	}

	const { text }: Props = $props()

	// Setting a bunch of info related to rows

	const rowCount: number = 12

	const rowArray: Array<number> = new Array(rowCount).fill(0).map((value: number, index: number) => index)

	let rowHeight: number = $state(0)

	// Creating logic for filling screen no matter the length of the text
	let textElements: Array<string> = $derived(Array(100).fill(text))
</script>

<div class="container" style:grid-template-rows={`repeat(${rowCount}, 1fr)`}>
	{#each rowArray as row}
		<div
			class="row"
			bind:clientHeight={rowHeight}
			style:font-size={`${rowHeight}px`}
			style:line-height={`${rowHeight}px`}
		>
			{#each textElements as elem}
				<span
					class={'marquee marqueeAnimated'}
					style:animation-direction={row % 2 === 1 ? 'normal' : 'reverse'}
					style:animation-duration={`${text.length / 2}s`}
				>
					{elem.toUpperCase()}
				</span>
			{/each}
		</div>
	{/each}
</div>

<style>
	.container {
		max-width: 100%;
		height: 100%;
		overflow: hidden;
		display: grid;
		background-color: var(--color-primary);
		color: var(--color-secondary);
	}

	.row {
		overflow: hidden;
		display: flex;
		flex-wrap: nowrap;
	}

	.marquee {
		display: inline-block;
	}

	.marqueeAnimated {
		animation-name: marquee;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
	}

	@keyframes marquee {
		0% {
			transform: translateX(0%);
		}
		100% {
			transform: translateX(-100%);
		}
	}
</style>
