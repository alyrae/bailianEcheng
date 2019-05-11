<template>
    <div class="type1">
        <div class="title">
            <p>海外专家</p>
            <p>查看更多></p>
        </div>
        <div class="aaawrapper">
            <ul class="content">
                <li v-for="data in overseas_index.oversea_expert">
                    <img :src="data.expert_home_img" alt="">
                    <p>{{data.expert_summary}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import {mapState} from 'vuex'
import BScroll from 'better-scroll'
export default {
    mounted(){   
    },
    updated(){
        new BScroll('.aaawrapper',{
            scrollY: false,
            scrollX: true
        })
    },
    computed:{
        ...mapState(['overseas_index'])
    }
}
</script>
<style scoped lang="scss">
    .title{
        width:100%;
        display:flex;
        justify-content:space-between;
        widows: 100%;
        height:.18rem;
        padding:25px 0 .1rem 0;
        margin-bottom:.15rem;
        p:first-of-type{
            font-size:.18rem
        }
        p:last-of-type{
            font-size:.14rem;
            color:#999
        }
    }
    .type1{
        background:white;
        padding-bottom:.15rem;
    }
    .aaawrapper{
        width:100%;
        height:1.94rem;
        overflow:hidden;
        border:.03rem solid #f2f2f2;
    }
    .content{
        border-radius:.05rem;
        display:flex;
        width:13.5rem;
        justify-content:space-between;
        background:#f2f2f2;
        margin-bottom:.15rem;

        li{
            border-radius:.1rem
        }
        img{
            width:2.56rem;
            height:1.44rem;
        }
        p{
            width:2.24rem;
            height:.33rem;
            padding:.08rem .16rem;
            font-size:.12rem;
            color:#333;
            display:-webkit-box;
            -webkit-box-orient:vertical;
            -webkit-line-clamp: 2 ;
            overflow: hidden;
            background:white
        }
    }
</style>


