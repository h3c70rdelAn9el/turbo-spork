<template>
  <div class="flex flex-col h-full w-full">
    <h2 class="text-center text-3xl">Edit Todo</h2>
    <form @submit.prevent="update" class="m-auto bg-gray-200 w-1/2 md:w-1/3 border rounded-md shadow-lg">
      <div class="p-2">
        <div class="flex flex-col">
          <label class="text-sm">Title</label>
          <input class="w-full p-2 rounded border" v-model="form.title" />
        </div>
        <div class="flex justify-between mx-5">
          <button class="p-2 rounded-md border py-2 shadow hover:bg-gray-300 cursor-pointer"
              type="submit">
            <!-- <input
              class="w-full p-2 rounded-md border py-2 shadow hover:bg-gray-300 cursor-pointer"
              type="submit"
            /> -->
            Update
          </button>
            <button
              class="bg-red-400 text-white border rounded-md px-2 shadow hover:bg-red-600"
              @click="deleteTodo(id)"
            >
              Delete
            </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  import { reactive, onMounted, computed } from 'vue'
  import { getTodo, updateTodo } from '../utilities/firebase'
  import { useRoute, useRouter } from 'vue-router'

  export default {
    setup() {
      const route = useRoute()
      const router = useRouter()
      const todoId = computed(() => route.params.id)
      const form = reactive({
        title: '',
      })
      onMounted(async () => {
        const todo = await getTodo(todoId.value)
        console.log(todo, todoId.value)
        form.title = todo.title
      })

      const update = async () => {
        await updateTodo(todoId.value, { ...form })
        router.push('/todos')
        form.title = ''
      }
      return {
        form,
        update,
      }
    },
  }
</script>
