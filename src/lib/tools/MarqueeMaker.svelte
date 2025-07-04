<script lang="ts">
	interface Props {
		text?: string
		separator?: string
		speed?: number
		isCentered?: boolean
	}

	let { text = '&nbsp;', separator = '', speed = 10, isCentered = false }: Props = $props()

	let containerWidth = $state<number>(100)
	let textWidth = $state<number>(90)

	let isAnimated = $derived<boolean>(textWidth > containerWidth)

	let animationDuration = $derived<string>(`${textWidth * speed}ms`)
</script>

<span class="marqueeContainer" class:centered={isCentered} bind:clientWidth={containerWidth}>
	<span
		class="marqueeContent"
		class:animated={isAnimated}
		style={`animation-duration: ${animationDuration}`}
		bind:clientWidth={textWidth}
	>
		{text}{#if isAnimated}<span class="spacer">{separator}</span>{/if}
	</span>
	{#if isAnimated}
		<span class="marqueeContent" class:animated={isAnimated} style={`animation-duration: ${animationDuration}`}>
			{text}<span class="spacer">{separator}</span>
		</span>
	{/if}
</span>

<style>
	.marqueeContainer {
		display: flex;
		justify-content: start;
	}

	.marqueeContent {
		white-space: nowrap;
	}

	.centered {
		justify-content: space-around;
	}

	.animated {
		animation-name: marquee;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
	}

	.spacer {
		display: inline-block;
		text-align: center;
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
