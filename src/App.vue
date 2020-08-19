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
			} else {
				const config_dice = {
					customDefault: 5,
					defaults: [4, 6, 8, 10, 12, 20, 30, 100],
					details: false,
				}
				const config_key = {
					amount: 20,
					fields: {
						digits: true,
						lowercase: true,
						specialChars: true,
						uppercase: true,
					},
					specialCharset: '#&*-+=',
				}
				const config_word = {}

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
