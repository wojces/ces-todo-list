import { createRouter, createWebHistory } from "vue-router";

import AktywneZadania from './pages/zadania/AktywneZadania.vue'
import ZrealizowaneZadania from './pages/zadania/ZrealizowaneZadania.vue'
import NotFound from './pages/nie_znaleziono/NotFound.vue'

const router = createRouter({
  history: createWebHistory('/ces-todo-list/'),
  routes: [
    { path: '/', redirect: '/aktywne' },
    { path: '/aktywne', component: AktywneZadania },
    { path: '/zrealizowane', component: ZrealizowaneZadania },
    { path: '/:notFound(.*)', component: NotFound }
  ]
})

export default router;