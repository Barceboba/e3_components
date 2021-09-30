import Vue from 'vue'
import App from './App.vue'
import store from './store'
import jQuery from 'jquery'
window.$ = window.jQuery = jQuery
import 'popper.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'



Vue.config.productionTip = false



new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
