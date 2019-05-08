<template>
    <div id="home">
       <adv1></adv1>
       <content1></content1>
       <top></top>
       <maingoods></maingoods>
    </div>
</template>
<script>
import top from './home/top'
<<<<<<< HEAD
import adv1 from './home/adv1'
import content1 from './home/content1'
export default {
    components:{
        top,
        adv1,
        content1
=======
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
>>>>>>> 5c175ce38519403d1c460c756b889377a26f0389
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

