<template>
    <div id="my">
       my
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    mounted(){
        this.$store.commit('istabbarshowmutation',false)
    },
    destroyed(){
        this.$store.commit('istabbarshowmutation',true)
    },
    computed:{
        ...mapState(['isloged'])
    },
    beforeRouteEnter (to, from, next) {
        next(vm=>{
            if(!vm.isloged){
                vm.$router.push('/login')
            }
        })
  },
}
</script>
