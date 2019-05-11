<template> 
<div class="storeNav"> 
    <ul> 
        <li v-for="data in list" @click="handleChangePage(data.id)" :key="data.id">
            <img :src="data.store_thumb"> 
             <h3> {{ data.title }} </h3> 
             <h5>推荐</h5> 
             <h4> <i class="iconfont icon-weizhi"></i> {{data.province_name}} </h4>
             <p>门店详情</p> 
        </li> 
    </ul> 
</div> 
</template> 
 <script> 
 import axios from 'axios' 
 import {mapState} from 'vuex'
 export default {
     computed:{
         ...mapState(['list'])
     },
    mounted(){ 
         console.log('ajax请求recommend') 
         axios({
             url:'https://apim.restful.5lux.com.cn/good/storelist?mtoken=&region_id=&brand_id=&longitude=&latitude=&is_nearby=&is_bespeak=&page=', 
        }).then(res=>{
            this.$store.commit("isStoreChildTwo",res.data.data.store_list)
            console.log(this.list)
        })
    },
    methods:{
         handleChangePage (id) {
             this.$router.push(`${id}`) 
        }
    },
    updated(){
        console.log(111)
    }
}
 </script> 
 <style lang="scss" scoped> 
div{
    display:block!important;
    position: absolute;
    top: .79rem;    
}
ul{
    border:0.01rem #ccc solid;
    border-top: none;
    li{
        overflow: hidden;
        padding: 0.1rem;
    img {
        width: 3.53rem;
        }
    }
}
h5{
     color: white;
     font-size: .02rem;
     background: #9b885e;
     width: 0.32rem;
     height: 0.16rem;
     text-align: center;
     padding: .01rem;
}
h4{
     color: #9b885e;
     width: 0.7rem;
     height: 0.11rem;
}
p{
     margin-top: -0.05rem;
     margin-left: 2.23rem;
     line-height: 0.1rem;
}
 </style> 