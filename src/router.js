import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/home'
import Mall from './views/mall'
import Overseaservice from './views/overseaservice'
  import overseaserviceIndex from './views/overseaservice/index'
  import overseaserviceIndexProjectlist from './views/overseaservice/projectlist'
  import overseaserviceCountrylist from './views/overseaservice/countrylist'
import Store from './views/store'
import My from './views/my'
import Login from './views/login'
import Forget from './views/forget'
import Register from './views/register'

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
     component: Overseaservice,
     children: [
       {
         path: '',
         redirect: '/overseaservice/index'
       },
       {
         path: 'index',
         component: overseaserviceIndex
       },
       {
         path: 'projectlist',
         component: overseaserviceIndexProjectlist
       },
       {
         path: 'countrylist',
         component: overseaserviceCountrylist
       }
     ]
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
     path: '/user/login',
     component: Login
   },
   {
     path: '/user/forget',
     component: Forget
   },
   {
     path: '/user/register',
     component: Register
   }
  ]
})
