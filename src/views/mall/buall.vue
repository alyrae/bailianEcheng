<template>
  <div v-if="datalist.fashion_video!==undefined" class="both">
    <div class="tv">
      <p class="aaa">{{datalist.fashion_video.title}}</p>
      <p class="aaa">---{{datalist.fashion_video.title_en}}---</p>
      <ul class="list">
        <li v-for="data in datalist.fashion_video.list">
          <img :src="data.ad_code" alt>
          <p class="bbb">{{data.ad_name}}</p>
        </li>
      </ul>
    </div>
    <div class="style">
      <p class="aaa">{{datalist.star_outfits.title}}</p>
      <p class="aaa">---{{datalist.star_outfits.title_en}}---</p>
      <ul>
        <li>
          <img :src="datalist.star_outfits.list.ad_code" alt>
          <p>{{datalist.star_outfits.list.ad_name}}</p>
        </li>
      </ul>
    </div>
    <div class="over">
      <p class="aaa">{{datalist.oversea_recommend.title}}</p>
      <p class="aaa">---{{datalist.oversea_recommend.title_en}}---</p>
      <ul>
        <li v-for="data in datalist.oversea_recommend.list">
          <img :src="data.ad_code" alt>
          <p>{{data.ad_name}}</p>
        </li>
      </ul>
    </div>
    <div class="over">
      <p class="aaa">{{datalist.vip_special.title}}</p>
      <p class="aaa">---{{datalist.vip_special.title_en}}---</p>
      <ul>
        <li v-for="data in datalist.vip_special.list">
          <img :src="data.ad_code" alt>
          <p>{{data.ad_name}}</p>
        </li>
      </ul>
    </div>
    <div class="new">
      <p class="aaa">{{datalist.new_recommend.title}}</p>
      <p class="aaa">---{{datalist.new_recommend.title_en}}---</p>
      <ul>
        <li v-for="data in datalist.new_recommend.list">
          <img :src="data.ad_code" alt>
          <p>{{data.ad_name}}</p>
        </li>
      </ul>
    </div>
    <div class="stores">
      <p class="aaa">{{datalist.top5flag.title}}</p>
      <p class="aaa">---{{datalist.top5flag.title_en}}---</p>
      <ul>
        <li v-for="data in datalist.top5flag.list">
          <img :src="data.ad_code" alt>
          <p>{{data.ad_name}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      datalist: {}
    };
  },
  mounted() {
    axios({
      url: `https://apim.restful.5lux.com.cn/shop/home_all_info`
      // headers:{
      // 	'Access-Control-Request-Headers': 'x-client-info,x-host'

      // }
    }).then(res => {
      console.log(res.data.data);
      this.datalist = res.data.data;
    });
  }
};
</script>
<style scoped>
.both{
        margin-bottom: .5rem

}
.stores li{
    width: 100%;
}
.new li:nth-last-of-type(1){
    width: 46%;
     margin: 2%;
}
.new li{
         height: 1.8rem;

}
ul{
    overflow: hidden;
}
li {
  position: relative;
  text-align: center;
   float: left;
  width: 46%;
  margin: 2%;
  
}
li > p {
  position: absolute;
  bottom: 0.1rem;
  width: 100%;
  color: #fff;
}
img{
    width: 100%
}
p {
  text-align: center;
}
li:nth-last-of-type(1) {
  width: 100%;
  margin: 0;
}
</style>
