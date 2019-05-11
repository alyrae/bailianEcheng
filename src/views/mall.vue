<template>
    <div id="mall">
        <search></search>
        <midnav></midnav>
        <mallindex></mallindex>
    </div>
</template>
<script>
import search from '../components/search'
import midnav from '../components/midnav'
import {mapState} from  'vuex'
import mallindex from  './mall/mallindex'
export default {
    components:{
        search,
        midnav,
        mallindex
    },
    computed:{
        ...mapState(['istabbarshow'])
    },
    destroyed(){
        this.$store.commit('istabbarshowmutation',false)
    },
    mounted(){
        if(this.$route.query.id!==0){
            this.$store.state.ishome=true
            this.$router.push('/mall?id=0')
            }
            this.$store.commit('istabbarshowmutation',true)
    }
}
</script>

