<template>
    <div class="searchindex">
        {{id}}
    </div>
</template>
<script>
export default {
    data(){
        return {
            
        }
    },
    computed: {
        id(){
            return this.$route.query.keyword
        }
    }
}
</script>

