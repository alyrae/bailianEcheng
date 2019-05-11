<template>
    <div class="hd">
        <i class="iconfont icon-yes" @click="toBack()"></i>{{title}}
    </div>
</template>
<script>
export default {
    props:['title'],
    methods:{
        toBack(){
            if(this.$route.path=='/user/login'){
                this.$router.go(-2)
            }else{
                this.$router.go(-1)
            }
        }
    }
}
</script>
<style scoped lang="scss">
    .hd{
        height:.44rem;
        text-align:center;
        line-height:.44rem;
        border-bottom:.01rem solid #ccc;
        background:white;
        position:fixed;
        top:0;
        width:100%;
        z-index:10;
        i{
            font-size:.2rem;
            position:absolute;
            left:.1rem
        }
    }
</style>


