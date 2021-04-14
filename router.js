import { createRouter, createWebHistory } from 'vue-router'
import Characters from './src/pages/Characters.vue'
import Home from './src/pages/Home.vue'
import Calendar from './src/pages/Calendar.vue'
import Markdown from './src/pages/Markdown.vue'
import Slider from '@/pages/Slider.vue'
import Calculator from '@/pages/Calculator.vue'

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
  },
  {
    path: '/markdown',
    component: Markdown
  },
  {
    path: '/slider',
    component: Slider
  },
  {
    path: '/calculator',
    component: Calculator
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
