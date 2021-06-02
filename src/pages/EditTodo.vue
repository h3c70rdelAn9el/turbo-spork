<template>
  <div class="flex flex-col h-full w-full">
    <h2 class="text-center text-3xl">Edit Todo</h2>
    <form @submit.prevent="update" class="m-auto bg-gray-200 w-1/2 md:w-1/3 border rounded-md shadow-lg">
      <div class="p-2">
        <div class="flex flex-col">
          <label class="text-sm">Title</label>
          <input class="w-full p-2 rounded border" v-model="form.title" />
        </div>
        <div class="flex">
          <button class="p-2 mx-auto">
            <input
              class="w-full p-2 rounded-md border shadow hover:bg-gray-300 cursor-pointer"
              type="submit"
            />
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
