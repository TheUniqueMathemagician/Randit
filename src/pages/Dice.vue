<template>
	<q-page>
		<section class='radio-group container-center'>
			<q-form @submit.prevent='h_submit'>
				<div class='group'>
					<InputRadio
						name='dice'
						v-for='(item, index) in usual'
						:checked='index === usualIndex'
						:id='"dice_" + item'
						:key='index'
						:label='item'
						:value='item'
						@change='() => {isCustom = false; usualIndex = index}'
					>{{ item }}</InputRadio>
				</div>
				<div class='custom-radio q-my-md'>
					<InputRadio
						name='dice'
						id='dice_custom'
						label='Personnalisé'
						:checked='isCustom'
						:value='custom'
						@change='isCustom = true'
					>Personnalisé</InputRadio>
					<div class='spacer'>
						<div
							class='shadow-3'
							:class='{ "bg-active": isCustom }'
						></div>
					</div>
					<InputNumber
						id='custom'
						:value='custom'
						:max='999'
						:min='1'
						@change='
              a_event => {
                custom = parseInt(a_event.target.value);
              }
            '
					/>
				</div>

				<br />

				<div class='group auto'>
					<q-btn
						class='no-border-radius'
						color='primary'
						data-mode='submit'
						type='submit'
					>Générer</q-btn>
					<q-btn
						class='no-border-radius'
						color='primary'
						data-mode='add'
						type='submit'
					>+</q-btn>
					<InputNumber
						id='amount'
						:max='99'
						:min='1'
						@change='h_change'
					/>
					<span>dé{{ plural ? "s" : "" }}</span>
				</div>
			</q-form>
		</section>

		<section class='q-mt-md'>
			<div class='row justify-between items-center'>
				<h2 class='noselect'>Résultat</h2>
				<div class='text-h3'>{{ generated }}</div>
			</div>
			<div
				v-if='plural'
				class='row justify-between'
			>
				<h2 class='noselect text-center'>Détail</h2>
				<q-toggle
					v-model='details'
					color='primary'
				/>
			</div>

			<q-slide-transition>
				<div v-show='details'>
					<table>
						<thead>
							<tr>
								<th></th>
								<th></th>
								<th></th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							<tr
								v-for='(item, index) in detailsValues'
								:key='index'
							>
								<td>Lancé</td>
								<td>{{ index + 1 }}</td>
								<td>
									<svg
										x='0px'
										y='0px'
										viewBox='0 0 297.5 297.5'
										style='enable-background:new 0 0 297.5 297.5;'
									>
										<polygon
											points='297.5,148.25 148,33.25 148,100.25 0,100.25 0,199.25 148,199.25 148,264.25 '
										/>
									</svg>
								</td>
								<td>{{ item }}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</q-slide-transition>
		</section>
	</q-page>
</template>

<script>
	import InputNumber from '../components/inputs/Number.vue'
	import InputRadio from '../components/inputs/Radio.vue'
	export default {
		components: {
			InputNumber,
			InputRadio,
		},
		computed: {
			custom: {
				get() {
					return this.$store.getters['config/dice/custom']
				},
				set(a_value) {
					this.$store.commit('config/dice/custom', a_value)
				},
			},
			details: {
				get() {
					return this.$store.getters['config/dice/details']
				},
				set(a_value) {
					this.$store.commit('config/dice/details', a_value)
				},
			},
			isCustom: {
				get() {
					return this.$store.getters['config/dice/isCustom']
				},
				set(a_value) {
					this.$store.commit('config/dice/isCustom', a_value)
				},
			},
			usual: {
				get() {
					return this.$store.getters['config/dice/usual']
				},
				set(a_value) {
					this.$store.commit('config/dice/usual', a_value)
				},
			},
			usualIndex: {
				get() {
					return this.$store.getters['config/dice/usualIndex']
				},
				set(a_value) {
					this.$store.commit('config/dice/usualIndex', a_value)
				},
			},
			generated: {
				get() {
					return this.generatedValues.reduce((acc, val) => {
						return acc + val
					}, 0)
				},
			},
		},
		data() {
			return {
				detailsValues: [],
				generatedValues: [],
				plural: false,
			}
		},
		methods: {
			h_change(a_event) {
				this.plural = a_event.target.value == 1 ? false : true
			},
			h_submit(a_event) {
				// TODO : change radio button to share the same name, and use their value while posting
				const method = a_event.submitter.attributes['data-mode'].value

				const el = document.querySelector('input[name=dice]:checked')
				if (!el) {
					return
				}
				let value = el.value

				if (!value) {
					return
				}
				this.detailsValues = []
				for (let i = 0; i < (document.getElementById('amount').value || 1); i++) {
					this.detailsValues.push(Math.round(Math.random() * (value - 1) + 1))
				}

				if (method === 'add') {
					this.generatedValues.push(
						this.detailsValues.reduce((acc, val) => {
							return acc + val
						})
					)
				} else if (method === 'submit') {
					this.generatedValues = [
						this.detailsValues.reduce((acc, val) => {
							return acc + val
						}),
					]
				} else {
					this.generatedValues = []
				}
			},
		},
		name: 'dice_page',
	}
</script>

<style scoped lang="scss">
	.group {
		display: grid;
		column-gap: 1rem;
		row-gap: 1rem;
		grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
		grid-auto-flow: row;
		align-items: center;
	}
	.group.auto {
		grid-template-columns: auto auto auto 1fr;
	}
	.custom-radio {
		display: grid;
		grid-template-columns: auto 1fr auto;
	}
	.custom-radio {
		display: grid;
		grid-template-columns: auto 1fr auto;
		.spacer {
			align-items: center;
			display: flex;
			div {
				background: var(--color-6);
				height: 4px;
				width: 100%;
				&.bg-active {
					background: var(--color-3);
				}
			}
		}
	}

	h2 {
		margin: 0.5rem 0;
	}
	td {
		padding: 0.3rem;
		text-align: center;
	}
	table svg {
		height: 1rem;
		width: 1rem;
	}
	table svg polygon {
		fill: var(--color-2);
	}
</style>
