import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home'
import Classify from './views/classify'
import Cart from './views/cart'
import My from './views/my'
import MainGoods from './views/home/maingoods'
import Search from './views/search'
import SearchResult from './views/searchResult'
import GoodsDetail from './views/goodsDetail'
import Login from './views/login'
import Register from './views/register'
Vue.use(Router)


export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: 'list',
          component: MainGoods
        },
        {
          path: '',
          component: MainGoods
        }
      ]
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/searchResult',
      component: SearchResult
    },
    {
      path: '/goodsDetail',
      component: GoodsDetail
    },
    {
      path: '/classify',
      component: Classify
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/my',
      component: My
    }
  ]
})
