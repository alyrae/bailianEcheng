<template>
    <div id="maingoods" ref="maingoods">
        <swider></swider>
        <navv></navv>
        <adv1></adv1>
        <content1></content1>
    </div>
</template>
<script>
import adv1 from './adv1'
import content1 from './content1'
import swider from './swider'
import navv from './navv'
import {mapState} from 'vuex'

export default {
    components:{
        swider,
        adv1,
        content1,
        navv
    },
    computed:{
        ...mapState(['rem'])
    },
    mounted(){
        this.$refs.maingoods.onscroll=()=>{
            if(this.$refs.maingoods.scrollTop<=60*this.rem){
                this.$store.state.homeinfo = {
                    fixed: false,
                    isnavshow: false,
                    per: 0,
                }
            }else if(this.$refs.maingoods.scrollTop<=475*this.rem){
                this.$store.state.homeinfo = {
                    fixed: true,
                    isnavshow: false,
                    per: (this.$refs.maingoods.scrollTop-60*this.rem)/(415*this.rem),
                }
            }else{
                this.$store.state.homeinfo = {
                    fixed: true,
                    isnavshow: true,
                    per: 1,
                }
            }
        }
    }
}
</script>
<style lang='scss'>
    #maingoods{
        flex:1;
        overflow:auto
    }
</style>


