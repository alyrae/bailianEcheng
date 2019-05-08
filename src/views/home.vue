<template>
    <div id="home">
       <top></top>
       <maingoods></maingoods>
    </div>
</template>
<script>
import top from './home/top'
import maingoods from './home/maingoods'
import {mapState} from  'vuex'
export default {
    components:{
        top,
        maingoods
    },
    computed:{
        ...mapState(['istabbarshow'])
    },
    destroyed(){
        this.$store.commit('hasappmutation',false)
        this.$store.commit('istabbarshowmutation',false)
    },
    mounted(){
        this.$store.commit('istabbarshowmutation',true)
    }
}
</script>
<style lang="scss" scoped>
    #home{
        display:flex;
        flex-direction: column;
        #top{
            border-bottom:.01rem solid #ccc;
        }
        .test{
            overflow:auto;
            height:100%;
        }

    }
</style>

