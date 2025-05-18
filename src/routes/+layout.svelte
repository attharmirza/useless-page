<script>
	import '@/app.css'
</script>

<svelte:head>
	<title>uSeLeSs</title>
</svelte:head>

<main class="content">
	<slot />
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Ultra&display=swap');

	.content {
		--color-primary: #000000;
		--color-secondary: #aaaaaa;

		font-family: 'Ultra';
		pointer-events: none;
	}
</style>
