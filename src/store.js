import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
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
    datalist1:[]
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
    postaaa(start,payload){
      start.datalist1=payload
    }
  },
  actions: {
    getaaa(store){
      axios({
        url:
          "https://apim.restful.5lux.com.cn/index/other_advert",
       
      }).then(res => {
        store.commit('postaaa',res.data.data)
      });
    }
  }
})
