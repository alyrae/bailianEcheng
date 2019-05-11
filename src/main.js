import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.config.productionTip = false

Vue.use(Mint, {
  lazyload: {
    preLoad: 1.3,
    //表示出错时显示的图片
    error: '',
    //表示未加载之前显示的图片
    loading: require('./assets/timg.gif'),
    attempt: 1
  },
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
