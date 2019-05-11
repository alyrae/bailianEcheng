<template>
  <div>
    <div v-if="!ishome && datalist.data!==undefined" class="syntop">
      <img :src="datalist.data.ads_list[0].ad_code" alt class="head">
      <div class="both">
        <div @click="issyn=!issyn">综合</div>
        <div @click="isbrand=true " >品牌</div>
        <div @click="isify=true">分类</div>
        <div>筛选</div>
      </div>
      <ul class="aaa">
        <li v-for="data in datalista.data.goods_list">
          <img :src="data.big_thumb" alt>
          <div class="name">
            <p>{{data.brand_en_name}}</p>
            <p>{{data.brand_cnname}}</p>
            <p>
              ￥{{data.product_price}}
              <span>{{data.market_price}}</span>
            </p>
          </div>
        </li>
      </ul>
      <div class="synshow" v-if="issyn">
        <div class="both bothsyn">
          <div @click="issyn=!issyn">综合</div>
          <div>品牌</div>
          <div>分类</div>
          <div>筛选</div>
        </div>
        <ul class="syn">
          <li>综合</li>
          <li>销量优先</li>
          <li>价格从低到高</li>
          <li>价格从高到低</li>
          <li>新品优先</li>
          <li>人气优先</li>
        </ul>
      </div>
      <div v-if="isbrand" class="brand">
        <div class="brand_h">
          <p @click='isbrands=!isbrands'>热门品牌</p>
          <p @click='isbrands=!isbrands'>所有品牌</p>
        </div>
        <div class="brand_l" v-if=!isbrands>
          <p v-for="data in datali.brands_info.recomment_brand">{{data.brand_name}}</p>
        </div>
        <div class="brand_r" v-if=isbrands>
          <ul>
            <li v-for='dat in datali.brands_info.all_brand'>
              <div>{{dat.first_name}}</div>
              <p v-for='da in dat.child'>{{da.brand_name}}</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="synshow" v-if="isbrand" @click="isbrand=false"></div>
      <div class="ify" v-if="isify" @click='isify=false'>
        <ul>
          <!-- <li v-for="ify in datali.all_cate">
            <ul>
              <li>aaa</li>
            </ul>
          </li> -->
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import miaosha from "./miaosha";
import swider from "./swider";
import check from "./check";
import buall from "./buall";
import mallid from "./mallid";
import { mapState } from "vuex";
export default {
 
  components: {
    miaosha,
    swider,
    check,
    buall,
    mallid
  },
  computed: {
    ...mapState(["ishome", "datalist", "datalista","datali"])

  },
  data() {
    return {
      issyn: false,
      isbrand: false,
      isbrands:false,
      isify:false
    };
  },
  // mounted() {
  //   axios({
  //     url: `https://apim.restful.5lux.com.cn/good/shop_cata_filter?id=4&total=16299`
  //   }).then(res => {
  //     this.datali=res.data.data
  //     console.log(this.datali)
  //   });
  // },
  methods: {
  },
  updated() {}
};
</script>
<style scoped>
.bbb{
    position: absolute;
  width: 3.37rem;
  height: 100%;
  background: #fff;
  top: 0;
  right: -3.37rem;
  z-index: 99;

}
.brand_r li{
  background: #ccc
}
.brand_r li p{
  background: #fff
}
.brand_1 p{
  line-height: .16rem;
  height: .16rem;
  border-top: 1rem solid #ccc;
  border-bottom: 1rem solid #ccc;
}
.brand_h {
  width: 100%;
  display: flex;
}
.brand_h p {
  flex: 1;
  text-align: center;
}
.brand {
  position: absolute;
  width: 3.37rem;
  height: 100%;
  background: #fff;
  top: 0;
  right: 0;
  z-index: 99;


}
.ify{
   position: absolute;
  width: 3.37rem;
  height: 100%;
  background: #fff;
  top: 0;
  right: 0;
  z-index: 99;

}
.syn li {
  line-height: 0.36rem;
}
.syntop {
  position: relative;
}
.synshow {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
}
.synshow .syn {
  width: 3.45rem;
  text-align: left;
  position: absolute;
  top: 2.66rem;
  left: 0;
  padding-left: 0.3rem;
  background: #fff;
  opacity: 1;
}
.both {
  width: 100%;
  height: 0.3rem;
  display: flex;
}
.bothsyn {
  position: absolute;
  top: 2.28rem;
  left: 0;
  background: #fff;
}
.both > div {
  flex: 1;
  text-align: center;
  line-height: 0.3rem;
}
.name p:nth-of-type(1) {
  font-size: 13px;
  height: 13px;
  color: #333;
  padding-bottom: 6px;
}
.name p:nth-of-type(2) {
  font-size: 12px;
  height: 12px;
  color: #999;
  margin-bottom: 8px;
}
.name p:nth-last-of-type(1) {
  font-size: 12px;
  color: #9b885f;
}
.name p:nth-last-of-type(1) span {
  font-size: 12px;
  color: #999;
  text-decoration: line-through;
}

.head {
  width: 100%;
}
.aaa {
  overflow: hidden;
}
.aaa li {
  overflow: hidden;
  background: #fff;
  display: inline-block;
  width: calc(50% - 0.04rem);
  margin: 0 0.01rem 0.01rem;
  border: 0.01rem solid #ccc;
  float: left;
  height: 3.5rem;
}
img {
  width: 100%;
}
.name {
  margin: 0.2rem 0.15rem 0.3rem;
  text-align: center;
  font-weight: 400;
}
</style>
