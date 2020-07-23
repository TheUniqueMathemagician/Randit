<template>
  <button @click.prevent="clickHandler($event)" :class="{active:value}">
    <span></span>
  </button>
</template>

<script>
export default {
  data() {
    return {
      value: false
    };
  },
  methods: {
    clickHandler(a_event) {
      this.value = !this.value;
      this.$emit("change", this.value);
    }
  }
};
</script>

<style scoped>
button {
  position: relative;
  border: 0;
  width: 2rem;
  background-color: transparent;
  height: 1rem;
  outline: 0;
}
button::after {
  content: "";
  position: absolute;
  border-radius: 2rem;
  left: 0;
  right: 0;
  top: calc(50% - 2px);
  background-color: darkslategray;
  height: 4px;
  transition: background-color 0.3s ease;
}
span {
  transition: left 0.3s ease, background-color 0.3s ease;
  position: absolute;
  z-index: 2;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: #205a64;
  top: calc(50% - 0.5rem);
  left: 0rem;
}
button.active span {
  background-color: var(--color-3);
  left: calc(100% - 1rem);
}
button.active::after {
  background-color: var(--color-6);
}
</style>
