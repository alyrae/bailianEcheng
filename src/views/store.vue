<template> 
    <div>       
        <storeFixed :class="isFixed?'fixed':''"></storeFixed>
        <storeChild ref="storeChild" v-show="$store.state.isStoreChild"></storeChild>        
    </div>  
</template>  

<script>
import storeFixed from './storeFixed.vue' 
import storeChild from './storeChild.vue'
 
  export default {
    data(){
        return{ 
                     
            isFixed:false
        }
    },
    components:{
        storeFixed,
        storeChild
    },    
    mounted(){
        window.onscroll = this.handleScroll;
         
    },
    destroyed(){
               window.onscroll = null
          },
     methods:{
              handleScroll () 
              {
               
                  if(document.documentElement.scrollTop || document.body.scrollTop >= this.$refs.storeChild.$id){
                  
                        this.isFixed = true;
                  }else{
                
                      this.isFixed = false;
                  }
              }
          }
    
}
</script>
<style lang="scss" scoped>
    .fixed{
        z-index: 1;
        position: fixed;
        top: 0;
        left: 0;
        height: 40px;
        width: 100%;
        background: white;
    }
</style>

