import Vue from 'vue'

if (process.env.MODE === "electron") {
  const electron = window.require('electron')

  Vue.prototype.$electron = electron
}
