<template>
    <div id="my">
       my
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    computed:{
        ...mapState(['isloged'])
    },
    beforeRouteEnter (to, from, next) {
        next(vm=>{
        if(!vm.isloged){
            vm.$router.push('/user/login')
        }
    })
  },
}
</script>
