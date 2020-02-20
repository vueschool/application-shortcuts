import { onMounted, onUnmounted } from '@vue/composition-api'

export default (event, callback) => {
  onMounted(() => document.addEventListener(event, callback))
  onUnmounted(() => document.removeEventListener(event, callback))
}
