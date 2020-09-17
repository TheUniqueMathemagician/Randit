<template>
	<q-page class='q-pa-md'>
		<!-- <header>
			<h1 class='text-center'>{{ $t("ABOUT_THIS_APP") }}</h1>
		</header>

		<section>
			<q-timeline layout='comfortable'>
				<q-timeline-entry heading>Ligne du temps</q-timeline-entry>
				<q-timeline-entry
					color='white'
					:key='"timeline" + index'
					:subtitle='item.completionDate'
					:title='item.title'
					:avatar='index === 0 ? newIconURL : undefined'
					v-for='(item, index) in timeline'
				>
					<q-expansion-item label='Détails'>
						<template v-slot:header>
							<q-item-section avatar>
								<q-avatar>
									<img :src='require(`../../assets/${item.role}.png`)' />
								</q-avatar>
							</q-item-section>
							<q-item-section>
								{{
								{ trash: "Modification", new: "Ajout" }[item.role]
								}}
							</q-item-section>
						</template>
						<p>{{ item.description }}</p>
					</q-expansion-item>
				</q-timeline-entry>
				<q-timeline-entry heading>Future améliorations</q-timeline-entry>
				<q-timeline-entry
					subtitle='À venir'
					:body='item.description'
					color='white'
					:key='"roadmap_" + index'
					:title='item.title'
					v-for='(item, index) in roadmap'
				/>
			</q-timeline>
		</section>-->

		<section>
			<!-- <h2>En cours</h2> -->
			<!-- <q-list>
        <q-item>
          <q-item-section>
            <q-item-label lines="1">Photos</q-item-label>
            <q-item-label caption>February 22nd, 2019</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-item-label lines="1">Photos</q-item-label>
            <q-item-label caption>February 22nd, 2019</q-item-label>
          </q-item-section>
        </q-item>
        <q-item>test</q-item>
        <q-item>test</q-item>
			</q-list>-->
		</section>

		<footer>
			<h2>Quelque chose à signaler?</h2>
			<p>Vous pouvez signaler un bug ou des suggestions à</p>
			<p>Application faite avec amour par Ambrelium &copy;.</p>
			<p class='q-mb-md'>
				<q-btn
					type='a'
					@click.prevent.stop='$router.go(-1)'
					color='primary'
				>Retour</q-btn>
			</p>
		</footer>
	</q-page>
</template>

<script>
	export default {
		computed: {
			newIconURL() {
				return require('../assets/cake.png')
			},
		},
		data() {
			return {
				timeline: [
					{
						completionDate: '11 Février 2020',
						description:
							"Ca y est ! L'application est enfin sortie dans sa première version !",
						role: 'new',
						title: 'Lancement de la première release',
					},
					{
						completionDate: '13 Février 2020',
						description:
							'La palette de couleur a été légèrement modifiée pour une meilleure expérience.',
						role: 'trash',
						title: 'Ajustement de la palette de couleurs',
					},
					{
						completionDate: '20 Février 2020',
						title: "Ajout d'une icône d'application",
						role: 'new',
						description: "Une icône d'application a été ajoutée.",
					},
					{
						completionDate: '21 Février 2020',
						description: 'Une barre de menu contenant des option a été ajoutée.',
						role: 'new',
						title: "Ajout d'un menu",
					},
					{
						completionDate: '22 Février 2020',
						description:
							'Tu peux désormais modifier tes préférences et les sauvegarder.',
						role: 'new',
						title: 'Ajout des préférences',
					},
					{
						completionDate: '24 Février 2020',
						description:
							"Un manuel d'utilisation t'aidera lorsque perdu tu seras.",
						role: 'new',
						title: "Ajout d'un manuel",
					},
					{
						completionDate: '11 Avril 2020',
						description:
							"L'application dispose désormais de traductions ! Tu peux maintenant choisir une langue.",
						role: 'new',
						title: 'Traductions',
					},
				],
				roadmap: [
					{
						description:
							"La zone de clés générées ne se redimentionne pas correctement, et le texte n'est pas centré.",
						role: 'new',
						title: 'Redimensionnement automatique de la zone de clés générées',
					},
					{
						description:
							"La zone de clés générées ne se redimentionne pas correctement, et le texte n'est pas centré.",
						role: 'new',
						title: 'Redimensionnement automatique de la zone de clés générées',
					},
					{
						description: 'Le dictionnaire serait en ligne.',
						role: 'new',
						title: 'Dictionnaire en ligne',
					},
					{
						description:
							'Les profils permettent de sauvegarder des configurations différentes, et en changer facilement',
						role: 'new',
						title: 'Profils',
					},
					{
						description:
							"Ajout d'une option pour ajuster la fréquence des caractères spéciaux.",
						role: 'new',
						title: 'Fréquence des caractères spéciaux',
					},
				],
			}
		},
		name: 'about_page',
	}
</script>
