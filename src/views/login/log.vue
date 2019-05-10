<template>
    <div class="log">
        <input type="text" placeholder="请输入邮箱/手机号" v-model="untext">
        <input :type="pstype" placeholder="请输入密码" v-model="pstext">
        <i :class="iconClass" @click="f1()"></i>
        <div class="btn" :style="bgc">登录</div>
        <ul>
            <li @click="toForget()">忘记密码？</li>
            <li @click="toRegister()">用户注册</li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            untext: '',
            pstext: '',
            ispsshow: false,
        }
    },
    methods:{
        f1(){
            this.ispsshow = !this.ispsshow
        },
        toForget(){
            this.$router.push('/user/forget')
        },
        toRegister(){
            this.$router.push('/user/register')
        }
    },
    computed:{
        bgc(){
            return this.untext==''||this.pstext==''?'background:#ccc':'background:#bf9d60'
        },
        pstype(){
            return this.ispsshow?'text':'password'
        },
        iconClass(){
            return {
                'iconfont': true,
                'icon-yes': this.ispsshow,
                'icon-eye': !this.ispwshow
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .log{
        padding-top:.5rem;
        overflow:hidden;
    }
    input{
        display:block;
        outline:none;
        width:2.95rem;
        height:.4rem;
        border:none;
        border-bottom:1px solid #ccc;
        margin: 0 auto;
    }
    i{
        display:block;
        position:absolute;
        right:.5rem;
        top:1.5rem
    }
    .btn{
        width:2.95rem;
        height:.4rem;
        margin: .3rem auto 0 auto;
        text-align:center;
        line-height:.4rem;
        color:white;
    }
    ul{
        margin:.2rem auto 0 auto;
        width:2.95rem;
        display:flex;
        justify-content:space-between;
        li{
            font-size:.12rem;
            color:#7e8c8d
        }
    }
</style>

