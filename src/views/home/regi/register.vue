<template>
  <div  v-if='datalist1.length!==0'>
    <div class="new">
      <img :src="datalist1.new_register[0].ad_code" alt>
    </div>
    <div class="new">
      <img :src="datalist1.vip_member[0].ad_code" alt>
      <ul>
        <li>
          <img :src="datalist1.vip_member[1].ad_code" alt>
        </li>
        <li>
          <img :src="datalist1.vip_member[2].ad_code" alt>
        </li>
        <li>
          <img :src="datalist1.vip_member[3].ad_code" alt>
        </li>
        <li>
          <img :src="datalist1.vip_member[4].ad_code" alt>
        </li>
      </ul>
    </div>
    <div class="new">
      <img :src="datalist1.five_example.ads_info.ad_code" alt>
    </div>
    <div class="new">
      <img :src="datalist1.buy_list[0].ad_code" alt>
    </div>
    <div class="newhook">
      <ul>
        
        <li v-for='data1 in datalist1.article_list'>
          <img :src="data1.ads_info.ad_code" alt="">
          <h4>{{data1.ads_info.ad_name}}</h4>
          <p>{{data1.ads_info.ad_title}}</p>
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
      datalist1: []
      
    };
  },
  props: {
    aaa: String
  },
  mounted() {
    axios({
      url: `https://apim.restful.5lux.com.cn/index/other_advert`,
      headers: {
        // 'Access-Control-Request-Headers': 'x-client-info,x-host'
      }
    }).then(res => {
      this.datalist1 = res.data.data;
      console.log(this.datalist1.article_list);
    });
  }
};
</script>
<style scoped>
.new {
  margin-bottom: 0.05rem;
}
.new > img {
  width: 100%;
}
.new > ul {
  width: 100%;
  height: 1.05rem;
  padding: 0.1rem 0.035rem;
}
.new > ul > li {
  padding: 0 0.035rem;
  float: left;
  width: calc(25% - 0.07rem);
}
.new > ul > li > img {
  width: 100%;
  vertical-align: top;
}
img{
  display: block
}
.newhook img{
  width: 100%
}
</style>
