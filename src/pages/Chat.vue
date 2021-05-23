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
            :class="chat.userId !== state.userId ? 'text-right ml-20' : 'mr-20'"
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
  import { onMounted, reactive } from 'vue'
  import firebase from '../utilities/firebase'

  export default {
    setup() {
      const state = reactive({
        chats: {},
        message: '',
        collection: null,
        userId: null,
      })
      onMounted(async () => {
        const db = firebase.database()
        state.collection = db.ref('chats')
        const data = await state.collection.once('value')
        state.chats = data.val()
        state.userId = firebase.auth().currentUser.uid

        // state.collection.on('value', (snapshot) => {
        //   state.chats = snapshot.val()
        // });
      })

      function addNewMessage() {
        const newChat = state.collection.push()
        newChat.set({ userId: state.userId, message: state.message })
        state.message = ''
      }

      return { state, addNewMessage }
    },
  }
</script>
