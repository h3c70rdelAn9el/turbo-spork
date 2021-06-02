<template>
  <div>
    Edit Todo
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
      title: ''
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
      update
    }
  }
}
</script>
