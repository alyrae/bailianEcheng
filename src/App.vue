<template>
  <div id="app">
    <router-view></router-view>
    <tabbar v-if="istabbarshow"></tabbar>
  </div>
</template>
<script>
  import tabbar from './components/tabbar.vue'
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState(['istabbarshow','rem'])
    },
    components:{
      tabbar
    },
    mounted(){
      this.$store.state.rem = document.documentElement.clientWidth/3.75/100
    }
  }
</script>
<style>
  html,body{
    height:100%
  }
  body{
    font-size:16px;
  }
  #app{
    display:flex;
    flex-direction: column;
    height:100%;
  }
  #app > div {
    position:absolute;
    top:0;
    bottom:.5rem;
  }
</style>
<style src='../public/iconfont/iconfont.css'>

</style>

<style>
  *{
    margin:0;
    padding:0;
  }
  img{
    display: block;
  }
  a{
    text-decoration: none;
  }
  li{
    list-style: none;
  }
  h1,h2,h3,h4,h5,h6{
    font-size: 0.16rem;
    font-weight: normal
  }
  .clear:after{
    content:"";
    clear:both;
    display:block
  }
  .l{
    float:left
  }
  .r{
    float:right
  }
</style>



