<template>
	<main class='q-pa-md'>
		<section>
			<q-form
				@submit='h_submit'
				class='form q-mb-md'
			>
				<q-list>
					<q-item
						tag='label'
						v-ripple
					>
						<q-item-section>
							<q-item-label>Minuscules</q-item-label>
						</q-item-section>
						<q-item-section side>
							<q-checkbox
								v-model='lowercase'
								color='primary'
								tabindex='-1'
								style='justify-content: flex-end;'
							/>
						</q-item-section>
					</q-item>
					<q-item
						tag='label'
						v-ripple
					>
						<q-item-section>
							<q-item-label>Majuscules</q-item-label>
						</q-item-section>
						<q-item-section side>
							<q-checkbox
								v-model='uppercase'
								color='primary'
								tabindex='-1'
								style='justify-content: flex-end;'
							/>
						</q-item-section>
					</q-item>
					<q-item
						tag='label'
						v-ripple
					>
						<q-item-section>
							<q-item-label>Chiffres</q-item-label>
						</q-item-section>
						<q-item-section side>
							<q-checkbox
								v-model='digits'
								color='primary'
								tabindex='-1'
								style='justify-content: flex-end;'
							/>
						</q-item-section>
					</q-item>
					<q-item
						tag='label'
						v-ripple
					>
						<q-item-section>
							<q-item-label>Caractères spéciaux</q-item-label>
						</q-item-section>
						<q-item-section side>
							<q-checkbox
								v-model='specialChars'
								color='primary'
								tabindex='-1'
								style='justify-content: flex-end;'
							/>
						</q-item-section>
					</q-item>
					<q-item
						tag='label'
						v-ripple
					>
						<q-item-section>
							<q-item-label>Compte</q-item-label>
						</q-item-section>
						<q-item-section side>
							<div style='display:flex; justify-content: flex-end;'>
								<InputNumber
									id='amount'
									class='right'
									ref='number'
									:min='1'
									:max='99'
									v-model='amount'
									@change='h_change'
								/>
							</div>
						</q-item-section>
					</q-item>
				</q-list>
				<q-btn
					color='primary'
					type='submit'
					class='q-mb-md no-border-radius'
				>Générer</q-btn>
			</q-form>
		</section>
		<section class='result'>
			<q-input
				bg-color='dark'
				v-model='text'
				:error='false'
				label-color='white'
				filled
				type='text'
				no-error-icon
				hide-bottom-space
				autogrow
				square
				input-class='custom text-white text-center'
			></q-input>
		</section>
	</main>
</template>

<script>
	import InputNumber from '../components/inputs/Number.vue'
	export default {
		components: {
			InputNumber,
		},
		computed: {
			amount: {
				get() {
					return this.$store.getters['config/key/amount']
				},
				set(a_value) {
					a_value = parseInt(a_value)
					this.$store.commit('config/key/amount', a_value)
				},
			},
			digits: {
				get() {
					return this.$store.getters['config/key/fields'].digits
				},
				set(a_value) {
					this.$store.commit('config/key/fields', {
						...this.$store.getters['config/key/fields'],
						digits: a_value,
					})
				},
			},
			lowercase: {
				get() {
					return this.$store.getters['config/key/fields'].lowercase
				},
				set(a_value) {
					this.$store.commit('config/key/fields', {
						...this.$store.getters['config/key/fields'],
						lowercase: a_value,
					})
				},
			},
			specialChars: {
				get() {
					return this.$store.getters['config/key/fields'].specialChars
				},
				set(a_value) {
					this.$store.commit('config/key/fields', {
						...this.$store.getters['config/key/fields'],
						specialChars: a_value,
					})
				},
			},
			specialCharset: {
				get() {
					return this.$store.getters['config/key/specialCharset']
				},
				set(a_value) {
					this.$store.commit('config/key/specialCharset', a_value)
				},
			},
			uppercase: {
				get() {
					return this.$store.getters['config/key/fields'].uppercase
				},
				set(a_value) {
					this.$store.commit('config/key/fields', {
						...this.$store.getters['config/key/fields'],
						uppercase: a_value,
					})
				},
			},
		},
		data() {
			return {
				text: '',
			}
		},
		methods: {
			h_change(a_event) {
				this.amount = a_event.target.value
			},
			h_submit(a_event) {
				if (this.amount < 1) {
					return
				}

				let generators = []

				if (this.lowercase) {
					generators.push(() => {
						return String.fromCharCode(Math.round(Math.random() * 25) + 97)
					})
				}
				if (this.uppercase) {
					generators.push(() => {
						return String.fromCharCode(Math.round(Math.random() * 25) + 65)
					})
				}
				if (this.digits) {
					generators.push(() => {
						return String.fromCharCode(Math.round(Math.random() * 9) + 48)
					})
				}

				if (this.specialChars && this.specialCharset.length > 0) {
					generators.push(() => {
						return this.specialCharset[
							Math.round(Math.random() * (this.specialCharset.length - 1))
						]
					})
				}

				if (generators.length < 1) {
					return
				}

				let generated = ''

				for (let i = 0; i < this.amount; i++) {
					generated += generators[
						Math.round(Math.random() * (generators.length - 1))
					]()
				}

				this.text = generated
			},
		},
		name: 'key_page',
	}
</script>

<style scoped lang="scss">
	.form {
		align-items: center;
		color: var(--color-1);
		display: grid;
		row-gap: 1rem;
	}

	.custom {
		color: var(--color-2);
		word-wrap: none;
		word-break: keep-all;
	}
	label {
		cursor: pointer;
	}
</style>
