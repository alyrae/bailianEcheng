<template>
    <div id="mall">
        <search></search>
        <midnav></midnav>
    </div>
</template>
<script>
import search from '../components/search'
import midnav from '../components/midnav'
import {mapState} from  'vuex'
export default {
    components:{
        search,
        midnav
    },
    computed:{
        ...mapState(['istabbarshow'])
    },
    destroyed(){
        this.$store.commit('istabbarshowmutation',false)
    },
    mounted(){
        this.$store.commit('istabbarshowmutation',true)
    }
}
</script>

