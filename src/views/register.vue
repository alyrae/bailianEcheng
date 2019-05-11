<template>
    <div id="register">
        <hd title="用户注册"></hd>
        <reg></reg>
    </div>
</template>
<script>
import reg from './register/reg'
import hd from '../components/hd'
export default {
    components:{
        reg,
        hd
    }
}
</script>
<style scoped lang="scss">
    #register{
        margin:0 auto;
        left:0;
        right:0
    }
</style>




