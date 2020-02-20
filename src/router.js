import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/scroll',
      name: 'scroll',
      component: () => import('./views/Scroll.vue')
    },
    {
      path: '/network',
      name: 'network',
      component: () => import('./views/Network.vue')
    },
    {
      path: '/play-simple',
      name: 'play-simple',
      component: () => import('./views/Play1.vue')
    },
    {
      path: '/play',
      name: 'play',
      component: () => import('./views/Play2.vue')
    },
    {
      path: '/play-composition',
      name: 'play-composition',
      component: () => import('./views/PlayComposition.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('./views/Search.vue')
    },
    {
      path: '/customers',
      name: 'customers',
      component: () => import('./views/Customers.vue')
    },
    {
      path: '/resources',
      name: 'resources',
      component: () =>
        import('./views/Resources.vue')
    }
  ]
})
