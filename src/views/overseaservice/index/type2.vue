<template>
    <div class="type2">
        <div class="title">
            <p>热门国家</p>
            <p>查看更多></p>
        </div>
        <div class="bbbwrapper">
            <ul class="content">
                <li v-for="data in overseas_index.hot_country">
                    <img :src="data.banner_m" alt="" class="b">
                    <div>
                        <img :src="data.national_flag" class="s">
                        <p>{{data.name}}</p>
                    </div>
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
        new BScroll('.bbbwrapper',{
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
    .type2{
        background:white;
        padding-bottom:.15rem;
        padding-bottom:.15rem
    }
    .bbbwrapper{
        width:100%;
        height:1.42rem;
        overflow:hidden;
        border:.03rem solid #f2f2f2;
    }
    .content{
        border-radius:.05rem;
        display:flex;
        width:15.3rem;
        justify-content:space-between;
        background:#f2f2f2;
        margin-bottom:.15rem;
        li{
            border-radius:.1rem;
            width:1.3rem;
            div{
                width:1.3rem;
                height:.44rem;
                display:flex;
                background:white;
                img.s{
                    width:.3rem ;
                    height:.24rem;
                    padding:.05rem .03rem 0 .05rem
                }
                p{
                    height: 0.3rem;
                    line-height:.3rem;
                    padding-left:0;
                    padding-top:0
                }
            }
        }
        img.b{
            width:1.3rem;
            height:.98rem;
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


