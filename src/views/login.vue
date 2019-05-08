<template>
    <div id="login">
        <hd></hd>
        <loginHome v-if="isloginshow"></loginHome>
        <loginMethod v-if="!isloginshow"></loginMethod>
    </div>
</template>
<script>
import hd from '../components/hd'
import loginHome from './login/loginhome'
import loginMethod from './login/loginmethod'
import { mapState } from 'vuex';
export default {
    mounted(){
        this.$store.commit('istabbarshowmutation',false)
    },
    destroyed(){
        this.$store.commit('istabbarshowmutation',true)
    },
    components:{
        hd,
        loginHome,
        loginMethod
    },
    computed:{
        ...mapState(['isloginshow'])
    }
}
</script>

