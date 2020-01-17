<template>
  <div class="noselect">
    <input hidden type="radio" :name="name" :id="id" :value="value" @change="handleChange($event)" />
    <label :for="id" @click="$emit('click')">
      <slot />
    </label>
  </div>
</template>

<script>
export default {
  name: "input_radio",
  methods: {
    handleChange(a_event) {
      this.$emit("change", a_event);
    }
  },
  props: {
    id: {
      default: "",
      type: String,
      required: true
    },
    name: {
      default: "",
      type: String,
      required: true
    },
    value: {
      default: "",
      type: [Number, String],
      required: true
    }
  }
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-auto-flow: column;
  column-gap: 0.5rem;
  grid-template-columns: repeat(auto-fit, 1fr);
}
label {
  padding: 0.5rem;
  background-color: var(--color-6);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: var(--color-2);
}
label:hover {
  color: var(--color-1);
}
input[type="radio"]:checked + label {
  background: var(--color-3);
  color: var(--color-1);
}
</style>