<template>
    <ul class="cart">
        <li v-for="data in cartList">{{data}}</li>
    </ul>
</template>
<script>
import {mapState} from 'vuex'
export default {
    computed:{
        ...mapState(['cartList'])
    }    
}
</script>

<style>
    .cart{
        background:#F4F4F4;
        height:100%;
        flex:1;
    }
</style>
