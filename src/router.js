import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/home'
import Mall from './views/mall'
import Overseaservice from './views/overseaservice'
import Store from './views/store'
import My from './views/my'
import Login from './views/login'

Vue.use(Router)


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
   {
     path: '/',
     component: Home
   },
   {
     path: '/mall',
     component: Mall
   },
   {
     path: '/overseaservice',
     component: Overseaservice
   },
   {
     path: '/store',
     component: Store
   },
   {
     path: '/my',
     component: My
   },
   {
     path: '/login',
     component: Login
   }
  ]
})
