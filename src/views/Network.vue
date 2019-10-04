<template>
  <div>
    <h1 class="title">Network Events</h1>
    <p class="instructions">
      Disconnect your internet and see what happens
    </p>

    <event-listener event="offline" @fired="showOfflineMessage" />
    <event-listener event="online" @fired="hideOfflineMessage" />

    <div v-if="offline" class="rounded bg-red-200 p-4">
      <h3 class="font-medium">Whoops! You lost your internet connection</h3>
    </div>

  </div>
</template>

<script>
import EventListener from '../components/EventListenerSimple.vue'

export default {
  components: {
    EventListener
  },
  data () {
    return {
      offline: false
    }
  },
  methods: {
    showOfflineMessage (e) {
      this.offline = true
    },
    hideOfflineMessage (e) {
      this.offline = false
    }
  }
}
</script>

<style scoped>

</style>
