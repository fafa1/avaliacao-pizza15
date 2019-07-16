// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import StarRating from 'vue-star-rating'
import { VueStars } from "vue-stars"
import BootstrapVue from 'bootstrap-vue'

Vue.component("vue-stars", VueStars)
Vue.component('star-rating', StarRating)

Vue.use(BootstrapVue)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
