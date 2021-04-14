<template>
  <section class="flex">
    <div class="m-auto">
      <h2 class="text-2xl text-center mt-3">Calculator<span class="text-sm ml-1">using Vue 3!</span></h2>
      <p
        class="text-3xl w-full text-right my-2 bg-gray-800 rounded-lg text-gray-200 border border-black p-1 mt-4 h-16"
      >
        {{ currentNumber }}
      </p>
      <p class="w-full text-sm p-1 text-right">
        {{ prevNumber }} {{ selectedOperation }} {{ currentNumber }}
      </p>
      <div class="grid grid-cols-4 gap-1">
        <button
          @click="append('1')"
          class="p-2 w-20 h-12 text-xl border border-yellow-900 bg-gray-300 rounded-md shadow hover:bg-gray-500"
        >
          1
        </button>
        <button
          @click="append('2')"
          class="p-2 w-20 h-12 text-xl border border-yellow-900 bg-gray-300 rounded-md shadow hover:bg-gray-500"
        >
          2
        </button>
        <button
          @click="append('3')"
          class="p-2 w-20 h-12 text-xl border border-yellow-900 bg-gray-300 rounded-md shadow hover:bg-gray-500"
        >
          3
        </button>
        <button
          @click="append('+')"
          class="p-2 w-20 h-12 text-xl border border-yellow-900 bg-gray-300 rounded-md shadow hover:bg-gray-500"
        >
          +
        </button>
        <button
          @click="append('4')"
          class="p-2 w-20 h-12 text-xl border border-yellow-900 bg-gray-300 rounded-md shadow hover:bg-gray-500"
        >
          4
        </button>
        <button
          @click="append('5')"
          class="p-2 w-20 h-12 text-xl border border-yellow-900 bg-gray-300 rounded-md shadow hover:bg-gray-500"
        >
          5
        </button>
        <button
          @click="append('6')"
          class="p-2 w-20 h-12 text-xl border border-yellow-900 bg-gray-300 rounded-md shadow hover:bg-gray-500"
        >
          6
        </button>
        <button
          @click="append('-')"
          class="p-2 w-20 h-12 text-xl border border-yellow-900 bg-gray-300 rounded-md shadow hover:bg-gray-500"
        >
          -
        </button>
        <button
          @click="append('7')"
          class="p-2 w-20 h-12 text-xl border border-yellow-900 bg-gray-300 rounded-md shadow hover:bg-gray-500"
        >
          7
        </button>
        <button
          @click="append('8')"
          class="p-2 w-20 h-12 text-xl border border-yellow-900 bg-gray-300 rounded-md shadow hover:bg-gray-500"
        >
          8
        </button>
        <button
          @click="append('9')"
          class="p-2 w-20 h-12 text-xl border border-yellow-900 bg-gray-300 rounded-md shadow hover:bg-gray-500"
        >
          9
        </button>
        <button
          @click="append('*')"
          class="p-2 w-20 h-12 text-xl border border-yellow-900 bg-gray-300 rounded-md shadow hover:bg-gray-500"
        >
          x
        </button>
        <button
          @click="append('c')"
          class="p-2 h-12 border border-yellow-900 rounded-md bg-gray-300 shadow hover:bg-gray-500"
        >
          C
        </button>
        <button
          @click="append('0')"
          class="p-2 h-12 border border-yellow-900 rounded-md bg-gray-300 shadow"
        >
          0
        </button>
        <button
          @click="append('=')"
          class="p-2 h-12 border border-yellow-900 rounded-md bg-gray-300 shadow"
        >
          =
        </button>
        <button
          @click="append('/')"
          class="p-2 h-12 border border-yellow-900 rounded-md bg-gray-300 shadow"
        >
          ÷
        </button>
      </div>
    </div>
  </section>
</template>

<script>
  import { ref, onMounted, onUnmounted } from 'vue'

  export default {
    setup() {
      const operations = ['+', '-', '*', '/']
      const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
      const currentNumber = ref('')
      const prevNumber = ref('')
      const selectedOperation = ref('')

      function append(value) {
        if (value === '=' || value === 'Enter') calculate()
        else if (value === 'c') clear()
        else if (operations.includes(value)) applyOperation(value)
        else if (numbers.includes(value)) appendNumber(value)
      }

      function appendNumber(value) {
        currentNumber.value = currentNumber.value + value
      }

      function applyOperation(value) {
        calculate()
        prevNumber.value = currentNumber.value
        currentNumber.value = ''
        selectedOperation.value = value
      }

      function calculate() {
        if (selectedOperation.value === '*') multiply()
        else if (selectedOperation.value === '/') divide()
        else if (selectedOperation.value === '+') add()
        else if (selectedOperation.value === '-') subtract()

        prevNumber.value = ''
        selectedOperation.value = ''
      }

      const multiply = () =>
        (currentNumber.value = prevNumber.value * currentNumber.value)

      const divide = () =>
        (currentNumber.value = prevNumber.value / currentNumber.value)

      const add = () =>
        (currentNumber.value = +prevNumber.value + +currentNumber.value)

      const subtract = () =>
        (currentNumber.value = prevNumber.value - currentNumber.value)

      const clear = () => (currentNumber.value = '')

      const handleKeydown = (e) => append(e.key)

      onMounted(() => {
        window.addEventListener('keydown', handleKeydown)
      })

      onUnmounted(() => {
        window.removeEventListener('keydown', handleKeydown)
      })

      return { currentNumber, append, selectedOperation, prevNumber }
    },
  }
</script>
