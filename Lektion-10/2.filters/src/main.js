import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Vue.filter('to-upper', value => {
//   return value.toUpperCase()
// })

// Vue.filter('shorten', val => {
//   return val.slice(0, 100) + '...'
// })

new Vue({
  render: h => h(App),
}).$mount('#app')
