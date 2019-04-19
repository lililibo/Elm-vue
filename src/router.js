import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    {
      path: '/',
      component: () => import('./views/Home.vue'),
      children: [
        {
          path: 'me', component: () => import('./views/Me.vue'), meta: { title: '饿了么' }
        },
        {
          path: 'discover', component: () => import('./views/Discover.vue'), meta: { title: '发现' }
        },
        {
          path: 'order', component: () => import('./views/Order.vue'), meta: { title: '我的订单' }
        },
        {
          path: 'profile', component: () => import('./views/Profile.vue'), meta: { title: '我的' }
        },
        {
          path: 'city', component: () => import('./views/city.vue')
        },
        {
          path: 'service', component: () => import('./components/service.vue'),children: [
            { path: 'agreement', component: () => import('./components/agreement.vue') }
          ]
        },
        { path: '', redirect: '/me' }
      ]
    },
    {
      path: '/login', component: () => import('./views/Login.vue'), meta: { title: '登陆' }
    },
    {
      path: '/profile/address', component: () => import('./views/Address.vue')
    },
    {
      path: '/profile/benefit', component: () => import('./views/Benefit.vue')
    },
    {
      path: '/commend', component: () => import('./views/Commend.vue'),meta:{title:'推荐有奖'}
    },
    {
      path: '/mservice', component: () => import('./views/Service.vue'),meta:{title:'我的客服'}
    },
    {
      path: '/profile/info', component: () => import('./views/Info.vue'),meta:{title:'账户信息'}
    },
    {
      path: '/shop/:id', name: 'detail', component: () => import('./views/Detail.vue')
    },
    {
      path: '/register', component: () => import('./views/Register.vue'),meta:{title:'注册'}
      },
  ]
})
