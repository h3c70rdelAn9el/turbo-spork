<template>
  <div class="h-screen bg-gradient-to-r from-blue-400 via-black to-purple-300">
    <h2 class="text-center text-2xl text-white">Draggin'</h2>



    <section class="flex flex-col md:flex-row md:justify-between">
      <div
        class="dropzone mb-2 p-2 mx-10 md:w-1/2 min-h-10 bg-gray-200 rounded-md"
        @drop="onDrop($event, 1)"
        @dragenter.prevent
        @dragover.prevent
      >
        <p class="pl-1">First List</p>
        <div
          v-for="item in getList(1)"
          :key="item.id"
          class="border border-black bg-gray-300 w-full p-1 rounded-md m-1 cursor-move"
          draggable="true"
        >
          <button class="hover:cursor-default">
            {{ item.title }}
          </button>
        </div>
      </div>
      <div
        class="dropzone mb-2 p-2 mx-10 md:w-1/2 min-h-10 bg-gray-200 rounded-md"
        @drop="onDrop($event, 2)"
        @dragenter.prevent
        @dragover.prevent
      >
        <p class="pl-1">Second List</p>

        <div
          v-for="item in getList(2)"
          :key="item.id"
          class="border border-black bg-blue-200 w-full p-1 rounded-md m-1 cursor-move"
          draggable="true"
          @dragstart="startDrag($event, item)"
        >
          {{ item.title }}
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import { ref } from 'vue'

  export default {
    setup() {
      const items = ref([
        {
          id: 0,
          title: 'First',
          list: 1,
        },
        {
          id: 1,
          title: 'Second',
          list: 2,
        },
        {
          id: 2,
          title: 'Third',
          list: 2,
        },
      ])

      const getList = (list) => {
        return items.value.filter((item) => item.list == list)
      }

      const startDrag = (event, item) => {
        event.dataTransfer.dropEffect = 'move'
        event.dataTransfer.effectAllowed = 'move'
        event.dataTransfer.setData('itemID', item.id)
      }

      const onDrop = (event, list) => {
        const itemID = event.dataTransfer.getData('itemID')
        const item = items.value.find((item) => item.id == itemID)
        item.list = list
      }

      return {
        getList,
        onDrop,
        startDrag,
      }
    },
  }
</script>
