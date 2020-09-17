<template>
	<label
		role='button'
		tabindex='0'
		v-ripple
		class='shadow-3 relative-position'
		:for='id'
		:class='{checked}'
	>
		<input
			hidden
			type='radio'
			:name='name'
			:id='id'
			:value='value'
			@change='h_change($event)'
		/>
		<span>{{value}}</span>
	</label>
</template>

<script>
	export default {
		data() {
			return {
				checked: false,
			}
		},
		name: 'input_radio',
		methods: {
			h_change(a_event) {
				this.$emit('change', a_event)
			},
		},
		props: {
			id: {
				default: '',
				type: String,
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
			height: 100%;
			padding: 0.5rem;
			text-align: center;
			width: 100%;
		}
		input[type='radio']:checked + span {
			background: var(--color-3);
			color: var(--color-1);
		}
	}
</style>
