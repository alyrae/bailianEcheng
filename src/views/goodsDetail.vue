<template>
    <div id="goodsDetail">
        goodsDetail
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
