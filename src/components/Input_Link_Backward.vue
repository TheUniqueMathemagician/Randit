<template>
  <a href="/" @click.prevent="handleClick($event)">
    <slot></slot>
  </a>
</template>

<script>
export default {
  methods: {
    handleClick(a_event) {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
a {
  color: var(--color-2);
  font-size: 1rem;
}
a:hover {
  color: var(--color-1);
}
a:visited {
  color: initial;
}
</style>