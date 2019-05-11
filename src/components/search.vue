<template>
    <div class="logo_search" @click="f1()">
        <div class="search">
            <i class="iconfont icon-find"></i>
            <p>5LUX.COM</p>
        </div>
        <i class="iconfont icon-Present-Box"></i>
    </div>
</template>
<script>
export default {
    methods:{
        f1(){
            this.$router.push('/search')
        }
    }
}
</script>

<style scoped lang="scss">
    .logo_search{
            width:100%;
            height: .44rem;
            position:relative;
            overflow:hidden;
            background: rgba(0, 0, 0, 0);
            .search{
                width:3.03rem;
                margin:0 .16rem;
                height:0.3rem;
                // background-color: hsla(0,0%,100%,.25);
                background:#fff;
                border-radius:.03rem;
                position:relative;
                margin-top:.07rem;
                p{
                    font-size: .16rem;
                    color:#ccc;                    
                    line-height: .3rem;
                    margin:0 auto;
                    text-indent:.27rem;
                }
                i{
                    position:absolute;
                    left:.07rem;
                    top:.07rem;
                    color:#333
                }
            }
            i.icon-Present-Box{
                color:white;
                position:absolute;
                right:.13rem;
                top:.08rem;
                font-size:.25rem
            }
        }
</style>
