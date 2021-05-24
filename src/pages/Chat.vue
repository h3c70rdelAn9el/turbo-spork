<template>
  <section class="flex w-full h-full">
    <div class="m-auto">
      <h1 class="text-3xl text-center">
        Chat <span class="text-xs">using Vue3</span>
      </h1>
      <div class="border w-96 bg-gray-200 rounded-lg shadow-lg mb-2 pb-3">
        <div class="h-full w-full p-4">
          <div
            v-for="chat in state.chats"
            :key="chat.message"
            class="bg-blue-300 m-1 shadow rounded-lg pt-2 px-2"
            :class="chat.userId !== userId ? 'text-right ml-20' : 'mr-20'"
          >
            {{ chat.message }}
          </div>
        </div>
        <div class="h-10 p-2">
          <input
            type="text"
            v-model="state.message"
            placeholder="Say something..."
            class="p-1 border rounded shadow w-full"
            @keydown.enter="addNewMessage"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { computed, onMounted, reactive } from 'vue'
  import { chatsRef } from '../utilities/firebase'
  import { useStore } from 'vuex'


  export default {
    setup() {
      const state = reactive({
        chats: [],
        message: '',
      })

      const store = useStore()

      const userId = computed(() => store.state.authUser.uid)
      
      onMounted(async () => {
        chatsRef.on('child_added', (snapshot) => {
          state.chats.push({ key: snapshot.key, ...snapshot.val() })
        })
      })

      function addNewMessage() {
        const newChat = chatsRef.push()
        newChat.set({ userId: state.userId, message: state.message })
        state.message = ''
      }

      return { state, addNewMessage, userId }
    },
  }
</script>
