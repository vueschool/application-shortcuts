<template>
  <div class="container mx-auto flex justify-center flex-col">
    <h1 class="title">Resources</h1>
    <p class="instructions ">
      Dive deeper into topics and techniques used during the presentation.
    </p>

    <ul class="mt-4 list-disc mx-auto text-lg">
      <li v-for="{link, title} in resources" :key="link.title" class="text-left">
        <a :href="link" target="_blank" class="hover:underline text-pink-600 hover:text-pink-500">{{ title }}</a>
      </li>
    </ul>

    <div class="mt-16 mx-auto max-w-xl rounded-lg bg-white shadow-lg px-8 py-4 flex items-center text-gray-700">

      <div class="h-16 w-16 flex-shrink-0 mr-6">
        <img src="vueschool_logo.png" alt="Vue School Logo Symbol" title="Vue School Logo" />
      </div>

      <div clasS="text-left">

        <h3 class="text-xl font-medium">About Vue School</h3>
        <p class="my-2">
          Our goal is to be the number one source of Vue.js knowledge for all skill levels.
        </p>
        <p>
          <strong>More than 69.000 users have already joined us.</strong>
        </p>

        <ul class="flex justify-between mt-2">
          <li v-for="{link, title} in vueSchool" :key="title">
            <a :href="link" target="_blank" class="hover:underline text-pink-600 hover:text-pink-500">{{ title }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      resources: [
        {
          title: 'vue-global-events (package by Damian and Eduardo)',
          link: 'https://github.com/shentao/vue-global-events'
        },
        {
          title: 'Event reference (inspiration)',
          link: 'https://developer.mozilla.org/en-US/docs/Web/Events'
        },
        {
          title: 'Lifecycle Hooks',
          link: 'https://vuejs.org/v2/guide/instance.html#Instance-Lifecycle-Hooks'
        },
        {
          title: 'Custom events',
          link: 'https://vuejs.org/v2/guide/components-custom-events.html#ad'
        },
        {
          title: 'vm.$listeners',
          link: 'https://vuejs.org/v2/api/#vm-listeners'
        },
        {
          title: 'Key Modifiers',
          link: 'https://vuejs.org/v2/guide/events.html#Key-Modifiers'
        },
        {
          title: 'Special ref attribute',
          link: 'https://vuejs.org/v2/api/#ref'
        },
        {
          title: 'Vue 2 Composition API',
          link: 'https://github.com/vuejs/composition-api'
        },
        {
          title: 'Tailwind CSS',
          link: 'https://tailwindcss.com'
        }
      ],
      vueSchool: [
        {
          link: 'https://vueschool.io',
          title: 'VueSchool.io'
        },
        {
          link: 'https://twitter.com/vueschool_io',
          title: '@vueschool_io'
        },
        {
          link: 'https://twitter.com/hootlex',
          title: '@hootlex'
        },
        {
          link: 'https://twitter.com/vueschool_io',
          title: '@rahaug'
        }
      ]
    }
  }
}
</script>
