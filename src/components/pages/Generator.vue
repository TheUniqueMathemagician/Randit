<template>
  <main>
    <section class="max-size container-center">
      <InputForm @submit="submitHandler" class="grid">
        <label for="a" class="noselect">Minuscules</label>
        <InputCheckbox id="a" :checked="config.fields.mins" class="right" />
        <label for="b" class="noselect">Majuscules</label>
        <InputCheckbox id="b" :checked="config.fields.majs" class="right" />
        <label for="c" class="noselect">Chiffres</label>
        <InputCheckbox id="c" :checked="config.fields.dgts" class="right" />
        <label for="d" class="noselect">Caractères spéciaux</label>
        <InputCheckbox id="d" :checked="config.fields.spcs" class="right" />
        <label for="e" class="noselect">Nombre</label>
        <InputNumber id="e" :value="config.amount" class="right" :min="0" :max="99" />
        <InputSubmit value="Générer" class="span-all" />
      </InputForm>
    </section>
    <section class="max-size container-center">
      <InputTextarea value></InputTextarea>
    </section>
  </main>
</template>

<script>
import InputCheckbox from "../shared/Input_Checkbox.vue";
import InputForm from "../shared/Input_Form.vue";
import InputNumber from "../shared/Input_Number.vue";
import InputSubmit from "../shared/Input_Submit.vue";
import InputTextarea from "../shared/Input_Textarea.vue";
export default {
  components: {
    InputCheckbox,
    InputForm,
    InputNumber,
    InputSubmit,
    InputTextarea
  },
  data() {
    return {
      config: this.$store.getters["application/config"]
    };
  },
  methods: {
    resizeTextArea(a_element) {
      return;
      a_element.style.height = "inherit";
      let computed = window.getComputedStyle(a_element);
      let height =
        //parseInt(computed.getPropertyValue("border-top-width"), 10) +
        //parseInt(computed.getPropertyValue("padding-top"), 10) +
        a_element.scrollHeight;
      //parseInt(computed.getPropertyValue("padding-bottom"), 10) +
      //parseInt(computed.getPropertyValue("border-bottom-width"), 10)
      a_element.style.height = height + "px";
    },
    mouseWheelHandler(a_event) {
      const element = document.querySelector("form")["e"];
      if (a_event.deltaY < 0) {
        element.value++;
        if (element.value > 99) {
          element.value = 99;
        }
      } else {
        element.value--;
        if (element.value < 0) {
          element.value = 0;
        }
      }
    },
    submitHandler(a_event) {
      const length = a_event.target["e"].value;
      if (length < 1) {
        return;
      }
      let generated = "";
      for (let i = 0; i < length; i++) {
        let tmp = [];
        if (a_event.target["a"].checked) {
          tmp.push(String.fromCharCode(Math.round(Math.random() * 25) + 97));
        }
        if (a_event.target["b"].checked) {
          tmp.push(String.fromCharCode(Math.round(Math.random() * 25) + 65));
        }
        if (a_event.target["c"].checked) {
          tmp.push(String.fromCharCode(Math.round(Math.random() * 9) + 48));
        }
        if (a_event.target["d"].checked) {
          const specs = this.$store.getters["application/config"].specialChars;

          tmp.push(specs[Math.round(Math.random() * (specs.length - 1))]);
        }
        if (tmp.length < 1) {
          // nothing's selected
          return;
        }
        generated += tmp[Math.round(Math.random() * (tmp.length - 1))] || "";
      }
      const ta = document.querySelector("textarea");
      ta.value = generated;
      this.resizeTextArea(ta);
    }
  },
  mounted() {
    // strange bug when form is submitted...
    document.querySelector("form")["e"].value = this.config.amount;
  },
  name: "generator_page"
};
</script>

<style scoped>
.grid {
  align-items: center;
  color: var(--color-1);
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: repeat(5, auto) 1fr;
  padding: 0.5rem 0;
  row-gap: 0.7rem;
}
form .right {
  justify-self: flex-end;
}
input {
  color: var(--color-1);
  font-size: 1rem;
  padding: 0.5rem;
  background-color: var(--color-2);
  border: 1px solid transparent;
  outline: 0;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>