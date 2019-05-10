import Vue from 'vue'
import Vuex from 'vuex'
import {SHOW_TABBAR_MUTATION, LOGIN_MUTATION, LOGIN_SHOW_MUTATION, LOGIN_METHOD, HASAPP_MUTATION, SHOW_BOTTOMBAR_MUTATION} from './type'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    istabbarshow: false,
    isloged: false,
    cartList: [],
    isloginshow: false,
    loginmethod: '',
    hasapp: false,
    isbottombarshow: false,
    overseas_index: {}
  },
  mutations: {
    [SHOW_TABBAR_MUTATION](state,payload){
      state.istabbarshow = payload
    },
    [LOGIN_MUTATION](state,payload){
      state.isloged = payload
    },
    [LOGIN_SHOW_MUTATION](state,payload){
      state.isloginshow = payload
    },
    [LOGIN_METHOD](state,payload){
      state.loginmethod = payload
    },
    [HASAPP_MUTATION](state,payload){
      state.hasapp = payload
    },
    [SHOW_BOTTOMBAR_MUTATION](state,payload){
      state.isbottombarshow = payload
    },
    overseas_index_mutation(state,payload){
      state.overseas_index = payload
    }
  },
  actions: {
   
  }
})
