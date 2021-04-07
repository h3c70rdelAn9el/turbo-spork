import { createRouter, createWebHistory } from 'vue-router'
import Characters from './src/pages/Characters.vue'
import Home from './src/pages/Home.vue'
import Calendar from './src/pages/Calendar.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/characters',
    component: Characters
  },
  {
    path: '/calendar',
    component: Calendar
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
