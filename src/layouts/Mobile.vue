
<template>
	<q-layout view='lHr lpR lfr'>
		<q-header
			elevated
			class='bg-primary text-white'
			height-hint='98'
		>
			<q-toolbar>
				<q-btn
					dense
					flat
					round
					icon='menu'
					@click='drawer = !drawer'
				/>

				<q-toolbar-title>
					<!-- <q-avatar>
						<img src='https://cdn.quasar.dev/logo/svg/quasar-logo.svg' />
					</q-avatar>Title-->
				</q-toolbar-title>

				<q-btn label='Générer'>
					<q-menu
						fit
						anchor='bottom left'
						self='top left'
						class='bg-dark'
					>
						<q-list
							style='min-width: 100px'
							class='bg-dark'
						>
							<q-item
								active-class='text-accent'
								clickable
								to='/dice'
							>
								<q-item-section>Dés</q-item-section>
							</q-item>
							<q-item
								active-class='text-accent'
								clickable
								to='/key'
							>
								<q-item-section>Clés</q-item-section>
							</q-item>
							<q-item
								active-class='text-accent'
								clickable
								to='/wheel'
							>
								<q-item-section>Roue</q-item-section>
							</q-item>
							<q-item
								active-class='text-accent'
								clickable
								to='/word'
							>
								<q-item-section>Mots</q-item-section>
							</q-item>
							<q-separator color='white' />
							<q-item
								active-class='text-accent'
								clickable
								to='manual'
							>
								<q-item-section>Help &amp; Feedback</q-item-section>
							</q-item>
						</q-list>
					</q-menu>
				</q-btn>
			</q-toolbar>
		</q-header>

		<q-drawer
			dark
			v-model='drawer'
			:mini='!drawer || miniState'
			@click.stop='miniState = false'
			:width='250'
			:breakpoint='500'
			content-class='bg-dark'
			class='relative'
		>
			<q-scroll-area class='fit'>
				<q-list class='q-py-md'>
					<q-item
						clickable
						v-ripple
						to='/'
						exact
						active-class='text-secondary'
					>
						<q-item-section avatar>
							<q-icon name='home' />
						</q-item-section>

						<q-item-section>Accueil</q-item-section>
					</q-item>

					<q-separator
						inset
						class='q-my-md'
						color='white'
					></q-separator>

					<q-item
						clickable
						v-ripple
						to='/dice'
						active-class='text-secondary'
					>
						<q-item-section avatar>
							<q-icon name='link' />
						</q-item-section>

						<q-item-section>Lancés de dés</q-item-section>
					</q-item>

					<q-item
						clickable
						v-ripple
						to='/key'
						active-class='text-secondary'
					>
						<q-item-section avatar>
							<q-icon name='link' />
						</q-item-section>

						<q-item-section>Générateur de clés</q-item-section>
					</q-item>

					<q-item
						clickable
						v-ripple
						to='/wheel'
						active-class='text-secondary'
					>
						<q-item-section avatar>
							<q-icon name='link' />
						</q-item-section>

						<q-item-section>Roue de la fortune</q-item-section>
					</q-item>

					<q-item
						clickable
						v-ripple
						to='/word'
						active-class='text-secondary'
					>
						<q-item-section avatar>
							<q-icon name='link' />
						</q-item-section>

						<q-item-section>Générateur de mots</q-item-section>
					</q-item>

					<q-separator
						inset
						class='q-my-md'
						color='white'
					></q-separator>

					<q-item
						clickable
						v-ripple
						to='/manual'
						active-class='text-secondary'
					>
						<q-item-section avatar>
							<q-icon name='help' />
						</q-item-section>

						<q-item-section>Aide</q-item-section>
					</q-item>

					<q-item
						clickable
						v-ripple
						to='/about'
						active-class='text-secondary'
					>
						<q-item-section avatar>
							<q-icon name='help' />
						</q-item-section>

						<q-item-section>A propos</q-item-section>
					</q-item>

					<template v-if='$firebase.auth().currentUser'>
						<q-separator
							inset
							class='q-my-md'
							color='white'
						></q-separator>

						<q-item
							clickable
							v-ripple
							to='/about'
							active-class='text-secondary'
						>
							<q-item-section avatar>
								<q-icon name='settings' />
							</q-item-section>

							<q-item-section>Réglages</q-item-section>
						</q-item>
					</template>
				</q-list>
			</q-scroll-area>

			<!--
          in this case, we use a button (can be anything)
          so that user can switch back
          to mini-mode
			-->
			<!-- <div
				class='q-mini-drawer-hide absolute'
				style='top: 15px; right: -17px'
			>
				<q-btn
					dense
					round
					unelevated
					color='accent'
					icon='chevron_left'
					@click='miniState = true'
				/>
			</div>-->
		</q-drawer>

		<q-page-container>
			<router-view class='q-pa-md' />
		</q-page-container>

		<q-footer
			elevated
			class='bg-primary text-white'
		>
			<q-toolbar>
				<q-toolbar-title class='text-center'>
					Copy &copy; Ambrelium 2020
					<!-- <q-avatar>
						<img src='https://cdn.quasar.dev/logo/svg/quasar-logo.svg' />
					</q-avatar>Title-->
				</q-toolbar-title>
			</q-toolbar>
		</q-footer>
	</q-layout>
</template>

<script>
	export default {
		computed: {
			isMobile() {
				return this.$q.platform.is.mobile
			},
		},
		data() {
			return {
				drawer: false,
			}
		},
	}
</script>

<style lang="scss" scoped>
	img {
		object-fit: cover;
		object-position: center;
	}
</style>
