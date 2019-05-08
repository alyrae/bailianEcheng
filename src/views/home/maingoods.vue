<template>
    <div id="maingoods">
        <li v-for="n in 100">{{n}}</li>
    </div>
</template>
<script>
export default {
    mounted(){
        console.log(this.$route)
    }
}
</script>
<style lang='scss'>
    #maingoods{
        flex:1;
        overflow:auto
    }
</style>


