<template>
  <div class="main">
    <div class="head">
      <div>显示秒杀</div>
    </div>
    <div class="link">
    <mt-swipe :auto="0" :show-indicators="false">
      <mt-swipe-item v-for="data in datalist">
          
          <dl >
              <dt>
        <img :src="data.thumb" alt>
              </dt>
              <dd>
                  <p class="title">{{data.sku_title}}</p>
                  <p class="price">秒杀价 {{data.seckill_price}}</p>
                  <p class="btn">立即抢购</p>
              </dd>
          </dl>
      </mt-swipe-item>
    </mt-swipe>
          </div>
  </div>
</template>
<script>
import axios from "axios";
import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

export default {
  data() {
    return {
      datalist: []
    };
  },
  mounted() {
    axios({
      url: "https://apim.restful.5lux.com.cn/shop/seckill_info"
    }).then(res => {
      console.log(res.data.data);
      this.datalist=res.data.data
    });
  }
};
</script>
<style scoped>
.link{
    width: 3.75rem;
    height: 1.09rem;
    overflow: hidden;
    border-top: 1px solid #eee;
}
.mint-swipe{
    width: 3.75rem
}
dl{
    margin: 0 .6rem;
}
dt{
    float: left;
}
dd{
    float: left;
    width: 1.33rem;
    
}
dd p{
    font-size: .12rem
}
.price{
    color: red;
}
dt img{
    width: .9rem;
    height: .9rem;
}
.head > div {
  text-align: center;
  font-size: 0.14rem;
  color: #333;
}
</style>
