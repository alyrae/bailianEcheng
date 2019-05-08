<template>
    <div id="top" :class="position">
        <hasapp v-if="!hasapp"></hasapp>
        <search></search>
        <ul>
            <router-link tag="li" :to="data.cata_id" v-for="data in cataList">{{data.cata_name}}</router-link>
        </ul>
    </div>
</template>
<script>
import midnav from '../../components/midnav'
import hasapp from './hasapp'
import {mapState} from 'vuex'
import search from '../../components/search'
export default {
    data(){
        return {
            position: 'absolute',
            cataList: [
                {
                    cata_name: '上新',
                    cata_id: '/sales/news'
                },
                {
                    cata_name: '海外馆',
                    cata_id: '/overseas'
                },
                {
                    cata_name: '闪购',
                    cata_id: '/promote/flashsales'
                },
                {
                    cata_name: '品牌',
                    cata_id: '/brand'
                },
                {
                    cata_name: '专柜自提',
                    cata_id: '/promote/special/1923'
                }
            ]
        }
    },
    mounted(){
        window.addEventListener('scroll',()=>{
            console.log(1)
        })
    },
    methods:{
        clickLogo(){
            this.$router.push('/home')
        }
    },
    components:{
        midnav,
        hasapp,
        search
    },
    computed:{
        ...mapState(['hasapp'])
    }
}
</script>
<style lang="scss" scoped>
    #top{
        // background-image:linear-gradient(rgba(0,0,0,.7) 0,rgba(255,255,255,0.7) .44rem);
        background:rgba(0,0,0,.5);
        position:absolute;
        top:0;
        width:100%;
    }
    .fixed{
        position:fixed
    }
    .absolute{
        position:absolute
    }
    ul{
            display:flex;
            width:100%;
            justify-content: space-around;
            background:white;
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
    
</style>




