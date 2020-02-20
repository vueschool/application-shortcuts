<template>
  <div>

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
import useShortcut from '../use/useShortcut'

export default {
  setup (props, context) {
    useShortcut('space', () => {
      const video = context.refs.video
      video.paused ? video.play() : video.pause()
    })
  }
}
</script>

<style scoped>

</style>
