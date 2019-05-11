import Vue from 'vue'
import Vuex from 'vuex'
import {SHOW_TABBAR_MUTATION, LOGIN_MUTATION, LOGIN_SHOW_MUTATION, LOGIN_METHOD, HASAPP_MUTATION} from './type'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  
    istabbarshow: false, 
    isloged: false,
    cartList: [],
    isloginshow: false,
    loginmethod: '',
    hasapp: false,
    list:{},
    storeallCb1:{},
    storeallCb2:{},
    storeallCb1:false,
    storeallCb2:false
    
  },  
  mutations: {
   
    isStoreChildTwo(state,payload){
      state.list = payload
    },
   
    isstoreallCb1(state,payload){
      state.storeallCb1 = payload
    },
    isstoreallCb2(state,payload){
      state.storeallCb2 = payload
    }, 
    
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
    }
  },
  actions: {

  }
})

