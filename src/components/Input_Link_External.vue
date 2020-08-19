<template>
	<a
		href='/'
		@click='handleClick($event)'
	>
		<slot></slot>
	</a>
</template>

<script>
	export default {
		methods: {
			handleClick(a_event) {
				if (this.$q.platform.is.electron) {
					window.require('electron').shell.openExternal(this.href)
				} else {
					a_event.prevenDefault()
				}
			},
		},
		props: {
			href: {
				type: String,
				require: true,
				default: 'www.google.com',
			},
		},
	}
</script>

<style scoped>
	a {
		color: var(--color-2);
		font-size: 1rem;
	}
	a:hover {
		color: var(--color-1);
	}
	a:visited {
		color: initial;
	}
</style>
