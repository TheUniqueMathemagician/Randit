<template>
	<main>
		<p>
			<img
				src='~assets/sad.svg'
				style='width:30vw;max-width:150px;'
			/>
		</p>
		<p class='text-faded'>
			Sorry, nothing here...
			<strong>(404)</strong>
		</p>
		<a href='/'>page d accueil</a>
		<!-- <InputLinkBackward>Retour</InputLinkBackward> -->
	</main>
</template>

<script>
	// import InputLinkBackward from "../shared/Input_Link_Backward.vue";
	export default {
		components: {
			// InputLinkBackward
		},
		name: 'Error404_page'
	}
</script>
