<template>
	<q-layout view='lHh lpR lFf'>
		<q-header
			elevated
			class='bg-primary text-white q-ma-none'
			height-hint='98'
		>
			<q-toolbar class='q-ma-none'>
				<q-btn
					dense
					flat
					round
					icon='menu'
					@click='drawer = !drawer'
				/>

				<q-toolbar-title>
					<!-- <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" />
					</q-avatar>-->
				</q-toolbar-title>

				<q-btn-dropdown
					color='primary'
					label='Générer'
					class='no-border-radius'
				>
					<q-list
						style='background-color:var(--color-6); border-radius: 0;'
						class='no-border-radius no-border'
					>
						<q-item
							clickable
							v-close-popup
							to='/key'
							style='color:var(--color-2);'
						>
							<q-item-section>
								<q-item-label>Clés</q-item-label>
							</q-item-section>
						</q-item>

						<q-item
							clickable
							v-close-popup
							to='/dice'
							style='color:var(--color-2);'
						>
							<q-item-section>
								<q-item-label>Dés</q-item-label>
							</q-item-section>
						</q-item>

						<q-item
							clickable
							v-close-popup
							to='/wheel'
							style='color:var(--color-2);'
						>
							<q-item-section>
								<q-item-label>Roue</q-item-label>
							</q-item-section>
						</q-item>

						<q-item
							clickable
							v-close-popup
							to='/word'
							style='color:var(--color-2);'
						>
							<q-item-section>
								<q-item-label>Mots</q-item-label>
							</q-item-section>
						</q-item>
					</q-list>
				</q-btn-dropdown>
			</q-toolbar>
		</q-header>

		<q-drawer
			v-model='drawer'
			side='left'
			elevated
		>
			<div>Coucou c'est moi</div>
		</q-drawer>

		<q-page-container>
			<router-view />
		</q-page-container>
	</q-layout>
</template>

<script>
	export default {
		data() {
			return {
				drawer: false,
			}
		},
	}
</script>
