<template>
  <div class="flex w-full flex-wrap">
    <h1 class="w-full text-center text-3xl my-4">Mardown</h1>
    <section class="flex m-auto h-screen w-10/12">
      <article class="w-1/2 bg-gray-300 border">
        <textarea
          class="w-full h-full"
          :value="text"
          @input="update"
          ref="markdownRef"
        ></textarea>
      </article>
      <article 
        class="w-1/2 bg-blue-400 border"
        v-html="markedText"
      ></article>
    </section>
  </div>
</template>

<script>
  import marked from 'marked'
  import debounce from '../utilities/mixins/debounce'

  export default {
    mixins: [debounce],
    data() {
      return {
        text: '',
        timeout: '',
      }
    },
    computed: {
      markedText() {
        return marked(this.text)
      },
    },
    methods: {
      update(e) {
        const task = () => (this.text = e.target.value)
        this.debounce(task, 500)
      },
    },
    mounted() {
      this.$refs.markdownRef.focus()
    },
  }
</script>
