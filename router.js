import { createRouter, createWebHistory } from 'vue-router'
import Characters from './src/pages/Characters.vue'
import Home from './src/pages/Home.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/characters',
    component: Characters
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
