import Main from "../layouts/Main.vue"

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
    {
      path: 'settings',
      name: 'settings',
      component: () => import('../pages/Settings.vue')
    }
  ]
}]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('../pages/Error404.vue')
  })
}

export default routes
