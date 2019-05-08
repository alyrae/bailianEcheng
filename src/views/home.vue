<template>
    <div id="home">
       <adv1></adv1>
       <content1></content1>
       <top></top>
       <router-view></router-view>
    </div>
</template>
<script>
import top from './home/top'
import adv1 from './home/adv1'
import content1 from './home/content1'
export default {
    components:{
        top,
        adv1,
        content1
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

