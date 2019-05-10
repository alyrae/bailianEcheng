<template>
    <div class="content1">
        <type1></type1>
        <div class="blank"></div>
        <type2></type2>
        <div class="blank"></div>
        <div class="toutiao">
            <div class="logo"></div>
            <div class="swiper-container1" v-if="overseas_index.advice_article">
                <div class="swiper-wrapper">
                    <div v-for="data in overseas_index.advice_article" class="swiper-slide text">{{data.title}}</div>
                </div>
            </div>
        </div>
        <div class="blank"></div>
        <div class="nav">
            <p :class="active?'active':''" @click="f1()">海外移民</p>
            <p :class="!active?'active':''" @click="f1()">全球房产</p>
        </div>
        <div class="bar"></div>
        <type3></type3>
        <list></list>
        <p class="more" @click="f4()">查看更多资讯·案例 ></p>
    </div>
</template>
<script>
import type1 from './type1'
import type2 from './type2'
import type3 from './type3'

import list from './list'
import axios from 'axios'
import {mapState} from 'vuex'
import Swiper from 'swiper'

export default {
    data(){
        return {
            active: true
        }
    },
    methods:{
        f1(){
            this.active = !this.active
        },
        f2(index){
            this.$nextTick(()=>{
                return this.oversea_index.overseas_cata==undefined?undefined:this.oversea_index.overseas_cata[index]
            })
        },
        f4(){
            this.$router.push('/overseaservice/articlelist')
        }
    },
    components:{
        type1,
        type2,
        type3,
        list
    },
    computed:{
        ...mapState(['overseas_index'])
    },
    mounted(){
        axios({
            url: 'https://apim.restful.5lux.com.cn/overseas/overseas_index'
        }).then(res=>{
            this.$store.commit('overseas_index_mutation',res.data.data)
        })
    },
    updated(){
        new Swiper ('.swiper-container1', {
            direction: 'vertical',
            loop: true,
            autoplay: {
                delay: 1000,
                disableOnInteraction: true,
            }
        })

    }

}
</script>
<style lang="scss">
    .content1{
        padding:0 .2rem;
        background:white
    }
    .nav{
        height:.35rem;
        width:100%;
        p{
            font-size:.16rem;
            color:#999;
            line-height:.35rem;
            height:.35rem;
            display:inline-block;
            margin-right:.35rem;
        }
        p.active{
            color:#33a0ff;
            border-bottom:.02rem solid #33a0ff
        }
    }
    .blank{
        height:.1rem;
        width:3.75rem;
        position:relative;
        background:#f2f2f2;
        left:-.2rem

    }
    .bar{
        height:0;
        width:150%;
        position:relative;
        left:-.3rem;
        top:.02rem;
        border-bottom:.02rem solid #ccc
    }
    .toutiao{
        display:flex;
        padding:.1rem 0;
        .logo{
            width:.22rem;
            height:.3rem;
            background:url(../../../assets/zixuntoutiao.png) 0 0/.22rem .3rem
        }
        .swiper-container1{
            flex:1;
            font-size:.12rem;
            color:#333;
            width:2.93rem;
            height:.3rem;
            overflow:hidden;
            
            .swiper-wrapper{
                width:100%;
                .text{
                    width:100%;
                    height:.3rem;
                    line-height:.3rem;
                    display:-webkit-box;
                    -webkit-box-orient:vertical;
                    -webkit-line-clamp: 1 ;
                    overflow: hidden;
                    padding: 0 .08rem
                }
            }
            
        }
    }
    .more{
        width:100%;
        height:.44rem;
        text-align:center;
        line-height:.44rem;
        color:#33a0ff;
        font-size:.14rem
    }
</style>


