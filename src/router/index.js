import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/home-vuex',
    name: 'HomeVuex',
    component: () => import('../views/HomeVuex.vue')
  },
  {
    path: '/home-vuex-component',
    name: 'HomeVuexComponent',
    component: () => import('../views/HomeVuexComponent.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
