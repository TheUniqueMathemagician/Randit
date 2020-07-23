<template>
	<nav id='mainMenu'>
		<img
			src='~assets/logo.png'
			alt
		/>
		<ul
			class='menu-group'
			@click.stop='toggleModal($event)'
		>
			<li
				class='relative noselect'
				v-for='(item, id) in menu'
				:key='id'
			>
				<div
					@mouseenter='modalNumber = id'
					class='center'
				>{{item.title}}</div>
				<ul
					class='modal'
					:class='{hidden: id !== modalNumber}'
					v-show='modal'
				>
					<li
						v-for='(sub_item, sub_id) in item.children'
						:key='sub_id'
						@click='sub_item.action'
					>{{sub_item.title}}</li>
				</ul>
			</li>
		</ul>
		<div class='drag-zone'></div>
		<div class='window-icons-group'>
			<button
				class='fixed-width'
				@click.prevent='buttonHandler_minimize'
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 24 24'
				>
					<path d='M19 13H5v-2h14v2z' />
					<path
						d='M0 0h24v24H0z'
						fill='none'
					/>
				</svg>
			</button>
			<button
				class='fixed-width'
				@click.prevent='buttonHandler_maximize'
			>
				<svg
					v-if='$store.getters["electron/maximized"]'
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 24 24'
				>
					<path
						d='M0 0h24v24H0z'
						fill='none'
					/>
					<path
						d='M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z'
					/>
				</svg>
				<svg
					v-else
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 24 24'
				>
					<path
						d='M0 0h24v24H0z'
						fill='none'
					/>
					<path
						d='M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H6V6h12v12z'
					/>
				</svg>
			</button>
			<button
				class='red fixed-width'
				@click.prevent='buttonHandler_quit'
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 24 24'
				>
					<path
						d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'
					/>
					<path
						d='M0 0h24v24H0z'
						fill='none'
					/>
				</svg>
			</button>
		</div>
	</nav>
</template>

<script>
	export default {
		data() {
			return {
				clickEventListener: () => {
					this.toggleModal()
				},
				menu: [
					{
						title: 'Fichier',
						action: '',
						children: [
							{
								title: 'Préférences',
								action: () => {
									if (this.$route.path !== '/settings') {
										this.$router.push('/settings')
									}
								}
							},
							{
								title: 'Quitter',
								action: () => {
									this.$store.getters['electron/ipc'].send('quit')
								}
							}
						]
					},
					{
						title: 'Générer',
						action: () => {},
						children: [
							{
								title: 'Clés',
								action: () => {
									if (this.$route.path !== '/generator') {
										this.$router.push('/generator')
									}
								}
							},
							{
								title: 'Dés',
								action: () => {
									if (this.$route.path !== '/dice') {
										this.$router.push('/dice')
									}
								}
							},
							{
								title: 'Mots',
								action: () => {
									return
									if (this.$route.path !== '/generator') {
										this.$router.push('/generator')
									}
								}
							}
						]
					},
					{
						title: 'Aide',
						action: '',
						children: [
							{
								title: 'Manuel',
								action: () => {
									if (this.$route.path !== '/manual') {
										this.$router.push('/manual')
									}
								}
							},
							{
								title: 'A propos',
								action: () => {
									if (this.$route.path !== '/about') {
										this.$router.push('/about')
									}
								}
							}
						]
					}
				],
				modal: false,
				modalNumber: -1
			}
		},
		methods: {
			buttonHandler_minimize() {
				this.$store.getters['electron/ipc'].send('minimize')
			},
			buttonHandler_maximize() {
				this.$store.getters['electron/ipc'].send('maximize')
			},
			buttonHandler_quit() {
				this.$store.getters['electron/ipc'].send('quit')
			},
			toggleModal(a_event) {
				this.modal = !this.modal
				if (this.modal) {
					document.addEventListener('click', this.clickEventListener)
				} else {
					document.removeEventListener('click', this.clickEventListener)
				}
			}
		},
		mounted() {
			if (process.env.NODE_ENV === 'development') {
				this.menu[0].children.splice(1, 0, {
					title: 'Outils de développement',
					action: () => {
						this.$store.getters['electron/ipc'].send('openDevTools')
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	nav {
		align-items: center;
		box-sizing: border-box;
		display: grid;
		grid-template-columns: 2rem auto 1fr auto;
		height: 100%;
		background: var(--color-6);
		img {
			height: 70%;
			margin: auto;
			object-fit: cover;
			object-position: center;
		}
	}

	/* Menu group */

	.menu-group {
		box-sizing: border-box;
		display: grid;
		grid-auto-flow: column;
		height: 100%;
		list-style: none;
		margin: 0;
		padding: 0;
	}
	.menu-group li {
		color: var(--color-2);
		cursor: default;
		font-size: 12px;
		height: 100%;
		padding: 0 0.5em;
	}
	.menu-group li:hover {
		background-color: var(--color-5);
		color: var(--color-1);
	}
	.menu-group li ul {
		padding: 0;
	}

	/* Modal zones */

	.modal {
		background-color: var(--color-6);
		box-shadow: 1px 1px 1px 1px #0000001a;
		bottom: 0;
		display: flex;
		flex-direction: column;
		height: max-content;
		left: 0;
		z-index: 999;
		position: absolute;
		transform: translateY(100%);
		width: auto;
	}
	.modal li {
		align-items: center;
		display: flex;
		justify-content: flex-start;
		padding: 0.8rem;
		white-space: nowrap;
	}

	/* Window icon group */

	.window-icons-group {
		display: flex;
		height: 100%;
	}
	.window-icons-group button {
		align-items: center;
		background-color: transparent;
		border: 0;
		color: var(--color-1);
		display: flex;
		height: 100%;
		justify-content: center;
		opacity: 0.8;
		outline: 0;
		padding: 0;
		position: relative;
		transition: 0.2s all;
		width: 46px;
	}
	.window-icons-group button:hover {
		background-color: var(--color-5);
		opacity: 1;
	}
	.window-icons-group button.red:hover {
		background-color: #bb0000;
	}
	.window-icons-group button svg {
		fill: var(--color-1);
		height: 50%;
	}

	/* Divers */
	.center {
		align-items: center;
		display: flex;
		height: 100%;
		justify-content: center;
	}
</style>
