<script>
export default {
  render () {
    return null
  },
  props: {
    event: {
      type: String,
      required: true
    }
  },
  methods: {
    handle (e) {
      this.$emit('fired', e)
    }
  },
  mounted () {
    window.addEventListener(this.event, this.handle)
  },
  destroyed () {
    window.removeEventListener(this.event, this.handle)
  }
}
</script>
