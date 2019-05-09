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
          <div class="newhook_book">
          <h4>{{data1.ads_info.ad_name}}</h4>
          <p>{{data1.ads_info.ad_title}}</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="newfoo">
      <ul>
        <li v-for="da in datalist1.flash_sales">
          <div class="flag">
          <img :src="da.sales_thumb" alt="">
          </div>
          <div class="pper">
            <div class="pperleft">
              <p>{{da.sales_title}} <span>{{da.discount_info}}</span> </p>
              <p>{{da.sales_desc}}</p>
            </div>
            <div class="pperright">
              <img :src="da.sales_logo" alt="">
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Vue from 'vue';
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
.pperright img{
      width:.6rem;
    height: .3rem;
}
.pperright{
  float:right;
  margin-left: 1rem
}
.pperleft p:nth-of-type(2){
  text-align: left;
    font-family: \\9ED1\4F53;
    font-size: 13px;
    color: #999;
}
.pperleft p:nth-of-type(1){
      margin-right: 1px;
      font-size: 14px;
}
.pperleft p:nth-of-type(1) span{
      color: #f33
}
.pperleft{
    float: left;
}
.pper{
      padding: 13px 10px;
    display: -ms-flexbox;
    display: flex;
}
.flag{
    height: 0;
    padding-bottom: 60.8%;
}
.flag img{
  width: 100%
}
.newfoo ul li{
  margin-bottom: .1rem
}
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
.newhook_book{
      text-align: left;
    padding: 18px 20px 20px;
}
.newhook_book h4{
  font-family: \\9ED1\4F53;
    font-weight: 700;
    display: block;
    font-size: 14px;
    color: #333;
    height: 18px;
    line-height: 18px;
    padding-bottom: 18px;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.newhook_book p{
  font-family: \\9ED1\4F53;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    font-size: 12px;
    color: #999;
    height: 34px;
    line-height: 18px;
}
</style>
