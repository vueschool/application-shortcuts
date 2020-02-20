<template>
  <ul class="actions" >
    <li><button :class="{active: isActive(1)}" ref="1" @click="approve"><i class="fas fa-check"></i></button></li>
    <li><button :class="{active: isActive(2)}" ref="2" @click="decline"><i class="fas fa-times"></i></button></li>
    <li><button :class="{active: isActive(3)}" ref="3" @click="followUp"><i class="far fa-calendar-plus"></i></button></li>
    <li><button :class="{active: isActive(4)}" ref="4" @click="remove"><i class="fas fa-trash-alt"></i></button></li>
  </ul>
</template>

<script>
import { ref } from '@vue/composition-api'
import useShortcut from '../use/useShortcut'
import { incrementPointer, decrementPointer } from '../helpers/NavigationPointerHelpers'

export default {
  setup (props, context) {
    const action = ref(0)
    const limit = 4

    const isActive = (position) => action.value === position

    useShortcut('right', () => {
      action.value = incrementPointer(action.value, limit)
      context.refs[action.value].focus()
    })

    useShortcut('left', () => {
      action.value = decrementPointer(action.value, limit)
      context.refs[action.value].focus()
    })

    return { isActive }
  },
  props: {
    users: {
      required: true,
      type: Array
    }
  },
  methods: {
    approve () {
      this.$emit('success')
    },
    decline () {
      this.$emit('success')
    },
    followUp () {
      this.$emit('success')
    },
    remove () {
      this.$emit('success')
    }
  }
}
</script>

<style scoped>
  ul.actions  {
    @apply flex justify-between border-2 border-gray-400 rounded-lg bg-gray-100 absolute mt-8 w-64 shadow-xl;

    left: calc(50% - 8rem);

    li {
      @apply  w-full text-center font-bold text-gray-600;
      button {
        @apply py-3 w-full font-bold;

        &:first-of-type {
          @apply rounded-l-lg;
        }

        &:first-of-type {
          @apply rounded-r-lg;
        }

        &:hover, &.active {
          @apply bg-gray-200 text-gray-800;
        }
      }
    }
  }
</style>
