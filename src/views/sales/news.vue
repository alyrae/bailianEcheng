<template>
    <div class="news">
        <hd title="新款同步"></hd>
        <ul class="big_ul">
            <li v-for="data in list.list" >
                <div class="top">
                    <div>
                        <img :src="data.thumb" alt="">
                    </div>
                    <p>{{data.brand_name}}</p>
                    <i class="iconfont icon-yes"></i>
                </div>
                <div :class="`wrapper_news_${data.id} wrapper_news`">
                    <ul class="content">
                        <li v-for="item in data.goods_list" @click="toDetails(item.product_id)">
                            <img :src="item.p_thumb" alt="">
                            <h2>{{item.p_title}}</h2>
                            <p>￥{{item.product_price}}</p>
                        </li>
                    </ul>                
                </div>
            </li>
            <li class="last" @click="add()">
                点击加载更多...
            </li>
        </ul>
    </div>
</template>
<style scoped lang="scss">
    .big_ul{
        padding-top:.44rem;
        width:100%;
        .last{
            height:.84rem;
            width:100%;
            line-height:.84rem;
            text-align:center;
            border:none;
            color:#ccc;
            font-size:.14rem;
        }
        > li{
            width:100%;
            border-bottom:.1rem solid #f2f2f2;
            div.top{
                display:flex;
                width:100%;
                height:.5rem;
                position:relative;
                padding:.15rem 0;
                div{
                    width:.5rem;
                    height:.5rem;
                    margin-left:.1rem;
                    border:.01rem solid #ccc;                    
                }
                img{
                    width:.44rem;
                    height:.22rem;
                    left:0;
                    right:0;
                    margin:.15rem auto 0 auto
                }
                p{
                    font-size:.14rem;
                    color:#666;
                    line-height:.5rem;
                    padding-left:.2rem;
                }
                i{
                    font-size:.16rem;
                    color:#666;
                    position:absolute;
                    right:.2rem;
                    top:.3rem
                }
            }
            div.wrapper_news{
                margin:0 .1rem;
                overflow:hidden;
                .content{
                    display:flex;
                    width:18.7rem;
                    justify-content: space-between;
                    flex-wrap: nowrap;
                    li{
                        width:1.38rem ;
                        padding:0 .1rem;
                        margin-bottom:.2rem;
                        img{
                            width:1.09rem;
                            height:1.38rem;
                            margin:0 auto .1rem auto;
                        }
                        h2{
                            text-align:center;
                            font-size:.13rem;
                            color:#333;
                            padding:0 .1rem
                        }
                        p{
                            text-align: center;
                            color:#9b885f;
                            font-size:.13rem
                        }
                    }
                }
            }
            
        }
    }
</style>
<script>
import hd from '../../components/hd'
import axios from 'axios'
import BScroll from 'better-scroll'
export default {
    components:{
        hd
    },
    data(){
        return {
            list: [],
            page: 1
        }
    },
    methods:{
        add(){
            axios({
                url: `https://apim.restful.5lux.com.cn/home/new_product?page=${++this.page}`
            }).then(res=>{
                console.log(res.data.data)
                console.log(this.list)
                console.log(this.list.list)
                console.log(res.data.data.list)

                for(var i=0;i<res.data.data.list.length;i++){
                    this.list.list.push(res.data.data.list[i])
                }
                
            })
        },
        toDetails(id){
            this.$router.push(`/good/detail/${id}`)
        }
    },
    mounted(){
        axios({
            url: 'https://apim.restful.5lux.com.cn/home/new_product?page=1'
        }).then(res=>{
            this.list = res.data.data
            console.log(this.list)
        })
    },
    updated(){
        for(var i=0;i<this.list.list.length;i++){
            new BScroll(`.wrapper_news_${this.list.list[i].id}`,{
                scrollY: false,
                scrollX: true,
                click: true
            })
        }
        
    }
}
</script>

