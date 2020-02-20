import useEventListener from './useEventListener'
import keysight from 'keysight'

// Adapt vue key modifiers to keysight format
const keyMapper = {
  space: ' ',
  tab: '\t',
  enter: '\n'
}

export default function (key, callback) {
  useEventListener('keydown', (event) => {
    const normalizedEventKey = keysight(event).key

    const shouldMap = Object.keys(keyMapper).find(property => {
      return property === key.toLowerCase()
    })

    if (shouldMap) {
      key = keyMapper[key.toLowerCase()]
    }

    if (normalizedEventKey === key) {
      callback(event)
    }
  })
}
