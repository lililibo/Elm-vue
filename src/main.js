import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import 'vant/lib/button/style';

import { Collapse, CollapseItem, CouponCell, CouponList, Card, Popup, GoodsAction, GoodsActionBigBtn, GoodsActionMiniBtn, Button  } from 'vant';

<<<<<<< HEAD
Vue.use(Collapse).use(CollapseItem).use(CouponCell).use(CouponList);
import { Cell, CellGroup } from 'vant';
Vue.use(Cell).use(CellGroup)
=======
Vue.use(Collapse).use(CollapseItem).use(CouponCell).use(CouponList).use(Card).use(Popup).use(GoodsAction).use(GoodsActionBigBtn).use(GoodsActionMiniBtn).use(Button);
>>>>>>> 8b31b5f908279d11a7e4f8b8e869343539e04a12

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
