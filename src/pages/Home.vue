<template>
	<q-page>
		<h3 class='text-center q-my-lg'>Que souaitez-vous faire ?</h3>
		<q-list class='list'>
			<!-- Dice -->
			<q-item
				class='q-pa-none'
				clickable
				to='/dice'
			>
				<q-card class='my-card'>
					<img src='https://geekandsundry.com/wp-content/uploads/2015/10/d20.jpg' />

					<q-card-section>
						<div class='text-h6'>Lancés de dés</div>
						<div class='text-subtitle2'>by Ambrelium</div>
					</q-card-section>

					<q-separator
						inset
						color='white'
					></q-separator>

					<q-card-section
						class='q-pa-md'
					>Cette application vous permet de générer des lancer de dés à volonté</q-card-section>
				</q-card>
			</q-item>

			<!-- Key -->
			<q-item
				class='q-pa-none'
				clickable
				to='/key'
			>
				<q-card class='my-card'>
					<img
						src='https://2018.igem.org/wiki/images/4/47/T--NEFU_China--Introduction01.png'
					/>

					<q-card-section>
						<div class='text-h6'>Générateur de clés</div>
						<div class='text-subtitle2'>by Ambrelium</div>
					</q-card-section>

					<q-separator
						inset
						color='white'
					></q-separator>

					<q-card-section
						class='q-pa-md'
					>Cette application vous permet de générer des clés à volonté, comprenant minuscules, majuscules, chiffres et caractères spéciaux</q-card-section>
				</q-card>
			</q-item>

			<!-- Wheel -->
			<q-item
				class='q-pa-none'
				clickable
				to='/wheel'
			>
				<q-card class='my-card'>
					<img
						src='https://i.pinimg.com/originals/81/47/0c/81470cb968f8e9e61cdfb8384a9385f4.jpg'
					/>

					<q-card-section>
						<div class='text-h6'>Roue de la fortune</div>
						<div class='text-subtitle2'>by Ambrelium</div>
					</q-card-section>

					<q-separator
						inset
						color='white'
					></q-separator>

					<q-card-section
						class='q-pa-md'
					>Cette application vous permet lancer la roue du destin et d'obtenir un résultat aléatoire parmis une sélection personnalisée d'options</q-card-section>
				</q-card>
			</q-item>

			<!-- Word -->
			<q-item
				class='q-pa-none'
				clickable
				to='/word'
			>
				<q-card class='my-card'>
					<img
						src='https://apekshadrishtikon.files.wordpress.com/2013/06/old_armenian_book_by_deviantik.jpg'
					/>

					<q-card-section>
						<div class='text-h6'>Générateur de mots</div>
						<div class='text-subtitle2'>by Ambrelium</div>
					</q-card-section>

					<q-separator
						inset
						color='white'
					></q-separator>

					<q-card-section
						class='q-pa-md'
					>Cette application vous permet de générer des mots provenant de dictionnaires</q-card-section>
				</q-card>
			</q-item>
		</q-list>
	</q-page>
</template>

<script>
	export default {
		name: 'home_page',
	}
</script>

<style lang="scss" scoped>
	.list {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		column-gap: 1rem;
		row-gap: 1rem;
		align-content: center;
		justify-items: center;
	}
	.my-card {
		max-width: 500px;
		cursor: pointer;
		background: var(--color-6);
		position: relative;
		&::before {
			transition: opacity 0.3s ease;
			content: '';
			background: var(--color-3);
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			mix-blend-mode: color;
		}
		&:hover::before {
			opacity: 0;
		}
	}
	img {
		object-fit: cover;
		object-position: center;
		height: 15rem;
	}
</style>
