import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import 'vant/lib/button/style';

import { Collapse, AddressList, NavBar, CollapseItem, CouponCell, CouponList, Card, Popup, GoodsAction, GoodsActionBigBtn, GoodsActionMiniBtn, Button, Cell, CellGroup  } from 'vant';

Vue.use(Collapse).use(CollapseItem).use(CouponCell).use(CouponList).use(Card).use(Popup).use(GoodsAction).use(GoodsActionBigBtn).use(GoodsActionMiniBtn).use(Button).use(Cell).use(CellGroup).use(AddressList).use(NavBar);


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
