<template>
    <div id="forget">
        <forgethd></forgethd>
        <input type="text" placeholder="请输入手机号/邮箱" v-model="untext">
        <div :style="btnClass" class="btn">下一步</div>
    </div>
</template>
<script>
import forgethd from './forget/forgethd'
export default {
    components:{
        forgethd
    },
    data(){
        return {
            untext: ''
        }
    },
    computed:{
        btnClass(){
            return this.untext==''?'background:#ccc':'background:#bf9d60'
        }
    }
}
</script>
<style lang="scss" scoped>
    input{
        width:3rem;
        height:.4rem;
        border:none;
        border-bottom:.01rem solid #ccc;
        margin:.5rem auto 0 auto;
        display:block;
        outline:none;
        color:#ccc;
        font-size:.14rem
    }
    .btn{
        width:3rem;
        height:.4rem;
        text-align:center;
        line-height:.4rem;
        color:white;
        margin: .3rem auto 0 auto
    }
</style>


