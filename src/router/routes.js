const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../components/pages/Home.vue'),
        redirect: '/generator'
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../components/pages/About.vue')
    },
    {
        path: '/dice',
        name: 'dice',
        component: () => import('../components/pages/Dice.vue')
    },
    {
        path: '/generator',
        name: 'generator',
        component: () => import('../components/pages/Generator.vue')
    },
    {
        path: '/manual',
        name: 'manual',
        component: () => import('../components/pages/Manual.vue')
    },
    {
        path: '/settings',
        name: 'settings',
        component: () => import('../components/pages/Settings.vue')
    }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
    routes.push({
        path: '*',
        component: () => import('../components/pages/Error404.vue')
    })
}

export default routes
