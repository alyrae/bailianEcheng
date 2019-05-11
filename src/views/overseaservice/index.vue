<template>
    <div class="index" ref="index">
        <div class="hd" :style="`opacity:${per}`"><i class="iconfont icon-yes"></i>海外生活服务</div>
        <silder></silder>
        <midnav></midnav>
        <content1 :father="$refs.index"></content1>
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
    data(){
        return {
            per: 0
        }
    },
    computed:{
        ...mapState(['isbottombarshow','rem'])
    },
    mounted(){
        this.$store.commit('isbottombarshowmutation',true)
        this.$refs.index.onscroll=()=>{            
            if(this.$refs.index.scrollTop<=280*this.rem){
                this.per = Math.ceil(100*this.$refs.index.scrollTop/(280*this.rem))/100
            }else{
                this.per = 1
            }
        } 
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
            i{
                font-size:.16rem;
                display: block;
                position:absolute;
                left:.1rem
            }
        }
    }
</style>

