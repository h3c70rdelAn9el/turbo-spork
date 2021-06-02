<template>
  <button class="px-2 py-1 border rounded-md shadow-lg my-4" @click="isModalOpen = true">
    Add Todo
  </button>
  <teleport to="body">
    <Modal v-if="isModalOpen" @close="isModalOpen = false">
      <template #title>
        Add Todo
      </template>
      <template #body>
        <form @submit.prevent="onSubmit">
          <div class="p-2">
            <label>Title</label>
            <input 
              class="w-full p-2 rounded border"
              placeholder="Add Todo"
              v-model="state.form.title"
            />
            <button class="p-2">
              <input 
                class="w-full p-2 rounded-md border shadow hover:bg-gray-300"
                type="submit"
                value="Create"
              />
            </button>
          </div>
        </form>
      </template>
    </Modal>
  </teleport>    
</template>

<script>
import { reactive, ref } from 'vue'
import {  createTodo } from '../../utilities/firebase'
import Modal from '../Modal.vue'

export default {
  components: {
    Modal
  },
  setup() {
    const isModalOpen = ref(false)
    const state = reactive({
      form: {
      },
    })
    const onSubmit = async () => {
      await createTodo({ ...state.form })
      state.form.title = ''
      isModalOpen.value = false
    }

    return { isModalOpen, state, onSubmit }
  },
          }
</script>
