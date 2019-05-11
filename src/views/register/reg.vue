<template>
    <div class="reg">
        <input type="text" class="un" placeholder="请输入手机号" v-model="untext">
        <input type="text" class="pic" placeholder="图形验证码" v-model="pictext">
        <div class="fir">
            <p>请获取</p>
            <img src="../../assets/white2017.png" alt="">
        </div>
        <input type="text" class="num" placeholder="请输入验证码" v-model="numtext">
        <div class="sec">获取验证码</div>
        <div class="btn" :style="bgc">下一步</div>
        <div class="text">
            <span>点击注册,表示同意</span>
            <a href="http://m.5lux.com/help/question/112">《第五大道用户服务协议》</a>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            untext: '',
            pictext: '',
            numtext: ''
        }
    },
    computed:{
        bgc(){
            return this.untext==''||this.pictext==''||this.numtext==''?'background:#ccc':'background:#bf9d60'
        }
    }
}
</script>


<style scoped lang="scss">
    .reg{
        position:relative;
        padding-top:.5rem;
        input{
            display:block;
            width:3rem;
            height:.4rem;
            outline:none;
            border:none;
            border-bottom:.01rem solid #ccc;
            margin:0 auto .1rem auto;
        }
        .fir{
            position: absolute;
            right:.37rem;
            display:flex;
            top:1.06rem;
            p{
                color:#999;
                font-size:.14rem;
                border-right:.01rem solid #ccc;
                padding:0 .1rem;
                height:.24rem;
                line-height: .24rem
            }
            img{
                width:.9rem;
                height:.24rem
            }
        }
        .sec{
            width:.9rem;
            height:.24rem;
            line-height: .24rem;
            text-align:center;
            border-left:.01rem solid #ccc;
            color:#ccb27f;
            font-size:.14rem;
            position: absolute;
            right:.37rem;
            top:1.6rem
        }
        .btn{
            width:3rem;
            height:.4rem;
            text-align:center;
            line-height: .4rem;
            color:white;
            border-radius: .03rem;
            margin:.3rem auto .15rem auto
        }
        .text{
            width:100%;
            font-size:.12rem;
            color:#999;
            text-align:center;
            a{
                font-size:.12rem;
                color:#999;
                text-decoration: underline
            }
        }
    }
</style>

