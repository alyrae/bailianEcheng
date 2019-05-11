<template>
  <div v-if="datalist.fashion_video!==undefined">
    <div class="tv">
      <p class="aaa">{{datalist.fashion_video.title}}</p>
      <p class="aaa">---{{datalist.fashion_video.title_en}}---</p>
      <ul class="list">
        <li v-for="data in datalist.fashion_video.list">
          <img :src="data.ad_code" alt>
          <p>{{data.ad_name}}</p>
        </li>
      </ul>
    </div>
    <div class="style">
      <p class="aaa">{{datalist.star_outfits.title}}</p>
      <p class="aaa">---{{datalist.star_outfits.title_en}}---</p>
      <img :src="datalist.star_outfits.list.ad_code" alt="" >
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
.style img{
    width: 100%
}
p{
  text-align: center;
}
.list li {
  float: left;
  width: 46%;
  margin: 2%;
}
.list img {
  width: 100%;
}
.list li:nth-last-of-type(1) {
  width: 100%;
  margin: 0;
}
</style>
