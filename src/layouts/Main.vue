<template>
  <electron v-if="isElectron"></electron>
  <desktop v-else-if="isDesktop"></desktop>
  <mobile v-else-if="isMobile"></mobile>
  <div v-else>Platform couldn't be detected</div>
</template>

<script>
import Desktop from "./Desktop";
import Electron from "./Electron";
import Mobile from "./Mobile";
export default {
  components: {
    Desktop,
    Electron,
    Mobile
  },
  computed: {
    isElectron() {
      return this.$q.platform.is.electron;
    },
    isDesktop() {
      return this.$q.platform.is.desktop;
    },
    isMobile() {
      return this.$q.platform.is.mobile;
    }
  }
};
</script>
