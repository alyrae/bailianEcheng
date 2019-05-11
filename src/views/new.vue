<template>
    <div class="new">
        new
        <vue-element-loading :active="isActive">
            <img src="../assets/load.png" alt="">
        </vue-element-loading>
        
    </div>
</template>
<script>
import VueElementLoading from 'vue-element-loading' 
export default {
    components: {
        VueElementLoading
    },
    data(){
        return {
            isActive: false
        }
    }

}
</script>
