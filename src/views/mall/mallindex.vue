<template>
  <div>
    <div v-if="ishome">
      <swider></swider>
      <ul>
        <li v-for="data in datalist">
          <img :src="data.ad_code" alt>
          <p>{{data.ad_name}}</p>
        </li>
      </ul>
      <miaosha></miaosha>
      <check></check>
      <buall></buall>
    </div>
    
    <mallid></mallid>
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
    ...mapState(["ishome", "datalist"])
  },
  data() {
    return {};
  },
  mounted() {
    // console.log(this.$route.query.id)
    // axios({
    //     url:`https://apim.restful.5lux.com.cn/shop/buttons_info`,
    // 		// headers:{
    // 		// 	'Access-Control-Request-Headers': 'x-client-info,x-host'

    // 		// }
    // 	}).then(res=>{
    //         console.log(res.data.data.list);
    //         this.datalist=res.data.data.button_list

    // })
    console.log(this.datalist);
  },
  updated() {
    // console.log(this.$store.state.ishome)
  }
};
</script>
<style scoped>
ul {
  display: flex;
  padding: 0.1rem 0;
  border-bottom: 1px solid #eee;
}
li {
  flex: 1;
  text-align: center;
  height: 100%;
  font-size: 12px;
}
img {
  width: 30%;
  margin-left: 0.25rem;
}
</style>
