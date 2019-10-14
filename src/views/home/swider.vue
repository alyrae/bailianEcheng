<template>
    <div class="aaa">
       <mt-swipe :auto="4000" >
  <mt-swipe-item v-for='data in datalist'><img :src="data.silde_original" alt=""></mt-swipe-item>
</mt-swipe>
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
            datalist:[]
        }
    },
       
 mounted() {
    
    axios({
      url: "https://apim.restful.5lux.com.cn/index/index_slider",
    }).then(res => {
      this.datalist=res.data.data
      console.log(this.datalist)
    });
  
  }
}

</script>
<style scoped>
.aaa{
            margin-top: .44rem

}
img{
    width: 100%
}
.mint-swipe{
    width: 100%;
    height: 4.12rem;
}
</style>
