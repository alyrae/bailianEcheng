<template>
    <div class="projeclist">
        <div class="hd">
            全部
            <i class="iconfont icon-eye"></i>
            <i class="iconfont icon-yes"></i>
        </div>
        <div class="wrapper_pro">
            <ul class="main content">
                <li v-for="data in list.ovsproject_project">
                    <img :src="data.project_img" alt="">
                    <h2>{{data.project_title}}</h2>
                    <p>{{data.flag}}&nbsp:&nbsp<span>{{data.mobile_price}}</span></p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import {mapState} from 'vuex'
import axios from 'axios'
import BScroll from 'better-scroll'
export default {
    data(){
        return {
            list: []
        }
    },
    computed:{
        ...mapState(['isbottombarshow'])
    },
    mounted(){
        this.$store.commit('isbottombarshowmutation',true)
        console.log(this.$store.state.isbottombarshow)
        axios({
            url: 'https://apim.restful.5lux.com.cn/ovsproject/ovsproject_list'
        }).then(res=>{
            this.list = res.data.data
            console.log(this.list)
        })
    },
    destroyed(){
        this.$store.commit('isbottombarshowmutation',false)
    },
    updated(){
        new BScroll('.wrapper_pro',{
            scrollY: true,
            click: true
        })
    }
}
</script>
<style scoped lang="scss">
    .projeclist{
        display:flex;
        flex-direction:column;
        height:100%;
        .hd{
            position:fixed;
            text-align:center;
            height:.44rem;
            line-height:.44rem;
            width:100%;
            flex:1;
            border-bottom:.01rem solid #ccc;
            background:white;
            i.icon-yes{
                position:absolute;
                right:.1rem;
                line-height:.44rem;
                font-size:.22rem
            }
        }
        .wrapper_pro{
            flex:1;
            overflow:auto;
            margin-top:.44rem;
        }
        .main{
            li{
                border-top:.1rem solid #e5e5e5;
                padding:.1rem .2rem;
                img{
                    width:3.35rem;
                    height:2.5rem;
                }
                h2{
                    width:100%;
                    line-height:.4rem;
                    margin-top:.15rem;
                    font-weight: bold;
                }
                p{
                    width:100%;
                    height:.4rem;
                    line-height:.4rem;
                    color:#999;                    
                    span{
                        color:#33a0ff
                    }
                }
            }
            li:first-of-type{
                margin-top:.44rem;
            }
        }
    }
</style>

