import { createRouter, createWebHistory } from 'vue-router'
import Characters from './src/pages/Characters.vue'
import Home from './src/pages/Home.vue'
import Calendar from './src/pages/Calendar.vue'
import Markdown from './src/pages/Markdown.vue'
import Slider from '@/pages/Slider.vue'
import Calculator from '@/pages/Calculator.vue'
import Chat from '@/pages/Chat.vue'
import Draggable from '@/pages/Draggable.vue'
import TodoList from '@/pages/TodoList.vue'
import Error from '@/pages/Error.vue'
// import EditTodoModal from '@/components/Todo/EditTodoModal.vue'
import EditTodo from '@/pages/EditTodo.vue'
import store from './src/store/index'


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
  },
  {
    path: '/chat',
    component: Chat,
    meta: { middleware: 'auth' },
    beforeEnter : ( _, __, next ) => {
      if (!store.state.isLoggedIn) {
        next('/error')
      } else {
        next()
      }
    }
  },
  {
    path: '/drag',
    component: Draggable
  },
  {
    path: '/todos',
    component: TodoList,
    meta: { middleware: 'auth' },
    beforeEnter : ( _, __, next ) => {
      if (!store.state.isLoggedIn) {
        next('/error')
      } else {
        next()
      }
    }
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: EditTodo
  },
  {
    path: '/error',
    name: 'Error',
    component: Error
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to) => {
  if (to.meta.middleware) {
    console.log(to.meta.middleware);
  }
}) 

export default router;
