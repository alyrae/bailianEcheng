<template>
    <ul class="log">
        <li @click="login('手机')">
            <i class="iconfont icon-phone"></i>
            手机号码登录
        </li>
        <li @click="login('邮箱')">
            <i class="iconfont icon-weibiaoti103"></i>
            邮箱账号登录
        </li>
        <li>手机账号快速注册></li>
    </ul>
</template>
<script>
export default {
    methods:{
        login(method){
            this.$store.commit('isloginshowmutation',false)
            this.$store.commit('loginmethod',method)
        }
    }
}
</script>

<style lang='scss' scoped>
    ul{
        padding-top: 1.75rem;
    }
    li:nth-of-type(1),li:nth-of-type(2){
        width:3.45rem;
        height:.44rem;
        background:#b4282d;
        text-align:center;
        color:#fff;
        line-height: .44rem;
        font-size:.14rem;
        border-radius:.03rem;
        margin:0 auto .15rem auto
    }
    li:nth-of-type(2){
        background:white;
        border:1px solid #b4282d;
        color:#b4282d
    }
    li:nth-of-type(3){
        font-size:.12rem;
        color:#333;
        text-align:center;

    }
</style>

