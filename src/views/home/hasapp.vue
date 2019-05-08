<template>
    <div class="hasapp">
        <i class="iconfont icon-yes" @click="f1()"></i>
        <img src="../../assets/load.png" alt="">
        <div class="text">
            <h2>注册享1880元大礼包</h2>
            <h3>下载第五大道APP</h3>
        </div>
        <div class="btn">立即体验</div>
    </div>
</template>
<script>
export default {
    methods:{
        f1(){
            this.$store.commit('hasappmutation',true)            
        }
    },
}
</script>

<style lang="scss" scoped>
    .hasapp{
        background:black;
        display:flex;
        width:100%;
        padding:.06rem 0;
        position:relative;
        i.icon-yes{
            font-size:.2rem;
            color:white;
            padding:0 .12rem;
            line-height:.48rem
        }
        img{
            width:.48rem;
            height:.48rem;
            margin-right:.12rem
        }
        .text{
            h2{
                color:white;
                font-size: .13rem;
                height:.24rem;
                line-height:.24rem
            }
            h3{
                color:#ccc;
                font-size:.12rem;
                height:.24rem;
                line-height:.24rem
            }
        }
        .btn{
            width:.84rem;
            height:.36rem;
            text-align:center;
            line-height:.36rem;
            background:#f33;
            position:absolute;
            right:.12rem;
            top:.14rem;
            color:#fff;
            font-size:.14rem;
            border-radius:.05rem
        }
    }
</style>

