<template>
    <div id="login">
        login
    </div>
</template>
<script>

import { mapState } from 'vuex';
export default {
    computed:{
        ...mapState(['isloginshow'])
    }
}
</script>

