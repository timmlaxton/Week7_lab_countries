import Vue from 'vue'
import App from './App.vue'

export const partyBus = new Vue();


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
