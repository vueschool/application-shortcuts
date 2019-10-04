<script>
export default {
  render () {
    return null
  },
  mounted () {
    Object.keys(this.$listeners)
      .forEach(event => {
        const handler = this.$listeners[event]
        window.addEventListener(event, handler)
      })
  },
  destroyed () {
    Object.keys(this.$listeners)
      .forEach(event => {
        const handler = this.$listeners[event]

        window.removeEventListener(event, handler)
      })
  }
}
</script>
