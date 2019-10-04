<script>
const modifierRegEx = /[!~&]/g

function extractOptions (event) {
  const modifierMap = {
    '!': 'capture',
    '~': 'once',
    '&': 'passive'
  }

  const modifiers = event.match(modifierRegEx) || []

  const options = Object.create(null)

  modifiers.forEach(modifier => {
    const option = modifierMap[modifier]
    options[option] = true
  })

  return options
}

export default {
  render () {
    return null
  },
  mounted () {
    Object.keys(this.$listeners)
      .forEach(event => {
        const handler = this.$listeners[event]

        window.addEventListener(
          event.replace(modifierRegEx, ''),
          handler,
          extractOptions(event)
        )
      })
  },
  destroyed () {
    Object.keys(this.$listeners)
      .forEach(event => {
        const handler = this.$listeners[event]

        window.removeEventListener(
          event.replace(modifierRegEx, ''),
          handler
        )
      })
  }
}
</script>
