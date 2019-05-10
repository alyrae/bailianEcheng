<template>
    <div class="outer">
        <div class="wrapper">
            <ul class="content">
                <li v-for="item in list" :style="f1(item)" @click="f2(item)"></li>
            </ul>
        </div> 
    </div>
   
</template>
<script>
import axios from 'axios'
import BScroll from 'better-scroll'
export default {
    data(){
        return {
            list: [],
        }
    },
    methods:{
        f1(item){
            return `background:url(${item.ad_code}) 0 0/100% 100%`
        },
        f2(item){
            var path = item.ad_link.replace('http://m.5lux.com','')
            this.$router.push(path)
        }
    },
    mounted(){
        axios({
            url: 'https://apim.restful.5lux.com.cn/overseas/buttons_info'
        }).then((res)=>{
            this.list = res.data.data.button_list
        })
    },
    updated(){
        new BScroll('.wrapper',{
            scrollY: false,
            scrollX: true,
            click: true
        })
    }
}
</script>
<style lang="scss" scoped>
    .outer{
        padding:0 .1rem;
        background:white;
    }
    .wrapper{
        margin-bottom:.1rem;
        background:white;
        overflow:hidden;
        
    }
    ul{
        width:5rem;
        display:flex;
        justify-content: space-between;
        height:.85rem;
        overflow:hidden;
        li{
            height:.85rem;
            width:.84rem
        }
    }
</style>


