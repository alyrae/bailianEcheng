<template>
    <div class="loginhome">
        <login></login>
        <bottom></bottom>
    </div>
</template>
<script>
import login from './login'
import bottom from './bottom'
export default {
    components:{
        login,
        bottom
    }
}
</script>
<style>
    .loginhome{
        background:#F4F4F4;
        height:100%;
    }
</style>

