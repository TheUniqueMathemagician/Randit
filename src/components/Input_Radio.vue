<template>
	<div class='noselect relative-position'>
		<div
			v-ripple
			class='relative-position container flex flex-center text-white'
		></div>
		<input
			hidden
			type='radio'
			:name='name'
			:id='id'
			:value='value'
			@change='h_change($event)'
		/>
		<label
			:for='id'
			@click='$emit("click")'
		>
			<slot />
		</label>
	</div>
</template>

<script>
	export default {
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
				required: true,
			},
			name: {
				default: '',
				type: String,
				required: true,
			},
			value: {
				default: '',
				type: [Number, String],
				required: true,
			},
		},
	}
</script>

<style scoped>
	label {
		padding: 0.5rem;
		background-color: var(--color-6);
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--color-2);
	}
	label:hover {
		color: var(--color-1);
	}
	input[type='radio']:checked + label {
		background: var(--color-3);
		color: var(--color-1);
	}
</style>
