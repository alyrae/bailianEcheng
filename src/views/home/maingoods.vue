<template>
    <div id="maingoods">
                <p v-for='n in 10'>{{n}}</p>

        <swider></swider>
        <navv></navv>
          <adv1></adv1>
       <content1></content1>
    </div>
</template>
<script>
import adv1 from './adv1'
import content1 from './content1'
import swider from './swider'
import navv from './navv';

export default {
       components:{
        swider,
        adv1,
        content1,
       navv
    },
}
</script>
<style lang='scss'>
    #maingoods{
        flex:1;
        overflow:auto
    }
</style>


