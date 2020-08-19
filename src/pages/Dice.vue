<template>
  <q-page class="q-pa-md">
    <section class="radio-group max-width container-center">
      <q-form @submit.prevent="submitHandler">
        <div class="group">
          <InputRadio
            v-for="(item, index) in defaults"
            :id="'radio_' + item"
            :key="index"
            :name="'dice'"
            :value="item"
            @click="setCustom(false)"
            >{{ item }}</InputRadio
          >
        </div>
        <br />
        <div class="custom-radio">
          <InputRadio
            :id="'radio_custom'"
            value="Personnalisé"
            name="dice"
            @click="setCustom(true)"
            >Personnalisé</InputRadio
          >
          <div class="spacer">
            <div :class="{ 'bg-active': isCustom }"></div>
          </div>
          <InputNumber
            id="custom"
            :value="customDefault"
            :max="1000"
            :min="1"
            :class="{ 'border-active': isCustom, border: true }"
            @change="
              a_event => {
                customValue = parseInt(a_event.target.value);
              }
            "
          />
        </div>

        <div class="group auto q-pa-md q-mt-md">
          <q-btn
            class="no-border-radius"
            color="primary"
            data-mode="submit"
            type="submit"
            >Générer</q-btn
          >
          <q-btn
            class="no-border-radius"
            color="primary"
            data-mode="add"
            type="submit"
            >+</q-btn
          >
          <InputNumber id="amount" :max="99" :min="1" @change="changeHandler" />
          <span>dé{{ plural ? "s" : "" }}</span>
        </div>
      </q-form>
    </section>

    <section class="max-width">
      <div class="row justify-between">
        <h2 class="noselect">Résultat</h2>
        <div class="text-h3">{{ generated }}</div>
      </div>
      <div v-if="plural" class="row justify-between">
        <h2 class="noselect text-center">Détail</h2>
        <q-toggle v-model="detailsVisible" color="primary" />
      </div>
      <q-slide-transition>
        <div v-show="detailsVisible">
          <table>
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
                <td>{{ index + 1 }}</td>
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
                <td>{{ item }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </q-slide-transition>
    </section>
  </q-page>
</template>

<script>
import InputButton from "../components/Input_Button.vue";
import InputNumber from "../components/Input_Number.vue";
import InputRadio from "../components/Input_Radio.vue";
import InputSubmit from "../components/Input_Submit.vue";
import InputText from "../components/Input_Text.vue";
import InputToggle from "../components/Input_Toggle.vue";
export default {
  components: {
    InputButton,
    InputNumber,
    InputRadio,
    InputSubmit,
    InputText,
    InputToggle
  },
  computed: {
    customDefault: {
      get() {
        return this.$store.getters["application/config_dice"].customDefault;
      }
    },
    defaults: {
      get() {
        return this.$store.getters["application/config_dice"].defaults;
      }
    },
    generated: {
      get() {
        return this.generatedValues.reduce((acc, val) => {
          return acc + val;
        }, 0);
      }
    }
  },
  data() {
    return {
      details: [],
      generatedValues: [],
      isCustom: false,
      customValue: this.$store.getters["application/config_dice"].customDefault,
      plural: false,
      detailsVisible: false
    };
  },
  methods: {
    changeHandler(a_event) {
      this.plural = a_event.target.value == 1 ? false : true;
    },
    submitHandler(a_event) {
      // TODO : change radio button to share the same name, and use their value while posting
      const method = a_event.submitter.attributes["data-mode"].value;

      const el = document.querySelector("input[name=dice]:checked");
      if (!el) {
        return;
      }
      let value = el.value;
      if (value === "Personnalisé") {
        value = this.customValue;
      }

      if (!value) {
        return;
      }
      this.details = [];
      for (let i = 0; i < (document.getElementById("amount").value || 1); i++) {
        this.details.push(Math.round(Math.random() * (value - 1) + 1));
      }

      if (method === "add") {
        this.generatedValues.push(
          this.details.reduce((acc, val) => {
            return acc + val;
          })
        );
      } else if (method === "submit") {
        this.generatedValues = [
          this.details.reduce((acc, val) => {
            return acc + val;
          })
        ];
      } else {
        this.generatedValues = [];
      }

      // setTimeout(() => {
      //   const wrapper = this.$refs["wrapper"];
      //   const details = this.$refs["details"];
      //   if (wrapper && details) {
      //     if (this.detailsVisible) {
      //       wrapper.style.maxHeight = details.scrollHeight + "px";
      //     } else {
      //       wrapper.style.maxHeight = null;
      //     }
      //   }
      // }, 0);
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
  column-gap: 1rem;
  row-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  grid-auto-flow: row;
  align-items: center;
}
.group.auto {
  grid-template-columns: auto auto auto 1fr;
}
.custom-radio {
  display: grid;
  grid-template-columns: auto 1fr auto;
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
}
table svg {
  height: 1rem;
  width: 1rem;
}
table svg polygon {
  fill: var(--color-2);
}
.max-width {
  max-width: 600px;
}
</style>
