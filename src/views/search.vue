<template>
    <div class="search">
        <router-view></router-view>
    </div>
</template>
<style scoped >
    .search{
        width:100%;
        height:100%;
    }
</style>

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

