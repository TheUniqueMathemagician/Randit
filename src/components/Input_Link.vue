<template>
  <Router-Link :to="href">
    <slot />
  </Router-Link>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: true,
      default: "/"
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