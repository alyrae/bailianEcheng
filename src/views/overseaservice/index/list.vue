<template>
    <ul class="list" v-if="overseas_index.success_case!==undefined">
        <div class="hd" >
            <div class="left">
                <p>{{overseas_index.success_case.sucess_title}}</p>
                <p>{{overseas_index.success_case.sucess_en_title}}</p>
            </div>
            <p class="right">查看更多></p>
        </div>
        <ul class="main">
            <li v-for="data in overseas_index.success_case.sucess_case_article" :key="data.id">
                <img :src="data.thumb" alt="">
                <div>
                    <p>{{data.title}}</p>
                    <p><i class="iconfont icon-eye"></i>&nbsp<span class="views">{{data.views}}</span><i class="iconfont icon-eye"></i>&nbsp<span class="liked">{{data.liked}}</span></p>
                </div>
            </li>
        </ul>
    </ul>
</template>
<script>
import {mapState} from 'vuex'
export default {
    computed:{
        ...mapState(['overseas_index'])
    },
    mounted(){
        console.log(this.overseas_index)
    }
}
</script>
<style lang="scss" scoped>
    .list{
        .hd{
            height:.65rem;
            display:flex;
            width:100%;
            justify-content: space-between;
            margin-bottom:.18rem;
            .left{
                p:nth-of-type(1){
                    height:.53rem;
                    font-size:.18rem;
                    line-height: .68rem
                }
                p:nth-of-type(2){
                    height:.12rem;
                    font-size:.12rem;
                    color:#999;
                    line-height:.12rem;
                }
            }
            .right{
                line-height:.68rem;
                font-size:.14rem;
                color:#999;
            }
        }
        .main{
            overflow:hidden;
            li{
                width:100%;
                border-bottom:.01rem solid #ccc;
                margin:.15rem 0;
                padding:.15rem 0;
                display:flex;
                justify-content: space-between;
                img{
                    width:1.14rem;
                    height:.87rem;
                    margin-right:.2rem;
                }
                div{
                    display:flex;
                    flex-direction:column;
                    justify-content:space-between;                    
                    p:nth-of-type(1){
                        font-size:.18rem;
                        line-height:.24rem;
                    }
                    p:nth-of-type(2){
                        i{
                            font-size:.12rem ;
                            color:#999;
                        }
                        .views{
                            font-size:.14rem ;
                            color:#999;
                            margin-right:.1rem;
                        }
                        .liked{
                            font-size:.14rem ;
                            color:#999;
                        }
                    }
                }
            }
        }
    }
</style>

