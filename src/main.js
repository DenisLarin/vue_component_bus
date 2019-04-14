import Vue from 'vue'
import App from './App.vue'


export const serverBus = new Vue();git

new Vue({
  el: '#app',
  render: h => h(App)
})
