<template>
	<div id='q-app'>
		<electron v-if='isElectron'></electron>
		<desktop v-else-if='isDesktop'></desktop>
		<mobile v-else-if='isMobile'></mobile>
		<main v-else>Platform couldn't be detected</main>
	</div>
</template>

<script>
	import Desktop from './layouts/Desktop'
	import Electron from './layouts/Electron'
	import Mobile from './layouts/Mobile'
	export default {
		components: {
			Desktop,
			Electron,
			Mobile,
		},
		computed: {
			isElectron() {
				return this.$q.platform.is.electron
			},
			isDesktop() {
				return this.$q.platform.is.desktop
			},
			isMobile() {
				return this.$q.platform.is.mobile
			},
		},
		created() {
			// TODO: load locally and from firebase at the same time. if firebase is loaded, cancel local, if local,
			// still wait firebase to resolve
			this.$firebase.auth().onAuthStateChanged((user) => {
				if (user) {
					this.$store.commit('user/isLoggedIn', true)
					var displayName = user.displayName
					var email = user.email
					var emailVerified = user.emailVerified
					var photoURL = user.photoURL
					var isAnonymous = user.isAnonymous
					var uid = user.uid
					var providerData = user.providerData
				} else {
					this.$store.commit('user/isLoggedIn', false)
				}
				console.log(user)
			})
		},
		methods: {
			// init_electron() {
			// 	const ipc = this.$electron.ipcRenderer
			// 	// IPC events
			// 	ipc.on('maximized', (a_event, a_data) => {
			// 		this.$store.commit('application/maximized', a_data)
			// 	})
			// 	// Send to IPC
			// 	const config_dice = ipc.sendSync('get_config_dice')
			// 	const config_key = ipc.sendSync('get_config_key')
			// 	const config_word = ipc.sendSync('get_config_word')
			// 	this.$store.commit('config/dice', config_dice)
			// 	this.$store.commit('config/key', config_key)
			// 	this.$store.commit('config/word', config_word)
			// 	this.$store.commit('config/dice_settings', config_dice)
			// 	this.$store.commit('config/key_settings', config_key)
			// 	this.$store.commit('config/word_settings', config_word)
			// },
		},
		name: 'App',
	}
</script>
