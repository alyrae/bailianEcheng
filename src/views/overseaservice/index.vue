<template>
    <div class="index">
        <div class="hd"><i class="iconfont icon-yes"></i>海外生活服务</div>
        <silder></silder>
        <midnav></midnav>
        <content1></content1>
    </div>
</template>
<script>
import silder from './index/silder'
import midnav from './index/midnav'
import content1 from './index/content1'
import {mapState} from 'vuex'
export default {
    components:{
        silder,
        midnav,
        content1
    },
    computed:{
        ...mapState(['isbottombarshow'])
    },
    mounted(){
        this.$store.commit('isbottombarshowmutation',true)
    },
    destroyed(){
        this.$store.commit('isbottombarshowmutation',false)
    }
}
</script>
<style lang="scss" scoped>
    .index{
        background:#f2f2f2;
        overflow-x:hidden;
        .hd{
            width:100%;
            position:fixed;
            z-index:10;
            top:0;
            height:.44rem;
            text-align:center;
            line-height:.44rem;
            border-bottom:.01rem solid #ccc;
            background:white;
            opacity: .5;
            i{
                font-size:.16rem;
                display: block;
                position:absolute;
                left:.1rem
            }
        }
    }
</style>

