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

				this.$store.commit(
					'application/config_dice',
					ipc.sendSync('get_config_dice')
				)
				this.$store.commit(
					'application/config_key',
					ipc.sendSync('get_config_word')
				)
				this.$store.commit(
					'application/config_word',
					ipc.sendSync('get_config_key')
				)
			}
		},
		name: 'App',
	}
</script>
