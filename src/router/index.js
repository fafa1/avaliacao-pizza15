import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import sobre from '@/components/sobre'

Vue.use(Router)


export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/sobre',
      name: sobre,
      component: sobre
    }
  ]
})
