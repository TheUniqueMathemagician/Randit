<template>
  <main>
    <section class="max-size">
      <h1 class="noselect center">Préférences</h1>
      <InputForm @submit="submitHandler" class="grid">
        <h2 class="span-all noselect">Valeurs par défaut</h2>
        <label for="a" class="noselect">Minuscules</label>
        <InputCheckbox id="a" :checked="config.fields.mins" class="right"></InputCheckbox>
        <label for="b" class="noselect">Majuscules</label>
        <InputCheckbox id="b" :checked="config.fields.majs" class="right"></InputCheckbox>
        <label for="c" class="noselect">Chiffres</label>
        <InputCheckbox id="c" :checked="config.fields.dgts" class="right"></InputCheckbox>
        <label for="d" class="noselect">Caractères spéciaux</label>
        <InputCheckbox id="d" :checked="config.fields.spcs" class="right"></InputCheckbox>
        <label for="e" class="noselect">Nombre</label>
        <InputNumber id="e" :value="config.amount" class="right" :min="0" :max="99"></InputNumber>
        <h2 class="span-all noselect">Caractères spéciaux</h2>
        <InputText id="f" class="span-all center" />
        <h2 class="span-all noselect">Enregistrer</h2>
        <InputSubmit value="Enregistrer" class="span-all" />
      </InputForm>
    </section>
    <section>
      <InputLinkBackward to="/">Retour</InputLinkBackward>
    </section>
  </main>
</template>

<script>
import InputCheckbox from "../shared/Input_Checkbox.vue";
import InputForm from "../shared/Input_Form.vue";
import InputLinkBackward from "../shared/Input_Link_Backward.vue";
import InputNumber from "../shared/Input_Number.vue";
import InputSubmit from "../shared/Input_Submit.vue";
import InputText from "../shared/Input_Text.vue";
export default {
  components: {
    InputCheckbox,
    InputForm,
    InputLinkBackward,
    InputNumber,
    InputSubmit,
    InputText
  },
  data() {
    return {
      config: this.$store.getters["application/config"]
    };
  },
  methods: {
    submitHandler(a_event) {
      console.log("sub");

      const form = document.querySelector("form");
      const payload = {
        fields: {
          mins: form["a"].checked,
          majs: form["b"].checked,
          dgts: form["c"].checked,
          spcs: form["d"].checked
        },
        amount: form["e"].value,
        specialChars: form["f"].value
      };
      this.$store.commit("application/config", payload);
      this.$store.getters["electron/ipc"].send("setConfig", payload);
      this.$router.push("/");
    }
  },
  mounted() {
    document.querySelector("form")["f"].value = this.config.specialChars;
  },
  name: "settings_page"
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
.center {
  text-align: center;
}
.max-size {
  max-width: 600px;
}
.right {
  justify-self: flex-end;
}
.span-all {
  grid-column-end: -1;
  grid-column-start: 1;
}
</style>