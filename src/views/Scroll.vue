<template>
  <div style="height: 10000px;">

  <event-listener event="scroll" @fired="changeColor" />

    <h1 class="title">Scroll Event</h1>
    <p class="instructions">
      Scroll to see the rainbow
    </p>

  </div>
</template>

<script>

import EventListener from '../components/EventListenerSimple.vue'

export default {
  components: {
    EventListener
  },
  methods: {
    changeColor () {
      document.body.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16)
      // Formula from Paul Irish: https://www.paulirish.com/2009/random-hex-color-code-snippets/
    }
  },

  destroyed () {
    document.body.style.backgroundColor = null
  }
}
</script>
