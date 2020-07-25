<template>
	<q-page class='q-pa-md'>
		<section>
			<h1 class='noselect text-center'>Préférences</h1>
			<h2 class='noselect'>Clés</h2>
			<q-form @submit='submitHandler_key'>
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
								dark
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
								dark
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
								dark
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
								dark
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
							<q-item-label>Set de caractères</q-item-label>
						</q-item-section>
						<q-item-section side>
							<q-input
								bg-color='primary'
								v-model='specialCharset'
								:error='false'
								label-color='white'
								filled
								type='text'
								no-error-icon
								hide-bottom-space
								autogrow
								dense
								square
								input-class='custom text-white'
							></q-input>
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
						</q-item-section>
					</q-item>
				</q-list>
				<div class='row justify-evenly q-pa-md'>
					<q-btn
						type='submit'
						color='primary'
					>Enregistrer</q-btn>
					<q-btn
						color='negative'
						type='a'
						text-color='white'
						@click.prevent.stop='cancelHandler_key'
					>Annuler</q-btn>
				</div>
			</q-form>
		</section>
		<q-separator
			size='md'
			color='white'
			class='q-my-lg'
		></q-separator>
		<section>
			<h2 class='noselect'>Dés</h2>
			<q-form @submit='submitHandler_dice'>
				<div>
					<h3 class='non-selectable'>Dés usuels</h3>
					<div class='row'>
						<q-btn
							icon-right='delete'
							class='q-ma-sm'
							color='dark'
							text-color='white'
							v-for='(item, index) in defaultDices'
							:key='index'
							@click='deleteDice(index)'
						>
							<q-item-label class='q-mr-md non-selectable'>{{item}}</q-item-label>
						</q-btn>
					</div>
					<div class='row gutter items-center q-mt-md'>
						<InputNumber
							class='q-mr-md'
							:min='0'
							:max='999'
							@change='
                a_event => {
                  addingDice = parseInt(a_event.target.value);
                }
              '
							v-model='addingDice'
							id='dice_add'
						></InputNumber>
						<q-btn
							icon='add'
							color='primary'
							@click='addDice($event)'
						></q-btn>
					</div>
					<h3 class='non-selectable'>Dé personnalisé</h3>
					<InputNumber
						:value='defaultCustomDice'
						@change='
              a_event => {
                defaultCustomDice = parseInt(a_event.target.value);
              }
            '
						:min='0'
						:max='999'
						id='dice_default_custom'
					></InputNumber>
					<h3 class='non-selectable'>Détails</h3>
					<q-toggle
						v-model='details'
						label='click me'
					></q-toggle>
				</div>
				<div class='row justify-evenly q-pa-md'>
					<q-btn
						type='submit'
						color='primary'
					>Enregistrer</q-btn>
					<q-btn
						color='negative'
						type='a'
						text-color='white'
						@click.prevent.stop='cancelHandler_dice'
					>Annuler</q-btn>
					<!-- <q-chip
						removable
						v-model='vanilla'
						square
						class='no-border-radius'
						color='primary'
						text-color='white'
						:label='vanillaLabel'
						:title='vanillaLabel'
					>14</q-chip>-->
				</div>
			</q-form>
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
			details: {
				get() {
					return this.$store.getters['application/config_dice_settings'].details
				},
				set(a_value) {
					const config = this.$store.getters['application/config_dice_settings']
					this.$store.commit('application/config_dice_settings', {
						...config,
						details: a_value,
					})
				},
			},
			defaultDices: {
				get() {
					return (
						this.$store.getters['application/config_dice_settings'].defaults || []
					)
				},
				set(a_value) {
					const config = this.$store.getters['application/config_dice_settings']
					this.$store.commit('application/config_dice_settings', {
						...config,
						defaults: a_value,
					})
				},
			},
			defaultCustomDice: {
				get() {
					return (
						this.$store.getters['application/config_dice_settings']
							.customDefault || 0
					)
				},
				set(a_value) {
					const config = this.$store.getters['application/config_dice_settings']
					this.$store.commit('application/config_dice_settings', {
						...config,
						customDefault: a_value,
					})
				},
			},
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
				addingDice: 0,
			}
		},
		methods: {
			cancelHandler_key(a_event) {
				//TODO: commit avec les valeurs enregistrées
				if (this.$q.platform.is.electron) {
					this.$store.commit(
						'application/config_key_settings',
						this.$electron.ipcRenderer.sendSync('get_config_key')
					)
				}
			},
			cancelHandler_dice(a_event) {
				//TODO: commit avec les valeurs enregistrées
				if (this.$q.platform.is.electron) {
					this.$store.commit(
						'application/config_dice_settings',
						this.$electron.ipcRenderer.sendSync('get_config_dice')
					)
				}
			},
			addDice(a_value) {
				console.log(this.addingDice)
				if (this.defaultDices.indexOf(this.addingDice) >= 0) {
					return
				}
				this.defaultDices = [...this.defaultDices, this.addingDice].sort(
					(a, b) => {
						if (a < b) return -1
						if (a > b) return 1
						return 0
					}
				)
			},
			deleteDice(a_index) {
				const tmp = this.defaultDices.filter(() => true)
				tmp.splice(a_index, 1)
				this.defaultDices = tmp
			},
			submitHandler_dice(a_event) {
				if (this.$q.platform.is.electron) {
					this.$store.commit(
						'application/config_dice',
						this.$store.getters['application/config_dice_settings']
					)
					this.$electron.ipcRenderer.send(
						'set_config_dice',
						this.$store.getters['application/config_dice_settings']
					)
				}
			},
			submitHandler_key(a_event) {
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
			submitHandler_word(a_event) {
				if (this.$q.platform.is.electron) {
					this.$store.commit(
						'application/config_word',
						this.$store.getters['application/config_word_settings']
					)
					this.$electron.ipcRenderer.send(
						'set_config_word',
						this.$store.getters['application/config_word_settings']
					)
				}
			},
		},
		name: 'settings_page',
	}
</script>
