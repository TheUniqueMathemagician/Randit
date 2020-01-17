<template>
  <main>
    <section class="radio-group max-size container-center">
      <h1>Lancers de dés</h1>
      <InputForm @submit.prevent="handleSubmit">
        <h2>Options</h2>
        <div class="group">
          <InputRadio
            v-for="(item, index ) in [4,6,8,10,12,20,100]"
            :key="index"
            :id="'radio_' + item"
            :value="item"
            @click="setCustom(false)"
            name="dice"
          >{{item}}</InputRadio>
        </div>
        <br />
        <div class="custom-radio">
          <InputRadio
            :id="'radio_custom'"
            value="Personnalisé"
            name="dice"
            @click="setCustom(true)"
          >Personnalisé</InputRadio>
          <div class="spacer">
            <div :class="{'bg-active':isCustom}"></div>
          </div>
          <InputNumber
            id="custom"
            :max="1000"
            :min="1"
            :class="{'border-active':isCustom, 'border':true}"
          />
        </div>
        <h2>Générer</h2>
        <div class="group auto">
          <InputSubmit value="Lancer" />
          <InputNumber id="amount" :max="100" :min="1" @change="changeHandler" />
          <span>dé{{plural ? 's' : ""}}</span>
        </div>
      </InputForm>
    </section>
    <section>
      <h2 class="noselect">Résultat</h2>
      <div class="big">{{generated}}</div>
      <div v-if="plural">
        <div class="flex space-between">
          <h2 class="noselect">Détail</h2>
          <InputButton @click="showDetails = !showDetails">text</InputButton>
        </div>
        <transition name="fade">
          <table v-show="showDetails">
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in details" :key="index">
                <td>Lancé</td>
                <td>{{index + 1}}</td>
                <td>=></td>
                <td>{{item}}</td>
              </tr>
            </tbody>
          </table>
        </transition>
      </div>
    </section>
  </main>
</template>

<script>
import InputButton from "../shared/Input_Button.vue";
import InputForm from "../shared/Input_Form.vue";
import InputNumber from "../shared/Input_Number.vue";
import InputRadio from "../shared/Input_Radio.vue";
import InputSubmit from "../shared/Input_Submit.vue";
import InputText from "../shared/Input_Text.vue";
export default {
  components: {
    InputButton,
    InputForm,
    InputNumber,
    InputRadio,
    InputSubmit,
    InputText
  },
  data() {
    return {
      details: [],
      generated: 0,
      isCustom: false,
      plural: "",
      showDetails: false
    };
  },
  methods: {
    changeHandler(a_event) {
      this.plural = a_event.target.value == 1 ? false : true;
    },
    handleSubmit(a_event) {
      const el = document.querySelector("input[name=dice]:checked");
      if (!el) {
        return;
      }
      let value = el.value;
      if (value === "Personnalisé") {
        value = document.getElementById("custom").value;
      }

      if (!value) {
        return;
      }
      this.details = [];
      for (let i = 0; i < (document.getElementById("amount").value || 1); i++) {
        this.details.push(Math.round(Math.random() * (value - 1) + 1));
      }
      this.generated = this.details.reduce((a_accu, a_curr) => {
        return a_accu + a_curr;
      });
    },
    setCustom(a_value) {
      this.isCustom = a_value || false;
    }
  },
  name: "dice_page"
};
</script>

<style scoped>
.big {
  font-size: 1.6rem;
}

.group {
  display: grid;
  column-gap: 0.5rem;
  grid-template-columns: repeat(7, 1fr);
  grid-auto-flow: column;
  align-items: center;
}
.group.auto {
  grid-template-columns: auto auto auto 1fr;
}
.custom-radio {
  display: grid;
  grid-template-columns: auto 1fr auto;
  width: 100%;
}

.flex {
  display: flex;
  align-items: center;
}
.flex.space-between {
  justify-content: space-between;
}
.flex.left {
  justify-content: flex-start;
}
.custom-radio .spacer div.bg-active {
  background: var(--color-3);
}
.custom-radio .spacer + .border-active {
  border: 2px solid var(--color-3);
}
.custom-radio .border {
  border: 2px solid transparent;
}
.custom-radio .spacer {
  display: flex;
  align-items: center;
}
.custom-radio .spacer div {
  width: 100%;
  background: var(--color-6);
  height: 2px;
}
.fade-enter {
  transform: translateY(-100%);
  opacity: 0;
}
.fade-enter-to {
  transform: translateY(0);
  opacity: 1;
}
.fade-enter-active {
  transition: all 3s ease;
}

h2 {
  margin: 0.5rem 0;
}
td {
  padding: 0.3rem;
  text-align: center;
}
</style>