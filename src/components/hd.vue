<template>
    <ul class="hd">
        <li  @click="toOther(0)"><i class="iconfont icon-home"></i></li>
        <li  @click="toOther(1)">网易严选</li>
        <li  @click="toOther(2)"><i class="iconfont icon-find"></i></li>
        <li  @click="toOther(3)"><i class="iconfont icon-cart"></i></li>
    </ul>
</template>
<script>
export default {
    methods:{
        toOther(e){
            switch (e){
                case 0 : {
                    this.$router.push('/home')
                    break
                }
                case 1 : {
                    this.$router.push('/home')
                    break
                }
                case 2 : {
                    this.$router.push('/search')
                    break
                }
                case 3 : {
                    this.$router.push('/cart')
                    break
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .hd{
        height:.4rem;
        display:flex;
        background:#fafafa;
        li{
            width:.36rem;
            text-align:center;
            line-height: .4rem;
        }
        li:nth-of-type(2){
            flex:1;
            font-family: 'KaiTi';            
        }
    }
</style>

