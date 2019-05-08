<template>
    <ul class="bottom">
        <li><i class="iconfont icon-aui-icon-weichat"></i> 微信</li>
        <li><i class="iconfont icon-icon"></i> QQ</li>
        <li><i class="iconfont icon-weibo"></i> 微博</li>
    </ul>
</template>
<style lang="scss" scoped>
    .bottom{
        position:absolute;
        bottom:.2rem;
        display:flex;
        width:100%;
        justify-content:center;
        li{
            color:#7f7f7f;
            font-size:.14rem;
            padding:0 .15rem;
            border-right:.01rem solid #7f7f7f;
            height:.14rem;
            line-height: .14rem;
        }
        li:last-of-type{
            border-right:none
        }
        i{
            font-size:.14rem
        }
    }
</style>

