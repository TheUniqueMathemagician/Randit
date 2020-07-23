<template>
  <q-bar class="bg-primary text-white">
    <div class="cursor-pointer non-selectable">
      File
      <q-menu>
        <q-list dense style="min-width: 100px">
          <q-item clickable v-close-popup>
            <q-item-section>Open...</q-item-section>
          </q-item>
          <q-item clickable v-close-popup>
            <q-item-section>New</q-item-section>
          </q-item>
          <q-separator />
          <q-item clickable>
            <q-item-section>Preferences</q-item-section>
            <q-item-section side>
              <q-icon name="keyboard_arrow_right" />
            </q-item-section>

            <q-menu anchor="top right" self="top left">
              <q-list dense>
                <q-item v-for="n in 3" :key="n" clickable>
                  <q-item-section>Submenu Label</q-item-section>
                  <q-item-section side>
                    <q-icon name="keyboard_arrow_right" />
                  </q-item-section>
                  <q-menu auto-close anchor="top right" self="top left">
                    <q-list dense>
                      <q-item v-for="n in 3" :key="n" clickable>
                        <q-item-section>3rd level Label</q-item-section>
                      </q-item>
                    </q-list>
                  </q-menu>
                </q-item>
              </q-list>
            </q-menu>
          </q-item>
          <q-separator />
          <q-item clickable v-close-popup>
            <q-item-section>Quit</q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </div>
    <div class="cursor-pointer non-selectable">
      Edit
      <q-menu>
        <q-list dense style="min-width: 100px">
          <q-item clickable v-close-popup>
            <q-item-section>Cut</q-item-section>
          </q-item>
          <q-item clickable v-close-popup>
            <q-item-section>Copy</q-item-section>
          </q-item>
          <q-item clickable v-close-popup>
            <q-item-section>Paste</q-item-section>
          </q-item>
          <q-separator />
          <q-item clickable v-close-popup>
            <q-item-section>Select All</q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </div>
    <q-space />
    <div class="window-icons-group">
      <button class="fixed-width" @click.prevent="buttonHandler_minimize">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M19 13H5v-2h14v2z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </button>
      <button class="fixed-width" @click.prevent="buttonHandler_maximize">
        <svg
          v-if="$store.getters['electron/maximized']"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H6V6h12v12z"
          />
        </svg>
      </button>
      <button class="red fixed-width" @click.prevent="buttonHandler_quit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
          />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </button>
    </div>
  </q-bar>
</template>

<style lang="scss" scoped>
/* Menu group */

.menu-group {
  box-sizing: border-box;
  display: grid;
  grid-auto-flow: column;
  height: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
}
.menu-group li {
  color: var(--color-2);
  cursor: default;
  font-size: 12px;
  height: 100%;
  padding: 0 0.5em;
}
.menu-group li:hover {
  background-color: var(--color-5);
  color: var(--color-1);
}
.menu-group li ul {
  padding: 0;
}

/* Window icon group */

.window-icons-group {
  display: flex;
  height: 100%;
}
.window-icons-group button {
  align-items: center;
  background-color: transparent;
  border: 0;
  color: var(--color-1);
  display: flex;
  height: 100%;
  justify-content: center;
  opacity: 0.8;
  outline: 0;
  padding: 0;
  position: relative;
  transition: 0.2s all;
  width: 46px;
}
.window-icons-group button:hover {
  background-color: var(--color-5);
  opacity: 1;
}
.window-icons-group button.red:hover {
  background-color: #bb0000;
}
.window-icons-group button svg {
  fill: var(--color-1);
  height: 50%;
}

/* Divers */
.center {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
}
</style>
