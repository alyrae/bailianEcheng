<template>
    <div id="register">
        <hd></hd>
        <reg></reg>
    </div>
</template>
<script>
import hd from '../components/hd'
import reg from './register/reg'
export default {
    mounted(){
        this.$store.commit('istabbarshowmutation',false)
    },
    destroyed(){
        this.$store.commit('istabbarshowmutation',true)
    },
    components:{
        hd,
        reg
    }
}
</script>
<style scoped >
    #register{
        display:flex;
        flex-direction:column;
        flex:none
    }
</style>


