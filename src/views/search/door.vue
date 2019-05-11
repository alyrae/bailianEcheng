<template>
    <div class="door">
        <div class="top">
            <div class="searchBar">
                <i class="iconfont icon-find"></i>
                <input type="text" :placeholder="keyword" @input="f2" v-model="searchtext" @keyup="f1">
            </div>
            <p>取消</p>            
        </div>
        <ul class="mask" v-if="searchtext!==''">
            <li v-for="data in storelist" class="storelist" @click="f3()">
                <i class="iconfont icon-yes"></i>
                <p>搜索"{{ data.label }}"相关专柜</p>
                <h2>约{{data.store_total}}家店</h2>
            </li>
            <li v-for="data in goodlist" class="goodlist" @click="f4(data.label)">
                <p>{{data.label}}</p>
                <h2>约{{data.total}}件商品</h2>
            </li>
        </ul>
        <div class="wrapper_search_door">
            <ul class="content">
                <div class="hot_title">
                    <p>热门搜索</p>
                    <ul class="clear">
                        <li v-for="data in hotlist">{{data.keyword}}</li>
                    </ul>
                </div>
                <div class="recommend">
                    <h3>为您推荐</h3>   
                    <div class="barl"></div>
                    <div class="barr"></div>
                    <ul v-if="recommendlist.length!==0">
                        <li v-for="data in recommendlist" :key="data.product_id">
                            <img :src="data.product_thumb" alt="">
                            <h2>{{data.product_name}}</h2>
                            <p>￥{{data.product_price}}</p>
                        </li>
                    </ul>
                </div>
            </ul>
        </div>
        
        
    </div>
</template>
<style scoped lang="scss">
    .door{
        width:100%;
        background:white;
        height:100%;
        .wrapper_search_door{
            height:100%;
            overflow:hidden;
            .content{
                padding-top:.45rem;
            }
        }
        .mask{
            position:fixed;
            height:6.22rem;
            background:white;            
            top:.45rem;
            z-index:2;
            padding-left:.14rem;
            width:100%;
            box-sizing:border-box;
            .storelist{
                width:100%;
                height:.44rem;
                display:flex;
                line-height: .44rem;
                border-bottom:.01rem solid #f2f2f2;
                i{

                    margin-right:.15rem;
                }
                p{
                    flex:1;
                    font-size:.14rem;
                    color:#7e8c8d;
                    font-family: 'SimSun';
                    overflow:hidden;
                    text-overflow:ellipsis;
                    white-space:nowrap
                }
                h2{
                    margin-right:.17rem;
                    font-size:.12rem;
                    color:#7e8c8d
                }
            }
            .goodlist{
                width:100%;
                height:.44rem;
                display:flex;
                justify-content:space-between;
                line-height: .44rem;
                border-bottom:.01rem solid #f2f2f2;
                p{
                    font-size:.14rem;
                    color:#7e8c8d;
                    font-family: 'SimSun';
                    overflow:hidden;
                    text-overflow:ellipsis;
                    white-space:nowrap
                }
                h2{
                    margin-right:.17rem;
                    font-size:.12rem;
                    color:#7e8c8d
                }
            }
        }
        .top{   
            height:.32rem;
            background:white;
            border-bottom:.01rem solid #ccc;
            overflow:hidden;
            position: fixed;
            width:100%;
            padding:.06rem 0;
            z-index:2;
            
            .searchBar{
                width:2.93rem;
                height:.26rem;
                padding:.06rem 0.11rem 0 0.08rem;
                margin-left:.06rem;
                position:relative;
                background:#f2f2f2;
                border-radius:.05rem;
                i{
                    position: absolute;
                    left:.15rem;
                    top:.08rem;
                    z-index:2
                }
                input{
                    border:none;
                    outline:none;
                    background:#f2f2f2;
                    text-indent: .4rem;
                    font-size:.14rem;
                    line-height:100%;
                    width:100%;
                    height:100%;
                    position:relative;
                    top:-.03rem;
                    left:-.08rem
                }
            }
            p{
                position:absolute;
                right:.1rem;
                top:.1rem
            }
        }
        .hot_title{
            
            p{
                height:.4rem;
                padding:0 .15rem;
                font-size:.13rem;
                line-height: .4rem;
                background:#f2f2f2;                
            }
            ul{
                padding:.1rem .15rem 0 .15rem;
                li{
                    margin:0 .1rem .1rem 0;
                    border:.01rem solid #ccc;
                    padding:0 .1rem;
                    height:.3rem;
                    line-height: .3rem;
                    float:left;
                    font-size:.13rem;
                    color:#999;
                }
            }
        }
        .recommend{
            position:relative;
            h3{
                height:.46rem;
                background:#f2f2f2;
                text-align:center;
                line-height:.46rem;
                font-size:.14rem;
                color:#999
            }
            .barl{
                width:.2rem;
                border-bottom:1px solid #999;
                position:absolute;
                left:1.33rem;
                top:.23rem
            }
            .barr{
                width:.2rem;
                border-bottom:1px solid #999;
                position:absolute;
                right:1.33rem;
                top:.23rem
            }
            ul{
                padding:.15rem;
                display:flex;
                flex-wrap:wrap;
                align-content: flex-start;
                justify-content: space-between;                
                li{
                    width:1.45rem;
                    margin:.15rem 0;
                    img{
                        width:1.45rem;
                        height:1.45rem
                    }
                    h2{
                        font-size:.12rem;
                        color:#333;
                        display:-webkit-box;
                        -webkit-box-orient:vertical;
                        -webkit-line-clamp: 1 ;
                        overflow: hidden;
                        height:.33rem;
                        line-height: .33rem
                    }
                    p{
                        font-size:.12rem;
                        color:#999;
                        text-align:center
                    }
                }
            }
        }
    }
</style>
<script>
import axios from 'axios'
import BScroll from 'better-scroll'
export default {
    data(){
        return {
            keyword: '',
            hotlist: [],
            recommendlist: [],
            searchtext: '',
            storelist: [],
            goodlist: []
        }
    },
    methods:{
        f2(){
           axios({
               url: `/rpcsearchnew/getkey?pid=2&search=${this.searchtext}`
           }).then(res=>{
               this.storelist = res.data.data.store_info
               this.goodlist = res.data.data.other_info
           })

        },
        f1(e){
            if(e.which===13){
                this.$router.push(`/search/index?keyword=${this.searchtext}`)
            }
        },
        f3(){
            this.$router.push(`/store/list?keywords=${this.searchtext}`)
        },
        f4(label){
            this.$router.push(`/search/index?keyword=${label}`)
        }
    },
    mounted(){
        axios({
            url: 'https://apim.restful.5lux.com.cn/search/recommend_list'
        }).then(res=>{
            this.keyword = res.data.data.search_keyword[0]
            this.hotlist = res.data.data.hot_search
            this.recommendlist = res.data.data.recommend_products
        })
    },
    updated(){
        new BScroll('.wrapper_search_door',{
            scrollY: true,
            scrollX: false,
            click: true
        })
    }
}
</script>

