<template>
  <div class="container w-full relative">
    <button @click="close" class="close" title="close view">X</button>

    <div class="user-card">
      <div class="w-full mt-8 mx-auto bg-gray-200 border-2 border-gray-300 rounded-lg text-left text-gray-700">

        <div class="px-6 pt-6">
          <div :class="{'border-green-300': user.alignment === 'good', 'border-red-300': user.alignment === 'bad'}" class="w-64 h-64 border-4 rounded-full bg-white mx-auto mb-8 flex items-center justify-center">
            <span class="text-4xl font-bold text-gray-500 tracking-wider">{{ initials }}</span>
          </div>
          <h1 class="text-3xl font-semibold flex items-baseline justify-between flex-wrap">
            {{ user.name }} <span class="font-normal text-gray-600 text-2xl">/ {{ user.fullName }}</span>
          </h1>
          <p class="text-gray-600">
            {{ user.placeOfBirth }}
          </p>
          <br>
          <p>
            <strong>Kown aliases:</strong> <br>
            {{ aliases }}
          </p>

          <p class="mt-4">
            <strong>First appearance:</strong><br>
            {{ user.firstAppearance }} - {{ user.publisher }}
          </p>
          <hr class="mt-4">
        </div>

        <ul ref="links" class="actions">
          <li>
            <a :class="{'active': isActive(1)}" href="#view">View</a>
          </li>
          <li>
            <a :class="{'active': isActive(2)}" href="#suspend">Suspend</a>
          </li>
          <li>
            <a :class="{'active': isActive(3)}" href="#email">Email</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
import useShortcut from '../use/useShortcut'
import { decrementPointer, incrementPointer } from '../helpers/NavigationPointerHelpers'

export default {
  setup () {
    const action = ref(0)
    const limit = 3

    const isActive = (position) => action.value === position

    useShortcut('right', () => {
      action.value = incrementPointer(action.value, limit)
    })

    useShortcut('left', () => {
      action.value = decrementPointer(action.value, limit)
    })

    return { isActive }
  },
  props: {
    user: {
      required: true,
      type: Object
    }
  },
  computed: {
    aliases () {
      const aliases = this.user.aliases
      return aliases && aliases.length > 0 ? aliases.join(', ') : 'No known aliases'
    },
    initials () {
      const names = this.user.fullName.split(' ')
      return names.map(name => name.charAt(0)).join('').toUpperCase()
    }
  },
  methods: {
    close () {
      this.$emit('close')
    }
  },
  mounted () {
    this.$refs.links.focus()
  }
}
</script>

<style scoped>
.close {
  @apply  absolute right-0 border-2 border-gray-300 rounded-full w-12 h-12 flex items-center justify-center text-gray-500 font-bold;
  &:hover {
    @apply border-gray-400;
  }
}
.user-card {
  @apply mx-auto pt-8;
  width: 25rem;
}
.actions {
  @apply flex justify-between;
  li {
    @apply  w-full text-center font-bold text-gray-600;

    a {
      @apply h-full py-3 flex items-center justify-center text-center;
      &:hover, &.active {
        @apply bg-gray-300 text-gray-700;
      }
    }
  }
}
</style>
