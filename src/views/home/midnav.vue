<template>
    <ul class="midnav">
        <router-link to="/home" tag="li" exactActiveClass="active">推荐</router-link>
        <router-link v-for="data in list" :to="`/home/list?name=${data.modTitle}`" tag="li" exactActiveClass="active">{{data.title}}</router-link>
    </ul>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return {
            list: [],
            classList: ['active','','','','','','']
        }
    },
    mounted(){
        axios({
            url: 'https://wwp123.github.io/shopping-yanxuan/dist/static/json/recommendGoods.json',
        }).then(res=>{
            this.list = res.data.recommend.modCon.otherGoods
        })
    },
    methods:{

    }

}
</script>
<style lang="scss" scoped>
    .midnav{
        display:flex;
        width:100%;
        justify-content: space-around;
        li{
            text-align:center;
            font-size: .12rem;
            color:#333;
            margin-top:.07rem;
            height:.24rem;
            line-height: .24rem;
            padding:0 .05rem
        }
        .active{
            color:#b4272d;
            border-bottom:.01rem solid #b4272d
        }
    }
</style>

