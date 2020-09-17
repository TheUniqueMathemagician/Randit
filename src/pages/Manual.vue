<template>
	<q-page>
		<section>
			<h1>Manuel</h1>
			<br />
			<h2>Barre de menu</h2>
			<br />
			<div class='menugrid'>
				<div>
					<q-tree
						:nodes='simple'
						node-key='label'
						selected-color='primary'
						:selected.sync='selected'
						default-expand-all
					/>
				</div>

				<q-tab-panels
					:keep-alive='true'
					v-model='selected'
					animated
					transition-prev='jump-up'
					transition-next='jump-up'
				>
					<!-- Level 1 -->

					<q-tab-panel
						dark
						name='Menu'
					>
						<div class='text-h4 q-mb-md'>Menu</div>
						<p>Le menu dispose de plusieurs raccourcis permettant une navigation plus aisée de l'application</p>
					</q-tab-panel>

					<!-- Level 2 -->

					<q-tab-panel name='Fichier'>
						<div class='text-h4 q-mb-md'>Fichier</div>
						<p>Cet onglet regroupe les actions relatives à l'application.</p>
					</q-tab-panel>

					<q-tab-panel name='Générer'>
						<div class='text-h4 q-mb-md'>Générer</div>
						<p>Cet onglet regroupe les actions de génération.</p>
					</q-tab-panel>

					<q-tab-panel name='Aide'>
						<div class='text-h4 q-mb-md'>Aide</div>
						<p>Cet onglet regroupe des pages contenant des informations utiles.</p>
					</q-tab-panel>

					<!-- Level 3 -->

					<q-tab-panel name='Préférences'>
						<div class='text-h4 q-mb-md'>Préférences</div>
						<p class='q-mb-md'>Affiche les options.</p>
						<div class='text-h5 q-mb-md'>Le saviez-vous ?</div>
						<p class='q-mb-md'>
							En choisissant soigneusement les caractères que vous mettez dans les "caractères spéciaux", vous pouvez créer votre propre liste.
							Si vous sélectionnez uniquement les caractères spéciaux lors de la génération, vous aurez ainsi une clé entièrement personnalisée.
						</p>
						<p
							class='q-mb-md'
						>Vous pouvez définir des préférences qui seront sauvegardées même après redémarrage de l'application.</p>
						<p class='q-mb-md'>
							Mettre plusieurs occurences du même caractère spécial dans le set
							multipliera proportionnellement le taux de chance d'apparition de celui-ci.
						</p>
					</q-tab-panel>

					<q-tab-panel name='Quitter'>
						<div class='text-h4 q-mb-md'>Quitter</div>
						<p>Ferme l'application</p>
					</q-tab-panel>

					<q-tab-panel name='Clés'>
						<div class='text-h4 q-mb-md'>Clés</div>
						<p>Génère des clés.</p>
					</q-tab-panel>

					<q-tab-panel name='Dés'>
						<div class='text-h4 q-mb-md'>Dés</div>
						<p>Génère des lancés de dés.</p>
					</q-tab-panel>

					<q-tab-panel name='Mots'>
						<div class='text-h4 q-mb-md'>Mots</div>
						<p>Génère des mots selon un dictionnaire fourni. (à venir)</p>
					</q-tab-panel>

					<q-tab-panel name='Manuel'>
						<div class='text-h4 q-mb-md'>Manuel</div>
						<p>Affiche le manuel de l'application.</p>
					</q-tab-panel>

					<q-tab-panel name='A propos'>
						<div class='text-h4 q-mb-md'>A propos</div>
						<p>Génère des mots selon un dictionnaire fourni. (à venir)</p>
					</q-tab-panel>
				</q-tab-panels>
			</div>
			<br />
			<h2>Utilisation</h2>
			<br />
			<div class='menugrid'>
				<q-tabs
					v-model='tab'
					vertical
					class='text-teal'
					indicator-color='primary'
					active-color='primary'
					active-bg-color='primary'
				>
					<q-tab
						name='keys'
						label='Clés'
					/>
					<q-tab
						name='dices'
						label='Dés'
					/>
					<q-tab
						name='words'
						label='Mots'
					/>
				</q-tabs>
				<q-tab-panels
					v-model='tab'
					animated
					swipeable
					vertical
				>
					<q-tab-panel name='keys'>
						<q-img
							:src=' require('../../assets/dice_options.png')'
							class='q-mb-md'
						></q-img>
						<p>Pour sélectionner une option ou non, il suffit de cliquer sur la ligne correspondante.</p>
						<p>Pour changer le nombre de caractères à générer, cliquez sur le nombre ou utilisez la roulette de la souris sur celui-ci.</p>
						<p>
							<span>Vous pouvez définir des critères pour la génération de vos clés. Si vous désirez que ces modifications soient permanentes, vous pouvez vous rendre dans les&nbsp;</span>
							<input-link href='/settings'>préférences</input-link>
							<span>&nbsp;et enregistrer votre configuration.</span>
						</p>
						<p>cliquez sur le bouton pour générer la clé.</p>
						<q-img
							:src=' require('../../assets/dice_generate.png')'
							class='q-mb-md q-mt-md'
						></q-img>
						<p>Le résultat est alors affiché dans l'encadré du dessous</p>
						<q-img
							:src=' require('../../assets/dice_result.png')'
							class='q-mt-md'
						></q-img>
					</q-tab-panel>

					<q-tab-panel name='dices'>
						<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
						<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
					</q-tab-panel>

					<q-tab-panel name='words'>
						<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
						<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
						<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
					</q-tab-panel>
				</q-tab-panels>
			</div>
			<br />
		</section>
		<section>

		</section>
	</q-page>
</template>

<script>
	export default {
		data() {
			return {
				splitterModel: 20,
				selected: 'Menu',
				tab: 'Clés',
				simple: [
					{
						label: 'Menu',
						children: [
							{
								label: 'Fichier',
								icon: undefined,
								children: [
									{
										label: 'Préférences',
									},
									{
										label: 'Quitter',
									},
								],
							},
							{
								label: 'Générer',
								icon: undefined,
								children: [
									{
										label: 'Clés',
									},
									{
										label: 'Dés',
									},
									{
										label: 'Mots',
									},
								],
							},
							{
								label: 'Aide',
								icon: undefined,
								children: [
									{
										label: 'Manuel',
									},
									{
										label: 'A propos',
									},
								],
							},
						],
					},
				],
			}
		},
		name: 'manual_page',
	}
</script>

<style scoped>
	.q-tab-panels {
		background-color: transparent;
		background-color: var(--color-6);
		height: 100%;
		width: 100%;
	}
	.q-tree__node-header-content,
	.q-tree {
		color: white;
	}
	/* .q-tab-panel {
	  padding: 0;
	} */
	.menugrid {
		display: grid;
		grid-template-columns: auto 1fr;
		column-gap: 1rem;
		align-items: flex-start;
	}
	@media screen and (max-width: 600px) {
		.menugrid {
			grid-template-columns: auto;
			justify-items: center;
		}
	}
</style>
