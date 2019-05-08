<template>
    <div id="home">
       <top></top>
       <router-view></router-view>
    </div>
</template>
<script>
import top from './home/top'
export default {
    components:{
        top
    }
}
</script>
<style lang="scss" scoped>
    #home{
        display:flex;
        flex-direction: column;
        height:100%;
        #top{
            border-bottom:.01rem solid #ccc;
        }
    }
</style>

