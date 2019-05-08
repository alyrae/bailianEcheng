<template>
    <div class="loginmethod">
        <input type="text" class="tel" :placeholder="`请输入${loginmethod}号码`">
        <input type="password" class="ps" placeholder="请输入密码">
        <p class="telTip" v-if="istelerr">请输入正确手机号</p>
        <p class="psTip" v-if="ispserr">请输入正确密码</p>
        <ul class="clear">
            <li class="l">注册账号</li>
            <li class="r">忘记密码</li>
        </ul>
        <div class="login">登录</div>
        <div class="otherway" @click="f1()">其他登录方式</div> 
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    data(){
        return {
            istelerr: false,
            ispserr: false
        }
    },
    methods:{
        f1(){
            this.$store.commit('isloginshowmutation',true)
        }
    },
    computed:{
        ...mapState(['loginmethod'])
    },
    destroyed(){
       this.$store.commit('isloginshowmutation',true)
    }
}
</script>
<style lang="scss" scoped>
    .loginmethod{
        background:white;
        height:100%;
        margin-top:.76rem;
        overflow:hidden;
    }
    input{
        width:3.45rem;
        height:.4rem;
        border:none;
        border-bottom:1px solid #d9d9d9;
        margin:0 auto;
        display:block;
        outline:none
    }
    p{
        width:3.45rem;
        margin:0 auto;
        font-size:.12rem;
        color:#b4282d;
        height:.25rem;
        line-height: .38rem
    }
    ul{
        width:3.45rem;        
        font-size:.12rem;
        margin:.2rem auto .2rem auto
    }
    .login{
        width:3.45rem;
        margin:0 auto .15rem auto;
        text-align:center;
        background:#b4282d;
        height:.4rem;
        line-height: .4rem;
        color:white;
        border-radius:.03rem;
        font-size:.14rem
    }
    .otherway{
        width:3.45rem;
        margin:0 auto .15rem auto;
        text-align:center;
        height:.4rem;
        line-height: .4rem;
        color:#b4282d;
        border:.01rem solid #b4282d;
        border-radius:.03rem;
        font-size:.14rem
    }
</style>

