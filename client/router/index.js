import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Homepage from '../views/Homepage'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/builtin-default-homepage',
      component: Home
    },
    {
      path: '/',
      component: Homepage
    },
  ]
})
