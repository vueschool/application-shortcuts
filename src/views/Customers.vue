<template>
  <div class="container mx-auto pb-8">

    <user-card v-if="showDetails" :user="currentCustomer" @close="hideCustomer" />

    <template v-else>
      <section class="header">
        <h1 class="title">Customer List</h1>
        <p class="instructions">
          <span class="shortcut">up/down</span> to navigate the list. <span class="shortcut">space</span> to select, <span class="shortcut">enter</span> to view more details,
          and <span class="shortcut">esc</span> to close
        </p>
      </section>

      <div class="table-wrapper">
        <user-actions :users="selectedCustomers" v-if="selectedCustomers.length" @success="resetSelectedCustomers" />
        <table class="customers" ref="table">
          <thead>
          <tr>
            <th colspan="2" class="text-gray-600">({{ selectedCustomers.length }})</th>
            <th class="text-left">Name</th>
            <th class="text-left">Full Name</th>
            <th>Alignment</th>
            <th class="text-right">First Apperance</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(customer, index) in customers"
              :key="customer.id"
              :class="{selected: customer.selected}"
              @click="toggleSelectCustomer(customer)"
              >
            <td :class="{'active': isCurrent(customer) }"></td>
            <td>
              <input type="checkbox" @click.stop="toggleSelectCustomer(customer)" :value="customer.id" :checked="customer.selected" />
            </td>
            <td class="text-left">
              <button @click.stop="showCustomer(index + 1)"
                      :ref="index + 1"
                      class="button">{{ customer.name }}</button> <br>
        <span class="text-sm text-gray-600">{{ customer.alterEgos }}</span>
        </td>
        <td class="text-left">{{ customer.fullName }}</td>
        <td>
              <span class="tag" :class="{'tag-good': customer.alignment === 'good', 'tag-bad': customer.alignment !== 'good'}">
                {{ customer.alignment }}
              </span>
        </td>
        <td class="text-right text-gray-600">{{ customer.firstAppearance }}</td>
        </tr>
        </tbody>
        </table>
      </div>
    </template>

  </div>
</template>

<script>
import { ref, computed } from '@vue/composition-api'
import useShortcut from '../use/useShortcut'
import users from '../users'
import UserActions from '../components/UserActions'
import { decrementPointer, incrementPointer } from '../helpers/NavigationPointerHelpers'
const UserCard = () => import('../components/UserCard')

export default {
  components: {
    UserCard, UserActions
  },
  setup (props, context) {
    // Data
    const current = ref(0)
    const customers = ref([])
    const showDetails = ref(false)

    customers.value = users.map(user => {
      return {
        ...user,
        selected: false
      }
    })

    let limit = customers.value.length
    const activateShortcuts = ref(true)

    const currentCustomer = computed(() => {
      if (current.value === 0) {
        return null
      }
      return customers.value[current.value - 1]
    })

    const selectedCustomers = computed(() => {
      return customers.value.filter(c => c.selected)
    })

    // Methods
    const disableShortcuts = () => { activateShortcuts.value = false }
    const enableShortcuts = () => { activateShortcuts.value = true }
    const shortcutsEnabled = () => activateShortcuts.value
    const isCurrent = (customer) => customer === currentCustomer.value
    const showCustomer = (position) => {
      current.value = position
      showDetails.value = true
      disableShortcuts()
    }
    const hideCustomer = () => {
      showDetails.value = false
      enableShortcuts()
    }
    const toggleSelectCustomer = (customer) => {
      customer.selected = !customer.selected
    }

    const resetSelectedCustomers = () => {
      customers.value = customers.value.map(customer => {
        customer.selected = false
        return customer
      })
      focusOn(current)
    }

    const focusOn = (current) => context.refs[current.value][0].focus()

    // Shortcuts
    useShortcut('up', () => {
      if (!shortcutsEnabled()) return
      current.value = decrementPointer(current.value, limit)
      focusOn(current)
    })

    useShortcut('down', () => {
      if (!shortcutsEnabled()) return
      current.value = incrementPointer(current.value, limit)
      focusOn(current)
    })

    useShortcut('space', (e) => {
      e.preventDefault()
      if (shortcutsEnabled() && currentCustomer.value) {
        toggleSelectCustomer(currentCustomer.value)
      }
    })

    useShortcut('esc', () => {
      if (showDetails.value) {
        hideCustomer()
      }
    })

    return { current, customers, selectedCustomers, currentCustomer, isCurrent, showDetails, showCustomer, toggleSelectCustomer, resetSelectedCustomers, hideCustomer }
  },
  mounted () {
    this.$refs.table.focus()
  }
}
</script>

<style lang="postcss" scoped>
.table-wrapper {
  @apply w-3/4 mx-auto bg-gray-100 border-2 border-gray-300 rounded-lg relative;
}
table.customers {
  @apply px-4 mt-4 w-full;

  thead tr th {
    @apply px-4 pb-4;
  }

  tbody {
    tr {
      @apply border-t-2 border-gray-300 pl-2 cursor-pointer;

      &.selected {
        @apply bg-yellow-100;
      }

      td:not(:nth-of-type(1)) {
        @apply px-4 py-4;
      }

      td.active {
        @apply w-1 bg-teal-400;
      }

      &:last-of-type > td.active {
        @apply rounded-bl-lg;
      }
    }
  }
}
.button {
  @apply font-bold;
  &:hover {
    @apply text-teal-400;
  }
  &:focus {
    @apply outline-none;
  }
}
.tag {
  @apply py-1 px-2 uppercase text-xs font-bold tracking-wide border-2 rounded;

  &-good {
    @apply border-green-200 text-green-500 bg-green-100;
  }
  &-bad {
    @apply border-red-200 text-red-400 bg-red-100;
  }
}
</style>
