<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="data in list" :key="data.ad_id">
                <img :src="data.ad_code">
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>
<script>
import axios from 'axios'
import Swiper from 'swiper'
export default {
    data(){
        return {
            list: []
        }
    },
    mounted(){
        axios({
            url: 'https://apim.restful.5lux.com.cn/overseas/slide'
        }).then((res) => {
            this.list = res.data.data            
        })
    },
    updated(){
        new Swiper ('.swiper-container', {
            direction: 'vertical',
            loop: true,
            pagination: {
                el: '.swiper-pagination'
            },
            autoplay: {
                delay: 1000,
                disableOnInteraction: true,
            }
        })
    }
}
</script>
<style scoped lang="scss">    
    .swiper-container{
        width:100%;
        height:2.8rem;
        overflow:hidden;
        img{
            width:3.75rem;
            height:2.8rem
        }
    }
</style>




