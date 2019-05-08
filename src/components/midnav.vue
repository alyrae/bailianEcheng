<template>
    <div class="midnav wrapper">
        <ul class="content">
            <router-link tag="li" :to="`/mall?id=${data.cata_id}`" v-for="data in cataList" exactActiveClass='active'>{{data.cata_name}}</router-link>  
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
            
        }
    }

}
</script>
<style lang="scss" scoped>
    .midnav{       
        background:white;
        ul{
            display:flex;
            width:220%;
            justify-content: space-around;
        }
        li{
            text-align:center;
            font-size: .16rem;
            color:#7e8c8d;
            height:.4rem;
            line-height: .4rem;
            padding:0 .05rem;
        }
        .active{
            color:#b4272d;
            border-bottom:.01rem solid #b4272d
        }
    }
</style>

