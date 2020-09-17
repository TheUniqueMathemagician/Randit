<template>
	<label
		class='shadow-3'
		:for='id'
		@mousewheel.stop.prevent='h_mousewheel($event)'
	>
		<input
			type='number'
			:id='id'
			:max='max'
			:min='min'
			:name='name'
			:value='value'
			@blur='h_blur($event)'
			@change='h_change($event)'
		/>
	</label>
</template>

<script>
	export default {
		props: {
			id: {
				type: String,
				required: false,
				default: '',
			},
			max: {
				type: Number,
				required: false,
				default: 0,
			},
			min: {
				type: Number,
				required: false,
				default: 0,
			},
			name: {
				type: String,
				required: false,
				default: '',
			},
			value: {
				type: Number,
				required: false,
				default: 0,
			},
		},
		methods: {
			h_blur(a_event) {
				if (a_event.target.value == '') {
					a_event.target.value = 0
				}
				if (a_event.target.value < this.min) {
					a_event.target.value = this.min
				}
				if (a_event.target.value > this.max) {
					a_event.target.value = this.max
				}
			},
			h_change(a_event) {
				if (typeof a_event.target.value != Number) {
					a_event.target.value = this.min
				}
				this.$emit('change', a_event)
			},
			h_mousewheel(a_event) {
				if (a_event.deltaY < 0) {
					if (a_event.target.value < this.max) {
						a_event.target.value++
						this.$emit('change', a_event)
					}
				} else {
					if (a_event.target.value > this.min) {
						a_event.target.value--
						this.$emit('change', a_event)
					}
				}
			},
		},
		mounted() {
			if (!this.$el.firstChild) {
				return
			}
			this.$el.firstChild.value = this.$props.value
			if (this.$el.firstChild.value < this.min) {
				this.$el.firstChild.value = this.min
			}
			if (this.$el.firstChild.value > this.max) {
				this.$el.firstChild.value = this.max
			}
		},
	}
</script>

<style scoped lang="scss">
	label {
		background: var(--color-6);
		position: relative;
		border: 0 transparent;
		cursor: text;
		display: flex;
		height: 100%;
		margin: 0;
		padding: 0;
		outline: 0 transparent;
	}
	input[type='number'] {
		background: transparent;
		border: solid 1px var(--color-6);
		border-radius: 0;
		color: var(--color-2);
		margin: 0;
		outline: 0 transparent;
		padding: 0;
		position: relative;
		text-align: center;
		transition: border-color 0.3s ease;
		-moz-appearance: textfield;
		&::-webkit-outer-spin-button,
		&::-webkit-inner-spin-button {
			margin: 0;
			-webkit-appearance: none;
		}
		&:focus {
			border-color: var(--color-1);
		}
	}
</style>
