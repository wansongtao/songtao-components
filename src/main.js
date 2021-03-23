import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.directive('water-mark', (el) => {
  el.style.backgroundImage = `url("data:image/svg+xml,${encodeURIComponent(`<svg width='120' height='120' xmlns='http://www.w3.org/2000/svg'><text transform='translate(60,60) rotate(-45)' font-size='16' fill='#DDD' text-anchor='middle' dominant-baseline='middle'>${'wst'}</text></svg>`)}")`
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
