<template>
  <section class="flex md:w-full">
    Todo
    <div class="m-auto">
      <div class="flex flex-wrap justify-center w-full">
        <div class="mt-10">
          <AddTodoModal />
          <table>
            <thead>
              <tr>
                <th class="px-4 py-1 border border-gray-300">TODO</th>
                <th class="px-4 py-1 border border-gray-300">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="{ id, title } in todos" :key="id" class="border-b px-2 py-1">
                <!-- <td>{{ todo.title }}</td> -->
                <td>{{ title }}</td>
                <td class="flex">
                  <button class="border rounded-md px-2 py-1 shadow-lg mx-auto">
                    Edit
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section> 
</template>

<script>
// import { reactive } from 'vue'
// import axios from 'axios'
import { useLoadTodos } from '../utilities/firebase'
import AddTodoModal from '../components/Todo/AddTodoModal.vue'

export default {
  components: { 
    AddTodoModal,
  },
  // setup() {
  //   const state = reactive({
  //     todos: []
  //   })

  //   onMounted(async () => {
  //     const { data } = await axios.get(`/todos`)
  //   })
  // }
  // setup() {
  //   const form = reactive({ title: '' })
    
  //   const onSubmit = async () => {
  //     await createTodo({ ...form })
  //     form.title = ''
  //   }
    
  //   return { onSubmit, form }
  // }
  setup() {
    const todos = useLoadTodos()
    // const createTodo = createTodo()
    return { todos }
  }
}
</script>
