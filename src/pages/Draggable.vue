<template>
  <div class="flex flex-col">
    <h2 class="text-center text-2xl">Dragging!</h2>
    <div
      class="dropzone mb-2 p-2 mx-20 min-h-10 bg-gray-200 rounded-md"
      @drop="onDrop($event, 1)"
      @dragenter.prevent
      @dragover.prevent
    >
      <div
        v-for="item in getList(1)"
        :key="item.id"
        class="border border-black bg-gray-300 w-full p-1 rounded-sm m-1"
        draggable="true"
      >
        <button>

        {{ item.title }}
        </button>
      </div>
    </div>
    <div
      class="dropzone mb-2 p-2 mx-20 min-h-10 bg-gray-200 rounded-md"
      @drop="onDrop($event, 2)"
      @dragenter.prevent
      @dragover.prevent
    >
      <div
        v-for="item in getList(2)"
        :key="item.id"
        class="border border-black bg-blue-200 w-full p-1 rounded-sm m-1"
        draggable="true"
        @dragstart="startDrag($event, item)"
      >
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const items = ref([
      {
        id: 0,
        title: "First",
        list: 1
      },
      {
        id: 1,
        title: "Second",
        list: 2
      },
      {
        id: 2,
        title: "Third",
        list: 2
      }
    ]);

    const getList = (list) => {
      return items.value.filter((item) => item.list == list);
    };

    const startDrag = (event, item) => {
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("itemID", item.id);
    };

    const onDrop = (event, list) => {
      const itemID = event.dataTransfer.getData("itemID");
      const item = items.value.find((item) => item.id == itemID);
      item.list = list;
    };

    return {
      getList,
      onDrop,
      startDrag
    };
  }
};
</script>
