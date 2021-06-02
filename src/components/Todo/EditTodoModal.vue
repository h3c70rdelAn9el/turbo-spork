<template>
  <button class="px-2 py-1 mx-auto border rounded-md shadow-lg my-4" @click="isModalOpen = true">
    Edit Todo
  </button>
  <teleport to="body">
    <Modal v-if="isModalOpen" @close="isModalOpen = false">
      <template #title>
        Add Todo
      </template>
      <template #body>
        <form @submit.prevent="update">
          <div class="p-2">
            <label>Title</label>
            <input 
              class="w-full p-2 rounded border"
              v-model="form.title"
            />
            <button class="p-2">
              <input 
                class="w-full p-2 rounded-md border shadow hover:bg-gray-300"
                type="submit"
              />
            </button>
          </div>
        </form>
      </template>
    </Modal>
  </teleport>    
</template>

<script>
import { reactive, onMounted, computed, ref } from 'vue'
import { getTodo, updateTodo } from '../../utilities/firebase'
import Modal from '../Modal.vue'
import { useRoute } from 'vue-router'

// export default {
//   components: {
//     Modal
//   },
//   setup() {
//     const isModalOpen = ref(false)
//     const state = reactive({
//       form: {
//       },
//     })
//     const onSubmit = async () => {
//       await createTodo({ ...state.form })
//       state.form.title = ''
//       isModalOpen.value = false
//     }

//     return { isModalOpen, state, onSubmit }
//   },
// }

export default {
  components: {
    Modal
  },
  setup() {
    const isModalOpen = ref(false)
    const route = useRoute()
    
    const todoId = computed(() => route.params.id)

    // const form = reactive({
    //   title: ''
    // })

    const state = reactive({
      form: {}
    })

    onMounted(async () => {
      const todo = await getTodo(todoId.value)
      console.log(todo, todoId.value)
      // form.title = todo.name
      state.form.title = todo.title
    })

    const update = async () => {
      await updateTodo(todoId.value, { ...state.form })
      state.form.title = ''
    }

    return  {
      state,
      update,
      isModalOpen
    }
  }
}
</script>
