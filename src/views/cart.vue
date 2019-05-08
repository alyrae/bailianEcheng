<template>
    <div id="cart">
       <div class="hd">购物车</div>
       <allCart v-if="cartList.length!=0"></allCart>
       <nodata v-if="cartList.length==0"></nodata>
       <div v-if="!isloged" class="login" @click="clickLogin()">登录</div>
    </div>
</template>
<script>
import allCart from './cart/allcart'
import nodata from './cart/nodata'
import { mapState } from 'vuex';

export default {
    components:{
        allCart,
        nodata
    },
    computed:{
        ...mapState(['isloged','cartList'])
    },
    methods:{
        clickLogin(){
            this.$router.push('/login')
            this.$store.commit('isloginshowmutation',true)
        }
    }
}
</script>

<style lang="scss" scoped>
    #cart{
        background:#F4F4F4;
        display:flex;
        flex-direction: column;
        position:relative;
        .hd{
            height:.36rem;
            text-align:center;
            line-height: .36rem;
            font-size: .14rem;
            color:#333;
            background:white
        }
        .login{
            position:absolute;
            width:2.04rem;
            height:.4rem;
            background:#b4282d;
            color:white;
            font-size:.14rem;
            line-height: .4rem;
            text-align:center;
            left:0;
            right:0;
            margin:0 auto;
            top:3rem
        }
    }
</style>