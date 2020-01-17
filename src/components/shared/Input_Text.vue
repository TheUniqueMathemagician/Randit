<template>
  <input type="text" :id="id" :value="value" :name="name" :placeholder="placeholder" />
</template>

<script>
export default {
  name: "input-text",
  props: {
    id: {
      type: String,
      required: false,
      default: ""
    },
    name: {
      type: String,
      required: false,
      default: ""
    },
    placeholder: {
      type: String,
      required: false,
      default: ""
    },
    value: {
      type: String,
      required: false,
      default: ""
    }
  }
};
</script>

<style scoped>
input[type="text"] {
  background-color: var(--color-6);
  border: 1px solid transparent;
  color: var(--color-2);
  font-size: 1rem;
  outline: 0;
  padding: 0.5rem;
}
input[type="text"]:hover {
  color: var(--color-1);
}

::-webkit-input-placeholder /* Edge */
,:-ms-input-placeholder /* Internet Explorer 10-11 */
,::placeholder {
  color: var(--color-2);
}
</style>