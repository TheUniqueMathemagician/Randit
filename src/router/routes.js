import Main from "../layouts/Main.vue"
import {
  route
} from "quasar/wrappers"

const routes = [{
  path: "/",
  component: Main,
  children: [{
      path: '',
      name: 'home',
      component: () => import('../pages/Home.vue')
    },
    {
      path: 'about',
      name: 'about',
      component: () => import('../pages/About.vue')
    },
    {
      path: 'dice',
      name: 'dice',
      component: () => import('../pages/Dice.vue')
    },
    {
      path: 'key',
      name: 'key',
      component: () => import('../pages/Key.vue')
    },
    {
      path: 'word',
      name: 'word',
      component: () => import('../pages/Word.vue')
    },
    {
      path: 'manual',
      name: 'manual',
      component: () => import('../pages/Manual.vue')
    },

  ]
}]

// if is electron
if (process.env.MODE === "electron") {
  routes.find((route) => {
    return route.path === '/'
  }).children.push({
    path: 'settings',
    name: 'settings',
    component: () => import('../pages/Settings.vue')
  })
}

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('../pages/Error404.vue')
  })
}

export default routes
