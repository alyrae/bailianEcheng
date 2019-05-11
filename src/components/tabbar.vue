<template>
    <ul id="tabbar">
        <router-link to="/" tag="li" activeClass="active">            
                <i class="iconfont icon-home"></i>
                <p>首页</p>
        </router-link>
        <router-link to="/mall" tag="li" activeClass="active">            
                <i class="iconfont icon-svgclassify"></i>
                <p>商城</p>
        </router-link>
        <router-link to="/overseaservice" tag="li" activeClass="active">            
                <i class="iconfont icon-cart"></i>
                <p>海外购物</p>            
        </router-link>
        <router-link to="/store" tag="li" activeClass="active">            
                <i class="iconfont icon-cart"></i>
                <p>到店</p>            
        </router-link>
        <router-link to="/my" tag="li" activeClass="active">            
                <i class="iconfont icon-my"></i>
                <p>个人</p>
        </router-link>
    </ul>
</template>
<style scoped lang="scss">
    #tabbar{
        width:100%;
        height:0.5rem;
        border-top:1px solid white;
        display:flex;
        z-index: 99;
        position:fixed;
        bottom:0px;
        background:black;
        li{
            flex:1;
            text-align:center;
            font-size:0.12rem;
            color:#7e8c8d;
            padding-top:.05rem;
            p{
                height:0.14rem;
                line-height:0.14rem;
            }
            i{
                font-size:.25rem
            }
        }
        .active{
            color:#fff
        }
    }
</style>
<style src="../../public/iconfont/iconfont.css"></style>



