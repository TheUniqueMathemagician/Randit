<template>
  <div @click="check">
    <input hidden type="checkbox" :name="name" :id="id" ref="i_cb" />
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 511.999 511.999"
      v-if="m_checked"
    >
      <path
        class="fill-color"
        d="M506.231,75.508c-7.689-7.69-20.158-7.69-27.849,0l-319.21,319.211L33.617,269.163c-7.689-7.691-20.158-7.691-27.849,0
			c-7.69,7.69-7.69,20.158,0,27.849l139.481,139.481c7.687,7.687,20.16,7.689,27.849,0l333.133-333.136
			C513.921,95.666,513.921,83.198,506.231,75.508z"
      />
    </svg>
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 224.512 224.512"
      v-else
    >
      <polygon
        class="fill-color opac"
        points="224.507,6.997 217.521,0 112.256,105.258 6.998,0 0.005,6.997 105.263,112.254 
		0.005,217.512 6.998,224.512 112.256,119.24 217.521,224.512 224.507,217.512 119.249,112.254 	"
      />
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      m_checked: this.checked || false
    };
  },
  props: {
    checked: false,
    name: "",
    id: ""
  },
  methods: {
    check() {
      this.m_checked = !this.m_checked;
      this.$refs["i_cb"].checked = this.m_checked;
    }
  },
  mounted() {
    this.m_checked = this.checked;
    this.$refs["i_cb"].checked = this.m_checked;
  }
};
</script>

<style scoped>
svg {
  height: 1rem;
  width: 1rem;
}
div {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
}
.fill-color {
  fill: white;
}
.opac {
  opacity: 0.5;
}
</style>