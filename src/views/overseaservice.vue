<template>
    <div id="overseaservice">
        <router-view></router-view>
        <bottombar v-if="isbottombarshow"></bottombar>
    </div>
</template>
<script>

import {mapState} from 'vuex'
import bottombar from '../components/bottombar'
export default {
    components:{
        bottombar
    },
    computed:{
        ...mapState(['isbottombarshow'])
    },
    updated(){
        console.log(this.$refs)
    }
}
</script>
<style scoped lang="scss">
    #overseaservice{
        display:flex;
        flex-direction: column;
        height:100%;
        width:100%;
    }
    #overseaservice > div {
        flex:1
    }
</style>


