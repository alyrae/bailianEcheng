<template>
    <div id="login">
        <loginhd></loginhd>
        <log></log>
    </div>
</template>
<script>
import loginhd from './login/loginhd'
import log from './login/log'
import { mapState } from 'vuex';
export default {
    computed:{
        ...mapState(['isloginshow'])
    },
    components:{
        loginhd,
        log
    }
}
</script>

