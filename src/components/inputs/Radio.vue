<template>
	<label
		class='shadow-2 relative-position'
		role='button'
		tabindex='0'
		v-ripple
		:class='{isChecked}'
		:for='id'
	>
		<input
			hidden
			type='radio'
			:checked='checked'
			:id='id'
			:name='name'
			:value='value'
			@change='h_change($event)'
		/>
		<span class='noselect q-py-sm q-px-md'>{{label}}</span>
	</label>
</template>

<script>
	export default {
		data() {
			return {
				isChecked: false,
			}
		},
		name: 'input_radio',
		methods: {
			h_change(a_event) {
				this.$emit('change', a_event)
			},
		},
		props: {
			checked: {
				default: false,
				type: Boolean,
				required: false,
			},
			id: {
				default: '',
				type: String,
				required: false,
			},
			label: {
				default: '',
				type: [Number, String],
				required: false,
			},
			name: {
				default: '',
				type: String,
				required: true,
			},
			value: {
				default: false,
				type: [Number, String],
				required: true,
			},
		},
	}
</script>

<style scoped lang="scss">
	label {
		align-items: center;
		background-color: var(--color-6);
		color: var(--color-2);
		cursor: pointer;
		display: flex;
		justify-content: center;
		outline: 0;
		&:hover {
			color: var(--color-1);
		}
		input[type='radio'] + span {
			box-sizing: border-box;
			text-align: center;
			width: 100%;
		}
		input[type='radio']:checked + span {
			background: var(--color-3);
			color: var(--color-1);
		}
	}
</style>
