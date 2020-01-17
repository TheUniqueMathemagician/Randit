<template>
  <button @click="clickHandler($event)">
    <slot></slot>
  </button>
</template>

<script>
export default {
  methods: {
    clickHandler(a_event) {
      this.$emit("click", a_event);
    }
  },
  name: "input_button"
};
</script>

<style scoped>
button {
  background: var(--color-6);
  padding: 0.5rem;
  font-size: 1rem;
  color: var(--color-2);
  border: 0;
  outline: 0;
}
button:hover {
  color: var(--color-1);
}
</style>