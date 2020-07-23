<template>
  <form action="post" method="post" @submit.prevent="handleSubmit($event)">
    <slot />
  </form>
</template>

<script>
export default {
  methods: {
    handleSubmit(a_event) {
      this.$emit("submit", a_event);
    }
  }
};
</script>

<style scoped>
</style>