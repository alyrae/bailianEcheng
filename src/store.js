import Vue from 'vue'
import Vuex from 'vuex'

import {SHOW_TABBAR_MUTATION, LOGIN_MUTATION, LOGIN_SHOW_MUTATION, LOGIN_METHOD, HASAPP_MUTATION, SHOW_BOTTOMBAR_MUTATION} from './type'

import axios from 'axios'

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
    storeallCb2:false,
    isbottombarshow: false,
    overseas_index: {},
    datalist1:[],
    rem:100,
    homeinfo:{
      fixed: false,
      isnavshow: false,
      per: 0
    },
    datalist1:[],
    ishome: true,
    datalist: {},
    datalista:{},
    datali:{}
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
    },
    [SHOW_BOTTOMBAR_MUTATION](state,payload){
      state.isbottombarshow = payload
    },
    overseas_index_mutation(state,payload){
      state.overseas_index = payload
    },
    postaaa(start,payload){
      start.datalist1=payload
    },
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

  },
})

