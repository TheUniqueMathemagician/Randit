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
          <input-toggle @change="showDetails"></input-toggle>
        </div>
        <div ref="wrapper" class="wrapper">
          <table ref="details">
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
                <td>
                  <svg
                    x="0px"
                    y="0px"
                    viewBox="0 0 297.5 297.5"
                    style="enable-background:new 0 0 297.5 297.5;"
                  >
                    <polygon
                      points="297.5,148.25 148,33.25 148,100.25 0,100.25 0,199.25 148,199.25 148,264.25 "
                    />
                  </svg>
                </td>
                <td>{{item}}</td>
              </tr>
            </tbody>
          </table>
        </div>
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
import InputToggle from "../shared/Input_Toggle.vue";
export default {
  components: {
    InputButton,
    InputForm,
    InputNumber,
    InputRadio,
    InputSubmit,
    InputText,
    InputToggle
  },
  data() {
    return {
      details: [],
      generated: 0,
      isCustom: false,
      plural: "",
      detailsVisible: false
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

      setTimeout(() => {
        const wrapper = this.$refs["wrapper"];
        const details = this.$refs["details"];
        if (wrapper && details) {
          if (this.detailsVisible) {
            wrapper.style.maxHeight = details.scrollHeight + "px";
          } else {
            wrapper.style.maxHeight = null;
          }
        }
      }, 0);
    },
    setCustom(a_value) {
      this.isCustom = a_value || false;
    },
    showDetails(a_value) {
      this.detailsVisible = a_value;
      const wrapper = this.$refs["wrapper"];
      const details = this.$refs["details"];
      if (this.detailsVisible) {
        wrapper.style.maxHeight = details.scrollHeight + "px";
      } else {
        wrapper.style.maxHeight = null;
      }
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
.wrapper {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease;
}

h2 {
  margin: 0.5rem 0;
}
td {
  padding: 0.3rem;
  text-align: center;
  height: 100%;
}
table svg {
  height: 1rem;
  width: 1rem;
}
table svg polygon {
  fill: var(--color-2);
}
</style>
