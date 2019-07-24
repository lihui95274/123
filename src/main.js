import Vue from 'vue'
import store from './store/store'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import http from './http/index'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.prototype.$http = http
Vue.config.productionTip = false
// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
