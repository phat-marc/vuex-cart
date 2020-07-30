import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import store from './store/index.js'

import Products from './components/Products.vue'
import Cart from './components/Cart.vue'

// call router and deine route compos
Vue.use(VueRouter)

// define routes 
const routes = [
  { path: '/', component: Products },
  { path: '/cart', component: Cart }
]

// register the routes
const router = new VueRouter({
  routes
})

new Vue({
  el: '#app', 
  render: h => h(App),
  router,
  store
})


