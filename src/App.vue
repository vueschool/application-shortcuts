<template>
  <div id="app">

    <event-listener
      @keydown.ctrl.49="navigateTo('home', $event)"
      @keydown.ctrl.50="navigateTo('scroll', $event)"
      @keydown.ctrl.51="navigateTo('network', $event)"
      @keydown.ctrl.52="navigateTo('play-simple', $event)"
      @keydown.ctrl.53="navigateTo('play', $event)"
      @keydown.ctrl.54="navigateTo('search', $event)"
      @keydown.ctrl.55="navigateTo('resources', $event)"
    />

    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link :to="{name: 'scroll'}" >Scroll</router-link> |
      <router-link :to="{name: 'network'}">Network</router-link> |
      <router-link :to="{name: 'play-simple'}">Play 1</router-link> |
      <router-link :to="{name: 'play'}">Play 2</router-link> |
      <router-link :to="{name: 'search'}">Search</router-link> |
      <router-link :to="{name: 'resources'}">Resources</router-link>
    </div>
    <router-view :key="$route.path"/>
  </div>
</template>

<script>
import EventListener from './components/EventListenerFinal.vue'

export default {
  components: {
    EventListener
  },
  methods: {
    navigateTo (routeName, e) {
      e.preventDefault()
      this.$router.push({ name: routeName })
    }
  }
}
</script>

<style lang="scss">

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
