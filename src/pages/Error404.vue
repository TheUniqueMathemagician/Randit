<template>
	<main>
		<p>
			<img src='~assets/sad.svg' />
		</p>
		<p class='text-faded'>
			Sorry, nothing here...
			<strong>(404)</strong>
		</p>
		<RouterLink to='/'>Retour à l'accueil</RouterLink>
	</main>
</template>

<script>
	export default {
		name: 'Error404_page',
	}
</script>

<style lang="scss" scoped>
	img {
		width: 30vw;
		max-width: 150px;
	}
</style>
