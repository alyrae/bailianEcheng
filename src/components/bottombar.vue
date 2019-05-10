<template>
    <ul class="bottombar">
        <router-link to="/overseaservice/index" tag="li" activeClass="active"><i class="iconfont icon-home"></i><p>首页</p></router-link>
        <router-link to="/overseaservice/projectlist" tag="li" activeClass="active"><i class="iconfont icon-home"></i><p>服务项目</p></router-link>
        <router-link to="/overseaservice/countrylist" tag="li" activeClass="active"><i class="iconfont icon-home"></i><p>国家地区</p></router-link>
        <router-link to="/my" activeClass="active" tag="li"><i class="iconfont icon-home"></i><p>我的</p></router-link>
    </ul>
</template>
<style lang="scss" scoped>
    .bottombar{
        display:flex;
        width:100%;
        height:.5rem;
        background:black;
        justify-content:space-around;
        li{
            color:#ccc;
            text-align: center;
            padding-top:.03rem;
            i{
                font-size:.26rem
            }
            p{
                font-size:.12rem
            }
        }
        .active{
            color:white;
        }

    }
</style>

