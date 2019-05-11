<template>
    <div id="login">
        <hd title="登录第五大道"></hd>
        <log></log>
    </div>
</template>
<script>
import hd from '../components/hd'
import log from './login/log'
import { mapState } from 'vuex';
export default {
    computed:{
        ...mapState(['isloginshow'])
    },
    components:{
        hd,
        log
    }
}
</script>
<style scoped lang="scss">
    #login{
        margin:0 auto;
        left:0;
        right:0
    }
</style>


