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
	let rowWidth: number = $state(0)
	let textWidth: number = $state(0)

	let textRepetitions: number = $derived(textWidth > 0 && rowWidth > 0 ? Math.ceil(rowWidth / textWidth) : 0)

	interface TextElements {
		isPlaying: boolean
		elements: Array<string>
	}

	let textElements: TextElements = $state({
		isPlaying: false,
		elements: []
	})

	$effect(() => {
		textElements.isPlaying = false

		if (textRepetitions <= 2) {
			textElements.elements = Array(2).fill(text)
			textElements.isPlaying = true
			return
		}

		textElements.elements = Array(textRepetitions).fill(text)
		textElements.isPlaying = true

		return
	})

	$effect(() => console.log(textElements.isPlaying))
</script>

<div class="container" style:grid-template-rows={`repeat(${rowCount}, 1fr)`}>
	{#each rowArray as row}
		<div
			class="row"
			bind:clientWidth={rowWidth}
			bind:clientHeight={rowHeight}
			style:font-size={`${rowHeight}px`}
			style:line-height={`${rowHeight}px`}
		>
			{#each textElements.elements as elem}
				<span
					class={`marquee ${textElements.isPlaying ? 'marqueeAnimated' : ''}`}
					style:animation-direction={row % 2 === 1 ? 'normal' : 'reverse'}
					style:animation-duration={`${text.length / 2}s`}
					bind:offsetWidth={textWidth}
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
