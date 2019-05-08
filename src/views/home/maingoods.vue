<template>
    <div id="maingoods">
          <adv1></adv1>
       <content1></content1>
    </div>
</template>
<script>
import adv1 from './adv1'
import content1 from './content1'

export default {
       components:{
      
        adv1,
        content1,
       
    },
}
</script>
<style lang='scss'>
    #maingoods{
        flex:1;
        overflow:auto
    }
</style>


