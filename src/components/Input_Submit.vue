<template>
  <input type="submit" @click="$emit('click', $event)" :value="value" />
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
      default: ""
    }
  }
};
</script>

<style scoped>
input[type="submit"] {
  background: var(--color-6);
  border: 0;
  color: var(--color-2);
  padding: 0.5rem;
  outline: 0;
}
input[type="submit"]:hover {
  color: var(--color-1);
}
</style>
