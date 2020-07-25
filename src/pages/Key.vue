<template>
	<q-page class='q-pa-md'>
		<section class='max-size container-center'>
			<InputForm
				@submit='submitHandler'
				class='grid'
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
									:min='0'
									:max='99'
									v-model='amount'
									@change='
                    a_event => {
                      amount = a_event.target.value;
                    }
                  '
								/>
							</div>
						</q-item-section>
					</q-item>
				</q-list>
				<q-btn
					color='primary'
					type='submit'
					class='q-ma-md no-border-radius'
				>Générer</q-btn>
			</InputForm>
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
	</q-page>
</template>

<script>
	import InputCheckbox from '../components/Input_Checkbox.vue'
	import InputForm from '../components/Input_Form.vue'
	import InputNumber from '../components/Input_Number.vue'
	import InputSubmit from '../components/Input_Submit.vue'
	export default {
		components: {
			InputCheckbox,
			InputForm,
			InputNumber,
			InputSubmit,
		},
		computed: {
			lowercase: {
				get() {
					return this.$store.getters['application/config_key'].fields.lowercase
				},
				set(a_value) {
					const config = this.$store.getters['application/config_key']
					this.$store.commit('application/config_key', {
						...config,
						fields: { ...config.fields, lowercase: a_value },
					})
				},
			},
			uppercase: {
				get() {
					return this.$store.getters['application/config_key'].fields.uppercase
				},
				set(a_value) {
					const config = this.$store.getters['application/config_key']
					this.$store.commit('application/config_key', {
						...config,
						fields: { ...config.fields, uppercase: a_value },
					})
				},
			},
			digits: {
				get() {
					return this.$store.getters['application/config_key'].fields.digits
				},
				set(a_value) {
					const config = this.$store.getters['application/config_key']
					this.$store.commit('application/config_key', {
						...config,
						fields: { ...config.fields, digits: a_value },
					})
				},
			},
			specialChars: {
				get() {
					return this.$store.getters['application/config_key'].fields.specialChars
				},
				set(a_value) {
					const config = this.$store.getters['application/config_key']
					this.$store.commit('application/config_key', {
						...config,
						fields: { ...config.fields, specialChars: a_value },
					})
				},
			},
			amount: {
				get() {
					return this.$store.getters['application/config_key'].amount
				},
				set(a_value) {
					try {
						a_value = parseInt(a_value)
					} catch (error) {
						return
					}
					let config = this.$store.getters['application/config_key']
					this.$store.commit('application/config_key', {
						...config,
						amount: a_value,
					})
				},
			},
		},
		data() {
			return {
				config: this.$store.getters['application/config_key'],
				orange: false,
				text: '',
			}
		},
		methods: {
			submitHandler(a_event) {
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

				const specs = this.$store.getters['application/config_key'].specialCharset
				if (this.specialChars && specs.length > 0) {
					generators.push(() => {
						return specs[Math.round(Math.random() * (specs.length - 1))]
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
		name: 'generator_page',
	}
</script>

<style scoped lang="scss">
	.grid {
		align-items: center;
		color: var(--color-1);
		display: grid;
		padding: 0.5rem 0;
		row-gap: 0.7rem;
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
