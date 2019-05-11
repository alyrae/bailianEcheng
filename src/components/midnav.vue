<template>
  <div class="midnav wrapper">
    <ul class="content">
      <router-link
        tag="li"
        :to="`/mall?id=${data.cata_id}`"
        v-for="data in cataList"
        exactActiveClass="active"
        @click.native="f2(data.cata_id)"
      >{{data.cata_name}}</router-link>
    </ul>
  </div>
</template>
<script>
import axios from 'axios'
import BScroll from 'better-scroll'
export default {
    data(){
        return {
            cataList: []
        }
    },
    mounted(){
        axios({
            url: 'https://apim.restful.5lux.com.cn/shop/catalist'
        }).then(res=>{
            this.cataList = res.data.data
        })
    },
        
        // if(this.$route.params.id==undefined){
        //     this.$router.push('/mall?id=0')
        // }
        
    updated(){
        let scroll = new BScroll('.wrapper',{
            scrollX: true,
            scrollY: false,
            click:true
        })
    },
    methods:{
        f1(index){
            if(this.$route.path=='/'){
                this.$router.push(index)
            }else if(this.$route.path=='/mall'){
                this.$router.push(`/mall?id=${index}`)
            }
            
        },
        f2(index){
            console.log('当前id-----',index)
            if(index==0){
                console.log('首页')
                this.$store.state.ishome = true
                 axios({
            url:`https://apim.restful.5lux.com.cn/shop/buttons_info`,
				// headers:{
				// 	'Access-Control-Request-Headers': 'x-client-info,x-host'

				// }
			}).then(res=>{
                console.log(res.data.data.list);
                this.datalist=res.data.data.button_list})
            }else{
                console.log('非首页')
                this.$store.state.ishome = false
                // axios({
                //     url: `https://apim.restful.5lux.com.cn/shop/cata_recommend?cata_id=${index}`
                // }).then(res=>{
                //     this.$store.state.datalist = res.data
                // })
                axios.all([axios.get(`https://apim.restful.5lux.com.cn/good/cata_goods_list?id=${index}&sort=&page=1&order=&is_self=&price=&location_id=&cata_id=&attr=`),axios.get(`https://apim.restful.5lux.com.cn/shop/cata_recommend?cata_id=${index}`),axios.get(`https://apim.restful.5lux.com.cn/good/shop_cata_filter?id=${index}&total=16299`)]).then(axios.spread((a,b,c)=>{
                    this.$store.state.datalist = b.data
                   this.$store.state.datalista = a.data
                   this.$store.state.datali=c.data.data
                    console.log(this.$store.state.datalist)
                 
                    console.log(this.$store.state.datalista)
                }))
                // axios.all({
                //     url: `https://apim.restful.5lux.com.cn/good/shop_cata_filter?id=${index}&total=16305`
                // }).then(res=>{
                //     this.$store.state.datalista = res.data
                //     console.log(this.$store.state.datalista)
                // })
            }
            
            
        }
    }

}
</script>
<style lang="scss" scoped>
.midnav {
  background: white;
  overflow: hidden;
  ul {
    display: flex;
    width: 220%;
    justify-content: space-around;
  }
  li {
    text-align: center;
    font-size: 0.16rem;
    color: #7e8c8d;
    height: 0.4rem;
    line-height: 0.4rem;
    padding: 0 0.05rem;
  }
  .active {
    color: #b4272d;
    border-bottom: 0.01rem solid #b4272d;
  }
}
</style>

