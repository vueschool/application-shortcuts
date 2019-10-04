<template>
  <div>

    <event-listener
      @keydown.meta.70="openSearch"
      @keydown.ctrl.70="openSearch"
      @keydown.esc="hideSearch"
    />

    <h1 class="title">Internal Search</h1>
    <p class="instructions">
      <span class="shortcut">cmd+f</span> or <span class="shortcut">ctrl+f</span> to open,
      <span class="shortcut">esc</span> to close
    </p>

    <div v-if="showSearch" class="shadow-2xl rounded-lg max-w-lg mx-auto bg-gray-800 p-8 text-gray-100 text-left text-xl tracking-wide">
      <form @submit.prevent="search">
        <label>
          What are you looking for today?
          <input
            ref="search" type="text" placeholder="Vue.js courses, lessons, workshops"
            class="p-4 rounded-lg w-full mt-2 placeholder-gray-500 text-gray-800"
          >
        </label>
      </form>

      <div ref="results" class="mt-4 text-gray-100"></div>
    </div>

  </div>
</template>

<script>
import EventListener from '../components/EventListenerFinal.vue'

export default {
  components: {
    EventListener
  },
  data () {
    return {
      showSearch: false
    }
  },
  methods: {
    openSearch (e) {
      e.preventDefault()
      this.showSearch = true

      this.$nextTick(() => {
        this.$refs.search.focus()
      })
    },
    hideSearch (e) {
      if (this.showSearch) {
        this.showSearch = false
      }
    },
    search (e) {
      this.$refs.results.innerHTML = 'Searching...'
    }
  }
}
</script>

<style scoped>

</style>
