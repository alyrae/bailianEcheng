<template>
    <div class="search">
        search
        <!-- 回车,点击都跳转路由 /searchResult?keyword=xxx -->
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

