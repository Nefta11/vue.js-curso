import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView,
    // },
    {
      path: '/Contador',
      name: 'Contador',
      component: () => import('../modules/contador/components/Contador.vue'),
    },
    {
      path: '/ListaDeTareas',
      name: 'ListaDeTareas',
      component: () => import('../modules/listaDeTareas/components/ListaDeTareas.vue'),
    },
  ],
})

export default router
