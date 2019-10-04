<template>
  <div>
    <!-- Vue-esque 😍 -->
    <event-listener @keydown.space="toggleVideo" />

    <h1 class="title">Video Example</h1>

    <p class="instructions">
      Tap that space bar and be filled with puppiness
    </p>

    <video ref="video" loop muted playsinline src="/puppiness.mp4" class="container mx-auto" />

    <p class="mt-4">
      Video from Coverr.co
    </p>

  </div>
</template>

<script>
import EventListener from '../components/EventListenerFinal'
export default {
  components: {
    EventListener
  },
  methods: {
    toggleVideo (e) {
      const video = this.$refs.video
      video.paused ? video.play() : video.pause()
    }
  }
}
</script>

<style scoped>

</style>
