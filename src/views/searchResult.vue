<template>
    <div id="searchResult">
        searchResult
    </div>
</template>
<script>
export default {
    mounted(){
        this.$store.commit('istabbarshowmutation',false)
    },
    destroyed(){
        this.$store.commit('istabbarshowmutation',true)
    }
}
</script>

