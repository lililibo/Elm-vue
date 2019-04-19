import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import 'vant/lib/button/style';

import { Collapse, CollapseItem, CouponCell, CouponList } from 'vant';

Vue.use(Collapse).use(CollapseItem).use(CouponCell).use(CouponList);
import { Cell, CellGroup } from 'vant';
Vue.use(Cell).use(CellGroup)

import { AddressList,NavBar } from 'vant'
Vue.use(AddressList).use(NavBar)

import { Button } from 'vant';

Vue.use(Button);
//按钮

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
