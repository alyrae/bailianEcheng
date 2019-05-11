<template>
    <div class="countrylist" ref="coutrylist">
        <div class="hd">
            <i class="iconfont icon-yes"></i>
            国家地区
        </div>
        <div class="wrapper_countrylist" v-if="obj.ovsproject_country!==undefined" id="aaa">
            <ul class="content list">
                <li v-for="data in obj.ovsproject_country" :key="data.c_id">                    
                    <img v-lazy.aaa="data.banner_m">
                    <div>
                        <h2>{{data.name}}</h2>
                        <p>{{data.name_en}}</p>
                    </div>
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
    computed:{
        ...mapState(['isbottombarshow'])
    },
    data(){
        return {
            obj:{}
        }
    },
    mounted(){
        this.$store.commit('isbottombarshowmutation',true)
        axios({
            url: 'https://apim.restful.5lux.com.cn/ovscountry/ovscountry_list'
        }).then(res=>{
            this.obj = res.data.data  
            console.log(this.obj.ovsproject_country)          
        })
    },
    destroyed(){
        this.$store.commit('isbottombarshowmutation',false)
    },
    updated(){
        new BScroll('.wrapper_countrylist',{
            scrollY: true,
            scrollX: false,
            click: true
        })

    }
}
</script>
<style scoped lang="scss">
    .countrylist{
        overflow:auto;
        height:100%;
        display:flex;
        flex-direction:column;
        .hd{
            width:100%;
            height:.44rem;
            text-align:center;
            line-height:.44rem;
            font-size:.16rem;
            border-bottom:.01rem solid #ccc;
            position:fixed;
            top:0;
            z-index:100;
            background:white;
            i{
                position:absolute;
                left:.15rem;                
                font-size:.2rem
            }        
        }
        .wrapper_countrylist{
            width:100%;
            margin-top:.44rem;
            flex:1;
            overflow:hidden;
            .list{
                overflow:auto;
                display:flex;
                flex-wrap:wrap;
                justify-content: space-between;
                align-content:flex-start;
                li{
                    position:relative;
                    width:1.87rem;
                    margin-bottom:.01rem;
                    img{
                        width:100%;
                        height:146px ;
                    }
                    div{
                        width:100%;
                        height:100%;
                        text-align:center;
                        position:absolute;
                        bottom:0;
                        left:0;
                        color:white;
                        background:rgba(0,0,0,.3);
                        display:flex;
                        flex-direction:column;
                        justify-content:flex-end;
                        h2{
                            height:.24rem;
                            line-height:.24rem
                        }
                        p{
                            height:.4rem;
                            line-height:.24rem
                        }
                    }
                }
            }
        }
    }
</style>
