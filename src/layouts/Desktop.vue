<template>
	<q-layout view='lHh lpR lFf'>
		<q-header
			:elevated='isMobile'
			class='bg-primary text-white q-ma-none'
			height-hint='98'
		>
			<template>
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

					<q-tabs
						align='justify'
						v-model='tabs'
					>
						<q-route-tab
							to='/key'
							label='Clés'
							name='key'
						/>
						<q-route-tab
							to='/dice'
							label='Dés'
							name='dice'
						/>
						<q-route-tab
							to='/word'
							label='Mots'
							name='word'
						/>
					</q-tabs>
				</q-toolbar>
			</template>
		</q-header>

		<q-drawer
			v-model='drawer'
			side='left'
			bordered
		>
			<!-- drawer content -->
		</q-drawer>

		<q-page-container>
			<router-view />
		</q-page-container>
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
				tabs: '',
			}
		},
	}
</script>
