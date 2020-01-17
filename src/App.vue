<template>
  <div id="q-app" :class="{electron:$store.getters['application/isElectron']}">
    <MainMenu v-if="$store.getters['application/isElectron']" />
    <router-view />
  </div>
</template>

<script>
import MainMenu from "./components/shared/MainMenu.vue";
export default {
  components: {
    MainMenu
  },
  name: "App",
  mounted() {
    this.$store.dispatch("application/init");
    if (this.$store.getters["application/isElectron"]) {
      this.$store.dispatch("electron/init");
    }
  }
};
</script>
