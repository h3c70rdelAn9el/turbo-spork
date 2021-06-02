<template>
  <section class="flex w-full">
    <div class="mx-auto">
      <div class="flex flex-wrap justify-center">
        <div class="mt-10">
          <AddTodoModal />
          <table class="w-full">
            <thead>
              <tr>
                <th class="px-5 py-2 border-b border-gray-300">TODO</th>
                <th class="px-5 py-2 border-b border-gray-300">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="{ id, title } in todos"
                :key="id"
                class="border-b px-2 py-1"
              >
                <!-- <td>{{ todo.title }}</td> -->
                <td>{{ title }}</td>
                <td class="flex justify-center">
                  <router-link :to="`/edit/${id}`">
                    <button
                      class="border rounded-md px-2 py-1 shadow-lg mx-auto hover:bg-gray-400"
                    >
                      Edit
                    </button>
                  </router-link>
                  <button
                      class="bg-red-400 text-white border rounded-md px-2 py-1 shadow-lg mx-auto hover:bg-red-600"
                      @click="deleteTodo(id)"
                    >
                      Delete
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
  // import EditTodoModal from '../components/Todo/EditTodoModal.vue'
  // import { reactive } from 'vue'
  // import axios from 'axios'
  import { useLoadTodos, deleteTodo } from '../utilities/firebase'
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
      return { todos, deleteTodo }
    },
  }
</script>
