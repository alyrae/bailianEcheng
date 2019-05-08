<template>
    <div id="top">
        <div>
            <div class="logo_search">
                <p @click="clickLogo()" class="logo">网易严选</p>
                <router-link to="/search" tag="div" class="search">
                    <i class="iconfont icon-find"></i>
                    <p>搜索商品,共9747款好物</p>
                </router-link>
            </div>
        </div>
        <midnav></midnav>
    </div>
</template>
<script>
import midnav from './midnav'
export default {
    methods:{
        clickLogo(){
            this.$router.push('/home')
        }
    },
    components:{
        midnav
    }
}
</script>
<style lang="scss" scoped>
    #top{
        border-bottom:.01rem solid #ccc;
        div{
            display:flex;
            width:100%;
            .logo{
                font-size:0.18rem;
                font-family: 'KaiTi';
                height:0.3rem;
                line-height: 0.3rem;
                padding:0 0.1rem;
                font-style:normal;
            }
            .search{
                width:100%;
                height:0.24rem;
                flex:1;
                background:#ededed;
                border-radius:.03rem;
                margin-right:.1rem;
                margin-top:.06rem;
                position:relative;
                p{
                    font-size: .12rem;
                    color:#333;                    
                    line-height: .24rem;
                    margin:0 auto
                }
                i{
                    position:absolute;
                    left:.5rem;
                    top:.05rem
                }
            }
        }
        

    }
    
</style>




