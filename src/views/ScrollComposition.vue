<template>
  <div style="height: 10000px;">
    <h1 class="title">Scroll Event</h1>
    <p class="instructions">
      Scroll to see the rainbow
    </p>
  </div>
</template>

<script>
import useEventListener from '../use/useEventListener'

function changeBackgroundColor () {
  document.body.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16)
  // Formula from Paul Irish: https://www.paulirish.com/2009/random-hex-color-code-snippets/
}
export default {
  setup (props, context) {
    useEventListener('scroll', changeBackgroundColor)
  },
  destroyed () {
    document.body.style.backgroundColor = null
  }
}
</script>
