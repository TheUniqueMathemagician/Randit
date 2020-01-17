<template>
  <input
    type="number"
    :id="id"
    :min="min"
    :max="max"
    :value="value"
    ref="input"
    @mousewheel.stop.prevent="mouseWheelHandler($event)"
    @blur.prevent="blurHandler($event)"
    @change="changeHandler($event)"
  />
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
      default: ""
    },
    max: {
      type: Number,
      required: true,
      default: 0
    },
    min: {
      type: Number,
      required: true,
      default: 0
    },
    value: {
      type: [Number, String],
      required: false,
      default: 0
    }
  },
  methods: {
    blurHandler(a_event) {
      if (a_event.target.value == "") {
        a_event.target.value = 0;
      }
    },
    changeHandler(a_event) {
      this.$emit("change", a_event);
    },
    mouseWheelHandler(a_event) {
      if (a_event.deltaY < 0) {
        a_event.target.value++;
        if (a_event.target.value > this.max) {
          a_event.target.value = this.max;
        }
      } else {
        a_event.target.value--;
        if (a_event.target.value < this.min) {
          a_event.target.value = this.min;
        }
      }
      this.$emit("change", a_event);
    }
  },
  mounted() {
    this.$refs["input"].value = this.value;
    if (this.$refs["input"].value < this.min) {
      this.$refs["input"].value = this.min;
    }
    if (this.$refs["input"].value > this.max) {
      this.$refs["input"].value = this.max;
    }
  }
};
</script>

<style scoped>
input[type="number"] {
  background-color: var(--color-6);
  border: 0px solid transparent;
  color: var(--color-2);
  font-size: 1rem;
  outline: 0;
  padding: 0.5rem;
  text-align: center;
  width: 3rem;
}
input[type="number"]:hover,
input[type="number"]:focus {
  color: var(--color-1);
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  margin: 0;
  -webkit-appearance: none;
}
</style>