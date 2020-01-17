<template>
  <textarea v-model="value"></textarea>
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
textarea {
  background: var(--color-6);
  color: var(--color-2);
  display: flex;
  resize: none;
  letter-spacing: 1px;
  color: var(--color-1);
  font-size: 1rem;
  outline: 0;
  text-align: center;
  padding: 0.5rem;
  border: 0;
  width: 100%;
  box-sizing: border-box;
}
textarea:hover,
textarea:focus {
  color: var(--color-1);
}
</style>