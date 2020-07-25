<template>
	<div>
		<input
			type='number'
			:id='id'
			:min='min'
			:max='max'
			:value='value'
			ref='input'
			@mousewheel.stop.prevent='mouseWheelHandler($event)'
			@blur.prevent='blurHandler($event)'
			@change='changeHandler($event)'
		/>
		<q-btn
			icon='delete'
			v-if='deletable'
			@click='deleteHandler'
			flat
			round
			size='sm'
			class='q-ma-xs'
		></q-btn>
		<q-btn
			icon='add'
			v-else-if='addable'
			@click='addHandler'
			flat
			round
			size='sm'
			class='q-ma-xs'
		></q-btn>
	</div>
</template>

<script>
	export default {
		props: {
			addable: {
				type: Boolean,
				required: false,
				default: false,
			},
			deletable: {
				type: Boolean,
				required: false,
				default: false,
			},
			id: {
				type: String,
				required: true,
				default: '',
			},
			max: {
				type: Number,
				required: true,
				default: 0,
			},
			min: {
				type: Number,
				required: true,
				default: 0,
			},
			value: {
				type: Number,
				required: false,
				default: 0,
			},
		},
		methods: {
			addHandler(a_event) {
				this.$emit('add', parseInt(this.$refs['input'].value))
			},
			deleteHandler(a_event) {
				this.$emit('delete')
			},
			blurHandler(a_event) {
				if (a_event.target.value == '') {
					a_event.target.value = 0
				}
				if (this.$refs['input'].value < this.min) {
					this.$refs['input'].value = this.min
				}
				if (this.$refs['input'].value > this.max) {
					this.$refs['input'].value = this.max
				}
			},
			changeHandler(a_event) {
				this.$emit('change', a_event)
			},
			mouseWheelHandler(a_event) {
				if (a_event.deltaY < 0) {
					a_event.target.value++
					if (a_event.target.value > this.max) {
						a_event.target.value = this.max
					}
				} else {
					a_event.target.value--
					if (a_event.target.value < this.min) {
						a_event.target.value = this.min
					}
				}
				this.$emit('change', a_event)
			},
		},
		mounted() {
			this.$refs['input'].value = this.$props.value
			if (this.$refs['input'].value < this.min) {
				this.$refs['input'].value = this.min
			}
			if (this.$refs['input'].value > this.max) {
				this.$refs['input'].value = this.max
			}
		},
	}
</script>

<style scoped>
	div {
		background-color: var(--color-6);
		display: inline-block;
	}
	input[type='number'] {
		padding: 0.5rem 0;
		background-color: transparent;
		border: 0px solid transparent;
		color: var(--color-2);
		font-size: 1rem;
		outline: 0;
		text-align: center;
	}
	input[type='number']:hover,
	input[type='number']:focus {
		color: var(--color-1);
	}
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		margin: 0;
		-webkit-appearance: none;
	}
</style>
