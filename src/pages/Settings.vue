<template>
	<q-page class='q-pa-md'>
		<section>
			<h1 class='noselect text-center'>Préférences</h1>
			<InputForm @submit='submitHandler'>
				<h2 class='noselect'>Clés</h2>
				<h3 class='noselect'>Valeurs par défaut</h3>
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
				<h3 class='noselect'>Caractères spéciaux</h3>
				<q-input
					bg-color='primary'
					v-model='specialCharset'
					class='full-width'
					:error='false'
					clearable
					label-color='white'
					filled
					autogrow
					input-class='custom text-white'
				></q-input>
				<q-separator
					size='md'
					color='white'
				></q-separator>
				<div class='row justify-evenly'>
					<q-btn
						type='submit'
						color='primary'
					>Enregistrer</q-btn>
					<q-btn
						color='negative'
						type='a'
						text-color='white'
						@click.prevent.stop='cancelHandler'
					>Annuler</q-btn>
				</div>
			</InputForm>
		</section>
	</q-page>
</template>

<script>
	import InputCheckbox from '../components/Input_Checkbox.vue'
	import InputForm from '../components/Input_Form.vue'
	import InputLinkBackward from '../components/Input_Link_Backward.vue'
	import InputNumber from '../components/Input_Number.vue'
	import InputSubmit from '../components/Input_Submit.vue'
	import InputText from '../components/Input_Text.vue'
	export default {
		components: {
			InputCheckbox,
			InputForm,
			InputLinkBackward,
			InputNumber,
			InputSubmit,
			InputText,
		},
		computed: {
			lowercase: {
				get() {
					return this.$store.getters['application/config_key_settings'].fields
						.lowercase
				},
				set(a_value) {
					const config = this.$store.getters['application/config_key_settings']
					this.$store.commit('application/config_key_settings', {
						...config,
						fields: { ...config.fields, lowercase: a_value },
					})
				},
			},
			uppercase: {
				get() {
					return this.$store.getters['application/config_key_settings'].fields
						.uppercase
				},
				set(a_value) {
					const config = this.$store.getters['application/config_key_settings']
					this.$store.commit('application/config_key_settings', {
						...config,
						fields: { ...config.fields, uppercase: a_value },
					})
				},
			},
			digits: {
				get() {
					return this.$store.getters['application/config_key_settings'].fields
						.digits
				},
				set(a_value) {
					const config = this.$store.getters['application/config_key_settings']
					this.$store.commit('application/config_key_settings', {
						...config,
						fields: { ...config.fields, digits: a_value },
					})
				},
			},
			specialChars: {
				get() {
					return this.$store.getters['application/config_key_settings'].fields
						.specialChars
				},
				set(a_value) {
					const config = this.$store.getters['application/config_key_settings']
					this.$store.commit('application/config_key_settings', {
						...config,
						fields: { ...config.fields, specialChars: a_value },
					})
				},
			},
			amount: {
				get() {
					return this.$store.getters['application/config_key_settings'].amount
				},
				set(a_value) {
					try {
						a_value = parseInt(a_value)
					} catch (error) {
						return
					}
					let config = this.$store.getters['application/config_key_settings']
					this.$store.commit('application/config_key_settings', {
						...config,
						amount: a_value,
					})
				},
			},
			specialCharset: {
				get() {
					return this.$store.getters['application/config_key_settings']
						.specialCharset
				},
				set(a_value) {
					let config = this.$store.getters['application/config_key_settings']
					this.$store.commit('application/config_key_settings', {
						...config,
						specialCharset: a_value,
					})
				},
			},
		},
		data() {
			return {
				config: {
					fields: {
						lowercase: false,
						uppercase: false,
						digits: false,
						specialChars: false,
					},
					amount: 0,
					specialCharset: '',
				},
			}
		},
		methods: {
			cancelHandler(a_event) {
				//TODO: commit avec les valeurs enregistrées
				if (this.$q.platform.is.electron) {
					this.$store.commit(
						'application/config_key_settings',
						this.$electron.ipcRenderer.sendSync('get_config_key')
					)
				}
			},
			submitHandler(a_event) {
				if (this.$q.platform.is.electron) {
					this.$store.commit(
						'application/config_key',
						this.$store.getters['application/config_key_settings']
					)
					this.$electron.ipcRenderer.send(
						'set_config_key',
						this.$store.getters['application/config_key_settings']
					)
				}
			},
		},
		name: 'settings_page',
	}
</script>
