import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueWechatTitle from 'vue-wechat-title'
Vue.use(VueWechatTitle)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
