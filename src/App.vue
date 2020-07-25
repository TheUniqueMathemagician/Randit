<template>
	<div id='q-app'>
		<router-view />
	</div>
</template>

<script>
	export default {
		created() {
			if (this.$q.platform.is.electron) {
				const ipc = this.$electron.ipcRenderer

				// IPC events

				ipc.on('maximized', (a_event, a_data) => {
					this.$store.commit('application/maximized', a_data)
				})

				// Send to IPC

				const config_dice = ipc.sendSync('get_config_dice')
				const config_key = ipc.sendSync('get_config_key')
				const config_word = ipc.sendSync('get_config_word')

				this.$store.commit('application/config_dice', config_dice)
				this.$store.commit('application/config_key', config_key)
				this.$store.commit('application/config_word', config_word)

				this.$store.commit('application/config_dice_settings', config_dice)
				this.$store.commit('application/config_key_settings', config_key)
				this.$store.commit('application/config_word_settings', config_word)
			}
		},
		name: 'App',
	}
</script>
