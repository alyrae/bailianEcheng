<template>
    <ul id="tabbar">
        <router-link to="/home" tag="li" activeClass="active">            
                <i class="iconfont icon-home"></i>
                <p>首页</p>
        </router-link>
        <router-link to="/classify" tag="li" activeClass="active">            
                <i class="iconfont icon-svgclassify"></i>
                <p>分类</p>
        </router-link>
        <router-link to="/cart" tag="li" activeClass="active">            
                <i class="iconfont icon-cart"></i>
                <p>购物车</p>            
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
        height:0.4rem;
        border-top:1px solid orange;
        display:flex;
        li{
            flex:1;
            text-align:center;
            font-size:0.12rem;
            color:#666;
            padding-top:0.05rem;
            p{
                height:0.14rem;
                line-height:0.14rem;
            }
        }
        .active{
            color:#b4282d
        }
    }
</style>
<style src="../../public/iconfont/iconfont.css"></style>



