<template>
    <div class="aaa">
       <mt-swipe :auto="0" >
    <mt-swipe-item v-for='data in datalist'>
        <div class="check_4">
      <img :src="data.img_url" alt="">
      <p>{{data.title}}</p>
      
      </div>
    
      </mt-swipe-item>
</mt-swipe>
   <mt-swipe :auto="0"  class='ccc' :show-indicators="false">
    <mt-swipe-item v-for='data0 in datalist0'>
        <div class="check_0">
      <img :src="data0.store_thumb" alt="">
      <p>{{data0.store_title}}</p>
      
      </div>
      </mt-swipe-item>
</mt-swipe>   <mt-swipe :auto="0"  class='ccc vvv' :show-indicators="false">
    <mt-swipe-item v-for='data1 in datalist1'>
        <div class="check_0">
      <img :src="data1.store_thumb" alt="">
      <p>{{data1.store_title}}</p>
      
      </div>
      </mt-swipe-item>
</mt-swipe>
   <mt-swipe :auto="0"  class='ccc' :show-indicators="false">
    <mt-swipe-item v-for='data2 in datalist2'>
        <div class="check_0">
      <img :src="data2.store_thumb" alt="">
      <p>{{data2.store_title}}</p>
      
      </div>
      </mt-swipe-item>
</mt-swipe>
    <div class="chakan">
        <p>查看所有旗舰店</p>
    </div>
    </div>
</template>
<script>
import axios from 'axios'
import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
export default {
    data() {
        return {
            datalist:[],
            datalist0:[],
            datalist1:[],
            datalist2:[]
        }
    },
       
 mounted() {
    
    axios({
      url: "https://apim.restful.5lux.com.cn/shop/get_flagship_recommend",
   
    }).then(res => {
      this.datalist=res.data.data
      this.datalist0=res.data.data[0].store_infos
      this.datalist1=res.data.data[1].store_infos
      this.datalist2=res.data.data[2].store_infos
      console.log(this.datalist0)
    });
  
  }
}

</script>
<style scoped>
.chakan{
    text-align: center;
    width: 3.75rem;
}
.chakan p{
    /* margin: .2rem 0; */
    color: #000;
    font-weight: bold
}
.ckeck_0{
    position: relative;
}
.check_0 p{
     position: absolute;
    bottom: .4rem;
    left: 0;
    text-align: center;
    width: 1.21rem;
    color: #Fff;
    font-size: .12rem
}
.check_0>img{
    width: 1.21rem
}
div.ccc{
    width: 1.21rem;
    height: 1.21rem;
    float: left;
}
div.vvv{
    margin: 0 .06rem
}
.check_4{
    position: relative;
}
.check_4 p{
    position: absolute;
    bottom: .4rem;
    left: 0;
    text-align: center;
    width: 3.75rem;
    color: #Fff;
    font-size: .20rem
}
 .check_4>img{
    width: 100%;
}
.mint-swipe{
    width: 100%;
    height: 2.09rem;
}
.mint-swipe-indicator{
    background: #Fff
}
</style>
