import Vue from 'vue'
import VueRouter from 'vue-router'
import * as VueGoogleMaps from 'vue2-google-maps'
import App from './App.vue'

import RestaurantDetail from './components/RestaurantDetail'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDAsZR64PpbQaIzMqDdOvCN4OP6XSijowA',
  }
})

const router = new VueRouter({
  routes: [
    { path: '/restaurant/:id', component: RestaurantDetail }
  ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

