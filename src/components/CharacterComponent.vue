<template>
  <div class="flex flex-col">
    <section
      class="flex flex-col mx-auto mt-4 w-96 border border-black rounded-sm shadow"
    >
      <div
        class="text-center flex flex-row justify-between p-1 border border-gray-200"
        v-for="(character, index) in characters"
        :key="index"
      >
        <div class="text-left">
          <p>Name: {{ character.name }}</p>
          <p>House: {{ character.house }}</p>
        </div>
        <button
          class="bg-red-200 hover:bg-red-400 p-1 rounded-md"
          v-on:click="removeCharacter(index)"
        >
          delete
        </button>
      </div>
      <p class="mt-3 text-sm ml-1">Total characters: {{ charactersCount }}</p>
    </section>
    <div class="flex flex-col mx-auto">
      <p class="text-center">Add Character</p>
      <form
        @submit.prevent="addCharacter"
        class="w-full flex flex-col sm:flex-row"
      >
        <input
          class="text-center mt-2 border p-2 border-gray-700 rounded-sm shadow w-48"
          v-model.trim="newCharacter.name"
          placeholder="Full Name"
          ref="newCharacterRef"
        />
        <input
          class="text-center mt-2 border p-2 border-gray-700 rounded-sm shadow w-48"
          v-model.trim="newCharacter.house"
          placeholder="house"
        />
        <button
          type="submit"
          class="border border-gray-800 rounded-sm shadow p-2 mt-2 bg-blue-300 hover:bg-blue-500"
        >
          Add Character
        </button>
      </form>
    </div>
  </div>
</template>

<script>
  import { computed, onMounted, ref } from 'vue'

  export default {
    setup() {
      const newCharacterRef = ref('')
      const newCharacter = ref([{
        name: '',
        house: ''
      }])
      const characters = ref([
        {
          name: 'Ned Stark',
          house: 'Stark',
        },
        {
          name: 'Catelyn Stark',
          house: 'Stark',
        },
        {
          name: 'Arya Stark',
          house: 'Stark',
        },
        {
          name: 'Sansa Stark',
          house: 'Stark',
        },
        {
          name: 'Rob Stark',
          house: 'Stark',
        },
        {
          name: 'Bran Stark',
          house: 'Stark',
        },
        {
          name: 'Rickon Stark',
          house: 'Stark',
        },
        {
          name: 'Jon Snow',
          house: 'Stark',
        },
      ]);

      onMounted(() => {
        newCharacterRef.value.focus()
      });

      const charactersCount = computed({
        get: () => characters.value.length
      });

      function remove(index) {
        characters.value = characters.value.filter((character, i) => i != index)
      }

      function addCharacter() {
        if (newCharacter.value !== '') {
          characters.value.unshift({ name: newCharacter.value })
          newCharacter.value = ''
        }
      }

      return { characters, newCharacter, remove, addCharacter, newCharacterRef, charactersCount }
    }
  }
</script>
