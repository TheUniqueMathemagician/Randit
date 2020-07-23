<template>
	<electron v-if='$q.platform.is.electron'></electron>
	<desktop v-else-if='$q.platform.is.desktop'></desktop>
	<mobile v-else-if='$q.platform.is.mobile'></mobile>
	<div v-else>Platform couldn't be detected</div>
</template>

<script>
	import Desktop from './Desktop'
	import Electron from './Electron'
	import Mobile from './Mobile'
	export default {
		components: {
			Desktop,
			Electron,
			Mobile,
		},
	}
</script>
