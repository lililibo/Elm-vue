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
         path: 'me', component: () => import('./views/Me.vue')
       },
       {
        path: 'discover', component: () => import('./views/Discover.vue')
      },
      {
        path: 'order', component: () => import('./views/Order.vue')
      },
      {
        path: 'profile', component: () => import('./views/Profile.vue')
      },
      
      { path: '', redirect: '/me' }
     ]
   },
   {
    path: '/login', component: () => import('./views/Login.vue')
    },
    {
      path: '/profile/info', component: () => import('./views/Info.vue')
    },
    {
      path: '/register', component: () => import('./views/Register.vue')
      },
   { path: '*', redirect: '/me' }
  ]
})
