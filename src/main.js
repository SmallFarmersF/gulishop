import Vue from 'vue'
import App from './App.vue'
//import App from '@/App' @是一个别名，代表的是src的路径

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
